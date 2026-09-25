import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  Loader2, 
  HelpCircle, 
  Calendar, 
  CreditCard, 
  User, 
  ShieldAlert, 
  Stethoscope,
  Sparkles
} from 'lucide-react';

export default function SupportForm({ category, onSelectCategory }) {
  const [formData, setFormData] = useState({
    firstName: '',
    email: '',
    mobile: '',
    category: category || 'general',
    subject: '',
    message: '',
    bookingId: '',
    issueType: '',
    plan: '',
    concernType: '',
    profQuestion: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Sync category prop if updated from outside
  React.useEffect(() => {
    if (category) {
      setFormData(prev => ({ ...prev, category }));
      setErrors(prev => ({ ...prev, category: null }));
    }
  }, [category]);

  const categories = [
    { id: 'general', label: 'General Help', icon: HelpCircle },
    { id: 'booking', label: 'Booking & Slots', icon: Calendar },
    { id: 'payment', label: 'Payment / Plan', icon: CreditCard },
    { id: 'professional', label: 'Therapy & Pro', icon: Stethoscope },
    { id: 'safety', label: 'Safety Concern', icon: ShieldAlert, alert: true },
    { id: 'account', label: 'Account Help', icon: User },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  const handleCategoryChange = (catId) => {
    setFormData(prev => ({ ...prev, category: catId }));
    if (onSelectCategory) onSelectCategory(catId);
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.email.trim()) newErrors.email = 'Email address is required';
    else if (!/^\S+@\S+\.\S+$/.test(formData.email)) newErrors.email = 'Valid email is required';
    if (!formData.subject.trim()) newErrors.subject = 'Please provide a subject';
    if (!formData.message.trim()) newErrors.message = 'Please describe your request';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1200);
  };

  return (
    <div id="support-form-section" className="rounded-3xl border border-white/10 bg-brand-900/60 p-6 sm:p-10 shadow-2xl backdrop-blur-xl relative overflow-hidden">
      
      {/* Glow highlight */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-pink-600/10 rounded-full blur-[100px] pointer-events-none" />

      <AnimatePresence mode="wait">
        {!isSuccess ? (
          <motion.div
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-pink-500/20 bg-pink-500/10 px-3 py-1 text-xs font-semibold text-pink-300 mb-3">
                <Sparkles className="w-3.5 h-3.5 text-pink-400" />
                <span>24/7 Priority Support</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                Send us a message
              </h2>
              <p className="mt-1 text-sm text-gray-400">
                Our care team responds within 1-2 hours on business days.
              </p>
            </div>

            {/* Category Pill Selector */}
            <div className="mb-8">
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">
                Select Concern Category
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {categories.map((cat) => {
                  const Icon = cat.icon;
                  const isSelected = formData.category === cat.id;
                  return (
                    <button
                      type="button"
                      key={cat.id}
                      onClick={() => handleCategoryChange(cat.id)}
                      className={`flex items-center gap-2.5 p-3 rounded-2xl border text-xs font-semibold transition-all cursor-pointer ${
                        isSelected
                          ? cat.alert
                            ? 'bg-red-500/20 border-red-500 text-red-200 shadow-[0_0_15px_rgba(239,68,68,0.2)]'
                            : 'bg-pink-600 border-pink-500 text-white shadow-[0_0_15px_rgba(219,39,119,0.3)]'
                          : 'bg-brand-950/60 border-white/10 text-gray-300 hover:border-white/25 hover:bg-brand-950'
                      }`}
                    >
                      <Icon className={`w-4 h-4 shrink-0 ${isSelected ? 'text-white' : cat.alert ? 'text-red-400' : 'text-gray-400'}`} />
                      <span className="truncate">{cat.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              
              {/* Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-1.5">
                    Your Name <span className="text-pink-400">*</span>
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    placeholder="e.g. Rahul Sharma"
                    value={formData.firstName}
                    onChange={handleChange}
                    className={`w-full bg-brand-950/80 border ${errors.firstName ? 'border-red-500' : 'border-white/10 focus:border-pink-500'} rounded-2xl px-4 py-3.5 text-sm text-white placeholder-gray-600 focus:outline-none transition-all`}
                  />
                  {errors.firstName && <p className="text-red-400 text-xs mt-1">{errors.firstName}</p>}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-1.5">
                    Email Address <span className="text-pink-400">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="name@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full bg-brand-950/80 border ${errors.email ? 'border-red-500' : 'border-white/10 focus:border-pink-500'} rounded-2xl px-4 py-3.5 text-sm text-white placeholder-gray-600 focus:outline-none transition-all`}
                  />
                  {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                </div>
              </div>

              {/* Mobile Number & Optional ID */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-1.5">
                    Phone / WhatsApp Number (Optional)
                  </label>
                  <input
                    type="tel"
                    name="mobile"
                    placeholder="+91 98765 43210"
                    value={formData.mobile}
                    onChange={handleChange}
                    className="w-full bg-brand-950/80 border border-white/10 focus:border-pink-500 rounded-2xl px-4 py-3.5 text-sm text-white placeholder-gray-600 focus:outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-1.5">
                    Booking ID / Order ID (If applicable)
                  </label>
                  <input
                    type="text"
                    name="bookingId"
                    placeholder="e.g. NA-8924"
                    value={formData.bookingId}
                    onChange={handleChange}
                    className="w-full bg-brand-950/80 border border-white/10 focus:border-pink-500 rounded-2xl px-4 py-3.5 text-sm text-white placeholder-gray-600 focus:outline-none transition-all"
                  />
                </div>
              </div>

              {/* Subject */}
              <div>
                <label className="block text-xs font-semibold text-gray-300 mb-1.5">
                  Subject <span className="text-pink-400">*</span>
                </label>
                <input
                  type="text"
                  name="subject"
                  placeholder="How can we assist you?"
                  value={formData.subject}
                  onChange={handleChange}
                  className={`w-full bg-brand-950/80 border ${errors.subject ? 'border-red-500' : 'border-white/10 focus:border-pink-500'} rounded-2xl px-4 py-3.5 text-sm text-white placeholder-gray-600 focus:outline-none transition-all`}
                />
                {errors.subject && <p className="text-red-400 text-xs mt-1">{errors.subject}</p>}
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-semibold text-gray-300 mb-1.5">
                  Your Message <span className="text-pink-400">*</span>
                </label>
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Please describe your query in detail..."
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full bg-brand-950/80 border ${errors.message ? 'border-red-500' : 'border-white/10 focus:border-pink-500'} rounded-2xl px-4 py-3.5 text-sm text-white placeholder-gray-600 focus:outline-none transition-all resize-none`}
                />
                {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
              </div>

              {/* Safety notice for safety category */}
              {formData.category === 'safety' && (
                <div className="flex items-start gap-3 rounded-2xl bg-red-500/10 border border-red-500/20 p-4">
                  <AlertCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                  <p className="text-xs leading-relaxed text-red-200">
                    <strong>Confidentiality Assured:</strong> Safety reports are escalated directly to our senior trust & safety team immediately.
                  </p>
                </div>
              )}

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-pink-600 to-pink-500 hover:from-pink-500 hover:to-pink-400 px-8 py-4 font-bold text-white shadow-lg shadow-pink-600/30 transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Support Request</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>

            </form>
          </motion.div>
        ) : (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="py-12 flex flex-col items-center text-center"
          >
            <div className="w-20 h-20 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center mb-6 text-green-400">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">
              Message Received!
            </h3>
            <p className="text-gray-300 text-sm max-w-md mb-8 leading-relaxed">
              Thank you, <strong className="text-white">{formData.firstName}</strong>. We have logged your request under ticket <strong>#NA-{Math.floor(1000 + Math.random() * 9000)}</strong>. Our team will contact you at <strong>{formData.email}</strong> shortly.
            </p>
            <button
              type="button"
              onClick={() => {
                setIsSuccess(false);
                setFormData({
                  firstName: '',
                  email: '',
                  mobile: '',
                  category: 'general',
                  subject: '',
                  message: '',
                  bookingId: '',
                  issueType: '',
                  plan: '',
                  concernType: '',
                  profQuestion: ''
                });
              }}
              className="px-6 py-3 rounded-xl font-semibold text-xs text-white bg-white/10 hover:bg-white/15 border border-white/15 transition-colors cursor-pointer"
            >
              Submit Another Query
            </button>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
