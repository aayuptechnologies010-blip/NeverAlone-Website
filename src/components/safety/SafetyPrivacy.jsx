import React from 'react';
import { CameraOff, VideoOff, Smartphone, MapPinOff, CreditCard, Key } from 'lucide-react';

export default function SafetyPrivacy() {
  return (
    <section id="privacy" className="py-16 bg-brand-950 relative border-t border-white/5">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Phone Only Privacy */}
        <div className="mb-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-3xl font-semibold text-white mb-4">
              No video. Less pressure.
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Never Alone is designed around phone conversations rather than video calls. Personal phone numbers should not be unnecessarily displayed.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <PrivacyItem icon={CameraOff} text="No Camera" />
            <PrivacyItem icon={VideoOff} text="No Webcam" />
            <PrivacyItem icon={Smartphone} text="No Video Preview" />
            <PrivacyItem icon={MapPinOff} text="No Screen Sharing" />
          </div>
        </div>

        {/* Share Less */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-8 items-center">
          <div>
            <h2 className="text-3xl md:text-3xl font-semibold text-white mb-6">
              Share less. Stay comfortable.
            </h2>
            <p className="text-gray-400 mb-8 leading-relaxed">
              We recommend keeping your personal life secure. Do not send money to companions outside the platform, and do not move conversations to unsafe or off-platform arrangements.
            </p>
            <div className="bg-electric-cyan/5 border border-electric-cyan/20 rounded-2xl p-6">
              <h3 className="text-sm font-semibold text-electric-cyan uppercase tracking-wider mb-4">
                Avoid sharing:
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <ListItem text="Home address" />
                <ListItem text="Banking details" />
                <ListItem text="Passwords" />
                <ListItem text="OTP codes" />
                <ListItem text="Government IDs" />
                <ListItem text="Private credentials" />
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex items-start gap-4">
              <CreditCard className="w-6 h-6 text-gray-400 flex-shrink-0" />
              <p className="text-sm text-gray-300">
                Never send money directly to a companion or share financial information during a call.
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex items-start gap-4">
              <Key className="w-6 h-6 text-gray-400 flex-shrink-0" />
              <p className="text-sm text-gray-300">
                Keep your account credentials private. Our team will never ask for your password or OTP.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

function PrivacyItem({ icon: Icon, text }) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col items-center justify-center text-center gap-3">
      <Icon className="w-6 h-6 text-gray-400" />
      <span className="text-sm font-medium text-gray-300">{text}</span>
    </div>
  );
}

function ListItem({ text }) {
  return (
    <li className="flex items-center gap-2 text-sm text-gray-300">
      <span className="w-1 h-1 rounded-full bg-electric-cyan flex-shrink-0" />
      {text}
    </li>
  );
}
