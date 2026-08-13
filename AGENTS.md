<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with the work keeps the tree clean.

<!-- END:nextjs-agent-rules -->


# Project Engineering Rules

## 1. Project Context

This is a personal developer portfolio and engineering website for Batuhan Baybaş.

The website is not intended to be a generic portfolio template.

It should communicate:

- Strong software engineering fundamentals
- Frontend expertise
- Backend awareness
- Developer tooling / DevEx interest
- Product engineering mindset
- Ability to design and build production-quality software
- Attention to performance, accessibility and UX

The website itself is part of the portfolio.

Every architectural and implementation decision should be treated as something that may be reviewed by another senior engineer.

Do not optimize only for "making the page work".

Prefer maintainable, understandable and scalable solutions.

---

## 2. Core Engineering Principles

Follow these principles throughout the project:

1. Keep the architecture simple, explicit and predictable.
2. Prefer composition over unnecessary abstraction.
3. Do not introduce abstractions before there is a real need for them.
4. Avoid premature optimization.
5. Avoid premature generalization.
6. Keep responsibilities separated.
7. Prefer small, focused modules.
8. Keep business/domain logic independent from UI concerns whenever practical.
9. Avoid duplicated logic.
10. Do not create "utils" files containing unrelated functions.
11. Do not create generic abstractions only to reduce a few lines of code.
12. Prefer readable code over clever code.
13. Prefer explicit data flow over hidden magic.
14. Favor type safety over runtime assumptions.
15. Fail explicitly rather than silently.
16. Do not hide architectural decisions inside framework-specific conventions unless there is a clear benefit.

When multiple solutions are possible, choose the simplest solution that preserves future extensibility.

---

## 3. Architecture

Use a feature-oriented architecture.

Do not organize the entire application only by technical type such as:

components/
hooks/
services/
utils/

Instead, group code around domain/features where appropriate.

Preferred structure:

src/
  app/
  components/
  features/
  lib/
  config/
  content/
  types/

Example:

features/
  projects/
    components/
    data/
    types/
    utils/

  blog/
    components/
    data/
    types/

  experience/
    components/
    data/

Global/shared code should only live outside a feature when it is genuinely shared.

Do not move something into a global directory simply because it is used by two components.

---

## 4. Next.js Architecture

Use the current Next.js architecture and conventions.

Before implementing framework-specific functionality, inspect the installed Next.js documentation under:

node_modules/next/dist/docs/

Do not rely on outdated Next.js knowledge.

Use the App Router.

Prefer Server Components by default.

Only use `"use client"` when client-side behavior is actually required.

Examples that may require Client Components:

- Browser APIs
- Interactive 3D
- Mouse/keyboard interactions
- Client-side state
- Animations requiring client runtime
- Event handlers
- WebGL / React Three Fiber

Do not mark an entire page or large component tree as `"use client"` just because one small component needs client-side behavior.

Keep interactive components isolated.

---

## 5. Server vs Client Boundaries

Default:

Server Component.

Use Client Components only at the smallest possible boundary.

Bad:

Page
  -> use client
  -> entire application becomes client-side

Preferred:

Page (Server Component)
  -> Content
  -> ProjectList
  -> Interactive3DScene ("use client")

The server should handle:

- Content loading
- Static data
- Metadata
- SEO
- Rendering whenever possible

The client should handle:

- Interaction
- Animation
- WebGL
- Browser APIs
- Local UI state

---

## 6. Data Architecture

This project does not need a database or CMS initially.

Prefer a content-as-code architecture.

Portfolio content should be version-controlled.

Possible sources:

- MDX for articles
- Typed TypeScript objects for structured project data
- Local static assets
- GitHub API only when dynamic external data is genuinely useful

Do not introduce:

- CMS
- Database
- Authentication
- Admin panel
- API layer

unless there is a concrete requirement.

Do not build infrastructure for hypothetical future requirements.

If content can be represented as static data, keep it static.

---

## 7. Content Architecture

Blog/articles should use MDX when rich content is required.

Example:

content/
  posts/
    building-developer-tools.mdx
    why-i-build.mdx

Structured portfolio information may use typed data:

content/
  projects.ts
  experience.ts
  skills.ts

Do not scatter personal information across React components.

Avoid:

<p>3+ years of experience...</p>

inside random UI components.

Prefer centralized structured content.

---

## 8. TypeScript Rules

Use strict TypeScript.

Avoid:

any

unless there is a documented and unavoidable reason.

Prefer:

unknown

when the runtime type is genuinely unknown.

Use explicit domain types.

Example:

type Project = {
  slug: string;
  title: string;
  description: string;
  technologies: string[];
  url?: string;
  githubUrl?: string;
};

Do not create unnecessary interfaces/types for trivial local values.

Do not duplicate types.

Keep domain types close to the domain they describe.

---

## 9. Component Architecture

Components should have one clear responsibility.

Avoid giant components such as:

PortfolioPage.tsx

containing the entire application.

Prefer:

