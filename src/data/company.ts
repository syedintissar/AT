import { NavItem, ProcessStep, TechCategory, WhyUsItem } from "@/types";

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Our work", href: "/work" },
  { label: "About us", href: "/about" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
];

export const COMPANY_STATS = [
  {
    value: 12,
    suffix: "+",
    label: "Digital Services",
    description: "End-to-end expertise spanning engineering, design & cloud",
    accent: "red",
  },
  {
    value: 100,
    suffix: "%",
    label: "Client Focus",
    description: "Dedicated agile squads prioritizing your strategic vision",
    accent: "navy",
  },
  {
    value: 99.9,
    suffix: "%",
    label: "Scalable Solutions",
    description: "Fault-tolerant architecture built for enterprise scale",
    accent: "red",
  },
  {
    value: 24,
    suffix: "/7",
    label: "End-to-End Technology",
    description: "Continuous innovation, delivery, and round-the-clock support",
    accent: "navy",
  },
];

export const ABOUT_PILLARS = [
  {
    title: "Digital Transformation",
    desc: "Modernizing legacy environments into agile digital operations.",
    icon: "Cpu",
    tag: "Core",
  },
  {
    title: "Software Development",
    desc: "Robust, scalable, enterprise-grade web & mobile applications.",
    icon: "Code2",
    tag: "Engineering",
  },
  {
    title: "Cloud Solutions",
    desc: "Resilient multi-cloud architectures with auto-scaling security.",
    icon: "Cloud",
    tag: "Infra",
  },
  {
    title: "Security",
    desc: "Zero-trust defenses, proactive audits, and continuous compliance.",
    icon: "Shield",
    tag: "Protection",
  },
  {
    title: "Design",
    desc: "Intuitive user experiences and striking, memorable visual identities.",
    icon: "Palette",
    tag: "Creative",
  },
  {
    title: "Marketing",
    desc: "Data-driven acquisition, conversion optimization, and brand growth.",
    icon: "TrendingUp",
    tag: "Growth",
  },
  {
    title: "Technical Support",
    desc: "Proactive 24/7 monitoring, rapid triage, and SLA-backed maintenance.",
    icon: "Headphones",
    tag: "Operations",
  },
];

export const WHY_US_ITEMS: WhyUsItem[] = [
  {
    title: "Innovation First",
    description: "We anticipate emerging industry paradigms, leveraging modern architectures and AI-ready systems to give your business an unfair advantage.",
    icon: "Sparkles",
    stat: "Future-Ready",
    statLabel: "Frameworks & Standards",
  },
  {
    title: "Scalable Solutions",
    description: "Our microservices and cloud infrastructures are engineered to gracefully scale from thousand to millions of concurrent users without friction.",
    icon: "Layers",
    stat: "10x",
    statLabel: "Capacity Resilience",
  },
  {
    title: "Security Focused",
    description: "Security is never an afterthought. We implement multi-layered encryption, zero-trust access, and OWASP compliance from day zero.",
    icon: "Lock",
    stat: "Zero-Trust",
    statLabel: "Continuous Auditing",
  },
  {
    title: "Client-Centric Approach",
    description: "We operate as an extension of your leadership team. Transparent sprints, real-time Slack/Teams collaboration, and clear measurable ROI.",
    icon: "Users",
    stat: "100%",
    statLabel: "Dedicated Alignment",
  },
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

export const CONTACT_INFO = {
  email: "contact@alhawajtech.com",
  phone: "+1 (800) 555-TECH",
  address: "Tech Boulevard, Silicon Quarter, Suite 400",
  hours: "Monday – Friday: 9:00 AM – 6:00 PM EST",
  support: "24/7 Emergency Support Available",
};
