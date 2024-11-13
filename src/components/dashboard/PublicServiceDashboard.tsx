import React from 'react';
import { Building2, Users, FileText, BarChart2 } from 'lucide-react';
import PublicServiceQuickActions from './PublicServiceQuickActions';

export default function PublicServiceDashboard() {
  const stats = [
    {
      title: "Active Services",
      value: "8",
      icon: <Building2 className="w-5 h-5 text-blue-600" />,
      description: "Municipal services optimized"
    },
    {
      title: "Citizen Engagement",
      value: "92%",
      icon: <Users className="w-5 h-5 text-blue-600" />,
      description: "Satisfaction rate"
    },
    {
      title: "Reports Generated",
      value: "24",
      icon: <FileText className="w-5 h-5 text-blue-600" />,
      description: "This month"
    },
    {
      title: "Resource Optimization",
      value: "35%",
      icon: <BarChart2 className="w-5 h-5 text-blue-600" />,
      description: "Cost reduction"
    }
  ];

  const projects = [
    {
      name: "Smart Traffic Management",
      progress: 75,
      status: "On Track"
    },
    {
      name: "Waste Collection Optimization",
      progress: 45,
      status: "In Progress"
    },
    {
      name: "Citizen Service Portal",
      progress: 90,
      status: "Near Completion"
    }
  ];

  return (
    <div>
      {/* Stats Grid */}
      <div className="grid md:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-medium text-gray-500">{stat.title}</h3>
              {stat.icon}
            </div>
            <p className="text-2xl font-bold">{stat.value}</p>
            <p className="text-sm text-gray-600">{stat.description}</p>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
        <h2 className="text-lg font-medium text-gray-900 mb-4">Quick Actions</h2>
        <PublicServiceQuickActions />
      </div>

      {/* Active Projects */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h2 className="text-lg font-medium text-gray-900 mb-4">Active Projects</h2>
        <div className="space-y-4">
          {projects.map((project, index) => (
            <div key={index} className="border rounded-lg p-4">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-medium">{project.name}</h3>
                <span className={`px-2 py-1 text-sm rounded-full ${
                  project.status === 'On Track' ? 'bg-green-100 text-green-800' :
                  project.status === 'In Progress' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-blue-100 text-blue-800'
                }`}>
                  {project.status}
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-blue-600 h-2 rounded-full"
                  style={{ width: `${project.progress}%` }}
                ></div>
              </div>
              <div className="mt-2 text-right">
                <span className="text-sm text-gray-600">{project.progress}% complete</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}