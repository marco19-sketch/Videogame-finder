import { useEffect, useState, useCallback, useRef } from "react";
import { findVideoIds } from "../lib/youtube";
import YouTubeEmbed from "./YouTubeEmbed";
// import screenfull from "screenfull";
import FullScreenBtn from "./FullScreenBtn";
import RelatedYtVideos from "./RelatedYtVideos";

export default function YouTubeVideos({
  gameTitle,
  mode,
  autoplay,
  setAutoplay,
}) {
  const [videoIds, setVideoIds] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [status, setStatus] = useState("idle"); // idle | loading | empty | error
  const [unMuted, setUnMuted] = useState(false);
  const [relatedVideos, setRelatedVideos] = useState(false);
  const pauseTimeout = useRef(null);
  const playerRef = useRef(null);
  const containerRef = useRef(null);

  const handlePlayerReady = useCallback(event => {
    playerRef.current = event.target;
  }, []);

  // const toggleFullscreen = useCallback(() => {
  //   if (screenfull.isEnabled) {
  //     screenfull.toggle(containerRef.current);
  //   }
  // }, []);

  useEffect(() => {
    if (!gameTitle) return;
    const controller = new AbortController();
    const timer = setTimeout(async () => {
      try {
        setStatus("loading");
        // Nudge relevance by appending "trailer"

        const ids = await findVideoIds(gameTitle, mode);

        setVideoIds(ids);
        setCurrentIndex(0);
        // setStatus("idle");
        // setStatus(ids.length ? "idle" : "empty");
        setUnMuted(true);
      } catch {
        setStatus("error");
      }
    }, 300); // debounce

    return () => {
      controller.abort();
      clearTimeout(timer);
    };
  }, [gameTitle, mode]);

  return (
    <div className="w-full h-full bg-gray-900 border border-cyan-500/40 rounded-2xl shadow-xl p-4  mx-auto">
      <h3 className="text-cyan-400 text-lg font-semibold mb-3 text-center">
        {`🎬 ${gameTitle} ${mode === "gameplay" ? "Gameplay" : "Trailer"}`}
      </h3>
      <div ref={containerRef}>
        <div className="relative aspect-video w-auto mx-auto overflow-hidden rounded-xl shadow-lg">
          <YouTubeEmbed
            customOpts={{ playerVars: { start: 0, autoplay, playlist: null } }}
            unMuted={unMuted}
            videoId={videoIds[currentIndex]}
            title={`${gameTitle} ${
              mode === "gameplay" ? "gameplay" : "trailer"
            }`}
            onReady={handlePlayerReady}
            onStateChange={event => {
              switch (event.data) {
                case window.YT.PlayerState.ENDED:
                  setRelatedVideos(true);
                  break;
                case window.YT.PlayerState.PAUSED:
                  // only show after pause for > 1s, ignore scrubbing
                  pauseTimeout.current = setTimeout(() => {
                    setRelatedVideos(true);
                  }, 1000);
                  break;
                case window.YT.PlayerState.PLAYING:
                case window.YT.PlayerState.BUFFERING:
                  clearTimeout(pauseTimeout.current);
                  setRelatedVideos(false);
                  break;
              }
            }}
          />
          {relatedVideos && playerRef.current && (
            <RelatedYtVideos
              playerRef={playerRef}
              setAutoplay={setAutoplay}
              setCurrentIndex={setCurrentIndex}
              videoIds={videoIds}
              setRelatedVideos={setRelatedVideos}
              currentIndex={currentIndex}
            />
          )}
        </div>
        <FullScreenBtn container={containerRef} />
      </div>
    </div>
  );
}
