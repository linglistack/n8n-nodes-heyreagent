import type {
	IAuthenticateGeneric,
	ICredentialTestRequest,
	ICredentialType,
	Icon,
	INodeProperties,
} from 'n8n-workflow';

export class HeyReagentApi implements ICredentialType {
	name = 'heyReagentApi';

	displayName = 'HeyReagent API';

	icon: Icon = {
		light: 'file:../nodes/HeyReagent/heyreagent.svg',
		dark: 'file:../nodes/HeyReagent/heyreagent.dark.svg',
	};

	documentationUrl =
		'https://github.com/linglistack/n8n-nodes-heyreagent?tab=readme-ov-file#credentials';

	properties: INodeProperties[] = [
		{
			displayName: 'API Key',
			name: 'apiKey',
			type: 'string',
			typeOptions: { password: true },
			required: true,
			default: '',
			description:
				'Your HeyReagent key. Sign in at heyreagent.com, open Menu, then Developers, and create a key. It is shown once.',
		},
	];

	authenticate: IAuthenticateGeneric = {
		type: 'generic',
		properties: {
			headers: {
				Authorization: '=Bearer {{$credentials.apiKey}}',
			},
		},
	};

	// Lists the actions the key's plan includes: answers 200 for a good key and 401 for a bad one.
	test: ICredentialTestRequest = {
		request: {
			baseURL: 'https://api.heyreagent.com',
			url: '/v1/actions',
		},
	};
}
