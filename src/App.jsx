import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';

// Public pages
import Home from './pages/Home';
import About from './pages/About';
import CategoriesPage from './pages/CategoriesPage';
import PricingPage from './pages/PricingPage';
import SafetyPage from './pages/SafetyPage';
import CompanionsPage from './pages/CompanionsPage';
import CompanionProfilePage from './pages/CompanionProfilePage';
import HowItWorksPage from './pages/HowItWorksPage';
import BookingPage from './pages/BookingPage';
import FlirtyModePage from './pages/FlirtyModePage';
import ProfessionalSupportPage from './pages/ProfessionalSupportPage';
import ProfessionalProfilePage from './pages/ProfessionalProfilePage';
import FaqPage from './pages/FaqPage';
import ContactPage from './pages/ContactPage';
import BecomeCompanionLanding from './pages/BecomeCompanionLanding';
import BecomeCompanionApply from './pages/BecomeCompanionApply';
import SignIn from './pages/SignIn';

// Professional Support Application
import ProfessionalApplyLanding from './pages/professional-apply/ProfessionalApplyLanding';
import ProfessionalApplication from './pages/professional-apply/ProfessionalApplication';
import ProfessionalOnboardingStatus from './pages/professional-apply/ProfessionalOnboardingStatus';

// Admin System
import AdminLayout from './components/admin/AdminLayout';
import AdminLogin from './pages/admin/AdminLogin';
import { 
  AdminDashboard, AdminCustomers, AdminCustomerDetails, 
  AdminCompanions, AdminCompanionDetails, AdminCompanionApplications 
} from './pages/admin/AdminPages1';
import { 
  AdminProfessionals, AdminProfessionalDetails, AdminProfessionalApplications,
  AdminConversations, AdminSubscriptions, AdminCategories 
} from './pages/admin/AdminPages2';
import { 
  AdminPricing, AdminPayments, AdminRefunds, AdminReports, AdminSettings 
} from './pages/admin/AdminPages3';

// Dashboard layout + pages

import DashboardLayout from './components/dashboard/DashboardLayout';
import Dashboard from './pages/dashboard/Dashboard';
import MyConversations from './pages/dashboard/MyConversations';
import ConversationDetails from './pages/dashboard/ConversationDetails';
import MyPlan from './pages/dashboard/MyPlan';

// Call experience pages
import CallPage from './pages/call/CallPage';
import CallFeedbackPage from './pages/call/CallFeedbackPage';

// Companion Dashboard
import CompanionDashboardLayout from './components/companion-dashboard/CompanionDashboardLayout';
import CompanionOverview from './pages/companion-dashboard/CompanionOverview';
import CompanionConversations from './pages/companion-dashboard/CompanionConversations';
import CompanionConversationDetails from './pages/companion-dashboard/CompanionConversationDetails';
import CompanionSchedule from './pages/companion-dashboard/CompanionSchedule';
import CompanionAvailability from './pages/companion-dashboard/CompanionAvailability';
import CompanionEarnings from './pages/companion-dashboard/CompanionEarnings';
import CompanionProfile from './pages/companion-dashboard/CompanionProfile';
import CompanionSafety from './pages/companion-dashboard/CompanionSafety';

// Companion Training
import { TrainingProvider } from './components/training/TrainingContext';
import TrainingLayout from './components/training/TrainingLayout';
import CompanionOnboarding from './pages/companion/CompanionOnboarding';
import TrainingHome from './pages/companion/TrainingHome';
import TrainingModules from './pages/companion/TrainingModules';
import TrainingProgress from './pages/companion/TrainingProgress';
import TrainingGuidelines from './pages/companion/TrainingGuidelines';
import TrainingModulePage from './pages/companion/TrainingModulePage';
import TrainingReview from './pages/companion/TrainingReview';

// Public layout wrapper (Navbar + Footer)
function PublicLayout() {
  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-brand-500 selection:text-white bg-white">
      <Navbar />
      <main className="flex-grow pt-24">
        <Outlet />
      </main>
      <Footer />
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
            <Route path="/about" element={<About />} />
            <Route path="/faq" element={<FaqPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/become-a-companion" element={<BecomeCompanionLanding />} />
            <Route path="/become-a-companion/apply" element={<BecomeCompanionApply />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/categories" element={<CategoriesPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/safety" element={<SafetyPage />} />
            <Route path="/companions" element={<CompanionsPage />} />
            <Route path="/companions/:id" element={<CompanionProfilePage />} />
            <Route path="/how-it-works" element={<HowItWorksPage />} />
            <Route path="/book" element={<BookingPage />} />
            <Route path="/flirty-mode" element={<FlirtyModePage />} />
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

