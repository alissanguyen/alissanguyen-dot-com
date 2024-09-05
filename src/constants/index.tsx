'use client'

import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaGithub,
  FaLinkedin
} from "react-icons/fa";

import LaunchCountdownIcon from "../../public/assets/otherprojects/launch.png"
import ClipboardIcon from "../../public/assets/otherprojects/paper-clip.png"
import GitHubSpotterIcon from "../../public/assets/otherprojects/spotter.png"
import AtomIcon from "../../public/assets/otherprojects/atom.png"
import CalculatorIcon from "../../public/assets/otherprojects/calculator.png"
import InvoiceAppIcon from "../../public/assets/otherprojects/invoice.png"
import LoLIcon from "../../public/assets/otherprojects/game.png"
import PomodoroIcon from "../../public/assets/otherprojects/pomodoro.png"
import WeatherlyIcon from "../../public/assets/otherprojects/weather.png"

import PythonIcon from "../../public/assets/images/tech/python.svg";
import AWSIcon from "../../public/assets/images/tech/aws-dark.svg";
import CloudflareIcon from "../../public/assets/images/tech/cloudflare.svg";
import MongoDBIcon from "../../public/assets/images/tech/mongodb.svg";
import FirebaseIcon from "../../public/assets/images/tech/firebase.svg";
import ContentfulIcon from "../../public/assets/images/tech/contentful.svg";
import PytorchIcon from "../../public/assets/images/tech/pytorch.svg";
import TensorFlowIcon from "../../public/assets/images/tech/tensorflow.svg";
import SendGridIcon from "../../public/assets/images/tech/sendgrid.svg";
import VercelIcon from "../../public/assets/images/tech/vercel.svg";
import RemixIcon from "../../public/assets/images/tech/remix.svg";
import TailwindIcon from "../../public/assets/images/tech/tailwindcss.svg";
import NPMIcon from "../../public/assets/images/tech/npm.svg";
import NetlifyIcon from "../../public/assets/images/tech/netlify.svg";
import SentryIcon from "../../public/assets/images/tech/sentry.svg";
import PostHogIcon from "../../public/assets/images/tech/posthog.svg";
import DrizzleIcon from "../../public/assets/images/tech/drizzleorm.svg";
import ClerkIcon from "../../public/assets/images/tech/clerk.svg";
import UpstashIcon from "../../public/assets/images/tech/upstash.svg";

export const topLevelLinksOnMobile: { href: string; displayName: string }[] = [
  {
    href: "/",
    displayName: "Home"
  },
  {
    href: "/blog",
    displayName: "Blog"
  },
  {
    href: "/#portfolio",
    displayName: "Portfolio",
  },
  {
    href: "/#resume",
    displayName: "Resume",
  },
  {
    href: "/#contact",
    displayName: "Contact",
  },
];
export const topLevelLinksOnDesktop: { href: string; displayName: string; onClick?: () => void }[] = [
  {
    href: "/",
    displayName: "Home"
  },
  {
    href: "/blog",
    displayName: "Blog",
  },
  {
    href: "/#portfolio",
    displayName: "Portfolio",
  },
  {
    href: "/#resume",
    displayName: "Resume",
  },
  {
    href: "/#contact",
    displayName: "Contact",
  },
];

interface SocialMediaIconData {
  name: string;
  className: string;
  icon: React.FC;
  externalUrl: string;
}
export const SOCIAL_MEDIA_METADATA: SocialMediaIconData[] = [
  {
    name: "Facebook",
    className: "icon facebook text-black hover:text-white",
    icon: () => <FaFacebookF />,
    externalUrl: "https://www.facebook.com/alissa.1404"
  },
  {
    name: "Twitter",
    className: "icon twitter text-black hover:text-white",
    icon: () => <FaTwitter />,
    externalUrl: "https://twitter.com/ai_alissa"
  },
  {
    name: "Instagram",
    className: "icon instagram text-black hover:text-white",
    icon: () => <FaInstagram />,
    externalUrl: "https://www.instagram.com/alissang1211/"
  },
  {
    name: "Github",
    className: "icon github text-black hover:text-white",
    icon: () => <FaGithub />,
    externalUrl: "https://github.com/alissanguyen"
  },
  {
    name: "Linkedin",
    className: "icon linkedin text-black hover:text-white",
    icon: () => <FaLinkedin />,
    externalUrl: "https://www.linkedin.com/in/alissa-nguyen-dev/"
  }
];
export const contactFormHtmlId = "contact-form";

