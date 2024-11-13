import React from 'react';
import { BarChart2, TrendingUp, Users, Clock } from 'lucide-react';

export default function ServiceAnalytics() {
  const metrics = [
    {
      title: "Service Efficiency",
      value: "92%",
      change: "+5%",
      icon: <BarChart2 className="w-5 h-5 text-blue-600" />
    },
    {
      title: "Response Time",
      value: "2.5m",
      change: "-12%",
      icon: <Clock className="w-5 h-5 text-blue-600" />
    },
    {
      title: "Active Users",
      value: "15.2k",
      change: "+8%",
      icon: <Users className="w-5 h-5 text-blue-600" />
    },
    {
      title: "Cost Savings",
      value: "35%",
      change: "+15%",
      icon: <TrendingUp className="w-5 h-5 text-blue-600" />
    }
  ];

  const services = [
    {
      name: "Smart Traffic Management",
      efficiency: 95,
      usage: "High",
      trend: "Increasing"
    },
    {
      name: "Waste Collection",
      efficiency: 88,
      usage: "Medium",
      trend: "Stable"
    },
    {
      name: "Citizen Portal",
      efficiency: 92,
      usage: "High",
      trend: "Increasing"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Service Analytics</h1>
          <p className="mt-1 text-sm text-gray-500">
            Monitor and analyze service performance metrics
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-lg font-medium text-gray-900 mb-4">Service Usage Trends</h2>
            <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg">
              <TrendingUp className="w-12 h-12 text-gray-400" />
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-lg font-medium text-gray-900 mb-4">Efficiency Analysis</h2>
            <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg">
              <BarChart2 className="w-12 h-12 text-gray-400" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="p-6">
            <h2 className="text-lg font-medium text-gray-900 mb-4">Service Performance</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead>
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Service
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Efficiency
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Usage
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Trend
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {services.map((service, index) => (
                    <tr key={index}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {service.name}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="w-full bg-gray-200 rounded-full h-2 mr-2">
                            <div
                              className="bg-blue-600 h-2 rounded-full"
                              style={{ width: `${service.efficiency}%` }}
                            ></div>
                          </div>
                          <span className="text-sm text-gray-600">{service.efficiency}%</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          service.usage === 'High'
                            ? 'bg-green-100 text-green-800'
                            : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {service.usage}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {service.trend}
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