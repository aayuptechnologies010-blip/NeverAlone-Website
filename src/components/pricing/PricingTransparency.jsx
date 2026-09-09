import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Phone, UserX, Stethoscope, ShieldCheck, ArrowRight } from 'lucide-react';

const PricingTransparency = () => {
  const points = [
    {
      icon: Clock,
      title: "60 Minutes Daily",
      desc: "Know exactly what your daily conversation includes without hidden limits.",
      iconColor: "text-blue-600",
      iconBg: "bg-blue-50 border-blue-100",
      glowColor: "group-hover:shadow-[0_0_20px_rgba(37,99,235,0.15)]",
    },
    {
      icon: Clock,
      title: "₹199 Extra Hour",
      desc: "Add more conversation time effortlessly when available. Simple flat rate.",
      iconColor: "text-pink-600",
      iconBg: "bg-pink-50 border-pink-100",
      glowColor: "group-hover:shadow-[0_0_20px_rgba(219,39,119,0.15)]",
    },
    {
      icon: Phone,
      title: "Private Calls",
      desc: "100% audio only. No video calls ever, ensuring your complete privacy.",
      iconColor: "text-purple-600",
      iconBg: "bg-purple-50 border-purple-100",
      glowColor: "group-hover:shadow-[0_0_20px_rgba(147,51,234,0.15)]",
    },
    {
      icon: UserX,
      title: "Availability Varies",
      desc: "Individual companion availability can vary day by day based on schedule.",
      iconColor: "text-amber-600",
      iconBg: "bg-amber-50 border-amber-100",
      glowColor: "group-hover:shadow-[0_0_20px_rgba(217,119,6,0.15)]",
    },
    {
      icon: Stethoscope,
      title: "Therapy is Separate",
      desc: "Qualified professional mental health services have specific pricing.",
      iconColor: "text-emerald-600",
      iconBg: "bg-emerald-50 border-emerald-100",
      glowColor: "group-hover:shadow-[0_0_20px_rgba(5,150,105,0.15)]",
    }
  ];

  return (
    <section className="py-12 bg-[#FAFAFA] border-y border-gray-200 overflow-hidden relative">
      
      {/* Decorative Background Blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[300px] h-[300px] rounded-full bg-pink-400/10 blur-[80px]" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[400px] h-[400px] rounded-full bg-purple-400/10 blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-8">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 bg-white border border-gray-200 px-3 py-1 rounded-full text-gray-600 text-[10px] font-bold uppercase tracking-widest mb-3 shadow-sm"
          >
            <ShieldCheck size={14} className="text-emerald-500" />
            Clear Boundaries
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight mb-2"
          >
            No surprises. Just transparency.
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-sm md:text-base text-gray-500 max-w-2xl mx-auto font-medium"
          >
            We believe in setting clear expectations from the start. Swipe to see our rules.
          </motion.p>
        </div>

        {/* Horizontal Scroll Container */}
        <div className="relative -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 group/scroll">
          <div className="flex overflow-x-auto gap-4 pb-6 pt-2 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            {points.map((point, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, x: 30, y: 10 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, type: "spring", stiffness: 100, damping: 20 }}
                className={`group min-w-[240px] md:min-w-[280px] max-w-[280px] shrink-0 bg-white border border-gray-100 rounded-[1.5rem] p-6 shadow-sm hover:shadow-[0_10px_25px_rgb(0,0,0,0.06)] ${point.glowColor} hover:-translate-y-1 transition-all duration-300 snap-center flex flex-col items-center text-center relative overflow-hidden cursor-grab active:cursor-grabbing`}
              >
                {/* Top color accent bar */}
                <div className={`absolute top-0 left-0 w-full h-1 ${point.iconBg.split(' ')[0]} opacity-50`} />

                <div className={`w-12 h-12 rounded-xl border flex items-center justify-center mb-4 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 ${point.iconBg} ${point.iconColor}`}>
                  <point.icon size={22} strokeWidth={1.5} />
                </div>
                
                <h3 className="text-base font-bold text-gray-900 mb-2 group-hover:text-gray-800 transition-colors">{point.title}</h3>
                <p className="text-gray-500 text-xs md:text-[13px] leading-relaxed">{point.desc}</p>
                
                <div className="mt-4 pt-4 border-t border-gray-50 w-full flex items-center justify-center gap-1.5 text-[10px] font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity text-gray-400">
                  Swipe <ArrowRight size={12} className="animate-pulse" />
                </div>
              </motion.div>
            ))}
            
            {/* Empty padding element for the end of the scroll */}
            <div className="min-w-[20px] md:min-w-[40px] shrink-0" />
          </div>
          
          {/* Scroll fade gradients for depth */}
          <div className="absolute top-0 bottom-0 left-0 w-6 md:w-16 bg-gradient-to-r from-[#FAFAFA] to-transparent pointer-events-none z-10" />
          <div className="absolute top-0 bottom-0 right-0 w-6 md:w-16 bg-gradient-to-l from-[#FAFAFA] to-transparent pointer-events-none z-10 opacity-100 transition-opacity duration-300" />
        </div>

      </div>
    </section>
  );
};

export default PricingTransparency;
