import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ShieldCheck, Phone, VideoOff, Flag, Loader2 } from 'lucide-react';
import { companions } from '../../data/companionsData';
import { professionalsDemo } from '../../data/professionalDemo';

import { auth } from '../../firebase';

const loadRazorpayScript = () => {
  return new Promise((resolve) => {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });
};

const BookStepConfirm = ({ state, onConfirm }) => {
  const companion = [...companions, ...professionalsDemo].find((profile) => profile.id === state.companion);
  const [isProcessing, setIsProcessing] = useState(false);
  const professionalAmount = Number(companion?.pricing?.replace(/[^\d]/g, '')) || 1499;
  const sessionDuration = state.plan === 'Professional Session'
    ? companion?.sessionDuration || '60 Minutes'
    : '60 Minutes';

  // Determine amount based on selected plan
  const getAmountForPlan = (planName) => {
    if (planName?.includes('1 Session') || planName?.includes('First Session') || planName === 'First Session') return 499;
    if (planName?.includes('Professional Session')) return professionalAmount;
    if (planName?.includes('6 Session') || planName?.includes('Starter Pack')) return 2500;
    if (planName?.includes('12 Session') || planName?.includes('Growth Pack') || planName?.includes('Monthly')) return 4500;
    if (planName?.includes('20 Session') || planName?.includes('Transformation')) return 8000;
    if (planName?.includes('25 Session') || planName?.includes('Complete Wellness') || planName?.includes('Yearly')) return 10000;
    if (planName === 'Extra Time') return 199;
    return 499; // Default to single session price
  };

  const saveBookingToDatabase = async (paymentId = 'pay_demo_success') => {
    try {
      const user = auth.currentUser;
      const bookingData = {
        userId: user?.uid || 'guest_user',
        userEmail: user?.email || 'user@neuravia.in',
        userName: user?.displayName || 'Valued Member',
        companionId: companion?.id || state.companion,
        companionName: companion?.name || 'Specialist',
        companionImage: companion?.image || '',
        category: state.category || 'Just Talk',
        date: state.date || 'Today',
        time: state.time || 'Immediate',
        plan: state.plan || 'First Session',
        duration: sessionDuration,
        amount: getAmountForPlan(state.plan),
        paymentId: paymentId,
        status: 'Scheduled',
        createdAt: serverTimestamp ? serverTimestamp() : new Date().toISOString()
      };

      // Save to localStorage so offline/instant dashboard access works immediately
      const existing = JSON.parse(localStorage.getItem('never_alone_bookings') || '[]');
      localStorage.setItem('never_alone_bookings', JSON.stringify([bookingData, ...existing]));
    } catch (err) {
      console.error("Booking save error:", err);
    }
  };

  const handlePayment = async () => {
    setIsProcessing(true);
    
    const res = await loadRazorpayScript();
    
    if (!res) {
      // Fallback: save booking and confirm
      await saveBookingToDatabase('pay_manual_success');
      setIsProcessing(false);
      onConfirm();
      return;
    }

    const amount = getAmountForPlan(state.plan);
    const keyId = process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || "rzp_test_Tg0jCOdf4BJnpp";

    const options = {
      key: keyId,
      amount: amount * 100, // Amount in paise
      currency: "INR",
      name: "Neuravia",
      description: `${state.plan || 'Session'} - Conversation with ${companion?.name || 'Specialist'}`,
      image: "/logo.jpeg",
      handler: async function (response) {
        // Payment successful -> Save to Database
        await saveBookingToDatabase(response?.razorpay_payment_id || 'pay_rzp_success');
        setIsProcessing(false);
        onConfirm(); // Proceed to success screen
      },
      prefill: {
        name: "Valued Member",
        email: "user@neuravia.in",
        contact: "9999999999"
      },
      theme: {
        color: "#0891b2" // Neuravia teal-cyan
      },
      modal: {
        ondismiss: function() {
          setIsProcessing(false);
        }
      }
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="max-w-2xl mx-auto"
    >
      <div className="text-center mb-8">
        <h2 className="text-3xl font-semibold text-white mb-2">Everything looks good 💗</h2>
        <p className="text-gray-400">Review your conversation details and complete payment.</p>
      </div>

      <div className="bg-brand-900 border border-white/10 rounded-3xl p-6 md:p-8 shadow-2xl relative overflow-hidden">
        
        {/* Glow effect */}
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-electric-DEFAULT/20 rounded-full blur-[60px] pointer-events-none" />

        <div className="flex items-center gap-4 mb-6 pb-6 border-b border-white/5">
          <img src={companion?.image} alt={companion?.name} className="w-16 h-16 rounded-xl object-cover" />
          <div>
            <div className="flex items-center gap-1">
              <h3 className="text-xl font-semibold text-white">{companion?.name}</h3>
              {(companion?.isVerified || companion?.verified) && <CheckCircle2 size={16} className="text-electric-cyan" />}
            </div>
            <p className="text-sm text-romantic-pink">{state.category}</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-y-6 gap-x-4 mb-8">
          <div>
            <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold mb-1">Date</p>
            <p className="text-white font-medium">{state.date}</p>
          </div>
          <div>
            <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold mb-1">Time</p>
            <p className="text-white font-medium">{state.time}</p>
          </div>
          <div>
            <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold mb-1">Duration</p>
            <p className="text-white font-medium">{sessionDuration}</p>
          </div>
          <div>
            <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold mb-1">Call Type</p>
            <p className="text-white font-medium">Private Phone Call</p>
          </div>
          <div className="col-span-2 flex justify-between items-center border-t border-white/5 mt-2 pt-6">
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold mb-1">Plan selected</p>
              <p className="text-white font-medium">{state.plan}</p>
            </div>
            <div className="text-right">
              <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold mb-1">Total Amount</p>
              <p className="text-2xl font-bold text-electric-cyan">₹{getAmountForPlan(state.plan)}</p>
            </div>
          </div>
        </div>

        <div className="bg-white/5 border border-white/5 rounded-2xl p-4 mb-8">
          <div className="flex flex-wrap justify-between gap-4 text-xs font-medium text-gray-400">
            <div className="flex items-center gap-1"><VideoOff size={14} className="text-gray-500" /> No Video</div>
            <div className="flex items-center gap-1"><Phone size={14} className="text-gray-500" /> Private Number</div>
            <div className="flex items-center gap-1"><ShieldCheck size={14} className="text-gray-500" /> 18+</div>
            <div className="flex items-center gap-1"><Flag size={14} className="text-gray-500" /> Report Available</div>
          </div>
        </div>

        <button 
          onClick={handlePayment}
          disabled={isProcessing}
          className="w-full py-4 rounded-xl text-brand-950 bg-gradient-to-r from-electric-cyan to-electric-DEFAULT font-bold hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all text-lg flex items-center justify-center gap-2 disabled:opacity-70"
        >
          {isProcessing ? (
            <>
              <Loader2 size={20} className="animate-spin" />
              Processing...
            </>
          ) : (
            `Pay ₹${getAmountForPlan(state.plan)} securely`
          )}
        </button>

      </div>
    </motion.div>
  );
};

export default BookStepConfirm;
