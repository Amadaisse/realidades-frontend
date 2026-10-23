// src/components/SocialVideoCarousel.jsx
import React, { useState } from 'react';

export default function SocialVideoCarousel({ videos = [] }) {
  const [startIndex, setStartIndex] = useState(0);

  if (!videos || videos.length === 0) return null;

  const handlePrev = () => {
    setStartIndex((prev) => Math.max(0, prev - 2));
  };

  const handleNext = () => {
    setStartIndex((prev) => (prev + 2 < videos.length ? prev + 2 : prev));
  };

  const currentVideos = videos.slice(startIndex, startIndex + 2);

  return (
    <div className="bg-slate-900 text-white rounded-xl p-4 shadow-lg my-6">
      <div className="flex justify-between items-center mb-4 border-b border-slate-700 pb-2">
        <div className="flex items-center gap-2">
          <span className="text-red-500 font-bold text-lg">📱</span>
          <h3 className="text-sm font-bold uppercase tracking-wider text-slate-100">
            Videos en Redes Sociales
          </h3>
        </div>
        {videos.length > 2 && (
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrev}
              disabled={startIndex === 0}
              className="p-1 bg-slate-800 hover:bg-slate-700 disabled:opacity-30 rounded text-xs"
            >
              ◀
            </button>
            <button
              onClick={handleNext}
              disabled={startIndex + 2 >= videos.length}
              className="p-1 bg-slate-800 hover:bg-slate-700 disabled:opacity-30 rounded text-xs"
            >
              ▶
            </button>
          </div>
        )}
      </div>

      <div className="grid grid-cols-2 gap-3">
        {currentVideos.map((video) => (
          <a
            key={video.id || video.slug}
            href={`/${video.slug}`}
            className="group block relative bg-slate-800 rounded-lg overflow-hidden border border-slate-700"
          >
            <div className="relative aspect-[9/16] w-full bg-black">
              <img
                src={video.featuredImage}
                alt={video.title}
                className="w-full h-full object-cover group-hover:opacity-80 transition-opacity"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-between p-3">
                <span className="self-end bg-black/60 backdrop-blur text-white text-[10px] px-2 py-0.5 rounded-full border border-white/20">
                  {video.videoTiktok ? 'TikTok' : video.videoInstagram ? 'Reels' : 'Video'}
                </span>
                <p className="text-xs font-semibold text-white line-clamp-2 group-hover:text-red-400 transition-colors">
                  {video.title}
                </p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}