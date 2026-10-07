// Written by scripts/generate.mjs from https://heyreagent.com/openapi.json (97 actions). Do not edit by hand: run the script again.
import type { INodeProperties, INodePropertyOptions } from 'n8n-workflow';

export const resourceOptions: INodePropertyOptions[] = [
	{
		name: 'Account',
		value: 'account',
	},
	{
		name: 'InMail',
		value: 'inmail',
	},
	{
		name: 'Insight',
		value: 'insight',
	},
	{
		name: 'Job',
		value: 'job',
	},
	{
		name: 'Message',
		value: 'message',
	},
	{
		name: 'Network',
		value: 'network',
	},
	{
		name: 'Post',
		value: 'post',
	},
	{
		name: 'Profile',
		value: 'profile',
	},
	{
		name: 'Recruiter',
		value: 'recruiter',
	},
	{
		name: 'Sales Navigator',
		value: 'salesNavigator',
	},
	{
		name: 'Search',
		value: 'search',
	},
];

export const actionProperties: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['account'],
			},
		},
		options: [
			{
				name: 'Connect LinkedIn',
				value: 'connect_linkedin',
				action: 'Connect an account',
				description: 'Get a private link where you sign a LinkedIn account in',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/connect_linkedin',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'Get Usage',
				value: 'get_usage',
				action: 'Get usage and limits for today',
				description:
					'Read how many of each LinkedIn action your account used today, and each daily limit',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/get_usage',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'List LinkedIn Accounts',
				value: 'list_linkedin_accounts',
				action: 'List connected accounts',
				description: 'List your connected LinkedIn accounts and whether each one works',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/list_linkedin_accounts',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'Update LinkedIn Connection',
				value: 'update_linkedin_connection',
				action: 'Fix or update a connection',
				description: 'Get a private link where you sign an existing account in again',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/update_linkedin_connection',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
		],
		default: 'get_usage',
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['account'],
				operation: ['connect_linkedin'],
			},
		},
		options: [
			{
				displayName: 'Country',
				name: 'country',
				description:
					'Optional country to pre-select — a name token (e.g. "UNITED_STATES", "UNITED_KINGDOM") or a 2-letter ISO code (e.g. "us", "gb"); the user can change it on the form.',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'country',
					},
				},
			},
			{
				displayName: 'Label',
				name: 'label',
				description: 'Optional friendly name to pre-fill for this sender',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'label',
					},
				},
			},
		],
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['account'],
				operation: ['get_usage'],
			},
		},
		options: [
			{
				displayName: 'Connection ID',
				name: 'connectionId',
				description:
					'Which of your LinkedIn accounts to act from (its ID from list_linkedin_accounts). Omit to use your first live one.',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'connectionId',
					},
				},
			},
		],
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['account'],
				operation: ['list_linkedin_accounts'],
			},
		},
		options: [
			{
				displayName: 'Include All Setups',
				name: 'includeAllSetups',
				description:
					'Whether to switch this on. If true, return every LinkedIn account. Default returns accounts scoped to active setup.',
				type: 'boolean',
				default: false,
				routing: {
					send: {
						type: 'body',
						property: 'includeAllSetups',
					},
				},
			},
		],
	},
	{
		displayName: 'Connection ID',
		name: 'connectionId',
		description: 'The ID of the existing LinkedIn sender to update (from list_linkedin_accounts)',
		type: 'string',
		default: '',
		required: true,
		routing: {
			send: {
				type: 'body',
				property: 'connectionId',
			},
		},
		displayOptions: {
			show: {
				resource: ['account'],
				operation: ['update_linkedin_connection'],
			},
		},
	},
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['inmail'],
			},
		},
		options: [
			{
				name: 'Get InMail Conversation',
				value: 'get_inmail_conversation',
				action: 'Get an inmail conversation',
				description: 'Read one InMail conversation',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/get_inmail_conversation',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'Get InMail Credits',
				value: 'get_inmail_credits',
				action: 'Get inmail credits',
				description: 'Read how many InMail credits each of your accounts has left',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/get_inmail_credits',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'List InMail',
				value: 'list_inmail',
				action: 'List inmail conversations',
				description: 'List your InMail conversations, or every conversation with one person',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/list_inmail',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'List Sales Navigator Contracts',
				value: 'list_sales_navigator_contracts',
				action: 'List sales navigator contracts',
				description:
					'List the Sales Navigator contracts each of your accounts can use, and which is active',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/list_sales_navigator_contracts',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'Switch Sales Navigator Contract',
				value: 'switch_sales_navigator_contract',
				action: 'Switch sales navigator contract',
				description: 'Make another Sales Navigator contract the active one on an account',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/switch_sales_navigator_contract',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
		],
		default: 'get_inmail_conversation',
	},
	{
		displayName: 'Chat ID',
		name: 'chatId',
		description: 'The chatId from list_inmail',
		type: 'string',
		default: '',
		required: true,
		routing: {
			send: {
				type: 'body',
				property: 'chatId',
			},
		},
		displayOptions: {
			show: {
				resource: ['inmail'],
				operation: ['get_inmail_conversation'],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['inmail'],
				operation: ['get_inmail_conversation'],
			},
		},
		options: [
			{
				displayName: 'Connection ID',
				name: 'connectionId',
				description: 'The sender account that owns this thread (optional)',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'connectionId',
					},
				},
			},
			{
				displayName: 'Refresh',
				name: 'refresh',
				description:
					"Whether to switch this on. true = first re-sync this conversation from LinkedIn, then read (slower, up to ~25s). Use when messages you know were sent — e.g. from the LinkedIn or Sales Navigator UI — are missing. The result's refresh field reports how the re-sync went.",
				type: 'boolean',
				default: false,
				routing: {
					send: {
						type: 'body',
						property: 'refresh',
					},
				},
			},
		],
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['inmail'],
				operation: ['get_inmail_credits'],
			},
		},
		options: [
			{
				displayName: 'Connection ID',
				name: 'connectionId',
				description:
					'One LinkedIn account ID (list_linkedin_accounts). Omit for all accounts on the active setup.',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'connectionId',
					},
				},
			},
			{
				displayName: 'Include All Setups',
				name: 'includeAllSetups',
				description:
					'Whether to switch this on. With no connectionId: read accounts across every setup, not just the active one.',
				type: 'boolean',
				default: false,
				routing: {
					send: {
						type: 'body',
						property: 'includeAllSetups',
					},
				},
			},
		],
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['inmail'],
				operation: ['list_inmail'],
			},
		},
		options: [
			{
				displayName: 'Awaiting Reply Only',
				name: 'awaitingReplyOnly',
				description:
					'Whether to switch this on. Only threads where the other person wrote last (they are waiting on you).',
				type: 'boolean',
				default: false,
				routing: {
					send: {
						type: 'body',
						property: 'awaitingReplyOnly',
					},
				},
			},
			{
				displayName: 'Connection ID',
				name: 'connectionId',
				description:
					'Only this sender account (its linkedinConnections _id). Omit to read every live sender on the active setup.',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'connectionId',
					},
				},
			},
			{
				displayName: 'Max Results',
				name: 'maxResults',
				description: 'Max threads to return (default 25, max 100)',
				type: 'number',
				default: 1,
				typeOptions: {
					minValue: 1,
					maxValue: 100,
				},
				routing: {
					send: {
						type: 'body',
						property: 'limit',
					},
				},
			},
			{
				displayName: 'Profile URL',
				name: 'profileUrl',
				description:
					"The person's LinkedIn profile URL (linkedin.com/in/…) or Sales Navigator lead URL. Returns every conversation with that one person — InMail and classic, each tagged by inbox — instead of scanning the inbox.",
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'profileUrl',
					},
				},
			},
			{
				displayName: 'Search',
				name: 'search',
				description:
					'Filter by participant name, headline or latest message text. Ranked: name/headline matches first, then latest-message matches, each newest first; every row says matchedBy. To find one known person, prefer profileUrl.',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'search',
					},
				},
			},
			{
				displayName: 'Sync Inbox',
				name: 'syncInbox',
				description:
					"Whether to switch this on. true = first pull the ACTIVE Sales Navigator contract's InMail inbox from LinkedIn (after a contract switch, or when threads seem missing), then read. Slower (~25s).",
				type: 'boolean',
				default: false,
				routing: {
					send: {
						type: 'body',
						property: 'syncInbox',
					},
				},
			},
			{
				displayName: 'Unread Only',
				name: 'unreadOnly',
				description: 'Whether to switch this on. Only threads with unread messages.',
				type: 'boolean',
				default: false,
				routing: {
					send: {
						type: 'body',
						property: 'unreadOnly',
					},
				},
			},
		],
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['inmail'],
				operation: ['list_sales_navigator_contracts'],
			},
		},
		options: [
			{
				displayName: 'Connection ID',
				name: 'connectionId',
				description:
					'One LinkedIn account ID (list_linkedin_accounts). Omit for all accounts on the active setup.',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'connectionId',
					},
				},
			},
			{
				displayName: 'Include All Setups',
				name: 'includeAllSetups',
				description:
					'Whether to switch this on. With no connectionId: accounts across every setup, not just the active one.',
				type: 'boolean',
				default: false,
				routing: {
					send: {
						type: 'body',
						property: 'includeAllSetups',
					},
				},
			},
		],
	},
	{
		displayName: 'Connection ID',
		name: 'connectionId',
		description:
			'The LinkedIn account ID (list_linkedin_accounts / list_sales_navigator_contracts)',
		type: 'string',
		default: '',
		required: true,
		routing: {
			send: {
				type: 'body',
				property: 'connectionId',
			},
		},
		displayOptions: {
			show: {
				resource: ['inmail'],
				operation: ['switch_sales_navigator_contract'],
			},
		},
	},
	{
		displayName: 'Contract ID',
		name: 'contractId',
		description:
			'The Sales Navigator contract ID to make active (from list_sales_navigator_contracts), e.g. "SALES_2062952500"',
		type: 'string',
		default: '',
		required: true,
		routing: {
			send: {
				type: 'body',
				property: 'contractId',
			},
		},
		displayOptions: {
			show: {
				resource: ['inmail'],
				operation: ['switch_sales_navigator_contract'],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['inmail'],
				operation: ['switch_sales_navigator_contract'],
			},
		},
		options: [
			{
				displayName: 'Confirm',
				name: 'confirm',
				description:
					'Whether to switch this on. false (default) = preview only, nothing changes. true = switch now (only after the user said yes).',
				type: 'boolean',
				default: false,
				routing: {
					send: {
						type: 'body',
						property: 'confirm',
					},
				},
			},
		],
	},
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['insight'],
			},
		},
		options: [
			{
				name: 'Connections Never Messaged',
				value: 'connections_never_messaged',
				action: 'Connections I never messaged',
				description: 'List your connections you never exchanged a message with',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/connections_never_messaged',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'Engagers Not Connected',
				value: 'engagers_not_connected',
				action: 'Engagers I am not connected to',
				description:
					'List the people who reacted to or commented on a post and are not your connections',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/engagers_not_connected',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'Who Is Waiting on Me',
				value: 'who_is_waiting_on_me',
				action: 'Who is waiting on my reply',
				description: 'List the people whose last message you have not answered',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/who_is_waiting_on_me',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'Who Went Cold',
				value: 'who_went_cold',
				action: 'Who went cold',
				description: 'List the conversations that went quiet',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/who_went_cold',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
		],
		default: 'connections_never_messaged',
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['insight'],
				operation: ['connections_never_messaged'],
			},
		},
		options: [
			{
				displayName: 'Connection ID',
				name: 'connectionId',
				description:
					'Restrict to one LinkedIn sender. Omit to span all live senders in this setup.',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'connectionId',
					},
				},
			},
			{
				displayName: 'Max Results',
				name: 'maxResults',
				description:
					'Max leads to return (1–200, default 100). The full never-messaged count is always reported.',
				type: 'number',
				default: 1,
				typeOptions: {
					minValue: 1,
					maxValue: 200,
				},
				routing: {
					send: {
						type: 'body',
						property: 'limit',
					},
				},
			},
			{
				displayName: 'Refresh',
				name: 'refresh',
				description:
					'Whether to switch this on. true = pull the latest connections live before the join. false (default) = use the cached connection list.',
				type: 'boolean',
				default: false,
				routing: {
					send: {
						type: 'body',
						property: 'refresh',
					},
				},
			},
			{
				displayName: 'Since',
				name: 'since',
				description:
					"ISO date. Only consider connections made on/after this date (e.g. focus on recent connects you haven't reached out to).",
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'since',
					},
				},
			},
		],
	},
	{
		displayName: 'Post URL',
		name: 'postUrl',
		description: 'The LinkedIn post URL (activity/share/ugcPost URL)',
		type: 'string',
		default: '',
		required: true,
		routing: {
			send: {
				type: 'body',
				property: 'postUrl',
			},
		},
		displayOptions: {
			show: {
				resource: ['insight'],
				operation: ['engagers_not_connected'],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['insight'],
				operation: ['engagers_not_connected'],
			},
		},
		options: [
			{
				displayName: 'Connection ID',
				name: 'connectionId',
				description: 'Which sender to read through. Omit to use the first live sender.',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'connectionId',
					},
				},
			},
			{
				displayName: 'Max Comments',
				name: 'maxComments',
				description: 'Max commenters to scan (1–100, default 100)',
				type: 'number',
				default: 1,
				typeOptions: {
					minValue: 1,
					maxValue: 100,
				},
				routing: {
					send: {
						type: 'body',
						property: 'maxComments',
					},
				},
			},
			{
				displayName: 'Max Reactions',
				name: 'maxReactions',
				description: 'Max reactors to scan (1–100, default 100)',
				type: 'number',
				default: 1,
				typeOptions: {
					minValue: 1,
					maxValue: 100,
				},
				routing: {
					send: {
						type: 'body',
						property: 'maxReactions',
					},
				},
			},
			{
				displayName: 'Max Results',
				name: 'maxResults',
				description: 'Max leads to return (1–200, default 100)',
				type: 'number',
				default: 1,
				typeOptions: {
					minValue: 1,
					maxValue: 200,
				},
				routing: {
					send: {
						type: 'body',
						property: 'limit',
					},
				},
			},
		],
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['insight'],
				operation: ['who_is_waiting_on_me'],
			},
		},
		options: [
			{
				displayName: 'Connection ID',
				name: 'connectionId',
				description:
					'Restrict to one LinkedIn sender. Omit to span all live senders in this setup.',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'connectionId',
					},
				},
			},
			{
				displayName: 'Max Results',
				name: 'maxResults',
				description: 'Max people to return (1–200, default 100)',
				type: 'number',
				default: 1,
				typeOptions: {
					minValue: 1,
					maxValue: 200,
				},
				routing: {
					send: {
						type: 'body',
						property: 'limit',
					},
				},
			},
		],
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['insight'],
				operation: ['who_went_cold'],
			},
		},
		options: [
			{
				displayName: 'Connection ID',
				name: 'connectionId',
				description: 'Restrict to one LinkedIn sender. Omit to span all live senders.',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'connectionId',
					},
				},
			},
			{
				displayName: 'Days',
				name: 'days',
				description:
					"Consider a conversation cold when there's been no message for at least this many days (default 14)",
				type: 'number',
				default: 1,
				typeOptions: {
					minValue: 1,
					maxValue: 365,
				},
				routing: {
					send: {
						type: 'body',
						property: 'days',
					},
				},
			},
			{
				displayName: 'Max Results',
				name: 'maxResults',
				description: 'Max threads to return (1–200, default 100)',
				type: 'number',
				default: 1,
				typeOptions: {
					minValue: 1,
					maxValue: 200,
				},
				routing: {
					send: {
						type: 'body',
						property: 'limit',
					},
				},
			},
			{
				displayName: 'Only with Reply',
				name: 'onlyWithReply',
				description:
					'Whether to switch this on. true = only threads where the other person replied at least once (skips pure no-response outreach). Requires the full thread to be synced.',
				type: 'boolean',
				default: false,
				routing: {
					send: {
						type: 'body',
						property: 'onlyWithReply',
					},
				},
			},
		],
	},
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['job'],
			},
		},
		options: [
			{
				name: 'Close Job Posting',
				value: 'close_job_posting',
				action: 'Close a job posting',
				description: 'Close one of your job postings for good',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/close_job_posting',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'Create Job Posting',
				value: 'create_job_posting',
				action: 'Create a job posting draft',
				description: 'Create a job posting as a draft',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/create_job_posting',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'Edit Job Posting',
				value: 'edit_job_posting',
				action: 'Edit a job posting',
				description: 'Change one of your job postings',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/edit_job_posting',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'Get Job Applicant',
				value: 'get_job_applicant',
				action: 'Get an applicant',
				description: 'Read one applicant, with their answers to the screening questions',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/get_job_applicant',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'Get Job Applicant Resume',
				value: 'get_job_applicant_resume',
				action: 'Download the resume of an applicant',
				description: "Download one applicant's resume",
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/get_job_applicant_resume',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'Get Job Posting',
				value: 'get_job_posting',
				action: 'Get a job posting',
				description: 'Read one of your job postings',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/get_job_posting',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'List Job Applicants',
				value: 'list_job_applicants',
				action: 'List the applicants of a job posting',
				description: 'List who applied to one of your job postings',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/list_job_applicants',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'List Job Postings',
				value: 'list_job_postings',
				action: 'List my job postings',
				description: 'List your job postings: open, drafts or closed',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/list_job_postings',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'Publish Job Posting',
				value: 'publish_job_posting',
				action: 'Publish a job posting',
				description: 'Publish a job posting draft, free or promoted',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/publish_job_posting',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'Solve Job Posting Checkpoint',
				value: 'solve_job_posting_checkpoint',
				action: 'Finish a job posting verification',
				description: 'Finish publishing a job posting with the code LinkedIn sent',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/solve_job_posting_checkpoint',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
		],
		default: 'get_job_applicant',
	},
	{
		displayName: 'Job ID',
		name: 'jobId',
		description: 'The job posting ID (from list_job_postings)',
		type: 'string',
		default: '',
		required: true,
		routing: {
			send: {
				type: 'body',
				property: 'jobId',
			},
		},
		displayOptions: {
			show: {
				resource: ['job'],
				operation: ['close_job_posting'],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['job'],
				operation: ['close_job_posting'],
			},
		},
		options: [
			{
				displayName: 'Connection ID',
				name: 'connectionId',
				description:
					'Which of your LinkedIn accounts to act from (its ID from list_linkedin_accounts). Omit to use your first live one.',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'connectionId',
					},
				},
			},
			{
				displayName: 'Service',
				name: 'service',
				description: 'Which LinkedIn product the job posting belongs to (default CLASSIC)',
				type: 'options',
				options: [
					{
						name: 'Classic',
						value: 'CLASSIC',
					},
					{
						name: 'Recruiter',
						value: 'RECRUITER',
					},
				],
				default: 'CLASSIC',
				routing: {
					send: {
						type: 'body',
						property: 'service',
					},
				},
			},
		],
	},
	{
		displayName: 'Job Title',
		name: 'jobTitle',
		type: 'json',
		default: '{}',
		required: true,
		routing: {
			send: {
				type: 'body',
				property: 'jobTitle',
				value: '={{ typeof $value === "string" ? JSON.parse($value) : $value }}',
			},
		},
		displayOptions: {
			show: {
				resource: ['job'],
				operation: ['create_job_posting'],
			},
		},
	},
	{
		displayName: 'Company',
		name: 'company',
		type: 'json',
		default: '{}',
		required: true,
		routing: {
			send: {
				type: 'body',
				property: 'company',
				value: '={{ typeof $value === "string" ? JSON.parse($value) : $value }}',
			},
		},
		displayOptions: {
			show: {
				resource: ['job'],
				operation: ['create_job_posting'],
			},
		},
	},
	{
		displayName: 'Workplace',
		name: 'workplace',
		type: 'options',
		options: [
			{
				name: 'Hybrid',
				value: 'HYBRID',
			},
			{
				name: 'On Site',
				value: 'ON_SITE',
			},
			{
				name: 'Remote',
				value: 'REMOTE',
			},
		],
		default: 'HYBRID',
		required: true,
		routing: {
			send: {
				type: 'body',
				property: 'workplace',
			},
		},
		displayOptions: {
			show: {
				resource: ['job'],
				operation: ['create_job_posting'],
			},
		},
	},
	{
		displayName: 'Location',
		name: 'location',
		description: "LinkedIn's ID for the place (lookup_search_ids type LOCATION)",
		type: 'string',
		default: '',
		required: true,
		routing: {
			send: {
				type: 'body',
				property: 'location',
			},
		},
		displayOptions: {
			show: {
				resource: ['job'],
				operation: ['create_job_posting'],
			},
		},
	},
	{
		displayName: 'Description',
		name: 'description',
		description: 'The job description. HTML tags may be used to structure it.',
		type: 'string',
		default: '',
		required: true,
		routing: {
			send: {
				type: 'body',
				property: 'description',
			},
		},
		displayOptions: {
			show: {
				resource: ['job'],
				operation: ['create_job_posting'],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['job'],
				operation: ['create_job_posting'],
			},
		},
		options: [
			{
				displayName: 'Apply Method',
				name: 'applyMethod',
				description:
					'How people apply: on LinkedIn (applications are emailed to notificationEmail) or on an external site',
				type: 'json',
				default: '{}',
				routing: {
					send: {
						type: 'body',
						property: 'applyMethod',
						value: '={{ typeof $value === "string" ? JSON.parse($value) : $value }}',
					},
				},
			},
			{
				displayName: 'Auto Rejection Template',
				name: 'autoRejectionTemplate',
				description:
					'Message sent automatically to applicants who do not pass the screening questions',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'autoRejectionTemplate',
					},
				},
			},
			{
				displayName: 'Connection ID',
				name: 'connectionId',
				description:
					'Which of your LinkedIn accounts to act from (its ID from list_linkedin_accounts). Omit to use your first live one.',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'connectionId',
					},
				},
			},
			{
				displayName: 'Employment Status',
				name: 'employmentStatus',
				type: 'options',
				options: [
					{
						name: 'Contract',
						value: 'CONTRACT',
					},
					{
						name: 'Full Time',
						value: 'FULL_TIME',
					},
					{
						name: 'Internship',
						value: 'INTERNSHIP',
					},
					{
						name: 'Other',
						value: 'OTHER',
					},
					{
						name: 'Part Time',
						value: 'PART_TIME',
					},
					{
						name: 'Temporary',
						value: 'TEMPORARY',
					},
					{
						name: 'Volunteer',
						value: 'VOLUNTEER',
					},
				],
				default: 'CONTRACT',
				routing: {
					send: {
						type: 'body',
						property: 'employmentStatus',
					},
				},
			},
			{
				displayName: 'Recruiter',
				name: 'recruiter',
				description:
					'Recruiter job postings only. To create one LinkedIn requires project, functions, industries, seniority and applyMethod.',
				type: 'json',
				default: '{}',
				routing: {
					send: {
						type: 'body',
						property: 'recruiter',
						value: '={{ typeof $value === "string" ? JSON.parse($value) : $value }}',
					},
				},
			},
			{
				displayName: 'Screening Questions',
				name: 'screeningQuestions',
				description: 'Questions applicants must answer',
				type: 'json',
				default: '[]',
				routing: {
					send: {
						type: 'body',
						property: 'screeningQuestions',
						value: '={{ typeof $value === "string" ? JSON.parse($value) : $value }}',
					},
				},
			},
		],
	},
	{
		displayName: 'Job ID',
		name: 'jobId',
		description: 'The job posting ID (from list_job_postings)',
		type: 'string',
		default: '',
		required: true,
		routing: {
			send: {
				type: 'body',
				property: 'jobId',
			},
		},
		displayOptions: {
			show: {
				resource: ['job'],
				operation: ['edit_job_posting'],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['job'],
				operation: ['edit_job_posting'],
			},
		},
		options: [
			{
				displayName: 'Apply Method',
				name: 'applyMethod',
				description:
					'How people apply: on LinkedIn (applications are emailed to notificationEmail) or on an external site',
				type: 'json',
				default: '{}',
				routing: {
					send: {
						type: 'body',
						property: 'applyMethod',
						value: '={{ typeof $value === "string" ? JSON.parse($value) : $value }}',
					},
				},
			},
			{
				displayName: 'Auto Rejection Template',
				name: 'autoRejectionTemplate',
				description:
					'Message sent automatically to applicants who do not pass the screening questions',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'autoRejectionTemplate',
					},
				},
			},
			{
				displayName: 'Company',
				name: 'company',
				type: 'json',
				default: '{}',
				routing: {
					send: {
						type: 'body',
						property: 'company',
						value: '={{ typeof $value === "string" ? JSON.parse($value) : $value }}',
					},
				},
			},
			{
				displayName: 'Connection ID',
				name: 'connectionId',
				description:
					'Which of your LinkedIn accounts to act from (its ID from list_linkedin_accounts). Omit to use your first live one.',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'connectionId',
					},
				},
			},
			{
				displayName: 'Description',
				name: 'description',
				description: 'The job description. HTML tags may be used to structure it.',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'description',
					},
				},
			},
			{
				displayName: 'Employment Status',
				name: 'employmentStatus',
				type: 'options',
				options: [
					{
						name: 'Contract',
						value: 'CONTRACT',
					},
					{
						name: 'Full Time',
						value: 'FULL_TIME',
					},
					{
						name: 'Internship',
						value: 'INTERNSHIP',
					},
					{
						name: 'Other',
						value: 'OTHER',
					},
					{
						name: 'Part Time',
						value: 'PART_TIME',
					},
					{
						name: 'Temporary',
						value: 'TEMPORARY',
					},
					{
						name: 'Volunteer',
						value: 'VOLUNTEER',
					},
				],
				default: 'CONTRACT',
				routing: {
					send: {
						type: 'body',
						property: 'employmentStatus',
					},
				},
			},
			{
				displayName: 'Job Title',
				name: 'jobTitle',
				type: 'json',
				default: '{}',
				routing: {
					send: {
						type: 'body',
						property: 'jobTitle',
						value: '={{ typeof $value === "string" ? JSON.parse($value) : $value }}',
					},
				},
			},
			{
				displayName: 'Location',
				name: 'location',
				description: "LinkedIn's ID for the place (lookup_search_ids type LOCATION)",
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'location',
					},
				},
			},
			{
				displayName: 'Recruiter',
				name: 'recruiter',
				description:
					'Recruiter job postings only. To create one LinkedIn requires project, functions, industries, seniority and applyMethod.',
				type: 'json',
				default: '{}',
				routing: {
					send: {
						type: 'body',
						property: 'recruiter',
						value: '={{ typeof $value === "string" ? JSON.parse($value) : $value }}',
					},
				},
			},
			{
				displayName: 'Screening Questions',
				name: 'screeningQuestions',
				description: 'Questions applicants must answer',
				type: 'json',
				default: '[]',
				routing: {
					send: {
						type: 'body',
						property: 'screeningQuestions',
						value: '={{ typeof $value === "string" ? JSON.parse($value) : $value }}',
					},
				},
			},
			{
				displayName: 'Workplace',
				name: 'workplace',
				type: 'options',
				options: [
					{
						name: 'Hybrid',
						value: 'HYBRID',
					},
					{
						name: 'On Site',
						value: 'ON_SITE',
					},
					{
						name: 'Remote',
						value: 'REMOTE',
					},
				],
				default: 'HYBRID',
				routing: {
					send: {
						type: 'body',
						property: 'workplace',
					},
				},
			},
		],
	},
	{
		displayName: 'Applicant ID',
		name: 'applicantId',
		description: 'The applicant ID (from list_job_applicants)',
		type: 'string',
		default: '',
		required: true,
		routing: {
			send: {
				type: 'body',
				property: 'applicantId',
			},
		},
		displayOptions: {
			show: {
				resource: ['job'],
				operation: ['get_job_applicant'],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['job'],
				operation: ['get_job_applicant'],
			},
		},
		options: [
			{
				displayName: 'Connection ID',
				name: 'connectionId',
				description:
					'Which of your LinkedIn accounts to act from (its ID from list_linkedin_accounts). Omit to use your first live one.',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'connectionId',
					},
				},
			},
		],
	},
	{
		displayName: 'Applicant ID',
		name: 'applicantId',
		description: 'The applicant ID (from list_job_applicants)',
		type: 'string',
		default: '',
		required: true,
		routing: {
			send: {
				type: 'body',
				property: 'applicantId',
			},
		},
		displayOptions: {
			show: {
				resource: ['job'],
				operation: ['get_job_applicant_resume'],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['job'],
				operation: ['get_job_applicant_resume'],
			},
		},
		options: [
			{
				displayName: 'Connection ID',
				name: 'connectionId',
				description:
					'Which of your LinkedIn accounts to act from (its ID from list_linkedin_accounts). Omit to use your first live one.',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'connectionId',
					},
				},
			},
			{
				displayName: 'Service',
				name: 'service',
				description: 'Which LinkedIn product the job posting belongs to (default CLASSIC)',
				type: 'options',
				options: [
					{
						name: 'Classic',
						value: 'CLASSIC',
					},
					{
						name: 'Recruiter',
						value: 'RECRUITER',
					},
				],
				default: 'CLASSIC',
				routing: {
					send: {
						type: 'body',
						property: 'service',
					},
				},
			},
		],
	},
	{
		displayName: 'Job ID',
		name: 'jobId',
		description: 'The job posting ID (from list_job_postings)',
		type: 'string',
		default: '',
		required: true,
		routing: {
			send: {
				type: 'body',
				property: 'jobId',
			},
		},
		displayOptions: {
			show: {
				resource: ['job'],
				operation: ['get_job_posting'],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['job'],
				operation: ['get_job_posting'],
			},
		},
		options: [
			{
				displayName: 'Connection ID',
				name: 'connectionId',
				description:
					'Which of your LinkedIn accounts to act from (its ID from list_linkedin_accounts). Omit to use your first live one.',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'connectionId',
					},
				},
			},
			{
				displayName: 'Service',
				name: 'service',
				description: 'Which LinkedIn product the job posting belongs to (default CLASSIC)',
				type: 'options',
				options: [
					{
						name: 'Classic',
						value: 'CLASSIC',
					},
					{
						name: 'Recruiter',
						value: 'RECRUITER',
					},
				],
				default: 'CLASSIC',
				routing: {
					send: {
						type: 'body',
						property: 'service',
					},
				},
			},
		],
	},
	{
		displayName: 'Job ID',
		name: 'jobId',
		description: 'The job posting ID (from list_job_postings)',
		type: 'string',
		default: '',
		required: true,
		routing: {
			send: {
				type: 'body',
				property: 'jobId',
			},
		},
		displayOptions: {
			show: {
				resource: ['job'],
				operation: ['list_job_applicants'],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['job'],
				operation: ['list_job_applicants'],
			},
		},
		options: [
			{
				displayName: 'Connection ID',
				name: 'connectionId',
				description:
					'Which of your LinkedIn accounts to act from (its ID from list_linkedin_accounts). Omit to use your first live one.',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'connectionId',
					},
				},
			},
			{
				displayName: 'Cursor',
				name: 'cursor',
				description:
					'NextCursor from the previous call, to get the next page. Keep the other arguments the same.',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'cursor',
					},
				},
			},
			{
				displayName: 'Exclude Degree',
				name: 'excludeDegree',
				description: 'RECRUITER only: degree IDs to exclude',
				type: 'string',
				typeOptions: {
					multipleValues: true,
				},
				default: [],
				routing: {
					send: {
						type: 'body',
						property: 'excludeDegree',
					},
				},
			},
			{
				displayName: 'Include Archived',
				name: 'includeArchived',
				description: 'Whether to switch this on. RECRUITER only: include archived applicants.',
				type: 'boolean',
				default: false,
				routing: {
					send: {
						type: 'body',
						property: 'includeArchived',
					},
				},
			},
			{
				displayName: 'Include Degree',
				name: 'includeDegree',
				description: 'RECRUITER only: degree IDs to include (lookup_search_ids type DEGREE)',
				type: 'string',
				typeOptions: {
					multipleValues: true,
				},
				default: [],
				routing: {
					send: {
						type: 'body',
						property: 'includeDegree',
					},
				},
			},
			{
				displayName: 'Keywords',
				name: 'keywords',
				description: 'Only applicants matching these words',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'keywords',
					},
				},
			},
			{
				displayName: 'Max Results',
				name: 'maxResults',
				description: 'How many to return (1–100, default 25)',
				type: 'number',
				default: 1,
				typeOptions: {
					minValue: 1,
					maxValue: 100,
				},
				routing: {
					send: {
						type: 'body',
						property: 'limit',
					},
				},
			},
			{
				displayName: 'Ratings',
				name: 'ratings',
				description: 'CLASSIC only: only these ratings',
				type: 'json',
				default: '[]',
				routing: {
					send: {
						type: 'body',
						property: 'ratings',
						value: '={{ typeof $value === "string" ? JSON.parse($value) : $value }}',
					},
				},
			},
			{
				displayName: 'Service',
				name: 'service',
				description: 'Which LinkedIn product the job posting belongs to (default CLASSIC)',
				type: 'options',
				options: [
					{
						name: 'Classic',
						value: 'CLASSIC',
					},
					{
						name: 'Recruiter',
						value: 'RECRUITER',
					},
				],
				default: 'CLASSIC',
				routing: {
					send: {
						type: 'body',
						property: 'service',
					},
				},
			},
			{
				displayName: 'Sort By',
				name: 'sortBy',
				description: 'RECRUITER only',
				type: 'options',
				options: [
					{
						name: 'Alphabetical',
						value: 'alphabetical',
					},
					{
						name: 'Newest First',
						value: 'newest_first',
					},
					{
						name: 'Relevance',
						value: 'relevance',
					},
					{
						name: 'Screening Requirements',
						value: 'screening_requirements',
					},
				],
				default: 'alphabetical',
				routing: {
					send: {
						type: 'body',
						property: 'sortBy',
					},
				},
			},
			{
				displayName: 'Years in Company',
				name: 'yearsInCompany',
				description: 'RECRUITER only: years in current company',
				type: 'json',
				default: '{}',
				routing: {
					send: {
						type: 'body',
						property: 'yearsInCompany',
						value: '={{ typeof $value === "string" ? JSON.parse($value) : $value }}',
					},
				},
			},
			{
				displayName: 'Years in Position',
				name: 'yearsInPosition',
				description: 'RECRUITER only: years in current position',
				type: 'json',
				default: '{}',
				routing: {
					send: {
						type: 'body',
						property: 'yearsInPosition',
						value: '={{ typeof $value === "string" ? JSON.parse($value) : $value }}',
					},
				},
			},
			{
				displayName: 'Years of Experience',
				name: 'yearsOfExperience',
				description: 'RECRUITER only',
				type: 'json',
				default: '{}',
				routing: {
					send: {
						type: 'body',
						property: 'yearsOfExperience',
						value: '={{ typeof $value === "string" ? JSON.parse($value) : $value }}',
					},
				},
			},
		],
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['job'],
				operation: ['list_job_postings'],
			},
		},
		options: [
			{
				displayName: 'Category',
				name: 'category',
				description: 'Which postings (default active)',
				type: 'options',
				options: [
					{
						name: 'Active',
						value: 'active',
					},
					{
						name: 'Closed',
						value: 'closed',
					},
					{
						name: 'Draft',
						value: 'draft',
					},
				],
				default: 'active',
				routing: {
					send: {
						type: 'body',
						property: 'category',
					},
				},
			},
			{
				displayName: 'Connection ID',
				name: 'connectionId',
				description:
					'Which of your LinkedIn accounts to act from (its ID from list_linkedin_accounts). Omit to use your first live one.',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'connectionId',
					},
				},
			},
			{
				displayName: 'Cursor',
				name: 'cursor',
				description:
					'NextCursor from the previous call, to get the next page. Keep the other arguments the same.',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'cursor',
					},
				},
			},
			{
				displayName: 'Max Results',
				name: 'maxResults',
				description: 'How many to return (1–100, default 25)',
				type: 'number',
				default: 1,
				typeOptions: {
					minValue: 1,
					maxValue: 100,
				},
				routing: {
					send: {
						type: 'body',
						property: 'limit',
					},
				},
			},
		],
	},
	{
		displayName: 'Draft ID',
		name: 'draftId',
		description: 'The draft ID (from create_job_posting, or list_job_postings category draft)',
		type: 'string',
		default: '',
		required: true,
		routing: {
			send: {
				type: 'body',
				property: 'draftId',
			},
		},
		displayOptions: {
			show: {
				resource: ['job'],
				operation: ['publish_job_posting'],
			},
		},
	},
	{
		displayName: 'Mode',
		name: 'mode',
		description:
			'FREE costs nothing. PROMOTED and PROMOTED_PLUS (ordinary postings only) are paid.',
		type: 'options',
		options: [
			{
				name: 'Free',
				value: 'FREE',
			},
			{
				name: 'Promoted',
				value: 'PROMOTED',
			},
			{
				name: 'Promoted Plus',
				value: 'PROMOTED_PLUS',
			},
		],
		default: 'FREE',
		required: true,
		routing: {
			send: {
				type: 'body',
				property: 'mode',
			},
		},
		displayOptions: {
			show: {
				resource: ['job'],
				operation: ['publish_job_posting'],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['job'],
				operation: ['publish_job_posting'],
			},
		},
		options: [
			{
				displayName: 'Budget',
				name: 'budget',
				description: 'Paid modes only: the most to spend per day or per month',
				type: 'json',
				default: '{}',
				routing: {
					send: {
						type: 'body',
						property: 'budget',
						value: '={{ typeof $value === "string" ? JSON.parse($value) : $value }}',
					},
				},
			},
			{
				displayName: 'Bypass Email Verification',
				name: 'bypassEmailVerification',
				description:
					"Whether to switch this on. Skip LinkedIn's check that you may post for this company.",
				type: 'boolean',
				default: false,
				routing: {
					send: {
						type: 'body',
						property: 'bypassEmailVerification',
					},
				},
			},
			{
				displayName: 'Connection ID',
				name: 'connectionId',
				description:
					'Which of your LinkedIn accounts to act from (its ID from list_linkedin_accounts). Omit to use your first live one.',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'connectionId',
					},
				},
			},
			{
				displayName: 'Hiring Photo Frame',
				name: 'hiringPhotoFrame',
				description: 'Whether to switch this on. Add the #Hiring frame to your profile picture.',
				type: 'boolean',
				default: false,
				routing: {
					send: {
						type: 'body',
						property: 'hiringPhotoFrame',
					},
				},
			},
			{
				displayName: 'Service',
				name: 'service',
				description: 'Which LinkedIn product the job posting belongs to (default CLASSIC)',
				type: 'options',
				options: [
					{
						name: 'Classic',
						value: 'CLASSIC',
					},
					{
						name: 'Recruiter',
						value: 'RECRUITER',
					},
				],
				default: 'CLASSIC',
				routing: {
					send: {
						type: 'body',
						property: 'service',
					},
				},
			},
		],
	},
	{
		displayName: 'Draft ID',
		name: 'draftId',
		description: 'The draft ID whose publishing is waiting',
		type: 'string',
		default: '',
		required: true,
		routing: {
			send: {
				type: 'body',
				property: 'draftId',
			},
		},
		displayOptions: {
			show: {
				resource: ['job'],
				operation: ['solve_job_posting_checkpoint'],
			},
		},
	},
	{
		displayName: 'Code',
		name: 'code',
		description: 'The verification code LinkedIn sent',
		type: 'string',
		default: '',
		required: true,
		routing: {
			send: {
				type: 'body',
				property: 'code',
			},
		},
		displayOptions: {
			show: {
				resource: ['job'],
				operation: ['solve_job_posting_checkpoint'],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['job'],
				operation: ['solve_job_posting_checkpoint'],
			},
		},
		options: [
			{
				displayName: 'Connection ID',
				name: 'connectionId',
				description:
					'Which of your LinkedIn accounts to act from (its ID from list_linkedin_accounts). Omit to use your first live one.',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'connectionId',
					},
				},
			},
		],
	},
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['message'],
			},
		},
		options: [
			{
				name: 'Delete Chat',
				value: 'delete_chat',
				action: 'Delete a chat',
				description: 'Delete one conversation',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/delete_chat',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'Delete Message',
				value: 'delete_message',
				action: 'Delete a sent message',
				description: 'Delete a message you sent',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/delete_message',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'Edit Message',
				value: 'edit_message',
				action: 'Edit a sent message',
				description: 'Change the text of a message you sent',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/edit_message',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'Get Chat',
				value: 'get_chat',
				action: 'Get a chat',
				description: 'Read one conversation',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/get_chat',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'Get Chat Attendee',
				value: 'get_chat_attendee',
				action: 'Get a chat participant',
				description: 'Read one participant of your conversations',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/get_chat_attendee',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'Get Chat Attendee Picture',
				value: 'get_chat_attendee_picture',
				action: 'Download the picture of a participant',
				description: "Download one participant's picture",
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/get_chat_attendee_picture',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'Get Conversation',
				value: 'get_conversation',
				action: 'Get a conversation',
				description: 'Read your whole conversation with one person',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/get_conversation',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'Get Message',
				value: 'get_message',
				action: 'Get a message',
				description: 'Read one message',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/get_message',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'Get Message Attachment',
				value: 'get_message_attachment',
				action: 'Download a message attachment',
				description: 'Download one file attached to a message',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/get_message_attachment',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'Get Send Status',
				value: 'get_send_status',
				action: 'Check how an inbox refresh ended',
				description: 'Check how a background inbox refresh ended',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/get_send_status',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'List Attendee Chats',
				value: 'list_attendee_chats',
				action: 'List my chats with one person',
				description: 'List your one-to-one conversations with one person',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/list_attendee_chats',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'List Attendee Messages',
				value: 'list_attendee_messages',
				action: 'List my messages with one person',
				description: 'List the messages between you and one person',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/list_attendee_messages',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'List Chat Attendees',
				value: 'list_chat_attendees',
				action: 'List everyone I have chats with',
				description: 'List everyone you have conversations with',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/list_chat_attendees',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'List Chat Messages',
				value: 'list_chat_messages',
				action: 'List the messages of a chat',
				description: 'List the messages of one conversation, newest first',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/list_chat_messages',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'List Chat Participants',
				value: 'list_chat_participants',
				action: 'List who is in a chat',
				description: 'List who is in one conversation',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/list_chat_participants',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'List Chats',
				value: 'list_chats',
				action: 'List chats',
				description: 'List your conversations, newest first',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/list_chats',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'List Conversations',
				value: 'list_conversations',
				action: 'List conversations',
				description:
					'List the conversations in the stored copy of your inbox, across your accounts',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/list_conversations',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'List Messages',
				value: 'list_messages',
				action: 'List messages across chats',
				description: 'List messages across all your conversations, newest first',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/list_messages',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'Mark Read',
				value: 'mark_read',
				action: 'Mark a conversation read in this inbox',
				description: 'Mark one conversation read in the stored inbox',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/mark_read',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'React to Message',
				value: 'react_to_message',
				action: 'React to a message',
				description: 'React to one message with an emoji',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/react_to_message',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'Resync Attendee Chats',
				value: 'resync_attendee_chats',
				action: 'Read again my chats with one person',
				description: 'Read your conversations with one person from LinkedIn again',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/resync_attendee_chats',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'Resync Chat',
				value: 'resync_chat',
				action: 'Read again the history of a chat',
				description: "Read one conversation's history from LinkedIn again, from its beginning",
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/resync_chat',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'Send Chat Message',
				value: 'send_chat_message',
				action: 'Send a message with files or a voice note',
				description:
					'Send a message into one conversation, with files, a voice note or a video note, or as an answer to one message',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/send_chat_message',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'Send Message',
				value: 'send_message',
				action: 'Send a message',
				description:
					'Send one message to a 1st-degree connection, or into an existing conversation, now',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/send_message',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'Set Chat Status',
				value: 'set_chat_status',
				action: 'Mark a chat read or muted',
				description: 'Mark one conversation read or unread, and mute or unmute it',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/set_chat_status',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'Start Conversation',
				value: 'start_conversation',
				action: 'Start a conversation',
				description:
					'Start a new conversation: an InMail, a message through Sales Navigator or Recruiter, a group, a company page, a job applicant',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/start_conversation',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'Sync Inbox',
				value: 'sync_inbox',
				action: 'Refresh the inbox',
				description:
					'Refresh the stored inbox from LinkedIn, or one conversation of it, in the background',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/sync_inbox',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
		],
		default: 'get_chat',
	},
	{
		displayName: 'Chat ID',
		name: 'chatId',
		description: 'The conversation ID (from list_chats)',
		type: 'string',
		default: '',
		required: true,
		routing: {
			send: {
				type: 'body',
				property: 'chatId',
			},
		},
		displayOptions: {
			show: {
				resource: ['message'],
				operation: ['delete_chat'],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['message'],
				operation: ['delete_chat'],
			},
		},
		options: [
			{
				displayName: 'Connection ID',
				name: 'connectionId',
				description:
					'Which of your LinkedIn accounts to act from (its ID from list_linkedin_accounts). Omit to use your first live one.',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'connectionId',
					},
				},
			},
		],
	},
	{
		displayName: 'Message ID',
		name: 'messageId',
		description: 'The message ID (from list_chat_messages)',
		type: 'string',
		default: '',
		required: true,
		routing: {
			send: {
				type: 'body',
				property: 'messageId',
			},
		},
		displayOptions: {
			show: {
				resource: ['message'],
				operation: ['delete_message'],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['message'],
				operation: ['delete_message'],
			},
		},
		options: [
			{
				displayName: 'Connection ID',
				name: 'connectionId',
				description:
					'Which of your LinkedIn accounts to act from (its ID from list_linkedin_accounts). Omit to use your first live one.',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'connectionId',
					},
				},
			},
		],
	},
	{
		displayName: 'Message ID',
		name: 'messageId',
		description: 'The message ID (from list_chat_messages)',
		type: 'string',
		default: '',
		required: true,
		routing: {
			send: {
				type: 'body',
				property: 'messageId',
			},
		},
		displayOptions: {
			show: {
				resource: ['message'],
				operation: ['edit_message'],
			},
		},
	},
	{
		displayName: 'Text',
		name: 'text',
		description: 'The new text',
		type: 'string',
		default: '',
		required: true,
		routing: {
			send: {
				type: 'body',
				property: 'text',
			},
		},
		displayOptions: {
			show: {
				resource: ['message'],
				operation: ['edit_message'],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['message'],
				operation: ['edit_message'],
			},
		},
		options: [
			{
				displayName: 'Connection ID',
				name: 'connectionId',
				description:
					'Which of your LinkedIn accounts to act from (its ID from list_linkedin_accounts). Omit to use your first live one.',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'connectionId',
					},
				},
			},
		],
	},
	{
		displayName: 'Chat ID',
		name: 'chatId',
		description: 'The conversation ID (from list_chats)',
		type: 'string',
		default: '',
		required: true,
		routing: {
			send: {
				type: 'body',
				property: 'chatId',
			},
		},
		displayOptions: {
			show: {
				resource: ['message'],
				operation: ['get_chat'],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['message'],
				operation: ['get_chat'],
			},
		},
		options: [
			{
				displayName: 'Connection ID',
				name: 'connectionId',
				description:
					'Which of your LinkedIn accounts to act from (its ID from list_linkedin_accounts). Omit to use your first live one.',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'connectionId',
					},
				},
			},
		],
	},
	{
		displayName: 'Attendee ID',
		name: 'attendeeId',
		description: 'The participant ID (from list_chat_attendees or list_chat_participants)',
		type: 'string',
		default: '',
		required: true,
		routing: {
			send: {
				type: 'body',
				property: 'attendeeId',
			},
		},
		displayOptions: {
			show: {
				resource: ['message'],
				operation: ['get_chat_attendee'],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['message'],
				operation: ['get_chat_attendee'],
			},
		},
		options: [
			{
				displayName: 'Connection ID',
				name: 'connectionId',
				description:
					'Which of your LinkedIn accounts to act from (its ID from list_linkedin_accounts). Omit to use your first live one.',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'connectionId',
					},
				},
			},
		],
	},
	{
		displayName: 'Attendee ID',
		name: 'attendeeId',
		description: 'The participant ID (from list_chat_attendees or list_chat_participants)',
		type: 'string',
		default: '',
		required: true,
		routing: {
			send: {
				type: 'body',
				property: 'attendeeId',
			},
		},
		displayOptions: {
			show: {
				resource: ['message'],
				operation: ['get_chat_attendee_picture'],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['message'],
				operation: ['get_chat_attendee_picture'],
			},
		},
		options: [
			{
				displayName: 'Connection ID',
				name: 'connectionId',
				description:
					'Which of your LinkedIn accounts to act from (its ID from list_linkedin_accounts). Omit to use your first live one.',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'connectionId',
					},
				},
			},
		],
	},
	{
		displayName: 'Conversation URL',
		name: 'conversationUrl',
		description:
			"The other person's LinkedIn profile URL (https://linkedin.com/in/…) — preferred — or a /messaging/thread/ URL",
		type: 'string',
		default: '',
		required: true,
		routing: {
			send: {
				type: 'body',
				property: 'conversationUrl',
			},
		},
		displayOptions: {
			show: {
				resource: ['message'],
				operation: ['get_conversation'],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['message'],
				operation: ['get_conversation'],
			},
		},
		options: [
			{
				displayName: 'Connection ID',
				name: 'connectionId',
				description:
					'Which of your senders owns this conversation (its linkedinConnections _id). Omit to search your live senders; for a live fetch the first live sender is used.',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'connectionId',
					},
				},
			},
			{
				displayName: 'Refresh',
				name: 'refresh',
				description:
					'Whether to switch this on. true = fetch live from LinkedIn even if cached. false (default) = return the cached thread when available, else fetch live.',
				type: 'boolean',
				default: false,
				routing: {
					send: {
						type: 'body',
						property: 'refresh',
					},
				},
			},
		],
	},
	{
		displayName: 'Message ID',
		name: 'messageId',
		description: 'The message ID (from list_chat_messages)',
		type: 'string',
		default: '',
		required: true,
		routing: {
			send: {
				type: 'body',
				property: 'messageId',
			},
		},
		displayOptions: {
			show: {
				resource: ['message'],
				operation: ['get_message'],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['message'],
				operation: ['get_message'],
			},
		},
		options: [
			{
				displayName: 'Connection ID',
				name: 'connectionId',
				description:
					'Which of your LinkedIn accounts to act from (its ID from list_linkedin_accounts). Omit to use your first live one.',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'connectionId',
					},
				},
			},
		],
	},
	{
		displayName: 'Message ID',
		name: 'messageId',
		description: 'The message ID (from list_chat_messages)',
		type: 'string',
		default: '',
		required: true,
		routing: {
			send: {
				type: 'body',
				property: 'messageId',
			},
		},
		displayOptions: {
			show: {
				resource: ['message'],
				operation: ['get_message_attachment'],
			},
		},
	},
	{
		displayName: 'Attachment ID',
		name: 'attachmentId',
		description: "The attachment ID (from the message's attachments)",
		type: 'string',
		default: '',
		required: true,
		routing: {
			send: {
				type: 'body',
				property: 'attachmentId',
			},
		},
		displayOptions: {
			show: {
				resource: ['message'],
				operation: ['get_message_attachment'],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['message'],
				operation: ['get_message_attachment'],
			},
		},
		options: [
			{
				displayName: 'Connection ID',
				name: 'connectionId',
				description:
					'Which of your LinkedIn accounts to act from (its ID from list_linkedin_accounts). Omit to use your first live one.',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'connectionId',
					},
				},
			},
		],
	},
	{
		displayName: 'Task ID',
		name: 'taskId',
		description: 'Task ID returned by sync_inbox, or by a queued reply',
		type: 'string',
		default: '',
		required: true,
		routing: {
			send: {
				type: 'body',
				property: 'taskId',
			},
		},
		displayOptions: {
			show: {
				resource: ['message'],
				operation: ['get_send_status'],
			},
		},
	},
	{
		displayName: 'Attendee ID',
		name: 'attendeeId',
		description: 'The participant ID (from list_chat_attendees or list_chat_participants)',
		type: 'string',
		default: '',
		required: true,
		routing: {
			send: {
				type: 'body',
				property: 'attendeeId',
			},
		},
		displayOptions: {
			show: {
				resource: ['message'],
				operation: ['list_attendee_chats'],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['message'],
				operation: ['list_attendee_chats'],
			},
		},
		options: [
			{
				displayName: 'After',
				name: 'after',
				description:
					'Only items created after this moment (ISO 8601 UTC, e.g. 2026-10-01T00:00:00.000Z)',
				type: 'dateTime',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'after',
					},
				},
			},
			{
				displayName: 'Before',
				name: 'before',
				description:
					'Only items created before this moment (ISO 8601 UTC, e.g. 2026-10-01T00:00:00.000Z)',
				type: 'dateTime',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'before',
					},
				},
			},
			{
				displayName: 'Connection ID',
				name: 'connectionId',
				description:
					'Which of your LinkedIn accounts to act from (its ID from list_linkedin_accounts). Omit to use your first live one.',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'connectionId',
					},
				},
			},
			{
				displayName: 'Cursor',
				name: 'cursor',
				description:
					'NextCursor from the previous call, to get the next page. Keep the other arguments the same.',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'cursor',
					},
				},
			},
			{
				displayName: 'Max Results',
				name: 'maxResults',
				description: 'How many to return (1–250, default 50)',
				type: 'number',
				default: 1,
				typeOptions: {
					minValue: 1,
					maxValue: 250,
				},
				routing: {
					send: {
						type: 'body',
						property: 'limit',
					},
				},
			},
		],
	},
	{
		displayName: 'Attendee ID',
		name: 'attendeeId',
		description: 'The participant ID (from list_chat_attendees or list_chat_participants)',
		type: 'string',
		default: '',
		required: true,
		routing: {
			send: {
				type: 'body',
				property: 'attendeeId',
			},
		},
		displayOptions: {
			show: {
				resource: ['message'],
				operation: ['list_attendee_messages'],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['message'],
				operation: ['list_attendee_messages'],
			},
		},
		options: [
			{
				displayName: 'After',
				name: 'after',
				description:
					'Only items created after this moment (ISO 8601 UTC, e.g. 2026-10-01T00:00:00.000Z)',
				type: 'dateTime',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'after',
					},
				},
			},
			{
				displayName: 'Before',
				name: 'before',
				description:
					'Only items created before this moment (ISO 8601 UTC, e.g. 2026-10-01T00:00:00.000Z)',
				type: 'dateTime',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'before',
					},
				},
			},
			{
				displayName: 'Connection ID',
				name: 'connectionId',
				description:
					'Which of your LinkedIn accounts to act from (its ID from list_linkedin_accounts). Omit to use your first live one.',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'connectionId',
					},
				},
			},
			{
				displayName: 'Cursor',
				name: 'cursor',
				description:
					'NextCursor from the previous call, to get the next page. Keep the other arguments the same.',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'cursor',
					},
				},
			},
			{
				displayName: 'Max Results',
				name: 'maxResults',
				description: 'How many to return (1–250, default 50)',
				type: 'number',
				default: 1,
				typeOptions: {
					minValue: 1,
					maxValue: 250,
				},
				routing: {
					send: {
						type: 'body',
						property: 'limit',
					},
				},
			},
		],
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['message'],
				operation: ['list_chat_attendees'],
			},
		},
		options: [
			{
				displayName: 'Connection ID',
				name: 'connectionId',
				description:
					'Which of your LinkedIn accounts to act from (its ID from list_linkedin_accounts). Omit to use your first live one.',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'connectionId',
					},
				},
			},
			{
				displayName: 'Cursor',
				name: 'cursor',
				description:
					'NextCursor from the previous call, to get the next page. Keep the other arguments the same.',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'cursor',
					},
				},
			},
			{
				displayName: 'Max Results',
				name: 'maxResults',
				description: 'How many to return (1–250, default 50)',
				type: 'number',
				default: 1,
				typeOptions: {
					minValue: 1,
					maxValue: 250,
				},
				routing: {
					send: {
						type: 'body',
						property: 'limit',
					},
				},
			},
		],
	},
	{
		displayName: 'Chat ID',
		name: 'chatId',
		description: 'The conversation ID (from list_chats)',
		type: 'string',
		default: '',
		required: true,
		routing: {
			send: {
				type: 'body',
				property: 'chatId',
			},
		},
		displayOptions: {
			show: {
				resource: ['message'],
				operation: ['list_chat_messages'],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['message'],
				operation: ['list_chat_messages'],
			},
		},
		options: [
			{
				displayName: 'After',
				name: 'after',
				description:
					'Only items created after this moment (ISO 8601 UTC, e.g. 2026-10-01T00:00:00.000Z)',
				type: 'dateTime',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'after',
					},
				},
			},
			{
				displayName: 'Before',
				name: 'before',
				description:
					'Only items created before this moment (ISO 8601 UTC, e.g. 2026-10-01T00:00:00.000Z)',
				type: 'dateTime',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'before',
					},
				},
			},
			{
				displayName: 'Connection ID',
				name: 'connectionId',
				description:
					'Which of your LinkedIn accounts to act from (its ID from list_linkedin_accounts). Omit to use your first live one.',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'connectionId',
					},
				},
			},
			{
				displayName: 'Cursor',
				name: 'cursor',
				description:
					'NextCursor from the previous call, to get the next page. Keep the other arguments the same.',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'cursor',
					},
				},
			},
			{
				displayName: 'Max Results',
				name: 'maxResults',
				description: 'How many to return (1–250, default 50)',
				type: 'number',
				default: 1,
				typeOptions: {
					minValue: 1,
					maxValue: 250,
				},
				routing: {
					send: {
						type: 'body',
						property: 'limit',
					},
				},
			},
			{
				displayName: 'Sender ID',
				name: 'senderId',
				description:
					'Only messages from this participant ID. The published definition calls this "the ID of the sender" without saying which ID; "participant ID" is this tool\'s own wording.',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'senderId',
					},
				},
			},
		],
	},
	{
		displayName: 'Chat ID',
		name: 'chatId',
		description: 'The conversation ID (from list_chats)',
		type: 'string',
		default: '',
		required: true,
		routing: {
			send: {
				type: 'body',
				property: 'chatId',
			},
		},
		displayOptions: {
			show: {
				resource: ['message'],
				operation: ['list_chat_participants'],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['message'],
				operation: ['list_chat_participants'],
			},
		},
		options: [
			{
				displayName: 'Connection ID',
				name: 'connectionId',
				description:
					'Which of your LinkedIn accounts to act from (its ID from list_linkedin_accounts). Omit to use your first live one.',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'connectionId',
					},
				},
			},
		],
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['message'],
				operation: ['list_chats'],
			},
		},
		options: [
			{
				displayName: 'After',
				name: 'after',
				description:
					'Only items created after this moment (ISO 8601 UTC, e.g. 2026-10-01T00:00:00.000Z)',
				type: 'dateTime',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'after',
					},
				},
			},
			{
				displayName: 'Before',
				name: 'before',
				description:
					'Only items created before this moment (ISO 8601 UTC, e.g. 2026-10-01T00:00:00.000Z)',
				type: 'dateTime',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'before',
					},
				},
			},
			{
				displayName: 'Connection ID',
				name: 'connectionId',
				description:
					'Which of your LinkedIn accounts to act from (its ID from list_linkedin_accounts). Omit to use your first live one.',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'connectionId',
					},
				},
			},
			{
				displayName: 'Cursor',
				name: 'cursor',
				description:
					'NextCursor from the previous call, to get the next page. Keep the other arguments the same.',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'cursor',
					},
				},
			},
			{
				displayName: 'Max Results',
				name: 'maxResults',
				description: 'How many to return (1–250, default 50)',
				type: 'number',
				default: 1,
				typeOptions: {
					minValue: 1,
					maxValue: 250,
				},
				routing: {
					send: {
						type: 'body',
						property: 'limit',
					},
				},
			},
			{
				displayName: 'Unread',
				name: 'unread',
				description:
					'Whether to switch this on. true: only unread conversations. false: only read ones. Omit for both.',
				type: 'boolean',
				default: false,
				routing: {
					send: {
						type: 'body',
						property: 'unread',
					},
				},
			},
		],
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['message'],
				operation: ['list_conversations'],
			},
		},
		options: [
			{
				displayName: 'Include Threads',
				name: 'includeThreads',
				description:
					'Whether to switch this on. Attach the full message history (oldest→newest) to each conversation row under `thread`, resolved server-side — not just the latest message. Use this to read a specific conversation by searching the lead name.',
				type: 'boolean',
				default: false,
				routing: {
					send: {
						type: 'body',
						property: 'includeThreads',
					},
				},
			},
			{
				displayName: 'Max Results',
				name: 'maxResults',
				description: 'Max conversations to return (default 50, max 200)',
				type: 'number',
				default: 1,
				typeOptions: {
					minValue: 1,
					maxValue: 200,
				},
				routing: {
					send: {
						type: 'body',
						property: 'limit',
					},
				},
			},
			{
				displayName: 'Page',
				name: 'page',
				description: 'Page number (default 1)',
				type: 'number',
				default: 0,
				routing: {
					send: {
						type: 'body',
						property: 'page',
					},
				},
			},
			{
				displayName: 'Search',
				name: 'search',
				description: 'Search by participant, headline, message, or connection label',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'search',
					},
				},
			},
			{
				displayName: 'Unread Only',
				name: 'unreadOnly',
				description: 'Whether to switch this on. Only return unread conversations.',
				type: 'boolean',
				default: false,
				routing: {
					send: {
						type: 'body',
						property: 'unreadOnly',
					},
				},
			},
		],
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['message'],
				operation: ['list_messages'],
			},
		},
		options: [
			{
				displayName: 'After',
				name: 'after',
				description:
					'Only items created after this moment (ISO 8601 UTC, e.g. 2026-10-01T00:00:00.000Z)',
				type: 'dateTime',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'after',
					},
				},
			},
			{
				displayName: 'Before',
				name: 'before',
				description:
					'Only items created before this moment (ISO 8601 UTC, e.g. 2026-10-01T00:00:00.000Z)',
				type: 'dateTime',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'before',
					},
				},
			},
			{
				displayName: 'Connection ID',
				name: 'connectionId',
				description:
					'Which of your LinkedIn accounts to act from (its ID from list_linkedin_accounts). Omit to use your first live one.',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'connectionId',
					},
				},
			},
			{
				displayName: 'Cursor',
				name: 'cursor',
				description:
					'NextCursor from the previous call, to get the next page. Keep the other arguments the same.',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'cursor',
					},
				},
			},
			{
				displayName: 'Max Results',
				name: 'maxResults',
				description: 'How many to return (1–250, default 50)',
				type: 'number',
				default: 1,
				typeOptions: {
					minValue: 1,
					maxValue: 250,
				},
				routing: {
					send: {
						type: 'body',
						property: 'limit',
					},
				},
			},
			{
				displayName: 'Sender ID',
				name: 'senderId',
				description:
					'Only messages from this participant ID. The published definition calls this "the ID of the sender" without saying which ID; "participant ID" is this tool\'s own wording.',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'senderId',
					},
				},
			},
		],
	},
	{
		displayName: 'Read Key',
		name: 'readKey',
		description: 'ReadKey returned by list_conversations',
		type: 'string',
		default: '',
		required: true,
		routing: {
			send: {
				type: 'body',
				property: 'readKey',
			},
		},
		displayOptions: {
			show: {
				resource: ['message'],
				operation: ['mark_read'],
			},
		},
	},
	{
		displayName: 'Message ID',
		name: 'messageId',
		description: 'The message ID (from list_chat_messages)',
		type: 'string',
		default: '',
		required: true,
		routing: {
			send: {
				type: 'body',
				property: 'messageId',
			},
		},
		displayOptions: {
			show: {
				resource: ['message'],
				operation: ['react_to_message'],
			},
		},
	},
	{
		displayName: 'Reaction',
		name: 'reaction',
		description: 'The emoji to react with, e.g. 👍',
		type: 'string',
		default: '',
		required: true,
		routing: {
			send: {
				type: 'body',
				property: 'reaction',
			},
		},
		displayOptions: {
			show: {
				resource: ['message'],
				operation: ['react_to_message'],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['message'],
				operation: ['react_to_message'],
			},
		},
		options: [
			{
				displayName: 'Connection ID',
				name: 'connectionId',
				description:
					'Which of your LinkedIn accounts to act from (its ID from list_linkedin_accounts). Omit to use your first live one.',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'connectionId',
					},
				},
			},
		],
	},
	{
		displayName: 'Attendee ID',
		name: 'attendeeId',
		description: 'The participant ID (from list_chat_attendees or list_chat_participants)',
		type: 'string',
		default: '',
		required: true,
		routing: {
			send: {
				type: 'body',
				property: 'attendeeId',
			},
		},
		displayOptions: {
			show: {
				resource: ['message'],
				operation: ['resync_attendee_chats'],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['message'],
				operation: ['resync_attendee_chats'],
			},
		},
		options: [
			{
				displayName: 'Connection ID',
				name: 'connectionId',
				description:
					'Which of your LinkedIn accounts to act from (its ID from list_linkedin_accounts). Omit to use your first live one.',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'connectionId',
					},
				},
			},
		],
	},
	{
		displayName: 'Chat ID',
		name: 'chatId',
		description: 'The conversation ID (from list_chats)',
		type: 'string',
		default: '',
		required: true,
		routing: {
			send: {
				type: 'body',
				property: 'chatId',
			},
		},
		displayOptions: {
			show: {
				resource: ['message'],
				operation: ['resync_chat'],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['message'],
				operation: ['resync_chat'],
			},
		},
		options: [
			{
				displayName: 'Connection ID',
				name: 'connectionId',
				description:
					'Which of your LinkedIn accounts to act from (its ID from list_linkedin_accounts). Omit to use your first live one.',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'connectionId',
					},
				},
			},
		],
	},
	{
		displayName: 'Chat ID',
		name: 'chatId',
		description: 'The conversation ID (from list_chats)',
		type: 'string',
		default: '',
		required: true,
		routing: {
			send: {
				type: 'body',
				property: 'chatId',
			},
		},
		displayOptions: {
			show: {
				resource: ['message'],
				operation: ['send_chat_message'],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['message'],
				operation: ['send_chat_message'],
			},
		},
		options: [
			{
				displayName: 'Attachment URLs',
				name: 'attachmentUrls',
				description:
					'Files or images to attach. Public https links; each file up to 10 MB, 20 MB in total.',
				type: 'string',
				typeOptions: {
					multipleValues: true,
				},
				default: [],
				routing: {
					send: {
						type: 'body',
						property: 'attachmentUrls',
					},
				},
			},
			{
				displayName: 'Connection ID',
				name: 'connectionId',
				description:
					'Which of your LinkedIn accounts to act from (its ID from list_linkedin_accounts). Omit to use your first live one.',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'connectionId',
					},
				},
			},
			{
				displayName: 'Reply to Message ID',
				name: 'replyToMessageId',
				description: 'Quote and answer this message of the conversation',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'replyToMessageId',
					},
				},
			},
			{
				displayName: 'Text',
				name: 'text',
				description: 'The message text. Optional when a file or note is sent.',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'text',
					},
				},
			},
			{
				displayName: 'Video Message URL',
				name: 'videoMessageUrl',
				description: 'A video file to send as a video note. A public https link, up to 10 MB.',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'videoMessageUrl',
					},
				},
			},
			{
				displayName: 'Voice Message URL',
				name: 'voiceMessageUrl',
				description:
					'An audio file to send as a voice note (.m4a preferred). A public https link, up to 10 MB.',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'voiceMessageUrl',
					},
				},
			},
		],
	},
	{
		displayName: 'Text',
		name: 'text',
		description: 'The message text',
		type: 'string',
		default: '',
		required: true,
		routing: {
			send: {
				type: 'body',
				property: 'text',
			},
		},
		displayOptions: {
			show: {
				resource: ['message'],
				operation: ['send_message'],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['message'],
				operation: ['send_message'],
			},
		},
		options: [
			{
				displayName: 'Connection ID',
				name: 'connectionId',
				description:
					'Which of your LinkedIn accounts to act from (its ID from list_linkedin_accounts). Omit to use your first live one.',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'connectionId',
					},
				},
			},
			{
				displayName: 'Conversation ID',
				name: 'conversationId',
				description: 'ID of an existing conversation to send into, instead of a profile URL',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'conversationId',
					},
				},
			},
			{
				displayName: 'Profile URL',
				name: 'profileUrl',
				description: 'LinkedIn profile URL of the 1st-degree connection to message',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'profileUrl',
					},
				},
			},
		],
	},
	{
		displayName: 'Chat ID',
		name: 'chatId',
		description: 'The conversation ID (from list_chats)',
		type: 'string',
		default: '',
		required: true,
		routing: {
			send: {
				type: 'body',
				property: 'chatId',
			},
		},
		displayOptions: {
			show: {
				resource: ['message'],
				operation: ['set_chat_status'],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['message'],
				operation: ['set_chat_status'],
			},
		},
		options: [
			{
				displayName: 'Connection ID',
				name: 'connectionId',
				description:
					'Which of your LinkedIn accounts to act from (its ID from list_linkedin_accounts). Omit to use your first live one.',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'connectionId',
					},
				},
			},
			{
				displayName: 'Muted',
				name: 'muted',
				description: 'Whether to switch this on. true mutes its notifications, false unmutes.',
				type: 'boolean',
				default: false,
				routing: {
					send: {
						type: 'body',
						property: 'muted',
					},
				},
			},
			{
				displayName: 'Read',
				name: 'read',
				description: 'Whether to switch this on. true marks it read, false marks it unread.',
				type: 'boolean',
				default: false,
				routing: {
					send: {
						type: 'body',
						property: 'read',
					},
				},
			},
		],
	},
	{
		displayName: 'To',
		name: 'to',
		description:
			'Who to write to: LinkedIn profile URLs or member IDs. One person, or several for a group conversation. For a company page pass its messaging ID.',
		type: 'string',
		typeOptions: {
			multipleValues: true,
		},
		default: [],
		required: true,
		routing: {
			send: {
				type: 'body',
				property: 'to',
			},
		},
		displayOptions: {
			show: {
				resource: ['message'],
				operation: ['start_conversation'],
			},
		},
	},
	{
		displayName: 'Text',
		name: 'text',
		description: 'The first message',
		type: 'string',
		default: '',
		required: true,
		routing: {
			send: {
				type: 'body',
				property: 'text',
			},
		},
		displayOptions: {
			show: {
				resource: ['message'],
				operation: ['start_conversation'],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['message'],
				operation: ['start_conversation'],
			},
		},
		options: [
			{
				displayName: 'Applicant ID',
				name: 'applicantId',
				description:
					'Required when writing to an applicant of your job posting (from list_job_applicants)',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'applicantId',
					},
				},
			},
			{
				displayName: 'Attachment URLs',
				name: 'attachmentUrls',
				description:
					'Files or images to attach. Public https links; each file up to 10 MB, 20 MB in total.',
				type: 'string',
				typeOptions: {
					multipleValues: true,
				},
				default: [],
				routing: {
					send: {
						type: 'body',
						property: 'attachmentUrls',
					},
				},
			},
			{
				displayName: 'Company Topic',
				name: 'companyTopic',
				description: 'Required when writing to a company page',
				type: 'options',
				options: [
					{
						name: 'Careers',
						value: 'careers',
					},
					{
						name: 'Other',
						value: 'other',
					},
					{
						name: 'Request Demo',
						value: 'request_demo',
					},
					{
						name: 'Service Request',
						value: 'service_request',
					},
					{
						name: 'Support',
						value: 'support',
					},
				],
				default: 'careers',
				routing: {
					send: {
						type: 'body',
						property: 'companyTopic',
					},
				},
			},
			{
				displayName: 'Connection ID',
				name: 'connectionId',
				description:
					'Which of your LinkedIn accounts to act from (its ID from list_linkedin_accounts). Omit to use your first live one.',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'connectionId',
					},
				},
			},
			{
				displayName: 'Group ID',
				name: 'groupId',
				description:
					'Required when writing to someone through a LinkedIn group you share. A LinkedIn group you share with the person. No action here lists your groups.',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'groupId',
					},
				},
			},
			{
				displayName: 'InMail',
				name: 'inmail',
				description:
					'Whether to switch this on. classic only: send as an InMail (to someone you are not connected to).',
				type: 'boolean',
				default: false,
				routing: {
					send: {
						type: 'body',
						property: 'inmail',
					},
				},
			},
			{
				displayName: 'Invitation ID',
				name: 'invitationId',
				description:
					'Required when writing to someone whose invitation you have neither accepted nor declined (from list_received_invitations)',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'invitationId',
					},
				},
			},
			{
				displayName: 'Recruiter',
				name: 'recruiter',
				description:
					'Via recruiter only: signature, hiringProjectId (the project to start the conversation in), jobPostingId, sourcingChannel, emailAddress (send by email instead of InMail), visibility (default PRIVATE), inmailIntent, and followUp { subject, text, days 3–28 or weeks 1–4, timezone } to schedule a follow-up (Recruiter PRO)',
				type: 'json',
				default: '{}',
				routing: {
					send: {
						type: 'body',
						property: 'recruiter',
						value: '={{ typeof $value === "string" ? JSON.parse($value) : $value }}',
					},
				},
			},
			{
				displayName: 'Subject',
				name: 'subject',
				description: 'Subject line (InMail)',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'subject',
					},
				},
			},
			{
				displayName: 'Via',
				name: 'via',
				description:
					'Which LinkedIn product sends it. sales_navigator and recruiter need that seat on your account.',
				type: 'options',
				options: [
					{
						name: 'Classic',
						value: 'classic',
					},
					{
						name: 'Recruiter',
						value: 'recruiter',
					},
					{
						name: 'Sales Navigator',
						value: 'sales_navigator',
					},
				],
				default: 'classic',
				routing: {
					send: {
						type: 'body',
						property: 'via',
					},
				},
			},
			{
				displayName: 'Video Message URL',
				name: 'videoMessageUrl',
				description: 'A video file to send as a video note. A public https link, up to 10 MB.',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'videoMessageUrl',
					},
				},
			},
			{
				displayName: 'Voice Message URL',
				name: 'voiceMessageUrl',
				description:
					'An audio file to send as a voice note (.m4a preferred). A public https link, up to 10 MB.',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'voiceMessageUrl',
					},
				},
			},
		],
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['message'],
				operation: ['sync_inbox'],
			},
		},
		options: [
			{
				displayName: 'Conversation URL',
				name: 'conversationUrl',
				description:
					"LinkedIn conversation/thread URL, or the person's profile URL. Required when threadOnly=true to fetch just that one conversation.",
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'conversationUrl',
					},
				},
			},
			{
				displayName: 'LinkedIn Connection ID',
				name: 'linkedinConnectionId',
				description:
					'LinkedIn account to sync from. Omit to use all active accounts for the setup.',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'linkedinConnectionId',
					},
				},
			},
			{
				displayName: 'Thread Only',
				name: 'threadOnly',
				description:
					'Whether to switch this on. When true (with conversationUrl set), fetch only that one conversation thread instead of syncing the whole inbox.',
				type: 'boolean',
				default: false,
				routing: {
					send: {
						type: 'body',
						property: 'threadOnly',
					},
				},
			},
		],
	},
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['network'],
			},
		},
		options: [
			{
				name: 'List Connections',
				value: 'list_connections',
				action: 'List my connections',
				description: 'List your 1st-degree connections',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/list_connections',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'List Followers',
				value: 'list_followers',
				action: 'List followers',
				description: 'List who follows you, or who follows another person or a company page',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/list_followers',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'List Received Invitations',
				value: 'list_received_invitations',
				action: 'List received invitations',
				description: 'List the invitations you received and have not answered',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/list_received_invitations',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'List Sent Invitations',
				value: 'list_sent_invitations',
				action: 'List sent invitations',
				description: 'List the invitations you sent that are still unanswered',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/list_sent_invitations',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'Preview Withdraw Invitations',
				value: 'preview_withdraw_invitations',
				action: 'Preview withdrawing invitations',
				description: 'Count the sent invitations a withdrawal would take back, per campaign',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/preview_withdraw_invitations',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'Respond to Invitation',
				value: 'respond_to_invitation',
				action: 'Accept or decline an invitation',
				description: 'Accept or decline one invitation you received',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/respond_to_invitation',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'Send Invitation',
				value: 'send_invitation',
				action: 'Send an invitation',
				description: 'Send one connection invitation, now',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/send_invitation',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'Withdraw Invitation',
				value: 'withdraw_invitation',
				action: 'Withdraw one sent invitation now',
				description: 'Take back one invitation you sent that is still unanswered, now',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/withdraw_invitation',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'Withdraw Invitations',
				value: 'withdraw_invitations',
				action: 'Withdraw sent invitations',
				description: 'Take back sent invitations that are still unanswered, in the background',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/withdraw_invitations',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
		],
		default: 'list_connections',
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['network'],
				operation: ['list_connections'],
			},
		},
		options: [
			{
				displayName: 'Connection ID',
				name: 'connectionId',
				description:
					'Restrict to one LinkedIn sender (its linkedinConnections _id from list_linkedin_accounts). Omit to merge across all your live senders in this setup.',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'connectionId',
					},
				},
			},
			{
				displayName: 'Max Results',
				name: 'maxResults',
				description:
					'Max people to return (1–500, default 200). The total match count is always reported even when truncated.',
				type: 'number',
				default: 1,
				typeOptions: {
					minValue: 1,
					maxValue: 500,
				},
				routing: {
					send: {
						type: 'body',
						property: 'limit',
					},
				},
			},
			{
				displayName: 'Refresh',
				name: 'refresh',
				description:
					'Whether to switch this on. true = pull the latest connections live from LinkedIn and refresh the cache (slower). false (default) = serve from cache, refreshing live only when the cache is empty or stale.',
				type: 'boolean',
				default: false,
				routing: {
					send: {
						type: 'body',
						property: 'refresh',
					},
				},
			},
			{
				displayName: 'Search',
				name: 'search',
				description: "Case-insensitive substring matched against each person's name and headline",
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'search',
					},
				},
			},
			{
				displayName: 'Since',
				name: 'since',
				description:
					'ISO date (e.g. "2026-01-01"). Only return connections made on/after this date.',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'since',
					},
				},
			},
		],
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['network'],
				operation: ['list_followers'],
			},
		},
		options: [
			{
				displayName: 'Connection ID',
				name: 'connectionId',
				description:
					'Which of your LinkedIn accounts to act from (its ID from list_linkedin_accounts). Omit to use your first live one.',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'connectionId',
					},
				},
			},
			{
				displayName: 'Cursor',
				name: 'cursor',
				description:
					'NextCursor from the previous call, to get the next page. Keep the other arguments the same.',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'cursor',
					},
				},
			},
			{
				displayName: 'Max Results',
				name: 'maxResults',
				description:
					"How many to return (1–100 for your own followers, 1–50 for someone else's; default 50)",
				type: 'number',
				default: 1,
				typeOptions: {
					minValue: 1,
					maxValue: 100,
				},
				routing: {
					send: {
						type: 'body',
						property: 'limit',
					},
				},
			},
			{
				displayName: 'Of',
				name: 'of',
				description: "A member ID or a company's numeric ID. Omit for your own followers.",
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'of',
					},
				},
			},
		],
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['network'],
				operation: ['list_received_invitations'],
			},
		},
		options: [
			{
				displayName: 'Connection ID',
				name: 'connectionId',
				description:
					'Which of your LinkedIn accounts to act from (its ID from list_linkedin_accounts). Omit to use your first live one.',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'connectionId',
					},
				},
			},
			{
				displayName: 'Cursor',
				name: 'cursor',
				description:
					'NextCursor from the previous call, to get the next page. Keep the other arguments the same.',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'cursor',
					},
				},
			},
			{
				displayName: 'Max Results',
				name: 'maxResults',
				description: 'Max invitations to return (1–50, default 20)',
				type: 'number',
				default: 1,
				typeOptions: {
					minValue: 1,
					maxValue: 50,
				},
				routing: {
					send: {
						type: 'body',
						property: 'limit',
					},
				},
			},
		],
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['network'],
				operation: ['list_sent_invitations'],
			},
		},
		options: [
			{
				displayName: 'Connection ID',
				name: 'connectionId',
				description: 'Restrict to one LinkedIn sender. Omit to span all live senders.',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'connectionId',
					},
				},
			},
			{
				displayName: 'Max Results',
				name: 'maxResults',
				description: 'Max invitations to return (1–300, default 100)',
				type: 'number',
				default: 1,
				typeOptions: {
					minValue: 1,
					maxValue: 300,
				},
				routing: {
					send: {
						type: 'body',
						property: 'limit',
					},
				},
			},
		],
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['network'],
				operation: ['preview_withdraw_invitations'],
			},
		},
		options: [
			{
				displayName: 'Campaign ID',
				name: 'campaignId',
				description:
					'ID of a specific campaign to withdraw invites for. Provide either campaignId OR linkedinConnectionId, not both.',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'campaignId',
					},
				},
			},
			{
				displayName: 'Days Threshold',
				name: 'daysThreshold',
				description:
					'Only withdraw invites that have been pending for at least this many days (default: 7)',
				type: 'number',
				default: 1,
				typeOptions: {
					minValue: 1,
					maxValue: 90,
				},
				routing: {
					send: {
						type: 'body',
						property: 'daysThreshold',
					},
				},
			},
			{
				displayName: 'LinkedIn Connection ID',
				name: 'linkedinConnectionId',
				description:
					'LinkedIn sender account ID. When provided (without campaignId), withdraws eligible invites across ALL campaigns using this account.',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'linkedinConnectionId',
					},
				},
			},
			{
				displayName: 'Withdraw Limit',
				name: 'withdrawLimit',
				description: 'Max number of profiles to withdraw per campaign run. Omit for no limit.',
				type: 'number',
				default: 1,
				typeOptions: {
					minValue: 1,
					maxValue: 500,
				},
				routing: {
					send: {
						type: 'body',
						property: 'withdrawLimit',
					},
				},
			},
		],
	},
	{
		displayName: 'Invitation ID',
		name: 'invitationId',
		description: 'The invitation to answer (from list_received_invitations)',
		type: 'string',
		default: '',
		required: true,
		routing: {
			send: {
				type: 'body',
				property: 'invitationId',
			},
		},
		displayOptions: {
			show: {
				resource: ['network'],
				operation: ['respond_to_invitation'],
			},
		},
	},
	{
		displayName: 'Action',
		name: 'actionChoice',
		description: 'Accept or decline',
		type: 'options',
		options: [
			{
				name: 'Accept',
				value: 'accept',
			},
			{
				name: 'Decline',
				value: 'decline',
			},
		],
		default: 'accept',
		required: true,
		routing: {
			send: {
				type: 'body',
				property: 'action',
			},
		},
		displayOptions: {
			show: {
				resource: ['network'],
				operation: ['respond_to_invitation'],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['network'],
				operation: ['respond_to_invitation'],
			},
		},
		options: [
			{
				displayName: 'Connection ID',
				name: 'connectionId',
				description:
					'Which of your LinkedIn accounts to act from (its ID from list_linkedin_accounts). Omit to use your first live one.',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'connectionId',
					},
				},
			},
		],
	},
	{
		displayName: 'Profile URL',
		name: 'profileUrl',
		description: "The person's LinkedIn profile URL (linkedin.com/in/…)",
		type: 'string',
		default: '',
		required: true,
		routing: {
			send: {
				type: 'body',
				property: 'profileUrl',
			},
		},
		displayOptions: {
			show: {
				resource: ['network'],
				operation: ['send_invitation'],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['network'],
				operation: ['send_invitation'],
			},
		},
		options: [
			{
				displayName: 'Connection ID',
				name: 'connectionId',
				description:
					'Which of your LinkedIn accounts to act from (its ID from list_linkedin_accounts). Omit to use your first live one.',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'connectionId',
					},
				},
			},
			{
				displayName: 'Email',
				name: 'email',
				description:
					"The person's email address — only for someone whose LinkedIn settings ask for it before they can be invited",
				type: 'string',
				default: '',
				placeholder: 'name@email.com',
				routing: {
					send: {
						type: 'body',
						property: 'email',
					},
				},
			},
			{
				displayName: 'Note',
				name: 'note',
				description:
					'Optional note sent with the invitation (max 300 characters; 200 on a free LinkedIn account)',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'note',
					},
				},
			},
		],
	},
	{
		displayName: 'Invitation ID',
		name: 'invitationId',
		description:
			'The sent invitation to take back (from list_sent_invitations, or returned by send_invitation)',
		type: 'string',
		default: '',
		required: true,
		routing: {
			send: {
				type: 'body',
				property: 'invitationId',
			},
		},
		displayOptions: {
			show: {
				resource: ['network'],
				operation: ['withdraw_invitation'],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['network'],
				operation: ['withdraw_invitation'],
			},
		},
		options: [
			{
				displayName: 'Connection ID',
				name: 'connectionId',
				description:
					'Which of your LinkedIn accounts to act from (its ID from list_linkedin_accounts). Omit to use your first live one.',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'connectionId',
					},
				},
			},
		],
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['network'],
				operation: ['withdraw_invitations'],
			},
		},
		options: [
			{
				displayName: 'Campaign ID',
				name: 'campaignId',
				description:
					'ID of a specific campaign to withdraw invites for. Provide either campaignId OR linkedinConnectionId, not both.',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'campaignId',
					},
				},
			},
			{
				displayName: 'Days Threshold',
				name: 'daysThreshold',
				description:
					'Only withdraw invites that have been pending for at least this many days (default: 7)',
				type: 'number',
				default: 1,
				typeOptions: {
					minValue: 1,
					maxValue: 90,
				},
				routing: {
					send: {
						type: 'body',
						property: 'daysThreshold',
					},
				},
			},
			{
				displayName: 'LinkedIn Connection ID',
				name: 'linkedinConnectionId',
				description:
					'LinkedIn sender account ID. When provided (without campaignId), withdraws eligible invites across ALL campaigns using this account.',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'linkedinConnectionId',
					},
				},
			},
			{
				displayName: 'Withdraw Limit',
				name: 'withdrawLimit',
				description: 'Max number of profiles to withdraw per campaign run. Omit for no limit.',
				type: 'number',
				default: 1,
				typeOptions: {
					minValue: 1,
					maxValue: 500,
				},
				routing: {
					send: {
						type: 'body',
						property: 'withdrawLimit',
					},
				},
			},
		],
	},
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['post'],
			},
		},
		options: [
			{
				name: 'Comment on Post',
				value: 'comment_on_post',
				action: 'Comment on a post',
				description: 'Comment on one post, or answer one comment on it',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/comment_on_post',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'Create Post',
				value: 'create_post',
				action: 'Publish a post',
				description: 'Publish one post, or repost one',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/create_post',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'Get Post',
				value: 'get_post',
				action: 'Get a post',
				description: 'Read one post',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/get_post',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'Get Post Engagers',
				value: 'get_post_engagers',
				action: 'Get who engaged with a post',
				description: 'List who reacted to and who commented on one post, together',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/get_post_engagers',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'Get Recent Posts',
				value: 'get_recent_posts',
				action: 'Get the recent posts of a person',
				description: "Read one person's latest posts, through a shared account",
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/get_recent_posts',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'List Comments by Person',
				value: 'list_comments_by_person',
				action: 'List the comments a person wrote',
				description: 'List the comments one person wrote, newest first',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/list_comments_by_person',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'List Post Comments',
				value: 'list_post_comments',
				action: 'List the comments of a post',
				description: 'List the comments on one post, or the replies to one comment',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/list_post_comments',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'List Post Reactions',
				value: 'list_post_reactions',
				action: 'List the reactions of a post',
				description: 'List who reacted to one post, or to one comment on it',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/list_post_reactions',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'List Posts by Author',
				value: 'list_posts_by_author',
				action: 'List the posts of a person or company',
				description: 'List the posts one person or one company page published, newest first',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/list_posts_by_author',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'List Reactions by Person',
				value: 'list_reactions_by_person',
				action: 'List what a person reacted to',
				description: 'List the posts and comments one person reacted to, newest first',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/list_reactions_by_person',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'React to Post',
				value: 'react_to_post',
				action: 'React to a post',
				description: 'React to one post, or to one comment on it',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/react_to_post',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
		],
		default: 'get_post',
	},
	{
		displayName: 'Post URL',
		name: 'postUrl',
		description: 'The LinkedIn post URL',
		type: 'string',
		default: '',
		required: true,
		routing: {
			send: {
				type: 'body',
				property: 'postUrl',
			},
		},
		displayOptions: {
			show: {
				resource: ['post'],
				operation: ['comment_on_post'],
			},
		},
	},
	{
		displayName: 'Text',
		name: 'text',
		description: 'The comment text',
		type: 'string',
		default: '',
		required: true,
		routing: {
			send: {
				type: 'body',
				property: 'text',
			},
		},
		displayOptions: {
			show: {
				resource: ['post'],
				operation: ['comment_on_post'],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['post'],
				operation: ['comment_on_post'],
			},
		},
		options: [
			{
				displayName: 'As Organization',
				name: 'asOrganization',
				description:
					"Act as a company page you administer instead of yourself: that page's numeric ID. No action here lists the pages you administer.",
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'asOrganization',
					},
				},
			},
			{
				displayName: 'Connection ID',
				name: 'connectionId',
				description:
					'Which of your LinkedIn accounts to act from (its ID from list_linkedin_accounts). Omit to use your first live one.',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'connectionId',
					},
				},
			},
			{
				displayName: 'Image URL',
				name: 'imageUrl',
				description: 'One image to attach (a public https link, up to 10 MB)',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'imageUrl',
					},
				},
			},
			{
				displayName: 'Link',
				name: 'link',
				description:
					'A link to show as a preview card. It should also appear in the text; otherwise LinkedIn adds it at the end.',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'link',
					},
				},
			},
			{
				displayName: 'Mentions',
				name: 'mentions',
				description:
					'People or companies to mention. Put {{0}}, {{1}}, … in the text where each one goes (its position in this list).',
				type: 'json',
				default: '[]',
				routing: {
					send: {
						type: 'body',
						property: 'mentions',
						value: '={{ typeof $value === "string" ? JSON.parse($value) : $value }}',
					},
				},
			},
			{
				displayName: 'Reply to Comment ID',
				name: 'replyToCommentId',
				description: 'ID of a comment on that post to reply to (from list_post_comments)',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'replyToCommentId',
					},
				},
			},
		],
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['post'],
				operation: ['create_post'],
			},
		},
		options: [
			{
				displayName: 'As Organization',
				name: 'asOrganization',
				description:
					"Act as a company page you administer instead of yourself: that page's numeric ID. No action here lists the pages you administer.",
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'asOrganization',
					},
				},
			},
			{
				displayName: 'Attachment URLs',
				name: 'attachmentUrls',
				description:
					'Images, one video or one document to attach. Public https links; each file up to 10 MB, 20 MB in total.',
				type: 'string',
				typeOptions: {
					multipleValues: true,
				},
				default: [],
				routing: {
					send: {
						type: 'body',
						property: 'attachmentUrls',
					},
				},
			},
			{
				displayName: 'Audience',
				name: 'audience',
				description:
					'Limit who sees the post (company-page posts). Each list holds LinkedIn IDs from lookup_search_ids (types LANGUAGE, POST_JOB_FUNCTION, SCHOOL, SENIORITY, INDUSTRY, REGION, LOCATION); headcount is company-size ranges such as { min: 51, max: 200 }.',
				type: 'json',
				default: '{}',
				routing: {
					send: {
						type: 'body',
						property: 'audience',
						value: '={{ typeof $value === "string" ? JSON.parse($value) : $value }}',
					},
				},
			},
			{
				displayName: 'Connection ID',
				name: 'connectionId',
				description:
					'Which of your LinkedIn accounts to act from (its ID from list_linkedin_accounts). Omit to use your first live one.',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'connectionId',
					},
				},
			},
			{
				displayName: 'Job Posting ID',
				name: 'jobPostingId',
				description: 'ID of one of your job postings to show as a card (from list_job_postings)',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'jobPostingId',
					},
				},
			},
			{
				displayName: 'Link',
				name: 'link',
				description:
					'A link to show as a preview card. It should also appear in the text; otherwise LinkedIn adds it at the end.',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'link',
					},
				},
			},
			{
				displayName: 'Mentions',
				name: 'mentions',
				description:
					'People or companies to mention. Put {{0}}, {{1}}, … in the text where each one goes (its position in this list).',
				type: 'json',
				default: '[]',
				routing: {
					send: {
						type: 'body',
						property: 'mentions',
						value: '={{ typeof $value === "string" ? JSON.parse($value) : $value }}',
					},
				},
			},
			{
				displayName: 'Repost Of',
				name: 'repostOf',
				description:
					'URL of an existing LinkedIn post to repost. With empty text it is a plain repost; with text, a repost with your thoughts.',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'repostOf',
					},
				},
			},
			{
				displayName: 'Text',
				name: 'text',
				description:
					'The post text, exactly as it should appear. May be empty only for a plain repost.',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'text',
					},
				},
			},
			{
				displayName: 'Video Thumbnail URL',
				name: 'videoThumbnailUrl',
				description: 'Cover image for an attached video (a public https link)',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'videoThumbnailUrl',
					},
				},
			},
		],
	},
	{
		displayName: 'Post',
		name: 'post',
		description: 'The LinkedIn post: its URL, or its ID (socialId) from an earlier result',
		type: 'string',
		default: '',
		required: true,
		routing: {
			send: {
				type: 'body',
				property: 'post',
			},
		},
		displayOptions: {
			show: {
				resource: ['post'],
				operation: ['get_post'],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['post'],
				operation: ['get_post'],
			},
		},
		options: [
			{
				displayName: 'Connection ID',
				name: 'connectionId',
				description:
					'Which of your LinkedIn accounts to act from (its ID from list_linkedin_accounts). Omit to use your first live one.',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'connectionId',
					},
				},
			},
		],
	},
	{
		displayName: 'Post URL',
		name: 'postUrl',
		description: 'The LinkedIn post URL (activity/share/ugcPost URL)',
		type: 'string',
		default: '',
		required: true,
		routing: {
			send: {
				type: 'body',
				property: 'postUrl',
			},
		},
		displayOptions: {
			show: {
				resource: ['post'],
				operation: ['get_post_engagers'],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['post'],
				operation: ['get_post_engagers'],
			},
		},
		options: [
			{
				displayName: 'Connection ID',
				name: 'connectionId',
				description: 'Which sender to read through. Omit to use the first live sender.',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'connectionId',
					},
				},
			},
			{
				displayName: 'Max Comments',
				name: 'maxComments',
				description: 'Max commenters to return (1–100, default 100)',
				type: 'number',
				default: 1,
				typeOptions: {
					minValue: 1,
					maxValue: 100,
				},
				routing: {
					send: {
						type: 'body',
						property: 'maxComments',
					},
				},
			},
			{
				displayName: 'Max Reactions',
				name: 'maxReactions',
				description: 'Max reactors (likers) to return (1–100, default 100)',
				type: 'number',
				default: 1,
				typeOptions: {
					minValue: 1,
					maxValue: 100,
				},
				routing: {
					send: {
						type: 'body',
						property: 'maxReactions',
					},
				},
			},
		],
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['post'],
				operation: ['get_recent_posts'],
			},
		},
		options: [
			{
				displayName: 'Max Results',
				name: 'maxResults',
				description:
					'Max recent posts to return (1–20, default 2: the newest plus a backup is usually all a personalized opener needs)',
				type: 'number',
				default: 1,
				typeOptions: {
					minValue: 1,
					maxValue: 20,
				},
				routing: {
					send: {
						type: 'body',
						property: 'limit',
					},
				},
			},
			{
				displayName: 'Profile URL',
				name: 'profileUrl',
				description:
					'LinkedIn profile URL of the person, e.g. a linkedinUrl from search_people_sales_navigator ("https://linkedin.com/in/…")',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'profileUrl',
					},
				},
			},
			{
				displayName: 'Provider ID',
				name: 'providerId',
				description:
					"The person's providerId from search_people_sales_navigator (an ACwAA… ID). Faster than profileUrl — skips the profile-resolution lookup.",
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'providerId',
					},
				},
			},
		],
	},
	{
		displayName: 'Person',
		name: 'person',
		description: 'The person: a LinkedIn profile URL or member ID',
		type: 'string',
		default: '',
		required: true,
		routing: {
			send: {
				type: 'body',
				property: 'person',
			},
		},
		displayOptions: {
			show: {
				resource: ['post'],
				operation: ['list_comments_by_person'],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['post'],
				operation: ['list_comments_by_person'],
			},
		},
		options: [
			{
				displayName: 'Connection ID',
				name: 'connectionId',
				description:
					'Which of your LinkedIn accounts to act from (its ID from list_linkedin_accounts). Omit to use your first live one.',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'connectionId',
					},
				},
			},
			{
				displayName: 'Cursor',
				name: 'cursor',
				description:
					'NextCursor from the previous call, to get the next page. Keep the other arguments the same.',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'cursor',
					},
				},
			},
			{
				displayName: 'Max Results',
				name: 'maxResults',
				description: 'How many to return (1–100, default 10)',
				type: 'number',
				default: 1,
				typeOptions: {
					minValue: 1,
					maxValue: 100,
				},
				routing: {
					send: {
						type: 'body',
						property: 'limit',
					},
				},
			},
		],
	},
	{
		displayName: 'Post',
		name: 'post',
		description: 'The LinkedIn post: its URL, or its ID (socialId) from an earlier result',
		type: 'string',
		default: '',
		required: true,
		routing: {
			send: {
				type: 'body',
				property: 'post',
			},
		},
		displayOptions: {
			show: {
				resource: ['post'],
				operation: ['list_post_comments'],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['post'],
				operation: ['list_post_comments'],
			},
		},
		options: [
			{
				displayName: 'Comment ID',
				name: 'commentId',
				description: "List the replies to this comment instead of the post's top-level comments",
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'commentId',
					},
				},
			},
			{
				displayName: 'Connection ID',
				name: 'connectionId',
				description:
					'Which of your LinkedIn accounts to act from (its ID from list_linkedin_accounts). Omit to use your first live one.',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'connectionId',
					},
				},
			},
			{
				displayName: 'Cursor',
				name: 'cursor',
				description:
					'NextCursor from the previous call, to get the next page. Keep the other arguments the same.',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'cursor',
					},
				},
			},
			{
				displayName: 'Max Results',
				name: 'maxResults',
				description: 'How many to return (1–100, default 25)',
				type: 'number',
				default: 1,
				typeOptions: {
					minValue: 1,
					maxValue: 100,
				},
				routing: {
					send: {
						type: 'body',
						property: 'limit',
					},
				},
			},
			{
				displayName: 'Sort By',
				name: 'sortBy',
				description: 'Order (default MOST_RECENT)',
				type: 'options',
				options: [
					{
						name: 'Most Recent',
						value: 'MOST_RECENT',
					},
					{
						name: 'Most Relevant',
						value: 'MOST_RELEVANT',
					},
				],
				default: 'MOST_RECENT',
				routing: {
					send: {
						type: 'body',
						property: 'sortBy',
					},
				},
			},
		],
	},
	{
		displayName: 'Post',
		name: 'post',
		description: 'The LinkedIn post: its URL, or its ID (socialId) from an earlier result',
		type: 'string',
		default: '',
		required: true,
		routing: {
			send: {
				type: 'body',
				property: 'post',
			},
		},
		displayOptions: {
			show: {
				resource: ['post'],
				operation: ['list_post_reactions'],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['post'],
				operation: ['list_post_reactions'],
			},
		},
		options: [
			{
				displayName: 'Comment ID',
				name: 'commentId',
				description: 'List the reactions to this comment instead of the post',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'commentId',
					},
				},
			},
			{
				displayName: 'Connection ID',
				name: 'connectionId',
				description:
					'Which of your LinkedIn accounts to act from (its ID from list_linkedin_accounts). Omit to use your first live one.',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'connectionId',
					},
				},
			},
			{
				displayName: 'Cursor',
				name: 'cursor',
				description:
					'NextCursor from the previous call, to get the next page. Keep the other arguments the same.',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'cursor',
					},
				},
			},
			{
				displayName: 'Max Results',
				name: 'maxResults',
				description: 'How many to return (1–100, default 25)',
				type: 'number',
				default: 1,
				typeOptions: {
					minValue: 1,
					maxValue: 100,
				},
				routing: {
					send: {
						type: 'body',
						property: 'limit',
					},
				},
			},
		],
	},
	{
		displayName: 'Author',
		name: 'author',
		description: "A LinkedIn profile URL or member ID — or a company's numeric ID",
		type: 'string',
		default: '',
		required: true,
		routing: {
			send: {
				type: 'body',
				property: 'author',
			},
		},
		displayOptions: {
			show: {
				resource: ['post'],
				operation: ['list_posts_by_author'],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['post'],
				operation: ['list_posts_by_author'],
			},
		},
		options: [
			{
				displayName: 'Connection ID',
				name: 'connectionId',
				description:
					'Which of your LinkedIn accounts to act from (its ID from list_linkedin_accounts). Omit to use your first live one.',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'connectionId',
					},
				},
			},
			{
				displayName: 'Cursor',
				name: 'cursor',
				description:
					'NextCursor from the previous call, to get the next page. Keep the other arguments the same.',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'cursor',
					},
				},
			},
			{
				displayName: 'Is Company',
				name: 'isCompany',
				description: 'Whether to switch this on. True when author is a company ID.',
				type: 'boolean',
				default: false,
				routing: {
					send: {
						type: 'body',
						property: 'isCompany',
					},
				},
			},
			{
				displayName: 'Max Results',
				name: 'maxResults',
				description: 'How many to return (1–100, default 10)',
				type: 'number',
				default: 1,
				typeOptions: {
					minValue: 1,
					maxValue: 100,
				},
				routing: {
					send: {
						type: 'body',
						property: 'limit',
					},
				},
			},
		],
	},
	{
		displayName: 'Person',
		name: 'person',
		description: 'The person: a LinkedIn profile URL or member ID',
		type: 'string',
		default: '',
		required: true,
		routing: {
			send: {
				type: 'body',
				property: 'person',
			},
		},
		displayOptions: {
			show: {
				resource: ['post'],
				operation: ['list_reactions_by_person'],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['post'],
				operation: ['list_reactions_by_person'],
			},
		},
		options: [
			{
				displayName: 'Connection ID',
				name: 'connectionId',
				description:
					'Which of your LinkedIn accounts to act from (its ID from list_linkedin_accounts). Omit to use your first live one.',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'connectionId',
					},
				},
			},
			{
				displayName: 'Cursor',
				name: 'cursor',
				description:
					'NextCursor from the previous call, to get the next page. Keep the other arguments the same.',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'cursor',
					},
				},
			},
			{
				displayName: 'Max Results',
				name: 'maxResults',
				description: 'How many to return (1–100, default 10)',
				type: 'number',
				default: 1,
				typeOptions: {
					minValue: 1,
					maxValue: 100,
				},
				routing: {
					send: {
						type: 'body',
						property: 'limit',
					},
				},
			},
		],
	},
	{
		displayName: 'Post URL',
		name: 'postUrl',
		description: 'The LinkedIn post URL',
		type: 'string',
		default: '',
		required: true,
		routing: {
			send: {
				type: 'body',
				property: 'postUrl',
			},
		},
		displayOptions: {
			show: {
				resource: ['post'],
				operation: ['react_to_post'],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['post'],
				operation: ['react_to_post'],
			},
		},
		options: [
			{
				displayName: 'As Organization',
				name: 'asOrganization',
				description:
					"Act as a company page you administer instead of yourself: that page's numeric ID. No action here lists the pages you administer.",
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'asOrganization',
					},
				},
			},
			{
				displayName: 'Comment ID',
				name: 'commentId',
				description:
					'React to this comment on the post instead of the post itself (its ID from list_post_comments)',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'commentId',
					},
				},
			},
			{
				displayName: 'Connection ID',
				name: 'connectionId',
				description:
					'Which of your LinkedIn accounts to act from (its ID from list_linkedin_accounts). Omit to use your first live one.',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'connectionId',
					},
				},
			},
			{
				displayName: 'Reaction',
				name: 'reaction',
				description: 'Which reaction to add (default like)',
				type: 'options',
				options: [
					{
						name: 'Celebrate',
						value: 'celebrate',
					},
					{
						name: 'Funny',
						value: 'funny',
					},
					{
						name: 'Insightful',
						value: 'insightful',
					},
					{
						name: 'Like',
						value: 'like',
					},
					{
						name: 'Love',
						value: 'love',
					},
					{
						name: 'Support',
						value: 'support',
					},
				],
				default: 'celebrate',
				routing: {
					send: {
						type: 'body',
						property: 'reaction',
					},
				},
			},
		],
	},
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['profile'],
			},
		},
		options: [
			{
				name: 'Endorse Skill',
				value: 'endorse_skill',
				action: 'Endorse a skill',
				description: "Endorse one skill on someone's profile",
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/endorse_skill',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'Get My Profile',
				value: 'get_my_profile',
				action: 'Get my profile',
				description: 'Read who each of your connected LinkedIn accounts is',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/get_my_profile',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'Get Profile',
				value: 'get_profile',
				action: 'Get a profile',
				description:
					"Read one person's profile in short, with their recent posts and their company",
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/get_profile',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'Get Profile Details',
				value: 'get_profile_details',
				action: 'Get a profile in depth',
				description: "Read one person's profile in depth, live, with the sections you ask for",
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/get_profile_details',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'Update My Profile',
				value: 'update_my_profile',
				action: 'Update my profile',
				description: 'Read, preview a change to, or change your own profile',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/update_my_profile',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
		],
		default: 'get_my_profile',
	},
	{
		displayName: 'Profile ID',
		name: 'profileId',
		description: "The person's LinkedIn member ID (from get_profile_details)",
		type: 'string',
		default: '',
		required: true,
		routing: {
			send: {
				type: 'body',
				property: 'profileId',
			},
		},
		displayOptions: {
			show: {
				resource: ['profile'],
				operation: ['endorse_skill'],
			},
		},
	},
	{
		displayName: 'Skill Endorsement ID',
		name: 'skillEndorsementId',
		description: "The skill's endorsement ID (from the skills section of get_profile_details)",
		type: 'number',
		default: -9007199254740991,
		typeOptions: {
			minValue: -9007199254740991,
			maxValue: 9007199254740991,
		},
		required: true,
		routing: {
			send: {
				type: 'body',
				property: 'skillEndorsementId',
			},
		},
		displayOptions: {
			show: {
				resource: ['profile'],
				operation: ['endorse_skill'],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['profile'],
				operation: ['endorse_skill'],
			},
		},
		options: [
			{
				displayName: 'Connection ID',
				name: 'connectionId',
				description:
					'Which of your LinkedIn accounts to act from (its ID from list_linkedin_accounts). Omit to use your first live one.',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'connectionId',
					},
				},
			},
		],
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['profile'],
				operation: ['get_my_profile'],
			},
		},
		options: [
			{
				displayName: 'Connection ID',
				name: 'connectionId',
				description:
					'Restrict to one LinkedIn sender. Omit to report every live sender in this setup.',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'connectionId',
					},
				},
			},
		],
	},
	{
		displayName: 'Profile URL',
		name: 'profileUrl',
		description:
			"The person's LinkedIn profile URL (https://linkedin.com/in/…) or public identifier",
		type: 'string',
		default: '',
		required: true,
		routing: {
			send: {
				type: 'body',
				property: 'profileUrl',
			},
		},
		displayOptions: {
			show: {
				resource: ['profile'],
				operation: ['get_profile'],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['profile'],
				operation: ['get_profile'],
			},
		},
		options: [
			{
				displayName: 'Connection ID',
				name: 'connectionId',
				description: 'Which sender to read through. Omit to use the first live sender.',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'connectionId',
					},
				},
			},
		],
	},
	{
		displayName: 'Person',
		name: 'person',
		description: 'The person: a LinkedIn profile URL or member ID',
		type: 'string',
		default: '',
		required: true,
		routing: {
			send: {
				type: 'body',
				property: 'person',
			},
		},
		displayOptions: {
			show: {
				resource: ['profile'],
				operation: ['get_profile_details'],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['profile'],
				operation: ['get_profile_details'],
			},
		},
		options: [
			{
				displayName: 'Connection ID',
				name: 'connectionId',
				description:
					'Which of your LinkedIn accounts to act from (its ID from list_linkedin_accounts). Omit to use your first live one.',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'connectionId',
					},
				},
			},
			{
				displayName: 'Notify',
				name: 'notify',
				description: 'Whether the person is told you viewed their profile (default false)',
				type: 'boolean',
				default: false,
				routing: {
					send: {
						type: 'body',
						property: 'notify',
					},
				},
			},
			{
				displayName: 'Sections',
				name: 'sections',
				description: 'Which sections to include in full. Omit for the basic profile.',
				type: 'json',
				default: '[]',
				routing: {
					send: {
						type: 'body',
						property: 'sections',
						value: '={{ typeof $value === "string" ? JSON.parse($value) : $value }}',
					},
				},
			},
			{
				displayName: 'Via',
				name: 'via',
				description: 'Read through this product instead of ordinary LinkedIn',
				type: 'options',
				options: [
					{
						name: 'Recruiter',
						value: 'recruiter',
					},
					{
						name: 'Sales Navigator',
						value: 'sales_navigator',
					},
				],
				default: 'recruiter',
				routing: {
					send: {
						type: 'body',
						property: 'via',
					},
				},
			},
		],
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['profile'],
				operation: ['update_my_profile'],
			},
		},
		options: [
			{
				displayName: 'About',
				name: 'about',
				description: 'New About section (max 2600 characters). Replaces the whole section.',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'about',
					},
				},
			},
			{
				displayName: 'Add Skills',
				name: 'addSkills',
				description:
					'Skills to ADD to the profile, by name (up to 20 per call). Skills already on the profile are kept; removing a skill is not possible here.',
				type: 'string',
				typeOptions: {
					multipleValues: true,
				},
				default: [],
				routing: {
					send: {
						type: 'body',
						property: 'addSkills',
					},
				},
			},
			{
				displayName: 'Confirm',
				name: 'confirm',
				description:
					'Whether to switch this on. false (default) = preview only, nothing changes. true = change the profile now (only after the user said yes).',
				type: 'boolean',
				default: false,
				routing: {
					send: {
						type: 'body',
						property: 'confirm',
					},
				},
			},
			{
				displayName: 'Connection ID',
				name: 'connectionId',
				description:
					'Whose profile to edit: the LinkedIn account ID from list_linkedin_accounts. May be omitted only when the setup has exactly one live sender.',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'connectionId',
					},
				},
			},
			{
				displayName: 'Cover Picture URL',
				name: 'coverPictureUrl',
				description:
					"New COVER (banner) picture: a public https:// link straight to a JPEG or PNG file (max 8MB). LinkedIn's banner is 1584×396.",
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'coverPictureUrl',
					},
				},
			},
			{
				displayName: 'Education',
				name: 'education',
				description: 'Add or edit ONE education entry',
				type: 'json',
				default: '{}',
				routing: {
					send: {
						type: 'body',
						property: 'education',
						value: '={{ typeof $value === "string" ? JSON.parse($value) : $value }}',
					},
				},
			},
			{
				displayName: 'Experience',
				name: 'experience',
				description: 'Add or edit ONE experience entry',
				type: 'json',
				default: '{}',
				routing: {
					send: {
						type: 'body',
						property: 'experience',
						value: '={{ typeof $value === "string" ? JSON.parse($value) : $value }}',
					},
				},
			},
			{
				displayName: 'Headline',
				name: 'headline',
				description: 'New headline — the line under the name (max 220 characters)',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'headline',
					},
				},
			},
			{
				displayName: 'Location',
				name: 'location',
				description:
					'New profile location as a place name, e.g. "Austin, Texas". Matched to a LinkedIn place — the preview shows the match.',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'location',
					},
				},
			},
			{
				displayName: 'Location ID',
				name: 'locationId',
				description:
					'An exact LinkedIn place ID, taken from locationOptions in a preview. Overrides location.',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'locationId',
					},
				},
			},
			{
				displayName: 'Open to Work',
				name: 'openToWork',
				description: 'Set the "open to work" job preferences. It cannot be turned off from here.',
				type: 'json',
				default: '{}',
				routing: {
					send: {
						type: 'body',
						property: 'openToWork',
						value: '={{ typeof $value === "string" ? JSON.parse($value) : $value }}',
					},
				},
			},
			{
				displayName: 'Picture URL',
				name: 'pictureUrl',
				description:
					'New PROFILE picture: a public https:// link straight to a JPEG or PNG file (max 8MB). LinkedIn applies its default crop.',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'pictureUrl',
					},
				},
			},
			{
				displayName: 'Postal Code',
				name: 'postalCode',
				description: '5-digit postal code to go with the location (optional)',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'postalCode',
					},
				},
			},
			{
				displayName: 'Website Link',
				name: 'websiteLink',
				description: 'The link shown near the top of the profile',
				type: 'json',
				default: '{}',
				routing: {
					send: {
						type: 'body',
						property: 'websiteLink',
						value: '={{ typeof $value === "string" ? JSON.parse($value) : $value }}',
					},
				},
			},
		],
	},
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['recruiter'],
			},
		},
		options: [
			{
				name: 'Get Hiring Project',
				value: 'get_hiring_project',
				action: 'Get a recruiter hiring project',
				description: 'Read one Recruiter hiring project',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/get_hiring_project',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'List Hiring Projects',
				value: 'list_hiring_projects',
				action: 'List recruiter hiring projects',
				description: 'List your Recruiter hiring projects',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/list_hiring_projects',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'Move Recruiter Candidate',
				value: 'move_recruiter_candidate',
				action: 'Add or move a recruiter candidate',
				description:
					"Put one person into a hiring project's pipeline, or move them to another stage",
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/move_recruiter_candidate',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'Reject Recruiter Applicant',
				value: 'reject_recruiter_applicant',
				action: 'Reject a recruiter applicant',
				description: 'Reject one applicant in a hiring project, with a reason',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/reject_recruiter_applicant',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
		],
		default: 'get_hiring_project',
	},
	{
		displayName: 'Project ID',
		name: 'projectId',
		description: 'The hiring project ID (from list_hiring_projects)',
		type: 'string',
		default: '',
		required: true,
		routing: {
			send: {
				type: 'body',
				property: 'projectId',
			},
		},
		displayOptions: {
			show: {
				resource: ['recruiter'],
				operation: ['get_hiring_project'],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['recruiter'],
				operation: ['get_hiring_project'],
			},
		},
		options: [
			{
				displayName: 'Connection ID',
				name: 'connectionId',
				description:
					'Which of your LinkedIn accounts to act from (its ID from list_linkedin_accounts). Omit to use your first live one.',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'connectionId',
					},
				},
			},
		],
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['recruiter'],
				operation: ['list_hiring_projects'],
			},
		},
		options: [
			{
				displayName: 'Connection ID',
				name: 'connectionId',
				description:
					'Which of your LinkedIn accounts to act from (its ID from list_linkedin_accounts). Omit to use your first live one.',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'connectionId',
					},
				},
			},
			{
				displayName: 'Cursor',
				name: 'cursor',
				description:
					'NextCursor from the previous call, to get the next page. Keep the other arguments the same.',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'cursor',
					},
				},
			},
			{
				displayName: 'Max Results',
				name: 'maxResults',
				description: 'How many to return (1–100, default 25)',
				type: 'number',
				default: 1,
				typeOptions: {
					minValue: 1,
					maxValue: 100,
				},
				routing: {
					send: {
						type: 'body',
						property: 'limit',
					},
				},
			},
			{
				displayName: 'Sort By',
				name: 'sortBy',
				description: 'Order by (default ACCESSED_TIME)',
				type: 'options',
				options: [
					{
						name: 'Accessed Time',
						value: 'ACCESSED_TIME',
					},
					{
						name: 'Created Time',
						value: 'CREATED_TIME',
					},
					{
						name: 'Engaged Time',
						value: 'ENGAGED_TIME',
					},
					{
						name: 'Engagement Count',
						value: 'ENGAGEMENT_COUNT',
					},
					{
						name: 'Favorite',
						value: 'FAVORITE',
					},
					{
						name: 'Name',
						value: 'NAME',
					},
				],
				default: 'ACCESSED_TIME',
				routing: {
					send: {
						type: 'body',
						property: 'sortBy',
					},
				},
			},
			{
				displayName: 'Sort Order',
				name: 'sortOrder',
				description: 'Default DESCENDING',
				type: 'options',
				options: [
					{
						name: 'Ascending',
						value: 'ASCENDING',
					},
					{
						name: 'Descending',
						value: 'DESCENDING',
					},
				],
				default: 'ASCENDING',
				routing: {
					send: {
						type: 'body',
						property: 'sortOrder',
					},
				},
			},
			{
				displayName: 'State',
				name: 'state',
				description: 'Which projects (default ACTIVE)',
				type: 'json',
				default: '[]',
				routing: {
					send: {
						type: 'body',
						property: 'state',
						value: '={{ typeof $value === "string" ? JSON.parse($value) : $value }}',
					},
				},
			},
		],
	},
	{
		displayName: 'Candidate ID',
		name: 'candidateId',
		description: "The person's Recruiter ID (AE…)",
		type: 'string',
		default: '',
		required: true,
		routing: {
			send: {
				type: 'body',
				property: 'candidateId',
			},
		},
		displayOptions: {
			show: {
				resource: ['recruiter'],
				operation: ['move_recruiter_candidate'],
			},
		},
	},
	{
		displayName: 'Action',
		name: 'actionChoice',
		description:
			'Add_candidate: add someone you sourced. add_applicant: add someone who applied. change_stage: move someone already in the pipeline.',
		type: 'options',
		options: [
			{
				name: 'Add Applicant',
				value: 'add_applicant',
			},
			{
				name: 'Add Candidate',
				value: 'add_candidate',
			},
			{
				name: 'Change Stage',
				value: 'change_stage',
			},
		],
		default: 'add_applicant',
		required: true,
		routing: {
			send: {
				type: 'body',
				property: 'action',
			},
		},
		displayOptions: {
			show: {
				resource: ['recruiter'],
				operation: ['move_recruiter_candidate'],
			},
		},
	},
	{
		displayName: 'Hiring Project ID',
		name: 'hiringProjectId',
		description: 'The hiring project (from list_hiring_projects)',
		type: 'string',
		default: '',
		required: true,
		routing: {
			send: {
				type: 'body',
				property: 'hiringProjectId',
			},
		},
		displayOptions: {
			show: {
				resource: ['recruiter'],
				operation: ['move_recruiter_candidate'],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['recruiter'],
				operation: ['move_recruiter_candidate'],
			},
		},
		options: [
			{
				displayName: 'Connection ID',
				name: 'connectionId',
				description:
					'Which of your LinkedIn accounts to act from (its ID from list_linkedin_accounts). Omit to use your first live one.',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'connectionId',
					},
				},
			},
			{
				displayName: 'Stage',
				name: 'stage',
				description: 'The pipeline stage (default UNCONTACTED)',
				type: 'options',
				options: [
					{
						name: 'Contacted',
						value: 'CONTACTED',
					},
					{
						name: 'Replied',
						value: 'REPLIED',
					},
					{
						name: 'Uncontacted',
						value: 'UNCONTACTED',
					},
				],
				default: 'CONTACTED',
				routing: {
					send: {
						type: 'body',
						property: 'stage',
					},
				},
			},
		],
	},
	{
		displayName: 'Applicant ID',
		name: 'applicantId',
		description: "The applicant's Recruiter ID (AE…)",
		type: 'string',
		default: '',
		required: true,
		routing: {
			send: {
				type: 'body',
				property: 'applicantId',
			},
		},
		displayOptions: {
			show: {
				resource: ['recruiter'],
				operation: ['reject_recruiter_applicant'],
			},
		},
	},
	{
		displayName: 'Hiring Project ID',
		name: 'hiringProjectId',
		description: 'The hiring project (from list_hiring_projects)',
		type: 'string',
		default: '',
		required: true,
		routing: {
			send: {
				type: 'body',
				property: 'hiringProjectId',
			},
		},
		displayOptions: {
			show: {
				resource: ['recruiter'],
				operation: ['reject_recruiter_applicant'],
			},
		},
	},
	{
		displayName: 'Reason',
		name: 'reason',
		type: 'options',
		options: [
			{
				name: 'More Qualified Candidates',
				value: 'MORE_QUALIFIED_CANDIDATES',
			},
			{
				name: 'Not Considered or Reason Not Specified',
				value: 'NOT_CONSIDERED_OR_REASON_NOT_SPECIFIED',
			},
			{
				name: 'Not in Desired Location',
				value: 'NOT_IN_DESIRED_LOCATION',
			},
			{
				name: 'Not Meet Basic Qualifications',
				value: 'NOT_MEET_BASIC_QUALIFICATIONS',
			},
			{
				name: 'Withdrew Application',
				value: 'WITHDREW_APPLICATION',
			},
		],
		default: 'MORE_QUALIFIED_CANDIDATES',
		required: true,
		routing: {
			send: {
				type: 'body',
				property: 'reason',
			},
		},
		displayOptions: {
			show: {
				resource: ['recruiter'],
				operation: ['reject_recruiter_applicant'],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['recruiter'],
				operation: ['reject_recruiter_applicant'],
			},
		},
		options: [
			{
				displayName: 'Connection ID',
				name: 'connectionId',
				description:
					'Which of your LinkedIn accounts to act from (its ID from list_linkedin_accounts). Omit to use your first live one.',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'connectionId',
					},
				},
			},
			{
				displayName: 'Notify At',
				name: 'notifyAt',
				description: 'When to send the notice (ISO 8601 UTC). Default: now.',
				type: 'dateTime',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'notifyAt',
					},
				},
			},
			{
				displayName: 'Notify Message',
				name: 'notifyMessage',
				description:
					'Text of the rejection notice to send the applicant. Omit to reject without telling them.',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'notifyMessage',
					},
				},
			},
		],
	},
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['salesNavigator'],
			},
		},
		options: [
			{
				name: 'Save Lead',
				value: 'save_lead',
				action: 'Save a sales navigator lead',
				description: 'Save one person as a lead in your Sales Navigator',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/save_lead',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
		],
		default: 'save_lead',
	},
	{
		displayName: 'Lead',
		name: 'lead',
		description: "The person's Sales Navigator lead URL, or their Sales Navigator ID (ACw…)",
		type: 'string',
		default: '',
		required: true,
		routing: {
			send: {
				type: 'body',
				property: 'lead',
			},
		},
		displayOptions: {
			show: {
				resource: ['salesNavigator'],
				operation: ['save_lead'],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['salesNavigator'],
				operation: ['save_lead'],
			},
		},
		options: [
			{
				displayName: 'Connection ID',
				name: 'connectionId',
				description:
					'Which of your LinkedIn accounts to act from (its ID from list_linkedin_accounts). Omit to use your first live one.',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'connectionId',
					},
				},
			},
			{
				displayName: 'List ID',
				name: 'listId',
				description:
					'Save into this lead list (lookup_search_ids type LEAD_LISTS, service SALES_NAVIGATOR). Omit to save without a list.',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'listId',
					},
				},
			},
		],
	},
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['search'],
			},
		},
		options: [
			{
				name: 'Count People Sales Navigator',
				value: 'count_people_sales_navigator',
				action: 'Count people in sales navigator',
				description: 'Count how many people match a Sales Navigator search, without returning them',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/count_people_sales_navigator',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'Find Decision Makers',
				value: 'find_decision_makers',
				action: 'Find decision makers at a company',
				description:
					'Find the people at one company by title, seniority and function, through a shared Sales Navigator seat',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/find_decision_makers',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'Get Company',
				value: 'get_company',
				action: 'Get a company page',
				description: 'Read one company page',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/get_company',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'List Funding Signals',
				value: 'list_funding_signals',
				action: 'List recently funded companies',
				description:
					'List companies that recently raised funding, through a shared Sales Navigator seat',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/list_funding_signals',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'Lookup Search IDs',
				value: 'lookup_search_ids',
				action: 'Look up the ID for a search filter',
				description:
					"Find LinkedIn's ID for a place, company, school, industry, job title and the like, by name",
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/lookup_search_ids',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'Search Companies',
				value: 'search_companies',
				action: 'Search companies',
				description:
					'Find companies in Sales Navigator through a shared seat, by industry, place, size and recent signals',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/search_companies',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'Search LinkedIn',
				value: 'search_linkedin',
				action: 'Search with any filter',
				description:
					'Run a search from a results link copied out of LinkedIn, Sales Navigator or Recruiter',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/search_linkedin',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'Search LinkedIn Companies',
				value: 'search_linkedin_companies',
				action: 'Search companies with every filter typed',
				description:
					'Search company pages on ordinary LinkedIn, with each LinkedIn filter as its own typed input',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/search_linkedin_companies',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'Search LinkedIn Jobs',
				value: 'search_linkedin_jobs',
				action: 'Search jobs with every filter typed',
				description:
					'Search job listings on LinkedIn, with each LinkedIn filter as its own typed input',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/search_linkedin_jobs',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'Search LinkedIn People',
				value: 'search_linkedin_people',
				action: 'Search people with every filter typed',
				description:
					'Search people on ordinary LinkedIn, with each LinkedIn filter as its own typed input',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/search_linkedin_people',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'Search LinkedIn Posts',
				value: 'search_linkedin_posts',
				action: 'Search posts with every filter typed',
				description: 'Search posts on LinkedIn, with each LinkedIn filter as its own typed input',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/search_linkedin_posts',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'Search LinkedIn Recruiter People',
				value: 'search_linkedin_recruiter_people',
				action: 'Search candidates in my recruiter with every filter typed',
				description:
					'Search candidates in Recruiter on your own seat, with each Recruiter filter as its own typed input',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/search_linkedin_recruiter_people',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'Search LinkedIn Sales Navigator Companies',
				value: 'search_linkedin_sales_navigator_companies',
				action: 'Search companies in my sales navigator with every filter typed',
				description:
					'Search companies in Sales Navigator on your own seat, with each Sales Navigator filter as its own typed input',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/search_linkedin_sales_navigator_companies',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'Search LinkedIn Sales Navigator People',
				value: 'search_linkedin_sales_navigator_people',
				action: 'Search people in my sales navigator with every filter typed',
				description:
					'Search people in Sales Navigator on your own seat, with each Sales Navigator filter as its own typed input',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/search_linkedin_sales_navigator_people',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'Search People',
				value: 'search_people',
				action: 'Search people',
				description:
					'Search people on ordinary LinkedIn by plain words, a place name and connection degree',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/search_people',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'Search People Sales Navigator',
				value: 'search_people_sales_navigator',
				action: 'Search people in sales navigator',
				description:
					'Search people in Sales Navigator through a shared seat, by names of titles, places, industries and companies',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/search_people_sales_navigator',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'Search Posts',
				value: 'search_posts',
				action: 'Search posts',
				description: 'Search posts by words, date and who wrote or is mentioned in them, by name',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/search_posts',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
		],
		default: 'count_people_sales_navigator',
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['search'],
				operation: ['count_people_sales_navigator'],
			},
		},
		options: [
			{
				displayName: 'Changed Jobs',
				name: 'changedJobs',
				description:
					'Whether to switch this on. Only people who recently changed jobs (buying signal).',
				type: 'boolean',
				default: false,
				routing: {
					send: {
						type: 'body',
						property: 'changedJobs',
					},
				},
			},
			{
				displayName: 'Companies',
				name: 'companies',
				description:
					'Current companies by name, e.g. ["Google","Stripe"]. Each name is looked up and the top match used — when you already have LinkedIn company IDs (search_companies / list_funding_signals return companyId), pass companyIds instead.',
				type: 'string',
				typeOptions: {
					multipleValues: true,
				},
				default: [],
				routing: {
					send: {
						type: 'body',
						property: 'companies',
					},
				},
			},
			{
				displayName: 'Company Headcounts',
				name: 'companyHeadcounts',
				description:
					'Company size bands. Valid: self-employed, 1-10, 11-50, 51-200, 201-500, 501-1000, 1001-5000, 5001-10000, 10001+.',
				type: 'string',
				typeOptions: {
					multipleValues: true,
				},
				default: [],
				routing: {
					send: {
						type: 'body',
						property: 'companyHeadcounts',
					},
				},
			},
			{
				displayName: 'Company IDs',
				name: 'companyIds',
				description:
					'Current companies by LinkedIn company ID — the companyId values search_companies / list_funding_signals return (up to 100). Exact: no name lookup, so no same-name mix-ups. Combine with seniorities and changedJobs / postedOnLinkedIn to get the decision-makers at signal companies who just moved / are posting.',
				type: 'json',
				default: '[]',
				routing: {
					send: {
						type: 'body',
						property: 'companyIds',
						value: '={{ typeof $value === "string" ? JSON.parse($value) : $value }}',
					},
				},
			},
			{
				displayName: 'Company Max Revenue Millions',
				name: 'companyMaxRevenueMillions',
				description:
					'Only people at companies with at most this annual revenue, in millions (e.g. 100 = up to $100M). Same brackets as companyMinRevenueMillions.',
				type: 'number',
				default: 0,
				routing: {
					send: {
						type: 'body',
						property: 'companyMaxRevenueMillions',
					},
				},
			},
			{
				displayName: 'Company Min Revenue Millions',
				name: 'companyMinRevenueMillions',
				description:
					"Only people at companies with at least this annual revenue, in millions (e.g. 10 = $10M+) — use it to target companies that can afford the user's price. LinkedIn uses fixed brackets (0, 0.2, 1, 2.5, 5, 10, 20, 50, 100, 500, 1000); other values widen to the nearest one. The companies are matched on the same industries / companyHeadcounts / locations (as HQ location). Revenue is LinkedIn's estimate — companies without one are left out.",
				type: 'number',
				default: 0,
				routing: {
					send: {
						type: 'body',
						property: 'companyMinRevenueMillions',
					},
				},
			},
			{
				displayName: 'Functions',
				name: 'functions',
				description: 'Job functions/departments, e.g. ["Engineering","Sales","Marketing"]',
				type: 'string',
				typeOptions: {
					multipleValues: true,
				},
				default: [],
				routing: {
					send: {
						type: 'body',
						property: 'functions',
					},
				},
			},
			{
				displayName: 'Industries',
				name: 'industries',
				description: 'Company industries in plain English, e.g. ["Software","Financial Services"]',
				type: 'string',
				typeOptions: {
					multipleValues: true,
				},
				default: [],
				routing: {
					send: {
						type: 'body',
						property: 'industries',
					},
				},
			},
			{
				displayName: 'Keywords',
				name: 'keywords',
				description:
					'Free-text keywords searched across all profile fields (title, headline, about, company)',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'keywords',
					},
				},
			},
			{
				displayName: 'Locations',
				name: 'locations',
				description:
					'Person locations in plain English, e.g. ["United States","London"]. Resolved to LinkedIn regions automatically.',
				type: 'string',
				typeOptions: {
					multipleValues: true,
				},
				default: [],
				routing: {
					send: {
						type: 'body',
						property: 'locations',
					},
				},
			},
			{
				displayName: 'Posted on LinkedIn',
				name: 'postedOnLinkedIn',
				description:
					'Whether to switch this on. Only people who recently posted on LinkedIn (active/reachable signal).',
				type: 'boolean',
				default: false,
				routing: {
					send: {
						type: 'body',
						property: 'postedOnLinkedIn',
					},
				},
			},
			{
				displayName: 'Revenue Currency',
				name: 'revenueCurrency',
				description: 'ISO currency of the revenue band, e.g. "USD" (default), "EUR", "GBP"',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'revenueCurrency',
					},
				},
			},
			{
				displayName: 'Seniorities',
				name: 'seniorities',
				description:
					'Seniority levels, e.g. ["CXO","VP","Director","Manager"] (owner/partner, cxo, vice_president, director, experienced_manager, entry_level_manager, strategic, senior, entry_level, in_training)',
				type: 'string',
				typeOptions: {
					multipleValues: true,
				},
				default: [],
				routing: {
					send: {
						type: 'body',
						property: 'seniorities',
					},
				},
			},
			{
				displayName: 'Titles',
				name: 'titles',
				description:
					'Job titles, e.g. ["Chief Technology Officer","VP of Engineering"]. Matched as OR\'d keywords — pass variants to go broad.',
				type: 'string',
				typeOptions: {
					multipleValues: true,
				},
				default: [],
				routing: {
					send: {
						type: 'body',
						property: 'titles',
					},
				},
			},
		],
	},
	{
		displayName: 'Company',
		name: 'company',
		description: 'Company name, e.g. "Stripe". Resolved to the LinkedIn company automatically.',
		type: 'string',
		default: '',
		required: true,
		routing: {
			send: {
				type: 'body',
				property: 'company',
			},
		},
		displayOptions: {
			show: {
				resource: ['search'],
				operation: ['find_decision_makers'],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['search'],
				operation: ['find_decision_makers'],
			},
		},
		options: [
			{
				displayName: 'Confirm',
				name: 'confirm',
				description:
					'Whether to switch this on. false (default) = cost estimate only. true = pull and charge after the user agreed.',
				type: 'boolean',
				default: false,
				routing: {
					send: {
						type: 'body',
						property: 'confirm',
					},
				},
			},
			{
				displayName: 'Format',
				name: 'format',
				description:
					'Table (default) = rows for a table. csv = also return an export-ready CSV string.',
				type: 'options',
				options: [
					{
						name: 'Csv',
						value: 'csv',
					},
					{
						name: 'Table',
						value: 'table',
					},
				],
				default: 'csv',
				routing: {
					send: {
						type: 'body',
						property: 'format',
					},
				},
			},
			{
				displayName: 'Functions',
				name: 'functions',
				description: 'Narrow by job function/department, e.g. ["Sales","Marketing","Engineering"]',
				type: 'string',
				typeOptions: {
					multipleValues: true,
				},
				default: [],
				routing: {
					send: {
						type: 'body',
						property: 'functions',
					},
				},
			},
			{
				displayName: 'Locations',
				name: 'locations',
				description: 'Optional person locations to narrow to, e.g. ["United States"]',
				type: 'string',
				typeOptions: {
					multipleValues: true,
				},
				default: [],
				routing: {
					send: {
						type: 'body',
						property: 'locations',
					},
				},
			},
			{
				displayName: 'Max Results',
				name: 'maxResults',
				description: 'Max people to return (1–100, default 15)',
				type: 'number',
				default: 1,
				typeOptions: {
					minValue: 1,
					maxValue: 100,
				},
				routing: {
					send: {
						type: 'body',
						property: 'limit',
					},
				},
			},
			{
				displayName: 'Seniorities',
				name: 'seniorities',
				description:
					'Narrow by seniority level, e.g. ["CXO","VP","Director"] (owner/partner, cxo, vice_president, director, experienced_manager, entry_level_manager, strategic, senior, entry_level, in_training)',
				type: 'string',
				typeOptions: {
					multipleValues: true,
				},
				default: [],
				routing: {
					send: {
						type: 'body',
						property: 'seniorities',
					},
				},
			},
			{
				displayName: 'Titles',
				name: 'titles',
				description:
					'Specific senior roles to target, e.g. ["VP of Sales","Head of Growth"]. Omit for the full decision-maker set (C-level/VP/Director/Founder).',
				type: 'string',
				typeOptions: {
					multipleValues: true,
				},
				default: [],
				routing: {
					send: {
						type: 'body',
						property: 'titles',
					},
				},
			},
		],
	},
	{
		displayName: 'Company',
		name: 'company',
		description:
			'The company: its LinkedIn page URL, its name as it appears in that URL, or its numeric ID',
		type: 'string',
		default: '',
		required: true,
		routing: {
			send: {
				type: 'body',
				property: 'company',
			},
		},
		displayOptions: {
			show: {
				resource: ['search'],
				operation: ['get_company'],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['search'],
				operation: ['get_company'],
			},
		},
		options: [
			{
				displayName: 'Connection ID',
				name: 'connectionId',
				description:
					'Which of your LinkedIn accounts to act from (its ID from list_linkedin_accounts). Omit to use your first live one.',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'connectionId',
					},
				},
			},
		],
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['search'],
				operation: ['list_funding_signals'],
			},
		},
		options: [
			{
				displayName: 'Headcounts',
				name: 'headcounts',
				description:
					'Company size bands. Valid: self-employed, 1-10, 11-50, 51-200, 201-500, 501-1000, 1001-5000, 5001-10000, 10001+.',
				type: 'string',
				typeOptions: {
					multipleValues: true,
				},
				default: [],
				routing: {
					send: {
						type: 'body',
						property: 'headcounts',
					},
				},
			},
			{
				displayName: 'Industries',
				name: 'industries',
				description: 'Company industries in plain English, e.g. ["Software","Financial Services"]',
				type: 'string',
				typeOptions: {
					multipleValues: true,
				},
				default: [],
				routing: {
					send: {
						type: 'body',
						property: 'industries',
					},
				},
			},
			{
				displayName: 'Locations',
				name: 'locations',
				description: 'Company HQ locations, e.g. ["United States","Europe"]',
				type: 'string',
				typeOptions: {
					multipleValues: true,
				},
				default: [],
				routing: {
					send: {
						type: 'body',
						property: 'locations',
					},
				},
			},
			{
				displayName: 'Max Results',
				name: 'maxResults',
				description: 'Max companies to return (1–100, default 20)',
				type: 'number',
				default: 1,
				typeOptions: {
					minValue: 1,
					maxValue: 100,
				},
				routing: {
					send: {
						type: 'body',
						property: 'limit',
					},
				},
			},
			{
				displayName: 'Max Revenue Millions',
				name: 'maxRevenueMillions',
				description: 'Maximum annual revenue in millions (same brackets)',
				type: 'number',
				default: 0,
				routing: {
					send: {
						type: 'body',
						property: 'maxRevenueMillions',
					},
				},
			},
			{
				displayName: 'Min Revenue Millions',
				name: 'minRevenueMillions',
				description:
					"Minimum annual revenue in millions (e.g. 10 = $10M+). LinkedIn uses fixed brackets (0, 0.2, 1, 2.5, 5, 10, 20, 50, 100, 500, 1000); other values widen to the nearest one. Revenue is LinkedIn's estimate — companies without one are left out.",
				type: 'number',
				default: 0,
				routing: {
					send: {
						type: 'body',
						property: 'minRevenueMillions',
					},
				},
			},
			{
				displayName: 'Revenue Currency',
				name: 'revenueCurrency',
				description: 'Currency for the revenue band (default USD)',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'revenueCurrency',
					},
				},
			},
		],
	},
	{
		displayName: 'Type',
		name: 'type',
		description: 'What kind of thing to look up',
		type: 'options',
		options: [
			{
				name: 'Account Lists',
				value: 'ACCOUNT_LISTS',
			},
			{
				name: 'Company',
				value: 'COMPANY',
			},
			{
				name: 'Connections',
				value: 'CONNECTIONS',
			},
			{
				name: 'Degree',
				value: 'DEGREE',
			},
			{
				name: 'Department',
				value: 'DEPARTMENT',
			},
			{
				name: 'Employment Type',
				value: 'EMPLOYMENT_TYPE',
			},
			{
				name: 'Groups',
				value: 'GROUPS',
			},
			{
				name: 'Hiring Projects',
				value: 'HIRING_PROJECTS',
			},
			{
				name: 'Industry',
				value: 'INDUSTRY',
			},
			{
				name: 'Job Function',
				value: 'JOB_FUNCTION',
			},
			{
				name: 'Job Title',
				value: 'JOB_TITLE',
			},
			{
				name: 'Language',
				value: 'LANGUAGE',
			},
			{
				name: 'Lead Lists',
				value: 'LEAD_LISTS',
			},
			{
				name: 'Location',
				value: 'LOCATION',
			},
			{
				name: 'People',
				value: 'PEOPLE',
			},
			{
				name: 'Persona',
				value: 'PERSONA',
			},
			{
				name: 'Post Job Function',
				value: 'POST_JOB_FUNCTION',
			},
			{
				name: 'Postal Code',
				value: 'POSTAL_CODE',
			},
			{
				name: 'Recent Searches',
				value: 'RECENT_SEARCHES',
			},
			{
				name: 'Region',
				value: 'REGION',
			},
			{
				name: 'Sales Industry',
				value: 'SALES_INDUSTRY',
			},
			{
				name: 'Saved Accounts',
				value: 'SAVED_ACCOUNTS',
			},
			{
				name: 'Saved Filters',
				value: 'SAVED_FILTERS',
			},
			{
				name: 'Saved Searches',
				value: 'SAVED_SEARCHES',
			},
			{
				name: 'School',
				value: 'SCHOOL',
			},
			{
				name: 'Seniority',
				value: 'SENIORITY',
			},
			{
				name: 'Service',
				value: 'SERVICE',
			},
			{
				name: 'Skill',
				value: 'SKILL',
			},
			{
				name: 'Technologies',
				value: 'TECHNOLOGIES',
			},
		],
		default: 'ACCOUNT_LISTS',
		required: true,
		routing: {
			send: {
				type: 'body',
				property: 'type',
			},
		},
		displayOptions: {
			show: {
				resource: ['search'],
				operation: ['lookup_search_ids'],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['search'],
				operation: ['lookup_search_ids'],
			},
		},
		options: [
			{
				displayName: 'Connection ID',
				name: 'connectionId',
				description:
					'Which of your LinkedIn accounts to act from (its ID from list_linkedin_accounts). Omit to use your first live one.',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'connectionId',
					},
				},
			},
			{
				displayName: 'Keywords',
				name: 'keywords',
				description:
					'The name to look for, e.g. "Berlin" or "Software". Not used for EMPLOYMENT_TYPE.',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'keywords',
					},
				},
			},
			{
				displayName: 'Max Results',
				name: 'maxResults',
				description: 'How many to return (1–100, default 10)',
				type: 'number',
				default: 1,
				typeOptions: {
					minValue: 1,
					maxValue: 100,
				},
				routing: {
					send: {
						type: 'body',
						property: 'limit',
					},
				},
			},
			{
				displayName: 'Service',
				name: 'service',
				description: 'Whose list to search (default CLASSIC)',
				type: 'options',
				options: [
					{
						name: 'Classic',
						value: 'CLASSIC',
					},
					{
						name: 'Recruiter',
						value: 'RECRUITER',
					},
					{
						name: 'Sales Navigator',
						value: 'SALES_NAVIGATOR',
					},
				],
				default: 'CLASSIC',
				routing: {
					send: {
						type: 'body',
						property: 'service',
					},
				},
			},
		],
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['search'],
				operation: ['search_companies'],
			},
		},
		options: [
			{
				displayName: 'Growing Team Min Pct',
				name: 'growingTeamMinPct',
				description: 'Minimum headcount-growth percent, e.g. 20 = teams that grew ≥20%',
				type: 'number',
				default: 0,
				routing: {
					send: {
						type: 'body',
						property: 'growingTeamMinPct',
					},
				},
			},
			{
				displayName: 'Headcounts',
				name: 'headcounts',
				description:
					'Company size bands. Valid: self-employed, 1-10, 11-50, 51-200, 201-500, 501-1000, 1001-5000, 5001-10000, 10001+.',
				type: 'string',
				typeOptions: {
					multipleValues: true,
				},
				default: [],
				routing: {
					send: {
						type: 'body',
						property: 'headcounts',
					},
				},
			},
			{
				displayName: 'Hiring',
				name: 'hiring',
				description:
					'Whether to switch this on. Only companies with open job posts right now (hiring signal).',
				type: 'boolean',
				default: false,
				routing: {
					send: {
						type: 'body',
						property: 'hiring',
					},
				},
			},
			{
				displayName: 'Industries',
				name: 'industries',
				description: 'Company industries, e.g. ["Software","Financial Services"]',
				type: 'string',
				typeOptions: {
					multipleValues: true,
				},
				default: [],
				routing: {
					send: {
						type: 'body',
						property: 'industries',
					},
				},
			},
			{
				displayName: 'Locations',
				name: 'locations',
				description: 'Company HQ locations, e.g. ["United States"]',
				type: 'string',
				typeOptions: {
					multipleValues: true,
				},
				default: [],
				routing: {
					send: {
						type: 'body',
						property: 'locations',
					},
				},
			},
			{
				displayName: 'Max Results',
				name: 'maxResults',
				description:
					'Max companies to return (1–100, default 20). Use 100 to feed the most companies to search_people_sales_navigator via companyIds.',
				type: 'number',
				default: 1,
				typeOptions: {
					minValue: 1,
					maxValue: 100,
				},
				routing: {
					send: {
						type: 'body',
						property: 'limit',
					},
				},
			},
			{
				displayName: 'Max Revenue Millions',
				name: 'maxRevenueMillions',
				description: 'Maximum annual revenue in millions (same brackets)',
				type: 'number',
				default: 0,
				routing: {
					send: {
						type: 'body',
						property: 'maxRevenueMillions',
					},
				},
			},
			{
				displayName: 'Min Revenue Millions',
				name: 'minRevenueMillions',
				description:
					"Minimum annual revenue in millions (e.g. 10 = $10M+). LinkedIn uses fixed brackets (0, 0.2, 1, 2.5, 5, 10, 20, 50, 100, 500, 1000); other values widen to the nearest one. Revenue is LinkedIn's estimate — companies without one are left out.",
				type: 'number',
				default: 0,
				routing: {
					send: {
						type: 'body',
						property: 'minRevenueMillions',
					},
				},
			},
			{
				displayName: 'Recent Funding',
				name: 'recentFunding',
				description:
					'Whether to switch this on. Only companies with a recent funding event (same as list_funding_signals).',
				type: 'boolean',
				default: false,
				routing: {
					send: {
						type: 'body',
						property: 'recentFunding',
					},
				},
			},
			{
				displayName: 'Recent Leadership Change',
				name: 'recentLeadershipChange',
				description:
					'Whether to switch this on. Only companies with a recent senior-leadership change (new-boss signal).',
				type: 'boolean',
				default: false,
				routing: {
					send: {
						type: 'body',
						property: 'recentLeadershipChange',
					},
				},
			},
			{
				displayName: 'Revenue Currency',
				name: 'revenueCurrency',
				description: 'Currency for the revenue band (default USD)',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'revenueCurrency',
					},
				},
			},
		],
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['search'],
				operation: ['search_linkedin'],
			},
		},
		options: [
			{
				displayName: 'Connection ID',
				name: 'connectionId',
				description:
					'Which of your LinkedIn accounts to act from (its ID from list_linkedin_accounts). Omit to use your first live one.',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'connectionId',
					},
				},
			},
			{
				displayName: 'Cursor',
				name: 'cursor',
				description:
					'NextCursor from the previous call, to get the next page. Keep the other arguments the same.',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'cursor',
					},
				},
			},
			{
				displayName: 'Filters',
				name: 'filters',
				description:
					'The search filters for that kind, e.g. { keywords: "head of sales", network_distance: [2], location: ["106967730"] }',
				type: 'json',
				default: '{}',
				routing: {
					send: {
						type: 'body',
						property: 'filters',
						value: '={{ typeof $value === "string" ? JSON.parse($value) : $value }}',
					},
				},
			},
			{
				displayName: 'Kind',
				name: 'kind',
				description: 'What to search. Required unless URL is given.',
				type: 'options',
				options: [
					{
						name: 'Classic/companies',
						value: 'classic/companies',
					},
					{
						name: 'Classic/jobs',
						value: 'classic/jobs',
					},
					{
						name: 'Classic/people',
						value: 'classic/people',
					},
					{
						name: 'Classic/posts',
						value: 'classic/posts',
					},
					{
						name: 'Recruiter/people',
						value: 'recruiter/people',
					},
					{
						name: 'Sales Navigator/companies',
						value: 'sales_navigator/companies',
					},
					{
						name: 'Sales Navigator/people',
						value: 'sales_navigator/people',
					},
				],
				default: 'classic/companies',
				routing: {
					send: {
						type: 'body',
						property: 'kind',
					},
				},
			},
			{
				displayName: 'Max Results',
				name: 'maxResults',
				description: 'How many to return (1–100, default 10)',
				type: 'number',
				default: 1,
				typeOptions: {
					minValue: 1,
					maxValue: 100,
				},
				routing: {
					send: {
						type: 'body',
						property: 'limit',
					},
				},
			},
			{
				displayName: 'URL',
				name: 'url',
				description:
					'A LinkedIn / Sales Navigator / Recruiter search URL to run instead of kind + filters',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'url',
					},
				},
			},
		],
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['search'],
				operation: ['search_linkedin_companies'],
			},
		},
		options: [
			{
				displayName: 'Connection ID',
				name: 'connectionId',
				description:
					'Which of your LinkedIn accounts to act from (its ID from list_linkedin_accounts). Omit to use your first live one.',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'connectionId',
					},
				},
			},
			{
				displayName: 'Cursor',
				name: 'cursor',
				description:
					'NextCursor from the previous call, to get the next page. Keep the other arguments the same.',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'cursor',
					},
				},
			},
			{
				displayName: 'Has Job Offers',
				name: 'hasJobOffers',
				description: 'Whether to switch this on. Only companies with job listings on LinkedIn.',
				type: 'boolean',
				default: false,
				routing: {
					send: {
						type: 'body',
						property: 'hasJobOffers',
					},
				},
			},
			{
				displayName: 'Headcount',
				name: 'headcount',
				description: "Company sizes, as LinkedIn's own bands, e.g. { min: 51, max: 200 }",
				type: 'json',
				default: '[]',
				routing: {
					send: {
						type: 'body',
						property: 'headcount',
						value: '={{ typeof $value === "string" ? JSON.parse($value) : $value }}',
					},
				},
			},
			{
				displayName: 'Industry',
				name: 'industry',
				description: 'Industries: IDs from lookup_search_ids type INDUSTRY',
				type: 'string',
				typeOptions: {
					multipleValues: true,
				},
				default: [],
				routing: {
					send: {
						type: 'body',
						property: 'industry',
					},
				},
			},
			{
				displayName: 'Keywords',
				name: 'keywords',
				description: 'Words to search for',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'keywords',
					},
				},
			},
			{
				displayName: 'Location',
				name: 'location',
				description: 'Places: IDs from lookup_search_ids type LOCATION',
				type: 'string',
				typeOptions: {
					multipleValues: true,
				},
				default: [],
				routing: {
					send: {
						type: 'body',
						property: 'location',
					},
				},
			},
			{
				displayName: 'Max Results',
				name: 'maxResults',
				description: 'How many to return (1–10, default 10)',
				type: 'number',
				default: 1,
				typeOptions: {
					minValue: 1,
					maxValue: 10,
				},
				routing: {
					send: {
						type: 'body',
						property: 'limit',
					},
				},
			},
			{
				displayName: 'Network Distance',
				name: 'networkDistance',
				description: 'Connection degrees from you: 1, 2, 3',
				type: 'json',
				default: '[]',
				routing: {
					send: {
						type: 'body',
						property: 'networkDistance',
						value: '={{ typeof $value === "string" ? JSON.parse($value) : $value }}',
					},
				},
			},
		],
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['search'],
				operation: ['search_linkedin_jobs'],
			},
		},
		options: [
			{
				displayName: 'Benefits',
				name: 'benefits',
				description: 'Benefits offered',
				type: 'json',
				default: '[]',
				routing: {
					send: {
						type: 'body',
						property: 'benefits',
						value: '={{ typeof $value === "string" ? JSON.parse($value) : $value }}',
					},
				},
			},
			{
				displayName: 'Commitments',
				name: 'commitments',
				description: 'Company commitments',
				type: 'json',
				default: '[]',
				routing: {
					send: {
						type: 'body',
						property: 'commitments',
						value: '={{ typeof $value === "string" ? JSON.parse($value) : $value }}',
					},
				},
			},
			{
				displayName: 'Company',
				name: 'company',
				description: 'Companies: IDs from lookup_search_ids type COMPANY',
				type: 'string',
				typeOptions: {
					multipleValues: true,
				},
				default: [],
				routing: {
					send: {
						type: 'body',
						property: 'company',
					},
				},
			},
			{
				displayName: 'Connection ID',
				name: 'connectionId',
				description:
					'Which of your LinkedIn accounts to act from (its ID from list_linkedin_accounts). Omit to use your first live one.',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'connectionId',
					},
				},
			},
			{
				displayName: 'Cursor',
				name: 'cursor',
				description:
					'NextCursor from the previous call, to get the next page. Keep the other arguments the same.',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'cursor',
					},
				},
			},
			{
				displayName: 'Date Posted',
				name: 'datePosted',
				description: 'Posted within this many days',
				type: 'number',
				default: 0,
				routing: {
					send: {
						type: 'body',
						property: 'datePosted',
					},
				},
			},
			{
				displayName: 'Easy Apply',
				name: 'easyApply',
				description: 'Whether to switch this on. Only Easy Apply jobs.',
				type: 'boolean',
				default: false,
				routing: {
					send: {
						type: 'body',
						property: 'easyApply',
					},
				},
			},
			{
				displayName: 'Fair Chance Employer',
				name: 'fairChanceEmployer',
				description: 'Whether to switch this on. Only fair-chance employers.',
				type: 'boolean',
				default: false,
				routing: {
					send: {
						type: 'body',
						property: 'fairChanceEmployer',
					},
				},
			},
			{
				displayName: 'Function',
				name: 'function',
				description: 'Job functions: IDs from lookup_search_ids type JOB_FUNCTION',
				type: 'string',
				typeOptions: {
					multipleValues: true,
				},
				default: [],
				routing: {
					send: {
						type: 'body',
						property: 'function',
					},
				},
			},
			{
				displayName: 'Has Verifications',
				name: 'hasVerifications',
				description: 'Whether to switch this on. Only jobs with verifications.',
				type: 'boolean',
				default: false,
				routing: {
					send: {
						type: 'body',
						property: 'hasVerifications',
					},
				},
			},
			{
				displayName: 'In Your Network',
				name: 'inYourNetwork',
				description: 'Whether to switch this on. Only jobs at companies where you know someone.',
				type: 'boolean',
				default: false,
				routing: {
					send: {
						type: 'body',
						property: 'inYourNetwork',
					},
				},
			},
			{
				displayName: 'Industry',
				name: 'industry',
				description: 'Industries: IDs from lookup_search_ids type INDUSTRY',
				type: 'string',
				typeOptions: {
					multipleValues: true,
				},
				default: [],
				routing: {
					send: {
						type: 'body',
						property: 'industry',
					},
				},
			},
			{
				displayName: 'Job Type',
				name: 'jobType',
				description: 'Job types',
				type: 'json',
				default: '[]',
				routing: {
					send: {
						type: 'body',
						property: 'jobType',
						value: '={{ typeof $value === "string" ? JSON.parse($value) : $value }}',
					},
				},
			},
			{
				displayName: 'Keywords',
				name: 'keywords',
				description: 'Words to search for',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'keywords',
					},
				},
			},
			{
				displayName: 'Location',
				name: 'location',
				description: 'Places: IDs from lookup_search_ids type LOCATION',
				type: 'string',
				typeOptions: {
					multipleValues: true,
				},
				default: [],
				routing: {
					send: {
						type: 'body',
						property: 'location',
					},
				},
			},
			{
				displayName: 'Location Within Area',
				name: 'locationWithinArea',
				description: 'Miles around the location',
				type: 'number',
				default: 0,
				routing: {
					send: {
						type: 'body',
						property: 'locationWithinArea',
					},
				},
			},
			{
				displayName: 'Max Results',
				name: 'maxResults',
				description: 'How many to return (1–50, default 10)',
				type: 'number',
				default: 1,
				typeOptions: {
					minValue: 1,
					maxValue: 50,
				},
				routing: {
					send: {
						type: 'body',
						property: 'limit',
					},
				},
			},
			{
				displayName: 'Minimum Salary',
				name: 'minimumSalary',
				description:
					"Lowest yearly salary, in thousands: one of LinkedIn's own steps for that currency",
				type: 'json',
				default: '{}',
				routing: {
					send: {
						type: 'body',
						property: 'minimumSalary',
						value: '={{ typeof $value === "string" ? JSON.parse($value) : $value }}',
					},
				},
			},
			{
				displayName: 'Presence',
				name: 'presence',
				description: 'On site, hybrid or remote',
				type: 'json',
				default: '[]',
				routing: {
					send: {
						type: 'body',
						property: 'presence',
						value: '={{ typeof $value === "string" ? JSON.parse($value) : $value }}',
					},
				},
			},
			{
				displayName: 'Region',
				name: 'region',
				description: 'A country or region: an ID from lookup_search_ids type LOCATION',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'region',
					},
				},
			},
			{
				displayName: 'Role',
				name: 'role',
				description: 'Job titles: IDs from lookup_search_ids type JOB_TITLE',
				type: 'string',
				typeOptions: {
					multipleValues: true,
				},
				default: [],
				routing: {
					send: {
						type: 'body',
						property: 'role',
					},
				},
			},
			{
				displayName: 'Seniority',
				name: 'seniority',
				description: 'Experience levels',
				type: 'json',
				default: '[]',
				routing: {
					send: {
						type: 'body',
						property: 'seniority',
						value: '={{ typeof $value === "string" ? JSON.parse($value) : $value }}',
					},
				},
			},
			{
				displayName: 'Sort By',
				name: 'sortBy',
				description: 'Order (default relevance)',
				type: 'options',
				options: [
					{
						name: 'Date',
						value: 'date',
					},
					{
						name: 'Relevance',
						value: 'relevance',
					},
				],
				default: 'date',
				routing: {
					send: {
						type: 'body',
						property: 'sortBy',
					},
				},
			},
			{
				displayName: 'Under10 Applicants',
				name: 'under10Applicants',
				description: 'Whether to switch this on. Only jobs with fewer than 10 applicants.',
				type: 'boolean',
				default: false,
				routing: {
					send: {
						type: 'body',
						property: 'under10Applicants',
					},
				},
			},
		],
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['search'],
				operation: ['search_linkedin_people'],
			},
		},
		options: [
			{
				displayName: 'Advanced Keywords',
				name: 'advancedKeywords',
				description:
					'Words that must appear in one part of the profile: first name, last name, title, company or school',
				type: 'json',
				default: '{}',
				routing: {
					send: {
						type: 'body',
						property: 'advancedKeywords',
						value: '={{ typeof $value === "string" ? JSON.parse($value) : $value }}',
					},
				},
			},
			{
				displayName: 'Company',
				name: 'company',
				description: 'Current companies: IDs from lookup_search_ids type COMPANY',
				type: 'string',
				typeOptions: {
					multipleValues: true,
				},
				default: [],
				routing: {
					send: {
						type: 'body',
						property: 'company',
					},
				},
			},
			{
				displayName: 'Connection ID',
				name: 'connectionId',
				description:
					'Which of your LinkedIn accounts to act from (its ID from list_linkedin_accounts). Omit to use your first live one.',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'connectionId',
					},
				},
			},
			{
				displayName: 'Connections Of',
				name: 'connectionsOf',
				description:
					'People whose connections to search: IDs from lookup_search_ids type CONNECTIONS',
				type: 'string',
				typeOptions: {
					multipleValues: true,
				},
				default: [],
				routing: {
					send: {
						type: 'body',
						property: 'connectionsOf',
					},
				},
			},
			{
				displayName: 'Cursor',
				name: 'cursor',
				description:
					'NextCursor from the previous call, to get the next page. Keep the other arguments the same.',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'cursor',
					},
				},
			},
			{
				displayName: 'Followers Of',
				name: 'followersOf',
				description: 'People whose followers to search: IDs from lookup_search_ids type PEOPLE',
				type: 'string',
				typeOptions: {
					multipleValues: true,
				},
				default: [],
				routing: {
					send: {
						type: 'body',
						property: 'followersOf',
					},
				},
			},
			{
				displayName: 'Industry',
				name: 'industry',
				description: 'Industries: IDs from lookup_search_ids type INDUSTRY',
				type: 'string',
				typeOptions: {
					multipleValues: true,
				},
				default: [],
				routing: {
					send: {
						type: 'body',
						property: 'industry',
					},
				},
			},
			{
				displayName: 'Keywords',
				name: 'keywords',
				description: 'Name, title, company or any words',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'keywords',
					},
				},
			},
			{
				displayName: 'Location',
				name: 'location',
				description: 'Places: IDs from lookup_search_ids type LOCATION',
				type: 'string',
				typeOptions: {
					multipleValues: true,
				},
				default: [],
				routing: {
					send: {
						type: 'body',
						property: 'location',
					},
				},
			},
			{
				displayName: 'Max Results',
				name: 'maxResults',
				description: 'How many to return (1–10, default 10)',
				type: 'number',
				default: 1,
				typeOptions: {
					minValue: 1,
					maxValue: 10,
				},
				routing: {
					send: {
						type: 'body',
						property: 'limit',
					},
				},
			},
			{
				displayName: 'Network Distance',
				name: 'networkDistance',
				description: 'Connection degrees from you: 1, 2, 3',
				type: 'json',
				default: '[]',
				routing: {
					send: {
						type: 'body',
						property: 'networkDistance',
						value: '={{ typeof $value === "string" ? JSON.parse($value) : $value }}',
					},
				},
			},
			{
				displayName: 'Open To',
				name: 'openTo',
				description: 'Open to pro bono work or to a board seat',
				type: 'json',
				default: '[]',
				routing: {
					send: {
						type: 'body',
						property: 'openTo',
						value: '={{ typeof $value === "string" ? JSON.parse($value) : $value }}',
					},
				},
			},
			{
				displayName: 'Past Company',
				name: 'pastCompany',
				description: 'Past companies: IDs from lookup_search_ids type COMPANY',
				type: 'string',
				typeOptions: {
					multipleValues: true,
				},
				default: [],
				routing: {
					send: {
						type: 'body',
						property: 'pastCompany',
					},
				},
			},
			{
				displayName: 'Profile Language',
				name: 'profileLanguage',
				description: 'Profile languages, as two-letter codes such as "en"',
				type: 'string',
				typeOptions: {
					multipleValues: true,
				},
				default: [],
				routing: {
					send: {
						type: 'body',
						property: 'profileLanguage',
					},
				},
			},
			{
				displayName: 'School',
				name: 'school',
				description: 'Schools: IDs from lookup_search_ids type SCHOOL',
				type: 'string',
				typeOptions: {
					multipleValues: true,
				},
				default: [],
				routing: {
					send: {
						type: 'body',
						property: 'school',
					},
				},
			},
			{
				displayName: 'Service',
				name: 'service',
				description: 'Service categories they offer: IDs from lookup_search_ids type SERVICE',
				type: 'string',
				typeOptions: {
					multipleValues: true,
				},
				default: [],
				routing: {
					send: {
						type: 'body',
						property: 'service',
					},
				},
			},
		],
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['search'],
				operation: ['search_linkedin_posts'],
			},
		},
		options: [
			{
				displayName: 'Author',
				name: 'author',
				description: 'Who the author is: their industry, their company, or words in their headline',
				type: 'json',
				default: '{}',
				routing: {
					send: {
						type: 'body',
						property: 'author',
						value: '={{ typeof $value === "string" ? JSON.parse($value) : $value }}',
					},
				},
			},
			{
				displayName: 'Connection ID',
				name: 'connectionId',
				description:
					'Which of your LinkedIn accounts to act from (its ID from list_linkedin_accounts). Omit to use your first live one.',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'connectionId',
					},
				},
			},
			{
				displayName: 'Content Type',
				name: 'contentType',
				description: 'Only posts with this kind of content',
				type: 'options',
				options: [
					{
						name: 'Collaborative Articles',
						value: 'collaborative_articles',
					},
					{
						name: 'Documents',
						value: 'documents',
					},
					{
						name: 'Images',
						value: 'images',
					},
					{
						name: 'Jobs',
						value: 'jobs',
					},
					{
						name: 'Live Videos',
						value: 'live_videos',
					},
					{
						name: 'Videos',
						value: 'videos',
					},
				],
				default: 'collaborative_articles',
				routing: {
					send: {
						type: 'body',
						property: 'contentType',
					},
				},
			},
			{
				displayName: 'Cursor',
				name: 'cursor',
				description:
					'NextCursor from the previous call, to get the next page. Keep the other arguments the same.',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'cursor',
					},
				},
			},
			{
				displayName: 'Date Posted',
				name: 'datePosted',
				description: 'How recent',
				type: 'options',
				options: [
					{
						name: 'Past Day',
						value: 'past_day',
					},
					{
						name: 'Past Month',
						value: 'past_month',
					},
					{
						name: 'Past Week',
						value: 'past_week',
					},
				],
				default: 'past_day',
				routing: {
					send: {
						type: 'body',
						property: 'datePosted',
					},
				},
			},
			{
				displayName: 'Keywords',
				name: 'keywords',
				description: 'Words to search for',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'keywords',
					},
				},
			},
			{
				displayName: 'Max Results',
				name: 'maxResults',
				description: 'How many to return (1–49, default 10)',
				type: 'number',
				default: 1,
				typeOptions: {
					minValue: 1,
					maxValue: 49,
				},
				routing: {
					send: {
						type: 'body',
						property: 'limit',
					},
				},
			},
			{
				displayName: 'Mentioning',
				name: 'mentioning',
				description: 'Posts that mention these people or company pages',
				type: 'json',
				default: '{}',
				routing: {
					send: {
						type: 'body',
						property: 'mentioning',
						value: '={{ typeof $value === "string" ? JSON.parse($value) : $value }}',
					},
				},
			},
			{
				displayName: 'Posted By',
				name: 'postedBy',
				description:
					'Who posted it: given people, given company pages, you, your 1st-degree connections, or people you follow',
				type: 'json',
				default: '{}',
				routing: {
					send: {
						type: 'body',
						property: 'postedBy',
						value: '={{ typeof $value === "string" ? JSON.parse($value) : $value }}',
					},
				},
			},
			{
				displayName: 'Sort By',
				name: 'sortBy',
				description: 'Order (default relevance)',
				type: 'options',
				options: [
					{
						name: 'Date',
						value: 'date',
					},
					{
						name: 'Relevance',
						value: 'relevance',
					},
				],
				default: 'date',
				routing: {
					send: {
						type: 'body',
						property: 'sortBy',
					},
				},
			},
		],
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['search'],
				operation: ['search_linkedin_recruiter_people'],
			},
		},
		options: [
			{
				displayName: 'Company',
				name: 'company',
				description: 'Companies: each one by ID or by keywords',
				type: 'json',
				default: '[]',
				routing: {
					send: {
						type: 'body',
						property: 'company',
						value: '={{ typeof $value === "string" ? JSON.parse($value) : $value }}',
					},
				},
			},
			{
				displayName: 'Company Headcount',
				name: 'companyHeadcount',
				description: "Company sizes, as LinkedIn's own bands, e.g. { min: 51, max: 200 }",
				type: 'json',
				default: '[]',
				routing: {
					send: {
						type: 'body',
						property: 'companyHeadcount',
						value: '={{ typeof $value === "string" ? JSON.parse($value) : $value }}',
					},
				},
			},
			{
				displayName: 'Connection ID',
				name: 'connectionId',
				description:
					'Which of your LinkedIn accounts to act from (its ID from list_linkedin_accounts). Omit to use your first live one.',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'connectionId',
					},
				},
			},
			{
				displayName: 'Current Company',
				name: 'currentCompany',
				description: 'Current companies',
				type: 'json',
				default: '[]',
				routing: {
					send: {
						type: 'body',
						property: 'currentCompany',
						value: '={{ typeof $value === "string" ? JSON.parse($value) : $value }}',
					},
				},
			},
			{
				displayName: 'Cursor',
				name: 'cursor',
				description:
					'NextCursor from the previous call, to get the next page. Keep the other arguments the same.',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'cursor',
					},
				},
			},
			{
				displayName: 'Degree',
				name: 'degree',
				description: 'Degrees to include and to leave out',
				type: 'json',
				default: '{}',
				routing: {
					send: {
						type: 'body',
						property: 'degree',
						value: '={{ typeof $value === "string" ? JSON.parse($value) : $value }}',
					},
				},
			},
			{
				displayName: 'Employment Type',
				name: 'employmentType',
				description: 'Employment types. Recruiter PRO contracts only.',
				type: 'json',
				default: '[]',
				routing: {
					send: {
						type: 'body',
						property: 'employmentType',
						value: '={{ typeof $value === "string" ? JSON.parse($value) : $value }}',
					},
				},
			},
			{
				displayName: 'First Name',
				name: 'firstName',
				description: 'First names',
				type: 'string',
				typeOptions: {
					multipleValues: true,
				},
				default: [],
				routing: {
					send: {
						type: 'body',
						property: 'firstName',
					},
				},
			},
			{
				displayName: 'Function',
				name: 'function',
				description: 'Job functions: IDs from lookup_search_ids type DEPARTMENT, service RECRUITER',
				type: 'string',
				typeOptions: {
					multipleValues: true,
				},
				default: [],
				routing: {
					send: {
						type: 'body',
						property: 'function',
					},
				},
			},
			{
				displayName: 'Graduation Year',
				name: 'graduationYear',
				description: 'Graduation years, from and to',
				type: 'json',
				default: '{}',
				routing: {
					send: {
						type: 'body',
						property: 'graduationYear',
						value: '={{ typeof $value === "string" ? JSON.parse($value) : $value }}',
					},
				},
			},
			{
				displayName: 'Groups',
				name: 'groups',
				description: 'LinkedIn groups: IDs from lookup_search_ids type GROUPS, service RECRUITER',
				type: 'string',
				typeOptions: {
					multipleValues: true,
				},
				default: [],
				routing: {
					send: {
						type: 'body',
						property: 'groups',
					},
				},
			},
			{
				displayName: 'Has Military Background',
				name: 'hasMilitaryBackground',
				description: 'Whether to switch this on. Only people with a US military background.',
				type: 'boolean',
				default: false,
				routing: {
					send: {
						type: 'body',
						property: 'hasMilitaryBackground',
					},
				},
			},
			{
				displayName: 'Hide Previously Viewed',
				name: 'hidePreviouslyViewed',
				description: 'Leave out people you viewed within this many days',
				type: 'json',
				default: '{}',
				routing: {
					send: {
						type: 'body',
						property: 'hidePreviouslyViewed',
						value: '={{ typeof $value === "string" ? JSON.parse($value) : $value }}',
					},
				},
			},
			{
				displayName: 'Hiring Projects',
				name: 'hiringProjects',
				description: 'Your hiring projects to include and to leave out',
				type: 'json',
				default: '{}',
				routing: {
					send: {
						type: 'body',
						property: 'hiringProjects',
						value: '={{ typeof $value === "string" ? JSON.parse($value) : $value }}',
					},
				},
			},
			{
				displayName: 'Industry',
				name: 'industry',
				description: 'Industries to include and to leave out',
				type: 'json',
				default: '{}',
				routing: {
					send: {
						type: 'body',
						property: 'industry',
						value: '={{ typeof $value === "string" ? JSON.parse($value) : $value }}',
					},
				},
			},
			{
				displayName: 'Keywords',
				name: 'keywords',
				description:
					'Words to search for. AND, OR and NOT may be used, e.g. developers AND product owners NOT managers.',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'keywords',
					},
				},
			},
			{
				displayName: 'Last Name',
				name: 'lastName',
				description: 'Last names',
				type: 'string',
				typeOptions: {
					multipleValues: true,
				},
				default: [],
				routing: {
					send: {
						type: 'body',
						property: 'lastName',
					},
				},
			},
			{
				displayName: 'Locale',
				name: 'locale',
				description: 'The language your Recruiter is set to, when results look inconsistent',
				type: 'options',
				options: [
					{
						name: 'Arabic',
						value: 'arabic',
					},
					{
						name: 'Bangla',
						value: 'bangla',
					},
					{
						name: 'Chinese Simplified',
						value: 'chinese_simplified',
					},
					{
						name: 'Chinese Traditional',
						value: 'chinese_traditional',
					},
					{
						name: 'Czech',
						value: 'czech',
					},
					{
						name: 'Danish',
						value: 'danish',
					},
					{
						name: 'Dutch',
						value: 'dutch',
					},
					{
						name: 'English',
						value: 'english',
					},
					{
						name: 'Finnish',
						value: 'finnish',
					},
					{
						name: 'French',
						value: 'french',
					},
					{
						name: 'German',
						value: 'german',
					},
					{
						name: 'Greek',
						value: 'greek',
					},
					{
						name: 'Hebrew',
						value: 'hebrew',
					},
					{
						name: 'Hindi',
						value: 'hindi',
					},
					{
						name: 'Hungarian',
						value: 'hungarian',
					},
					{
						name: 'Indonesian',
						value: 'indonesian',
					},
					{
						name: 'Italian',
						value: 'italian',
					},
					{
						name: 'Japanese',
						value: 'japanese',
					},
					{
						name: 'Korean',
						value: 'korean',
					},
					{
						name: 'Malay',
						value: 'malay',
					},
					{
						name: 'Marathi',
						value: 'marathi',
					},
					{
						name: 'Norwegian',
						value: 'norwegian',
					},
					{
						name: 'Persian',
						value: 'persian',
					},
					{
						name: 'Polish',
						value: 'polish',
					},
					{
						name: 'Portuguese',
						value: 'portuguese',
					},
					{
						name: 'Punjabi',
						value: 'punjabi',
					},
					{
						name: 'Romanian',
						value: 'romanian',
					},
					{
						name: 'Russian',
						value: 'russian',
					},
					{
						name: 'Spanish',
						value: 'spanish',
					},
					{
						name: 'Swedish',
						value: 'swedish',
					},
					{
						name: 'Tagalog',
						value: 'tagalog',
					},
					{
						name: 'Telugu',
						value: 'telugu',
					},
					{
						name: 'Thai',
						value: 'thai',
					},
					{
						name: 'Turkish',
						value: 'turkish',
					},
					{
						name: 'Ukrainian',
						value: 'ukrainian',
					},
					{
						name: 'Vietnamese',
						value: 'vietnamese',
					},
				],
				default: 'arabic',
				routing: {
					send: {
						type: 'body',
						property: 'locale',
					},
				},
			},
			{
				displayName: 'Location',
				name: 'location',
				description: 'Places. DOESNT_HAVE cannot be combined with locationWithinArea.',
				type: 'json',
				default: '[]',
				routing: {
					send: {
						type: 'body',
						property: 'location',
						value: '={{ typeof $value === "string" ? JSON.parse($value) : $value }}',
					},
				},
			},
			{
				displayName: 'Location Within Area',
				name: 'locationWithinArea',
				description: 'Miles around the location',
				type: 'number',
				default: 0,
				routing: {
					send: {
						type: 'body',
						property: 'locationWithinArea',
					},
				},
			},
			{
				displayName: 'Max Results',
				name: 'maxResults',
				description: 'How many to return (1–100, default 10)',
				type: 'number',
				default: 1,
				typeOptions: {
					minValue: 1,
					maxValue: 100,
				},
				routing: {
					send: {
						type: 'body',
						property: 'limit',
					},
				},
			},
			{
				displayName: 'Network Distance',
				name: 'networkDistance',
				description: 'Connection degrees from you (1, 2, 3) or "GROUP" for people in your groups',
				type: 'json',
				default: '[]',
				routing: {
					send: {
						type: 'body',
						property: 'networkDistance',
						value: '={{ typeof $value === "string" ? JSON.parse($value) : $value }}',
					},
				},
			},
			{
				displayName: 'Notes',
				name: 'notes',
				description: "Words in your team's notes on the person",
				type: 'string',
				typeOptions: {
					multipleValues: true,
				},
				default: [],
				routing: {
					send: {
						type: 'body',
						property: 'notes',
					},
				},
			},
			{
				displayName: 'Past Applicants',
				name: 'pastApplicants',
				description: 'Whether to switch this on. Only past applicants.',
				type: 'boolean',
				default: false,
				routing: {
					send: {
						type: 'body',
						property: 'pastApplicants',
					},
				},
			},
			{
				displayName: 'Past Company',
				name: 'pastCompany',
				description: 'Past companies',
				type: 'json',
				default: '[]',
				routing: {
					send: {
						type: 'body',
						property: 'pastCompany',
						value: '={{ typeof $value === "string" ? JSON.parse($value) : $value }}',
					},
				},
			},
			{
				displayName: 'Profile Language',
				name: 'profileLanguage',
				description: 'Profile languages, as two-letter codes such as "en"',
				type: 'string',
				typeOptions: {
					multipleValues: true,
				},
				default: [],
				routing: {
					send: {
						type: 'body',
						property: 'profileLanguage',
					},
				},
			},
			{
				displayName: 'Recently Joined',
				name: 'recentlyJoined',
				description: "Joined LinkedIn this many days ago, as LinkedIn's own bands",
				type: 'json',
				default: '[]',
				routing: {
					send: {
						type: 'body',
						property: 'recentlyJoined',
						value: '={{ typeof $value === "string" ? JSON.parse($value) : $value }}',
					},
				},
			},
			{
				displayName: 'Recruiting Activity',
				name: 'recruitingActivity',
				description: 'People with, or without, this kind of activity from your team',
				type: 'json',
				default: '[]',
				routing: {
					send: {
						type: 'body',
						property: 'recruitingActivity',
						value: '={{ typeof $value === "string" ? JSON.parse($value) : $value }}',
					},
				},
			},
			{
				displayName: 'Role',
				name: 'role',
				description: 'Job titles: each one by ID or by keywords',
				type: 'json',
				default: '[]',
				routing: {
					send: {
						type: 'body',
						property: 'role',
						value: '={{ typeof $value === "string" ? JSON.parse($value) : $value }}',
					},
				},
			},
			{
				displayName: 'Saved Filter',
				name: 'savedFilter',
				description:
					'One of your saved filters: an ID from lookup_search_ids type SAVED_FILTERS, service RECRUITER',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'savedFilter',
					},
				},
			},
			{
				displayName: 'Saved Search',
				name: 'savedSearch',
				description: 'Run one of your saved searches; it replaces every other filter',
				type: 'json',
				default: '{}',
				routing: {
					send: {
						type: 'body',
						property: 'savedSearch',
						value: '={{ typeof $value === "string" ? JSON.parse($value) : $value }}',
					},
				},
			},
			{
				displayName: 'School',
				name: 'school',
				description: 'Schools',
				type: 'json',
				default: '[]',
				routing: {
					send: {
						type: 'body',
						property: 'school',
						value: '={{ typeof $value === "string" ? JSON.parse($value) : $value }}',
					},
				},
			},
			{
				displayName: 'Seniority',
				name: 'seniority',
				description: 'Seniority levels to include and to leave out',
				type: 'json',
				default: '{}',
				routing: {
					send: {
						type: 'body',
						property: 'seniority',
						value: '={{ typeof $value === "string" ? JSON.parse($value) : $value }}',
					},
				},
			},
			{
				displayName: 'Skills',
				name: 'skills',
				description: 'Skills: each one by ID or by keywords',
				type: 'json',
				default: '[]',
				routing: {
					send: {
						type: 'body',
						property: 'skills',
						value: '={{ typeof $value === "string" ? JSON.parse($value) : $value }}',
					},
				},
			},
			{
				displayName: 'Spoken Languages',
				name: 'spokenLanguages',
				description: 'Spoken languages and how well. Recruiter PRO contracts only.',
				type: 'json',
				default: '[]',
				routing: {
					send: {
						type: 'body',
						property: 'spokenLanguages',
						value: '={{ typeof $value === "string" ? JSON.parse($value) : $value }}',
					},
				},
			},
			{
				displayName: 'Spotlights',
				name: 'spotlights',
				description: 'Spotlights. Advanced Recruiter subscriptions only.',
				type: 'json',
				default: '[]',
				routing: {
					send: {
						type: 'body',
						property: 'spotlights',
						value: '={{ typeof $value === "string" ? JSON.parse($value) : $value }}',
					},
				},
			},
			{
				displayName: 'Tenure',
				name: 'tenure',
				description: 'Years of experience, from and to',
				type: 'json',
				default: '{}',
				routing: {
					send: {
						type: 'body',
						property: 'tenure',
						value: '={{ typeof $value === "string" ? JSON.parse($value) : $value }}',
					},
				},
			},
			{
				displayName: 'Tenure in Company',
				name: 'tenureInCompany',
				description: 'Years in the current company, from and to',
				type: 'json',
				default: '{}',
				routing: {
					send: {
						type: 'body',
						property: 'tenureInCompany',
						value: '={{ typeof $value === "string" ? JSON.parse($value) : $value }}',
					},
				},
			},
			{
				displayName: 'Tenure in Position',
				name: 'tenureInPosition',
				description: 'Years in the current position, from and to',
				type: 'json',
				default: '{}',
				routing: {
					send: {
						type: 'body',
						property: 'tenureInPosition',
						value: '={{ typeof $value === "string" ? JSON.parse($value) : $value }}',
					},
				},
			},
		],
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['search'],
				operation: ['search_linkedin_sales_navigator_companies'],
			},
		},
		options: [
			{
				displayName: 'Account Lists',
				name: 'accountLists',
				description: 'Your account lists (an ID, or "ALL") to include and to leave out',
				type: 'json',
				default: '{}',
				routing: {
					send: {
						type: 'body',
						property: 'accountLists',
						value: '={{ typeof $value === "string" ? JSON.parse($value) : $value }}',
					},
				},
			},
			{
				displayName: 'Annual Revenue',
				name: 'annualRevenue',
				description:
					'Yearly revenue in millions, as LinkedIn\'s own steps. For "1000+" set max to 1001.',
				type: 'json',
				default: '{}',
				routing: {
					send: {
						type: 'body',
						property: 'annualRevenue',
						value: '={{ typeof $value === "string" ? JSON.parse($value) : $value }}',
					},
				},
			},
			{
				displayName: 'Connection ID',
				name: 'connectionId',
				description:
					'Which of your LinkedIn accounts to act from (its ID from list_linkedin_accounts). Omit to use your first live one.',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'connectionId',
					},
				},
			},
			{
				displayName: 'Cursor',
				name: 'cursor',
				description:
					'NextCursor from the previous call, to get the next page. Keep the other arguments the same.',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'cursor',
					},
				},
			},
			{
				displayName: 'Department Headcount',
				name: 'departmentHeadcount',
				description: 'How many people work in given departments',
				type: 'json',
				default: '{}',
				routing: {
					send: {
						type: 'body',
						property: 'departmentHeadcount',
						value: '={{ typeof $value === "string" ? JSON.parse($value) : $value }}',
					},
				},
			},
			{
				displayName: 'Department Headcount Growth',
				name: 'departmentHeadcountGrowth',
				description: 'How fast given departments are growing, in percent',
				type: 'json',
				default: '{}',
				routing: {
					send: {
						type: 'body',
						property: 'departmentHeadcountGrowth',
						value: '={{ typeof $value === "string" ? JSON.parse($value) : $value }}',
					},
				},
			},
			{
				displayName: 'Followers Count',
				name: 'followersCount',
				description: "Number of followers, as LinkedIn's own bands",
				type: 'json',
				default: '[]',
				routing: {
					send: {
						type: 'body',
						property: 'followersCount',
						value: '={{ typeof $value === "string" ? JSON.parse($value) : $value }}',
					},
				},
			},
			{
				displayName: 'Fortune',
				name: 'fortune',
				description: "Fortune ranking, as LinkedIn's own bands",
				type: 'json',
				default: '[]',
				routing: {
					send: {
						type: 'body',
						property: 'fortune',
						value: '={{ typeof $value === "string" ? JSON.parse($value) : $value }}',
					},
				},
			},
			{
				displayName: 'Has Job Offers',
				name: 'hasJobOffers',
				description: 'Whether to switch this on. Only companies hiring on LinkedIn.',
				type: 'boolean',
				default: false,
				routing: {
					send: {
						type: 'body',
						property: 'hasJobOffers',
					},
				},
			},
			{
				displayName: 'Headcount',
				name: 'headcount',
				description: "Company sizes, as LinkedIn's own bands, e.g. { min: 51, max: 200 }",
				type: 'json',
				default: '[]',
				routing: {
					send: {
						type: 'body',
						property: 'headcount',
						value: '={{ typeof $value === "string" ? JSON.parse($value) : $value }}',
					},
				},
			},
			{
				displayName: 'Headcount Growth',
				name: 'headcountGrowth',
				description: 'Headcount growth, in percent',
				type: 'json',
				default: '{}',
				routing: {
					send: {
						type: 'body',
						property: 'headcountGrowth',
						value: '={{ typeof $value === "string" ? JSON.parse($value) : $value }}',
					},
				},
			},
			{
				displayName: 'Industry',
				name: 'industry',
				description: 'Industries to include and to leave out',
				type: 'json',
				default: '{}',
				routing: {
					send: {
						type: 'body',
						property: 'industry',
						value: '={{ typeof $value === "string" ? JSON.parse($value) : $value }}',
					},
				},
			},
			{
				displayName: 'Keywords',
				name: 'keywords',
				description: 'Words to search for',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'keywords',
					},
				},
			},
			{
				displayName: 'Last Viewed At',
				name: 'lastViewedAt',
				description: 'With savedSearchId: only results newer than this moment (Unix time)',
				type: 'number',
				default: 0,
				routing: {
					send: {
						type: 'body',
						property: 'lastViewedAt',
					},
				},
			},
			{
				displayName: 'Location',
				name: 'location',
				description: 'Headquarters places to include and to leave out',
				type: 'json',
				default: '{}',
				routing: {
					send: {
						type: 'body',
						property: 'location',
						value: '={{ typeof $value === "string" ? JSON.parse($value) : $value }}',
					},
				},
			},
			{
				displayName: 'Location by Postal Code',
				name: 'locationByPostalCode',
				description: 'Postal codes to include and to leave out',
				type: 'json',
				default: '{}',
				routing: {
					send: {
						type: 'body',
						property: 'locationByPostalCode',
						value: '={{ typeof $value === "string" ? JSON.parse($value) : $value }}',
					},
				},
			},
			{
				displayName: 'Max Results',
				name: 'maxResults',
				description: 'How many to return (1–100, default 10)',
				type: 'number',
				default: 1,
				typeOptions: {
					minValue: 1,
					maxValue: 100,
				},
				routing: {
					send: {
						type: 'body',
						property: 'limit',
					},
				},
			},
			{
				displayName: 'Network Distance',
				name: 'networkDistance',
				description: 'Connection degrees from you: 1, 2, 3',
				type: 'json',
				default: '[]',
				routing: {
					send: {
						type: 'body',
						property: 'networkDistance',
						value: '={{ typeof $value === "string" ? JSON.parse($value) : $value }}',
					},
				},
			},
			{
				displayName: 'Recent Activities',
				name: 'recentActivities',
				description: 'Only companies with these recent events',
				type: 'json',
				default: '[]',
				routing: {
					send: {
						type: 'body',
						property: 'recentActivities',
						value: '={{ typeof $value === "string" ? JSON.parse($value) : $value }}',
					},
				},
			},
			{
				displayName: 'Recent Search ID',
				name: 'recentSearchId',
				description:
					'Run one of your recent searches again; it replaces every other filter: an ID from lookup_search_ids type RECENT_SEARCHES, service SALES_NAVIGATOR',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'recentSearchId',
					},
				},
			},
			{
				displayName: 'Saved Accounts',
				name: 'savedAccounts',
				description:
					'Your saved accounts: IDs from lookup_search_ids type SAVED_ACCOUNTS, service SALES_NAVIGATOR',
				type: 'string',
				typeOptions: {
					multipleValues: true,
				},
				default: [],
				routing: {
					send: {
						type: 'body',
						property: 'savedAccounts',
					},
				},
			},
			{
				displayName: 'Saved Search ID',
				name: 'savedSearchId',
				description:
					'Run one of your saved searches; it replaces every other filter: an ID from lookup_search_ids type SAVED_SEARCHES, service SALES_NAVIGATOR',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'savedSearchId',
					},
				},
			},
			{
				displayName: 'Technologies',
				name: 'technologies',
				description:
					'Technologies the company uses: IDs from lookup_search_ids type TECHNOLOGIES, service SALES_NAVIGATOR',
				type: 'string',
				typeOptions: {
					multipleValues: true,
				},
				default: [],
				routing: {
					send: {
						type: 'body',
						property: 'technologies',
					},
				},
			},
		],
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['search'],
				operation: ['search_linkedin_sales_navigator_people'],
			},
		},
		options: [
			{
				displayName: 'Account Lists',
				name: 'accountLists',
				description: 'Your account lists (an ID, or "ALL") to include and to leave out',
				type: 'json',
				default: '{}',
				routing: {
					send: {
						type: 'body',
						property: 'accountLists',
						value: '={{ typeof $value === "string" ? JSON.parse($value) : $value }}',
					},
				},
			},
			{
				displayName: 'Changed Jobs',
				name: 'changedJobs',
				description: 'Whether to switch this on. Only people who changed jobs recently.',
				type: 'boolean',
				default: false,
				routing: {
					send: {
						type: 'body',
						property: 'changedJobs',
					},
				},
			},
			{
				displayName: 'Company',
				name: 'company',
				description: 'Current companies to include and to leave out',
				type: 'json',
				default: '{}',
				routing: {
					send: {
						type: 'body',
						property: 'company',
						value: '={{ typeof $value === "string" ? JSON.parse($value) : $value }}',
					},
				},
			},
			{
				displayName: 'Company Headcount',
				name: 'companyHeadcount',
				description: "Company sizes, as LinkedIn's own bands, e.g. { min: 51, max: 200 }",
				type: 'json',
				default: '[]',
				routing: {
					send: {
						type: 'body',
						property: 'companyHeadcount',
						value: '={{ typeof $value === "string" ? JSON.parse($value) : $value }}',
					},
				},
			},
			{
				displayName: 'Company Location',
				name: 'companyLocation',
				description: 'Company headquarters places to include and to leave out',
				type: 'json',
				default: '{}',
				routing: {
					send: {
						type: 'body',
						property: 'companyLocation',
						value: '={{ typeof $value === "string" ? JSON.parse($value) : $value }}',
					},
				},
			},
			{
				displayName: 'Company Type',
				name: 'companyType',
				description: 'Company types',
				type: 'json',
				default: '[]',
				routing: {
					send: {
						type: 'body',
						property: 'companyType',
						value: '={{ typeof $value === "string" ? JSON.parse($value) : $value }}',
					},
				},
			},
			{
				displayName: 'Connection ID',
				name: 'connectionId',
				description:
					'Which of your LinkedIn accounts to act from (its ID from list_linkedin_accounts). Omit to use your first live one.',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'connectionId',
					},
				},
			},
			{
				displayName: 'Connections Of',
				name: 'connectionsOf',
				description:
					'People whose connections to search: IDs from lookup_search_ids type PEOPLE, service SALES_NAVIGATOR',
				type: 'string',
				typeOptions: {
					multipleValues: true,
				},
				default: [],
				routing: {
					send: {
						type: 'body',
						property: 'connectionsOf',
					},
				},
			},
			{
				displayName: 'Cursor',
				name: 'cursor',
				description:
					'NextCursor from the previous call, to get the next page. Keep the other arguments the same.',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'cursor',
					},
				},
			},
			{
				displayName: 'First Name',
				name: 'firstName',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'firstName',
					},
				},
			},
			{
				displayName: 'Following Your Company',
				name: 'followingYourCompany',
				description: 'Whether to switch this on. Only people who follow your company.',
				type: 'boolean',
				default: false,
				routing: {
					send: {
						type: 'body',
						property: 'followingYourCompany',
					},
				},
			},
			{
				displayName: 'Function',
				name: 'function',
				description: 'Job functions to include and to leave out',
				type: 'json',
				default: '{}',
				routing: {
					send: {
						type: 'body',
						property: 'function',
						value: '={{ typeof $value === "string" ? JSON.parse($value) : $value }}',
					},
				},
			},
			{
				displayName: 'Groups',
				name: 'groups',
				description:
					'LinkedIn groups: IDs from lookup_search_ids type GROUPS, service SALES_NAVIGATOR',
				type: 'string',
				typeOptions: {
					multipleValues: true,
				},
				default: [],
				routing: {
					send: {
						type: 'body',
						property: 'groups',
					},
				},
			},
			{
				displayName: 'Include Saved Accounts',
				name: 'includeSavedAccounts',
				description: 'Whether to switch this on. Include people at your saved accounts.',
				type: 'boolean',
				default: false,
				routing: {
					send: {
						type: 'body',
						property: 'includeSavedAccounts',
					},
				},
			},
			{
				displayName: 'Include Saved Leads',
				name: 'includeSavedLeads',
				description: 'Whether to switch this on. Include your saved leads.',
				type: 'boolean',
				default: false,
				routing: {
					send: {
						type: 'body',
						property: 'includeSavedLeads',
					},
				},
			},
			{
				displayName: 'Industry',
				name: 'industry',
				description: 'Industries to include and to leave out',
				type: 'json',
				default: '{}',
				routing: {
					send: {
						type: 'body',
						property: 'industry',
						value: '={{ typeof $value === "string" ? JSON.parse($value) : $value }}',
					},
				},
			},
			{
				displayName: 'Keywords',
				name: 'keywords',
				description: 'Words to search for',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'keywords',
					},
				},
			},
			{
				displayName: 'Last Name',
				name: 'lastName',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'lastName',
					},
				},
			},
			{
				displayName: 'Last Viewed At',
				name: 'lastViewedAt',
				description: 'With savedSearchId: only results newer than this moment (Unix time)',
				type: 'number',
				default: 0,
				routing: {
					send: {
						type: 'body',
						property: 'lastViewedAt',
					},
				},
			},
			{
				displayName: 'Lead Lists',
				name: 'leadLists',
				description: 'Your lead lists (an ID, or "ALL") to include and to leave out',
				type: 'json',
				default: '{}',
				routing: {
					send: {
						type: 'body',
						property: 'leadLists',
						value: '={{ typeof $value === "string" ? JSON.parse($value) : $value }}',
					},
				},
			},
			{
				displayName: 'Location',
				name: 'location',
				description: 'Places to include and to leave out',
				type: 'json',
				default: '{}',
				routing: {
					send: {
						type: 'body',
						property: 'location',
						value: '={{ typeof $value === "string" ? JSON.parse($value) : $value }}',
					},
				},
			},
			{
				displayName: 'Location by Postal Code',
				name: 'locationByPostalCode',
				description: 'Postal codes to include and to leave out',
				type: 'json',
				default: '{}',
				routing: {
					send: {
						type: 'body',
						property: 'locationByPostalCode',
						value: '={{ typeof $value === "string" ? JSON.parse($value) : $value }}',
					},
				},
			},
			{
				displayName: 'Max Results',
				name: 'maxResults',
				description: 'How many to return (1–100, default 10)',
				type: 'number',
				default: 1,
				typeOptions: {
					minValue: 1,
					maxValue: 100,
				},
				routing: {
					send: {
						type: 'body',
						property: 'limit',
					},
				},
			},
			{
				displayName: 'Mentionned in News',
				name: 'mentionnedInNews',
				description: 'Whether to switch this on. Only people mentioned in the news recently.',
				type: 'boolean',
				default: false,
				routing: {
					send: {
						type: 'body',
						property: 'mentionnedInNews',
					},
				},
			},
			{
				displayName: 'Messaged Recently',
				name: 'messagedRecently',
				description: 'Whether to switch this on. Only people you messaged recently.',
				type: 'boolean',
				default: false,
				routing: {
					send: {
						type: 'body',
						property: 'messagedRecently',
					},
				},
			},
			{
				displayName: 'Network Distance',
				name: 'networkDistance',
				description: 'Connection degrees from you (1, 2, 3) or "GROUP" for people in your groups',
				type: 'json',
				default: '[]',
				routing: {
					send: {
						type: 'body',
						property: 'networkDistance',
						value: '={{ typeof $value === "string" ? JSON.parse($value) : $value }}',
					},
				},
			},
			{
				displayName: 'Past Colleague',
				name: 'pastColleague',
				description: 'Whether to switch this on. Only past colleagues.',
				type: 'boolean',
				default: false,
				routing: {
					send: {
						type: 'body',
						property: 'pastColleague',
					},
				},
			},
			{
				displayName: 'Past Company',
				name: 'pastCompany',
				description: 'Past companies to include and to leave out',
				type: 'json',
				default: '{}',
				routing: {
					send: {
						type: 'body',
						property: 'pastCompany',
						value: '={{ typeof $value === "string" ? JSON.parse($value) : $value }}',
					},
				},
			},
			{
				displayName: 'Past Role',
				name: 'pastRole',
				description: 'Past job titles to include and to leave out',
				type: 'json',
				default: '{}',
				routing: {
					send: {
						type: 'body',
						property: 'pastRole',
						value: '={{ typeof $value === "string" ? JSON.parse($value) : $value }}',
					},
				},
			},
			{
				displayName: 'Persona',
				name: 'persona',
				description:
					'Your Sales Navigator personas: IDs from lookup_search_ids type PERSONA, service SALES_NAVIGATOR',
				type: 'string',
				typeOptions: {
					multipleValues: true,
				},
				default: [],
				routing: {
					send: {
						type: 'body',
						property: 'persona',
					},
				},
			},
			{
				displayName: 'Posted on LinkedIn',
				name: 'postedOnLinkedin',
				description: 'Whether to switch this on. Only people who posted on LinkedIn recently.',
				type: 'boolean',
				default: false,
				routing: {
					send: {
						type: 'body',
						property: 'postedOnLinkedin',
					},
				},
			},
			{
				displayName: 'Profile Language',
				name: 'profileLanguage',
				description: 'Profile languages, as two-letter codes such as "en"',
				type: 'string',
				typeOptions: {
					multipleValues: true,
				},
				default: [],
				routing: {
					send: {
						type: 'body',
						property: 'profileLanguage',
					},
				},
			},
			{
				displayName: 'Recent Search ID',
				name: 'recentSearchId',
				description:
					'Run one of your recent searches again; it replaces every other filter: an ID from lookup_search_ids type RECENT_SEARCHES, service SALES_NAVIGATOR',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'recentSearchId',
					},
				},
			},
			{
				displayName: 'Role',
				name: 'role',
				description: 'Current job titles to include and to leave out',
				type: 'json',
				default: '{}',
				routing: {
					send: {
						type: 'body',
						property: 'role',
						value: '={{ typeof $value === "string" ? JSON.parse($value) : $value }}',
					},
				},
			},
			{
				displayName: 'Saved Search ID',
				name: 'savedSearchId',
				description:
					'Run one of your saved searches; it replaces every other filter: an ID from lookup_search_ids type SAVED_SEARCHES, service SALES_NAVIGATOR',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'savedSearchId',
					},
				},
			},
			{
				displayName: 'School',
				name: 'school',
				description: 'Schools to include and to leave out',
				type: 'json',
				default: '{}',
				routing: {
					send: {
						type: 'body',
						property: 'school',
						value: '={{ typeof $value === "string" ? JSON.parse($value) : $value }}',
					},
				},
			},
			{
				displayName: 'Seniority',
				name: 'seniority',
				description: 'Seniority levels to include and to leave out',
				type: 'json',
				default: '{}',
				routing: {
					send: {
						type: 'body',
						property: 'seniority',
						value: '={{ typeof $value === "string" ? JSON.parse($value) : $value }}',
					},
				},
			},
			{
				displayName: 'Shared Experiences',
				name: 'sharedExperiences',
				description: 'Whether to switch this on. Only people you share experiences with.',
				type: 'boolean',
				default: false,
				routing: {
					send: {
						type: 'body',
						property: 'sharedExperiences',
					},
				},
			},
			{
				displayName: 'Tenure',
				name: 'tenure',
				description: "Years of experience, as LinkedIn's own bands, e.g. { min: 3, max: 5 }",
				type: 'json',
				default: '[]',
				routing: {
					send: {
						type: 'body',
						property: 'tenure',
						value: '={{ typeof $value === "string" ? JSON.parse($value) : $value }}',
					},
				},
			},
			{
				displayName: 'Tenure at Company',
				name: 'tenureAtCompany',
				description: "Years in the current company, as LinkedIn's own bands",
				type: 'json',
				default: '[]',
				routing: {
					send: {
						type: 'body',
						property: 'tenureAtCompany',
						value: '={{ typeof $value === "string" ? JSON.parse($value) : $value }}',
					},
				},
			},
			{
				displayName: 'Tenure at Role',
				name: 'tenureAtRole',
				description: "Years in the current position, as LinkedIn's own bands",
				type: 'json',
				default: '[]',
				routing: {
					send: {
						type: 'body',
						property: 'tenureAtRole',
						value: '={{ typeof $value === "string" ? JSON.parse($value) : $value }}',
					},
				},
			},
			{
				displayName: 'Viewed Profile Recently',
				name: 'viewedProfileRecently',
				description: 'Whether to switch this on. Only people whose profile you viewed recently.',
				type: 'boolean',
				default: false,
				routing: {
					send: {
						type: 'body',
						property: 'viewedProfileRecently',
					},
				},
			},
			{
				displayName: 'Viewed Your Profile Recently',
				name: 'viewedYourProfileRecently',
				description: 'Whether to switch this on. Only people who viewed your profile recently.',
				type: 'boolean',
				default: false,
				routing: {
					send: {
						type: 'body',
						property: 'viewedYourProfileRecently',
					},
				},
			},
		],
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['search'],
				operation: ['search_people'],
			},
		},
		options: [
			{
				displayName: 'Connection ID',
				name: 'connectionId',
				description:
					'Which of your LinkedIn accounts to act from (its ID from list_linkedin_accounts). Omit to use your first live one.',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'connectionId',
					},
				},
			},
			{
				displayName: 'Cursor',
				name: 'cursor',
				description:
					'NextCursor from the previous call, to get the next page. Keep the other arguments the same.',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'cursor',
					},
				},
			},
			{
				displayName: 'Keywords',
				name: 'keywords',
				description: 'Words to search for, e.g. "head of sales fintech"',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'keywords',
					},
				},
			},
			{
				displayName: 'Location',
				name: 'location',
				description: 'A place name, e.g. "Berlin" or "United Kingdom"',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'location',
					},
				},
			},
			{
				displayName: 'Max Results',
				name: 'maxResults',
				description: 'Max people to return (1–10, default 10)',
				type: 'number',
				default: 1,
				typeOptions: {
					minValue: 1,
					maxValue: 10,
				},
				routing: {
					send: {
						type: 'body',
						property: 'limit',
					},
				},
			},
			{
				displayName: 'Network',
				name: 'network',
				description: 'Limit to these connection degrees from you: first, second, third',
				type: 'json',
				default: '[]',
				routing: {
					send: {
						type: 'body',
						property: 'network',
						value: '={{ typeof $value === "string" ? JSON.parse($value) : $value }}',
					},
				},
			},
		],
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['search'],
				operation: ['search_people_sales_navigator'],
			},
		},
		options: [
			{
				displayName: 'Changed Jobs',
				name: 'changedJobs',
				description:
					'Whether to switch this on. Only people who recently changed jobs (buying signal).',
				type: 'boolean',
				default: false,
				routing: {
					send: {
						type: 'body',
						property: 'changedJobs',
					},
				},
			},
			{
				displayName: 'Companies',
				name: 'companies',
				description:
					'Current companies by name, e.g. ["Google","Stripe"]. Each name is looked up and the top match used — when you already have LinkedIn company IDs (search_companies / list_funding_signals return companyId), pass companyIds instead.',
				type: 'string',
				typeOptions: {
					multipleValues: true,
				},
				default: [],
				routing: {
					send: {
						type: 'body',
						property: 'companies',
					},
				},
			},
			{
				displayName: 'Company Headcounts',
				name: 'companyHeadcounts',
				description:
					'Company size bands. Valid: self-employed, 1-10, 11-50, 51-200, 201-500, 501-1000, 1001-5000, 5001-10000, 10001+.',
				type: 'string',
				typeOptions: {
					multipleValues: true,
				},
				default: [],
				routing: {
					send: {
						type: 'body',
						property: 'companyHeadcounts',
					},
				},
			},
			{
				displayName: 'Company IDs',
				name: 'companyIds',
				description:
					'Current companies by LinkedIn company ID — the companyId values search_companies / list_funding_signals return (up to 100). Exact: no name lookup, so no same-name mix-ups. Combine with seniorities and changedJobs / postedOnLinkedIn to get the decision-makers at signal companies who just moved / are posting.',
				type: 'json',
				default: '[]',
				routing: {
					send: {
						type: 'body',
						property: 'companyIds',
						value: '={{ typeof $value === "string" ? JSON.parse($value) : $value }}',
					},
				},
			},
			{
				displayName: 'Company Max Revenue Millions',
				name: 'companyMaxRevenueMillions',
				description:
					'Only people at companies with at most this annual revenue, in millions (e.g. 100 = up to $100M). Same brackets as companyMinRevenueMillions.',
				type: 'number',
				default: 0,
				routing: {
					send: {
						type: 'body',
						property: 'companyMaxRevenueMillions',
					},
				},
			},
			{
				displayName: 'Company Min Revenue Millions',
				name: 'companyMinRevenueMillions',
				description:
					"Only people at companies with at least this annual revenue, in millions (e.g. 10 = $10M+) — use it to target companies that can afford the user's price. LinkedIn uses fixed brackets (0, 0.2, 1, 2.5, 5, 10, 20, 50, 100, 500, 1000); other values widen to the nearest one. The companies are matched on the same industries / companyHeadcounts / locations (as HQ location). Revenue is LinkedIn's estimate — companies without one are left out.",
				type: 'number',
				default: 0,
				routing: {
					send: {
						type: 'body',
						property: 'companyMinRevenueMillions',
					},
				},
			},
			{
				displayName: 'Confirm',
				name: 'confirm',
				description:
					'Whether to switch this on. false (default) = return the credit-cost estimate only (nothing charged). true = pull the people and charge credits after the user agreed. Continuation pages (with cursor) should pass confirm:true.',
				type: 'boolean',
				default: false,
				routing: {
					send: {
						type: 'body',
						property: 'confirm',
					},
				},
			},
			{
				displayName: 'Cursor',
				name: 'cursor',
				description:
					"Pagination cursor from a previous search_people_sales_navigator call's nextCursor — pass it back exactly as returned (it lasts 24 hours). Pass it with confirm:true to pull the NEXT batch — this is how you build a list larger than the 100/call cap. The cursor carries its search's filters, so pass the SAME filters or none. Omit for the first page.",
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'cursor',
					},
				},
			},
			{
				displayName: 'Format',
				name: 'format',
				description:
					'Table (default) = structured rows to render as a table. csv = also return an export-ready CSV string (columns: Name, Title, Company, Location, Industry, Shared Connections, Tenure in Role, LinkedIn URL) — use for large lists the user wants to save/hand off.',
				type: 'options',
				options: [
					{
						name: 'Csv',
						value: 'csv',
					},
					{
						name: 'Table',
						value: 'table',
					},
				],
				default: 'csv',
				routing: {
					send: {
						type: 'body',
						property: 'format',
					},
				},
			},
			{
				displayName: 'Functions',
				name: 'functions',
				description: 'Job functions/departments, e.g. ["Engineering","Sales","Marketing"]',
				type: 'string',
				typeOptions: {
					multipleValues: true,
				},
				default: [],
				routing: {
					send: {
						type: 'body',
						property: 'functions',
					},
				},
			},
			{
				displayName: 'Industries',
				name: 'industries',
				description: 'Company industries in plain English, e.g. ["Software","Financial Services"]',
				type: 'string',
				typeOptions: {
					multipleValues: true,
				},
				default: [],
				routing: {
					send: {
						type: 'body',
						property: 'industries',
					},
				},
			},
			{
				displayName: 'Keywords',
				name: 'keywords',
				description:
					'Free-text keywords searched across all profile fields (title, headline, about, company)',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'keywords',
					},
				},
			},
			{
				displayName: 'Locations',
				name: 'locations',
				description:
					'Person locations in plain English, e.g. ["United States","London"]. Resolved to LinkedIn regions automatically.',
				type: 'string',
				typeOptions: {
					multipleValues: true,
				},
				default: [],
				routing: {
					send: {
						type: 'body',
						property: 'locations',
					},
				},
			},
			{
				displayName: 'Max Results',
				name: 'maxResults',
				description:
					'Max people to return THIS call (1–100, default 25). To exceed 100 total, page with cursor.',
				type: 'number',
				default: 1,
				typeOptions: {
					minValue: 1,
					maxValue: 100,
				},
				routing: {
					send: {
						type: 'body',
						property: 'limit',
					},
				},
			},
			{
				displayName: 'Posted on LinkedIn',
				name: 'postedOnLinkedIn',
				description:
					'Whether to switch this on. Only people who recently posted on LinkedIn (active/reachable signal).',
				type: 'boolean',
				default: false,
				routing: {
					send: {
						type: 'body',
						property: 'postedOnLinkedIn',
					},
				},
			},
			{
				displayName: 'Revenue Currency',
				name: 'revenueCurrency',
				description: 'ISO currency of the revenue band, e.g. "USD" (default), "EUR", "GBP"',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'revenueCurrency',
					},
				},
			},
			{
				displayName: 'Seniorities',
				name: 'seniorities',
				description:
					'Seniority levels, e.g. ["CXO","VP","Director","Manager"] (owner/partner, cxo, vice_president, director, experienced_manager, entry_level_manager, strategic, senior, entry_level, in_training)',
				type: 'string',
				typeOptions: {
					multipleValues: true,
				},
				default: [],
				routing: {
					send: {
						type: 'body',
						property: 'seniorities',
					},
				},
			},
			{
				displayName: 'Titles',
				name: 'titles',
				description:
					'Job titles, e.g. ["Chief Technology Officer","VP of Engineering"]. Matched as OR\'d keywords — pass variants to go broad.',
				type: 'string',
				typeOptions: {
					multipleValues: true,
				},
				default: [],
				routing: {
					send: {
						type: 'body',
						property: 'titles',
					},
				},
			},
		],
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['search'],
				operation: ['search_posts'],
			},
		},
		options: [
			{
				displayName: 'Author Companies',
				name: 'authorCompanies',
				description: 'Company names — posts written by PEOPLE who work at these companies',
				type: 'string',
				typeOptions: {
					multipleValues: true,
				},
				default: [],
				routing: {
					send: {
						type: 'body',
						property: 'authorCompanies',
					},
				},
			},
			{
				displayName: 'Author Industries',
				name: 'authorIndustries',
				description: 'Industry names the author works in, e.g. ["Software Development"]',
				type: 'string',
				typeOptions: {
					multipleValues: true,
				},
				default: [],
				routing: {
					send: {
						type: 'body',
						property: 'authorIndustries',
					},
				},
			},
			{
				displayName: 'Author Keywords',
				name: 'authorKeywords',
				description: 'Words in the AUTHOR\'s headline / title, e.g. "founder" or "head of sales"',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'authorKeywords',
					},
				},
			},
			{
				displayName: 'Connection ID',
				name: 'connectionId',
				description:
					'Which of your LinkedIn senders to search through (its ID from list_linkedin_accounts). Omit to use your first live sender, or the shared account when you have none.',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'connectionId',
					},
				},
			},
			{
				displayName: 'Content Type',
				name: 'contentType',
				description: 'Only posts with this kind of content',
				type: 'options',
				options: [
					{
						name: 'Collaborative Articles',
						value: 'collaborative_articles',
					},
					{
						name: 'Documents',
						value: 'documents',
					},
					{
						name: 'Images',
						value: 'images',
					},
					{
						name: 'Jobs',
						value: 'jobs',
					},
					{
						name: 'Live Videos',
						value: 'live_videos',
					},
					{
						name: 'Videos',
						value: 'videos',
					},
				],
				default: 'collaborative_articles',
				routing: {
					send: {
						type: 'body',
						property: 'contentType',
					},
				},
			},
			{
				displayName: 'Cursor',
				name: 'cursor',
				description:
					'NextCursor from the previous call, to get the next page. Keep every other argument the same.',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'cursor',
					},
				},
			},
			{
				displayName: 'Date Posted',
				name: 'datePosted',
				description: 'Only posts from the past day, week or month',
				type: 'options',
				options: [
					{
						name: 'Past Day',
						value: 'past_day',
					},
					{
						name: 'Past Month',
						value: 'past_month',
					},
					{
						name: 'Past Week',
						value: 'past_week',
					},
				],
				default: 'past_day',
				routing: {
					send: {
						type: 'body',
						property: 'datePosted',
					},
				},
			},
			{
				displayName: 'From Companies',
				name: 'fromCompanies',
				description: 'Company names — posts published by these COMPANY PAGES themselves',
				type: 'string',
				typeOptions: {
					multipleValues: true,
				},
				default: [],
				routing: {
					send: {
						type: 'body',
						property: 'fromCompanies',
					},
				},
			},
			{
				displayName: 'Keywords',
				name: 'keywords',
				description:
					'Words to search for in posts, e.g. "cold email deliverability". LinkedIn search operators work ("exact phrase", AND, OR, NOT).',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'keywords',
					},
				},
			},
			{
				displayName: 'Max Results',
				name: 'maxResults',
				description: 'Max posts to return (1–50, default 10)',
				type: 'number',
				default: 1,
				typeOptions: {
					minValue: 1,
					maxValue: 50,
				},
				routing: {
					send: {
						type: 'body',
						property: 'limit',
					},
				},
			},
			{
				displayName: 'Mentioning Companies',
				name: 'mentioningCompanies',
				description: 'Company names — posts that @mention these companies (e.g. a competitor)',
				type: 'string',
				typeOptions: {
					multipleValues: true,
				},
				default: [],
				routing: {
					send: {
						type: 'body',
						property: 'mentioningCompanies',
					},
				},
			},
			{
				displayName: 'Posted By',
				name: 'postedBy',
				description:
					'Only posts by you ("me"), by your 1st-degree connections, or by people you follow. Runs on your own LinkedIn sender, so one must be connected.',
				type: 'options',
				options: [
					{
						name: 'First Connections',
						value: 'first_connections',
					},
					{
						name: 'Me',
						value: 'me',
					},
					{
						name: 'People You Follow',
						value: 'people_you_follow',
					},
				],
				default: 'first_connections',
				routing: {
					send: {
						type: 'body',
						property: 'postedBy',
					},
				},
			},
			{
				displayName: 'Sort By',
				name: 'sortBy',
				description: '"relevance" (LinkedIn\'s default) or "date" (newest first)',
				type: 'options',
				options: [
					{
						name: 'Date',
						value: 'date',
					},
					{
						name: 'Relevance',
						value: 'relevance',
					},
				],
				default: 'date',
				routing: {
					send: {
						type: 'body',
						property: 'sortBy',
					},
				},
			},
		],
	},
];
