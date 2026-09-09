import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Users, BrainCircuit, HeartHandshake, Shield, Ear } from 'lucide-react';

const features = [
  {
    title: 'Inclusive and Accessible Services',
    description: 'We are committed to making mental healthcare accessible to all. We offer online therapy options, flexible scheduling, and ensure our services are available to as many individuals as possible.',
    icon: Globe
  },
  {
    title: 'Multidisciplinary Team of Experts',
    description: 'Our team comprises highly skilled professionals, counselors, and therapists who collaborate to provide a cohesive and synergistic approach to your mental well-being.',
    icon: Users
  },
  {
    title: 'Evidence-Based Integration',
    description: 'Our approach combines traditional psychotherapies with the therapeutic potential of scientific and evidence-based techniques to enhance emotional regulation and reduce stress.',
    icon: BrainCircuit
  },
  {
    title: 'Real Conversations & Fresh Perspective',
    description: 'Talk about real life—not just messages on a screen. Sometimes another person\'s perspective helps you see a situation differently.',
    icon: HeartHandshake
  },
  {
    title: 'Privacy First & Clear Boundaries',
    description: 'We design the service around protecting your personal information. Strong community rules help keep conversations respectful and safe.',
    icon: Shield
  },
  {
    title: 'Someone Who Listens',
    description: 'Talk openly and know that someone is there to hear you without interruption. Create a space where you can speak honestly.',
    icon: Ear
  }
];

const Features = () => {
  return (
    <section className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-6">
          <h2 className="text-brand-500 font-semibold tracking-wide uppercase text-sm mb-3">Why Never Alone?</h2>
          <h3 className="text-3xl md:text-3xl font-semibold text-brand-950 mb-6">A safe space for real conversations.</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((feature, index) => {
            const Icon = feature.icon || Shield;
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex gap-4 p-6 rounded-2xl bg-brand-50 border border-brand-100 hover:border-brand-300 transition-colors"
              >
                <div className="flex-shrink-0 mt-1">
                  <div className="w-12 h-12 rounded-full bg-brand-100 flex items-center justify-center text-brand-600">
                    <Icon className="w-6 h-6" />
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-brand-900 mb-2">{feature.title}</h4>
                  <p className="text-brand-700 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  );
};

export default Features;
