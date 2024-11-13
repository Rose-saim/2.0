import React from 'react';
import { Building2, BookOpen, Settings, LineChart } from 'lucide-react';
import BusinessQuickActions from './BusinessQuickActions';

export default function BusinessDashboard() {
  const stats = [
    {
      title: "Training Progress",
      value: "75%",
      icon: <BookOpen className="w-5 h-5 text-blue-600" />,
      description: "3 of 4 modules completed"
    },
    {
      title: "AI Tools Active",
      value: "5",
      icon: <Settings className="w-5 h-5 text-blue-600" />,
      description: "Out of 8 available"
    },
    {
      title: "Team Members",
      value: "12",
      icon: <Building2 className="w-5 h-5 text-blue-600" />,
      description: "Active users"
    },
    {
      title: "Implementation Score",
      value: "85",
      icon: <LineChart className="w-5 h-5 text-blue-600" />,
      description: "Out of 100"
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
        <BusinessQuickActions />
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h2 className="text-lg font-medium text-gray-900 mb-4">Recent Activity</h2>
        <div className="space-y-4">
          {[
            {
              action: "Completed AI Training Module",
              time: "2 hours ago",
              icon: <BookOpen className="w-5 h-5 text-blue-600" />
            },
            {
              action: "Added Team Member",
              time: "1 day ago",
              icon: <Building2 className="w-5 h-5 text-blue-600" />
            },
            {
              action: "Updated AI Tools",
              time: "2 days ago",
              icon: <Settings className="w-5 h-5 text-blue-600" />
            }
          ].map((activity, index) => (
            <div key={index} className="flex items-center space-x-4">
              <div className="bg-blue-50 p-2 rounded-lg">
                {activity.icon}
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900">{activity.action}</p>
                <p className="text-sm text-gray-500">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}