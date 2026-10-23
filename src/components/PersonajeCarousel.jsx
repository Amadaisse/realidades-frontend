// src/components/PersonajeCarousel.jsx
import React, { useState } from 'react';

export default function PersonajeCarousel({ personajes = [] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!personajes || personajes.length === 0) return null;

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? personajes.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === personajes.length - 1 ? 0 : prev + 1));
  };

  const personaje = personajes[currentIndex];

  return (
    <div className="bg-slate-100 border border-slate-200 p-4 rounded-xl relative shadow-sm text-center">
      <h3 className="text-xs font-bold uppercase tracking-wider text-red-600 mb-3 text-left">
        El Personaje
      </h3>

      <a href={`/${personaje.slug}`} className="group block">
        <div className="w-full aspect-square max-w-[220px] mx-auto overflow-hidden rounded-lg mb-3 shadow-md bg-slate-200">
          <img
            src={personaje.foto}
            alt={personaje.nombre}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <h4 className="font-bold text-sm text-slate-900 group-hover:text-red-600 transition-colors line-clamp-2">
          {personaje.nombre}
        </h4>
      </a>

      {personajes.length > 1 && (
        <div className="flex justify-between items-center mt-3 px-2">
          <button
            onClick={handlePrev}
            className="p-1.5 bg-white rounded-full shadow text-xs hover:bg-slate-200 transition"
            aria-label="Anterior personaje"
          >
            ◀
          </button>
          <span className="text-[10px] text-slate-500 font-medium">
            {currentIndex + 1} / {personajes.length}
          </span>
          <button
            onClick={handleNext}
            className="p-1.5 bg-white rounded-full shadow text-xs hover:bg-slate-200 transition"
            aria-label="Siguiente personaje"
          >
            ▶
          </button>
        </div>
      )}
    </div>
  );
}