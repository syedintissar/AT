import { NavItem, ProcessStep, TechCategory } from "@/types";

export const SITE = {
  name: "Alhawaij Tech",
  url: "https://www.alhawaijtech.com",
  tagline: "Good ideas. Great software.",
  description:
    "Alhawaij Tech is a digital product studio for web platforms, mobile apps, UI/UX, cloud, and cybersecurity. We help businesses design, build, and scale software people enjoy using.",
};

export const NAV_ITEMS: NavItem[] = [
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
];

export const PRINCIPLES = [
  { icon: "Users", title: "People before pixels.", description: "We start with the people behind the business and the people using the product. Their needs give the work direction." },
  { icon: "MessagesSquare", title: "Clarity at every step.", description: "Good collaboration needs honest conversations, understandable decisions, and a shared view of what comes next." },
  { icon: "ScanLine", title: "Care in the details.", description: "From the first interaction to the underlying architecture, we make thoughtful choices that add up to a better experience." },
  { icon: "Sprout", title: "Build beyond launch.", description: "A launch is a beginning. We consider maintainability, security, and the room your business needs to grow." },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: "01",
    title: "Discover",
    tagline: "Uncover Vision & Constraints",
    description: "Understand the business, goals and challenges through rigorous stakeholder interviews, architectural discovery, and market research.",
    icon: "Compass",
  },
  {
    number: "02",
    title: "Strategize",
    tagline: "Architect The Roadmap",
    description: "Create the right technology and design strategy with sprint milestones, system blueprints, and precise scope definitions.",
    icon: "Workflow",
  },
  {
    number: "03",
    title: "Build",
    tagline: "Agile Engineering & QA",
    description: "Develop, test and refine the solution using iterative sprints, automated unit/integration suites, and continuous code reviews.",
    icon: "Code",
  },
  {
    number: "04",
    title: "Launch",
    tagline: "Seamless Deployment",
    description: "Deploy the product and bring the idea to life with zero-downtime cutovers, load testing, and enterprise launch runbooks.",
    icon: "Rocket",
  },
  {
    number: "05",
    title: "Grow",
    tagline: "Continuous Optimization",
    description: "Optimize, support and scale for long-term success with performance telemetry, security patching, and strategic roadmap enhancements.",
    icon: "TrendingUp",
  },
];

export const TECH_CATEGORIES: TechCategory[] = [
  {
    name: "Frontend",
    description: "High-performance reactive user interfaces",
    iconName: "Monitor",
    technologies: [
      { name: "Next.js", badge: "App Router" },
      { name: "React", badge: "v19" },
      { name: "TypeScript", badge: "Strict" },
      { name: "Tailwind CSS", badge: "v4" },
      { name: "Vue.js", badge: "Modern" },
      { name: "WebGL / Three.js", badge: "3D Motion" },
    ],
  },
  {
    name: "Backend",
    description: "Distributed microservices & high-throughput APIs",
    iconName: "Server",
    technologies: [
      { name: "Node.js", badge: "Event-Driven" },
      { name: "Go (Golang)", badge: "Ultra Fast" },
      { name: "Python", badge: "AI / FastAPI" },
      { name: "Java / Spring", badge: "Enterprise" },
      { name: "GraphQL", badge: "Apollo" },
      { name: "REST APIs", badge: "OpenAPI 3" },
    ],
  },
  {
    name: "Cloud",
    description: "Resilient, global cloud infrastructure",
    iconName: "Cloud",
    technologies: [
      { name: "AWS", badge: "Well-Architected" },
      { name: "Google Cloud", badge: "BigQuery / AI" },
      { name: "Microsoft Azure", badge: "Enterprise" },
      { name: "Cloudflare", badge: "Edge / Workers" },
      { name: "Terraform", badge: "IaC" },
    ],
  },
  {
    name: "DevOps",
    description: "Automated pipelines & cluster orchestration",
    iconName: "GitBranch",
    technologies: [
      { name: "Docker", badge: "Containers" },
      { name: "Kubernetes", badge: "Orchestration" },
      { name: "GitHub Actions", badge: "CI/CD" },
      { name: "ArgoCD", badge: "GitOps" },
      { name: "Prometheus", badge: "Telemetry" },
    ],
  },
  {
    name: "Mobile",
    description: "Fluid cross-platform and native ecosystems",
    iconName: "Smartphone",
    technologies: [
      { name: "React Native", badge: "Cross-Platform" },
      { name: "Flutter", badge: "Dart Engine" },
      { name: "Swift / iOS", badge: "Native" },
      { name: "Kotlin / Android", badge: "Native" },
    ],
  },
  {
    name: "Database",
    description: "ACID compliance & high-scale distributed storage",
    iconName: "Database",
    technologies: [
      { name: "PostgreSQL", badge: "Relational" },
      { name: "MongoDB", badge: "Document" },
      { name: "Redis", badge: "In-Memory / Cache" },
      { name: "Supabase", badge: "Postgres Realtime" },
      { name: "ClickHouse", badge: "OLAP Analytics" },
    ],
  },
  {
    name: "Cybersecurity",
    description: "Multi-layered defense & proactive vulnerability control",
    iconName: "ShieldAlert",
    technologies: [
      { name: "Zero Trust", badge: "Identity-First" },
      { name: "OWASP Top 10", badge: "Hardened" },
      { name: "OAuth 2.0 / OIDC", badge: "Auth" },
      { name: "Penetration Testing", badge: "Automated" },
      { name: "End-to-End TLS", badge: "Encrypted" },
    ],
  },
  {
    name: "Analytics",
    description: "Deep business intelligence & real-time telemetry",
    iconName: "BarChart3",
    technologies: [
      { name: "Google Analytics 4", badge: "Tracking" },
      { name: "Mixpanel", badge: "Product Insights" },
      { name: "Datadog", badge: "APM Monitoring" },
      { name: "BigQuery", badge: "Data Warehousing" },
    ],
  },
];

// Contact details as published on www.alhawaijtech.com.
export const CONTACT_INFO = {
  email: "alhawaijtech@gmail.com",
  phones: [
    { label: "USA", display: "+1 (850) 680-3968", href: "tel:+18506803968" },
    { label: "Pakistan", display: "+92 312 505 9507", href: "tel:+923125059507" },
  ],
  offices: [
    { label: "United States", lines: ["7901 4th Street North #25245", "St. Petersburg, FL 33702, USA"], street: "7901 4th Street North #25245", locality: "St. Petersburg", region: "FL", postalCode: "33702", country: "US" },
    { label: "Pakistan", lines: ["F 7/4 Frash Town Phase 2", "Islamabad, Pakistan"], street: "F 7/4 Frash Town Phase 2", locality: "Islamabad", country: "PK" },
  ],
  socials: [
    { label: "LinkedIn", href: "https://www.linkedin.com/company/alhawaijtech" },
    { label: "Instagram", href: "https://www.instagram.com/alhawaijtech" },
    { label: "Pinterest", href: "https://www.pinterest.com/alhawaijtech" },
  ],
};
