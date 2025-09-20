import { useCallback, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
// eslint-disable-next-line no-unused-vars
import { AnimatePresence, motion } from "framer-motion";

export default function OtherRawgVideos({
  trailers,
  setCurrentIndex,
  currentIndex,
  indexA,
  setIndexA,
  results,
  setOtherVideos,
  handleOnPlay,
}) {
  const [isAnimateLeft, setIsAnimateLeft] = useState(false);

  const handleLeftOther = useCallback(
    e => {
      e.stopPropagation();

      setIndexA(prev => (prev - 2 + trailers.length) % trailers.length);
    },
    [trailers, setIndexA]
  );

  const handleRightOther = useCallback(
    e => {
      e.stopPropagation();
      setIsAnimateLeft(false);
      setIndexA(prev => (prev + 2) % trailers.length);
    },
    [trailers, setIndexA]
  );

  return (
    <div
      className="absolute inset-0 flex justify-center items-center rounded-t-2xl cursor-pointer"
      onClick={handleOnPlay}>
      <AnimatePresence mode="wait">
        {" "}
        {/*animates the exit*/}
        <motion.div
          key={trailers[indexA].id}
          initial={{ opacity: 0, x: isAnimateLeft ? 100 : -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: isAnimateLeft ? -100 : 100 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="flex justify-center items-center ">
          <ChevronLeft
            className="h-24 w-24 cursor-pointer hover:drop-shadow-[0_0_8px_blue] hover:scale-110 transition-all duration-300"
            onClick={e => {
              setIsAnimateLeft(true);
              handleLeftOther(e);
              console.log('key from related rawg', trailers[indexA].id);
              console.log('animation left from related rawg', isAnimateLeft)
            }}
          />
          
          <div className="relative flex flex-1 gap-4 items-center justify-between">
            {trailers.slice(indexA, indexA + 2).map(object => (
              <div className="basis-1/2">
                <img
                  key={trailers.indexOf(object)}
                  onClick={e => {
                    e.stopPropagation();
                    
                    // find the indexA of the clicked video in your array

                    const newIndex = trailers.indexOf(object);
                    console.log("newIndex from other rawg videos", newIndex);

                    if (newIndex !== -1) {
                      setCurrentIndex(newIndex); // <-- THIS switches the video
                      setOtherVideos(false); // hide the overlay
                    }
                  }}
                  className="object-cover border-2 border-cyan-400 rounded-2xl aspect-video cursor-pointer"
                  src={
                    results[0]?.short_screenshots[trailers.indexOf(object)]
                      ?.image || trailers[currentIndex]?.preview
                  }
                  alt="Video thumbnail"
                />
              </div>
            ))}
          </div>
          <ChevronRight
            className="h-24 w-24 cursor-pointer hover:drop-shadow-[0_0_8px_blue] hover:scale-110 transition-all duration-300"
            onClick={e => {
              setIsAnimateLeft(false);
              handleRightOther(e);
            }}
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
