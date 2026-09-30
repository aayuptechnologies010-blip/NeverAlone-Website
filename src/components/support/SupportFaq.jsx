import React, { useState } from 'react';
import FaqAccordion from '../faq/FaqAccordion';

const commonQuestions = [
  {
    question: "How do I reschedule a conversation?",
    answer: "Open My Conversations from your dashboard, select the upcoming conversation and choose Reschedule."
  },
  {
    question: "How do I add more time?",
    answer: "An additional 60 minutes can be added for ₹199, subject to the relevant availability."
  },
  {
    question: "Can I report something that happened during a call?",
    answer: "Yes. Reporting should remain available during and after a conversation."
  },
  {
    question: "Are companions therapists?",
    answer: "No. Regular companions provide conversation, listening and friendly general perspectives. Professional Support is a separate service."
  },
  {
    question: "Does Neuravia offer video calls?",
    answer: "No. Neuravia uses phone calls only."
  },
  {
    question: "Where can I find my upcoming conversations?",
    answer: "Open your customer dashboard and go to My Conversations."
  }
];

export default function SupportFaq() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="mb-10">
      <h3 className="text-xl font-semibold text-white mb-6">
        Common Support Questions
      </h3>
      <div>
        {commonQuestions.map((faq, index) => (
          <FaqAccordion
            key={index}
            faq={faq}
            isOpen={openIndex === index}
            onToggle={() => setOpenIndex(openIndex === index ? null : index)}
          />
        ))}
      </div>
    </div>
  );
}
