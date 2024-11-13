import { LucideIcon } from 'lucide-react';

export type AccountType = 'B2B' | 'B2C' | 'B2G';

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
  createdAt: string;
  updatedAt: string;
}

export interface StoredUser extends User {
  passwordHash: string;
}

export interface Session {
  id: string;
  userId: string;
  token: string;
  expiresAt: string;
  createdAt: string;
}

export interface RegisterFormData {
  accountType: AccountType;
  email: string;
  password: string;
  fullName?: string;
  companyName?: string;
  organizationName?: string;
  industry?: string;
  fieldOfInterest?: string;
  role?: string;
  department?: string;
}

export interface LoginFormData {
  email: string;
  password: string;
  isAdmin?: boolean;
}

export interface AuthContextType {
  user: User | null;
  register: (data: RegisterFormData) => Promise<void>;
  login: (data: LoginFormData) => Promise<void>;
  logout: () => void;
  signIn: (provider: 'google' | 'github') => Promise<void>;
  isLoading: boolean;
  error: Error | null;
}

export interface AuthInputProps {
  type: string;
  name: string;
  placeholder: string;
  icon: LucideIcon;
  required?: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
}

export interface AuthSelectProps {
  name: string;
  label: string;
  icon: LucideIcon;
  options: string[];
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  error?: string;
}