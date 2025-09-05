export default function YouTubeEmbed({ videoId, title = "YouTube video" }) {
  if (!videoId) return null;

  return (
    <div className="aspect-video w-full rounded-xl overflow-hidden">
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
      />
    </div>
  );
}
