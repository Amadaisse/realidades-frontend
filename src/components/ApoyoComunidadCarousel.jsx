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
    <section className="flex flex-col bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden lg:flex-1 lg:min-h-[480px]">
      <div className="flex items-center justify-between px-5 pt-4 pb-3 border-b border-gray-200">
        <h2 className="text-blue-700 text-xl font-medium">Apoyo a la Comunidad</h2>
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
        <div className="aspect-[4/3] w-full overflow-hidden bg-gray-100">
          <img
            src={p.featuredImage}
            alt={p.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="px-5 py-4">
          {actor && (
            <span className="inline-block mb-2 px-2.5 py-0.5 rounded-full text-xs font-medium border bg-gray-100 text-gray-700 border-gray-200">
              {actor}
            </span>
          )}
          <h3 className="text-base font-semibold text-gray-900 leading-snug line-clamp-3 group-hover:text-blue-700 transition-colors">
            {p.title}
          </h3>
          {p.excerpt && <p className="mt-2 text-sm text-gray-600 line-clamp-3">{p.excerpt}</p>}
        </div>
      </a>
    </section>
  );
}
