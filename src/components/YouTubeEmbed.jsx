export default function YouTubeEmbed({ videoId, title = "YouTube video" }) {
  if (!videoId) return null;

  // 16:9 responsive wrapper
  return (
    <div className='youtube-iframe'>
      <iframe
        src={`https://www.youtube-nocookie.com/embed/${videoId}`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        referrerPolicy="strict-origin-when-cross-origin"
        loading="lazy"
      />
    </div>
  );
}
