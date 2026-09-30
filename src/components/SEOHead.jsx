import React, { useEffect } from 'react';

// Comprehensive SEO & GEO metadata dictionary for every accessible route
const pageSchemas = {
  '/': {
    title: 'Neuravia — #1 Online Therapy, Clinical Counselling & Emotional Companions in India',
    description: 'Connect with verified clinical psychologists & empathetic listeners online across India. 1-on-1 private audio therapy for anxiety, depression, breakup recovery & OCD starting at ₹499.',
    keywords: 'online therapy india, clinical psychologist delhi, best therapist mumbai, mental wellness bangalore, breakup counseling, depression therapist online, talk to someone now hindi, psychologist near me',
    canonical: 'https://neuravia.in/'
  },
  '/first-session': {
    title: '₹499 First Therapy Session — 60-Minute 1-on-1 Clinical Consultation | Neuravia',
    description: 'Book a 60-minute confidential first therapy session at ₹499. Evidence-based CBT, stress management, anxiety and relationship counselling with RCI verified practitioners.',
    keywords: 'first therapy session india, cheap online therapy 499, cbt therapist india, psychology consultation bangalore mumbai, stress counseling same day slot, 60 min therapy session',
    canonical: 'https://neuravia.in/first-session'
  },
  '/companions': {
    title: 'Find Companions & Active Listeners Online | Safe, Empathetic Voice Chat',
    description: 'Explore certified companions and empathetic listeners available now. Private voice conversations in Hindi, English, Marathi & Tamil without judgment.',
    keywords: 'talk to friendly companions online, lonely need someone to talk, empathetic listener india, late night voice call support, vent feelings safely, call a friend online',
    canonical: 'https://neuravia.in/companions'
  },
  '/professional-support': {
    title: 'Verified Clinical Psychologists & Psychotherapists in India | Neuravia',
    description: 'Consult certified mental health professionals specializing in Depression, Anxiety, OCD, PTSD, ADHD & Relational Trauma. Audio consultations with total privacy.',
    keywords: 'licensed clinical psychologist india, psychotherapist online consultation, marriage counselor india, psychiatric counseling audio, best psychotherapist delhi bangalore',
    canonical: 'https://neuravia.in/professional-support'
  },
  '/categories': {
    title: 'Therapy & Conversation Categories | Relationship, Anxiety, Family & Healing',
    description: 'Browse specialized conversation categories: Just Talk, Relationship Advice, Family Dynamics, Career Burnout, College Life, and Mindfulness Healing.',
    keywords: 'relationship advice therapy, family counseling online, career stress counselor, mindfulness emotional healing, student anxiety consultation',
    canonical: 'https://neuravia.in/categories'
  },
  '/pricing': {
    title: 'Affordable Online Therapy & Emotional Support Plans | Neuravia Pricing',
    description: 'Transparent pricing with zero hidden fees. Single session ₹499, weekly companion passes, and monthly mental health support bundles.',
    keywords: 'therapy session cost india, online counseling pricing, affordable mental health subscription, therapy rates india 499',
    canonical: 'https://neuravia.in/pricing'
  },
  '/safety': {
    title: 'Safety, Confidentiality & 24/7 Crisis Helplines | Neuravia India',
    description: '100% encrypted audio channels, zero data sharing, and immediate access to national crisis helplines (KIRAN 1800-599-0019, Tele-MANAS 14416).',
    keywords: 'mental health emergency helpline india, confidential therapy security, suicide prevention india kiran 18005990019, telemanas helpline 14416',
    canonical: 'https://neuravia.in/safety'
  },
  '/faq': {
    title: 'Frequently Asked Questions & Mental Health FAQs | Neuravia',
    description: 'Get clear answers regarding session bookings, therapist qualifications, ₹499 pricing, cancellation policies, and confidentiality.',
    keywords: 'online therapy faqs, mental health questions india, how to book therapist online, is therapy confidential',
    canonical: 'https://neuravia.in/faq'
  },
  '/about': {
    title: 'About Neuravia — Our Mission for Accessible Mental Wellness in India',
    description: 'Learn how Neuravia is breaking mental health stigma across India by connecting individuals with qualified professionals and compassionate companions.',
    keywords: 'about Neuravia, mental health startup india, compassionate listening platform, our therapy mission',
    canonical: 'https://neuravia.in/about'
  },
  '/contact': {
    title: 'Contact Neuravia Care Team | 24/7 Support & Crisis Helpline',
    description: 'Reach our dedicated care team via email, WhatsApp, or instant support ticket. 24/7 assistance for bookings and inquiries.',
    keywords: 'contact Neuravia, mental health support email, therapy customer care india',
    canonical: 'https://neuravia.in/contact'
  }
};

export default function SEOHead({ pathname = '/' }) {
  const currentMeta = pageSchemas[pathname] || pageSchemas['/'];

  useEffect(() => {
    // Update document title dynamically for Client-Side Routing
    if (typeof document !== 'undefined') {
      document.title = currentMeta.title;

      // Update meta description
      let metaDesc = document.querySelector('meta[name="description"]');
      if (!metaDesc) {
        metaDesc = document.createElement('meta');
        metaDesc.name = 'description';
        document.head.appendChild(metaDesc);
      }
      metaDesc.content = currentMeta.description;

      // Update meta keywords
      let metaKeywords = document.querySelector('meta[name="keywords"]');
      if (!metaKeywords) {
        metaKeywords = document.createElement('meta');
        metaKeywords.name = 'keywords';
        document.head.appendChild(metaKeywords);
      }
      metaKeywords.content = currentMeta.keywords;

      // Update canonical link
      let linkCanonical = document.querySelector('link[rel="canonical"]');
      if (!linkCanonical) {
        linkCanonical = document.createElement('link');
        linkCanonical.rel = 'canonical';
        document.head.appendChild(linkCanonical);
      }
      linkCanonical.href = currentMeta.canonical || `https://neuravia.in${pathname}`;
    }
  }, [pathname, currentMeta]);

  return null;
}
