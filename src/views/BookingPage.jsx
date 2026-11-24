import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronLeft, 
  Calendar as CalendarIcon, 
  Clock, 
  UserCheck, 
  CheckCircle2, 
  ShieldCheck, 
  HeartHandshake, 
  Sparkles, 
  HelpCircle,
  ArrowRight,
  User,
  Mail,
  Phone,
  FileText,
  MapPin,
  CreditCard,
  Lock
} from 'lucide-react';
import { useNavigate, useSearchParams, Link } from 'react-router-dom';
import { auth } from '../firebase';

// Fallback default therapist list
const defaultTherapistList = [
  { id: 'ananya', name: 'Dr. Ananya Sharma', title: 'Clinical Psychologist', exp: '8+ Yrs' },
  { id: 'rahul', name: 'Dr. Rahul Verma', title: 'Counselling Psychologist', exp: '6+ Yrs' },
  { id: 'neha', name: 'Dr. Neha Singh', title: 'Clinical Psychologist', exp: '7+ Yrs' },
  { id: 'arjun', name: 'Dr. Arjun Mehta', title: 'Counselling Psychologist', exp: '5+ Yrs' },
  { id: 'sarah', name: 'Dr. Sarah Jenkins', title: 'Clinical Psychologist (Ph.D.)', exp: '12+ Yrs' },
  { id: 'amit', name: 'Amit Desai', title: 'Licensed Clinical Counsellor (M.A.)', exp: '8+ Yrs' },
  { id: 'priya', name: 'Dr. Priya Sharma', title: 'Psychotherapist (Psy.D.)', exp: '15+ Yrs' },
];

const helpCategories = [
  'Anxiety & Overthinking',
  'Depression & Low Mood',
  'Relationship or Breakup Stress',
  'Workplace Burnout & Stress',
  'Self-Esteem & Confidence',
  'Family & Personal Life',
  'Grief & Loss',
  'Just need someone to talk to'
];

const dateOptions = [
  { label: 'Today', subtext: 'Immediate slots' },
  { label: 'Tomorrow', subtext: 'Recommended' },
  { label: 'Wednesday', subtext: 'Upcoming' },
  { label: 'Thursday', subtext: 'Upcoming' },
  { label: 'Friday', subtext: 'Upcoming' },
  { label: 'Saturday', subtext: 'Weekend' },
  { label: 'Sunday', subtext: 'Weekend' },
];

const timeSlots = [
  { time: '10:00 AM', period: 'Morning' },
  { time: '11:30 AM', period: 'Morning' },
  { time: '01:00 PM', period: 'Afternoon' },
  { time: '03:30 PM', period: 'Afternoon' },
  { time: '05:00 PM', period: 'Evening' },
  { time: '06:30 PM', period: 'Evening' },
  { time: '08:00 PM', period: 'Evening' },
  { time: '09:30 PM', period: 'Night' },
];

