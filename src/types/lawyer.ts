import type { SEOData } from "./common";

export interface LawyerEducation {
  institution: string;
  degree: string;
  year: number;
}

export interface Lawyer {
  id: string;
  slug: string;
  fullName: string;
  position: string;
  portrait: string;
  office: string;
  email: string;
  phone: string;
  linkedin?: string;
  languages: string[];
  biography: string;
  practiceAreas: string[];
  industries: string[];
  education: LawyerEducation[];
  qualifications: string[];
  memberships: string[];
  representativeMatters: string[];
  articleSlugs: string[];
  seo: SEOData;
}
