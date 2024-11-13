import React from 'react';
import { Building2, BarChart2, Users2, Clock, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

const features = [
  {
    icon: <BarChart2 className="w-6 h-6" />,
    title: "Resource Optimization",
    description: "AI-powered analytics for data-driven resource management across municipal services."
  },
  {
    icon: <Users2 className="w-6 w-6" />,
    title: "Service Enhancement",
    description: "Smart automation systems to improve service delivery and citizen satisfaction."
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: "Operational Efficiency",
    description: "Streamlined processes that reduce costs and improve administrative efficiency."
  }
];

const benefits = [
  "Reduce response times by up to 45%",
  "Cut operational costs by 30%",
  "Improve citizen satisfaction rates",
  "Enhanced resource utilization",
  "Real-time monitoring and analytics",
  "Predictive maintenance capabilities"
];

export default function MunicipalServices() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Transform Public Services with AI-Driven Solutions
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Enhance efficiency and increase citizen satisfaction with our innovative AI solutions 
            tailored for municipalities. Our services optimize resource allocation, streamline 
            service delivery, and reduce operational costs.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition">
              <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-blue-600">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-2xl font-bold mb-6">Key Benefits</h2>
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <span className="bg-blue-100 text-blue-600 rounded-full p-1 mr-3 mt-1">✓</span>
                  <span className="text-gray-600">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold mb-6">Success Story</h2>
            <div className="prose text-gray-600">
              <p className="mb-4">
                The City of Springfield implemented our AI-driven municipal services solution, 
                resulting in:
              </p>
              <ul className="space-y-2">
                <li>45% reduction in service response times</li>
                <li>30% decrease in operational costs</li>
                <li>92% citizen satisfaction rate</li>
              </ul>
              <div className="mt-6 flex items-center text-sm text-gray-500">
                <FileText className="w-4 h-4 mr-2" />
                <span>Download the full case study</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-blue-600 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">Ready to Transform Your Municipal Services?</h2>
          <p className="text-lg mb-8 opacity-90">
            Let's discuss how our AI solutions can help optimize your public services.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-3 border-2 border-white rounded-lg hover:bg-white hover:text-blue-600 transition"
            >
              Request a Demo
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}