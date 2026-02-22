export interface Profile {
  name: string;
  role: string;
  institution: string;
  headline: string;
  about: string;
}

export interface ExperienceItem {
  title: string;
  organization: string;
  period: string;
  bullets: string[];
}

export interface StudyItem {
  degree: string;
  school: string;
  years: string;
  details: string;
  note: string;
}

export interface PublicationItem {
  venue: string;
  title: string;
  authors: string;
  link: string;
}

export interface ContactInfo {
  email: string;
  location: string;
  intro: string;
}

export interface MaterialItem {
  title: string;
  href: string;
}

export interface MaterialSection {
  section: string;
  items: MaterialItem[];
}
