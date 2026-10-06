import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { actionProperties, resourceOptions } from './actions';

export class HeyReagent implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'HeyReagent',
		name: 'heyReagent',
		icon: { light: 'file:heyreagent.svg', dark: 'file:heyreagent.dark.svg' },
		group: ['transform'],
		version: 1,
		subtitle: '={{$parameter["operation"]}}',
		description:
			'Work with your own LinkedIn account: messages, invitations, search, posts and more',
		defaults: {
			name: 'HeyReagent',
		},
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [{ name: 'heyReagentApi', required: true }],
		requestDefaults: {
			baseURL: 'https://api.heyreagent.com',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
			{
				displayName: 'Resource',
				name: 'resource',
				type: 'options',
				noDataExpression: true,
				options: resourceOptions,
				default: 'message',
			},
			...actionProperties,
		],
	};
}
