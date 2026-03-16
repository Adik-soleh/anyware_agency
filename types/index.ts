export interface Service {
  slug: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  features: string[];
  tools: string[];
}

export interface PortfolioItem {
  slug: string;
  title: string;
  category: 'web' | 'mobile' | 'design';
  description: string;
  image: string;
  tags: string[];
  challenge: string;
  solution: string;
  results: { label: string; value: string }[];
  gallery: string[];
}

export interface TeamMember {
  name: string;
  role: string;
  image?: string;
  socials: {
    instagram?: string;
    linkedin?: string;
    github?: string;
  };
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
}

export interface NavItem {
  label: string;
  href: string;
}
