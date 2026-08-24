export type WorkItem = {
  name: string;
  year: string;
  kind: string;
  description: string;
  stack: readonly string[];
  href?: string;
  repo?: string;
  npm?: string;
};

export type SiteSection = {
  id: string;
  label: string;
  hint: string;
};

export type Service = {
  title: string;
  description: string;
};

export type ContactChannel = {
  label: string;
  value: string;
  href: string;
  external?: boolean;
};

export const site = {
  name: "Batuhan Baybaş",
  shortName: "BB",
  role: "Independent software engineer",
  headline: ["I build tools", "that remove", "friction."],
  lede: "Product frontend, architecture, and the last mile to production — independently.",
  about: [
    "Four years in React and TypeScript — shipping both the enterprise systems behind the company and the products people actually open.",
    "I work the layer other engineers feel: frontend architecture, reusable component systems, performance, and the last mile to production. That work is independent — with teams who need it shipped, not just specified.",
  ],
  aboutSignals: [
    { value: "04", label: "Years shipping production frontend" },
    { value: "React · TS", label: "The stack I think in" },
    { value: "Systems", label: "Architecture, components, performance" },
  ],
  location: "Türkiye",
  metadata: {
    title: "Batuhan Baybaş — Independent Software Engineer",
    description:
      "Independent software engineer. Product frontend, architecture, and developer tools.",
  },
  links: {
    email: "b.baybas@gmail.com",
    mailHref: "mailto:b.baybas@gmail.com?subject=Project%20inquiry",
    github: "https://github.com/batuhanbaybas",
    linkedin: "https://www.linkedin.com/in/batuhan-baybas",
  },
  cta: {
    primary: { label: "Start a project", href: "#contact" },
    secondary: { label: "View work", href: "#work" },
  },
  sections: [
    {
      id: "about",
      label: "Profile",
      hint: "Four years behind the work",
    },
    {
      id: "services",
      label: "Services",
      hint: "What I take on",
    },
    {
      id: "work",
      label: "Work",
      hint: "Selected projects",
    },
    {
      id: "contact",
      label: "Contact",
      hint: "Start a project",
    },
  ] satisfies SiteSection[],
  services: [
    {
      title: "Product frontend",
      description:
        "React and Next.js products that need to ship. Architecture, interface, performance, and the last mile to production.",
    },
    {
      title: "Product engineering",
      description:
        "The full path when the interface is not enough: APIs, data, auth, admin — one person who can own the slice.",
    },
    {
      title: "Developer tools",
      description:
        "Headless libraries and internal platforms that shorten the path from idea to production. The same instinct as the open source.",
    },
  ] satisfies Service[],
  contact: {
    heading: "Have a product, a frontend that needs structure, or a tool that should exist?",
    note: "Email is the fastest way in.",
  },
  projects: [
    {
      name: "Setuverse",
      year: "2026",
      kind: "Product",
      description:
        "A social platform for developers and creators to share, discover, and rate workspace setups. Auth, moderation, equipment tagging, and an admin surface — designed, built, and shipped end to end.",
      stack: ["Next.js", "Better Auth", "Cloudflare R2"],
      href: "https://setuverse.space",
      repo: "https://github.com/batuhanbaybas/setuverse",
    },
  ] satisfies WorkItem[],
  openSource: [
    {
      name: "pip-toaster",
      year: "2026",
      kind: "Library",
      description:
        "Toast notifications delivered by a character. Pip pulls the card in from the nearest edge, parks it, then pushes it out. No framework, Shadow DOM, weight from the copy.",
      stack: ["TypeScript", "Shadow DOM"],
      href: "https://batuhanbaybas.github.io/pip-toaster/",
      repo: "https://github.com/batuhanbaybas/pip-toaster",
      npm: "https://www.npmjs.com/package/pip-toaster",
    },
    {
      name: "react-upload-kit",
      year: "2026",
      kind: "Library",
      description:
        "Headless, adapter-based file upload for React. Drag and drop, validation, concurrency, retry, and cancellation — you own the UI. Zero dependencies, strict TypeScript.",
      stack: ["React", "TypeScript"],
      repo: "https://github.com/batuhanbaybas/react-upload-kit",
      npm: "https://www.npmjs.com/package/react-upload-kit",
    },
    {
      name: "Türkçe Odin Project",
      year: "2021",
      kind: "Community",
      description:
        "Collective translation of The Odin Project curriculum into Turkish — a canonical web development path, in the language people actually think in.",
      stack: ["Education", "Open source"],
      repo: "https://github.com/batuhanbaybas/turkce-odin-project",
    },
  ] satisfies WorkItem[],
} as const;

export const contactChannels: readonly ContactChannel[] = [
  {
    label: "Email",
    value: site.links.email,
    href: site.links.mailHref,
  },
  {
    label: "LinkedIn",
    value: "batuhan-baybas",
    href: site.links.linkedin,
    external: true,
  },
  {
    label: "GitHub",
    value: "batuhanbaybas",
    href: site.links.github,
    external: true,
  },
];
