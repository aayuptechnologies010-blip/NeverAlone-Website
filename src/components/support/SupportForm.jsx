import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

export default function SupportForm({ category }) {
  const [formData, setFormData] = useState({
    firstName: '',
    email: '',
    mobile: '',
    category: category || 'general',
    subject: '',
    message: '',
    // Contextual fields
    bookingId: '',
    issueType: '',
    plan: '',
    concernType: '',
    profQuestion: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Sync prop category to local state
  useEffect(() => {
    if (category) {
      setFormData(prev => ({ ...prev, category }));
      setErrors(prev => ({ ...prev, category: null }));
    }
  }, [category]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.email.trim()) newErrors.email = 'Email address is required';
    else if (!/^\S+@\S+\.\S+$/.test(formData.email)) newErrors.email = 'Invalid email address';
    if (!formData.category) newErrors.category = 'Please select a category';
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    // Simulate network request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  const renderContextualFields = () => {
    switch (formData.category) {
      case 'booking':
        return (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Booking / Conversation ID (Optional)</label>
              <input type="text" name="bookingId" value={formData.bookingId} onChange={handleChange} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-electric-cyan/50 focus:bg-white/10 transition-colors" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Issue Type</label>
              <select name="issueType" value={formData.issueType} onChange={handleChange} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-electric-cyan/50 focus:bg-white/10 transition-colors appearance-none">
                <option value="" className="text-gray-900">Select an issue</option>
                <option value="Booking Question" className="text-gray-900">Booking Question</option>
                <option value="Reschedule" className="text-gray-900">Reschedule</option>
                <option value="Cancellation" className="text-gray-900">Cancellation</option>
                <option value="Companion Availability" className="text-gray-900">Companion Availability</option>
                <option value="Other" className="text-gray-900">Other</option>
              </select>
            </div>
          </motion.div>
        );
      case 'payment':
        return (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Plan</label>
              <select name="plan" value={formData.plan} onChange={handleChange} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-electric-cyan/50 focus:bg-white/10 transition-colors appearance-none">
                <option value="" className="text-gray-900">Select your plan</option>
                <option value="Weekly" className="text-gray-900">Weekly</option>
                <option value="Monthly" className="text-gray-900">Monthly</option>
                <option value="Yearly" className="text-gray-900">Yearly</option>
                <option value="Extra 60 Minutes" className="text-gray-900">Extra 60 Minutes</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Issue</label>
              <select name="issueType" value={formData.issueType} onChange={handleChange} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-electric-cyan/50 focus:bg-white/10 transition-colors appearance-none">
                <option value="" className="text-gray-900">Select an issue</option>
                <option value="Payment Failed" className="text-gray-900">Payment Failed</option>
                <option value="Payment Question" className="text-gray-900">Payment Question</option>
                <option value="Plan Question" className="text-gray-900">Plan Question</option>
                <option value="Extra Time Issue" className="text-gray-900">Extra Time Issue</option>
                <option value="Other" className="text-gray-900">Other</option>
              </select>
            </div>
          </motion.div>
        );
      case 'safety':
        return (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} className="mb-6">
            <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-4 mb-4 flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm text-red-200/90 font-medium mb-1">Safety Report</p>
                <p className="text-xs text-red-200/70">You can share only what you’re comfortable sharing.</p>
              </div>
            </div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Concern Type</label>
            <select name="concernType" value={formData.concernType} onChange={handleChange} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-red-500/50 focus:bg-white/10 transition-colors appearance-none">
              <option value="" className="text-gray-900">Select concern type</option>
              <option value="Inappropriate Conversation" className="text-gray-900">Inappropriate Conversation</option>
              <option value="Harassment" className="text-gray-900">Harassment</option>
              <option value="Explicit Content" className="text-gray-900">Explicit Content</option>
              <option value="Asked To Meet Offline" className="text-gray-900">Asked To Meet Offline</option>
              <option value="Asked For Personal Information" className="text-gray-900">Asked For Personal Information</option>
              <option value="Money Request" className="text-gray-900">Money Request</option>
              <option value="Threat / Coercion" className="text-gray-900">Threat / Coercion</option>
              <option value="Other" className="text-gray-900">Other</option>
            </select>
          </motion.div>
        );
      case 'professional':
        return (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} className="mb-6">
            <label className="block text-sm font-medium text-gray-300 mb-2">Question Type</label>
            <select name="profQuestion" value={formData.profQuestion} onChange={handleChange} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-electric-cyan/50 focus:bg-white/10 transition-colors appearance-none">
              <option value="" className="text-gray-900">Select question type</option>
              <option value="Professional Support Question" className="text-gray-900">Professional Support Question</option>
              <option value="Booking Question" className="text-gray-900">Booking Question</option>
              <option value="Professional Profile Question" className="text-gray-900">Professional Profile Question</option>
              <option value="Pricing Question" className="text-gray-900">Pricing Question</option>
              <option value="Other" className="text-gray-900">Other</option>
            </select>
          </motion.div>
        );
      default:
        return null;
    }
  };

  return (
    <section className="py-12 bg-brand-950 relative" id="support-form-section">
      <div className="max-w-3xl mx-auto px-4">
        <div className="bg-brand-900 border border-white/10 rounded-[2.5rem] p-6 md:p-12 shadow-2xl relative overflow-hidden">
          
          <AnimatePresence mode="wait">
            {!isSuccess ? (
              <motion.div
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <div className="mb-8">
                  <h2 className="text-2xl md:text-3xl font-semibold text-white mb-2">
                    Tell us a little more.
                  </h2>
                </div>

                <form onSubmit={handleSubmit}>
                  {/* Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">First Name <span className="text-red-400">*</span></label>
                      <input 
                        type="text" 
                        name="firstName" 
                        value={formData.firstName} 
                        onChange={handleChange} 
                        className={`w-full bg-white/5 border ${errors.firstName ? 'border-red-500/50 focus:border-red-500' : 'border-white/10 focus:border-electric-cyan/50'} rounded-xl px-4 py-3 text-white focus:outline-none focus:bg-white/10 transition-colors`} 
                      />
                      {errors.firstName && <p className="text-red-400 text-xs mt-1.5">{errors.firstName}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Email Address <span className="text-red-400">*</span></label>
                      <input 
                        type="email" 
                        name="email" 
                        value={formData.email} 
                        onChange={handleChange} 
                        className={`w-full bg-white/5 border ${errors.email ? 'border-red-500/50 focus:border-red-500' : 'border-white/10 focus:border-electric-cyan/50'} rounded-xl px-4 py-3 text-white focus:outline-none focus:bg-white/10 transition-colors`} 
                      />
                      {errors.email && <p className="text-red-400 text-xs mt-1.5">{errors.email}</p>}
                    </div>
                  </div>

                  {/* Mobile & Category */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Mobile Number (Optional)</label>
                      <input 
                        type="tel" 
                        name="mobile" 
                        value={formData.mobile} 
                        onChange={handleChange} 
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-electric-cyan/50 focus:bg-white/10 transition-colors" 
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Help Category <span className="text-red-400">*</span></label>
                      <select 
                        name="category" 
                        value={formData.category} 
                        onChange={handleChange} 
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-electric-cyan/50 focus:bg-white/10 transition-colors appearance-none"
                      >
                        <option value="general" className="text-gray-900">General Help</option>
                        <option value="booking" className="text-gray-900">Booking & Scheduling</option>
                        <option value="payment" className="text-gray-900">Plan / Payment</option>
                        <option value="account" className="text-gray-900">Account Help</option>
                        <option value="safety" className="text-gray-900">Safety Concern</option>
                        <option value="professional" className="text-gray-900">Professional Support</option>
                        <option value="other" className="text-gray-900">Other</option>
                      </select>
                    </div>
                  </div>

                  {/* Contextual Fields */}
                  {renderContextualFields()}

                  {/* Subject */}
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-300 mb-2">Subject <span className="text-red-400">*</span></label>
                    <input 
                      type="text" 
                      name="subject" 
                      value={formData.subject} 
                      onChange={handleChange} 
                      className={`w-full bg-white/5 border ${errors.subject ? 'border-red-500/50 focus:border-red-500' : 'border-white/10 focus:border-electric-cyan/50'} rounded-xl px-4 py-3 text-white focus:outline-none focus:bg-white/10 transition-colors`} 
                    />
                    {errors.subject && <p className="text-red-400 text-xs mt-1.5">{errors.subject}</p>}
                  </div>

                  {/* Message */}
                  <div className="mb-8">
                    <label className="block text-sm font-medium text-gray-300 mb-2">Message <span className="text-red-400">*</span></label>
                    <textarea 
                      name="message" 
                      value={formData.message} 
                      onChange={handleChange} 
                      rows={5}
                      placeholder="Tell us how we can help..."
                      className={`w-full bg-white/5 border ${errors.message ? 'border-red-500/50 focus:border-red-500' : 'border-white/10 focus:border-electric-cyan/50'} rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:bg-white/10 transition-colors resize-none`} 
                    />
                    <div className="flex justify-between items-center mt-1.5">
                      {errors.message ? (
                        <p className="text-red-400 text-xs">{errors.message}</p>
                      ) : (
                        <p className="text-xs text-gray-500">Please avoid including passwords, OTP codes, banking credentials or other highly sensitive information.</p>
                      )}
                      <span className="text-xs text-gray-500">{formData.message.length}</span>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto px-8 py-4 rounded-xl text-base font-semibold text-brand-950 bg-white hover:bg-gray-200 transition-colors flex items-center justify-center min-w-[200px]"
                  >
                    {isSubmitting ? <Loader2 className="w-5 h-5 animate-spin" /> : 'Send Support Request'}
                  </button>
                </form>
              </motion.div>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12 flex flex-col items-center text-center"
              >
                <div className="w-20 h-20 rounded-full bg-electric-cyan/10 flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-10 h-10 text-electric-cyan" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-2">
                  Support form completed.
                </h3>
                <p className="text-gray-400 mb-8 max-w-sm">
                  This is a frontend demo. In a live environment, this request would be sent to our support team and you would receive an email confirmation.
                </p>
                <div className="text-xs font-mono bg-white/5 text-gray-500 px-4 py-2 rounded-lg border border-white/10">
                  Backend integration pending
                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </div>
    </section>
  );
}
