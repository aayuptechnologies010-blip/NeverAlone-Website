import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import ApplyStepper from '../components/companion-apply/ApplyStepper';
import StepBasicDetails from '../components/companion-apply/StepBasicDetails';
import StepAboutYou from '../components/companion-apply/StepAboutYou';
import StepCategories from '../components/companion-apply/StepCategories';
import StepAvailability from '../components/companion-apply/StepAvailability';
import StepVerification from '../components/companion-apply/StepVerification';
import StepReview from '../components/companion-apply/StepReview';
import StepSuccess from '../components/companion-apply/StepSuccess';

const defaultAvailability = {
  Monday: { isAvailable: false, start: '', end: '' },
  Tuesday: { isAvailable: false, start: '', end: '' },
  Wednesday: { isAvailable: false, start: '', end: '' },
  Thursday: { isAvailable: false, start: '', end: '' },
  Friday: { isAvailable: false, start: '', end: '' },
  Saturday: { isAvailable: false, start: '', end: '' },
  Sunday: { isAvailable: false, start: '', end: '' },
};

export default function BecomeCompanionApply() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState({});

  const [formData, setFormData] = useState({
    // Step 1
    firstName: '',
    lastName: '',
    email: '',
    mobile: '',
    dob: '',
    languages: [],
    confirmAge: false,
    
    // Step 2
    interests: [],
    conversationStyles: [],
    introduction: '',
    experience: '',
    
    // Step 3
    categories: [],
    flirtyConsent1: false,
    flirtyConsent2: false,
    
    // Step 4
    availability: defaultAvailability,
    
    // Step 5
    photoStatus: null,
    idStatus: null,
    
    // Step 6
    declAccurate: false,
    declSafety: false,
    declNoGuar: false
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentStep]);

  const updateData = (newData) => {
    setFormData(prev => ({ ...prev, ...newData }));
    // Clear errors for updated fields
    const newErrors = { ...errors };
    Object.keys(newData).forEach(key => delete newErrors[key]);
    setErrors(newErrors);
  };

  const validateStep = () => {
    const newErrors = {};
    
    if (currentStep === 0) {
      if (!formData.firstName.trim()) newErrors.firstName = 'Required';
      if (!formData.lastName.trim()) newErrors.lastName = 'Required';
      if (!formData.email.trim() || !/^\S+@\S+\.\S+$/.test(formData.email)) newErrors.email = 'Valid email required';
      if (!formData.mobile.trim()) newErrors.mobile = 'Required';
      if (!formData.dob) newErrors.dob = 'Required';
      if (formData.languages.length === 0) newErrors.languages = 'Select at least one language';
      if (!formData.confirmAge) newErrors.confirmAge = 'You must confirm you are 18+';
    } 
    else if (currentStep === 1) {
      if (formData.interests.length === 0) newErrors.interests = 'Select at least one interest';
      if (formData.conversationStyles.length === 0) newErrors.conversationStyles = 'Select a conversation style';
      if (!formData.introduction.trim()) newErrors.introduction = 'Required';
    }
    else if (currentStep === 2) {
      if (formData.categories.length === 0) newErrors.categories = 'Select at least one category';
    }
    else if (currentStep === 3) {
      const hasAnyAvailability = Object.values(formData.availability).some(d => d.isAvailable);
      if (!hasAnyAvailability) newErrors.availability = 'Please set at least one available day';
    }
    else if (currentStep === 4) {
      if (!formData.photoStatus || !formData.idStatus) newErrors.verification = 'Both documents are required';
    }
    else if (currentStep === 5) {
      if (!formData.declAccurate || !formData.declSafety || !formData.declNoGuar) {
        newErrors.declarations = 'You must agree to all declarations to apply.';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (validateStep()) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const prevStep = () => {
    setCurrentStep(prev => prev - 1);
  };

  const handleSubmit = () => {
    if (validateStep()) {
      setIsSubmitting(true);
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSuccess(true);
      }, 2000);
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 0: return <StepBasicDetails data={formData} updateData={updateData} errors={errors} />;
      case 1: return <StepAboutYou data={formData} updateData={updateData} errors={errors} />;
      case 2: return <StepCategories data={formData} updateData={updateData} errors={errors} />;
      case 3: return <StepAvailability data={formData} updateData={updateData} errors={errors} />;
      case 4: return <StepVerification data={formData} updateData={updateData} errors={errors} />;
      case 5: return <StepReview data={formData} updateData={updateData} errors={errors} onSubmit={handleSubmit} isSubmitting={isSubmitting} />;
      default: return null;
    }
  };

  return (
    <div className="min-h-screen bg-brand-950 font-sans text-warm-white selection:bg-electric-cyan/30 selection:text-white pt-24 pb-32">
      <div className="max-w-4xl mx-auto px-4">
        
        {!isSuccess && (
          <div className="mb-12">
            <ApplyStepper currentStepIndex={currentStep} />
          </div>
        )}

        <div className={`${isSuccess ? '' : 'bg-brand-900 border border-white/10 rounded-[2.5rem] p-6 md:p-12 shadow-2xl overflow-hidden'}`}>
          <AnimatePresence mode="wait">
            {!isSuccess ? (
              <motion.div key="form">
                {renderStep()}
                
                {/* Navigation Buttons */}
                {currentStep < 5 && (
                  <div className="flex justify-between items-center mt-12 pt-8 border-t border-white/10">
                    <button
                      onClick={prevStep}
                      disabled={currentStep === 0}
                      className={`px-6 py-3 rounded-full text-sm font-semibold transition-colors ${
                        currentStep === 0 ? 'opacity-0 cursor-default' : 'text-white hover:bg-white/10 border border-white/20 bg-white/5'
                      }`}
                    >
                      Back
                    </button>
                    <button
                      onClick={nextStep}
                      className="px-8 py-3 rounded-full text-sm font-semibold text-brand-950 bg-electric-cyan hover:bg-electric-cyan/90 transition-colors shadow-[0_0_15px_rgba(34,211,238,0.2)]"
                    >
                      Continue
                    </button>
                  </div>
                )}
              </motion.div>
            ) : (
              <StepSuccess key="success" />
            )}
          </AnimatePresence>
        </div>

      </div>
    </div>
  );
}
