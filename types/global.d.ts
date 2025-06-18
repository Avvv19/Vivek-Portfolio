// Global type definitions for Vivek's Portfolio

declare global {
  interface Window {
    webkitSpeechRecognition: any;
    SpeechRecognition: any;
  }
}

// Project types
export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  achievements: string[];
  metrics: { label: string; value: string }[];
  imageUrl?: string;
  githubUrl?: string;
  liveUrl?: string;
  category: 'ai-ml' | 'healthcare' | 'web-dev' | 'research';
  featured: boolean;
  status: 'completed' | 'in-progress' | 'planned';
  startDate: string;
  endDate?: string;
  collaborators?: string[];
  tags: string[];
}

// Experience types
export interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  type: 'full-time' | 'part-time' | 'contract' | 'internship';
  startDate: string;
  endDate?: string;
  current: boolean;
  description: string;
  achievements: string[];
  technologies: string[];
  metrics?: { label: string; value: string }[];
}

// Education types
export interface Education {
  id: string;
  degree: string;
  field: string;
  institution: string;
  location: string;
  startDate: string;
  endDate: string;
  gpa?: string;
  honors?: string[];
  relevantCoursework?: string[];
  thesis?: string;
}

// Certification types
export interface Certification {
  id: string;
  name: string;
  issuer: string;
  issueDate: string;
  expiryDate?: string;
  credentialId?: string;
  verificationUrl?: string;
  skills: string[];
}

// Skill types
export interface Skill {
  name: string;
  level: number;
  category: 'programming' | 'ai-ml' | 'data' | 'cloud' | 'tools' | 'soft-skills';
  yearsOfExperience: number;
  projectsUsed: number;
  certified?: boolean;
}

// Chat types
export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
  metadata?: {
    model?: string;
    tokens?: number;
    responseTime?: number;
  };
}

export interface ChatSession {
  id: string;
  messages: ChatMessage[];
  createdAt: Date;
  updatedAt: Date;
  title?: string;
}

// Voice Assistant types
export interface VoiceSettings {
  voice: 'alloy' | 'echo' | 'fable' | 'onyx' | 'nova' | 'shimmer';
  speed: number;
  language: 'en-US' | 'en-IN';
}

export interface VoiceSession {
  id: string;
  isActive: boolean;
  isListening: boolean;
  isSpeaking: boolean;
  settings: VoiceSettings;
}

// API Response types
export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
  timestamp: string;
}

// Theme types
export interface Theme {
  mode: 'light' | 'dark' | 'system';
  primaryColor: string;
  accentColor: string;
  backgroundColor: string;
  textColor: string;
}

// Contact types
export interface ContactInfo {
  email: string;
  phone?: string;
  linkedin: string;
  github: string;
  location: string;
  timezone: string;
  availability: 'available' | 'busy' | 'away';
}

// Analytics types
export interface PageView {
  page: string;
  timestamp: Date;
  userAgent: string;
  referrer?: string;
  sessionId: string;
}

export interface InteractionEvent {
  type: 'click' | 'scroll' | 'hover' | 'form_submit' | 'chat_message' | 'voice_command';
  element?: string;
  data?: any;
  timestamp: Date;
  sessionId: string;
}

// Portfolio Content types
export interface PortfolioSection {
  id: string;
  title: string;
  subtitle?: string;
  content: string;
  order: number;
  visible: boolean;
  lastUpdated: Date;
}

// SEO types
export interface SEOData {
  title: string;
  description: string;
  keywords: string[];
  ogImage?: string;
  ogTitle?: string;
  ogDescription?: string;
  twitterCard: 'summary' | 'summary_large_image';
  canonicalUrl?: string;
}

// Performance types
export interface PerformanceMetrics {
  pageLoadTime: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  cumulativeLayoutShift: number;
  firstInputDelay: number;
  timestamp: Date;
}

// Error types
export interface ErrorLog {
  id: string;
  type: 'javascript' | 'api' | 'network' | 'validation';
  message: string;
  stack?: string;
  timestamp: Date;
  userId?: string;
  page: string;
  userAgent: string;
  resolved: boolean;
}

// Navigation types
export interface NavigationItem {
  label: string;
  href: string;
  icon?: string;
  external?: boolean;
  children?: NavigationItem[];
}

// Component Props types
export interface BaseComponentProps {
  className?: string;
  children?: React.ReactNode;
  id?: string;
}

export interface AnimatedComponentProps extends BaseComponentProps {
  delay?: number;
  duration?: number;
  animation?: 'fade' | 'slide' | 'scale' | 'rotate';
}

// Utility types
export type Nullable<T> = T | null;
export type Optional<T> = T | undefined;
export type DeepPartial<T> = {
  [P in keyof T]?: DeepPartial<T[P]>;
};

// Constants
export const SITE_CONFIG = {
  name: 'Vivek Varma',
  title: 'AI Engineer & Data Scientist | Vivek Varma',
  description: 'Transforming healthcare through AI and data science. Experienced in machine learning, NLP, and cloud technologies.',
  url: 'https://venktatavivekvarma.careers',
  keywords: [
    'AI Engineer',
    'Data Scientist',
    'Machine Learning',
    'Healthcare AI',
    'NLP',
    'Python',
    'Cloud Computing',
    'Vivek Varma'
  ],
  author: {
    name: 'Vivek Varma',
    email: 'contact@venktatavivekvarma.careers',
    social: {
      linkedin: 'https://linkedin.com/in/vivek-varma',
      github: 'https://github.com/VivekVarma',
      twitter: 'https://twitter.com/VivekVarma'
    }
  }
} as const;

export {};