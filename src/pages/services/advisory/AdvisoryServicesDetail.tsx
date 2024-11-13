import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Scale, BookOpen, FileText, ArrowRight } from 'lucide-react';
import ContactForm from '../../../components/ContactForm';

const sections = [
  {
    title: "Strategic AI Planning",
    icon: <Shield className="w-6 h-6" />,
    description: "Develop comprehensive AI strategies that align with governmental goals and ensure long-term success. Our strategic planning services help organizations create a clear roadmap for AI implementation.",
    benefits: [
      "Comprehensive AI readiness assessment",
      "Custom implementation roadmap",
      "Stakeholder alignment strategy",
      "Risk mitigation planning"
    ]
  },
  {
    title: "Ethical AI Implementation",
    icon: <Scale className="w-6 h-6" />,
    description: "Create robust frameworks and guidelines for responsible AI implementation. We help establish ethical committees and develop governance structures that promote responsible use of AI technologies.",
    benefits: [
      "Ethical framework development",
      "Governance structure setup",
      "Impact assessment tools",
      "Compliance monitoring systems"
    ]
  },
  {
    title: "Regulatory Compliance",
    icon: <BookOpen className="w-6 h-6" />,
    description: "Navigate the complex landscape of AI regulations and ensure full compliance with legal requirements. Our experts provide guidance on current and emerging AI regulations.",
    benefits: [
      "Regulatory gap analysis",
      "Compliance roadmap creation",
      "Policy development support",
      "Regular compliance audits"
    ]
  }
];

const caseStudies = [
  {
    title: "Regional Government Success Story",
    metrics: [
      { label: "Policy Compliance Rate", value: "100%" },
      { label: "Stakeholder Satisfaction", value: "95%" },
      { label: "Implementation Success", value: "90%" }
    ]
  }
];

export default function AdvisoryServicesDetail() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Expert AI Advisory Services for Policy Makers
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Partner with our team of experts to develop responsible AI policies that align with
            ethical standards and regulatory requirements. Our advisory services help policy makers
            make informed decisions on AI implementation.
          </p>
        </div>

        <div className="space-y-16">
          {sections.map((section, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <div className="bg-blue-100 p-3 rounded-lg text-blue-600">
                    {section.icon}
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 ml-4">{section.title}</h2>
                </div>
                
                <p className="text-gray-600 mb-8">
                  {section.description}
                </p>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Key Benefits:</h3>
                    <ul className="space-y-3">
                      {section.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-gray-600">
                          <ArrowRight className="w-4 h-4 text-blue-500 mr-2" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="p-8">
            <h2 className="text-2xl font-bold mb-8">Success Stories</h2>
            {caseStudies.map((study, index) => (
              <div key={index} className="mb-8">
                <h3 className="text-xl font-semibold mb-4">{study.title}</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  {study.metrics.map((metric, idx) => (
                    <div key={idx} className="bg-gray-50 p-4 rounded-lg">
                      <div className="text-3xl font-bold text-blue-600 mb-1">
                        {metric.value}
                      </div>
                      <div className="text-sm text-gray-600">{metric.label}</div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 flex items-center text-blue-600 cursor-pointer">
                  <FileText className="w-4 h-4 mr-2" />
                  <span>Download Full Case Study</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 bg-blue-600 rounded-2xl p-8 text-white">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-4">Ready to Develop Your AI Strategy?</h2>
            <p className="text-lg opacity-90">
              Advisory services starting from €1,500 per consultation
            </p>
          </div>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-3 border-2 border-white rounded-lg hover:bg-white hover:text-blue-600 transition"
            >
              Book a Consultation
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition"
            >
              Download Case Studies
            </Link>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-bold text-center mb-8">Contact Us</h2>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}