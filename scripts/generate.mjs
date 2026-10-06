#!/usr/bin/env node
/**
 * Writes nodes/HeyReagent/actions.ts from HeyReagent's own OpenAPI file, so the node always offers
 * exactly the actions the API has, with the API's own words for each input.
 *
 *   node scripts/generate.mjs                 reads https://heyreagent.com/openapi.json
 *   node scripts/generate.mjs openapi.json    reads a local copy
 *
 * One area of the API (a tag) becomes a Resource, one action becomes an Operation, and each input
 * becomes a field: the required ones on the node, the optional ones under "Additional Fields".
 */
import { readFile, writeFile } from 'node:fs/promises';

const SOURCE = 'https://heyreagent.com/openapi.json';
const spec = JSON.parse(process.argv[2] ? await readFile(process.argv[2], 'utf8') : await (await fetch(SOURCE)).text());

const SMALL = new Set(['a', 'an', 'and', 'as', 'at', 'by', 'for', 'in', 'of', 'on', 'or', 'the', 'to', 'with']);
const UPPER = { id: 'ID', ids: 'IDs', url: 'URL', urls: 'URLs', api: 'API', inmail: 'InMail', linkedin: 'LinkedIn', totp: 'TOTP', cv: 'CV', us: 'US' };
const SINGULAR = { Messages: 'Message', Posts: 'Post', Jobs: 'Job' };

const words = (key) => key.replace(/LinkedIn/g, 'Linkedin').replace(/InMail/g, 'Inmail').replace(/([a-z0-9])([A-Z])/g, '$1 $2').replace(/[_-]+/g, ' ').trim().split(/\s+/);
/** "profileUrl" or "send_invitation" as a title: "Profile URL", "Send Invitation". Small words stay small, except at either end. */
const title = (key) => words(key).map((word, i, all) => {
	const lower = word.toLowerCase();
	if (UPPER[lower]) return UPPER[lower];
	if (i > 0 && i < all.length - 1 && SMALL.has(lower)) return lower;
	return lower.charAt(0).toUpperCase() + lower.slice(1);
}).join(' ');
const camel = (text) => words(text).map((word, i) => (i ? word.charAt(0).toUpperCase() + word.slice(1).toLowerCase() : word.toLowerCase())).join('');

/** A description as n8n wants it: starting with a capital, on one line, and with no full stop when it is one sentence. */
function tidy(text) {
	let out = String(text || '').replace(/\s+/g, ' ').trim();
	if (!out) return undefined;
	out = out.charAt(0).toUpperCase() + out.slice(1);
	// n8n writes these two words in capitals wherever they stand alone.
	out = out.replace(/\bids\b/gi, 'IDs').replace(/\bid\b/gi, 'ID').replace(/\burls\b/gi, 'URLs').replace(/\burl\b/gi, 'URL');
	// n8n's rule, counted the way its linter counts: one sentence has no full stop, two end with one.
	const parts = out.replace('e.g.', '').split('. ').length;
	if (parts === 1) out = out.replace(/\.$/, '');
	else if (parts === 2 && !out.endsWith('.')) out += '.';
	return out;
}
const firstSentence = (text) => tidy(String(text || '').split(/\n/)[0].split(/(?<=[.!?])\s+/)[0]);

/** One input of an action as an n8n field that sends itself in the request body. */
function field(key, schema, required) {
	// n8n asks that a yes/no field says "Whether …"; the API's own words follow.
	const said = String(schema.description || '').trim();
	const whether = schema.type === 'boolean' && said && !/^Whether\b/i.test(said) ? `Whether to switch this on. ${said}` : said;
	const base = { displayName: title(key), name: key, description: tidy(whether) };
	// A description that only repeats the name adds nothing.
	if (base.description && base.description.toLowerCase() === base.displayName.toLowerCase()) delete base.description;
	// n8n reads a field called "action" as a list of operations; the API's input of that name is an ordinary choice.
	if (key === 'action') base.name = 'actionChoice';
	const send = { type: 'body', property: key };
	let shape;
	if (Array.isArray(schema.enum) && schema.enum.length) {
		const options = schema.enum.map((value) => ({ name: title(String(value)), value })).sort((a, b) => a.name.localeCompare(b.name));
		shape = { type: 'options', options, default: schema.enum.includes(schema.default) ? schema.default : options[0].value };
	} else if (schema.type === 'boolean') {
		shape = { type: 'boolean', default: schema.default === true };
	} else if (schema.type === 'number' || schema.type === 'integer') {
		const typeOptions = {};
		if (typeof schema.minimum === 'number') typeOptions.minValue = schema.minimum;
		if (typeof schema.maximum === 'number') typeOptions.maxValue = schema.maximum;
		shape = { type: 'number', default: typeof schema.default === 'number' ? schema.default : (typeof schema.minimum === 'number' ? schema.minimum : 0), ...(Object.keys(typeOptions).length ? { typeOptions } : {}) };
		// n8n keeps the name "limit" for its own paging, with a fixed default; this is the API's own input.
		if (key === 'limit') { base.name = 'maxResults'; base.displayName = 'Max Results'; }
	} else if (schema.type === 'array' && schema.items?.type === 'string' && !schema.items.enum) {
		shape = { type: 'string', typeOptions: { multipleValues: true }, default: [] };
	} else if (schema.type === 'array' || schema.type === 'object') {
		shape = { type: 'json', default: schema.type === 'array' ? '[]' : '{}' };
		send.value = '={{ typeof $value === "string" ? JSON.parse($value) : $value }}';
	} else if (schema.format === 'date-time') {
		shape = { type: 'dateTime', default: '' };
	} else {
		shape = { type: 'string', default: typeof schema.default === 'string' ? schema.default : '', ...(schema.format === 'email' ? { placeholder: 'name@email.com' } : {}) };
	}
	return { ...base, ...shape, ...(required ? { required: true } : {}), routing: { send } };
}

