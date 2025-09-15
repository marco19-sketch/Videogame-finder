import { useState } from "react";
// installing react-youtube to-read below.
import YouTube from "react-youtube";

export default function YouTubeEmbed({
  videoId,
  title = "YouTube video",
  unMuted = false,
  onVideoEnd = '',
  customOpts = {}
}) {
  
  const [loading, setLoading] = useState(true);
 
  if (!videoId) return null;

  const defaultOpts = {
    width: "100%",
    height: "100%",
    playerVars: {
      autoplay: 1,
      mute: unMuted ? 0 : 1,
      controls: unMuted ? 1 : 0,
      enablejsapi : 1,
      origin: window.location.origin,
      rel: 0,
      // loop: 1, //don't need loop + playlist, new fetch on video end.
      playlist: `${videoId},yWMu6JeT2g8`,
      start: 60, // YouTube needs this for loop
    },
  };

   const opts = {
     ...defaultOpts,
     playerVars: {
       ...defaultOpts.playerVars,
       ...customOpts.playerVars,
     },
   };


  return (
    <div className="aspect-video w-full rounded-xl overflow-hidden">
      {/* {loading && (
        <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-10">
          <p className="text-lg text-white font-semibold animate-pulse">
            Loading...
          </p>
        </div>
      )} */}
      
      {/* trying react-youtube api, which has an onEnd property that can be used to trigger a useEffect or start a function,
       to implement a different-game-trailers-loop instead of a same-game-trailers-loop (with iframe) */}

      <YouTube
        videoId={videoId}
        className="top-0 left-0 w-full h-full rounded-xl"
        // className="absolute top-0 left-0 w-full h-full rounded-xl"
        opts={opts}
        onReady={() => setLoading(false)}
        onEnd={onVideoEnd}
        title={title}
      />

      {/* <iframe
        src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1${
          unMuted
            ? ""
            : "&controls=0&mute=1&loop=1"}${playlistParam}`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        referrerPolicy="strict-origin-when-cross-origin"
        loading="lazy"
        className="w-full h-full"
        onLoad={() => setLoading(false)}
      /> */}
    </div>
  );
}
