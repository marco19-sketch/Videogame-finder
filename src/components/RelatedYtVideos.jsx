import { useCallback, useState } from "react";
// eslint-disable-next-line no-unused-vars
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, ChevronUp, ChevronDown } from "lucide-react";
import useNavSound from "../customHooks/useNavSound";
import useRadioCheck from "../customHooks/useRadioCheck";
import useMediaQuery from "../customHooks/useMediaQuery";
import clsx from "clsx";

export default function RelatedYtVideos({
  playerRef,
  setAutoplay,
  setCurrentIndex,
  videoIds,
  setRelatedVideos,
  currentIndex,
}) {
  const [isLeft, setIsLeft] = useState(false);
  const playNav = useNavSound();
  const playBlip = useRadioCheck();
  const isMobile = useMediaQuery("(max-width: 768px)");
  const ArrowUpLeft = isMobile ? ChevronUp : ChevronLeft;
  const ArrowDownRight = isMobile ? ChevronDown : ChevronRight;

  const handleLeft = useCallback(
    e => {
      setIsLeft(true);
      e.stopPropagation();
      setAutoplay(0);
      playNav();
      const timer = setTimeout(() => {
        setCurrentIndex(prev => (prev - 2 + videoIds.length) % videoIds.length);
      }, 50);
      return () => clearTimeout(timer);
    },
    [videoIds, setAutoplay, setCurrentIndex, playNav]
  );

  const handleRight = useCallback(
    e => {
      setIsLeft(false);
      e.stopPropagation();
      setAutoplay(0);
      playNav();
      const timer = setTimeout(() => {
        setCurrentIndex(prev => (prev + 2) % videoIds.length);
      }, 50);
      return () => clearTimeout(timer);
    },
    [videoIds, setAutoplay, setCurrentIndex, playNav]
  );

  return (
    <div
      onClick={event => {
        if (event.target !== event.currentTarget) {
          return;
        }
        if (!playerRef.current) {
          return;
        }

        try {
          // force unmute + play to satisfy gesture policies
          playerRef.current.unMute();
          playerRef.current.playVideo();
          setRelatedVideos(false);
        } catch (err) {
          console.error("Play attempt failed:", err);
        }
      }}
      className="absolute inset-0 flex  justify-center  items-center bg-center bg-no-repeat bg-cover border 
       border-cyan-500/40 rounded-t-2xl cursor-pointer "
      style={{
        backgroundImage: `url(https://img.youtube.com/vi/${videoIds[0].videoId}/hqdefault.jpg)`,
      }}>
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, 
            ...(isMobile 
            ? {y: isLeft ? 100 : - 100}
            : {x: isLeft ? 100 : -100 })
          }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          exit={{ opacity: 0,
            ...(isMobile
              ? {y: isLeft ? -100 : 100}
              : {x: isLeft ? -100 : 100 })
          }}
          transition={{ duration: 0.5, ease: "easeInOut"}}
          className={clsx(
            "flex px-8 sm:px-0 gap-4 justify-center items-center w-full ",
            isMobile && "flex-col "
          )}>
          {/* <ChevronLeft */}
          <ArrowUpLeft
            className="h-8 w-8 sm:h-18 sm:w-18  text-white cursor-pointer hover:drop-shadow-[0_0_8px_blue] hover:scale-110 transition-all duration-300"
            onClick={e => {
              handleLeft(e);
              e.stopPropagation();
            }}
          />

          {/* {videoIds.slice(currentIndex, currentIndex + 2).map((object, i) => ( */}
          {[0, 1].map(i => {
            const object = videoIds[(currentIndex + i) % videoIds.length];

            return (
              <button
                key={object.videoId}
                type="button"
                className="cursor-pointer basis-1/2"
                onClick={e => {
                  e.stopPropagation();
                  setAutoplay(1);
                  playBlip();

                  // Calculate the absolute new index in the array
                  const newIndex = (currentIndex + i) % videoIds.length;

                  // Force a re-render by using a two-step update
                  setCurrentIndex(-1); // unmount YouTubeEmbed completely
                  setRelatedVideos(false);

                  // Give React a moment to process the unmount
                  setTimeout(() => {
                    setCurrentIndex(newIndex); // mount new video
                  }, 0);
                }}>
                <img
                  className="object-cover aspect-video border-1  
              hover:shadow-[0_0_40px_cyan] hover:scale-110 border-cyan-400 rounded-2xl transition-all duration-300"
                  src={`https://img.youtube.com/vi/${object.videoId}/hqdefault.jpg`}
                  alt="Video thumbnail"
                />
              </button>
            );
          })}

          {/* </div> */}

          {/* <ChevronRight */}
          <ArrowDownRight
            className="h-8 w-8 sm:h-18 sm:w-18 text-white cursor-pointer hover:drop-shadow-[0_0_8px_blue] hover:scale-110 transition-all duration-300"
            onClick={e => {
              handleRight(e);
              e.stopPropagation();
            }}
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
