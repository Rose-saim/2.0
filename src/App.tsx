import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import GetStarted from './pages/GetStarted';
import RegisterBusiness from './pages/auth/RegisterBusiness';
import RegisterIndividual from './pages/auth/RegisterIndividual';
import RegisterPublicService from './pages/auth/RegisterPublicService';
import RegisterExpert from './pages/auth/RegisterExpert';
import Login from './pages/auth/Login';
import AdminLogin from './pages/admin/AdminLogin';
import AdminDashboard from './pages/admin/AdminDashboard';
import Dashboard from './pages/Dashboard';
import About from './pages/About';
import Contact from './pages/Contact';
import Services from './pages/Services';
import Resources from './pages/Resources';
import Courses from './pages/Courses';
import B2B from './pages/services/B2B';
import B2C from './pages/services/B2C';
import B2G from './pages/services/B2G';
import B2BLearnMore from './pages/services/learn-more/B2BLearnMore';
import B2CLearnMore from './pages/services/learn-more/B2CLearnMore';
import B2GLearnMore from './pages/services/learn-more/B2GLearnMore';

// Business Dashboard Pages
import BusinessTraining from './pages/dashboard/business/BusinessTraining';
import TeamManagement from './pages/dashboard/business/TeamManagement';
import AITools from './pages/dashboard/business/AITools';
import BusinessMetrics from './pages/dashboard/business/BusinessMetrics';

// Individual Dashboard Pages
import MyCourses from './pages/dashboard/individual/MyCourses';
import Certifications from './pages/dashboard/individual/Certifications';
import LearningPath from './pages/dashboard/individual/LearningPath';
import Community from './pages/dashboard/individual/Community';

// Public Service Dashboard Pages
import ServiceManagement from './pages/dashboard/public/ServiceManagement';
import CitizenEngagement from './pages/dashboard/public/CitizenEngagement';
import ServiceReports from './pages/dashboard/public/ServiceReports';
import ServiceAnalytics from './pages/dashboard/public/ServiceAnalytics';

// Payment and Checkout Pages
import Checkout from './pages/payment/Checkout';
import PaymentSuccess from './pages/payment/PaymentSuccess';
import PaymentCancel from './pages/payment/PaymentCancel';

// Terms and Privacy Pages
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';

// Career Pages
import Careers from './pages/Careers';

// Case Studies Pages
import CaseStudyDetail from './pages/case-studies/CaseStudyDetail';

// Course Detail Pages
import CourseDetail from './pages/courses/CourseDetail';

// Certificate Pages
import CertificateView from './pages/certificates/CertificateView';

// Profile Pages
import UserProfile from './pages/profile/UserProfile';
import ProfileSettings from './pages/profile/ProfileSettings';

// Help & Support Pages
import Help from './pages/help/Help';
import ContactSupport from './pages/help/ContactSupport';

// Newsletter Subscription
import Newsletter from './pages/Newsletter';

// Resource Pages
import Guides from './pages/resources/Guides';
import CaseStudies from './pages/resources/CaseStudies';
import Webinars from './pages/resources/Webinars';
import Articles from './pages/resources/Articles';

// Enrollment Pages
import EnrollmentForm from './pages/enrollment/EnrollmentForm';

// Project Pages
import ProjectDetail from './pages/projects/ProjectDetail';

// Student Pages
import StudentDashboard from './pages/student/StudentDashboard';
import StudentCourses from './pages/student/StudentCourses';
import StudentProgress from './pages/student/StudentProgress';
import StudentCertificates from './pages/student/StudentCertificates';

// Expert Pages
import ExpertProfile from './pages/expert/ExpertProfile';
import ExpertCourses from './pages/expert/ExpertCourses';
import ExpertReviews from './pages/expert/ExpertReviews';
import ExpertEarnings from './pages/expert/ExpertEarnings';

// Admin Pages
import AdminSettings from './pages/admin/AdminSettings';
import AdminReports from './pages/admin/AdminReports';
import AdminNotifications from './pages/admin/AdminNotifications';
import SystemSettings from './pages/admin/SystemSettings';

// Error Pages
import NotFound from './pages/error/NotFound';
import ServerError from './pages/error/ServerError';
import Maintenance from './pages/error/Maintenance';

