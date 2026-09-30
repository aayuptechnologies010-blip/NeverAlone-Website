import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Calendar, CreditCard, User, Shield, Stethoscope, HelpCircle } from 'lucide-react';

const categories = [
  {
    id: 'general',
    icon: MessageCircle,
    title: 'General Help',
    desc: 'Questions about Neuravia or how the platform works.',
  },
  {
    id: 'booking',
    icon: Calendar,
    title: 'Booking & Scheduling',
    desc: 'Help with booking, rescheduling or an upcoming conversation.',
  },
  {
    id: 'payment',
    icon: CreditCard,
    title: 'Plan / Payment Issue',
    desc: 'Questions about your plan, extra time or payment-related issues.',
  },
  {
    id: 'account',
    icon: User,
    title: 'Account Help',
    desc: 'Login, profile or account-related support.',
  },
  {
    id: 'safety',
    icon: Shield,
    title: 'Safety Concern',
    desc: 'Report behavior or get help with a safety concern.',
    isImportant: true,
  },
  {
    id: 'professional',
    icon: Stethoscope,
    title: 'Professional Support',
    desc: 'Questions about the separate Professional Support service.',
  },
  {
    id: 'other',
    icon: HelpCircle,
    title: 'Other',
    desc: 'Something else? Tell us what happened.',
  }
];

export default function SupportCategoryCards({ selectedCategory, onSelectCategory }) {
  return (
    <section className="py-16 bg-brand-950 relative" id="support-categories">
      <div className="max-w-6xl mx-auto px-4">
        
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-3xl font-semibold text-white mb-4">
            Choose what you need help with.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
          {categories.map((cat, index) => {
            const isSelected = selectedCategory === cat.id;
            const Icon = cat.icon;
            
            return (
              <motion.button
                key={cat.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                onClick={() => onSelectCategory(cat.id)}
                className={`text-left p-6 rounded-3xl transition-all border ${
                  isSelected 
                    ? 'bg-white/10 border-electric-cyan/50 shadow-[0_0_20px_rgba(34,211,238,0.15)] scale-[1.02]' 
                    : cat.isImportant
                      ? 'bg-red-500/5 border-red-500/20 hover:bg-red-500/10 hover:border-red-500/30'
                      : 'bg-white/5 border-white/10 hover:bg-white/[0.07] hover:border-white/20'
                }`}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-colors ${
                  isSelected 
                    ? 'bg-electric-cyan/20 text-electric-cyan'
                    : cat.isImportant
                      ? 'bg-red-500/10 text-red-400'
                      : 'bg-white/10 text-gray-400'
                }`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className={`text-lg font-semibold mb-2 ${
                  isSelected 
                    ? 'text-electric-cyan' 
                    : cat.isImportant ? 'text-red-300' : 'text-white'
                }`}>
                  {cat.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {cat.desc}
                </p>
              </motion.button>
            );
          })}
        </div>

      </div>
    </section>
  );
}
