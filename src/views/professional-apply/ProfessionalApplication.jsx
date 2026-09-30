import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { CheckCircle2, ChevronRight, ChevronLeft, Upload, FileText, AlertCircle, Trash2, Plus, ShieldCheck } from 'lucide-react';

export default function ProfessionalApplication() {
  const [step, setStep] = useState(1);
  const navigate = useNavigate();

  // Form State
  const [formData, setFormData] = useState({
    firstName: '', lastName: '', email: '', mobile: '', is18: false, languages: [],
    profTitle: '', profArea: '', experience: '', currentRole: '', intro: '', approach: '',
    qualifications: [{ id: 1, degree: '', institution: '', year: '' }],
    licenses: [{ id: 1, type: '', number: '', authority: '', country: '', expiry: '' }],
    availability: {
      Monday: { available: true, start: '09:00', end: '17:00' },
      Tuesday: { available: true, start: '09:00', end: '17:00' },
      Wednesday: { available: true, start: '09:00', end: '17:00' },
      Thursday: { available: true, start: '09:00', end: '17:00' },
      Friday: { available: true, start: '09:00', end: '17:00' },
      Saturday: { available: false, start: '', end: '' },
      Sunday: { available: false, start: '', end: '' },
    },
    docs: { idDoc: null, qualDoc: null, licenseDoc: null, photo: null },
    declarations: { accurate: false, review: false, boundaries: false, noGuarantee: false }
  });

  const updateData = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const nextStep = () => {
    // Basic frontend validation mock
    if (step === 1 && (!formData.firstName || !formData.email || !formData.is18)) return;
    if (step === 7 && (!formData.declarations.accurate || !formData.declarations.review || !formData.declarations.boundaries || !formData.declarations.noGuarantee)) return;
    
    if (step < 7) {
      setStep(step + 1);
      window.scrollTo(0, 0);
    } else {
      navigate('/professional-support/onboarding');
    }
  };

  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1);
      window.scrollTo(0, 0);
    }
  };

  const steps = [
    { id: 1, title: 'Basic Details' },
    { id: 2, title: 'Professional Background' },
    { id: 3, title: 'Qualifications' },
    { id: 4, title: 'Professional Profile' },
    { id: 5, title: 'Availability' },
    { id: 6, title: 'Documents' },
    { id: 7, title: 'Review' },
  ];

  return (
    <div className="bg-brand-950 min-h-screen font-sans text-warm-white pb-20 pt-20">
      <div className="max-w-3xl mx-auto px-4 md:px-8">
        
        {/* Header */}
        <div className="mb-10 text-center">
          <span className="inline-block px-3 py-1 rounded-full bg-electric-cyan/10 border border-electric-cyan/20 text-electric-cyan text-xs font-bold uppercase tracking-widest mb-4">
            Professional Application
          </span>
          <h1 className="text-3xl font-bold text-white">Application to provide Professional Support</h1>
        </div>

        {/* Stepper */}
        <div className="flex items-center justify-between mb-12 overflow-x-auto pb-4 hide-scrollbar">
          {steps.map((s, i) => (
            <div key={s.id} className={`flex flex-col items-center flex-shrink-0 mx-2 ${step === s.id ? 'opacity-100' : step > s.id ? 'opacity-60' : 'opacity-30'}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mb-2 transition-colors ${step >= s.id ? 'bg-electric-cyan text-brand-950' : 'bg-white/10 text-white'}`}>
                {step > s.id ? <CheckCircle2 className="w-5 h-5" /> : s.id}
              </div>
              <span className="text-[10px] uppercase font-bold tracking-wider hidden sm:block">{s.title}</span>
            </div>
          ))}
        </div>

        {/* Form Container */}
        <div className="bg-white/5 border border-white/10 rounded-3xl p-6 md:p-10 mb-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.2 }}
            >
              {step === 1 && <Step1BasicDetails data={formData} update={updateData} />}
              {step === 2 && <Step2ProfBackground data={formData} update={updateData} />}
              {step === 3 && <Step3Qualifications data={formData} update={updateData} />}
              {step === 4 && <Step4Profile data={formData} update={updateData} />}
              {step === 5 && <Step5Availability data={formData} update={updateData} />}
              {step === 6 && <Step6Documents data={formData} update={updateData} />}
              {step === 7 && <Step7Review data={formData} setStep={setStep} update={updateData} />}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <button 
            onClick={prevStep}
            className={`px-6 py-3 rounded-xl font-bold transition-colors flex items-center gap-2 ${step === 1 ? 'opacity-0 pointer-events-none' : 'text-white bg-white/5 hover:bg-white/10'}`}
          >
            <ChevronLeft className="w-5 h-5" /> Previous
          </button>
          
          <button 
            onClick={nextStep}
            className="px-8 py-3 rounded-xl font-bold text-brand-950 bg-electric-cyan hover:bg-electric-cyan/90 transition-colors flex items-center gap-2"
          >
            {step === 7 ? 'Submit Professional Application' : 'Continue'} <ChevronRight className="w-5 h-5" />
          </button>
        </div>
        
        {step === 7 && (
          <p className="text-xs text-gray-500 text-center mt-6 max-w-xl mx-auto">
            Neuravia approval does not replace any professional, legal or regulatory obligations that may apply to the applicant.
          </p>
        )}

      </div>
    </div>
  );
}

