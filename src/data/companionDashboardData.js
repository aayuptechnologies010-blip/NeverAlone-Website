// Centralized demo companion data
export const demoCompanion = {
  firstName: 'Aisha',
  lastName: 'Sharma',
  email: 'aisha@demo.neuravia.com',
  languages: ['Hindi', 'English'],
  conversationStyle: 'Warm & Easygoing',
  interests: ['Music', 'Travel', 'Books', 'Movies', 'Food'],
  categories: [
    { id: 'just-talk', label: 'Just Talk', enabled: true },
    { id: 'relationship', label: 'Relationship Advice', enabled: true },
    { id: 'family', label: 'Family & Personal Life', enabled: true },
    { id: 'career', label: 'Career & Work', enabled: false },
    { id: 'college', label: 'College & Student Life', enabled: false },
    { id: 'flirty', label: 'Flirty Mode • 18+', enabled: false, status: 'Training Required' },
  ],
  introduction: 'I enjoy having honest, comfortable conversations. I believe everyone deserves to be heard without judgment.',
  status: 'approved', // application-pending | training-required | approval-pending | approved | suspended
  verificationStatus: 'Verified',
  coreTraining: 'Completed',
  flirtyTraining: 'Not Applicable',
  isAvailableToday: true,
  todayHours: '6:00 PM – 10:00 PM',
};

export const demoConversations = [
  {
    id: 'conv-101',
    customer: 'Rahul',
    category: 'Just Talk',
    date: 'Today',
    time: '7:30 PM',
    duration: '60 Minutes',
    status: 'upcoming',
    confirmed: true,
  },
  {
    id: 'conv-102',
    customer: 'Meera',
    category: 'Relationship Advice',
    date: 'Today',
    time: '9:00 PM',
    duration: '60 Minutes',
    status: 'upcoming',
    confirmed: true,
  },
  {
    id: 'conv-100',
    customer: 'Arjun',
    category: 'Career & Work',
    date: 'Today',
    time: '5:00 PM',
    duration: '60 Minutes',
    status: 'completed',
    confirmed: true,
    feedbackStatus: 'Submitted',
  },
  {
    id: 'conv-99',
    customer: 'Priya',
    category: 'Family & Personal Life',
    date: 'Yesterday',
    time: '8:00 PM',
    duration: '60 Minutes',
    status: 'completed',
    confirmed: true,
    feedbackStatus: 'Submitted',
  },
  {
    id: 'conv-98',
    customer: 'Vikram',
    category: 'Just Talk',
    date: 'Yesterday',
    time: '6:00 PM',
    duration: '60 Minutes',
    status: 'completed',
    confirmed: true,
    feedbackStatus: 'Pending',
  },
  {
    id: 'conv-97',
    customer: 'Sneha',
    category: 'Relationship Advice',
    date: '2 days ago',
    time: '7:00 PM',
    duration: '60 Minutes',
    status: 'cancelled',
    confirmed: false,
  },
];

export const demoSchedule = {
  Monday: { available: true, slots: [{ start: '18:00', end: '22:00' }] },
  Tuesday: { available: true, slots: [{ start: '18:00', end: '22:00' }] },
  Wednesday: { available: true, slots: [{ start: '18:00', end: '22:00' }] },
  Thursday: { available: true, slots: [{ start: '18:00', end: '22:00' }] },
  Friday: { available: true, slots: [{ start: '18:00', end: '23:00' }] },
  Saturday: { available: true, slots: [{ start: '14:00', end: '22:00' }] },
  Sunday: { available: false, slots: [] },
};

export const demoEarnings = {
  available: '—',
  pending: '—',
  totalPaid: '—',
  history: [],
  payouts: [],
  payoutMethod: null,
};

export const demoNotifications = [
  { id: 'n1', type: 'conversation', text: 'Upcoming conversation with Rahul at 7:30 PM', time: '30 min ago', read: false },
  { id: 'n2', type: 'schedule', text: 'Your availability for Saturday has been updated.', time: '2 hours ago', read: true },
  { id: 'n3', type: 'training', text: 'Core training completed successfully.', time: 'Yesterday', read: true },
  { id: 'n4', type: 'profile', text: 'Your profile review is complete.', time: '2 days ago', read: true },
  { id: 'n5', type: 'payout', text: 'Payout system will be available once configured.', time: '3 days ago', read: true },
];

export const demoPerformance = {
  completedConversations: 3,
  reliability: 'On track',
  feedbackSummary: [
    { label: 'Listening', value: 'Positive' },
    { label: 'Comfort', value: 'Positive' },
    { label: 'Would Talk Again', value: 'Yes' },
  ],
  trainingStatus: 'Core training completed',
};

export const conversationCategories = [
  'Just Talk',
  'Relationship Advice',
  'Family & Personal Life',
  'Career & Work',
  'College & Student Life',
];

export function getConversationById(id) {
  return demoConversations.find((c) => c.id === id);
}
