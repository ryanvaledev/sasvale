/**
 * Core Content Model Contracts
 *
 * Designed to be tool-neutral. Supports local structured datasets, Markdown/MDX,
 * or headless CMS backends without refactoring component contracts.
 */

export interface ServiceItem {
  slug: string;
  title: string;
  tagline: string;
  summary: string;
  features: string[];
  deliverables?: string[];
  serviceType: string;
  category: "engineering" | "design" | "growth" | "ai";
}

export interface CaseStudyItem {
  slug: string;
  title: string;
  client: string;
  industry: string;
  summary: string;
  challenge?: string;
  solution?: string;
  results?: string[];
  technologies?: string[];
  liveUrl?: string;
}

export interface IndustrySolutionItem {
  slug: string;
  title: string;
  industry: string;
  headline: string;
  overview: string;
  keyProblemsSolved: string[];
  tailoredSolutions: string[];
}

export interface AuthorItem {
  name: string;
  role: string;
  bio: string;
  avatar?: string;
}

export interface InsightArticleItem {
  slug: string;
  title: string;
  excerpt: string;
  publishedAt: string;
  updatedAt?: string;
  category: string;
  author: AuthorItem;
  readingTimeMinutes?: number;
  content?: string;
}
