import React from 'react';
import { Mic, MicOff, Volume2, VolumeX, PhoneOff, Flag } from 'lucide-react';

// Bottom control bar for the active call.
// Mute, Speaker, End Call, Report — no video/camera/screenshare.
export default function CallControls({
  isMuted,
  isSpeakerOn,
  onToggleMute,
  onToggleSpeaker,
  onEndCall,
  onReport,
}) {
  return (
    <div className="flex items-center justify-center gap-4 sm:gap-6">
      {/* Mute */}
      <ControlButton
        onClick={onToggleMute}
        active={isMuted}
        activeColor="bg-amber-500/20 border-amber-500/30"
        label={isMuted ? 'Unmute' : 'Mute'}
        ariaLabel={isMuted ? 'Unmute microphone' : 'Mute microphone'}
      >
        {isMuted ? (
          <MicOff className="w-5 h-5 text-amber-400" />
        ) : (
          <Mic className="w-5 h-5 text-white" />
        )}
      </ControlButton>

      {/* Speaker */}
      <ControlButton
        onClick={onToggleSpeaker}
        active={isSpeakerOn}
        activeColor="bg-electric-cyan/20 border-electric-cyan/30"
        label={isSpeakerOn ? 'Speaker On' : 'Speaker Off'}
        ariaLabel={isSpeakerOn ? 'Turn off speaker' : 'Turn on speaker'}
      >
        {isSpeakerOn ? (
          <Volume2 className="w-5 h-5 text-electric-cyan" />
        ) : (
          <VolumeX className="w-5 h-5 text-gray-400" />
        )}
      </ControlButton>

      {/* End Call */}
      <button
        onClick={onEndCall}
        aria-label="End conversation"
        title="End Conversation"
        className="w-16 h-16 rounded-full bg-red-500/90 hover:bg-red-500 flex items-center justify-center transition-all hover:shadow-[0_0_20px_rgba(239,68,68,0.4)] active:scale-95"
      >
        <PhoneOff className="w-6 h-6 text-white" />
      </button>

      {/* Report */}
      <ControlButton
        onClick={onReport}
        label="Report"
        ariaLabel="Report a concern"
      >
        <Flag className="w-5 h-5 text-gray-400" />
      </ControlButton>
    </div>
  );
}

function ControlButton({
  children,
  onClick,
  active,
  activeColor = '',
  label,
  ariaLabel,
}) {
  return (
    <div className="flex flex-col items-center gap-1.5">
      <button
        onClick={onClick}
        aria-label={ariaLabel || label}
        title={label}
        className={`w-12 h-12 rounded-full flex items-center justify-center transition-all border active:scale-95 ${
          active
            ? activeColor
            : 'bg-white/5 border-white/10 hover:bg-white/10'
        }`}
      >
        {children}
      </button>
      <span className="text-[10px] text-gray-500">{label}</span>
    </div>
  );
}