components/
  layout/
  navigation/
  hero/
  projects/
  experience/
  writing/
  footer/

Feature-specific components should remain inside their feature when they are not globally reusable.

Do not create a component abstraction only because JSX is repeated once.

Create shared components when:

- The same behavior exists in multiple places
- The same visual component is genuinely reusable
- Centralizing it improves consistency
- The abstraction has a clear semantic meaning

---

## 10. Styling

Use Tailwind CSS for styling.

Prefer design tokens and semantic utility combinations over arbitrary one-off values.

Avoid excessive arbitrary values such as:

mt-[13px]
text-[17px]
left-[37px]

unless there is a deliberate visual reason.

Create a coherent visual system.

The design should be:

- Minimal
- Premium
- Technical
- Modern
- Editorial
- High contrast where appropriate
- Spacious
- Performance-conscious

Avoid generic AI-generated portfolio aesthetics.

Do not default to:

- Excessive gradients
- Excessive glassmorphism
- Random glowing borders
- Huge gradient text
- Generic SaaS dashboards
- Excessive rounded cards
- Decorative UI with no purpose

The visual identity should feel intentional.

---

## 11. 3D / WebGL

3D is an important part of the visual identity of this website.

Use 3D to differentiate the website from generic AI-generated portfolios.

However:

3D is a supporting visual language, not the purpose of the website.

Use React Three Fiber / Three.js where appropriate.

Important rules:

- Keep 3D isolated inside Client Components.
- Do not make the entire application client-side because of 3D.
- Avoid unnecessary 3D scenes.
- Prefer one or a few high-quality interactive elements.
- Optimize models and textures aggressively.
- Avoid unnecessarily large GLB/GLTF files.
- Lazy-load heavy 3D content where possible.
- Respect prefers-reduced-motion.
- Provide graceful fallbacks for unsupported or low-performance devices.
- Do not make essential information dependent on WebGL.

The 3D visual language should communicate:

- Developer tooling
- Systems
- Dependencies
- Networks
- Code
- Infrastructure
- Digital craftsmanship

Avoid using random 3D objects merely for decoration.

A 3D dependency graph, abstract developer environment, terminal-inspired object, or technical network visualization is preferred over generic floating shapes.

---

## 12. Performance

Performance is a first-class requirement.

Do not sacrifice Core Web Vitals for visual effects.

Prioritize:

- Server rendering
- Static generation where possible
- Small client bundles
- Image optimization
- Lazy loading
- Code splitting
- Minimal JavaScript
- Efficient animations
- Optimized 3D assets

Avoid unnecessary:

- useEffect
- useState
- client components
- third-party libraries
- animation libraries
- API requests

Before adding a dependency, ask:

"Can this be implemented cleanly without another dependency?"

If yes, prefer the simpler solution.

---

## 13. Animation

Animations should communicate hierarchy and interaction.

Do not animate everything.

Prefer:

- Subtle entrance animations
- Scroll-based transitions where useful
- Hover interactions
- Smooth navigation
- Meaningful 3D interactions

Avoid:

- Constant movement
- Excessive parallax
- Distracting particle systems
- Long loading animations
- Animation that delays content visibility

Animations must not interfere with reading or navigation.

Respect:

prefers-reduced-motion

---

## 14. Accessibility

Accessibility is mandatory.

Use semantic HTML.

Prefer:

button

over:

div with onClick

Use proper:

- Headings
- Landmarks
- Labels
- Alt text
- Keyboard navigation
- Focus states

Interactive 3D elements must not contain the only representation of important information.

The site must remain usable without:

- WebGL
- JavaScript-heavy interaction
- Mouse
- Animation

---

## 15. SEO

The website is a public professional identity.

SEO matters.

Every important page should have:

- Proper title
- Description
- Canonical URL when appropriate
- Open Graph metadata
- Twitter/X metadata
- Semantic headings

Use Next.js metadata APIs.

Do not hardcode metadata inside random components.

Use structured data when it provides real SEO value.

Potential structured data:

- Person
- WebSite
- Article
- SoftwareSourceCode
- CreativeWork

Do not add structured data merely for the sake of adding it.

---

## 16. Routing

Use semantic URLs.

Preferred:

/projects
/projects/setuverse
/writing
/writing/article-slug
/about
/contact

Avoid:

/page?id=123

unless there is a real technical reason.

URLs should be stable and readable.

---

## 17. External Services

Keep external integrations isolated.

For example:

lib/
  github/
    client.ts

Do not call external APIs directly from random UI components.

External services must have:

- Clear boundaries
- Typed responses
- Error handling
- Reasonable caching
- Minimal coupling

Do not introduce an external service unless it solves a real problem.

---

## 18. GitHub Integration

GitHub data may be used to strengthen the developer identity of the website.

Possible data:

- Repositories
- Stars
- Languages
- Contribution information

However, GitHub should not become a hard dependency for rendering the entire site.

If GitHub is unavailable, the website should still work.

Prefer caching or build-time/static fetching when possible.

---

