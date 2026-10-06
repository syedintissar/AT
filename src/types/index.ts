export interface ServiceItem {
  id: string;
  number: string;
  name: string;
  shortDesc: string;
  fullDesc: string;
  category: 'Engineering' | 'Design & UX' | 'Growth & Marketing' | 'Cloud & Security';
  icon: string;
  deliverables: string[];
  gradient: string;
  glowColor: string;
}

export interface TechCategory {
  name: string;
  description: string;
  iconName: string;
  technologies: {
    name: string;
    icon?: string;
    badge?: string;
  }[];
}

export interface NavItem {
  label: string;
  href: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  tagline: string;
  icon: string;
}
