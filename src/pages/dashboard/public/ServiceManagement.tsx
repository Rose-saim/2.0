import React from 'react';
import { Building2, Settings, AlertCircle, Check } from 'lucide-react';

export default function ServiceManagement() {
  const services = [
    {
      name: "Smart Traffic Management",
      status: "Active",
      performance: 92,
      lastUpdated: "1 hour ago",
      issues: 0
    },
    {
      name: "Waste Collection Optimization",
      status: "Maintenance",
      performance: 78,
      lastUpdated: "3 hours ago",
      issues: 2
    },
    {
      name: "Citizen Service Portal",
      status: "Active",
      performance: 95,
      lastUpdated: "30 minutes ago",
      issues: 0
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Service Management</h1>
          <p className="mt-1 text-sm text-gray-500">
            Monitor and manage municipal services
          </p>
        </div>

        <div className="grid gap-6">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <Building2 className="w-6 h-6 text-blue-600 mr-3" />
                    <div>
                      <h2 className="text-xl font-semibold">{service.name}</h2>
                      <p className="text-sm text-gray-500">Last updated {service.lastUpdated}</p>
                    </div>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    service.status === 'Active'
                      ? 'bg-green-100 text-green-800'
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {service.status}
                  </span>
                </div>

                <div className="mb-6">
                  <div className="flex justify-between text-sm text-gray-600 mb-1">
                    <span>Performance</span>
                    <span>{service.performance}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full ${
                        service.performance >= 90 ? 'bg-green-600' :
                        service.performance >= 70 ? 'bg-yellow-600' :
                        'bg-red-600'
                      }`}
                      style={{ width: `${service.performance}%` }}
                    ></div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="flex items-center">
                      {service.issues === 0 ? (
                        <Check className="w-5 h-5 text-green-500 mr-2" />
                      ) : (
                        <AlertCircle className="w-5 h-5 text-yellow-500 mr-2" />
                      )}
                      <div>
                        <p className="text-sm font-medium">Active Issues</p>
                        <p className="text-sm text-gray-600">{service.issues} issues</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="flex items-center">
                      <Settings className="w-5 h-5 text-blue-500 mr-2" />
                      <div>
                        <p className="text-sm font-medium">System Status</p>
                        <p className="text-sm text-gray-600">{service.status}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between">
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                    Manage Service
                  </button>
                  <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition">
                    View Analytics
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}