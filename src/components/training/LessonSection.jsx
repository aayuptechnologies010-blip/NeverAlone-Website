import React from 'react';

/**
 * A single lesson section with a heading, optional label, and children content.
 */
export default function LessonSection({ label, title, children }) {
  return (
    <section className="mb-12">
      {label && (
        <p className="text-xs font-semibold text-electric-cyan uppercase tracking-widest mb-2">{label}</p>
      )}
      {title && (
        <h3 className="text-xl md:text-2xl font-semibold text-white mb-4 leading-snug">{title}</h3>
      )}
      <div className="text-gray-300 leading-relaxed space-y-4 text-sm md:text-base">
        {children}
      </div>
    </section>
  );
}
