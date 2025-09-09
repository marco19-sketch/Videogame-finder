import { useState } from 'react';

export default function YouTubeEmbed({ videoId, title = "YouTube video" }) {
  const [loading, setLoading] = useState(true);
  if (!videoId) return null;

  return (
    <div className="aspect-video w-full rounded-xl overflow-hidden">
      {loading && (
        <div className='fixed inset-0 bg-black/70 flex justify-center items-center z-10'>
          <p className='text-lg text-white font-semibold animate-pulse'>Loading...</p>
        </div>
      )}
    {/*<div className="relative w-full  rounded-xl overflow-hidden shadow-lg shadow-cyan-500/20 border border-gray-700"> */}
    {/* <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-lg shadow-cyan-500/20 border border-gray-700"> */}
      <iframe
        src={`https://www.youtube-nocookie.com/embed/${videoId}`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        referrerPolicy="strict-origin-when-cross-origin"
        loading="lazy"
        className="w-full h-full"
        onLoad={() => setLoading(false)}
      />
    </div>
  );
}
