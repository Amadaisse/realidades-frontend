// src/components/ActualidadCarousel.jsx
import React, { useState } from 'react';
import CarouselArrows from './CarouselArrows.jsx';

const POR_PAGINA = 4;

export default function ActualidadCarousel({ posts = [] }) {
  const [pagina, setPagina] = useState(0);
  if (!posts || posts.length === 0) return null;

  const totalPaginas = Math.ceil(posts.length / POR_PAGINA);
  const visibles = posts.slice(pagina * POR_PAGINA, pagina * POR_PAGINA + POR_PAGINA);

  return (
    <section className="flex flex-col bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden lg:flex-1 lg:min-h-[480px]">
      <div className="flex items-center justify-between px-5 pt-4 pb-3 border-b border-gray-200">
        <h2 className="text-blue-700 text-xl font-medium">Actualidad</h2>
        {posts.length > POR_PAGINA && (
          <CarouselArrows
            onPrev={() => setPagina((n) => Math.max(0, n - 1))}
            onNext={() => setPagina((n) => Math.min(totalPaginas - 1, n + 1))}
            canPrev={pagina > 0}
            canNext={pagina < totalPaginas - 1}
          />
        )}
      </div>

      <ul className="flex-1 flex flex-col divide-y divide-gray-100 px-5">
        {visibles.map((p) => (
          <li key={p.id || p.slug} className="flex-1 min-h-0">
            <a href={`/${p.slug}`} className="group flex items-center gap-4 h-full py-3">
              <img
                src={p.featuredImage}
                alt={p.title}
                className="w-28 h-20 shrink-0 rounded-md object-cover bg-gray-100"
                loading="lazy"
              />
              <div className="min-w-0">
                <h3 className="text-sm font-semibold text-gray-900 leading-snug line-clamp-3 group-hover:text-blue-700 transition-colors">
                  {p.title}
                </h3>
                {p.fechaTexto && <time className="block mt-1 text-xs text-gray-500">{p.fechaTexto}</time>}
              </div>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
