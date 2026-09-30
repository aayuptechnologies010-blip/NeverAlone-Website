import React from 'react';
import { motion } from 'framer-motion';

export default function TrainingGuidelines() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="max-w-3xl">
      <h1 className="text-3xl font-bold text-white mb-3">Companion Guidelines</h1>
      <p className="text-gray-400 mb-10">Core principles every companion should follow.</p>

      <div className="space-y-8">
        <GuidelineCard title="Listening" desc="Give people room to talk. Let them lead the conversation when they need to." />
        <GuidelineCard title="Respect" desc="Different people will have different experiences and perspectives. Treat every person with dignity." />
        <GuidelineCard title="Boundaries" desc="Know what belongs in a companion conversation and what does not. Do not diagnose, prescribe medication, or provide clinical treatment." />
        <GuidelineCard title="Reliability" desc="Be available when you commit to a conversation. Customers depend on your scheduled availability." />
        <GuidelineCard title="Safety" desc="Know when something should be reported or redirected to appropriate support. Use reporting tools when necessary." />
        <GuidelineCard title="Privacy" desc="Do not request unnecessary personal information from customers. Do not share customer details outside the platform." />
        <GuidelineCard title="No Physical Meetups" desc="Neuravia is for online phone conversations only. Do not arrange physical meetings through the platform." />
        <GuidelineCard title="No Off-Platform Money" desc="Never request or accept money from customers outside the approved platform systems." />

        <div className="bg-electric-cyan/5 border border-electric-cyan/20 rounded-2xl p-6">
          <h3 className="text-lg font-bold text-white mb-2">Professional Support Is Separate</h3>
          <p className="text-sm text-gray-400 leading-relaxed">
            Regular companions are not therapists. Professional Support is a separate service for appropriately qualified and verified mental-health professionals. Do not claim professional qualifications you do not have.
          </p>
        </div>
      </div>
    </motion.div>
  );
}

function GuidelineCard({ title, desc }) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
      <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
      <p className="text-sm text-gray-400 leading-relaxed">{desc}</p>
    </div>
  );
}
