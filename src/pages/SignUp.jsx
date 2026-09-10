import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Mail, Lock, User, Calendar, Phone, Sparkles } from 'lucide-react';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import logo from '../assets/logo.jpeg';

const SignUp = () => {
  return (
    <div className="min-h-screen bg-brand-950 flex flex-col justify-center py-12 sm:px-6 lg:px-8 relative overflow-hidden font-sans">
      
      {/* Animated Background Gradients */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, -90, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-[10%] -right-[10%] w-[60vw] h-[60vw] rounded-full bg-dream-purple/10 blur-[100px]"
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.3, 1],
            rotate: [0, 90, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-[10%] -left-[10%] w-[70vw] h-[70vw] rounded-full bg-romantic-DEFAULT/10 blur-[120px]"
        />
      </div>

      <div className="w-full px-4 sm:px-0 mx-auto max-w-md relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex justify-center mb-8"
        >
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-dream-purple to-romantic-DEFAULT rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200" />
            <img src={logo} alt="Never Alone Logo" className="relative h-20 w-auto rounded-xl object-contain shadow-2xl" />
          </div>
        </motion.div>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mt-2 text-center text-3xl font-bold text-white tracking-tight"
        >
          Create your account
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-2 text-center text-sm text-gray-400"
        >
          Already have an account?{' '}
          <Link to="/signin" className="font-medium text-dream-purple hover:text-white transition-colors flex items-center justify-center inline-flex gap-1">
            Sign in instead <Sparkles size={14} />
          </Link>
        </motion.p>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mt-8 w-full px-4 sm:px-0 mx-auto max-w-xl relative z-10"
      >
        <div className="bg-brand-900/40 backdrop-blur-2xl py-8 px-4 shadow-2xl sm:rounded-[2rem] sm:px-10 border border-white/10 relative overflow-hidden">
          
          {/* Subtle top border highlight */}
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />

          <form className="space-y-6 relative z-10" action="#" method="POST">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="group">
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-300 mb-1.5 transition-colors group-focus-within:text-dream-purple">
                  First Name
                </label>
                <div className="relative rounded-xl shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <User className="h-5 w-5 text-gray-500 group-focus-within:text-dream-purple transition-colors" />
                  </div>
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    required
                    className="block w-full pl-11 pr-4 py-3 bg-brand-950/50 border border-white/10 rounded-xl focus:ring-1 focus:ring-dream-purple focus:border-dream-purple sm:text-sm text-white placeholder-gray-600 transition-all duration-300"
                    placeholder="John"
                  />
                </div>
              </div>

              <div className="group">
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-300 mb-1.5 transition-colors group-focus-within:text-dream-purple">
                  Last Name
                </label>
                <div className="relative rounded-xl shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <User className="h-5 w-5 text-gray-500 group-focus-within:text-dream-purple transition-colors" />
                  </div>
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    required
                    className="block w-full pl-11 pr-4 py-3 bg-brand-950/50 border border-white/10 rounded-xl focus:ring-1 focus:ring-dream-purple focus:border-dream-purple sm:text-sm text-white placeholder-gray-600 transition-all duration-300"
                    placeholder="Doe"
                  />
                </div>
              </div>
            </div>

            <div className="group">
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1.5 transition-colors group-focus-within:text-dream-purple">
                Email address
              </label>
              <div className="relative rounded-xl shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-500 group-focus-within:text-dream-purple transition-colors" />
                </div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full pl-11 pr-4 py-3 bg-brand-950/50 border border-white/10 rounded-xl focus:ring-1 focus:ring-dream-purple focus:border-dream-purple sm:text-sm text-white placeholder-gray-600 transition-all duration-300"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="group">
                <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1.5 transition-colors group-focus-within:text-dream-purple">
                  Phone Number
                </label>
                <div className="relative rounded-xl shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Phone className="h-5 w-5 text-gray-500 group-focus-within:text-dream-purple transition-colors" />
                  </div>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    className="block w-full pl-11 pr-4 py-3 bg-brand-950/50 border border-white/10 rounded-xl focus:ring-1 focus:ring-dream-purple focus:border-dream-purple sm:text-sm text-white placeholder-gray-600 transition-all duration-300"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
              </div>

              <div className="group">
                <label htmlFor="dob" className="block text-sm font-medium text-gray-300 mb-1.5 transition-colors group-focus-within:text-dream-purple">
                  Date of Birth
                </label>
                <div className="relative rounded-xl shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Calendar className="h-5 w-5 text-gray-500 group-focus-within:text-dream-purple transition-colors" />
                  </div>
                  <input
                    id="dob"
                    name="dob"
                    type="date"
                    required
                    className="block w-full pl-11 pr-4 py-3 bg-brand-950/50 border border-white/10 rounded-xl focus:ring-1 focus:ring-dream-purple focus:border-dream-purple sm:text-sm text-white placeholder-gray-400 transition-all duration-300 [color-scheme:dark]"
                  />
                </div>
              </div>
            </div>

            <div className="group">
              <label htmlFor="gender" className="block text-sm font-medium text-gray-300 mb-1.5 transition-colors group-focus-within:text-dream-purple">
                Gender
              </label>
              <div className="relative rounded-xl shadow-sm">
                <select
                  id="gender"
                  name="gender"
                  className="block w-full px-4 py-3 bg-brand-950/50 border border-white/10 rounded-xl focus:ring-1 focus:ring-dream-purple focus:border-dream-purple sm:text-sm text-white transition-all duration-300 appearance-none"
                >
                  <option value="" className="text-gray-900">Select Gender</option>
                  <option value="male" className="text-gray-900">Male</option>
                  <option value="female" className="text-gray-900">Female</option>
                  <option value="non-binary" className="text-gray-900">Non-binary</option>
                  <option value="prefer-not-to-say" className="text-gray-900">Prefer not to say</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-400">
                  <svg className="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="group">
              <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-1.5 transition-colors group-focus-within:text-dream-purple">
                Password
              </label>
              <div className="relative rounded-xl shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-500 group-focus-within:text-dream-purple transition-colors" />
                </div>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="new-password"
                  required
                  className="block w-full pl-11 pr-4 py-3 bg-brand-950/50 border border-white/10 rounded-xl focus:ring-1 focus:ring-dream-purple focus:border-dream-purple sm:text-sm text-white placeholder-gray-600 transition-all duration-300"
                  placeholder="••••••••"
                />
              </div>
            </div>

            <div className="flex items-center">
              <input
                id="terms"
                name="terms"
                type="checkbox"
                required
                className="h-4 w-4 bg-brand-950 border-white/20 text-dream-purple focus:ring-dream-purple rounded cursor-pointer"
              />
              <label htmlFor="terms" className="ml-2 block text-sm text-gray-400">
                I agree to the <a href="#" className="text-dream-purple hover:text-white transition-colors">Terms of Service</a> and <a href="#" className="text-dream-purple hover:text-white transition-colors">Privacy Policy</a>
              </label>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full flex justify-center py-3.5 px-4 border border-transparent rounded-xl shadow-lg text-sm font-bold text-white bg-gradient-to-r from-dream-purple to-romantic-DEFAULT hover:from-romantic-DEFAULT hover:to-dream-purple focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-brand-950 focus:ring-dream-purple transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-[0_0_20px_rgba(168,85,247,0.4)]"
              >
                Create Account
              </button>
            </div>
          </form>

          <div className="mt-8 relative z-10">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-white/10" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-brand-950/50 rounded-full text-gray-500 backdrop-blur-sm border border-white/5">Or sign up with</span>
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

export default SignUp;
