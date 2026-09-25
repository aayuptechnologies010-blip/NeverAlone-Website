import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';

// Public pages
import Home from './views/Home';
import About from './views/About';
import CategoriesPage from './views/CategoriesPage';
import PricingPage from './views/PricingPage';
import SafetyPage from './views/SafetyPage';
import CompanionsPage from './views/CompanionsPage';
import CompanionProfilePage from './views/CompanionProfilePage';
import HowItWorksPage from './views/HowItWorksPage';
import BookingPage from './views/BookingPage';
import ProfessionalSupportPage from './views/ProfessionalSupportPage';
import ProfessionalProfilePage from './views/ProfessionalProfilePage';
import FaqPage from './views/FaqPage';
import ContactPage from './views/ContactPage';
import BecomeCompanionLanding from './views/BecomeCompanionLanding';
import BecomeCompanionApply from './views/BecomeCompanionApply';
import SignIn from './views/SignIn';
import SignUp from './views/SignUp';
import FirstSessionPage from './views/FirstSessionPage';

// Professional Support Application
import ProfessionalApplyLanding from './views/professional-apply/ProfessionalApplyLanding';
import ProfessionalApplication from './views/professional-apply/ProfessionalApplication';
import ProfessionalOnboardingStatus from './views/professional-apply/ProfessionalOnboardingStatus';

// Admin System
import AdminLayout from './components/admin/AdminLayout';
import AdminLogin from './views/admin/AdminLogin';
import { 
  AdminDashboard, AdminCustomers, AdminCustomerDetails, 
  AdminCompanions, AdminCompanionDetails, AdminCompanionApplications 
} from './views/admin/AdminPages1';
import { 
  AdminProfessionals, AdminProfessionalDetails, AdminProfessionalApplications,
  AdminConversations, AdminSubscriptions, AdminCategories 
} from './views/admin/AdminPages2';
import { 
  AdminPricing, AdminPayments, AdminRefunds, AdminReports, AdminSettings 
} from './views/admin/AdminPages3';

// Dashboard layout + pages

import DashboardLayout from './components/dashboard/DashboardLayout';
import Dashboard from './views/dashboard/Dashboard';
import MyConversations from './views/dashboard/MyConversations';
import ConversationDetails from './views/dashboard/ConversationDetails';
import MyPlan from './views/dashboard/MyPlan';
import ProfilePage from './views/dashboard/ProfilePage';

// Call experience pages
import CallPage from './views/call/CallPage';
import CallFeedbackPage from './views/call/CallFeedbackPage';

// Companion Dashboard
import CompanionDashboardLayout from './components/companion-dashboard/CompanionDashboardLayout';
import CompanionOverview from './views/companion-dashboard/CompanionOverview';
import CompanionConversations from './views/companion-dashboard/CompanionConversations';
import CompanionConversationDetails from './views/companion-dashboard/CompanionConversationDetails';
import CompanionSchedule from './views/companion-dashboard/CompanionSchedule';
import CompanionAvailability from './views/companion-dashboard/CompanionAvailability';
import CompanionEarnings from './views/companion-dashboard/CompanionEarnings';
import CompanionProfile from './views/companion-dashboard/CompanionProfile';
import CompanionSafety from './views/companion-dashboard/CompanionSafety';

// Companion Training
import { TrainingProvider } from './components/training/TrainingContext';
import TrainingLayout from './components/training/TrainingLayout';
import CompanionOnboarding from './views/companion/CompanionOnboarding';
import TrainingHome from './views/companion/TrainingHome';
import TrainingModules from './views/companion/TrainingModules';
import TrainingProgress from './views/companion/TrainingProgress';
import TrainingGuidelines from './views/companion/TrainingGuidelines';
import TrainingModulePage from './views/companion/TrainingModulePage';
import TrainingReview from './views/companion/TrainingReview';

import MobileBottomNav from './components/MobileBottomNav';
import SEOHead from './components/SEOHead';
import { useLocation } from 'react-router-dom';

// Public layout wrapper (Navbar + Footer + MobileBottomNav + SEOHead)
function PublicLayout() {
  const location = useLocation();
  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-brand-500 selection:text-white bg-white pb-14 sm:pb-0">
      <SEOHead pathname={location.pathname} />
      <Navbar />
      <main className="flex-grow pt-24">
        <Outlet />
      </main>
      <Footer />
      <MobileBottomNav />
    </div>
  );
}

