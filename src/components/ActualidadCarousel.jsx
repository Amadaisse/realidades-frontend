// src/components/ActualidadCarousel.jsx
import React, { useState } from 'react';

export default function ActualidadCarousel({ posts = [] }) {
  const [startIndex, setStartIndex] = useState(0);
  const itemsPerPage = 4;

  if (!posts || posts.length === 0) return null;

  const totalPages = Math.ceil(posts.length / itemsPerPage);
  const currentPage = Math.floor(startIndex / itemsPerPage) + 1;

  const handlePrev = () => {
    setStartIndex((prev) => Math.max(0, prev - itemsPerPage));
  };

  const handleNext = () => {
    setStartIndex((prev) =>
      prev + itemsPerPage < posts.length ? prev + itemsPerPage : prev
    );
  };

  const currentPosts = posts.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-4 my-2">
      <div className="flex items-center justify-between mb-4 border-b pb-2">
        <h3 className="text-sm font-bold uppercase tracking-wider text-red-600">
          Actualidad
        </h3>
        {posts.length > itemsPerPage && (
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrev}
              disabled={startIndex === 0}
              className="p-1.5 rounded bg-gray-100 hover:bg-red-100 disabled:opacity-40 disabled:cursor-not-allowed transition"
              aria-label="Anteriores noticias"
            >
              ◀
            </button>
            <span className="text-xs text-gray-500 font-medium">
              {currentPage} / {totalPages}
            </span>
            <button
              onClick={handleNext}
              disabled={startIndex + itemsPerPage >= posts.length}
              className="p-1.5 rounded bg-gray-100 hover:bg-red-100 disabled:opacity-40 disabled:cursor-not-allowed transition"
              aria-label="Siguientes noticias"
            >
              ▶
            </button>
          </div>
        )}
      </div>

      <div className="flex flex-col gap-3">
        {currentPosts.map((post) => (
          <a
            key={post.id || post.slug}
            href={`/${post.slug}`}
            className="flex gap-3 items-center group hover:bg-gray-50 p-1.5 rounded-lg transition"
          >
            <img
              src={post.featuredImage}
              alt={post.title}
              className="w-20 h-16 object-cover rounded-md flex-shrink-0 group-hover:scale-105 transition-transform"
            />
            <div className="flex-1 min-w-0">
              {post.insignia && (
                <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded uppercase">
                  {post.insignia}
                </span>
              )}
              <h4 className="text-xs font-semibold text-gray-800 group-hover:text-red-600 line-clamp-2 leading-tight mt-1">
                {post.title}
              </h4>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}