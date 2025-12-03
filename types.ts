import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  href: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Stat {
  label: string;
  value: string;
}

export interface TeamMember {
  name: string;
  role: string;
  imageUrl: string;
}