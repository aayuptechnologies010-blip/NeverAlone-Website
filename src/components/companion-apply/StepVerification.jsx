import React from 'react';
import { motion } from 'framer-motion';
import { UploadCloud, FileCheck, ShieldAlert } from 'lucide-react';

export default function StepVerification({ data, updateData, errors }) {

  // Simulate file selection without actual upload
  const handlePhotoSelect = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      updateData({ photoStatus: 'Document selected' });
    }
  };

  const handleIdSelect = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      updateData({ idStatus: 'Document selected' });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
    >
      <div className="mb-8">
        <h2 className="text-2xl md:text-3xl font-semibold text-white mb-2">Help us keep Never Alone trustworthy.</h2>
        <p className="text-gray-400">Complete verification details.</p>
        {errors.verification && <p className="text-red-400 text-sm mt-2">{errors.verification}</p>}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        
        {/* Profile Photo */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col">
          <h3 className="text-lg font-semibold text-white mb-2">Profile Photo</h3>
          <p className="text-sm text-gray-400 mb-6 flex-1">Use a clear, recent photo of yourself. This will be used for your companion profile.</p>
          
          {data.photoStatus === 'Document selected' ? (
            <div className="bg-electric-cyan/10 border border-electric-cyan/30 rounded-xl p-4 flex items-center gap-3">
              <FileCheck className="w-5 h-5 text-electric-cyan" />
              <span className="text-sm font-medium text-electric-cyan">Document selected</span>
            </div>
          ) : (
            <label className="border-2 border-dashed border-white/20 hover:border-electric-cyan/50 rounded-xl p-8 flex flex-col items-center justify-center cursor-pointer transition-colors">
              <UploadCloud className="w-8 h-8 text-gray-400 mb-3" />
              <span className="text-sm font-medium text-white mb-1">Click to browse</span>
              <span className="text-xs text-gray-500">JPG or PNG</span>
              <input type="file" accept="image/jpeg, image/png" className="hidden" onChange={handlePhotoSelect} />
            </label>
          )}
        </div>

        {/* Government ID */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col">
          <h3 className="text-lg font-semibold text-white mb-2">Government-issued ID</h3>
          <p className="text-sm text-gray-400 mb-6 flex-1">Identity verification will be required as part of the approval process.</p>
          
          {data.idStatus === 'Document selected' ? (
            <div className="bg-electric-cyan/10 border border-electric-cyan/30 rounded-xl p-4 flex items-center gap-3">
              <FileCheck className="w-5 h-5 text-electric-cyan" />
              <span className="text-sm font-medium text-electric-cyan">Document selected</span>
            </div>
          ) : (
            <label className="border-2 border-dashed border-white/20 hover:border-electric-cyan/50 rounded-xl p-8 flex flex-col items-center justify-center cursor-pointer transition-colors">
              <UploadCloud className="w-8 h-8 text-gray-400 mb-3" />
              <span className="text-sm font-medium text-white mb-1">Click to browse</span>
              <span className="text-xs text-gray-500">PDF, JPG or PNG</span>
              <input type="file" accept="image/jpeg, image/png, application/pdf" className="hidden" onChange={handleIdSelect} />
            </label>
          )}
        </div>

      </div>

      <div className="bg-brand-900 border border-white/10 rounded-xl p-5 flex gap-4">
        <ShieldAlert className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
        <div>
          <p className="text-sm font-semibold text-white mb-1">Verification Privacy</p>
          <p className="text-xs text-gray-400 leading-relaxed">
            Verification documents should be handled securely once the backend verification system is implemented. This is a frontend demo and no files are actually uploaded.
          </p>
        </div>
      </div>
      
    </motion.div>
  );
}
