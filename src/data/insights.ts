export type Insight = {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  readTime: string;
  accent: "lilac" | "peach" | "sage";
  sections: { heading: string; paragraphs: string[]; items?: string[] }[];
};

export const INSIGHTS: Insight[] = [
  {
    slug: "from-idea-to-first-release",
    category: "Product thinking",
    title: "A better product starts before the first line of code.",
    excerpt: "How to turn an ambitious idea into a focused first release, without losing sight of the bigger picture.",
    readTime: "4 min read",
    accent: "lilac",
    sections: [
      {
        heading: "Start with a situation, not a feature list",
        paragraphs: ["An idea usually arrives as a collection of features: a dashboard, an app, notifications, perhaps an integration. Before estimating those features, describe the situation you want to improve. Who is trying to do something? What are they doing today? Where does that process become frustrating?", "A useful problem statement is specific enough to observe. ‘Make operations more efficient’ leaves too much room for interpretation. ‘Help a coordinator assign incoming requests without copying information between three tools’ gives the team a person, a task, and a clear starting point."],
      },
      {
        heading: "Define the smallest complete journey",
        paragraphs: ["A first release needs to be narrow, but it still needs to finish a job. A collection of half-built features is less useful than one dependable journey from start to finish. Map what happens before someone opens the product, the decisions they make inside it, and what a successful finish looks like.", "For a booking product, that journey might be finding availability, reserving a slot, and receiving confirmation. Rescheduling, advanced reporting, and loyalty rewards can belong to later releases. The right boundary depends on the user need, not on a universal checklist."],
        items: ["Name the primary user and the one job the first release must complete.", "Write down the decisions, inputs, and possible failure states in that journey.", "Separate essential steps from conveniences that can be tested later."],
      },
      {
        heading: "Test the riskiest assumption early",
        paragraphs: ["Not every unknown deserves the same attention. A polished screen will not help if an essential integration cannot provide the required information. Equally, a technically elegant service can fail if people do not understand the workflow.", "List the assumptions that could change the project most. Then choose the cheapest useful way to test each one. A short conversation may clarify the need. A clickable prototype can expose a confusing interaction. A small technical investigation can check whether an integration supports the intended workflow. Record what you learned, including what remains uncertain."],
      },
      {
        heading: "Agree on what ready means",
        paragraphs: ["Before development, describe acceptance in terms of behavior. What should happen when a required field is missing? What if the connection drops? Who can view or change a record? Concrete examples help design, engineering, and the project owner make the same decisions.", "Include the less visible work in your release plan: content, accessibility checks, error handling, deployment, monitoring, and a way to report problems. These are part of making the journey dependable."],
      },
      {
        heading: "Plan to learn after launch",
        paragraphs: ["Choose a small set of signals that relate to the original problem. For an internal request tool, these could include time to assign a request, the number of manual corrections, and feedback from the coordinators using it. Decide how you will gather those signals before launch.", "The first release is an informed starting point. Give the team a short review cycle, a way to hear from users, and room to change the next step. A good plan makes priorities visible while staying open to better evidence."],
      },
    ],
  },
  {
    slug: "design-systems-that-grow-with-you",
    category: "Design & experience",
    title: "Design systems should make the next decision easier.",
    excerpt: "A practical approach to consistency: start with real patterns, document their purpose, and give the system room to grow.",
    readTime: "4 min read",
    accent: "peach",
    sections: [
      {
        heading: "A shared way of making decisions",
        paragraphs: ["A design system is useful when it helps a team answer recurring questions. Which action should stand out? How should an error appear? How much space belongs between related elements? A component library captures part of the answer, but the reasoning behind a component matters just as much.", "Start by looking at real screens and workflows. Find the decisions your team repeats, the patterns that already work, and the inconsistencies that cause confusion. That audit gives you a smaller, more relevant foundation than trying to design every possible component at once."],
      },
      {
        heading: "Build a small, dependable foundation",
        paragraphs: ["Agree on typography, spacing, color roles, and a few common interaction patterns. Define color by purpose, such as primary text, subtle surface, or destructive action, so its meaning survives a visual refresh. A named role is easier to apply consistently than a collection of disconnected color values.", "Choose a few components that appear frequently and affect important tasks. Buttons, form controls, navigation, and feedback messages are often useful starting points. Make their behavior dependable before expanding the library."],
        items: ["Define a small spacing and typography scale.", "Document the purpose of color roles and interaction states.", "Include loading, empty, disabled, success, and error states where relevant.", "Check keyboard use, focus visibility, labels, and comfortable reading contrast."],
      },
      {
        heading: "Document when to use a pattern",
        paragraphs: ["A component page should explain more than its properties. Show the problem it solves, the situations it fits, and the choices a designer or engineer still needs to make. A realistic example can communicate those boundaries faster than a long list of variants.", "For example, a dialog pattern should explain what requires an interruption, where focus moves when the dialog opens, and how someone returns to the previous task. A notification pattern should distinguish information that can disappear from information a person needs time to act on."],
      },
      {
        heading: "Let exceptions teach you something",
        paragraphs: ["A new product need will eventually fall outside the system. Treat that as a design question. Is the need genuinely different? Is an existing component being stretched beyond its purpose? Or is the pattern common enough to deserve a shared solution?", "Avoid adding a new switch for every one-off case. A component with many unrelated options can become difficult to reason about. Sometimes a local composition is the clearer choice. When a pattern repeats across useful contexts, bring it into the system with examples and a deliberate API."],
      },
      {
        heading: "Make ownership part of the system",
        paragraphs: ["Decide who reviews a change and how teams learn about it. Even a small system needs a way to propose improvements, record decisions, and explain breaking changes. Keep design references and implemented components close enough that people can tell which version is current.", "Judge the system by everyday outcomes: can someone build the next screen with fewer open questions? Do users encounter familiar behavior? Can the team improve a shared pattern confidently? A useful system earns its place by making product work clearer."],
      },
    ],
  },
  {
    slug: "cloud-readiness-before-you-scale",
    category: "Engineering",
    title: "Before you scale, make your foundations visible.",
    excerpt: "The practical questions to ask about reliability, ownership, and cost before your next stage of growth.",
    readTime: "4 min read",
    accent: "sage",
    sections: [
      {
        heading: "Understand the system you have",
        paragraphs: ["Preparing for growth starts with a clear picture of your current product. List the services it depends on, the data it stores, the jobs it runs in the background, and the people responsible for keeping it available. Include third-party services: an email provider or payment integration can be as important to a user journey as your own application.", "Draw the path of one important request from the user to the database and back. Mark where it can become slow, where it can fail, and what the user experiences when it does. This often reveals more useful questions than a discussion about infrastructure size."],
      },
      {
        heading: "Measure a meaningful baseline",
        paragraphs: ["Before changing architecture, measure the work your system actually performs. Request volume alone can hide an expensive report, a slow database query, or a background queue that never catches up. Look at latency, errors, resource use, and the completion of important business operations together.", "Use realistic traffic patterns when investigating limits. A burst of sign-ins and a steady stream of small reads stress different parts of a product. Write down the conditions of any load test so the result has context. A number without a workload description is difficult to use."],
        items: ["Identify the user journeys that must remain dependable.", "Record typical demand and the peaks you already observe.", "Find operations that consume disproportionate time or resources.", "Agree on useful thresholds and who responds when they are crossed."],
      },
      {
        heading: "Make recovery an everyday capability",
        paragraphs: ["A backup is only part of a recovery plan. Know what it includes, how far back you can recover, and how long restoration may take. Practice restoration in an appropriate isolated environment, then record the steps and any dependencies that were easy to miss.", "Deployments need a similar level of care. Understand how you would stop a rollout or restore the previous version. Database changes deserve particular attention because reversing application code does not automatically reverse stored data. Prefer changes that can be introduced in small, understandable stages."],
      },
      {
        heading: "Make ownership and access explicit",
        paragraphs: ["Someone should own each production service, its alerts, and its operating instructions. Keep credentials out of application code, limit access to what each role needs, and review access when responsibilities change. The exact controls depend on the product, its data, and the environment in which it operates.", "Good operational notes are short enough to use under pressure. Explain what a service does, how to recognize common failures, where to find relevant logs, and who to contact. Review the notes after an incident or a significant architecture change."],
      },
      {
        heading: "Connect spending to useful work",
        paragraphs: ["Cloud cost becomes easier to discuss when it is connected to the activity the product supports. Depending on the service, that might be cost per active workspace, completed job, or stored asset. Begin with a simple breakdown and improve it as your understanding grows.", "Scale the part that evidence shows is constrained. A slow query may need better data access, not a bigger server. A long-running task may need a queue, not a new architecture. Clear measurements, practiced recovery, and named owners give your team a stronger basis for the next decision."],
      },
    ],
  },
];
