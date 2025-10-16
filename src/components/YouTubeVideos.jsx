import { useEffect, useState, useCallback, useRef, useContext } from "react";
// import { findVideoIds } from "../lib/youtube";
import { getCachedVideoIds } from '../lib/getCachedVideoIds';
import YouTubeEmbed from "./YouTubeEmbed";
import FullScreenBtn from "./FullScreenBtn";
import RelatedYtVideos from "./RelatedYtVideos";
import { AppContext } from "../context/contextsCreation";
import FavoritesSetter from './FavoritesSetter';
import {fetchRAWG} from '../api/apiClient';
import useMediaQuery from '../customHooks/useMediaQuery';


export default function YouTubeVideos({ gameTitle, mode }) {
  const [videoIds, setVideoIds] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [unMuted, setUnMuted] = useState(false);
  const [relatedVideos, setRelatedVideos] = useState(false);
  const pauseTimeout = useRef(null);
  const playerRef = useRef(null);
  const containerRef = useRef(null);
  const [gameObj, setGameObj] = useState({});
  const isMobile = useMediaQuery("(max-width: 768px)");
  const { autoplay, setAutoplay } = useContext(AppContext);
  const handlePlayerReady = useCallback(event => {
    playerRef.current = event.target;
  }, []);
 

  useEffect(() => {
    
    if (!gameObj.id || !gameTitle) return; 

    const controller = new AbortController();
    const timer = setTimeout(async () => {
      try {
        const ids = await getCachedVideoIds(gameObj.id, gameTitle, mode);
        // const ids = await findVideoIds(gameTitle, mode);
        setVideoIds(ids);
        setCurrentIndex(0);
        setUnMuted(true);
      } catch (err) {
        console.error('Error getting video id', err)
      }
    }, 300); // debounce

    return () => {
      controller.abort();
      clearTimeout(timer);
    };
  }, [gameTitle, mode, gameObj]);

  const modeUpdated =
    mode === "official trailer"
      ? "Trailer"
      : mode.charAt(0).toUpperCase() + mode.slice(1);

      const queryToObj = `&search=${gameTitle}&page=1&page_size=1`

      //implementing a fetch to get the game object the FavoritesSetter needs 
      useEffect(() => {
        const fetchGame = async () =>{
         
        try {
          const data = await fetchRAWG('games', queryToObj);
         
          setGameObj(data.results[0])
          
        } catch (err) {
          console.error('Fetch error from YouTubeVideos.jsx', err)
        }
      }
      fetchGame();
      }, [queryToObj, mode])

  return (
    <div className="w-full h-full bg-gray-900 border border-cyan-500/40 rounded-2xl shadow-xl p-0.5 mx-auto">
      <h3 className="text-cyan-400 text-sm sm:text-lg font-semibold mb-3 text-center">
        {/* title from the youtube video */}
        {videoIds[currentIndex]?.title
          ? isMobile
            ? videoIds[currentIndex]?.title.slice(0, 25) + "..."
            : `${videoIds[currentIndex]?.title.slice(0, 60)}...${modeUpdated}`
          : isMobile
          ? gameTitle
          : gameTitle + modeUpdated}
      </h3>
      <div ref={containerRef}>
        <div className="relative aspect-video w-auto mx-auto overflow rounded-xl shadow-lg">
          
          {videoIds.length > 0 && (
            <YouTubeEmbed
              customOpts={{
                playerVars: { start: 0, autoplay, playlist: null },
              }}
              unMuted={unMuted}
              videoId={videoIds[currentIndex]?.videoId}
              title={
                videoIds[currentIndex]?.title
                  ? `${videoIds[currentIndex]?.title.slice(0, 5)} ${mode}`
                  : gameTitle + mode
              }
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
          )}
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
          {Object.keys(gameObj).length !== 0 && (
            <FavoritesSetter game={gameObj} />
          )}
        </div>
        <div className="hidden md:block">
          <FullScreenBtn container={containerRef} />
        </div>
      </div>
    </div>
  );
}
