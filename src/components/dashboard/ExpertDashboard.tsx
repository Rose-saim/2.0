import React from 'react';
import { BookOpen, Users, Award, BarChart2 } from 'lucide-react';
import ExpertQuickActions from './ExpertQuickActions';

export default function ExpertDashboard() {
  const stats = [
    {
      title: "Active Courses",
      value: "4",
      icon: <BookOpen className="w-5 h-5 text-blue-600" />,
      description: "Currently teaching"
    },
    {
      title: "Total Students",
      value: "256",
      icon: <Users className="w-5 h-5 text-blue-600" />,
      description: "Across all courses"
    },
    {
      title: "Average Rating",
      value: "4.8",
      icon: <Award className="w-5 h-5 text-blue-600" />,
      description: "From 180 reviews"
    },
    {
      title: "Revenue",
      value: "$12.4k",
      icon: <BarChart2 className="w-5 h-5 text-blue-600" />,
      description: "This month"
    }
  ];

  const courses = [
    {
      title: "Advanced AI Implementation",
      students: 86,
      rating: 4.9,
      revenue: "$4,320"
    },
    {
      title: "Machine Learning Mastery",
      students: 64,
      rating: 4.7,
      revenue: "$3,180"
    },
    {
      title: "Neural Networks Deep Dive",
      students: 52,
      rating: 4.8,
      revenue: "$2,860"
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
        <ExpertQuickActions />
      </div>

      {/* Course Performance */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h2 className="text-lg font-medium text-gray-900 mb-4">Course Performance</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Course
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Students
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Rating
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Revenue
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {courses.map((course, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{course.title}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">{course.students}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">{course.rating}/5.0</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">{course.revenue}</div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}