export type Project = {
  slug: string;
  title: string;
  category: "Web platforms" | "Commerce" | "Mobile apps";
  discipline: string;
  description: string;
  variant: "finance" | "commerce" | "mobile";
  year: string;
  overview: string;
  challenge: string;
  approach: string[];
  features: string[];
  stack: string[];
};

export const PROJECTS: Project[] = [
  {
    slug: "clarity-finance",
    title: "Clarity",
    category: "Web platforms",
    discipline: "Product strategy · UI/UX · Web platform",
    description: "A little more clarity. A lot more control over your finances.",
    variant: "finance",
    year: "Studio concept",
    overview: "Clarity is a studio exploration of a calmer financial workspace for small teams. It brings balances, transactions, and spending into one considered interface, with clear hierarchy and room to focus.",
    challenge: "Financial tools often make simple questions difficult to answer. This concept explores how a dashboard can help a business owner understand where money is going without decoding a wall of charts.",
    approach: [
      "Start with the questions people actually ask: what is available, what changed, and what needs attention? Give each question a distinct place in the interface.",
      "Use restrained color and a consistent card system to separate day-to-day activity from high-level trends. Let numbers and labels do the work.",
      "Design the mobile view around a few important actions, while keeping deeper analysis available on larger screens.",
    ],
    features: ["At-a-glance account overview", "Readable transaction history", "Spending category breakdown", "Responsive dashboard system"],
    stack: ["Next.js", "React", "TypeScript", "Design system"],
  },
  {
    slug: "forma-commerce",
    title: "Forma",
    category: "Commerce",
    discipline: "Brand experience · E-commerce · Development",
    description: "A thoughtful digital home for everyday objects.",
    variant: "commerce",
    year: "Studio concept",
    overview: "Forma is an independent concept for a home and lifestyle storefront. An editorial layout, warm colors, and generous space give everyday objects the attention they deserve.",
    challenge: "A store should communicate the character of its products while making it easy to shop. This exploration balances an expressive brand experience with direct navigation, useful product information, and a clear path to checkout.",
    approach: [
      "Build the browsing experience around product collections and everyday use, so visitors can discover an object through context as well as category.",
      "Keep product information close to the buying decision. Materials, dimensions, care, and delivery information deserve the same attention as the imagery.",
      "Use a small, consistent set of components so a growing catalog can keep the same visual rhythm across collection and product pages.",
    ],
    features: ["Editorial collection pages", "Clear product detail structure", "Accessible shopping interactions", "Mobile-first storefront"],
    stack: ["Next.js", "React", "Commerce architecture", "UI/UX design"],
  },
  {
    slug: "bloom-wellbeing",
    title: "Bloom",
    category: "Mobile apps",
    discipline: "Product discovery · App design · Prototyping",
    description: "Small moments of calm, designed for real life.",
    variant: "mobile",
    year: "Studio concept",
    overview: "Bloom is a mobile product concept for personal reflection and everyday routines. Its welcoming interface explores how a digital experience can invite a pause instead of demanding more attention.",
    challenge: "Habit products can turn a helpful routine into another source of pressure. We explored a gentler experience that favors personal choice, simple check-ins, and progress without comparison.",
    approach: [
      "Reduce the first session to one useful action: choose how you feel, then pick a small activity that fits your day.",
      "Create a warm visual language with rounded forms, comfortable type, and a limited palette. Keep motion slow, optional, and supportive of the interaction.",
      "Make reflection private by design. A production version would require explicit data controls and a clear retention policy before collecting personal entries.",
    ],
    features: ["Simple daily check-ins", "Flexible personal routines", "Guided reflection prompts", "Calm, accessible interaction design"],
    stack: ["Mobile UX", "Interactive prototyping", "Design system", "Product strategy"],
  },
];
