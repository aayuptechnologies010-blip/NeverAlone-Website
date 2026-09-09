import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircleHeart, Sparkles, Smile, HeartHandshake, Eye } from 'lucide-react';

const features = [
  {
    icon: MessageCircleHeart,
    title: 'Playful Conversation',
    desc: 'Light conversations that don’t take themselves too seriously.',
  },
  {
    icon: Smile,
    title: 'Fun Banter',
    desc: 'Jokes, teasing and personality-driven conversation.',
  },
  {
    icon: Sparkles,
    title: 'Compliments',
    desc: 'Kind, respectful compliments between consenting adults.',
  },
  {
    icon: HeartHandshake,
    title: 'Light Romantic Conversation',
    desc: 'A little romantic energy without explicit content.',
  },
  {
    icon: Eye,
    title: "Getting To Know Someone's Vibe",
    desc: 'Talk, laugh and see if your personalities click.',
  },
];

export default function FlirtyWhatItIs() {
  return (
    <section className="py-16 bg-gradient-to-b from-transparent via-romantic-DEFAULT/5 to-transparent relative">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-3xl font-semibold text-white mb-4">
            Fun without crossing the line.
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Flirty Mode is designed for chemistry and banter in a safe, respectful environment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-romantic-DEFAULT/30 transition-colors ${
                index === features.length - 1 ? 'lg:col-start-2' : ''
              }`}
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-romantic-DEFAULT/20 to-dream-purple/20 flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-romantic-pink" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
