import React from 'react';
import { FileText, Download, Filter, Calendar } from 'lucide-react';

export default function ServiceReports() {
  const reports = [
    {
      id: 1,
      title: "Monthly Service Performance Report",
      type: "Performance",
      date: "Feb 2024",
      status: "Ready"
    },
    {
      id: 2,
      title: "Citizen Satisfaction Survey Results",
      type: "Survey",
      date: "Feb 2024",
      status: "Ready"
    },
    {
      id: 3,
      title: "Resource Utilization Analysis",
      type: "Analysis",
      date: "Feb 2024",
      status: "Processing"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Service Reports</h1>
            <p className="mt-1 text-sm text-gray-500">
              View and download service performance reports
            </p>
          </div>
          <div className="flex space-x-4">
            <button className="flex items-center px-4 py-2 border rounded-lg hover:bg-gray-50">
              <Filter className="w-5 h-5 mr-2" />
              Filter
            </button>
            <button className="flex items-center px-4 py-2 border rounded-lg hover:bg-gray-50">
              <Calendar className="w-5 h-5 mr-2" />
              Date Range
            </button>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="p-6">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead>
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Report
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Type
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Date
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {reports.map((report) => (
                    <tr key={report.id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <FileText className="w-5 h-5 text-blue-600 mr-3" />
                          <div className="text-sm font-medium text-gray-900">
                            {report.title}
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="text-sm text-gray-500">{report.type}</span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="text-sm text-gray-500">{report.date}</span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          report.status === 'Ready'
                            ? 'bg-green-100 text-green-800'
                            : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {report.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <button className="text-blue-600 hover:text-blue-900 mr-4">
                          View
                        </button>
                        <button className="text-blue-600 hover:text-blue-900">
                          <Download className="w-5 h-5" />
                        </button>
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