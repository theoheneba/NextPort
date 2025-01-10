export interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
  category: string;
  github?: string;
  demo?: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  location?: string;
  achievements: string[];
  technologies?: string[];
}

export interface Testimonial {
  content: string;
  name: string;
  role: string;
  avatar: string;
  company?: string;
}

export interface BlogPost {
  title: string;
  excerpt: string;
  date: string;
  image: string;
  tags: string[];
  slug: string;
  author?: {
    name: string;
    avatar: string;
  };
}

export interface Skill {
  name: string;
  level: number;
  icon?: string;
  category?: string;
}

export interface Achievement {
  title: string;
  description: string;
  date: string;
  icon?: string;
}