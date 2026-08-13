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

export type ToolGroup = {
  label: string;
  items: readonly string[];
};

export type SiteSection = {
  id: string;
  label: string;
  hint: string;
};

export const site = {
  name: "Batuhan Baybaş",
  shortName: "BB",
  role: "Developer Experience",
  headline: ["I build tools", "that remove", "friction."],
  lede: "Headless libraries and platforms that shorten the path from idea to production.",
  about: [
    "Four years in React and TypeScript — shipping both the enterprise systems behind the company and the products people actually open.",
    "I work the layer other engineers feel: frontend architecture, reusable component systems, performance, and the last mile to production. That same instinct now goes into developer tools — so the stack stays quiet and the work stays visible.",
  ],
  aboutSignals: [
    { value: "04", label: "Years shipping production frontend" },
    { value: "React · TS", label: "The stack I think in" },
    { value: "Systems", label: "Architecture, components, performance" },
  ],
  location: "Türkiye",
  metadata: {
    title: "Batuhan Baybaş — Developer Experience",
    description:
      "Batuhan Baybaş builds developer tools, headless libraries, and platforms that remove friction from shipping software.",
  },
  links: {
    email: "b.baybas@gmail.com",
    github: "https://github.com/batuhanbaybas",
    linkedin: "https://www.linkedin.com/in/batuhan-baybas",
  },
  sections: [
    {
      id: "about",
      label: "Profile",
      hint: "Four years behind the work",
    },
    {
      id: "tools",
      label: "Tools",
      hint: "The stack I work with",
    },
    {
      id: "work",
      label: "Work",
      hint: "Selected projects",
    },
    {
      id: "open-source",
      label: "Open source",
      hint: "Libraries and community",
    },
  ] satisfies SiteSection[],
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
  tools: [
    {
      label: "Frontend",
      items: ["React", "Next.js", "TanStack Start", "TypeScript", "JavaScript"],
    },
    {
      label: "Backend",
      items: [
        "Node.js",
        "Express.js",
        "NestJS",
        "Prisma",
        "PostgreSQL",
        "MongoDB",
      ],
    },
    {
      label: "Data & APIs",
      items: ["TanStack Query", "REST APIs"],
    },
    {
      label: "State",
      items: ["Redux Toolkit", "Zustand", "Context API"],
    },
    {
      label: "UI",
      items: ["Tailwind CSS", "shadcn/ui", "Radix UI", "Ant Design"],
    },
    {
      label: "Infrastructure",
      items: ["Docker", "Cloudflare", "Git"],
    },
  ] satisfies ToolGroup[],
} as const;