export const tags = [
  { id: "algorithms", name: "algorithms" }, //1
  { id: "tutorials", name: "tutorials" }, //2
  { id: "frontEnd", name: "front-end" }, //3
  { id: "backEnd", name: "backend" }, //4
  { id: "css", name: "css" }, //5
  { id: "html", name: "html" }, //6
  { id: "javascript", name: "javascript" }, //7
  { id: "personal", name: "personal" }, //8
  { id: "react", name: "react" }, //9
  { id: "remix", name: "remix" }, //10
  { id: "pytorch", name: "pytorch" },
  { id: "git", name: "git" }, //12
  { id: "resources", name: "resources" }, //13
  { id: "testing", name: "testing" }, //14
  { id: "security", name: "security" }, //15
  { id: "hosting", name: "hosting" }, //16
  { id: "databases", name: "databases" }, //17
  { id: "aiml", name: "AI/ML" }, //18
  { id: "dataStructures", name: "data structures" }, //19
  { id: "python", name: "python" }, //20
  { id: "misc", name: "miscellaneous" }, //21
];

export const enum TEXT_HIGHLIGHT {
  BLUE = "var(--blue)",
  YELLOW = "var(--yellow)",
  GREEN = "var(--green)",
  RED = "var(--red)",
  ORANGE = "var(--orange)",
  PINK = "var(--pink)",
  PURPLE = "var(--purple)"
}
export const enum STICKY_HIGHLIGHT {
  BLUE = "rgba(75, 150, 255, 0.1)",
  YELLOW = "var(--sticky-yellow-bg)",
  GREEN = "var(--sticky-green-bg)",
  ORANGE = "var(--sticky-orange-bg)",
  PINK = "rgb(255, 69, 140, 0.1)",
  PURPLE = "rgb(196, 69, 255, 0.1)",
  RED = "rgba(255, 69, 69, 0.1)"
}
export const enum STICKY_BORDER {
  BLUE = "rgba(75, 150, 255, 1)",
  YELLOW = "var(--sticky-yellow-border)",
  GREEN = "var(--sticky-green-border)",
  ORANGE = "var(--sticky-orange-border)",
  PINK = "rgb(255, 81, 148)",
  PURPLE = "rgb(203, 89, 255)",
  RED = "rgb(255, 69, 69)"
}
export const fixedWidthLayoutClasses = `relative w-full text-3xl m-auto px-8 sm:px-12 lg:px-5 xl:px-0`;


export const techs = [
  {
    id: 'python',
    name: 'Python',
    icon: PythonIcon
  },
  {
    id: "aws",
    name: "AWS",
    icon: AWSIcon
  },
  {
    id: "cloudflare",
    name: "Cloudflare",
    icon: CloudflareIcon
  },
  {
    id: "mondodb",
    name: "MongoDB",
    icon: MongoDBIcon
  },
  {
    id: "firebase",
    name: "Firebase",
    icon: FirebaseIcon
  },
  {
    id: "contentful",
    name: "Contentful",
    icon: ContentfulIcon
  },
  {
    id: "pytorch",
    name: "Pytorch",
    icon: PytorchIcon
  },
  {
    id: "tensorflow",
    name: "TensorFlow",
    icon: TensorFlowIcon
  },
  {
    id: "sendgrid",
    name: "SendGrid",
    icon: SendGridIcon
  },
  {
    id: "vercel",
    name: "Vercel",
    icon: VercelIcon
  },
  {
    id: "remix",
    name: "Remix",
    icon: RemixIcon
  },
  {
    id: "tailwind",
    name: "Tailwind",
    icon: TailwindIcon
  },
  {
    id: "npm",
    name: "NPM",
    icon: NPMIcon
  },
  {
    id: "netlify",
    name: "Netlify",
    icon: NetlifyIcon
  },
  {
    id: "sentry",
    name: "Sentry",
    icon: SentryIcon
  },
  {
    id: "posthog",
    name: "PostHog",
    icon: PostHogIcon
  },
  {
    id: "drizzle",
    name: "Drizzle",
    icon: DrizzleIcon
  },
  {
    id: "clerk",
    name: "Clerk",
    icon: ClerkIcon
  },
  {
    id: "upstash",
    name: "Upstash",
    icon: UpstashIcon
  },
];

// export const abilities = [
//   "Writing easily understood, modular, fast, and type-safe code with TypeScript and modern JavaScript syntax and publishing packages to NPM.",
//   "Responsive and performant web pages with React or Remix, with and SSR for a better user experience.",
//   "Deployment to platforms such as Vercel, Netlify, and Cloudflare to leverage caching and firewalls at the edge.",
//   "Creating JAM Stack frontend applications that integrate with modern headless content management systems (CMS) like Contentful and payment APIs like Stripe",
//   "Data management with Firestore, Prisma, or Supabase. Use of classic web security principles and user authorization/authentication with Firebase Auth and automated emails with Sendgrid.",
//   "Modern UI libraries like TailwindCSS, Headless UI, Framer Motion, etc. to create beautiful, responsive, and accessible web apps quickly."
// ];

