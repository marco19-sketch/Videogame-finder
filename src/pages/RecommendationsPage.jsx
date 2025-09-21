import { useState, useEffect, useMemo } from "react";
import { recommendationsList } from "../lib/recommendationsList";
import YouTubeEmbed from "../components/YouTubeEmbed";
import { fetchRAWG } from "../api/apiClient";
import clsx from "clsx";
import Modal from "../components/Modal";
import { findVideoIds } from "../lib/youtube.js";
//icon from lucide-react
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
//add animation
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";

export default function RecommendationsPage() {
  const [showModal, setShowModal] = useState(false);
  const [index, setIndex] = useState(0);
  const [mode, setMode] = useState("");
  const [ids, setIds] = useState([]);
  const [bg, setBg] = useState("");
  const game = recommendationsList[index];
  const [reWatch, setReWatch] = useState(false);
  const [animationLeft, setAnimationLeft] = useState(false);

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

  useEffect(() => {
    const handleId = async () => {
      const videoIds = await findVideoIds(game.title, mode);
      setShowModal(true);
      setIds(videoIds);
      console.log("Searching YouTube for:", game.title, mode);
    };
    handleId();
  }, [mode, game, reWatch]);

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
        initial={{ opacity: 0, x: animationLeft ? 800 : -800 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: animationLeft ? -800 : 800 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="relative h-screen w-full bg-center bg-cover"
        style={{ backgroundImage: `url(${bg})` }}>
        <div>
          <div className="inset-0 absolute bg-black/60 z-0"></div>
          <div className="relative mx-10 z-10">
            <div className="flex w-full space-x-4">
              <button
                disabled={index === 0}
                type="button"
                onClick={() => {
                  setAnimationLeft(true);
                  setIndex(prev => prev - 1);
                  setMode(false);
                }}>
                <ChevronLeft
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
                <ChevronRight
                  className={clsx(
                    index === 15
                      ? "text-gray-500 h-16 w-16 cursor-not-allowed"
                      : "h-24 w-24 cursor-pointer hover:drop-shadow-[0_0_8px_blue] hover:scale-110 transition-all duration-300"
                  )}
                />
              </button>
            </div>
            <AnimatePresence>
              {showModal && ids?.length > 0 && ids[0] && mode && (
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
                    <div className=" bg-gray-900 border border-cyan-500/40 rounded-2xl shadow-xl p-4 max-w-3xl mx-auto">
                      <h3 className="text-cyan-400 text-lg font-semibold mb-3 text-center">
                        {recommendationsList[index].title}
                      </h3>
                      <div className="w-full max-w-3xl aspect-video rounded-xl overflow-hidden shadow-lg">
                        <YouTubeEmbed
                          videoId={ids[0]}
                          title="youtube video"
                          customOpts={{
                            playerVars: {
                              autoplay: 1,
                              start: 0,
                              controls: 1,
                              loop: 0,
                              mute: 0,
                              playlist: null,
                            },
                          }}
                          onVideoEnd={() => {
                            console.log("Video ended!");
                            setShowModal(false);
                          }}
                        />
                      </div>
                    </div>
                  </motion.div>
                </Modal>
              )}
            </AnimatePresence>
            <div className="flex justify-between max-w-xl mx-auto">
              <button
                type="button"
                onClick={() => {
                  setMode("official trailer");
                  setReWatch(!reWatch);
                }}
                className="mb-6 mt-6 px-6 py-2 rounded-lg font-semibold 
          bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-400 hover:to-blue-500 transition-colors duration-300">
                🎬 trailers
              </button>
              <button
                type="button"
                onClick={() => {
                  setMode("gameplay -walkthrough -review");
                }}
                className="mb-6 mt-6 px-6 py-2 rounded-lg font-semibold 
          bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-400 hover:to-blue-500 transition-colors duration-300">
                🎮 gameplay
              </button>
              <button
                type="button"
                onClick={() => {
                  setMode("review");
                }}
                className="flex mb-6 mt-6 px-6 py-2 rounded-lg font-semibold 
          bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-400 hover:to-blue-500 transition-colors duration-300">
                <Star
                  className="mr-1 text-yellow-400 hover:text-yellow-700 transition-colors duration-300
"
                />{" "}
                Review
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
