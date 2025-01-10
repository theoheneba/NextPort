export const siteConfig = {
  name: "John Doe",
  title: "Full Stack Developer",
  description: "Building beautiful and functional web experiences with modern technologies",
  email: "hello@example.com",
  phone: "+1 (555) 123-4567",
  location: "San Francisco, CA",
  github: "https://github.com",
  linkedin: "https://linkedin.com",
  twitter: "https://twitter.com",
  heroImage: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&q=80",
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "#contact", label: "Contact" },
];

export const skills = [
  { 
    name: "Frontend Development",
    level: 90,
    category: "Development",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"]
  },
  { 
    name: "Backend Development",
    level: 85,
    category: "Development",
    technologies: ["Node.js", "Python", "PostgreSQL", "Redis"]
  },
  { 
    name: "UI/UX Design",
    level: 80,
    category: "Design",
    technologies: ["Figma", "Adobe XD", "Sketch"]
  },
  { 
    name: "DevOps",
    level: 75,
    category: "Operations",
    technologies: ["Docker", "AWS", "CI/CD", "Kubernetes"]
  },
];

export const experience = [
  {
    role: "Senior Full Stack Developer",
    company: "Tech Solutions Inc",
    location: "San Francisco, CA",
    period: "2022 - Present",
    achievements: [
      "Led development of microservices architecture serving 1M+ users",
      "Improved system performance by 40% through optimization",
      "Mentored team of 5 junior developers and implemented best practices",
      "Architected and deployed cloud-native applications on AWS"
    ],
    technologies: ["React", "Node.js", "AWS", "TypeScript", "PostgreSQL"]
  },
  {
    role: "Full Stack Developer",
    company: "Digital Innovations",
    location: "New York, NY",
    period: "2020 - 2022",
    achievements: [
      "Built scalable web applications using modern technologies",
      "Implemented CI/CD pipelines reducing deployment time by 60%",
      "Developed RESTful APIs serving 500k+ daily requests",
      "Led migration from monolith to microservices architecture"
    ],
    technologies: ["Vue.js", "Python", "Docker", "MongoDB", "Redis"]
  },
  {
    role: "Frontend Developer",
    company: "Creative Web Agency",
    location: "Boston, MA",
    period: "2018 - 2020",
    achievements: [
      "Developed responsive web interfaces for 20+ client projects",
      "Optimized website performance improving load times by 50%",
      "Collaborated with design team to implement pixel-perfect designs",
      "Integrated third-party APIs and payment gateways"
    ],
    technologies: ["React", "JavaScript", "SASS", "WordPress", "GraphQL"]
  },
];

// Rest of the content remains the same...