export const mainProjects = [
  {
    name: "useTypewriter Hook",
    img: "/images/projects/usetypewriter.jpg",
    description:
      `Fast, minimal, and customizable React hook to allow developers to easily add a "typewriter-like" animation to their app. Supports customization, while having useful defaults, of typing speed, delay, and a blinking cursor. Works for both client-side rendered and server-side-rendered React apps by supporting ESM and CommonJS via JS environment detection. Receives 40-100 downloads a week. Users can add functions for further applications.`,
    role: "2020 — Design & web development",
    frameworks: "React.js, Next.js, TypeScript, CSS",
    gitRepo: "https://github.com/alissanguyen/react-use-typewriter",
    website: "https://usetypewriter.com/",
    npm: "https://www.npmjs.com/package/use-typewriter-hook",
    bgLight: "linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 75% )",
    bgDark:
      "linear-gradient(120deg, #41D8DD, #5583EE)"
  },
  {
    name: "Portfolio & Blog",
    description: "Personal website hosting technical writing. Published articles on continuous integration, contributing to open source, and React fundamentals. Authored a widely circulated article on creating a performant scroll indicator in React and Typescript. Wrote a 1,500 word article on contributing to open source as a beginner that has received >10,000 impressions.",
    role: "2020-2024 — Design & web development",
    frameworks: "Remix, TypeScript, Contentful",
    gitRepo: "",
    website: "https://www.alissanguyen.com",
    bgLight: "linear-gradient(120deg, #fde882, #f78fad)",
    bgDark:
      "linear-gradient(120deg, #f6d365 0%, #fda085 31%, #e3613b 95%)"
  },
  {
    name: "Planets",
    img: "/images/projects/planets.jpg",
    description:
      "A responsive landing page to learn about commonly known planets in the universe. Features CSS animations and page-switching.",
    role: "2020 — Web development",
    gitRepo: "https://github.com/alissanguyen/planets",
    frameworks: "Javascript, HTML, CSS & styled-components",
    website: "https://planets.alissanguyen.com/",
    bgLight: "linear-gradient(120deg, #fbc2eb, #a6c1ee)",
    bgDark: "linear-gradient(120deg, #deb0df 11.2%, #a16bfe)"
  },
  {
    name: "Memory Game",
    description: "A memory game with multiplayer feature. Players can be in group of 1-4 people. Offer icon or number themes and grid of 4x4 or 6x6.",
    gitRepo: "https://github.com/alissanguyen/memory-game",
    frameworks: "Javascript, HTML, CSS",
    role: "2020 — Web development",
    website: "https://memory.alissanguyen.com/",
    bgLight: "linear-gradient(120deg, #e1ff9c, #99e5a2)",
    bgDark: "linear-gradient(120deg, #c7eb59 11.2%, #6de195)"
  },
];

export const otherProjects = [
  {
    iconSrc: LaunchCountdownIcon,
    name: "Launch Countdown",
    description: "A demo launch countdown page with animations.",
    gitRepo: "https://github.com/alissanguyen/launch-countdown",
    website: "https://launch.alissanguyen.com/"
  },
  {
    iconSrc: ClipboardIcon,
    name: "Clipboard Page",
    description: "Responsive landing page for a tool called Clipboard with animations and transitions.",
    gitRepo: "https://github.com/alissanguyen/clipboard-page",
    website: "https://clipboard.alissanguyen.com/",
  },
  {
    iconSrc: GitHubSpotterIcon,
    name: "GitHub Spotter 2.0",
    description: "A website designed to search GitHub users by usernames with GitHub API.",
    gitRepo: "https://github.com/alissanguyen/github-spotter-2",
    website: "https://githubspotter2.alissanguyen.com/"
  },
  {
    iconSrc: AtomIcon,
    name: "Atom",
    description: "A responsive website with animations and futuristic design.",
    gitRepo: "https://github.com/alissanguyen/atom",
    website: "https://atom.alissanguyen.com/",
  },
  {
    iconSrc: CalculatorIcon,
    name: "Calculator App",
    description: "A responsive calculator app with mobile-first design and custom theme widget.",
    gitRepo: "https://github.com/alissanguyen/calculator-app",
    website: "https://calculator.alissanguyen.com/",
  },
  {
    iconSrc: InvoiceAppIcon,
    name: "Invoice App Demo",
    description: "A demo UI for invoices management.",
    gitRepo: "https://github.com/alissanguyen/invoice-app-demo",
    website: "https://invoices.alissanguyen.com/"
  },
  {
    iconSrc: LoLIcon,
    name: "League of Legends",
    description: "A demo landing page for League of Legends with animations.",
    gitRepo: "https://github.com/alissanguyen/league-demo",
    website: "https://league.alissanguyen.com/",
  },
  {
    iconSrc: PomodoroIcon,
    name: "Pomodoro Timer App",
    description: "A pomodoro inspired timer with mobile-first design.",
    gitRepo: "https://github.com/alissanguyen/pomodoro-app",
    website: "https://pomodoro.alissanguyen.com/"
  },
  {
    iconSrc: WeatherlyIcon,
    name: "Weatherly",
    description: "A 5-day weather website that includes forecast for every 3 hours.",
    gitRepo: "https://github.com/alissanguyen/weatherly",
    website: "https://weatherly.alissanguyen.com/"
  }
];

