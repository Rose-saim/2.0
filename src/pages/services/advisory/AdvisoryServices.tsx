import React from 'react';
import { Shield, BookOpen, Scale, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Strategic AI Planning",
    description: "Develop comprehensive AI strategies aligned with governmental goals"
  },
  {
    icon: <Scale className="w-6 h-6" />,
    title: "Ethical AI Implementation",
    description: "Create robust frameworks for responsible AI adoption"
  },
  {
    icon: <BookOpen className="w-6 h-6" />,
    title: "Regulatory Compliance",
    description: "Navigate complex AI regulations and ensure full compliance"
  }
];

export default function AdvisoryServices() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Expert AI Consulting for Responsible Policy Making
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Guide your organization through the complexities of AI implementation with our
            comprehensive advisory services focused on strategic planning, ethical considerations,
            and regulatory compliance.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition">
              <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-blue-600">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold mb-6">Our Approach</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-lg mb-2">Assessment</h3>
                <p className="text-gray-600">
                  Comprehensive evaluation of your current AI readiness and future needs
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Strategy Development</h3>
                <p className="text-gray-600">
                  Creation of tailored AI implementation plans aligned with your goals
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Implementation Support</h3>
                <p className="text-gray-600">
                  Ongoing guidance and support throughout the implementation process
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Monitoring & Optimization</h3>
                <p className="text-gray-600">
                  Regular review and optimization of AI systems and processes
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold mb-6">Case Study</h2>
            <div className="prose text-gray-600">
              <p className="mb-4">
                Learn how we helped a regional government develop and implement an ethical AI
                framework that became a model for other jurisdictions.
              </p>
              <ul className="space-y-2">
                <li>Established clear AI governance guidelines</li>
                <li>Developed ethical AI assessment tools</li>
                <li>Created stakeholder engagement frameworks</li>
                <li>Implemented monitoring and compliance systems</li>
              </ul>
              <div className="mt-6 flex items-center text-sm text-blue-600 cursor-pointer">
                <FileText className="w-4 h-4 mr-2" />
                <span>Download the full case study</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-blue-600 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">Ready to Implement Responsible AI?</h2>
          <p className="text-lg mb-8 opacity-90">
            Let's discuss how our advisory services can help you navigate the AI landscape.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-3 border-2 border-white rounded-lg hover:bg-white hover:text-blue-600 transition"
            >
              Book a Consultation
            </Link>
            <button
              className="inline-flex items-center px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition"
            >
              Download Case Studies
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}