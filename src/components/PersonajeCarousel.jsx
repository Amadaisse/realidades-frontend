// src/components/PersonajeCarousel.jsx
import React, { useState } from 'react';
import CarouselArrows from './CarouselArrows.jsx';

export default function PersonajeCarousel({ personajes = [] }) {
  const [i, setI] = useState(0);
  if (!personajes || personajes.length === 0) return null;

  const p = personajes[i];
  const total = personajes.length;

  return (
    <section className="bg-white rounded-xl flex flex-col lg:h-[560px]">
      <h2 className="text-blue-700 text-xl font-medium pb-2 mb-4 border-b border-gray-200">El Personaje</h2>

      <a href={`/${p.slug}`} className="group block">
        <div className="aspect-square w-full overflow-hidden rounded-xl bg-gray-100">
          <img
            src={p.foto}
            alt={p.nombre}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <h3 className="mt-3 text-base font-semibold text-gray-900 leading-snug line-clamp-3 group-hover:text-blue-700 transition-colors">
          {p.nombre}
        </h3>
      </a>

      {total > 1 && (
        <div className="mt-auto pt-3">
          <CarouselArrows
            onPrev={() => setI((n) => Math.max(0, n - 1))}
            onNext={() => setI((n) => Math.min(total - 1, n + 1))}
            canPrev={i > 0}
            canNext={i < total - 1}
          />
        </div>
      )}
    </section>
  );
}
