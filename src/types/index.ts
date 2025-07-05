// Core types for the portfolio application

export interface Project {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  category: 'professional' | 'personal';
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  imageUrl: string;
  images: string[];
  featured: boolean;
  status: 'completed' | 'in-progress' | 'planned';
  startDate: string;
  endDate?: string;
  highlights: string[];
  challenges: string[];
  solutions: string[];
  impact: string[];
  architecture?: {
    description: string;
    diagram?: string;
    components: string[];
  };
  codeSnippets?: {
    title: string;
    language: string;
    code: string;
    description: string;
  }[];
}

export interface WorkExperience {
  id: string;
  company: string;
  position: string;
  startDate: string;
  endDate?: string;
  description: string;
  achievements: string[];
  technologies: string[];
  type: 'professional' | 'freelance' | 'personal';
}

export interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'mobile' | 'database' | 'tools' | 'other';
  level: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  icon?: string;
  yearsOfExperience?: number;
}

export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface SEOData {
  title: string;
  description: string;
  keywords: string[];
  ogImage?: string;
}
