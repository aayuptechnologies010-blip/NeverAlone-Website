import React from 'react';
import { Link } from 'react-router-dom';
import { MessageSquare, Stethoscope, AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function AboutProfSupport() {
  return (
    <section className="py-16 bg-brand-900 relative border-t border-white/5">
      <div className="max-w-6xl mx-auto px-4">
        
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-3xl font-semibold text-white mb-6">
            Sometimes you need a conversation. <br className="hidden md:block" />
            Sometimes you need professional support.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1: Friendly Conversation */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-brand-950 border border-white/10 rounded-3xl p-8 lg:p-10 flex flex-col"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center">
                <MessageSquare className="w-6 h-6 text-gray-300" />
              </div>
              <h3 className="text-2xl font-semibold text-white">Friendly Conversation</h3>
            </div>
            
            <p className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
              Regular companions can provide:
            </p>
            <ul className="space-y-3 mb-8 flex-1">
              <ListItem text="Listening" />
              <ListItem text="Conversation" />
              <ListItem text="Friendly perspectives" />
              <ListItem text="Everyday discussion" />
            </ul>

            <div className="flex items-start gap-3 bg-red-500/10 p-4 rounded-xl border border-red-500/20 mb-8">
              <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
              <p className="text-sm text-red-200/80 font-medium">
                Companions are not therapists.
              </p>
            </div>

            <Link
              to="/categories"
              className="w-full py-4 rounded-xl text-center text-sm font-semibold text-brand-950 bg-white hover:bg-gray-200 transition-colors"
            >
              Find A Companion
            </Link>
          </motion.div>

          {/* Card 2: Professional Support */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-electric-cyan/5 border border-electric-cyan/20 rounded-3xl p-8 lg:p-10 flex flex-col relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-electric-cyan/10 rounded-full blur-[80px] pointer-events-none" />
            
            <div className="relative z-10 flex flex-col h-full">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-electric-cyan/10 flex items-center justify-center">
                  <Stethoscope className="w-6 h-6 text-electric-cyan" />
                </div>
                <h3 className="text-2xl font-semibold text-white">Professional Support</h3>
              </div>
              
              <p className="text-gray-300 mb-8 flex-1 text-lg leading-relaxed">
                A separate service with appropriately qualified and verified professionals.
              </p>

              <div className="mt-auto pt-6 border-t border-white/10">
                <Link
                  to="/professional-support"
                  className="block w-full py-4 rounded-xl text-center text-sm font-semibold text-brand-950 bg-electric-cyan hover:bg-electric-cyan/90 transition-colors shadow-[0_0_15px_rgba(34,211,238,0.2)]"
                >
                  Explore Professional Support
                </Link>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}

function ListItem({ text }) {
  return (
    <li className="flex items-center gap-3 text-sm text-gray-300">
      <span className="w-1.5 h-1.5 rounded-full bg-white/40 flex-shrink-0" />
      {text}
    </li>
  );
}
