// src/components/PersonajeCarousel.jsx
import React, { useState } from 'react';
import CarouselArrows from './CarouselArrows.jsx';

export default function PersonajeCarousel({ personajes = [] }) {
  const [i, setI] = useState(0);
  if (!personajes || personajes.length === 0) return null;

  const p = personajes[i];
  const total = personajes.length;

  return (
    <section className="flex flex-col bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden lg:flex-1 lg:min-h-[480px]">
      <div className="flex items-center justify-between px-5 pt-4 pb-3 border-b border-gray-200">
        <h2 className="text-blue-700 text-xl font-medium">El Personaje</h2>
        {total > 1 && (
          <CarouselArrows
            onPrev={() => setI((n) => Math.max(0, n - 1))}
            onNext={() => setI((n) => Math.min(total - 1, n + 1))}
            canPrev={i > 0}
            canNext={i < total - 1}
          />
        )}
      </div>

      <a href={`/${p.slug}`} className="group flex flex-col flex-1">
        <div className="aspect-square w-full overflow-hidden bg-gray-100">
          <img
            src={p.foto}
            alt={p.nombre}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <h3 className="px-5 py-4 text-base font-semibold text-gray-900 leading-snug line-clamp-3 group-hover:text-blue-700 transition-colors">
          {p.nombre}
        </h3>
      </a>
    </section>
  );
}