## 19. Error Handling

Do not silently swallow errors.

Bad:

try {
  ...
} catch {
  return null;
}

unless the behavior is explicitly intentional.

Errors should be:

- Handled
- Logged where appropriate
- Represented in the UI when necessary
- Recoverable when possible

Do not expose sensitive implementation details to users.

---

## 20. Environment Variables

Never hardcode:

- API keys
- Secrets
- Tokens
- Private URLs
- Credentials

Use environment variables.

Public values must use the appropriate Next.js public environment variable convention.

Never expose server-only secrets to Client Components.

---

## 21. Dependency Policy

Keep dependencies minimal.

Before adding a package:

1. Check whether the functionality already exists.
2. Check whether the project already has a solution.
3. Consider whether a small local implementation is clearer.
4. Check bundle-size implications.
5. Check whether the package is actively maintained.

Do not add a dependency for trivial functionality.

---

## 22. Contact

The website must include a dedicated Contact section/page.

The primary purpose of the Contact section is to make it easy for:

- Recruiters
- Engineering managers
- Potential clients
- Freelance clients
- Developers
- Open-source collaborators

to contact Batuhan.

The Contact section should remain simple and professional.

Preferred contact methods:

- Email
- LinkedIn
- GitHub
- X

Do not require authentication to contact or reach out.

Do not introduce a database or backend solely for the Contact section.

A contact form is optional and should only be introduced if there is a clear benefit.

If a contact form is implemented:

- Keep it server-side where possible.
- Validate all user input.
- Never expose email service credentials to the client.
- Handle spam protection appropriately.
- Provide clear success and error states.
- Do not store contact submissions unless there is a concrete requirement.
- Keep the form accessible and keyboard-friendly.

The Contact section should not feel like a generic SaaS contact form.

Prefer a direct, personal and minimal experience.

Example information hierarchy:

Contact

"Have an interesting project, opportunity, or idea?"

Email
LinkedIn
GitHub
X

The contact experience should be consistent with the overall design language of the website.

---

## 23. Code Quality

Before considering a feature complete, verify:

- TypeScript passes
- Lint passes
- Build passes
- No unnecessary client components were introduced
- No unnecessary dependencies were added
- No duplicated logic was introduced
- Accessibility was considered
- Mobile behavior was considered
- Performance impact was considered
- SEO was considered where relevant

Do not declare a feature complete simply because it renders successfully.

---

## 24. Mobile

Mobile is a first-class experience.

Do not design desktop first and treat mobile as an afterthought.

The website should work well on:

- Mobile
- Tablet
- Laptop
- Large desktop

3D content must degrade gracefully on mobile.

Do not force expensive WebGL interactions on low-power devices.

---

## 25. Design Philosophy

The website should NOT look like a generic developer portfolio generated by AI.

Avoid blindly following common AI-generated patterns.

The design should feel:

- Personal
- Technical
- Confident
- Minimal
- Experimental
- Mature
- Engineering-oriented

The goal is not to demonstrate how many UI effects can be added.

The goal is to make the visitor remember:

"That developer has a distinct engineering identity."

---

## 26. Decision Making

When implementing a feature, think in this order:

1. Is the feature actually necessary?
2. What is the simplest architecture?
3. Can it remain server-side?
4. Does it require a new dependency?
5. Does it affect performance?
6. Does it affect accessibility?
7. Does it affect SEO?
8. Does it introduce unnecessary coupling?
9. Will another developer understand this six months later?

Do not over-engineer.

Do not under-engineer.

Choose the smallest architecture that solves the actual problem.

---

## 27. AI Coding Rules

The AI agent must not blindly generate code.

Before implementing a non-trivial feature:

1. Inspect the existing project structure.
2. Inspect related components.
3. Inspect existing patterns.
4. Reuse existing abstractions when appropriate.
5. Verify the installed framework APIs.
6. Check the relevant Next.js documentation when framework behavior is involved.
7. Explain significant architectural decisions before making major changes.

Do not rewrite working architecture without a concrete reason.

Do not introduce a new pattern if an existing project pattern already solves the problem.

Do not modify unrelated files.

Do not perform broad refactors while implementing a small feature.

Keep changes focused.

---

## 28. Architecture Changes

Major architectural changes require justification.

Examples:

- Adding a database
- Adding a CMS
- Introducing authentication
- Introducing a state management library
- Adding a backend API
- Replacing the routing architecture
- Introducing a new rendering strategy
- Adding a major animation/3D framework
- Moving large amounts of code between architectural layers

Before making such a change, explain:

- Why it is needed
- What problem it solves
- What alternatives were considered
- What complexity it introduces
- Why the complexity is justified

---

## 29. Golden Rule

The website is itself a demonstration of engineering quality.

Every implementation should answer three questions:

1. Does it work?
2. Is it maintainable?
3. Does it demonstrate good engineering judgment?

Prefer engineering judgment over unnecessary complexity.

Build something that looks distinctive on the surface,
but is boringly well-engineered underneath.