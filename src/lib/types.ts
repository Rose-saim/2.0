// Add to existing types
export type AccountType = 'B2B' | 'B2C' | 'B2G' | 'expert' | 'admin';

export interface User {
  id: string;
  email: string;
  accountType: AccountType;
  isAdmin?: boolean;
  fullName?: string;
  companyName?: string;
  orgName?: string;
  industry?: string;
  fieldOfInterest?: string;
  role?: string;
  department?: string;
  expertise?: string[];
  yearsOfExperience?: number;
  certifications?: string[];
  createdAt: string;
  updatedAt: string;
}