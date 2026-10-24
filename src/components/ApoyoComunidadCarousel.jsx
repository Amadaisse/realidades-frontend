// src/components/ApoyoComunidadCarousel.jsx
import React, { useState } from 'react';
import CarouselArrows from './CarouselArrows.jsx';

export default function ApoyoComunidadCarousel({ posts = [] }) {
  const [i, setI] = useState(0);
  if (!posts || posts.length === 0) return null;

  const p = posts[i];
  const total = posts.length;
  const actor = p.actoresSociales?.[0];

  return (
    <section className="bg-white rounded-xl flex flex-col lg:h-[560px]">
      <h2 className="text-blue-700 text-xl font-medium pb-2 mb-4 border-b border-gray-200">Apoyo a la Comunidad</h2>

      <a href={`/${p.slug}`} className="group block">
        <div className="aspect-[4/3] w-full overflow-hidden rounded-xl bg-gray-100">
          <img
            src={p.featuredImage}
            alt={p.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        {actor && (
          <span className="inline-block mt-3 px-2.5 py-0.5 rounded-full text-xs font-medium border bg-gray-100 text-gray-700 border-gray-200">
            {actor}
          </span>
        )}
        <h3 className="mt-2 text-base font-semibold text-gray-900 leading-snug line-clamp-3 group-hover:text-blue-700 transition-colors">
          {p.title}
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
