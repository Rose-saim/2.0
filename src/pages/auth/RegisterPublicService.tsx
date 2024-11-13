import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Briefcase, Mail, Lock, Chrome } from 'lucide-react';
import { useAuthContext } from '../../lib/auth';
import AuthCard from '../../components/auth/AuthCard';
import AuthInput from '../../components/auth/AuthInput';
import AuthSelect from '../../components/auth/AuthSelect';
import AuthButton from '../../components/auth/AuthButton';
import AuthFooter from '../../components/auth/AuthFooter';
import SocialAuth from '../../components/auth/SocialAuth';

const departments = [
  'Municipal Services',
  'Employment Programs',
  'Policy Advisory',
  'Public Works',
  'Community Services',
  'Other'
];

const roles = [
  'City Manager',
  'Policy Advisor',
  'Program Coordinator',
  'Department Head',
  'Project Manager',
  'Other'
];

export default function RegisterPublicService() {
  const navigate = useNavigate();
  const { register } = useAuthContext();
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    accountType: 'B2G' as const,
    organizationName: '',
    email: '',
    role: '',
    department: '',
    password: '',
    confirmPassword: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    try {
      await register(formData);
      navigate('/dashboard');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Registration failed');
    }
  };

  const handleGoogleSignup = async () => {
    try {
      // Handle Google signup
      navigate('/dashboard');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to sign up with Google');
    }
  };

  return (
    <AuthCard
      title="Create Your Public Service Account"
      subtitle="Get started with AI solutions for public services"
      icon={<Briefcase className="w-8 h-8" />}
    >
      {error && (
        <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-100 text-sm">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <AuthInput
          type="text"
          name="organizationName"
          placeholder="Organization Name"
          icon={Briefcase}
          value={formData.organizationName}
          onChange={(e) => setFormData(prev => ({ ...prev, organizationName: e.target.value }))}
        />

        <AuthInput
          type="email"
          name="email"
          placeholder="Official Email"
          icon={Mail}
          value={formData.email}
          onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
        />

        <AuthSelect
          name="role"
          label="Select Role"
          icon={Briefcase}
          options={roles}
          value={formData.role}
          onChange={(e) => setFormData(prev => ({ ...prev, role: e.target.value }))}
        />

        <AuthSelect
          name="department"
          label="Select Department"
          icon={Briefcase}
          options={departments}
          value={formData.department}
          onChange={(e) => setFormData(prev => ({ ...prev, department: e.target.value }))}
        />

        <AuthInput
          type="password"
          name="password"
          placeholder="Password"
          icon={Lock}
          value={formData.password}
          onChange={(e) => setFormData(prev => ({ ...prev, password: e.target.value }))}
        />

        <AuthInput
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          icon={Lock}
          value={formData.confirmPassword}
          onChange={(e) => setFormData(prev => ({ ...prev, confirmPassword: e.target.value }))}
        />

        <AuthButton>Create Public Service Account</AuthButton>
      </form>

      <div className="mt-6">
        <SocialAuth onGoogleSignIn={handleGoogleSignup} />
      </div>

      <AuthFooter
        text="Already have an account?"
        linkText="Log In"
        linkTo="/login"
      />
    </AuthCard>
  );
}