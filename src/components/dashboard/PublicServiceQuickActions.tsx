import React from 'react';
import { Building2, Users, FileText, BarChart2 } from 'lucide-react';
import QuickAction from './QuickAction';

export default function PublicServiceQuickActions() {
  const actions = [
    {
      icon: Building2,
      title: 'Service Management',
      description: 'Manage municipal services',
      link: '/dashboard/services'
    },
    {
      icon: Users,
      title: 'Citizen Engagement',
      description: 'Monitor citizen interactions',
      link: '/dashboard/engagement'
    },
    {
      icon: FileText,
      title: 'Reports',
      description: 'Generate service reports',
      link: '/dashboard/reports'
    },
    {
      icon: BarChart2,
      title: 'Analytics',
      description: 'View service metrics',
      link: '/dashboard/analytics'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {actions.map((action, index) => (
        <QuickAction key={index} {...action} />
      ))}
    </div>
  );
}