import React from 'react';
import { Link } from 'react-router-dom';
import { Info, CreditCard, ShieldCheck, HelpCircle, ArrowRight } from 'lucide-react';

const links = [
  {
    to: '/how-it-works',
    icon: Info,
    title: 'How Neuravia Works',
    desc: 'The steps from booking to conversation.'
  },
  {
    to: '/pricing',
    icon: CreditCard,
    title: 'Plans & Pricing',
    desc: 'View weekly, monthly and yearly plans.'
  },
  {
    to: '/safety',
    icon: ShieldCheck,
    title: 'Safety & Privacy',
    desc: 'Read about our boundaries and guidelines.'
  },
  {
    to: '/faq',
    icon: HelpCircle,
    title: 'Frequently Asked Questions',
    desc: 'Find answers to common platform questions.'
  }
];

export default function SupportQuickHelp() {
  return (
    <div className="mb-10">
      <h3 className="text-xl font-semibold text-white mb-6">
        Maybe the answer is already here.
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {links.map((link) => {
          const Icon = link.icon;
          return (
            <Link
              key={link.to}
              to={link.to}
              className="group bg-white/5 border border-white/10 rounded-2xl p-5 hover:bg-white/10 hover:border-white/20 transition-all flex items-start gap-4"
            >
              <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center flex-shrink-0 group-hover:bg-electric-cyan/10 transition-colors">
                <Icon className="w-5 h-5 text-gray-400 group-hover:text-electric-cyan transition-colors" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="text-sm font-semibold text-white group-hover:text-electric-cyan transition-colors">
                    {link.title}
                  </h4>
                  <ArrowRight className="w-4 h-4 text-gray-500 group-hover:text-electric-cyan transition-colors group-hover:translate-x-1" />
                </div>
                <p className="text-xs text-gray-400 leading-relaxed">
                  {link.desc}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
