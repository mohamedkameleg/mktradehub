import { LucideIcon } from 'lucide-react';

export type PageType = 'home' | 'about' | 'services' | 'stats' | 'contact';

export interface ServiceItem {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface StatItem {
  id: number;
  label: string;
  value: string;
  suffix?: string;
}

export interface NavLink {
  id: string; // Changed from name to id for logic
  name: string;
  href: string;
  type: 'page' | 'section'; // To distinguish between separate pages and sections
}

export interface ContactInfo {
  address: string;
  phone: string;
  email: string;
  workingHours: string;
}