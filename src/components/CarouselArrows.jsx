// src/components/CarouselArrows.jsx
import React from 'react';

export default function CarouselArrows({ onPrev, onNext, canPrev, canNext }) {
  const base = 'p-1 text-gray-400 hover:text-gray-700 disabled:opacity-30 disabled:hover:text-gray-400 transition-colors';
  const icon = { width: 22, height: 22, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' };
  return (
    <div className="flex items-center gap-1">
      <button type="button" onClick={onPrev} disabled={!canPrev} aria-label="Anterior" className={base}>
        <svg {...icon}><path d="M19 12H5M11 6l-6 6 6 6" /></svg>
      </button>
      <button type="button" onClick={onNext} disabled={!canNext} aria-label="Siguiente" className={base}>
        <svg {...icon}><path d="M5 12h14M13 6l6 6-6 6" /></svg>
      </button>
    </div>
  );
}
