import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft } from 'lucide-react';
import { useNavigate, useSearchParams } from 'react-router-dom';

import BookStepConversation from '../components/book/BookStepConversation';
import BookStepCompanion from '../components/book/BookStepCompanion';
import BookStepTime from '../components/book/BookStepTime';
import BookStepPlan from '../components/book/BookStepPlan';
import BookStepConfirm from '../components/book/BookStepConfirm';
import BookSuccess from '../components/book/BookSuccess';

const BookingPage = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const [searchParams] = useSearchParams();
  const initialCategory = searchParams.get('serviceType') || searchParams.get('category') || null;
  const initialCompanion = searchParams.get('companion') || null;

  const [bookingState, setBookingState] = useState({
    category: initialCategory,
    companion: initialCompanion,
    date: null,
    time: null,
    plan: null,
  });

  // If both category and companion are provided, skip to step 3 (Time selection)
  // If only category is provided, skip to step 2 (Companion selection)
  useEffect(() => {
    if (initialCategory && initialCompanion) {
      setStep(3);
    } else if (initialCategory) {
      setStep(2);
    }
  }, [initialCategory, initialCompanion]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [step]);

  const updateState = (key, value) => {
    setBookingState(prev => ({ ...prev, [key]: value }));
  };

  const nextStep = () => {
    if (step < 5) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
    else navigate('/how-it-works');
  };

  const confirmBooking = () => {
    setIsSuccess(true);
  };

  const isStepValid = () => {
    switch (step) {
      case 1: return !!bookingState.category;
      case 2: return !!bookingState.companion;
      case 3: return !!bookingState.date && !!bookingState.time;
      case 4: return !!bookingState.plan;
      case 5: return true;
      default: return false;
    }
  };

  if (isSuccess) {
    return (
      <div className="bg-brand-950 text-white min-h-screen pt-32 pb-24 px-4 sm:px-6 flex items-center justify-center">
        <BookSuccess state={bookingState} />
      </div>
    );
  }

  return (
    <div className="bg-brand-950 text-white min-h-screen pt-24 pb-32">
      
      {/* Header & Stepper */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 relative z-10">
        <button 
          onClick={prevStep}
          className="flex items-center text-gray-400 hover:text-white transition-colors mb-8"
        >
          <ChevronLeft size={20} />
          <span>Back</span>
        </button>

        <div className="flex justify-between items-center relative">
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-0.5 bg-white/10 -z-10" />
          <div 
            className="absolute left-0 top-1/2 -translate-y-1/2 h-0.5 bg-electric-cyan -z-10 transition-all duration-500" 
            style={{ width: `${((step - 1) / 4) * 100}%` }}
          />
          
          {[1, 2, 3, 4, 5].map((s) => (
            <div 
              key={s} 
              className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-colors ${
                step >= s ? 'bg-electric-cyan text-brand-950' : 'bg-brand-900 border border-white/20 text-gray-500'
              }`}
            >
              {s}
            </div>
          ))}
        </div>
        <div className="flex justify-between mt-2 text-[10px] sm:text-xs text-gray-500 font-medium uppercase tracking-wider">
          <span className={step >= 1 ? 'text-electric-cyan' : ''}>Topic</span>
          <span className={step >= 2 ? 'text-electric-cyan' : ''}>Companion</span>
          <span className={step >= 3 ? 'text-electric-cyan' : ''}>Time</span>
          <span className={step >= 4 ? 'text-electric-cyan' : ''}>Plan</span>
          <span className={step >= 5 ? 'text-electric-cyan' : ''}>Confirm</span>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <AnimatePresence mode="wait">
          {step === 1 && (
            <BookStepConversation 
              key="step1" 
              selectedCategory={bookingState.category} 
              onSelect={(cat) => updateState('category', cat)} 
            />
          )}
          {step === 2 && (
            <BookStepCompanion 
              key="step2" 
              selectedCategory={bookingState.category}
              selectedCompanion={bookingState.companion}
              onSelect={(comp) => updateState('companion', comp)} 
            />
          )}
          {step === 3 && (
            <BookStepTime 
              key="step3" 
              selectedDate={bookingState.date}
              selectedTime={bookingState.time}
              onSelectDate={(d) => updateState('date', d)}
              onSelectTime={(t) => updateState('time', t)} 
            />
          )}
          {step === 4 && (
            <BookStepPlan 
              key="step4" 
              selectedPlan={bookingState.plan}
              onSelect={(p) => updateState('plan', p)}
              isProfessional={bookingState.category === 'Professional Support'}
            />
          )}
          {step === 5 && (
            <BookStepConfirm 
              key="step5" 
              state={bookingState}
              onConfirm={confirmBooking}
            />
          )}
        </AnimatePresence>
      </div>

      {/* Sticky Bottom Bar for Continue */}
      {step < 5 && (
        <div className="fixed bottom-0 left-0 w-full bg-brand-950/90 backdrop-blur-md border-t border-white/10 p-4 z-50">
          <div className="max-w-4xl mx-auto flex justify-end">
            <button
              onClick={nextStep}
              disabled={!isStepValid()}
              className={`px-8 py-3 rounded-full font-bold transition-all ${
                isStepValid()
                  ? 'bg-white text-brand-950 hover:bg-gray-100'
                  : 'bg-white/10 text-gray-500 cursor-not-allowed'
              }`}
            >
              Continue
            </button>
          </div>
        </div>
      )}

    </div>
  );
};

export default BookingPage;
