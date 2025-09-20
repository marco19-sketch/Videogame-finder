import { useCallback } from "react";
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
  const handleLeftOther = useCallback(
    e => {
      e.stopPropagation();
      // setAutoplay(0);
      setIndexA(
        // setCurrentOtherIndex(
        prev => (prev - 2 + trailers.length) % trailers.length
      );
    },
    [trailers, setIndexA]
  );

  const handleRightOther = useCallback(
    e => {
      e.stopPropagation();
      //   setAutoplay(0);
      setIndexA(prev => (prev + 2) % trailers.length);
      // setCurrentOtherIndex(prev => (prev + 2) % trailers.length);
    },
    [trailers, setIndexA]
  );

  return (
    <div
      className="absolute inset-0 flex justify-center items-center rounded-t-2xl cursor-pointer"
      // style={{ backgroundImage: `url(${results[0]?.short_screenshots[0]?.image})` }}
      onClick={handleOnPlay}>
      <motion.div
        key={trailers[indexA].id}
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 100 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="flex justify-center items-center ">
        <ChevronLeft
          className="h-24 w-24 cursor-pointer hover:drop-shadow-[0_0_8px_blue] hover:scale-110 transition-all duration-300"
          onClick={handleLeftOther}
        />
        {console.log('results from other videos', results)}
        <div className="relative flex flex-1 gap-4 items-center justify-between">
          {trailers.slice(indexA, indexA + 2).map(object => (
            <div className="basis-1/2">
              <img
                key={trailers.indexOf(object)}
                onClick={e => {
                  e.stopPropagation();
                  {
                    console.log(
                      "short_screenshots  and index of object from other rawg videos",
                      results[0].short_screenshots,
                      trailers.indexOf(object),
                      trailers
                    );
                  }
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
          onClick={handleRightOther}
        />
      </motion.div>
    </div>
  );
}
