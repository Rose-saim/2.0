import React from 'react';
import { Link } from 'react-router-dom';
import { BarChart2, Users2, Clock, FileText, ArrowRight } from 'lucide-react';
import ContactForm from '../../../components/ContactForm';

const sections = [
  {
    title: "Optimizing Resource Allocation",
    icon: <BarChart2 className="w-6 h-6" />,
    description: "Leverage AI-powered analytics to make data-driven decisions on resource distribution. Our solutions help municipalities optimize everything from traffic management to waste collection, ensuring maximum efficiency in public service delivery.",
    benefits: [
      "Real-time resource tracking and allocation",
      "Predictive analytics for demand forecasting",
      "Automated scheduling and dispatching",
      "Cost optimization algorithms"
    ]
  },
  {
    title: "Improving Service Delivery",
    icon: <Users2 className="w-6 h-6" />,
    description: "Transform citizen interactions with AI-powered service delivery solutions. From intelligent chatbots to predictive maintenance systems, our technologies streamline public services and enhance citizen satisfaction.",
    benefits: [
      "24/7 automated citizen support",
      "Reduced wait times",
      "Improved service accessibility",
      "Enhanced citizen engagement"
    ]
  },
  {
    title: "Reducing Operational Costs",
    icon: <Clock className="w-6 h-6" />,
    description: "Minimize administrative overhead and optimize operational efficiency through AI automation. Our solutions help municipalities save costs while maintaining or improving service quality.",
    benefits: [
      "Automated administrative tasks",
      "Reduced manual processing",
      "Optimized resource utilization",
      "Lower operational expenses"
    ]
  }
];

const caseStudies = [
  {
    title: "City of Springfield",
    metrics: [
      { label: "Response Time Reduction", value: "45%" },
      { label: "Cost Savings", value: "30%" },
      { label: "Citizen Satisfaction", value: "92%" }
    ]
  }
];

export default function MunicipalServicesDetail() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Transform Public Services with AI Solutions
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Enhance public services using innovative AI-driven solutions that increase efficiency,
            optimize resource allocation, and improve citizen satisfaction. Our Municipal Services
            help local governments leverage AI to deliver better, faster, and more cost-effective
            public services.
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
            <h2 className="text-2xl font-bold mb-4">Ready to Transform Your Municipal Services?</h2>
            <p className="text-lg opacity-90">
              Starting from €5,000 per project, our solutions can be customized to your specific needs.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-3 border-2 border-white rounded-lg hover:bg-white hover:text-blue-600 transition"
            >
              Request a Demo
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition"
            >
              Get a Quote
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