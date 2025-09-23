import { useState, useEffect, useMemo, useContext } from "react";
import { recommendationsList } from "../lib/recommendationsList";
import YouTubeVideos from "../components/YouTubeVideos";
import { fetchRAWG } from "../api/apiClient";
import clsx from "clsx";
import Modal from "../components/Modal";
import { Star, ChevronLeft, ChevronRight, ChevronUp, ChevronDown } from "lucide-react";
//add animation
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { AppContext } from "../context/contextsCreation";
import ThemedButton from "../ThemedComponents/ThemedButton";
import useMediaQuery from "../customHooks/useMediaQuery";

export default function RecommendationsPage() {
  const [index, setIndex] = useState(0);
  const [mode, setMode] = useState("");
  const [bg, setBg] = useState("");
  const [animationLeft, setAnimationLeft] = useState(false);
  const isMobile = useMediaQuery("(max-width: 768px)");
  const { handleFetchTrailers, showModal, setShowModal } =
    useContext(AppContext);
const ArrowLeftUp = isMobile ? ChevronUp : ChevronLeft;
const ArrowRightDown = isMobile ? ChevronDown : ChevronRight;

  useEffect(() => {
    const handleFetchBg = async () => {
      try {
        const query = `page=1&page_size=1&title&search=${encodeURIComponent(
          recommendationsList[index].title
        )}`;
        const data = await fetchRAWG("games", query);

        setBg(data.results[0].background_image);
      } catch (err) {
        console.error("Error trying to get screenshots from RAWG", err);
      }
    };
    handleFetchBg();
  }, [index]);

  const gameplayList = useMemo(() => {
    return (
      <ul className="list-disc">
        <strong>Gameplay:</strong>
        {recommendationsList[index].gameplayHighlights.map(item => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    );
  }, [index]); // only recompute when index changes

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={bg}
        initial={{
          opacity: 0,
          ...(isMobile ? { y: 100 } : { x: animationLeft ? 100 : -100 }),
        }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        exit={{
          opacity: 0,
          ...(isMobile ? { y: -100 } : { x: animationLeft ? -100 : 100 }),
        }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="relative w-full bg-center bg-cover flex flex-col"
        style={{ backgroundImage: `url(${bg})` }}>
        <div>
          <div className="inset-0 absolute bg-black/60 z-0"></div>
          <div className="relative mx-10 z-10">
            <div className={`flex w-full ${isMobile ? 'flex-col items-center' : " space-x-4"}`}>
              <button
                disabled={index === 0}
                type="button"
                onClick={() => {
                  setAnimationLeft(true);
                  setIndex(prev => prev - 1);
                  setMode(false);
                }}>
                
                <ArrowLeftUp
                  className={clsx(
                    index === 0
                      ? "text-gray-500 h-16 w-16 cursor-not-allowed"
                      : "h-24 w-24 cursor-pointer hover:drop-shadow-[0_0_8px_blue] hover:scale-110 transition-all duration-300"
                  )}
                /> 
              </button>
              <div className="basis-10/12 flex flex-col space-y-4 justify-center items-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={bg}
                    initial={{ opacity: 0, x: animationLeft ? 800 : -800 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: animationLeft ? -800 : 800 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="flex flex-col space-y-4 justify-center items-center">
                    <div className="h-screen overflow-y-auto [&::-webkit-scrollbar]:hidden">
                      <h1 className="text-3xl">
                        {recommendationsList[index].title}
                      </h1>
                      <p className="text-1xl">
                        {recommendationsList[index].recommendation}
                      </p>
                      <p>
                        <strong>Genre:</strong>{" "}
                        {recommendationsList[index].genre}
                      </p>
                      <p>
                        <strong>Platforms:</strong>{" "}
                        {recommendationsList[index].platforms}
                      </p>
                      <p>
                        <strong>Playtime:</strong>{" "}
                        {recommendationsList[index].playtime}
                      </p>
                      <p>
                        <strong>Rating:</strong>{" "}
                        {recommendationsList[index].rating}
                      </p>
                      <p>
                        <strong>Released:</strong>{" "}
                        {recommendationsList[index].releaseDate}
                      </p>
                      <p>
                        <strong>Reviews:</strong>{" "}
                        {recommendationsList[index].reviewsCount}
                      </p>

                      {gameplayList}
                      <p>
                        <strong>Game description:</strong>{" "}
                        {recommendationsList[index].description}
                      </p>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
              <button
                disabled={index === 15}
                type="button"
                onClick={() => {
                  setAnimationLeft(false);
                  setIndex(prev => prev + 1);
                  setMode(false);
                }}>
                <ArrowRightDown
                  className={clsx(
                    index === 15
                      ? "text-gray-500 h-16 w-16 cursor-not-allowed"
                      : "h-24 w-24 cursor-pointer hover:drop-shadow-[0_0_8px_blue] hover:scale-110 transition-all duration-300"
                  )}
                />
              </button>
            </div>
            <AnimatePresence>
              {showModal && (
                <Modal
                  onClose={() => {
                    setShowModal(false);
                  }}
                  className="z-20">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.2, rotate: -10 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    exit={{ opacity: 0, scale: 0.2, rotate: +10 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}>
                    <YouTubeVideos
                      gameTitle={recommendationsList[index].title}
                      mode={mode}
                      autoplay="1"
                    />
                  </motion.div>
                </Modal>
              )}
            </AnimatePresence>
            <div className="flex justify-between max-w-xl mx-auto">
              <ThemedButton
                type="button"
                onClick={() => {
                  handleFetchTrailers(recommendationsList[0]); //dummy fetch to start YouTubeVideos
                  setMode("official trailer");
                }}
                className={"w-40 mb-8 h-14 px-0 py-0 "}>
                {isMobile ? '🎬' : 'trailer' }
              </ThemedButton>
              <ThemedButton
                type="button"
                onClick={() => {
                  handleFetchTrailers(recommendationsList[0]);
                  setMode("gameplay -walkthrough -review");
                }}
                className="w-40 h-14 px-0 py-0 ">
                {" "}
                {isMobile ? '🎮' :  'gameplay'}
              </ThemedButton>
              <ThemedButton
                type="button"
                onClick={() => {
                  handleFetchTrailers(recommendationsList[0]);
                  setMode("review");
                }}
                className="w-40 h-14 px-0 py-0 flex justify-center items-center ">
                {isMobile ? (<Star
                  className="mr-1 text-yellow-400 hover:text-yellow-700
                   transition-colors duration-300
"
                />) :
                'Review' }
              </ThemedButton>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
