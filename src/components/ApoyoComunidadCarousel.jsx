// src/components/ApoyoComunidadCarousel.jsx
import React, { useState } from 'react';

export default function ApoyoComunidadCarousel({ posts = [] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!posts || posts.length === 0) return null;

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? posts.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === posts.length - 1 ? 0 : prev + 1));
  };

  const postActual = posts[currentIndex];

  return (
    <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 shadow-sm relative">
      <div className="flex justify-between items-center mb-3 border-b border-slate-200 pb-2">
        <h3 className="text-xs font-bold uppercase tracking-wider text-blue-700">
          Apoyo a la Comunidad
        </h3>
        {posts.length > 1 && (
          <div className="flex items-center gap-1">
            <button
              onClick={handlePrev}
              className="p-1 text-xs bg-white rounded shadow hover:bg-slate-100 transition"
              aria-label="Anterior nota"
            >
              ◀
            </button>
            <button
              onClick={handleNext}
              className="p-1 text-xs bg-white rounded shadow hover:bg-slate-100 transition"
              aria-label="Siguiente nota"
            >
              ▶
            </button>
          </div>
        )}
      </div>

      <a href={`/${postActual.slug}`} className="group block">
        <div className="relative h-44 w-full overflow-hidden rounded-lg mb-2">
          <img
            src={postActual.featuredImage}
            alt={postActual.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {postActual.videoYoutube && (
            <span className="absolute bottom-2 left-2 bg-red-600 text-white text-[10px] font-bold px-2 py-1 rounded-full flex items-center gap-1 shadow">
              ▶ Ver video
            </span>
          )}
        </div>
        {postActual.insignia && (
          <span className="text-[10px] font-bold uppercase text-blue-600 bg-blue-100 px-2 py-0.5 rounded">
            {postActual.insignia}
          </span>
        )}
        <h4 className="font-bold text-sm text-slate-900 mt-1 line-clamp-2 group-hover:text-blue-700 transition-colors">
          {postActual.title}
        </h4>
      </a>
    </div>
  );
}