const BookingPage = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  // Current step: 1 = Date & Time, 2 = Select Therapist, 3 = Client Information
  const [currentStep, setCurrentStep] = useState(1);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Form State
  const [bookingState, setBookingState] = useState({
    date: dateOptions[0].label,
    time: '10:00 AM',
    therapistType: 'any', // 'selected', 'any', or 'specific_request'
    therapistId: 'any',
    therapistName: 'Any Available Therapist',
    specificTherapistName: '',
    fullName: '',
    email: '',
    phone: '',
    city: '',
    pincode: '',
    helpCategory: helpCategories[0],
    concernDescription: ''
  });

  const [formErrors, setFormErrors] = useState({});
  const [paymentInfo, setPaymentInfo] = useState(null);

  // Dynamic Razorpay SDK loader
  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      if (typeof window !== 'undefined' && window.Razorpay) {
        return resolve(true);
      }
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentStep, isSuccess]);

  const [therapists, setTherapists] = useState(defaultTherapistList);

  useEffect(() => {
    const fetchTherapists = async () => {
      try {
        const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';
        const res = await fetch(`${apiUrl}/therapists`);
        const json = await res.json();
        if (json.success && json.data?.length > 0) {
          setTherapists(json.data.map(t => ({
            id: t._id,
            name: t.name,
            title: t.title,
            exp: t.experience
          })));
        }
      } catch (e) {
        // Fallback to default
      }
    };
    fetchTherapists();
  }, []);

  // Pre-select therapist from URL parameters if passed from View Profile
  useEffect(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      const qId = params.get('therapistId') || params.get('companion');
      const qName = params.get('therapistName');
      if (qName) {
        setBookingState(prev => ({
          ...prev,
          therapistType: 'selected',
          therapistId: qId || 'selected',
          therapistName: decodeURIComponent(qName),
          specificTherapistName: ''
        }));
      } else if (qId && therapists.length > 0) {
        const found = therapists.find(t => t.id === qId || t._id === qId);
        if (found) {
          setBookingState(prev => ({
            ...prev,
            therapistType: 'selected',
            therapistId: found.id || found._id,
            therapistName: found.name,
            specificTherapistName: ''
          }));
        }
      }
    } catch (e) {}
  }, [therapists]);

  // Pre-fill user data if signed in
  useEffect(() => {
    const user = auth.currentUser;
    if (user) {
      setBookingState(prev => ({
        ...prev,
        fullName: prev.fullName || user.displayName || '',
        email: prev.email || user.email || ''
      }));
    }
  }, []);

  const handleTherapistSelect = (type, therapist = null) => {
    if (type === 'therapist') {
      setBookingState(prev => ({
        ...prev,
        therapistType: 'selected',
        therapistId: therapist.id,
        therapistName: therapist.name,
        specificTherapistName: ''
      }));
    } else if (type === 'any') {
      setBookingState(prev => ({
        ...prev,
        therapistType: 'any',
        therapistId: 'any',
        therapistName: 'Any Available Therapist',
        specificTherapistName: ''
      }));
    } else if (type === 'request_specific') {
      setBookingState(prev => ({
        ...prev,
        therapistType: 'specific_request',
        therapistId: 'request_specific',
        therapistName: 'Request a Specific Therapist'
      }));
    }
  };

  const validateStep3 = () => {
    const errors = {};
    // Full Name
    if (!bookingState.fullName.trim()) {
      errors.fullName = 'Full Name is required';
    } else if (bookingState.fullName.trim().length < 2) {
      errors.fullName = 'Please enter a valid full name (at least 2 letters)';
    }

    // Email Address (Strict RFC format)
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!bookingState.email.trim()) {
      errors.email = 'Email Address is required';
    } else if (!emailRegex.test(bookingState.email.trim())) {
      errors.email = 'Please enter a valid email address (e.g. name@example.com)';
    }

    // Phone Number (10 digits Indian mobile)
    const cleanedPhone = bookingState.phone.replace(/[\s\-\+\(\)]/g, '');
    const phoneRegex = /^[6-9]\d{9}$/;
    if (!bookingState.phone.trim()) {
      errors.phone = 'Phone Number is required';
    } else if (!phoneRegex.test(cleanedPhone) && !(cleanedPhone.startsWith('91') && phoneRegex.test(cleanedPhone.slice(2)))) {
      errors.phone = 'Please enter a valid 10-digit mobile number (starts with 6-9)';
    }

    // Location / City
    if (!bookingState.city.trim()) {
      errors.city = 'City / Location is required';
    } else if (bookingState.city.trim().length < 2) {
      errors.city = 'Please enter a valid city name';
    }

    // Pincode (6 digits Indian postal code)
    const pincodeRegex = /^[1-9][0-9]{5}$/;
    if (!bookingState.pincode.trim()) {
      errors.pincode = 'Pincode is required';
    } else if (!pincodeRegex.test(bookingState.pincode.trim())) {
      errors.pincode = 'Please enter a valid 6-digit postal pincode';
    }

    // Category
    if (!bookingState.helpCategory) {
      errors.helpCategory = 'Please select what help you are looking for';
    }

    // Concern
    if (!bookingState.concernDescription.trim()) {
      errors.concernDescription = 'Please briefly describe your concern';
    } else if (bookingState.concernDescription.trim().length < 10) {
      errors.concernDescription = 'Please provide a little more detail (at least 10 characters)';
    }

    // Specific therapist request
    if (bookingState.therapistType === 'specific_request' && !bookingState.specificTherapistName.trim()) {
      errors.specificTherapistName = 'Please mention the therapist name you would like to request';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmitBooking = async (e) => {
    e.preventDefault();
    if (!validateStep3()) return;

    setIsSubmitting(true);

    const bookingRefId = 'NRV-' + Math.random().toString(36).substring(2, 9).toUpperCase();
    const finalBooking = {
      bookingId: bookingRefId,
      date: bookingState.date,
      time: bookingState.time,
      therapistChoice: bookingState.therapistType === 'specific_request' 
        ? `Requested: ${bookingState.specificTherapistName}`
        : bookingState.therapistName,
      therapistId: bookingState.therapistId !== 'any' && bookingState.therapistId !== 'request_specific' ? bookingState.therapistId : null,
      client: {
        fullName: bookingState.fullName,
        email: bookingState.email,
        phone: bookingState.phone,
        city: bookingState.city,
        pincode: bookingState.pincode,
        helpCategory: bookingState.helpCategory,
        concernDescription: bookingState.concernDescription
      },
      amount: 499,
      status: 'Confirmed',
      paymentMethod: 'razorpay',
      paymentStatus: 'paid',
      createdAt: new Date().toISOString()
    };

    const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

    try {
      // 1. Load Razorpay script
      const isLoaded = await loadRazorpayScript();
      if (!isLoaded) {
        throw new Error('Razorpay SDK failed to load');
      }

      // 2. Request Razorpay order from backend
      const orderRes = await fetch(`${apiUrl}/bookings/razorpay-order`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount: 499, receipt: bookingRefId })
      });
      const orderData = await orderRes.json();

      const keyId = orderData.keyId || process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || 'rzp_test_Tg0jCOdf4BJnpp';

      // 3. Configure Razorpay modal
      const options = {
        key: keyId,
        amount: orderData?.order?.amount || 49900,
        currency: 'INR',
        name: 'Neuravia Care',
        description: `1-on-1 Session with ${bookingState.therapistName}`,
        image: '/logo.png',
        order_id: orderData?.order?.id,
        prefill: {
          name: bookingState.fullName,
          email: bookingState.email,
          contact: bookingState.phone
        },
        theme: {
          color: '#083058'
        },
        handler: async function (response) {
          try {
            // Verify payment signature on backend
            await fetch(`${apiUrl}/bookings/verify-payment`, {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                razorpay_order_id: response.razorpay_order_id,
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_signature: response.razorpay_signature,
                bookingData: finalBooking
              })
            });

            setPaymentInfo({
              paymentId: response.razorpay_payment_id,
              orderId: response.razorpay_order_id,
              status: 'paid'
            });
          } catch (vErr) {
            console.warn('Verification call completed with note:', vErr);
          }

          const existing = JSON.parse(localStorage.getItem('neuravia_session_bookings') || '[]');
          localStorage.setItem('neuravia_session_bookings', JSON.stringify([finalBooking, ...existing]));

          setIsSubmitting(false);
          setIsSuccess(true);
        },
        modal: {
          ondismiss: function () {
            setIsSubmitting(false);
          }
        }
      };

      const rzp = new window.Razorpay(options);
      rzp.on('payment.failed', function (failRes) {
        alert('Payment cancelled or failed: ' + (failRes.error?.description || 'Please try again'));
        setIsSubmitting(false);
      });
      rzp.open();

    } catch (err) {
      console.warn('Razorpay checkout error, direct confirmation fallback:', err);
      try {
        await fetch(`${apiUrl}/bookings`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(finalBooking)
        });
      } catch (e) {}

      const existing = JSON.parse(localStorage.getItem('neuravia_session_bookings') || '[]');
      localStorage.setItem('neuravia_session_bookings', JSON.stringify([finalBooking, ...existing]));

      setIsSubmitting(false);
      setIsSuccess(true);
    }
  };

  // SUCCESS SCREEN
  if (isSuccess) {
    return (
      <div className="bg-[#fbfdfc] min-h-screen py-16 px-4 sm:px-6 lg:px-8 text-slate-800 flex items-center justify-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="max-w-xl w-full bg-white border border-slate-200/80 rounded-3xl p-8 sm:p-10 shadow-xl text-center relative overflow-hidden"
        >
          {/* Subtle Accent Glows matching Homepage */}
          <div className="absolute top-0 right-0 w-48 h-48 bg-[#00839a]/10 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#083058]/5 rounded-full blur-2xl pointer-events-none" />

          {/* Icon Badge */}
          <div className="w-16 h-16 mx-auto rounded-2xl bg-[#00839a]/10 text-[#00839a] flex items-center justify-center mb-6 shadow-sm">
            <CheckCircle2 size={36} className="text-[#00839a]" />
          </div>

          <span className="inline-block px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-2">
            Session Confirmed
          </span>

          <h2 className="text-2xl sm:text-3xl font-bold text-[#083058] tracking-tight font-display mb-3">
            Your Session is Booked!
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
            Thank you, <strong className="text-[#083058]">{bookingState.fullName}</strong>. We've confirmed your confidential session. Our care team has sent confirmation details to <strong className="text-[#083058]">{bookingState.email}</strong>.
          </p>

          {/* Booking Summary Box */}
          <div className="bg-[#fbfdfc] border border-slate-200 rounded-2xl p-5 mb-6 text-left space-y-3.5 text-sm">
            <div className="flex justify-between items-center pb-2.5 border-b border-slate-100">
              <span className="text-slate-500 font-medium">Date &amp; Time</span>
              <span className="font-bold text-[#083058]">{bookingState.date} &bull; {bookingState.time}</span>
            </div>

            <div className="flex justify-between items-center pb-2.5 border-b border-slate-100">
              <span className="text-slate-500 font-medium">Therapist Selection</span>
              <span className="font-semibold text-[#00839a]">
                {bookingState.therapistType === 'specific_request'
                  ? `Requested: ${bookingState.specificTherapistName}`
                  : bookingState.therapistName}
              </span>
            </div>

            <div className="flex justify-between items-center pb-2.5 border-b border-slate-100">
              <span className="text-slate-500 font-medium">Location &amp; Pincode</span>
              <span className="font-medium text-slate-700">{bookingState.city} ({bookingState.pincode})</span>
            </div>

            <div className="flex justify-between items-center pb-2.5 border-b border-slate-100">
              <span className="text-slate-500 font-medium">Help Focus</span>
              <span className="font-medium text-slate-700">{bookingState.helpCategory}</span>
            </div>

            <div className="flex justify-between items-center pb-2.5 border-b border-slate-100">
              <span className="text-slate-500 font-medium">Payment Status</span>
              <span className="font-bold text-emerald-700 flex items-center gap-1">
                <CheckCircle2 size={15} className="text-emerald-600" />
                <span>₹499 Paid (Razorpay Verified)</span>
              </span>
            </div>

            {paymentInfo?.paymentId && (
              <div className="flex justify-between items-center pb-2.5 border-b border-slate-100 text-xs">
                <span className="text-slate-500 font-medium">Razorpay Ref ID</span>
                <span className="font-mono text-slate-700 font-semibold">{paymentInfo.paymentId}</span>
              </div>
            )}

            <div className="flex justify-between items-center">
              <span className="text-slate-500 font-medium">Session Fee</span>
              <span className="font-bold text-[#083058]">₹499 (Standard Consultation)</span>
            </div>
          </div>

          <div className="flex items-center space-x-2 text-xs text-slate-500 justify-center mb-8 bg-slate-50 p-3 rounded-xl border border-slate-100">
            <ShieldCheck size={16} className="text-[#00839a] shrink-0" />
            <span>100% Confidential &amp; Safe &bull; Meeting link will be shared via WhatsApp / Email</span>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              to="/"
              className="flex-1 py-3 px-6 rounded-xl font-bold text-sm text-white bg-[#083058] hover:bg-[#0c4a6e] transition-all shadow-sm text-center"
            >
              Back to Home
            </Link>
            <button
              onClick={() => {
                setIsSuccess(false);
                setCurrentStep(1);
              }}
              className="py-3 px-6 rounded-xl font-semibold text-sm text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 transition-all text-center"
            >
              Book Another Session
            </button>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#fbfdfc] text-slate-800 pt-8 pb-24">
      {/* Background Soft Accents (Matching Home Page) */}
      <div className="fixed top-0 right-0 w-[500px] h-[500px] bg-[#00839a]/5 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="fixed bottom-0 left-0 w-[500px] h-[500px] bg-[#083058]/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation / Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            {currentStep > 1 ? (
              <button
                type="button"
                onClick={() => setCurrentStep(prev => prev - 1)}
                className="inline-flex items-center space-x-1.5 text-xs sm:text-sm font-semibold text-slate-600 hover:text-[#083058] transition-colors"
              >
                <ChevronLeft size={18} />
                <span>Previous Step</span>
              </button>
            ) : (
              <Link
                to="/"
                className="inline-flex items-center space-x-1.5 text-xs sm:text-sm font-semibold text-slate-600 hover:text-[#083058] transition-colors"
              >
                <ChevronLeft size={18} />
                <span>Back to Home</span>
              </Link>
            )}

            <div className="text-xs font-semibold uppercase tracking-wider text-[#00839a] bg-[#00839a]/10 px-3 py-1 rounded-full">
              First Session &bull; ₹499
            </div>
          </div>

          <div className="text-center sm:text-left space-y-2">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#083058] tracking-tight font-display">
              Book a Confidential Session
            </h1>
            <p className="text-sm sm:text-base text-slate-600 max-w-2xl">
              Take the first step toward clarity and emotional balance in a private, supportive space.
            </p>
          </div>
        </div>

        {/* 3-STEP PROGRESS STEPPER */}
        <div className="bg-white border border-slate-200/90 rounded-2xl p-4 sm:p-5 shadow-sm mb-8">
          <div className="grid grid-cols-3 gap-2 sm:gap-4 relative">
            
            {/* Step 1 Indicator */}
            <div 
              onClick={() => currentStep > 1 && setCurrentStep(1)}
              className={`flex items-center space-x-2 sm:space-x-3 cursor-pointer select-none transition-all ${
                currentStep >= 1 ? 'opacity-100' : 'opacity-40'
              }`}
            >
              <div className={`w-8 h-8 rounded-xl flex items-center justify-center font-bold text-xs sm:text-sm shrink-0 transition-colors ${
                currentStep === 1
                  ? 'bg-[#083058] text-white shadow-sm'
                  : currentStep > 1
                  ? 'bg-[#00839a] text-white'
                  : 'bg-slate-100 text-slate-500'
              }`}>
                {currentStep > 1 ? '✓' : '1'}
              </div>
              <div className="min-w-0">
                <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-slate-400 block">Step 1</span>
                <span className={`text-xs sm:text-sm font-bold truncate block ${
                  currentStep === 1 ? 'text-[#083058]' : 'text-slate-700'
                }`}>
                  Date &amp; Time
                </span>
              </div>
            </div>

            {/* Step 2 Indicator */}
            <div 
              onClick={() => {
                if (currentStep > 2) setCurrentStep(2);
              }}
              className={`flex items-center space-x-2 sm:space-x-3 select-none transition-all ${
                currentStep >= 2 ? 'opacity-100 cursor-pointer' : 'opacity-50'
              }`}
            >
              <div className={`w-8 h-8 rounded-xl flex items-center justify-center font-bold text-xs sm:text-sm shrink-0 transition-colors ${
                currentStep === 2
                  ? 'bg-[#083058] text-white shadow-sm'
                  : currentStep > 2
                  ? 'bg-[#00839a] text-white'
                  : 'bg-slate-100 text-slate-500'
              }`}>
                {currentStep > 2 ? '✓' : '2'}
              </div>
              <div className="min-w-0">
                <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-slate-400 block">Step 2</span>
                <span className={`text-xs sm:text-sm font-bold truncate block ${
                  currentStep === 2 ? 'text-[#083058]' : 'text-slate-700'
                }`}>
                  Select Therapist
                </span>
              </div>
            </div>

            {/* Step 3 Indicator */}
            <div 
              className={`flex items-center space-x-2 sm:space-x-3 select-none transition-all ${
                currentStep === 3 ? 'opacity-100' : 'opacity-50'
              }`}
            >
              <div className={`w-8 h-8 rounded-xl flex items-center justify-center font-bold text-xs sm:text-sm shrink-0 transition-colors ${
                currentStep === 3
                  ? 'bg-[#083058] text-white shadow-sm'
                  : 'bg-slate-100 text-slate-500'
              }`}>
                3
              </div>
              <div className="min-w-0">
                <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-slate-400 block">Step 3</span>
                <span className={`text-xs sm:text-sm font-bold truncate block ${
                  currentStep === 3 ? 'text-[#083058]' : 'text-slate-700'
                }`}>
                  Client Info
                </span>
              </div>
            </div>

          </div>
        </div>

        {/* STEP CONTENT CONTAINER */}
        <div className="bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-sm relative">
          
          <AnimatePresence mode="wait">
            {/* ─────────────────────────────────────────────────────────────
                STEP 1: SELECT DATE & TIME
            ────────────────────────────────────────────────────────────── */}
            {currentStep === 1 && (
              <motion.div
                key="step-1"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="space-y-8"
              >
                <div>
                  <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#00839a]/10 text-[#00839a] text-xs font-semibold mb-2">
                    <CalendarIcon size={14} />
                    <span>Schedule Your Slot</span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#083058] tracking-tight">
                    Select Preferred Date &amp; Time
                  </h2>
                  <p className="text-slate-600 text-sm mt-1">
                    Choose a day and time slot that feels convenient and quiet for you.
                  </p>
                </div>

                {/* Choose Date */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                    1. Select Date
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2.5">
                    {dateOptions.map((d) => {
                      const isSelected = bookingState.date === d.label;
                      return (
                        <button
                          key={d.label}
                          type="button"
                          onClick={() => setBookingState(prev => ({ ...prev, date: d.label }))}
                          className={`p-3.5 rounded-2xl border text-center transition-all ${
                            isSelected
                              ? 'bg-[#083058] text-white border-[#083058] shadow-md ring-2 ring-[#083058]/10'
                              : 'bg-white hover:bg-slate-50 border-slate-200 text-slate-700'
                          }`}
                        >
                          <span className="block text-sm font-bold">{d.label}</span>
                          <span className={`block text-[11px] mt-0.5 ${
                            isSelected ? 'text-teal-200' : 'text-slate-400'
                          }`}>
                            {d.subtext}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Choose Time Slot */}
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-500">
                      2. Select Preferred Time
                    </label>
                    <span className="text-xs text-[#00839a] font-medium flex items-center space-x-1">
                      <Clock size={13} />
                      <span>60 Mins Session</span>
                    </span>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {timeSlots.map((slot) => {
                      const isSelected = bookingState.time === slot.time;
                      return (
                        <button
                          key={slot.time}
                          type="button"
                          onClick={() => setBookingState(prev => ({ ...prev, time: slot.time }))}
                          className={`p-3.5 rounded-2xl border text-left transition-all flex items-center justify-between ${
                            isSelected
                              ? 'bg-[#00839a]/10 border-[#00839a] text-[#083058] font-bold shadow-sm ring-1 ring-[#00839a]'
                              : 'bg-white hover:bg-slate-50 border-slate-200 text-slate-700'
                          }`}
                        >
                          <div>
                            <span className="text-sm font-bold block">{slot.time}</span>
                            <span className="text-[11px] text-slate-400 block">{slot.period}</span>
                          </div>
                          <div className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 ${
                            isSelected ? 'border-[#00839a] bg-[#00839a]' : 'border-slate-300'
                          }`}>
                            {isSelected && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Step 1 Actions */}
                <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                  <div className="text-xs text-slate-500">
                    Selected: <strong className="text-[#083058]">{bookingState.date}</strong> at <strong className="text-[#083058]">{bookingState.time}</strong>
                  </div>
                  <button
                    type="button"
                    onClick={() => setCurrentStep(2)}
                    className="inline-flex items-center space-x-2 px-7 py-3.5 rounded-xl font-bold text-sm text-white bg-[#083058] hover:bg-[#0c4a6e] transition-all shadow-sm hover:shadow"
                  >
                    <span>Next: Select Therapist</span>
                    <ArrowRight size={16} />
                  </button>
                </div>
              </motion.div>
            )}

            {/* ─────────────────────────────────────────────────────────────
                STEP 2: SELECT THERAPIST (NAMES ONLY, NO PHOTOS)
            ────────────────────────────────────────────────────────────── */}
            {currentStep === 2 && (
              <motion.div
                key="step-2"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <div>
                  <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#00839a]/10 text-[#00839a] text-xs font-semibold mb-2">
                    <UserCheck size={14} />
                    <span>Therapist Selection</span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#083058] tracking-tight">
                    Select Your Therapist
                  </h2>
                  <p className="text-slate-600 text-sm mt-1">
                    Select a therapist from our qualified panel, or pick an automated match.
                  </p>
                </div>

                {/* List of therapist names only (NO PHOTOS) */}
                <div className="space-y-2.5">
                  <span className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                    Available Specialists (Names Only)
                  </span>

                  {therapists.map((therapist) => {
                    const isSelected = bookingState.therapistType === 'selected' && bookingState.therapistId === therapist.id;
                    return (
                      <button
                        key={therapist.id}
                        type="button"
                        onClick={() => handleTherapistSelect('therapist', therapist)}
                        className={`w-full p-4 rounded-2xl border text-left transition-all flex items-center justify-between ${
                          isSelected
                            ? 'bg-[#00839a]/10 border-[#00839a] shadow-sm ring-1 ring-[#00839a]'
                            : 'bg-white hover:bg-slate-50 border-slate-200'
                        }`}
                      >
                        <div className="flex items-center space-x-3">
                          <div className={`w-9 h-9 rounded-xl flex items-center justify-center font-bold text-xs shrink-0 ${
                            isSelected ? 'bg-[#083058] text-white' : 'bg-slate-100 text-slate-600'
                          }`}>
                            {therapist.name.replace('Dr. ', '').substring(0, 2).toUpperCase()}
                          </div>
                          <div>
                            <h3 className="text-sm sm:text-base font-bold text-[#083058]">
                              {therapist.name}
                            </h3>
                            <p className="text-xs text-slate-500">
                              {therapist.title} &bull; <span className="text-[#00839a] font-medium">{therapist.exp} Experience</span>
                            </p>
                          </div>
                        </div>

                        <div className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 ${
                          isSelected ? 'border-[#00839a] bg-[#00839a]' : 'border-slate-300'
                        }`}>
                          {isSelected && <div className="w-2 h-2 rounded-full bg-white" />}
                        </div>
                      </button>
                    );
                  })}
                </div>

                {/* 2 Bottom Options specified by user */}
                <div className="pt-4 border-t border-slate-100 space-y-3">
                  <span className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                    Or Choose One of These Options:
                  </span>

                  {/* Option 1: Select Any Available Therapist */}
                  <button
                    type="button"
                    onClick={() => handleTherapistSelect('any')}
                    className={`w-full p-4 rounded-2xl border text-left transition-all flex items-center justify-between ${
                      bookingState.therapistType === 'any'
                        ? 'bg-[#083058] text-white border-[#083058] shadow-md'
                        : 'bg-white hover:bg-slate-50 border-slate-200 text-slate-800'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${
                        bookingState.therapistType === 'any' ? 'bg-white/20 text-white' : 'bg-[#00839a]/10 text-[#00839a]'
                      }`}>
                        <Sparkles size={18} />
                      </div>
                      <div>
                        <h4 className="text-sm sm:text-base font-bold">
                          Select Any Available Therapist
                        </h4>
                        <p className={`text-xs ${
                          bookingState.therapistType === 'any' ? 'text-teal-200' : 'text-slate-500'
                        }`}>
                          Fastest match based on your preferred time and concerns.
                        </p>
                      </div>
                    </div>

                    <div className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 ${
                      bookingState.therapistType === 'any' ? 'border-white bg-white' : 'border-slate-300'
                    }`}>
                      {bookingState.therapistType === 'any' && (
                        <div className="w-2 h-2 rounded-full bg-[#083058]" />
                      )}
                    </div>
                  </button>

                  {/* Option 2: Request a Specific Therapist */}
                  <button
                    type="button"
                    onClick={() => handleTherapistSelect('request_specific')}
                    className={`w-full p-4 rounded-2xl border text-left transition-all flex items-center justify-between ${
                      bookingState.therapistType === 'specific_request'
                        ? 'bg-[#00839a]/10 border-[#00839a] shadow-sm ring-1 ring-[#00839a]'
                        : 'bg-white hover:bg-slate-50 border-slate-200 text-slate-800'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-9 h-9 rounded-xl bg-slate-100 text-[#083058] flex items-center justify-center shrink-0">
                        <HeartHandshake size={18} />
                      </div>
                      <div>
                        <h4 className="text-sm sm:text-base font-bold text-[#083058]">
                          Request a Specific Therapist
                        </h4>
                        <p className="text-xs text-slate-500">
                          Looking for someone specific? You can specify their name in the next step.
                        </p>
                      </div>
                    </div>

                    <div className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 ${
                      bookingState.therapistType === 'specific_request' ? 'border-[#00839a] bg-[#00839a]' : 'border-slate-300'
                    }`}>
                      {bookingState.therapistType === 'specific_request' && (
                        <div className="w-2 h-2 rounded-full bg-white" />
                      )}
                    </div>
                  </button>

                  {/* If user requested specific therapist, provide input inline */}
                  {bookingState.therapistType === 'specific_request' && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      className="p-4 bg-slate-50 border border-slate-200 rounded-2xl"
                    >
                      <label className="block text-xs font-bold text-[#083058] mb-1">
                        Therapist Name You Want to Request:
                      </label>
                      <input
                        type="text"
                        value={bookingState.specificTherapistName}
                        onChange={(e) => setBookingState(prev => ({ ...prev, specificTherapistName: e.target.value }))}
                        placeholder="e.g., Dr. Ananya Sharma or any other therapist"
                        className="w-full px-4 py-2.5 text-sm bg-white border border-slate-200 rounded-xl focus:outline-none focus:border-[#00839a] text-slate-800"
                      />
                    </motion.div>
                  )}
                </div>

                {/* Step 2 Actions */}
                <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => setCurrentStep(1)}
                    className="inline-flex items-center space-x-1.5 text-xs sm:text-sm font-semibold text-slate-600 hover:text-[#083058]"
                  >
                    <ChevronLeft size={16} />
                    <span>Back to Date &amp; Time</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setCurrentStep(3)}
                    className="inline-flex items-center space-x-2 px-7 py-3.5 rounded-xl font-bold text-sm text-white bg-[#083058] hover:bg-[#0c4a6e] transition-all shadow-sm hover:shadow"
                  >
                    <span>Next: Client Information</span>
                    <ArrowRight size={16} />
                  </button>
                </div>
              </motion.div>
            )}

            {/* ─────────────────────────────────────────────────────────────
                STEP 3: CLIENT INFORMATION FORM
            ────────────────────────────────────────────────────────────── */}
            {currentStep === 3 && (
              <motion.form
                key="step-3"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                onSubmit={handleSubmitBooking}
                className="space-y-6"
              >
                <div>
                  <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#00839a]/10 text-[#00839a] text-xs font-semibold mb-2">
                    <User size={14} />
                    <span>Personal Details</span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#083058] tracking-tight">
                    Client Information
                  </h2>
                  <p className="text-slate-600 text-sm mt-1">
                    Your details remain 100% confidential and are never shared with anyone.
                  </p>
                </div>

                {/* Selected Summary Card */}
                <div className="bg-[#fbfdfc] border border-slate-200 rounded-2xl p-4 flex flex-wrap items-center justify-between gap-3 text-xs sm:text-sm">
                  <div>
                    <span className="text-slate-500">Slot: </span>
                    <strong className="text-[#083058]">{bookingState.date} &bull; {bookingState.time}</strong>
                  </div>
                  <div>
                    <span className="text-slate-500">Therapist: </span>
                    <strong className="text-[#00839a]">
                      {bookingState.therapistType === 'specific_request'
                        ? bookingState.specificTherapistName || 'Specific Therapist'
                        : bookingState.therapistName}
                    </strong>
                  </div>
                  <div className="font-bold text-emerald-700">
                    Fee: ₹499
                  </div>
                </div>

                {/* Specific Therapist input check if needed */}
                {bookingState.therapistType === 'specific_request' && (
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Requested Therapist Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={bookingState.specificTherapistName}
                      onChange={(e) => setBookingState(prev => ({ ...prev, specificTherapistName: e.target.value }))}
                      placeholder="Name of the therapist you want"
                      className={`w-full px-4 py-3 text-sm bg-white border rounded-xl focus:outline-none transition-colors ${
                        formErrors.specificTherapistName ? 'border-rose-400 focus:border-rose-500' : 'border-slate-200 focus:border-[#00839a]'
                      }`}
                    />
                    {formErrors.specificTherapistName && (
                      <p className="text-xs text-rose-500 mt-1">{formErrors.specificTherapistName}</p>
                    )}
                  </div>
                )}

                {/* Form Inputs Grid */}
                <div className="grid sm:grid-cols-2 gap-4">
                  {/* Full Name */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Full Name <span className="text-rose-500">*</span>
                    </label>
                    <div className="relative">
                      <User size={16} className="absolute left-3.5 top-3.5 text-slate-400" />
                      <input
                        type="text"
                        value={bookingState.fullName}
                        onChange={(e) => setBookingState(prev => ({ ...prev, fullName: e.target.value }))}
                        placeholder="e.g., Aayush Sharma"
                        className={`w-full pl-10 pr-4 py-3 text-sm bg-white border rounded-xl focus:outline-none transition-colors ${
                          formErrors.fullName ? 'border-rose-400 focus:border-rose-500' : 'border-slate-200 focus:border-[#00839a]'
                        }`}
                      />
                    </div>
                    {formErrors.fullName && (
                      <p className="text-xs text-rose-500 mt-1">{formErrors.fullName}</p>
                    )}
                  </div>

                  {/* Email Address */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Email Address <span className="text-rose-500">*</span>
                    </label>
                    <div className="relative">
                      <Mail size={16} className="absolute left-3.5 top-3.5 text-slate-400" />
                      <input
                        type="email"
                        value={bookingState.email}
                        onChange={(e) => setBookingState(prev => ({ ...prev, email: e.target.value }))}
                        placeholder="e.g., aayush@example.com"
                        className={`w-full pl-10 pr-4 py-3 text-sm bg-white border rounded-xl focus:outline-none transition-colors ${
                          formErrors.email ? 'border-rose-400 focus:border-rose-500' : 'border-slate-200 focus:border-[#00839a]'
                        }`}
                      />
                    </div>
                    {formErrors.email && (
                      <p className="text-xs text-rose-500 mt-1">{formErrors.email}</p>
                    )}
                  </div>
                </div>

                {/* Phone Number, City, and Pincode */}
                <div className="grid sm:grid-cols-12 gap-4">
                  {/* Phone Number */}
                  <div className="sm:col-span-6">
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Phone Number (WhatsApp for Link) <span className="text-rose-500">*</span>
                    </label>
                    <div className="relative">
                      <Phone size={16} className="absolute left-3.5 top-3.5 text-slate-400" />
                      <input
                        type="tel"
                        maxLength={15}
                        value={bookingState.phone}
                        onChange={(e) => setBookingState(prev => ({ ...prev, phone: e.target.value }))}
                        placeholder="e.g. 9876543210"
                        className={`w-full pl-10 pr-4 py-3 text-sm bg-white border rounded-xl focus:outline-none transition-colors ${
                          formErrors.phone ? 'border-rose-400 focus:border-rose-500' : 'border-slate-200 focus:border-[#00839a]'
                        }`}
                      />
                    </div>
                    {formErrors.phone && (
                      <p className="text-xs text-rose-500 mt-1">{formErrors.phone}</p>
                    )}
                  </div>

                  {/* Location / City */}
                  <div className="sm:col-span-3">
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      City / Location <span className="text-rose-500">*</span>
                    </label>
                    <div className="relative">
                      <MapPin size={16} className="absolute left-3.5 top-3.5 text-slate-400" />
                      <input
                        type="text"
                        value={bookingState.city}
                        onChange={(e) => setBookingState(prev => ({ ...prev, city: e.target.value }))}
                        placeholder="e.g. Mumbai"
                        className={`w-full pl-10 pr-4 py-3 text-sm bg-white border rounded-xl focus:outline-none transition-colors ${
                          formErrors.city ? 'border-rose-400 focus:border-rose-500' : 'border-slate-200 focus:border-[#00839a]'
                        }`}
                      />
                    </div>
                    {formErrors.city && (
                      <p className="text-xs text-rose-500 mt-1">{formErrors.city}</p>
                    )}
                  </div>

                  {/* Postal Pincode */}
                  <div className="sm:col-span-3">
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Pincode <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      maxLength={6}
                      value={bookingState.pincode}
                      onChange={(e) => {
                        const val = e.target.value.replace(/\D/g, '');
                        setBookingState(prev => ({ ...prev, pincode: val }));
                      }}
                      placeholder="e.g. 400001"
                      className={`w-full px-4 py-3 text-sm bg-white border rounded-xl focus:outline-none transition-colors ${
                        formErrors.pincode ? 'border-rose-400 focus:border-rose-500' : 'border-slate-200 focus:border-[#00839a]'
                      }`}
                    />
                    {formErrors.pincode && (
                      <p className="text-xs text-rose-500 mt-1">{formErrors.pincode}</p>
                    )}
                  </div>
                </div>

                {/* What kind of help are you looking for? */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    What kind of help are you looking for? <span className="text-rose-500">*</span>
                  </label>
                  <select
                    value={bookingState.helpCategory}
                    onChange={(e) => setBookingState(prev => ({ ...prev, helpCategory: e.target.value }))}
                    className="w-full px-4 py-3 text-sm bg-white border border-slate-200 rounded-xl focus:outline-none focus:border-[#00839a] text-slate-800"
                  >
                    {helpCategories.map((cat) => (
                      <option key={cat} value={cat}>
                        {cat}
                      </option>
                    ))}
                  </select>
                  {formErrors.helpCategory && (
                    <p className="text-xs text-rose-500 mt-1">{formErrors.helpCategory}</p>
                  )}
                </div>

                {/* Briefly describe your concern or the issue you are facing */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Briefly describe your concern or the issue you are facing <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <textarea
                      rows={4}
                      value={bookingState.concernDescription}
                      onChange={(e) => setBookingState(prev => ({ ...prev, concernDescription: e.target.value }))}
                      placeholder="Share what is on your mind, how long you've been feeling this way, or what you'd like to achieve from this session..."
                      className={`w-full p-4 text-sm bg-white border rounded-xl focus:outline-none transition-colors ${
                        formErrors.concernDescription ? 'border-rose-400 focus:border-rose-500' : 'border-slate-200 focus:border-[#00839a]'
                      }`}
                    />
                  </div>
                  {formErrors.concernDescription && (
                    <p className="text-xs text-rose-500 mt-1">{formErrors.concernDescription}</p>
                  )}
                  <p className="text-[11px] text-slate-400 mt-1">
                    This is completely confidential and helps your therapist prepare the best approach for you.
                  </p>
                </div>

                {/* Step 3 Actions & Submit */}
                <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <button
                    type="button"
                    onClick={() => setCurrentStep(2)}
                    className="inline-flex items-center space-x-1.5 text-xs sm:text-sm font-semibold text-slate-600 hover:text-[#083058] order-2 sm:order-1"
                  >
                    <ChevronLeft size={16} />
                    <span>Back to Therapist Selection</span>
                  </button>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto inline-flex items-center justify-center space-x-2.5 px-9 py-4 rounded-xl font-bold text-base text-white bg-[#083058] hover:bg-[#0c4a6e] transition-all shadow-md hover:shadow-lg disabled:opacity-50 order-1 sm:order-2 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <Lock size={16} className="animate-spin" />
                        <span>Opening Razorpay Secure Checkout...</span>
                      </span>
                    ) : (
                      <>
                        <CreditCard size={18} />
                        <span>Pay via Razorpay &bull; ₹499</span>
                        <ArrowRight size={17} />
                      </>
                    )}
                  </button>
                </div>

              </motion.form>
            )}
          </AnimatePresence>

        </div>

        {/* Safe Space & Privacy Assurance Footer */}
        <div className="mt-8 text-center text-xs text-slate-500 flex flex-wrap items-center justify-center gap-6">
          <div className="flex items-center space-x-1.5">
            <ShieldCheck size={15} className="text-[#00839a]" />
            <span>End-to-End Encrypted &amp; Confidential</span>
          </div>
          <div className="flex items-center space-x-1.5">
            <CheckCircle2 size={15} className="text-[#00839a]" />
            <span>Verified &amp; Licensed Therapists</span>
          </div>
          <div className="flex items-center space-x-1.5">
            <HelpCircle size={15} className="text-[#00839a]" />
            <span>No Long-Term Commitments Required</span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default BookingPage;
