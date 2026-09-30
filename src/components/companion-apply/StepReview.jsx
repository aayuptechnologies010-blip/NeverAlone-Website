import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { AlertCircle, CheckCircle2 } from 'lucide-react';

export default function StepReview({ data, updateData, errors, onSubmit, isSubmitting }) {
  
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
    >
      <div className="mb-8">
        <h2 className="text-2xl md:text-3xl font-semibold text-white mb-2">Review before you submit.</h2>
        <p className="text-gray-400">Ensure everything is correct.</p>
      </div>

      <div className="bg-white/5 border border-white/10 rounded-3xl p-6 md:p-8 mb-8 space-y-6">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pb-6 border-b border-white/10">
          <div>
            <p className="text-xs text-gray-500 uppercase font-semibold mb-1">Name</p>
            <p className="text-white font-medium">{data.firstName} {data.lastName}</p>
          </div>
          <div>
            <p className="text-xs text-gray-500 uppercase font-semibold mb-1">Languages</p>
            <p className="text-white font-medium">{data.languages.join(', ') || 'None selected'}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pb-6 border-b border-white/10">
          <div>
            <p className="text-xs text-gray-500 uppercase font-semibold mb-1">Interests</p>
            <p className="text-white font-medium">{data.interests.join(', ') || 'None selected'}</p>
          </div>
          <div>
            <p className="text-xs text-gray-500 uppercase font-semibold mb-1">Conversation Style</p>
            <p className="text-white font-medium">{data.conversationStyles.join(', ') || 'None selected'}</p>
          </div>
        </div>

        <div className="pb-6 border-b border-white/10">
          <p className="text-xs text-gray-500 uppercase font-semibold mb-2">Selected Categories</p>
          <div className="flex flex-wrap gap-2">
            {data.categories.length > 0 ? data.categories.map(cat => (
              <span key={cat} className={`px-3 py-1 rounded-full text-xs font-semibold ${cat === 'flirty' ? 'bg-romantic-DEFAULT/20 text-romantic-300 border border-romantic-DEFAULT/30' : 'bg-white/10 text-white'}`}>
                {cat === 'flirty' ? 'Flirty Mode • 18+' : cat.replace('-', ' ').toUpperCase()}
              </span>
            )) : <span className="text-gray-500">None selected</span>}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <p className="text-xs text-gray-500 uppercase font-semibold mb-2">Verification Status</p>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <CheckCircle2 className={`w-4 h-4 ${data.photoStatus ? 'text-electric-cyan' : 'text-gray-600'}`} />
                <span className={`text-sm ${data.photoStatus ? 'text-gray-300' : 'text-gray-600'}`}>Profile Photo</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className={`w-4 h-4 ${data.idStatus ? 'text-electric-cyan' : 'text-gray-600'}`} />
                <span className={`text-sm ${data.idStatus ? 'text-gray-300' : 'text-gray-600'}`}>Government ID</span>
              </div>
            </div>
          </div>
          
          {data.categories.includes('flirty') && (
            <div>
              <p className="text-xs text-gray-500 uppercase font-semibold mb-2">Flirty Mode Consent</p>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-romantic-pink" />
                <span className="text-sm text-romantic-200">Confirmed</span>
              </div>
            </div>
          )}
        </div>

      </div>

      {/* Safety Reminder */}
      <div className="bg-brand-900 border border-white/10 rounded-2xl p-6 mb-8">
        <h4 className="font-semibold text-white mb-3">Companions must not:</h4>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-400">
          <li>• Ask customers for off-platform money</li>
          <li>• Pressure customers for personal info</li>
          <li>• Arrange physical meetups</li>
          <li>• Harass or coerce</li>
          <li>• Provide explicit sexual content</li>
          <li>• Claim unverified professional qualifications</li>
        </ul>
      </div>

      {/* Final Declarations */}
      <div className="space-y-4 mb-10">
        <label className="flex items-start gap-3 cursor-pointer group">
          <div className="relative flex items-center justify-center mt-0.5">
            <input type="checkbox" checked={data.declAccurate} onChange={(e) => updateData({ declAccurate: e.target.checked })} className="peer sr-only" />
            <div className={`w-5 h-5 border-2 rounded transition-colors ${data.declAccurate ? 'bg-electric-cyan border-electric-cyan' : 'border-gray-500 group-hover:border-electric-cyan/50'}`}>
              {data.declAccurate && <svg className="w-4 h-4 text-brand-950 absolute top-0.5 left-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>}
            </div>
          </div>
          <p className="text-sm font-medium text-gray-300">I confirm that the information I provided is accurate.</p>
        </label>
        
        <label className="flex items-start gap-3 cursor-pointer group">
          <div className="relative flex items-center justify-center mt-0.5">
            <input type="checkbox" checked={data.declSafety} onChange={(e) => updateData({ declSafety: e.target.checked })} className="peer sr-only" />
            <div className={`w-5 h-5 border-2 rounded transition-colors ${data.declSafety ? 'bg-electric-cyan border-electric-cyan' : 'border-gray-500 group-hover:border-electric-cyan/50'}`}>
              {data.declSafety && <svg className="w-4 h-4 text-brand-950 absolute top-0.5 left-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>}
            </div>
          </div>
          <p className="text-sm font-medium text-gray-300">I agree to follow Neuravia’s safety and conversation guidelines.</p>
        </label>
        
        <label className="flex items-start gap-3 cursor-pointer group">
          <div className="relative flex items-center justify-center mt-0.5">
            <input type="checkbox" checked={data.declNoGuar} onChange={(e) => updateData({ declNoGuar: e.target.checked })} className="peer sr-only" />
            <div className={`w-5 h-5 border-2 rounded transition-colors ${data.declNoGuar ? 'bg-electric-cyan border-electric-cyan' : 'border-gray-500 group-hover:border-electric-cyan/50'}`}>
              {data.declNoGuar && <svg className="w-4 h-4 text-brand-950 absolute top-0.5 left-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>}
            </div>
          </div>
          <p className="text-sm font-medium text-gray-300">I understand that submitting an application does not guarantee approval.</p>
        </label>
        {errors.declarations && <p className="text-red-400 text-sm mt-2">{errors.declarations}</p>}
      </div>

      <div className="flex justify-end mb-12">
        <button
          onClick={onSubmit}
          disabled={isSubmitting}
          className="w-full sm:w-auto px-10 py-4 rounded-xl text-base font-semibold text-brand-950 bg-electric-cyan hover:bg-electric-cyan/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_0_20px_rgba(34,211,238,0.2)]"
        >
          {isSubmitting ? 'Submitting...' : 'Submit Application'}
        </button>
      </div>

      {/* Professional Distinction */}
      <div className="bg-electric-cyan/5 border border-electric-cyan/20 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
        <div>
          <h4 className="font-semibold text-white mb-1">Are you applying as a qualified mental-health professional?</h4>
          <p className="text-sm text-gray-400">Professional support applications are handled separately.</p>
        </div>
        <Link to="/professional-support" className="whitespace-nowrap px-6 py-3 rounded-full text-sm font-semibold text-brand-950 bg-electric-cyan hover:bg-electric-cyan/90 transition-colors">
          Apply For Professional Support
        </Link>
      </div>

    </motion.div>
  );
}