const facts = [
  {
    index: 1,
    title: "I love cats and I have two :)",
    description:
      "Rosie (girl) and Felix (boy) are my love and energy to work hard everyday.",
    background: "/images/facts/cat.jpg"
  },
  {
    index: 2,
    title: `I once applied to Harvard`,
    description: "Yeah.. It's a long story...but basically I got deferred haha",
    background: "/images/facts/harvard.jpg"
  },
  {
    index: 3,
    title: "I am not afraid of snakes or spiders",
    description: "They are everywhere in Vietnam so that's why I adapted.",
    background: "/images/facts/snake.jpg"
  },
  {
    index: 4,
    title: "I am a very ambitious person",
    description:
      "When I was 10 I thought I can be the president of Europe XD. ",
    background: "/images/facts/ambitious.jpg"
  },
  {
    index: 5,
    title: "My favorite subject was Math",
    description:
      "I love it in high school. I guess it's the asian trait in me.",
    background: "/images/facts/math.jpg"
  },
  {
    index: 6,
    title: "I unbelievably love mayonnaise!",
    description:
      "I can eat mayo with pretty much everything (except desserts LOL).",
    background: "/images/facts/mayonnaise.jpg"
  },
  {
    index: 7,
    title: "I play 3 musical instruments",
    description:
      "I used to play ukulele, piano, and organ, now I only play ukulele.",
    background: "/images/facts/piano.jpg"
  },
  {
    index: 8,
    title: "I really like dad jokes but I suck at them",
    description: "Unfortunately these jokes only work if you git them.",
    background: "/images/facts/dad-joke.jpg"
  }
];

export const funFacts = [
  {
    index: 1,
    title: "I love cats and I have two :)",
    description:
      "Rosie (girl) and Felix (boy) are my love and energy to work hard everyday.",
    image: "/images/facts/cat.jpg",
    color: "sky",
    imgDescription: "Pic of cat"
  },
  {
    index: 2,
    title: `I once applied to Harvard`,
    description: "Yeah.. It's a long story...but basically I got deferred haha",
    image: "/images/facts/harvard.jpg",
    color: "blue",
    imgDescription: "Pic of Harvard"
  },
  {
    index: 3,
    title: "I am not afraid of snakes or spiders",
    description: "They are everywhere in Vietnam so that's why I adapted.",
    image: "/images/facts/snake.jpg",
    color: "indigo",
    imgDescription: "Pic of snake"
  },
  {
    index: 4,
    title: "I am a very ambitious person",
    description:
      "When I was 10 I thought I can be the president of Europe XD. ",
    image: "/images/facts/ambitious.jpg",
    color: "violet",
    imgDescription: "Illustration"
  },
  {
    index: 5,
    title: "My favorite subject was Math",
    description:
      "I love it in high school. I guess it's the asian trait in me.",
    image: "/images/facts/math.jpg",
    color: "purple",
    imgDescription: "Pic of math on chalkboard"
  },
  {
    index: 6,
    title: "I unbelievably love mayonnaise!",
    description:
      "I can eat mayo with pretty much everything (except desserts LOL).",
    image: "/images/facts/mayonnaise.jpg",
    color: "fuchsia",
    imgDescription: "Pic of mayonnaise"
  },
  {
    index: 7,
    title: "I play 3 musical instruments",
    description:
      "I used to play ukulele, piano, and organ, now I only play ukulele.",
    image: "/images/facts/piano.jpg",
    color: "pink",
    imgDescription: "Pic of piano"
  },
  {
    index: 8,
    title: "I really like dad jokes but I suck at them",
    description: "Unfortunately these jokes only work if you git them.",
    image: "/images/facts/dad-joke.jpg",
    color: "rose",
    imgDescription: "Pic of a dad (not my dad)"
  }
];


export const NAVBAR_ID = "Navbar";

