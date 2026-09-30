import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { Heart, Mail, Lock, User, Loader2, AlertCircle } from 'lucide-react';
import { auth, googleProvider, signInWithPopup } from '../firebase';

const SignUp = () => {
  const navigate = useNavigate();
  const [agreed, setAgreed] = useState(false);
  const [loadingGoogle, setLoadingGoogle] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleGoogleSignUp = async () => {
    setErrorMsg('');
    setLoadingGoogle(true);
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      console.log("Signed up user via Google:", user);
      navigate('/dashboard');
    } catch (err) {
      // User closed the popup window manually
      if (err.code === 'auth/popup-closed-by-user' || err.code === 'auth/cancelled-popup-request') {
        console.log("User cancelled Google Sign-up popup.");
        return;
      }
      console.error("Google SignUp Error:", err);
      setErrorMsg(err.message || "Google registration failed. Please try again.");
    } finally {
      setLoadingGoogle(false);
    }
  };

  return (
    <div className="min-h-screen bg-brand-950 flex flex-col justify-center py-12 sm:px-6 lg:px-8 relative overflow-hidden text-white">
      {/* Background Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-gradient-to-b from-romantic-DEFAULT/15 via-electric-DEFAULT/5 to-transparent blur-[120px] pointer-events-none" />

      <div className="sm:mx-auto sm:w-full sm:max-w-md relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex justify-center"
        >
          <div className="w-16 h-16 bg-brand-900 border border-white/10 rounded-2xl shadow-sm flex items-center justify-center text-romantic-pink mb-6">
            <Heart size={32} />
          </div>
        </motion.div>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mt-2 text-center text-3xl font-semibold text-white"
        >
          Create your space
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-2 text-center text-sm text-gray-400"
        >
          Already have an account?{' '}
          <Link to="/signin" className="font-medium text-electric-cyan hover:text-cyan-300 transition-colors">
            Sign in
          </Link>
        </motion.p>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mt-8 sm:mx-auto sm:w-full sm:max-w-md relative z-10 px-4 sm:px-0"
      >
        <div className="bg-brand-900/80 backdrop-blur-xl py-8 px-6 shadow-2xl rounded-3xl sm:px-10 border border-white/10">
          
          {errorMsg && (
            <div className="mb-6 p-3.5 bg-red-500/10 border border-red-500/20 rounded-xl flex items-center gap-2.5 text-xs text-red-400">
              <AlertCircle size={16} className="shrink-0" />
              <span>{errorMsg}</span>
            </div>
          )}

          {/* Google Sign Up Button */}
          <button
            type="button"
            onClick={handleGoogleSignUp}
            disabled={loadingGoogle}
            className="w-full flex items-center justify-center gap-3 py-3.5 px-4 border border-white/15 rounded-xl bg-white hover:bg-gray-100 text-brand-950 font-semibold text-sm transition-all shadow-md transform hover:scale-[1.01] disabled:opacity-75"
          >
            {loadingGoogle ? (
              <Loader2 className="w-5 h-5 animate-spin text-brand-950" />
            ) : (
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
              </svg>
            )}
            <span>{loadingGoogle ? 'Connecting with Google...' : 'Sign up with Google'}</span>
          </button>

          <div className="my-6 relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/10" />
            </div>
            <div className="relative flex justify-center text-xs">
              <span className="px-3 bg-brand-900 text-gray-400 uppercase tracking-wider">Or register with email</span>
            </div>
          </div>

          <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); navigate('/dashboard'); }}>
            <div>
              <label htmlFor="name" className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">
                Your Preferred Name
              </label>
              <div className="relative rounded-xl shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                  <User className="h-4 w-4 text-gray-400" />
                </div>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="block w-full pl-10 pr-4 py-3 border border-white/10 rounded-xl focus:ring-electric-cyan focus:border-electric-cyan text-sm transition-colors bg-brand-950 text-white placeholder-gray-500 focus:outline-none"
                  placeholder="How should we call you?"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">
                Email address
              </label>
              <div className="relative rounded-xl shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                  <Mail className="h-4 w-4 text-gray-400" />
                </div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full pl-10 pr-4 py-3 border border-white/10 rounded-xl focus:ring-electric-cyan focus:border-electric-cyan text-sm transition-colors bg-brand-950 text-white placeholder-gray-500 focus:outline-none"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">
                Password
              </label>
              <div className="relative rounded-xl shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                  <Lock className="h-4 w-4 text-gray-400" />
                </div>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  className="block w-full pl-10 pr-4 py-3 border border-white/10 rounded-xl focus:ring-electric-cyan focus:border-electric-cyan text-sm transition-colors bg-brand-950 text-white placeholder-gray-500 focus:outline-none"
                  placeholder="••••••••"
                />
              </div>
            </div>

            <div className="flex items-start text-xs">
              <input
                id="terms"
                name="terms"
                type="checkbox"
                required
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
                className="h-4 w-4 mt-0.5 text-pink-600 focus:ring-pink-500 border-gray-600 rounded bg-brand-950 shrink-0"
              />
              <label htmlFor="terms" className="ml-2.5 text-gray-300 leading-relaxed">
                I agree to the{' '}
                <Link to="/terms" className="text-electric-cyan hover:underline">
                  Terms of Service
                </Link>{' '}
                and confirm that I am at least 18 years of age.
              </label>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full flex justify-center py-3.5 px-4 border border-transparent rounded-xl shadow-lg text-sm font-bold text-white bg-gradient-to-r from-pink-600 to-rose-600 hover:opacity-95 focus:outline-none transition-all transform hover:scale-[1.01]"
              >
                Create Account
              </button>
            </div>
          </form>

        </div>
      </motion.div>
    </div>
  );
};

export default SignUp;
