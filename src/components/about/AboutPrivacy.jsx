import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Phone, VideoOff, ShieldAlert, Flag, Hand, MapPinOff } from 'lucide-react';

export default function AboutPrivacy() {
  return (
    <section className="py-16 bg-brand-950 relative border-t border-white/5">
      <div className="max-w-5xl mx-auto px-4">
        
        <div className="text-center mb-10">
          <p className="text-xs font-semibold text-electric-cyan uppercase tracking-widest mb-6">
            Built With Boundaries
          </p>
          <h2 className="text-3xl md:text-3xl font-semibold text-white mb-6">
            Connection shouldn’t require <br className="hidden md:block" />
            giving up your comfort.
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
            You can change the subject, set a boundary or end a conversation whenever you need to.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-10">
          <BoundaryItem icon={Phone} text="Phone Calls Only" />
          <BoundaryItem icon={VideoOff} text="No Video" />
          <BoundaryItem icon={ShieldAlert} text="18+" />
          <BoundaryItem icon={Flag} text="Report Available" />
          <BoundaryItem icon={Hand} text="Clear Boundaries" />
          <BoundaryItem icon={MapPinOff} text="No Physical Meetups" />
        </div>

        <div className="text-center">
          <Link
            to="/safety"
            className="inline-flex px-8 py-4 rounded-full text-sm font-semibold text-white border border-white/20 bg-white/5 hover:bg-white/10 transition-colors"
          >
            Visit Safety Center
          </Link>
        </div>

      </div>
    </section>
  );
}

function BoundaryItem({ icon: Icon, text }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col items-center justify-center text-center gap-3 hover:bg-white/10 transition-colors"
    >
      <Icon className="w-6 h-6 text-electric-cyan" />
      <span className="text-sm font-semibold text-gray-300">{text}</span>
    </motion.div>
  );
}
