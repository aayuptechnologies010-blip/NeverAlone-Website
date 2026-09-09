import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { value: '15,000+', label: 'Sessions Completed' },
  { value: '8,000+', label: 'Happy Clients' },
  { value: '20+', label: 'Certified Professionals' },
  { value: '24/7', label: 'Availability' },
];

const Stats = () => {
  return (
    <section className="py-12 bg-brand-900 text-white border-y border-brand-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center divide-x-0 md:divide-x divide-brand-800/50">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center justify-center p-4"
            >
              <h4 className="text-3xl md:text-3xl font-semibold text-brand-300 mb-2">{stat.value}</h4>
              <p className="text-brand-200 font-medium tracking-wide uppercase text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
