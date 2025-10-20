import { useCallback, useState, useContext } from "react";
import {
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  ChevronDown,
} from "lucide-react";
// eslint-disable-next-line no-unused-vars
import { AnimatePresence, motion } from "framer-motion";
import useNavSound from "../customHooks/useNavSound";
import { AppContext } from "../context/contextsCreation";
import useMediaQuery from "../customHooks/useMediaQuery";
import clsx from "clsx";

export default function OtherRawgVideos({
  setCurrentIndex, // lifted to parent
  setRelatedRawgVideos, //lifting to parent
  handleOnPlay, // ???
}) {
  const { trailers, indexA, setIndexA, results } = useContext(AppContext);
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [isAnimateLeft, setIsAnimateLeft] = useState(false);
  const playNav = useNavSound();
  const ArrowUpLeft = isMobile ? ChevronUp : ChevronLeft;
  const ArrowDownRight = isMobile ? ChevronDown : ChevronRight;

  const handleLeftOther = useCallback(
    e => {
      e.stopPropagation();
      setTimeout(() => {
        setIndexA(prev => (prev - 2 + trailers.length) % trailers.length);
      }, 50);
    },
    [trailers, setIndexA]
  );

  const handleRightOther = useCallback(
    e => {
      e.stopPropagation();
      setIsAnimateLeft(false);
      setTimeout(() => {
        setIndexA(prev => (prev + 2) % trailers.length);
      }, 50);
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
          initial={{
            opacity: 0,
            ...(isMobile
              ? { y: isAnimateLeft ? 100 : -100 }
              : { x: isAnimateLeft ? 100 : -100 }),
          }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          exit={{
            opacity: 0,
            ...(isMobile
              ? { y: isAnimateLeft ? -100 : 100 }
              : { x: isAnimateLeft ? -100 : 100 }),
          }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className={clsx(
            "flex justify-center items-center ",
            isMobile && "flex-col"
          )}>
          <ArrowUpLeft
            className="text-white h-8 w-8 sm:h-18 sm:w-18 cursor-pointer hover:drop-shadow-[0_0_8px_blue] hover:scale-110 transition-all duration-300"
            onClick={e => {
              setIsAnimateLeft(true);
              handleLeftOther(e);
              playNav();
            }}
          />
          {trailers.length >= 2 ? (
            <div
              className={clsx(
                "relative flex flex-1 p-4 sm:p-0 gap-4 items-center justify-between",
                isMobile && "flex-col"
              )}>
              {trailers.slice(indexA, indexA + 2).map((object, i) => {
                return (
                  <div className="relative basis-1/2" key={object.id}>
                    <img
                      onClick={e => {
                        e.stopPropagation();
                        // find the indexA of the clicked video in your array
                        const newIndex = indexA + i;
                        if (newIndex !== -1) {
                          setCurrentIndex(newIndex); // <-- THIS switches the video
                          setRelatedRawgVideos(false); // hides the overlay and starts the rawg video
                          
                        }
                      }}
                      
                      className="object-cover aspect-video border-1  
                     hover:shadow-[0_0_40px_cyan] hover:scale-110 border-cyan-400 rounded-2xl transition-all duration-300"
                      src={
                        results[0]?.short_screenshots[indexA + i]?.image ||
                        trailers[indexA + i]?.preview
                      }
                      alt="Video thumbnail"
                    />
                   
                    <h3 className="absolute bottom-1 left-10 rounded-[4px] px-2 text-white text-sm bg-black/60">
                      {trailers[indexA + i]?.name}
                    </h3>
                  </div>
                );
              })}
            </div>
          ) : (
            <p>No related video</p>
          )}
          <ArrowDownRight
            className="text-white h-8 w-8 sm:h-18 sm:w-18 cursor-pointer hover:drop-shadow-[0_0_8px_blue] hover:scale-110 transition-all duration-300"
            onClick={e => {
              setIsAnimateLeft(false);
              handleRightOther(e);
              playNav();
            }}
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