// === STEP COMPONENTS ===

function Step1BasicDetails({ data, update }) {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-white mb-1">Tell us about yourself.</h2>
        <p className="text-gray-400 text-sm">Please provide your legal name as it appears on your ID.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input label="First Name" value={data.firstName} onChange={e => update('firstName', e.target.value)} required />
        <Input label="Last Name" value={data.lastName} onChange={e => update('lastName', e.target.value)} required />
        <Input label="Email Address" type="email" value={data.email} onChange={e => update('email', e.target.value)} required />
        <Input label="Mobile Number" type="tel" value={data.mobile} onChange={e => update('mobile', e.target.value)} required />
      </div>

      <div>
        <label className="block text-sm font-bold text-gray-300 mb-2">Languages (comma separated)</label>
        <Input value={data.languages.join(', ')} onChange={e => update('languages', e.target.value.split(',').map(s=>s.trim()))} placeholder="e.g. English, Hindi" />
      </div>

      <div className="mt-8 pt-6 border-t border-white/10">
        <label className="flex items-center gap-3 cursor-pointer group">
          <div className={`w-6 h-6 rounded border flex items-center justify-center transition-colors ${data.is18 ? 'bg-electric-cyan border-electric-cyan' : 'border-gray-500 group-hover:border-white'}`}>
            {data.is18 && <CheckCircle2 className="w-4 h-4 text-brand-950" />}
          </div>
          <input type="checkbox" className="hidden" checked={data.is18} onChange={e => update('is18', e.target.checked)} />
          <span className="text-sm font-medium text-white">I confirm that I am 18 years of age or older.</span>
        </label>
      </div>
    </div>
  );
}

function Step2ProfBackground({ data, update }) {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-white mb-1">Tell us about your professional background.</h2>
      </div>

      <Input label="Professional Title" placeholder="e.g. Clinical Psychologist" value={data.profTitle} onChange={e => update('profTitle', e.target.value)} />
      
      <div>
        <label className="block text-sm font-bold text-gray-300 mb-2">Primary Area of Professional Support</label>
        <select 
          className="w-full bg-brand-900 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-electric-cyan transition-colors"
          value={data.profArea} onChange={e => update('profArea', e.target.value)}
        >
          <option value="">Select Area</option>
          <option value="Mental Health Counseling">Mental Health Counseling</option>
          <option value="Career Coaching">Career Coaching</option>
          <option value="Relationship Therapy">Relationship Therapy</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input label="Years of Experience (optional)" type="number" value={data.experience} onChange={e => update('experience', e.target.value)} />
        <Input label="Current Professional Role (optional)" value={data.currentRole} onChange={e => update('currentRole', e.target.value)} />
      </div>
    </div>
  );
}

