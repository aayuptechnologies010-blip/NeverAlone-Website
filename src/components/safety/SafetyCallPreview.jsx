import React from 'react';
import { Mic, Volume2, PhoneOff, Flag, CameraOff, VideoOff } from 'lucide-react';

export default function SafetyCallPreview() {
  return (
    <section className="py-16 bg-brand-950 relative border-t border-white/5">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-20 items-center">
          
          <div>
            <h2 className="text-3xl md:text-3xl font-semibold text-white mb-6">
              You’re always in control.
            </h2>
            <p className="text-gray-400 mb-10 leading-relaxed text-lg">
              During a call, you have the power to steer the conversation or end it entirely. Your comfort is the priority.
            </p>

            <ul className="space-y-6">
              <ControlItem text="Change the subject anytime" />
              <ControlItem text="Set a boundary anytime" />
              <ControlItem text="End the conversation anytime" />
              <ControlItem text="Report a concern anytime" />
            </ul>
          </div>

          <div className="bg-brand-900 border border-white/10 rounded-3xl p-8 flex flex-col items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-brand-950 to-transparent pointer-events-none opacity-50" />
            
            {/* Simulated Call UI */}
            <div className="w-full max-w-xs relative z-10">
              <div className="text-center mb-10">
                <div className="w-24 h-24 rounded-full bg-electric-cyan/10 border border-electric-cyan/30 mx-auto mb-4 overflow-hidden">
                   <div className="w-full h-full bg-white/5" />
                </div>
                <h3 className="text-white font-semibold text-xl">Companion</h3>
                <p className="text-electric-cyan font-mono mt-1">12:04</p>
              </div>

              {/* Controls */}
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="flex flex-col items-center gap-2">
                  <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center text-white">
                    <Mic className="w-6 h-6" />
                  </div>
                  <span className="text-xs text-gray-400">Mute</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center text-white">
                    <Volume2 className="w-6 h-6" />
                  </div>
                  <span className="text-xs text-gray-400">Speaker</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="w-14 h-14 rounded-full bg-red-500/80 flex items-center justify-center text-white shadow-[0_0_15px_rgba(239,68,68,0.3)]">
                    <PhoneOff className="w-6 h-6" />
                  </div>
                  <span className="text-xs text-gray-400">End Call</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400">
                    <Flag className="w-5 h-5" />
                  </div>
                  <span className="text-xs text-gray-400">Report</span>
                </div>
              </div>

              {/* Notice */}
              <div className="flex items-center justify-center gap-4 pt-6 border-t border-white/10 text-xs text-gray-500 font-medium">
                 <span className="flex items-center gap-1"><CameraOff className="w-3.5 h-3.5"/> No Video</span>
                 <span className="flex items-center gap-1"><VideoOff className="w-3.5 h-3.5"/> No Camera</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

function ControlItem({ text }) {
  return (
    <li className="flex items-center gap-3">
      <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
        <span className="w-2 h-2 rounded-full bg-electric-cyan" />
      </div>
      <span className="text-gray-300 font-medium">{text}</span>
    </li>
  );
}