const resources = new Map(); // resource value -> { name, value, operations: [] }
for (const [path, item] of Object.entries(spec.paths)) {
	const action = item.post;
	if (!action) continue;
	const tag = action.tags?.[0] || 'Other';
	const name = SINGULAR[tag] || tag;
	const value = camel(name);
	if (!resources.has(value)) resources.set(value, { name, value, operations: [] });
	const body = action.requestBody?.content?.['application/json']?.schema || {};
	const required = new Set(body.required || []);
	const inputs = Object.entries(body.properties || {});
	resources.get(value).operations.push({
		id: action.operationId,
		name: title(action.operationId),
		action: tidy(action.summary) || title(action.operationId),
		description: firstSentence(action.description) || tidy(action.summary),
		path,
		required: inputs.filter(([key]) => required.has(key)).map(([key, schema]) => field(key, schema, true)),
		optional: inputs.filter(([key]) => !required.has(key)).map(([key, schema]) => field(key, schema, false)).sort((a, b) => a.displayName.localeCompare(b.displayName)),
	});
}

const sorted = [...resources.values()].sort((a, b) => a.name.localeCompare(b.name));
const properties = [];
for (const resource of sorted) {
	resource.operations.sort((a, b) => a.name.localeCompare(b.name));
	properties.push({
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: { show: { resource: [resource.value] } },
		options: resource.operations.map((operation) => ({
			name: operation.name,
			value: operation.id,
			action: operation.action,
			description: operation.description,
			routing: {
				// An action with no inputs still has to be sent a JSON body: the API asks for {}.
				request: { method: 'POST', url: operation.path, body: {} },
				// The API answers { ok: true, result: … }: the result is what the next node gets.
				output: { postReceive: [{ type: 'rootProperty', properties: { property: 'result' } }] },
			},
		})),
		default: resource.operations[0].id,
	});
	for (const operation of resource.operations) {
		const show = { resource: [resource.value], operation: [operation.id] };
		for (const input of operation.required) properties.push({ ...input, displayOptions: { show } });
		if (operation.optional.length) {
			properties.push({
				displayName: 'Additional Fields',
				name: 'additionalFields',
				type: 'collection',
				placeholder: 'Add Field',
				default: {},
				displayOptions: { show },
				options: operation.optional,
			});
		}
	}
}

const actions = sorted.reduce((sum, resource) => sum + resource.operations.length, 0);
const file = `// Written by scripts/generate.mjs from ${SOURCE} (${actions} actions). Do not edit by hand: run the script again.
// An action's wording keeps product names as their owners write them (LinkedIn, InMail, Sales Navigator), which the
// sentence-case rule would turn into "linked in" and "in mail".
/* eslint-disable n8n-nodes-base/node-param-operation-option-action-miscased */
import type { INodeProperties, INodePropertyOptions } from 'n8n-workflow';

export const resourceOptions: INodePropertyOptions[] = ${JSON.stringify(sorted.map(({ name, value }) => ({ name, value })), null, '\t')};

export const actionProperties: INodeProperties[] = ${JSON.stringify(properties, null, '\t')};
`;
await writeFile(new URL('../nodes/HeyReagent/actions.ts', import.meta.url), file);
console.log(`${sorted.length} resources, ${actions} actions, ${properties.length} top-level properties written.`);