function App() {
  return (
    <TrainingProvider>
      <Router>
        <Routes>
          {/* ── Dashboard routes (own layout, no public Navbar/Footer) ── */}
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="conversations" element={<MyConversations />} />
            <Route path="conversations/:id" element={<ConversationDetails />} />
            <Route path="plan" element={<MyPlan />} />
            <Route path="call-history" element={<MyConversations />} />
            <Route path="profile" element={<ProfilePage />} />
            <Route path="support" element={<ProfilePage />} />
            <Route path="settings" element={<ProfilePage />} />
          </Route>

          {/* ── Call experience routes (fullscreen, no Navbar/Footer/Sidebar) ── */}
          <Route path="/call/:bookingId" element={<CallPage />} />
          <Route path="/call/:bookingId/feedback" element={<CallFeedbackPage />} />

          {/* ── Companion dashboard routes (own layout) ── */}
          <Route path="/companion" element={<CompanionDashboardLayout />}>
            <Route path="dashboard" element={<CompanionOverview />} />
            <Route path="conversations" element={<CompanionConversations />} />
            <Route path="conversations/:id" element={<CompanionConversationDetails />} />
            <Route path="schedule" element={<CompanionSchedule />} />
            <Route path="availability" element={<CompanionAvailability />} />
            <Route path="earnings" element={<CompanionEarnings />} />
            <Route path="profile" element={<CompanionProfile />} />
            <Route path="safety" element={<CompanionSafety />} />
          </Route>

          {/* ── Companion onboarding (standalone, no public layout) ── */}
          <Route path="/companion/onboarding" element={<CompanionOnboarding />} />

          {/* ── Companion training routes (own layout) ── */}
          <Route path="/companion/training" element={<TrainingLayout />}>
            <Route index element={<TrainingHome />} />
            <Route path="modules" element={<TrainingModules />} />
            <Route path="progress" element={<TrainingProgress />} />
            <Route path="guidelines" element={<TrainingGuidelines />} />
            <Route path="review" element={<TrainingReview />} />
            <Route path=":moduleId" element={<TrainingModulePage />} />
          </Route>

          {/* ── Public routes (with Navbar + Footer) ── */}
          <Route element={<PublicLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/first-session" element={<FirstSessionPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/faq" element={<FaqPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/become-a-companion" element={<BecomeCompanionLanding />} />
            <Route path="/become-a-companion/apply" element={<BecomeCompanionApply />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/categories" element={<CategoriesPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/safety" element={<SafetyPage />} />
            <Route path="/companions" element={<CompanionsPage />} />
            <Route path="/companions/:id" element={<CompanionProfilePage />} />
            <Route path="/how-it-works" element={<HowItWorksPage />} />
            <Route path="/book" element={<BookingPage />} />
            <Route path="/professional-support" element={<ProfessionalSupportPage />} />
            <Route path="/professionals/:id" element={<ProfessionalProfilePage />} />
            
            <Route path="/professional-support/apply" element={<ProfessionalApplyLanding />} />
          </Route>

          {/* ── Professional Application routes (no Navbar/Footer) ── */}
          <Route path="/professional-support/application" element={<ProfessionalApplication />} />
          <Route path="/professional-support/onboarding" element={<ProfessionalOnboardingStatus />} />

          {/* ── Admin Login ── */}
          <Route path="/admin/login" element={<AdminLogin />} />

          {/* ── Admin Dashboard Routes ── */}
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<AdminDashboard />} />
            <Route path="customers" element={<AdminCustomers />} />
            <Route path="customers/:id" element={<AdminCustomerDetails />} />
            <Route path="companions" element={<AdminCompanions />} />
            <Route path="companions/:id" element={<AdminCompanionDetails />} />
            <Route path="companion-applications" element={<AdminCompanionApplications />} />
            
            <Route path="professionals" element={<AdminProfessionals />} />
            <Route path="professionals/:id" element={<AdminProfessionalDetails />} />
            <Route path="professional-applications" element={<AdminProfessionalApplications />} />
            
            <Route path="conversations" element={<AdminConversations />} />
            <Route path="subscriptions" element={<AdminSubscriptions />} />
            <Route path="categories" element={<AdminCategories />} />
            <Route path="pricing" element={<AdminPricing />} />
            <Route path="payments" element={<AdminPayments />} />
            <Route path="refunds" element={<AdminRefunds />} />
            <Route path="reports" element={<AdminReports />} />
            <Route path="settings" element={<AdminSettings />} />
          </Route>
        </Routes>
      </Router>
    </TrainingProvider>
  );
}

export default App;

