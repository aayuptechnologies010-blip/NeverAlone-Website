// Centralized Admin Demo Data

export const STATS = {
  totalCustomers: 12450,
  activeSubscriptions: 8320,
  totalCompanions: 145,
  approvedProfessionals: 32,
  conversationsToday: 412,
  pendingVerifications: 18,
  revenueMonthly: '₹2,45,00,000',
  refundsPending: 5
};

export const RECENT_ACTIVITY = [
  { id: 1, text: 'New professional application submitted', time: '10 min ago' },
  { id: 2, text: 'Safety report #1024 created', time: '30 min ago' },
  { id: 3, text: 'Conversation #992 completed', time: '1 hour ago' },
  { id: 4, text: 'Refund request #501 processed', time: '2 hours ago' },
  { id: 5, text: 'Companion profile update submitted', time: '3 hours ago' }
];

export const DEMO_CUSTOMERS = [
  { id: 'c1', name: 'Rohan Sharma', contact: 'rohan@example.com', plan: 'Monthly', status: 'Active', conversations: 45, joined: '2023-01-15' },
  { id: 'c2', name: 'Aditi Verma', contact: 'aditi@example.com', plan: 'Weekly', status: 'Active', conversations: 12, joined: '2023-11-02' },
  { id: 'c3', name: 'Vikram Singh', contact: 'vikram@example.com', plan: 'Yearly', status: 'Suspended', conversations: 102, joined: '2022-08-20' },
];

export const DEMO_COMPANIONS = [
  { id: 'comp1', name: 'Aisha', languages: ['Hindi', 'English'], categories: ['Just Talk', 'Relationship Advice'], training: 'Completed', verification: 'Verified', status: 'Active' },
  { id: 'comp2', name: 'Riya', languages: ['English'], categories: ['Career & Work', 'Just Talk'], training: 'Completed', verification: 'Verified', status: 'Active' },
  { id: 'comp3', name: 'Ananya', languages: ['Hindi'], categories: ['Family & Personal Life'], training: 'In Progress', verification: 'Pending', status: 'Pending' },
];

export const DEMO_PROFESSIONALS = [
  { id: 'prof1', name: 'Dr. Sameer Desai', title: 'Clinical Psychologist', areas: ['Mental Health Counseling'], credentialStatus: 'Approved', profileStatus: 'Approved', status: 'Active' },
  { id: 'prof2', name: 'Neha Gupta', title: 'Relationship Therapist', areas: ['Relationship Therapy'], credentialStatus: 'Pending', profileStatus: 'Pending', status: 'Pending' },
];

export const DEMO_CONVERSATIONS = [
  { id: 'conv-101', customer: 'Rohan Sharma', provider: 'Aisha', type: 'Companion', category: 'Just Talk', date: 'Today', time: '14:00', duration: '60 Min', status: 'Completed', report: 'None' },
  { id: 'conv-102', customer: 'Aditi Verma', provider: 'Dr. Sameer Desai', type: 'Professional', category: 'Mental Health Counseling', date: 'Today', time: '16:00', duration: '60 Min', status: 'Active', report: 'None' },
];

export const DEMO_SUBSCRIPTIONS = [
  { id: 'sub-1', customer: 'Rohan Sharma', plan: 'Monthly', start: '2024-01-01', end: '2024-02-01', status: 'Active', dailyAccess: '60 Min' },
  { id: 'sub-2', customer: 'Aditi Verma', plan: 'Weekly', start: '2024-01-10', end: '2024-01-17', status: 'Active', dailyAccess: '60 Min' },
];

export const DEMO_PAYMENTS = [
  { id: 'pay-1', customer: 'Rohan Sharma', type: 'Subscription', amount: '₹2,999', date: '2024-01-01', status: 'Processed' },
  { id: 'pay-2', customer: 'Aditi Verma', type: 'Extra Time', amount: '₹199', date: '2024-01-12', status: 'Processed' },
];

export const DEMO_REFUNDS = [
  { id: 'ref-1', customer: 'Vikram Singh', payment: 'pay-50', amount: '₹799', reason: 'Unused subscription', status: 'Pending', date: '2024-01-15' },
];

export const DEMO_REPORTS = [
  { id: 'rep-1', reporter: 'Aisha', reported: 'Vikram Singh', conversation: 'conv-90', reason: 'Explicit Content', date: '2024-01-14', status: 'Open' },
];

export const DEMO_CATEGORIES = [
  { id: 'c1', name: 'Just Talk', enabled: true, is18: false },
  { id: 'c2', name: 'Relationship Advice', enabled: true, is18: false },
  { id: 'c3', name: 'Family & Personal Life', enabled: true, is18: false },
  { id: 'c4', name: 'Career & Work', enabled: true, is18: false },
  { id: 'c5', name: 'College & Student Life', enabled: true, is18: false },
  { id: 'c6', name: 'Mindfulness & Healing', enabled: true, is18: false },
];

export const DEMO_PRICING = [
  { id: 'p0', name: 'First Session Special', price: '₹499', duration: '1 Session', daily: '60 Minutes', enabled: true },
  { id: 'p1', name: 'Weekly', price: '₹799', duration: '7 Days', daily: '60 Minutes', enabled: true },
  { id: 'p2', name: 'Monthly', price: '₹2,999', duration: '30 Days', daily: '60 Minutes', enabled: true },
  { id: 'p3', name: 'Yearly', price: '₹19,999', duration: '365 Days', daily: '60 Minutes', enabled: true },
  { id: 'p4', name: 'Extra 60 Minutes', price: '₹199', duration: '1 Session', daily: 'N/A', enabled: true },
];
