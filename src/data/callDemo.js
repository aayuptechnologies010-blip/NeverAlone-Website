// Demo data for the call experience.
// All data is frontend-only — no backend connection.

export const demoCallBooking = {
  id: 'conv-001',
  companion: {
    id: 'aisha',
    name: 'Aisha',
    image: 'https://i.pravatar.cc/300?img=47',
    verified: true,
    style: 'Warm & Easygoing',
    languages: ['Hindi', 'English'],
  },
  category: 'Just Talk',
  date: '2026-09-08',
  displayDate: 'Today',
  displayTime: '7:30 PM',
  duration: 60,
  status: 'Confirmed',
  callType: 'Private Phone Call',
};

// Call states the frontend can cycle through.
export const CALL_STATES = {
  SCHEDULED: 'scheduled',
  READY: 'ready',
  ACTIVE: 'active',
  ENDING_SOON: 'endingSoon',
  ENDED: 'ended',
  REPORTED: 'reported',
};

// Report reasons
export const reportReasons = [
  'Inappropriate Conversation',
  'Harassment',
  'Explicit Content',
  'Asked To Meet Offline',
  'Asked For Personal Information',
  'Payment / Money Request',
  'Other',
];

// Extra time config
export const extraTimeConfig = {
  price: 199,
  currency: '₹',
  duration: 60,
};
