# n8n-nodes-heyreagent

This is an n8n community node. It lets you use [HeyReagent](https://heyreagent.com/n8n-linkedin?utm_source=n8n&utm_medium=node) in your n8n workflows.

HeyReagent lets your own tools act on your own LinkedIn account: read your inbox, send messages and invitations, search for people, and work with posts. It is an independent service, not made by, affiliated with or endorsed by LinkedIn.

[n8n](https://n8n.io/) is a [fair-code licensed](https://docs.n8n.io/sustainable-use-license/) workflow automation platform.

[Installation](#installation)
[Operations](#operations)
[Credentials](#credentials)
[Compatibility](#compatibility)
[Usage](#usage)
[Resources](#resources)
[Version history](#version-history)

## Installation

Follow the [installation guide](https://docs.n8n.io/integrations/community-nodes/installation/) in the n8n community nodes documentation. The package name is `n8n-nodes-heyreagent`.

## Operations

The node has every action of the HeyReagent API: 97 operations in 11 resources.

| Resource | Operations | For example |
|---|---|---|
| Account | 4 | Connect a LinkedIn account, get today's usage and limits |
| InMail | 5 | List InMail conversations, get InMail credits |
| Insight | 4 | Who is waiting on my reply, who went cold |
| Job | 10 | List my job postings, list a job posting's applicants |
| Message | 27 | List conversations, get a conversation, send a message |
| Network | 9 | Send an invitation, list connections, accept or decline an invitation |
| Post | 11 | Get someone's recent posts, comment on a post, get who engaged with a post |
| Profile | 5 | Get a profile, update your own profile |
| Recruiter | 4 | List Recruiter hiring projects, add or move a candidate |
| Sales Navigator | 1 | Save a Sales Navigator lead |
| Search | 17 | Search people, companies, posts and jobs |

Each operation is described, with its inputs and what comes back, in the [HeyReagent docs](https://heyreagent.com/docs?utm_source=n8n&utm_medium=node#actions).

## Credentials

You need a HeyReagent account with your LinkedIn account connected. It is free to start.

1. Sign in at [heyreagent.com](https://heyreagent.com/signin?utm_source=n8n&utm_medium=node) and connect your own LinkedIn account.
2. On the thread page, open **Menu**, then **Developers**, and create a key. It is shown once.
3. In n8n, create a **HeyReagent API** credential and paste the key into **API Key**.

n8n checks the key when you save the credential.

## Compatibility

Tested with n8n 2.41.7.

## Usage

- Pick a **Resource**, then an **Operation**. The inputs an action needs are on the node; the optional ones are under **Additional Fields**.
- The node returns what the action answers (the API's `result`). When an action is refused, the node fails with the API's own message, which says why in plain English: for example that a daily limit is reached and when it resets.
- An input that is a list of objects or an object is entered as JSON.
- **Max Results** is the API's `limit` input.
- On the free plan, LinkedIn is disconnected after a while without use, so it suits workflows you run while you work. A scheduled workflow needs the Connect plan, which keeps LinkedIn connected.
- The Sales Navigator, Recruiter and job-posting operations run on your own LinkedIn account and need that product on it.

Each LinkedIn account has a daily limit for each kind of action; see [the limits](https://heyreagent.com/docs?utm_source=n8n&utm_medium=node#limits). LinkedIn's User Agreement does not allow automated activity, and LinkedIn can limit or restrict an account that it decides is automated. Keep the numbers small, and spread what you do over the day.

## Resources

- [n8n community nodes documentation](https://docs.n8n.io/integrations/#community-nodes)
- [HeyReagent docs](https://heyreagent.com/docs?utm_source=n8n&utm_medium=node)
- [HeyReagent API as an OpenAPI 3.1 file](https://heyreagent.com/openapi.json)
- [Using HeyReagent from n8n](https://heyreagent.com/n8n-linkedin?utm_source=n8n&utm_medium=node)

## Version history

- **0.1.1**: the same node, published from GitHub Actions with npm provenance, as n8n asks of verified nodes.
- **0.1.0**: first release. Every action of the HeyReagent API, generated from its OpenAPI file by `scripts/generate.mjs`.

## For maintainers

`npm run generate` reads `https://heyreagent.com/openapi.json` and rewrites `nodes/HeyReagent/actions.ts`, so the node offers exactly the actions the API has. Run it, then `npm run lint` and `npm run build`, before a release.
