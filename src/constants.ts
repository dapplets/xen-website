import silver from '../public/img/silver.png'
import gold from '../public/img/gold.png'
import black from '../public/img/black.png'
import OptionIcon2 from '../public/img/cloud-server-outlined.svg'
import OptionIcon1 from '../public/img/solar_server-linear.svg'
import OptionIcon3 from '../public/img/sync.svg'
import Tg from '../public/img/tg.svg'
import Web from '../public/img/web.svg'
import App from '../public/img/ai-line.svg'
import Near from '../public/img/near.svg'
import Proximity from '../public/img/proximity.svg'
import Swarm from '../public/img/swarm.svg'
import Bos from '../public/img/bos-hacks.svg'
import Web3 from '../public/img/web3-hack.svg'
import Encode from '../public/img/encode.svg'
import OneTrillion from '../public/img/one-trillion.svg'
import Redacted from '../public/img/redacted.svg'
import GitDark from '../public/img/github-dark.svg'
import DiscordDark from '../public/img/discord.svg'
import TgDark from '../public/img/tg-dark.svg'
import MediumDark from '../public/img/medium.svg'
import XDark from '../public/img/x.svg'
import FacebookDark from '../public/img/facebook.svg'
import EmailDark from '../public/img/email.svg'

// todo: need links
export const navHeader = [
  { linkText: 'Home', link: '/' },
  { linkText: 'Agents', link: '/' },
  { linkText: 'Community', link: '/' },
  { linkText: 'Github', link: '/' },
]

export const featuresPromo = [
  {
    title: 'You control your intelligence',
    text: 'Xen is\u00A0designed from the ground up\u00A0to\u00A0respect your autonomy. Unlike traditional\u00A0AI assistants that rely on\u00A0centralized servers, telemetry, and opaque data sharing practices, Xen runs on\u00A0your terms\u00A0\u2014 on\u00A0your hardware, in\u00A0your environment, with zero vendor lock-in.',
  },
  {
    title: 'You Define the Boundaries',
    text: 'Want to\u00A0run everything locally, without a\u00A0single external API call? Done. Prefer to\u00A0selectively enable external services for tasks like summarization, OCR, or\u00A0image generation? You control all privacy delegations and toggle them, agent by\u00A0agent, task by\u00A0task.',
  },
  {
    title: 'Built for the Sovereign Individual',
    text: 'You don\u2019t have to\u00A0be\u00A0a\u00A0hacker to\u00A0care about privacy. If\u00A0you\u2019re a\u00A0professional who wants to\u00A0gain control over your skills and ideas, Xen is\u00A0for you. It\u00A0is\u00A0open source and documented, so\u00A0you can see every line of\u00A0code, control every function and customise how it\u00A0works.',
  },
]

export const optionsBadge = [
  { text: 'silver', label: 'Free*', img: silver },
  { text: 'gold', label: 'Free*', img: gold },
  { text: 'platinum', label: 'Free*', img: black },
]

export const optionsPromo = [
  {
    icon: OptionIcon1,
    text: 'Run large language models (LLMs), embeddings, and even vector search fully on\u00A0your device.',
  },
  {
    icon: OptionIcon2,
    text: 'Store memories locally\u00A0\u2014 or\u00A0choose encrypted remote options under your control.',
  },
  {
    icon: OptionIcon3,
    text: 'No\u00A0silent syncing, no\u00A0background uploads\u00A0\u2014 everything is\u00A0explicit and auditable.',
  },
]

export const communityItems = [
  {
    title: 'Create, Customize, Contribute',
    text: 'With Xen, you can design powerful prompts, craft intelligent agents, build complete automation workflows, and develop custom functions or\u00A0browser adapters\u00A0\u2014 all within an\u00A0open architecture. Whether you\u2019re responding to\u00A0real user requests or\u00A0simply building what inspires you, your contributions help shape the future of\u00A0the platform. Every component is\u00A0modular and reusable, meaning your work doesn\u2019t just solve your problems\u00A0\u2014 it\u00A0becomes part of\u00A0a\u00A0shared toolkit for others.',
  },
  {
    title: 'Monetize Your Expertise',
    text: 'Xen enables a\u00A0sustainable creator economy. Developers can offer premium agents, exclusive workflows, or\u00A0packaged automation setups. You can also take on\u00A0commissioned features and integrations directly from the user community. And when running Xen in\u00A0the cloud, advanced capabilities\u00A0\u2014 like agent orchestration or\u00A0third-party API access\u00A0\u2014 become part of\u00A0a\u00A0paid model where value flows back to\u00A0the creators who built them.',
  },
  {
    title: 'Define What Matters',
    text: 'In\u00A0the Xen ecosystem, users aren\u2019t just passive consumers\u00A0\u2014 they help drive development. Need a\u00A0specific feature, agent, adapter, or\u00A0tool? Submit a\u00A0request and directly support the developers who bring it\u00A0to\u00A0life. This model empowers a\u00A0faster, more meaningful development cycle where what gets built truly reflects what people need.',
  },
]

// todo: need link
export const availableisItems = [
  {
    icon: Tg,
    title: 'Telegram',
    subtitle: 'lightweight \u0026\u00A0portable',
    text: 'Bring Xen into your pocket.\n With our Telegram integration, you can chat with your\u00A0AI assistant on\u00A0the\u00A0go, in\u00A0private and with full access to\u00A0all your configured tools and memories. It\u2019s perfect for quick interactions, real-time help, and discreet automation wherever you are.',
    linkText: 'Launch on\u00A0Telegram',
    link: '/',
  },
  {
    icon: Web,
    title: 'Web',
    subtitle: 'for chromium-based browsers',
    text: 'Xen lives inside your browser.\n From analyzing pages in\u00A0real-time to\u00A0modifying web content with smart overlays, Xen enhances your browsing with intelligence and context. Whether you\u2019re researching, fact-checking, or\u00A0automating workflows\u00A0\u2014 Xen acts as\u00A0a\u00A0co-pilot in\u00A0your digital space.',
    linkText: 'Chrome Web Store',
    link: '/',
  },
  {
    icon: App,
    title: 'Native app',
    subtitle: 'coming soon',
    text: 'The full Xen experience\u00A0\u2014 local and unleashed. \nOur native app will bring deep integration with your operating system, enhanced hardware acceleration for local LLMs, and advanced agent chaining. Full offline capabilities, custom notifications, system control, and everything you need for a\u00A0truly personal\u00A0AI.',
    linkText: 'Join the waitlist',
    link: '/',
  },
]

export const supported = [
  { icon: Near, id: 'Near' },
  { icon: Proximity, id: 'Proximity' },
  { icon: Swarm, id: 'Swarm' },
  { icon: Bos, id: 'Bos' },
  { icon: Web3, id: 'Web3' },
  { icon: Encode, id: 'Encode' },
  { icon: OneTrillion, id: 'OneTrillion' },
  { icon: Redacted, id: 'Redacted' },
]

// todo: need link
export const contacts = [
  { icon: GitDark, id: 'GitDark', link: '' },
  { icon: DiscordDark, id: 'DiscordDark', link: '' },
  { icon: TgDark, id: TgDark, link: '' },
  { icon: MediumDark, id: 'MediumDark', link: '' },
  { icon: XDark, id: 'XDark', link: '' },
  { icon: FacebookDark, id: 'FacebookDark', link: '' },
  { icon: EmailDark, id: 'EmailDark', link: '' },
]