export default function App() {
  return (
    <Layout>
      <Routes>
        {/* Main Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/get-started" element={<GetStarted />} />
        <Route path="/register-business" element={<RegisterBusiness />} />
        <Route path="/register-individual" element={<RegisterIndividual />} />
        <Route path="/register-public-service" element={<RegisterPublicService />} />
        <Route path="/register-expert" element={<RegisterExpert />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/courses" element={<Courses />} />

        {/* Service Routes */}
        <Route path="/services/b2b" element={<B2B />} />
        <Route path="/services/b2c" element={<B2C />} />
        <Route path="/services/b2g" element={<B2G />} />

        {/* Learn More Routes */}
        <Route path="/services/b2b/learn-more" element={<B2BLearnMore />} />
        <Route path="/services/b2c/learn-more" element={<B2CLearnMore />} />
        <Route path="/services/b2g/learn-more" element={<B2GLearnMore />} />

        {/* Business Dashboard Routes */}
        <Route path="/dashboard/training" element={<BusinessTraining />} />
        <Route path="/dashboard/team" element={<TeamManagement />} />
        <Route path="/dashboard/tools" element={<AITools />} />
        <Route path="/dashboard/metrics" element={<BusinessMetrics />} />

        {/* Individual Dashboard Routes */}
        <Route path="/dashboard/courses" element={<MyCourses />} />
        <Route path="/dashboard/certifications" element={<Certifications />} />
        <Route path="/dashboard/progress" element={<LearningPath />} />
        <Route path="/dashboard/community" element={<Community />} />

        {/* Public Service Dashboard Routes */}
        <Route path="/dashboard/services" element={<ServiceManagement />} />
        <Route path="/dashboard/engagement" element={<CitizenEngagement />} />
        <Route path="/dashboard/reports" element={<ServiceReports />} />
        <Route path="/dashboard/analytics" element={<ServiceAnalytics />} />

        {/* Payment Routes */}
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/payment/success" element={<PaymentSuccess />} />
        <Route path="/payment/cancel" element={<PaymentCancel />} />

        {/* Legal Routes */}
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />

        {/* Career Routes */}
        <Route path="/careers" element={<Careers />} />

        {/* Case Studies Routes */}
        <Route path="/case-studies/:id" element={<CaseStudyDetail />} />

        {/* Course Routes */}
        <Route path="/courses/:id" element={<CourseDetail />} />

        {/* Certificate Routes */}
        <Route path="/certificates/:id" element={<CertificateView />} />

        {/* Profile Routes */}
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/profile/settings" element={<ProfileSettings />} />

        {/* Help Routes */}
        <Route path="/help" element={<Help />} />
        <Route path="/contact-support" element={<ContactSupport />} />

        {/* Newsletter Routes */}
        <Route path="/newsletter" element={<Newsletter />} />

        {/* Resource Routes */}
        <Route path="/resources/guides" element={<Guides />} />
        <Route path="/resources/case-studies" element={<CaseStudies />} />
        <Route path="/resources/webinars" element={<Webinars />} />
        <Route path="/resources/articles" element={<Articles />} />

        {/* Enrollment Routes */}
        <Route path="/enroll/:courseId" element={<EnrollmentForm />} />

        {/* Project Routes */}
        <Route path="/projects/:id" element={<ProjectDetail />} />

        {/* Student Routes */}
        <Route path="/student/dashboard" element={<StudentDashboard />} />
        <Route path="/student/courses" element={<StudentCourses />} />
        <Route path="/student/progress" element={<StudentProgress />} />
        <Route path="/student/certificates" element={<StudentCertificates />} />

        {/* Expert Routes */}
        <Route path="/expert/profile/:id" element={<ExpertProfile />} />
        <Route path="/expert/courses" element={<ExpertCourses />} />
        <Route path="/expert/reviews" element={<ExpertReviews />} />
        <Route path="/expert/earnings" element={<ExpertEarnings />} />

        {/* Admin Routes */}
        <Route path="/admin/settings" element={<AdminSettings />} />
        <Route path="/admin/reports" element={<AdminReports />} />
        <Route path="/admin/notifications" element={<AdminNotifications />} />
        <Route path="/admin/system" element={<SystemSettings />} />

        {/* Error Routes */}
        <Route path="/404" element={<NotFound />} />
        <Route path="/500" element={<ServerError />} />
        <Route path="/maintenance" element={<Maintenance />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}