function Step3Qualifications({ data, update }) {
  const addQual = () => {
    update('qualifications', [...data.qualifications, { id: Date.now(), degree: '', institution: '', year: '' }]);
  };
  const updateQual = (id, field, val) => {
    update('qualifications', data.qualifications.map(q => q.id === id ? { ...q, [field]: val } : q));
  };
  
  const addLicense = () => {
    update('licenses', [...data.licenses, { id: Date.now(), type: '', number: '', authority: '', country: '', expiry: '' }]);
  };
  const updateLicense = (id, field, val) => {
    update('licenses', data.licenses.map(l => l.id === id ? { ...l, [field]: val } : l));
  };

  return (
    <div className="space-y-10">
      <div>
        <h2 className="text-2xl font-bold text-white mb-1">Add your qualifications.</h2>
      </div>

      <div className="space-y-6">
        {data.qualifications.map((q, i) => (
          <div key={q.id} className="p-6 bg-brand-900 border border-white/5 rounded-2xl relative">
            <h4 className="text-sm font-bold text-electric-cyan mb-4 uppercase tracking-widest">Qualification {i + 1}</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input label="Qualification / Degree Name" value={q.degree} onChange={e => updateQual(q.id, 'degree', e.target.value)} />
              <Input label="Institution / Issuing Organization" value={q.institution} onChange={e => updateQual(q.id, 'institution', e.target.value)} />
              <Input label="Year Completed" type="number" value={q.year} onChange={e => updateQual(q.id, 'year', e.target.value)} />
            </div>
          </div>
        ))}
        <button onClick={addQual} className="flex items-center gap-2 text-sm font-bold text-electric-cyan hover:text-white transition-colors">
          <Plus className="w-4 h-4" /> Add Another Qualification
        </button>
      </div>

      <div className="pt-8 border-t border-white/10 space-y-6">
        <div>
          <h3 className="text-xl font-bold text-white mb-1">Professional Registration / License</h3>
          <p className="text-sm text-gray-400 mb-4">Add your professional licenses if applicable to your area of support.</p>
        </div>
        {data.licenses.map((l, i) => (
          <div key={l.id} className="p-6 bg-brand-900 border border-white/5 rounded-2xl relative">
            <h4 className="text-sm font-bold text-electric-cyan mb-4 uppercase tracking-widest">License {i + 1}</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input label="Registration / License Type" value={l.type} onChange={e => updateLicense(l.id, 'type', e.target.value)} />
              <Input label="Registration Number" value={l.number} onChange={e => updateLicense(l.id, 'number', e.target.value)} />
              <Input label="Issuing Authority" value={l.authority} onChange={e => updateLicense(l.id, 'authority', e.target.value)} />
              <Input label="Country / Region" value={l.country} onChange={e => updateLicense(l.id, 'country', e.target.value)} />
            </div>
            <div className="mt-4 flex items-center justify-between">
               <span className="text-xs font-bold text-yellow-500 bg-yellow-500/10 px-2 py-1 rounded-full border border-yellow-500/20">Status: Not Reviewed</span>
            </div>
          </div>
        ))}
        <button onClick={addLicense} className="flex items-center gap-2 text-sm font-bold text-electric-cyan hover:text-white transition-colors">
          <Plus className="w-4 h-4" /> Add Another License
        </button>
      </div>
    </div>
  );
}

