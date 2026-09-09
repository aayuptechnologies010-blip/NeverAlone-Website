// Demo data for the customer dashboard.
// All data is local/frontend-only — no backend connection.

export const demoUser = {
  firstName: 'Sachin',
  avatar: 'https://i.pravatar.cc/300?img=68',
  email: 'sachin@example.com',
  phone: '+91 ••••• •••00',
  memberSince: 'August 2026',
};

export const nextConversation = {
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
  time: '19:30',
  displayDate: 'Today',
  displayTime: '7:30 PM',
  duration: 60,
  status: 'Confirmed',
  callType: 'Private Phone Call',
};

export const dailyUsage = {
  totalMinutes: 60,
  usedMinutes: 25,
};

export const demoPlan = {
  type: 'Monthly',
  price: 2999,
  currency: '₹',
  durationDays: 30,
  dailyMinutes: 60,
  renewalDate: '05 October 2026',
  extraTimePrice: 199,
  extraTimeDuration: 60,
};

export const summaryCounts = {
  upcoming: 2,
  completed: 8,
  cancelled: 1,
};

export const allConversations = [
  // Upcoming
  {
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
    displayDate: '08 Sep 2026',
    displayTime: '7:30 PM',
    duration: 60,
    status: 'Confirmed',
    callType: 'Private Phone Call',
    feedbackSubmitted: false,
  },
  {
    id: 'conv-002',
    companion: {
      id: 'riya',
      name: 'Riya',
      image: 'https://i.pravatar.cc/300?img=44',
      verified: true,
      style: 'Great Listener',
      languages: ['Hindi', 'English'],
    },
    category: 'Career & Work',
    date: '2026-09-10',
    displayDate: '10 Sep 2026',
    displayTime: '6:00 PM',
    duration: 60,
    status: 'Confirmed',
    callType: 'Private Phone Call',
    feedbackSubmitted: false,
  },
  // Completed
  {
    id: 'conv-003',
    companion: {
      id: 'riya',
      name: 'Riya',
      image: 'https://i.pravatar.cc/300?img=44',
      verified: true,
      style: 'Great Listener',
      languages: ['Hindi', 'English'],
    },
    category: 'Career & Work',
    date: '2026-09-07',
    displayDate: '07 Sep 2026',
    displayTime: '6:00 PM',
    duration: 60,
    status: 'Completed',
    callType: 'Private Phone Call',
    feedbackSubmitted: false,
  },
  {
    id: 'conv-004',
    companion: {
      id: 'aisha',
      name: 'Aisha',
      image: 'https://i.pravatar.cc/300?img=47',
      verified: true,
      style: 'Warm & Easygoing',
      languages: ['Hindi', 'English'],
    },
    category: 'Just Talk',
    date: '2026-09-02',
    displayDate: '02 Sep 2026',
    displayTime: '7:30 PM',
    duration: 60,
    status: 'Completed',
    callType: 'Private Phone Call',
    feedbackSubmitted: true,
  },
  {
    id: 'conv-005',
    companion: {
      id: 'ananya',
      name: 'Ananya',
      image: 'https://i.pravatar.cc/300?img=20',
      verified: true,
      style: 'Fun & Energetic',
      languages: ['Hindi', 'English'],
    },
    category: 'Just Talk',
    date: '2026-08-30',
    displayDate: '30 Aug 2026',
    displayTime: '9:00 PM',
    duration: 45,
    status: 'Completed',
    callType: 'Private Phone Call',
    feedbackSubmitted: true,
  },
  {
    id: 'conv-006',
    companion: {
      id: 'meera',
      name: 'Meera',
      image: 'https://i.pravatar.cc/300?img=16',
      verified: true,
      style: 'Calm & Thoughtful',
      languages: ['Hindi', 'English'],
    },
    category: 'Family & Personal',
    date: '2026-08-28',
    displayDate: '28 Aug 2026',
    displayTime: '7:00 PM',
    duration: 60,
    status: 'Completed',
    callType: 'Private Phone Call',
    feedbackSubmitted: true,
  },
  {
    id: 'conv-007',
    companion: {
      id: 'sana',
      name: 'Sana',
      image: 'https://i.pravatar.cc/300?img=32',
      verified: true,
      style: 'Warm Listener',
      languages: ['Hindi', 'English'],
    },
    category: 'Relationship Advice',
    date: '2026-08-25',
    displayDate: '25 Aug 2026',
    displayTime: '8:00 PM',
    duration: 60,
    status: 'Completed',
    callType: 'Private Phone Call',
    feedbackSubmitted: true,
  },
  {
    id: 'conv-008',
    companion: {
      id: 'kabir',
      name: 'Kabir',
      image: 'https://i.pravatar.cc/300?img=11',
      verified: true,
      style: 'Friendly & Talkative',
      languages: ['Hindi', 'English'],
    },
    category: 'Career & Work',
    date: '2026-08-22',
    displayDate: '22 Aug 2026',
    displayTime: '6:30 PM',
    duration: 60,
    status: 'Completed',
    callType: 'Private Phone Call',
    feedbackSubmitted: true,
  },
  {
    id: 'conv-009',
    companion: {
      id: 'aisha',
      name: 'Aisha',
      image: 'https://i.pravatar.cc/300?img=47',
      verified: true,
      style: 'Warm & Easygoing',
      languages: ['Hindi', 'English'],
    },
    category: 'Just Talk',
    date: '2026-08-20',
    displayDate: '20 Aug 2026',
    displayTime: '7:30 PM',
    duration: 60,
    status: 'Completed',
    callType: 'Private Phone Call',
    feedbackSubmitted: true,
  },
  {
    id: 'conv-010',
    companion: {
      id: 'riya',
      name: 'Riya',
      image: 'https://i.pravatar.cc/300?img=44',
      verified: true,
      style: 'Great Listener',
      languages: ['Hindi', 'English'],
    },
    category: 'College & Student Life',
    date: '2026-08-18',
    displayDate: '18 Aug 2026',
    displayTime: '5:30 PM',
    duration: 60,
    status: 'Completed',
    callType: 'Private Phone Call',
    feedbackSubmitted: true,
  },
  // Cancelled
  {
    id: 'conv-011',
    companion: {
      id: 'ananya',
      name: 'Ananya',
      image: 'https://i.pravatar.cc/300?img=20',
      verified: true,
      style: 'Fun & Energetic',
      languages: ['Hindi', 'English'],
    },
    category: 'Just Talk',
    date: '2026-09-01',
    displayDate: '01 Sep 2026',
    displayTime: '10:30 PM',
    duration: 60,
    status: 'Cancelled',
    callType: 'Private Phone Call',
    feedbackSubmitted: false,
  },
];

// Helper to get conversations by status
export const getConversationsByStatus = (status) =>
  allConversations.filter((c) => c.status === status);

// Recent 3 completed
export const recentConversations = allConversations
  .filter((c) => c.status === 'Completed')
  .slice(0, 3);
