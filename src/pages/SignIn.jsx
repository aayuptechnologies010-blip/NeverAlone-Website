import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Mail, Lock, Sparkles } from 'lucide-react';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import logo from '../assets/logo.jpeg';

const SignIn = () => {
  return (
    <div className="min-h-screen bg-brand-950 flex flex-col justify-center py-12 sm:px-6 lg:px-8 relative overflow-hidden font-sans">
      
      {/* Animated Background Gradients */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[20%] -left-[10%] w-[70vw] h-[70vw] rounded-full bg-romantic-DEFAULT/10 blur-[100px]"
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.5, 1],
            rotate: [0, -90, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-[20%] -right-[10%] w-[60vw] h-[60vw] rounded-full bg-dream-purple/10 blur-[100px]"
        />
      </div>

      <div className="w-full px-4 sm:px-0 mx-auto max-w-md relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex justify-center mb-8"
        >
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-romantic-DEFAULT to-dream-purple rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200" />
            <img src={logo} alt="Never Alone Logo" className="relative h-20 w-auto rounded-xl object-contain shadow-2xl" />
          </div>
        </motion.div>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mt-2 text-center text-3xl font-bold text-white tracking-tight"
        >
          Welcome back
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-2 text-center text-sm text-gray-400"
        >
          Don't have an account?{' '}
          <Link to="/signup" className="font-medium text-romantic-pink hover:text-white transition-colors flex items-center justify-center inline-flex gap-1">
            Create one now <Sparkles size={14} />
          </Link>
        </motion.p>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mt-8 w-full px-4 sm:px-0 mx-auto max-w-md relative z-10"
      >
        <div className="bg-brand-900/40 backdrop-blur-2xl py-8 px-4 shadow-2xl sm:rounded-[2rem] sm:px-10 border border-white/10 relative overflow-hidden">
          
          {/* Subtle top border highlight */}
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />

          <form className="space-y-6 relative z-10" action="#" method="POST">
            <div className="group">
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1.5 transition-colors group-focus-within:text-romantic-pink">
                Email address
              </label>
              <div className="relative rounded-xl shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-500 group-focus-within:text-romantic-pink transition-colors" />
                </div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full pl-11 pr-4 py-3.5 bg-brand-950/50 border border-white/10 rounded-xl focus:ring-1 focus:ring-romantic-pink focus:border-romantic-pink sm:text-sm text-white placeholder-gray-600 transition-all duration-300"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <div className="group">
              <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-1.5 transition-colors group-focus-within:text-romantic-pink">
                Password
              </label>
              <div className="relative rounded-xl shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-500 group-focus-within:text-romantic-pink transition-colors" />
                </div>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full pl-11 pr-4 py-3.5 bg-brand-950/50 border border-white/10 rounded-xl focus:ring-1 focus:ring-romantic-pink focus:border-romantic-pink sm:text-sm text-white placeholder-gray-600 transition-all duration-300"
                  placeholder="••••••••"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 bg-brand-950 border-white/20 text-romantic-pink focus:ring-romantic-pink rounded cursor-pointer"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-400 cursor-pointer hover:text-white transition-colors">
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <a href="#" className="font-medium text-romantic-pink hover:text-white transition-colors">
                  Forgot password?
                </a>
              </div>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full flex justify-center py-3.5 px-4 border border-transparent rounded-xl shadow-lg text-sm font-bold text-white bg-gradient-to-r from-romantic-DEFAULT to-romantic-pink hover:from-romantic-pink hover:to-romantic-DEFAULT focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-brand-950 focus:ring-romantic-pink transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-[0_0_20px_rgba(236,72,153,0.4)]"
              >
                Sign in
              </button>
            </div>
          </form>

          <div className="mt-8 relative z-10">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-white/10" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-brand-950/50 rounded-full text-gray-500 backdrop-blur-sm border border-white/5">Or continue with</span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-3">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#"
                className="w-full inline-flex justify-center py-3 px-4 border border-white/10 rounded-xl shadow-sm bg-white/5 hover:bg-white/10 transition-colors"
              >
                <FcGoogle className="w-5 h-5" />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#"
                className="w-full inline-flex justify-center py-3 px-4 border border-white/10 rounded-xl shadow-sm bg-white/5 hover:bg-white/10 transition-colors"
              >
                <FaFacebook className="w-5 h-5 text-blue-500" />
              </motion.a>
              
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#"
                className="w-full inline-flex justify-center py-3 px-4 border border-white/10 rounded-xl shadow-sm bg-white/5 hover:bg-white/10 transition-colors"
              >
                <FaInstagram className="w-5 h-5 text-pink-500" />
              </motion.a>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SignIn;