function Step4Profile({ data, update }) {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-white mb-1">Build your Professional Support profile.</h2>
        <p className="text-sm text-gray-400">Help people understand your professional background and approach without making guaranteed outcome claims.</p>
      </div>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-bold text-gray-300 mb-2">Professional Introduction</label>
          <textarea 
            className="w-full h-32 bg-brand-900 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-electric-cyan transition-colors resize-none"
            placeholder="Introduce yourself and your professional background..."
            value={data.intro} onChange={e => update('intro', e.target.value)}
          />
        </div>
        
        <div>
          <label className="block text-sm font-bold text-gray-300 mb-2">Approach / Conversation Style</label>
          <textarea 
            className="w-full h-24 bg-brand-900 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-electric-cyan transition-colors resize-none"
            placeholder="Describe your approach..."
            value={data.approach} onChange={e => update('approach', e.target.value)}
          />
        </div>
      </div>

      <div className="p-6 bg-brand-950 rounded-2xl border border-white/10">
        <h3 className="text-sm font-bold text-white mb-4 uppercase tracking-widest text-center">Preview Customer View</h3>
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col items-center text-center">
          <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center text-2xl font-bold text-electric-cyan mb-4">
            {data.firstName ? data.firstName[0] : 'P'}
          </div>
          <h4 className="text-xl font-bold text-white">{data.firstName || 'First Name'} {data.lastName || 'Last Name'}</h4>
          <p className="text-electric-cyan font-medium text-sm mt-1">{data.profTitle || 'Professional Title'}</p>
          <p className="text-gray-400 text-xs mt-2">{data.profArea || 'Area of Support'}</p>
          <div className="mt-4 flex gap-2 justify-center flex-wrap">
            {data.languages.length > 0 && data.languages.map((l, i) => (
              <span key={i} className="px-2 py-1 bg-white/10 rounded text-xs text-gray-300">{l}</span>
            ))}
          </div>
          <div className="mt-6 pt-4 border-t border-white/10 w-full flex justify-between items-center">
            <span className="text-xs font-bold text-yellow-500 bg-yellow-500/10 px-2 py-1 rounded border border-yellow-500/20">Verification: Pending</span>
            <button className="px-4 py-1.5 rounded-lg text-xs font-bold bg-white/10 text-white cursor-not-allowed">View Professional</button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Step5Availability({ data, update }) {
  const toggleDay = (day) => {
    update('availability', { ...data.availability, [day]: { ...data.availability[day], available: !data.availability[day].available } });
  };
  
  const updateTime = (day, field, val) => {
    update('availability', { ...data.availability, [day]: { ...data.availability[day], [field]: val } });
  };

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-white mb-1">When are you available?</h2>
        <p className="text-sm text-gray-400">Set your general weekly availability. Professional Support pricing will be configured separately.</p>
      </div>

      <div className="space-y-3">
        {Object.entries(data.availability).map(([day, info]) => (
          <div key={day} className="flex flex-col sm:flex-row sm:items-center gap-4 bg-brand-900 border border-white/5 rounded-xl p-4">
            <div className="flex items-center gap-4 w-40">
              <button 
                onClick={() => toggleDay(day)}
                className={`w-12 h-6 rounded-full p-1 transition-colors relative ${info.available ? 'bg-electric-cyan' : 'bg-gray-600'}`}
              >
                <motion.div layout className={`w-4 h-4 rounded-full bg-white ${info.available ? 'ml-6' : 'ml-0'}`} />
              </button>
              <span className="text-sm font-bold text-white">{day}</span>
            </div>
            {info.available ? (
              <div className="flex items-center gap-3">
                <input type="time" value={info.start} onChange={e => updateTime(day, 'start', e.target.value)} className="bg-brand-950 border border-white/10 rounded px-3 py-1.5 text-sm text-white focus:outline-none" />
                <span className="text-gray-500">to</span>
                <input type="time" value={info.end} onChange={e => updateTime(day, 'end', e.target.value)} className="bg-brand-950 border border-white/10 rounded px-3 py-1.5 text-sm text-white focus:outline-none" />
              </div>
            ) : (
              <span className="text-sm text-gray-500">Unavailable</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function Step6Documents({ data, update }) {
  const handleFile = (type) => {
    update('docs', { ...data.docs, [type]: { name: 'document_uploaded.pdf' } });
  };
  
  const removeFile = (type) => {
    update('docs', { ...data.docs, [type]: null });
  };

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-white mb-1">Provide documents for review.</h2>
        <div className="flex items-start gap-3 mt-4 p-4 bg-brand-950 border border-electric-cyan/20 rounded-xl">
          <ShieldCheck className="w-5 h-5 text-electric-cyan flex-shrink-0" />
          <p className="text-xs text-gray-300">Professional verification documents may contain sensitive information. Secure document handling must be implemented before real applications are accepted. This is a frontend demo.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <DocUpload label="Identity Document" file={data.docs.idDoc} onUpload={() => handleFile('idDoc')} onRemove={() => removeFile('idDoc')} />
        <DocUpload label="Qualification Document(s)" file={data.docs.qualDoc} onUpload={() => handleFile('qualDoc')} onRemove={() => removeFile('qualDoc')} />
        <DocUpload label="Professional License (if applicable)" file={data.docs.licenseDoc} onUpload={() => handleFile('licenseDoc')} onRemove={() => removeFile('licenseDoc')} />
        <DocUpload label="Profile Photo" file={data.docs.photo} onUpload={() => handleFile('photo')} onRemove={() => removeFile('photo')} />
      </div>
    </div>
  );
}

function DocUpload({ label, file, onUpload, onRemove }) {
  return (
    <div className="bg-brand-900 border border-white/5 rounded-2xl p-5">
      <p className="text-sm font-bold text-white mb-3">{label}</p>
      {file ? (
        <div className="flex items-center justify-between p-3 bg-brand-950 rounded-xl border border-electric-cyan/30">
          <div className="flex items-center gap-2">
            <FileText className="w-4 h-4 text-electric-cyan" />
            <span className="text-xs text-gray-300 truncate max-w-[120px]">{file.name}</span>
          </div>
          <div className="flex items-center gap-3">
             <span className="text-[10px] font-bold text-yellow-400 uppercase">Pending Review</span>
             <button onClick={onRemove} className="text-gray-500 hover:text-red-400 transition-colors"><Trash2 className="w-4 h-4" /></button>
          </div>
        </div>
      ) : (
        <button onClick={onUpload} className="w-full flex flex-col items-center justify-center p-6 bg-white/5 border border-dashed border-white/20 rounded-xl hover:bg-white/10 transition-colors group">
          <Upload className="w-6 h-6 text-gray-500 group-hover:text-electric-cyan mb-2 transition-colors" />
          <span className="text-xs font-bold text-gray-400">Select File</span>
        </button>
      )}
    </div>
  );
}

function Step7Review({ data, setStep, update }) {
  const toggleDecl = (field) => {
    update('declarations', { ...data.declarations, [field]: !data.declarations[field] });
  };

  return (
    <div className="space-y-10">
      <div>
        <h2 className="text-2xl font-bold text-white mb-1">Review your professional application.</h2>
      </div>

      <div className="space-y-6">
        <ReviewSection title="Personal Details" onEdit={() => setStep(1)}>
          <p className="text-sm text-gray-300">{data.firstName} {data.lastName} • {data.email}</p>
        </ReviewSection>
        
        <ReviewSection title="Professional Background" onEdit={() => setStep(2)}>
          <p className="text-sm text-gray-300">{data.profTitle || 'Not provided'} • {data.profArea || 'Not provided'}</p>
        </ReviewSection>

        <ReviewSection title="Qualifications & Licenses" onEdit={() => setStep(3)}>
          <p className="text-sm text-gray-300">{data.qualifications.length} Qualification(s) added</p>
          <p className="text-sm text-gray-300 mt-1">{data.licenses.length} License(s) added</p>
        </ReviewSection>

        <ReviewSection title="Documents" onEdit={() => setStep(6)}>
          <p className="text-sm text-gray-300">
            {[data.docs.idDoc, data.docs.qualDoc, data.docs.licenseDoc, data.docs.photo].filter(Boolean).length} Document(s) uploaded
          </p>
        </ReviewSection>
      </div>

      <div className="pt-8 border-t border-white/10 space-y-4">
        <h3 className="text-sm font-bold text-white uppercase tracking-widest mb-4">Declarations</h3>
        
        <DeclBox checked={data.declarations.accurate} onChange={() => toggleDecl('accurate')} text="I confirm that the information and credentials I have provided are accurate." />
        <DeclBox checked={data.declarations.review} onChange={() => toggleDecl('review')} text="I understand that professional credentials must be reviewed before my profile can be approved." />
        <DeclBox checked={data.declarations.boundaries} onChange={() => toggleDecl('boundaries')} text="I agree to follow Neuravia’s safety, privacy and professional boundaries." />
        <DeclBox checked={data.declarations.noGuarantee} onChange={() => toggleDecl('noGuarantee')} text="I understand that submitting an application does not guarantee approval." />
      </div>
    </div>
  );
}

function ReviewSection({ title, onEdit, children }) {
  return (
    <div className="flex items-start justify-between p-4 bg-brand-900 border border-white/5 rounded-xl">
      <div>
        <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">{title}</h4>
        {children}
      </div>
      <button onClick={onEdit} className="text-xs font-bold text-electric-cyan hover:text-white transition-colors">Edit</button>
    </div>
  );
}

function DeclBox({ checked, onChange, text }) {
  return (
    <label className="flex items-start gap-4 cursor-pointer group bg-brand-900 p-4 rounded-xl border border-white/5">
      <div className={`mt-0.5 w-5 h-5 rounded border flex items-center justify-center flex-shrink-0 transition-colors ${checked ? 'bg-electric-cyan border-electric-cyan' : 'border-gray-500 group-hover:border-white'}`}>
        {checked && <CheckCircle2 className="w-3 h-3 text-brand-950" />}
      </div>
      <input type="checkbox" className="hidden" checked={checked} onChange={onChange} />
      <span className="text-sm font-medium text-gray-300 leading-snug">{text}</span>
    </label>
  );
}

function Input({ label, ...props }) {
  return (
    <div>
      <label className="block text-sm font-bold text-gray-300 mb-2">{label}</label>
      <input 
        className="w-full bg-brand-900 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-electric-cyan transition-colors"
        {...props}
      />
    </div>
  );
}
