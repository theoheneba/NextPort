export interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
  category: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  achievements: string[];
}

export interface Testimonial {
  content: string;
  name: string;
  role: string;
  avatar: string;
}

export interface BlogPost {
  title: string;
  excerpt: string;
  date: string;
  image: string;
  tags: string[];
  slug: string;
}