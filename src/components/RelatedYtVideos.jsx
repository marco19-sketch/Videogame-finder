import { useCallback } from "react";
// eslint-disable-next-line no-unused-vars
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function RelatedYtVideos({
  playerRef,
  setAutoplay,
  setCurrentIndex,
  videoIds,
  setRelatedVideos,
  currentIndex
}) {
  

  const handleLeft = useCallback(
    e => {
      e.stopPropagation();
      setAutoplay(0);
      setCurrentIndex(prev => (prev - 2 + videoIds.length) % videoIds.length);
    },
    [videoIds, setAutoplay, setCurrentIndex]
  );
 
  const handleRight = useCallback(
    e => {
      e.stopPropagation();
      setAutoplay(0);
      setCurrentIndex(prev => (prev + 2) % videoIds.length);
    },
    [videoIds, setAutoplay, setCurrentIndex]
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
      className="absolute inset-0 flex justify-center items-center bg-center bg-no-repeat bg-cover border  border-cyan-500/40 rounded-t-2xl cursor-pointer"
      // className="absolute inset-0 flex basis-12 justify-center items-center bg-center bg-no-repeat bg-cover border  border-cyan-500/40 rounded-t-2xl cursor-pointer"
      style={{
        backgroundImage: `url(https://img.youtube.com/vi/${videoIds[0].videoId}/hqdefault.jpg)`,
        // backgroundImage: `url(https://img.youtube.com/vi/${videoIds[currentIndex]}/hqdefault.jpg)`,
      }}>
      <AnimatePresence>
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="flex gap-4 justify-center items-center w-full">
          <ChevronLeft
            className="h-24 w-24 text-white cursor-pointer hover:drop-shadow-[0_0_8px_blue] hover:scale-110 transition-all duration-300"
            onClick={e => {
              handleLeft(e);
              e.stopPropagation();
            }}
          />

          {/* <div className="flex flex-1 gap-4 items-center justify-between"> */}
          {/* <div className="basis-10/12 flex flex-1 gap-4 items-center justify-between"> */}
          {videoIds.slice(currentIndex, currentIndex + 2).map((object, i) => (
            <button
              key={object.videoId}
              type="button"
              className="cursor-pointer basis-1/2"
              onClick={e => {
                e.stopPropagation();
                setAutoplay(1);

                // find the index of the clicked video in your array
                const newIndex = i;
                // const newIndex = videoIds.indexOf(id);
                if (newIndex !== -1) {
                  setCurrentIndex(newIndex); // <-- THIS switches the video
                  setRelatedVideos(false); // hide the overlay
                }
              }}>
              <img
                className="object-cover aspect-video border-4  
              hover:shadow-[0_0_40px_cyan] hover:scale-110 border-cyan-400 rounded-2xl transition-all duration-300"
                src={`https://img.youtube.com/vi/${object.videoId}/hqdefault.jpg`}
                alt="Video thumbnail"
              />
            </button>
          ))}
          {/* </div> */}

          <ChevronRight
            className="h-24 w-24 text-white cursor-pointer hover:drop-shadow-[0_0_8px_blue] hover:scale-110 transition-all duration-300"
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
