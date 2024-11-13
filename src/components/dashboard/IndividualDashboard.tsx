import React from 'react';
import { BookOpen, Award, Target, Users } from 'lucide-react';
import IndividualQuickActions from './IndividualQuickActions';

export default function IndividualDashboard() {
  const stats = [
    {
      title: "Course Progress",
      value: "60%",
      icon: <BookOpen className="w-5 h-5 text-blue-600" />,
      description: "Module 3 of 5"
    },
    {
      title: "Practice Projects",
      value: "4",
      icon: <Target className="w-5 h-5 text-blue-600" />,
      description: "Completed projects"
    },
    {
      title: "Learning Hours",
      value: "28",
      icon: <Users className="w-5 h-5 text-blue-600" />,
      description: "This month"
    },
    {
      title: "Certifications",
      value: "2",
      icon: <Award className="w-5 h-5 text-blue-600" />,
      description: "Earned certificates"
    }
  ];

  const courses = [
    {
      title: "AI Fundamentals",
      progress: 75,
      lastAccessed: "2 days ago"
    },
    {
      title: "Machine Learning Basics",
      progress: 45,
      lastAccessed: "1 week ago"
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
        <IndividualQuickActions />
      </div>

      {/* Current Courses */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h2 className="text-lg font-medium text-gray-900 mb-4">Current Courses</h2>
        <div className="space-y-4">
          {courses.map((course, index) => (
            <div key={index} className="border rounded-lg p-4">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-medium">{course.title}</h3>
                <span className="text-sm text-gray-500">Last accessed: {course.lastAccessed}</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-blue-600 h-2 rounded-full"
                  style={{ width: `${course.progress}%` }}
                ></div>
              </div>
              <div className="mt-2 text-right">
                <span className="text-sm text-gray-600">{course.progress}% complete</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}