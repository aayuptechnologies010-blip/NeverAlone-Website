import React from 'react';

export default function FaqCategories({ categories, activeCategory, onCategoryChange }) {
  return (
    <div className="w-full md:w-64 flex-shrink-0">
      {/* Mobile view: horizontal scroll */}
      <div className="md:hidden flex overflow-x-auto gap-2 pb-4 no-scrollbar -mx-4 px-4 border-b border-white/5 mb-6">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => onCategoryChange(cat.id)}
            className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeCategory === cat.id
                ? 'bg-electric-cyan text-brand-950'
                : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Desktop view: sticky sidebar */}
      <div className="hidden md:flex flex-col gap-1 sticky top-24">
        <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-4 px-4">
          Categories
        </h3>
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => onCategoryChange(cat.id)}
            className={`text-left px-4 py-3 rounded-xl text-sm font-medium transition-all ${
              activeCategory === cat.id
                ? 'bg-electric-cyan/10 text-electric-cyan'
                : 'text-gray-400 hover:bg-white/5 hover:text-white'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>
    </div>
  );
}
