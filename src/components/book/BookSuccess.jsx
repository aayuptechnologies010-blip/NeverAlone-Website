import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { companions } from '../../data/companionsData';

const BookSuccess = ({ state }) => {
  const companion = companions.find(c => c.id === state.companion);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="max-w-xl mx-auto text-center"
    >
      <div className="mb-8 relative flex justify-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.2 }}
          className="w-24 h-24 bg-romantic-DEFAULT/20 rounded-full flex items-center justify-center relative"
        >
          <motion.div 
            animate={{ scale: [1, 1.2, 1] }} 
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute inset-0 bg-romantic-DEFAULT/20 rounded-full blur-md"
          />
          <Heart size={40} className="text-romantic-DEFAULT fill-romantic-DEFAULT relative z-10" />
        </motion.div>
      </div>

      <h2 className="text-3xl font-semibold text-white mb-4">Your conversation is booked.</h2>
      <p className="text-lg text-gray-300 mb-8">
        <span className="font-semibold text-white">{companion?.name}</span> will be ready to talk with you at <span className="font-semibold text-white">{state.time}</span>.
      </p>

      <div className="bg-brand-900 border border-white/10 rounded-3xl p-6 mb-8 text-left shadow-lg">
        <div className="flex justify-between items-center mb-4">
          <span className="text-gray-400 text-sm">Companion</span>
          <span className="text-white font-medium">{companion?.name}</span>
        </div>
        <div className="flex justify-between items-center mb-4">
          <span className="text-gray-400 text-sm">Topic</span>
          <span className="text-white font-medium">{state.category}</span>
        </div>
        <div className="flex justify-between items-center mb-4">
          <span className="text-gray-400 text-sm">When</span>
          <span className="text-white font-medium">{state.date} • {state.time}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-400 text-sm">Duration</span>
          <span className="text-white font-medium">60 Minutes</span>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row justify-center gap-4 mb-10">
        <Link 
          to="/" 
          className="px-8 py-3 rounded-full font-semibold text-brand-950 bg-white hover:bg-gray-100 transition-colors"
        >
          Go To Dashboard
        </Link>
        <Link 
          to="/companions" 
          className="px-8 py-3 rounded-full font-medium text-white bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
        >
          Browse More Companions
        </Link>
      </div>

      <p className="text-sm text-romantic-pink font-serif italic">
        "Sometimes knowing someone will be there is enough. 💗"
      </p>

    </motion.div>
  );
};

export default BookSuccess;
