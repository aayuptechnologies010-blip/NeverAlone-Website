import React from 'react';
import { motion } from 'framer-motion';
import { PhoneCall, ShieldAlert, HeartPulse } from 'lucide-react';

const EmergencySupport = () => {
  return (
    <section className="py-12 bg-rose-50/50 border-b border-rose-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-rose-100 text-rose-800 text-xs font-bold uppercase tracking-wider">
          <ShieldAlert size={14} />
          <span>Need Immediate Help?</span>
        </div>

        <p className="text-sm text-slate-700 max-w-2xl mx-auto leading-relaxed">
          If you or someone else is in immediate danger or experiencing a crisis, please contact your local emergency service or a crisis helpline immediately instead of waiting for a therapy appointment.
        </p>

        <div className="pt-2">
          <a
            href="tel:9152987821"
            className="inline-flex items-center space-x-2 px-6 py-2.5 rounded-xl font-bold text-xs sm:text-sm text-white bg-rose-600 hover:bg-rose-700 shadow-sm transition-all"
          >
            <PhoneCall size={15} />
            <span>KIRAN Helpline (24/7): 1800-599-0019</span>
          </a>
        </div>

      </div>
    </section>
  );
};

export default EmergencySupport;
