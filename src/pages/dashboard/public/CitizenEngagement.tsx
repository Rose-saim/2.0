import React from 'react';
import { Users, MessageSquare, BarChart2, ThumbsUp } from 'lucide-react';

export default function CitizenEngagement() {
  const metrics = [
    {
      title: "Active Users",
      value: "12.4k",
      change: "+15%",
      icon: <Users className="w-5 h-5 text-blue-600" />
    },
    {
      title: "Feedback Received",
      value: "842",
      change: "+8%",
      icon: <MessageSquare className="w-5 h-5 text-blue-600" />
    },
    {
      title: "Satisfaction Rate",
      value: "92%",
      change: "+5%",
      icon: <ThumbsUp className="w-5 h-5 text-blue-600" />
    },
    {
      title: "Response Rate",
      value: "95%",
      change: "+3%",
      icon: <BarChart2 className="w-5 h-5 text-blue-600" />
    }
  ];

  const feedback = [
    {
      id: 1,
      service: "Waste Collection",
      feedback: "The new AI-powered collection schedule is much more efficient",
      sentiment: "Positive",
      date: "2024-02-15"
    },
    {
      id: 2,
      service: "Traffic Management",
      feedback: "Smart traffic lights have reduced my commute time significantly",
      sentiment: "Positive",
      date: "2024-02-14"
    },
    {
      id: 3,
      service: "Citizen Portal",
      feedback: "Would like to see more services available online",
      sentiment: "Neutral",
      date: "2024-02-13"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Citizen Engagement</h1>
          <p className="mt-1 text-sm text-gray-500">
            Monitor citizen feedback and engagement metrics
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {metrics.map((metric, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-medium text-gray-500">{metric.title}</h3>
                {metric.icon}
              </div>
              <div className="flex items-baseline">
                <p className="text-2xl font-semibold text-gray-900">{metric.value}</p>
                <p className="ml-2 text-sm font-medium text-green-600">{metric.change}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="p-6">
            <h2 className="text-lg font-medium text-gray-900 mb-4">Recent Feedback</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead>
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Service
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Feedback
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Sentiment
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Date
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {feedback.map((item) => (
                    <tr key={item.id}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {item.service}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        {item.feedback}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          item.sentiment === 'Positive'
                            ? 'bg-green-100 text-green-800'
                            : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {item.sentiment}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {item.date}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}