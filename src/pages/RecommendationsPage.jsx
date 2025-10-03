import { useState, useEffect, useMemo, useContext, useRef } from "react";
import { recommendationsList } from "../lib/recommendationsList";
import YouTubeVideos from "../components/YouTubeVideos";
import { fetchRAWG } from "../api/apiClient";
import clsx from "clsx";
import Modal from "../components/Modal";
import {
  Star,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  ChevronDown,
} from "lucide-react";
//add animation
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { AppContext } from "../context/contextsCreation";
import ThemedButton from "../ThemedComponents/ThemedButton";
import useMediaQuery from "../customHooks/useMediaQuery";
import FavoritesSetter from "../components/FavoritesSetter";
import Slideshow from "../components/Slideshow";
import RatingStars from "../components/RatingStars";
import addNavSound from "../lib/addNavSound";
import addBlipVideoSound from '../lib/addBlipVideoSound';

export default function RecommendationsPage() {
  const [index, setIndex] = useState(0);
  const [bg, setBg] = useState("");
  const [game, setGame] = useState({});
  const [animationLeft, setAnimationLeft] = useState(false);
  const isMobile = useMediaQuery("(max-width: 768px)");
  const {
    handleFetchTrailers,
    showModal,
    setShowModal,
    mode,
    setMode,
    slides,
    setSlides,
    current,
    setCurrent,
    autoplay,
    setAutoplay,
  } = useContext(AppContext);
  const ArrowLeftUp = isMobile ? ChevronUp : ChevronLeft;
  const ArrowRightDown = isMobile ? ChevronDown : ChevronRight;
  const [dataResults, setDataResults] = useState({});

  useEffect(() => {
    setShowModal(false);
    setAutoplay(1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Track first mount so initial animations don't run twice (React StrictMode double-mount)
  const firstMount = useRef(true);
  useEffect(() => {
    firstMount.current = false;
  }, []);

  useEffect(() => {
    const handleFetchBg = async () => {
      try {
        const query = `page=1&page_size=1&title&search=${encodeURIComponent(
          recommendationsList[index].title
        )}`;
        const data = await fetchRAWG("games", query);

        setDataResults(data.results);
        setBg(data.results[0].background_image);
        // store the full game object so FavoritesSetter receives the expected shape
        setGame(data.results[0]);
        setSlides(data.results[0].short_screenshots);
      } catch (err) {
        console.error("Error trying to get screenshots from RAWG", err);
      }
    };
    handleFetchBg();
  }, [index, setSlides]);

  const gameplayList = useMemo(() => {
    return (
      <ul className="list-disc font-semibold">
        Gameplay:
        {recommendationsList[index].gameplayHighlights.map(item => (
          <li key={item} className="font-normal my-4">
            {item}
          </li>
        ))}
      </ul>
    );
  }, [index]); // only recompute when index changes

  return (
    <AnimatePresence mode="wait" initial="false">
      <motion.div
        // key={index}
        key={bg}
        initial={{
          opacity: 0,
          ...(isMobile
            ? { y: animationLeft ? 100 : -100 }
            : { x: animationLeft ? 100 : -100 }),
        }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        exit={{
          opacity: 0,
          ...(isMobile
            ? { y: animationLeft ? -100 : 100 }
            : { x: animationLeft ? -100 : 100 }),
        }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="relative w-full bg-center bg-cover flex flex-col text-xl"
        style={{ backgroundImage: `url(${bg})` }}>
        <div style={{ textShadow: "3px 3px 6px black" }}>
          <div className="inset-0 absolute bg-black/60 z-0"></div>
          <div className="relative mx-10 z-10">
            <div
              className={`flex w-full ${
                isMobile ? "flex-col items-center" : " space-x-4"
              }`}>
              <button
                disabled={index === 0}
                type="button"
                onClick={() => {
                  setAnimationLeft(true);
                  setIndex(prev => prev - 1);
                  setMode("");
                  addNavSound();
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
                <h1 className="text-3xl text-cyan-400 font-bold">
                  {recommendationsList[index].title}
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start sm:mb-6">
                  {/* full-width recommendation */}
                  <p className="col-span-full text-1xl">
                    {recommendationsList[index].recommendation}
                  </p>

                  <p>
                    <strong>Genre:</strong> {recommendationsList[index].genre}
                  </p>
                  <p>
                    <strong>Platforms:</strong>{" "}
                    {recommendationsList[index].platforms}
                  </p>
                  <p>
                    <strong>Playtime:</strong>{" "}
                    {recommendationsList[index].playtime}
                  </p>
                  <div className="flex">
                    <p>
                      <strong>Rating:</strong>{" "}
                      {/* {recommendationsList[index].rating} */}
                    </p>
                    <RatingStars
                      rating={recommendationsList[index].rating}
                      className="mt-1"
                    />
                    {/* {dataResults && (
                    <RatingMsg rating={dataResults[0]?.rating} ratings={dataResults[0]?.ratings} />
                    )} */}
                    {/* {console.log('rating', dataResults[0].ratings)} */}
                  </div>
                  <p>
                    <strong>Released:</strong>{" "}
                    {recommendationsList[index].releaseDate
                      ? new Date(game.released).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })
                      : "N/A"}
                  </p>
                  <p>
                    <strong>Reviews:</strong>{" "}
                    {recommendationsList[index].reviewsCount}
                  </p>

                  {/* make gameplayList span full width */}
                  <div className="justify-self-center self-center">
                    {gameplayList}
                  </div>
                  {/* <div className="col-span-full">{gameplayList}</div> */}

                  {/* slideshow */}
                  <div
                    className="relative place-self-center w-full sm:w-4/5 md:w-full lg:w-4/5 cursor-pointer hover:scale-105 transition-scale duration-300 ease-in-out"
                    onClick={() => {
                      handleFetchTrailers(game); //dummy fetch to start YouTubeVideos
                      setMode("official trailer");
                      // setAutoplay(1)
                    }}>
                    <Slideshow
                      slides={slides}
                      current={current}
                      setCurrent={setCurrent}
                    />
                    <FavoritesSetter
                      game={game}
                      className="top-2.5 right-2.5"
                    />
                  </div>

                  {/* description spans full width */}
                  <p className="col-span-full">
                    <strong>Game description:</strong>{" "}
                    {recommendationsList[index].description}
                  </p>
                </div>
              </div>
              <button
                disabled={index === recommendationsList.length - 1}
                type="button"
                onClick={() => {
                  setAnimationLeft(false);
                  setIndex(prev => prev + 1);
                  setMode("");
                  addNavSound();
                }}>
                <ArrowRightDown
                  className={clsx(
                    index === recommendationsList.length - 1
                      ? "text-gray-500 h-16 w-16 cursor-not-allowed"
                      : "h-24 w-24 cursor-pointer hover:drop-shadow-[0_0_8px_blue] hover:scale-110 transition-all duration-300"
                  )}
                />
              </button>
            </div>

            <div className="text-2xl flex justify-between max-w-xl mx-auto">
              <ThemedButton
                type="button"
                onClick={() => {
                  handleFetchTrailers(game); //dummy fetch to start YouTubeVideos
                  setMode("official trailer");
                  addBlipVideoSound();
                }}
                className={"w-20 md:w-40 md:mb-8 h-14 px-0 py-0 "}
                style={{ textShadow: "3px 3px 6px black" }}>
                {isMobile ? "🎬" : "Trailer"}
              </ThemedButton>
              <ThemedButton
                type="button"
                onClick={() => {
                  handleFetchTrailers(game);
                  setMode("gameplay");
                  addBlipVideoSound();
                }}
                className={"w-20 md:w-40 md:mb-8 h-14 px-0 py-0"}
                style={{ textShadow: "3px 3px 6px black" }}>
                {" "}
                {isMobile ? "🎮" : "Gameplay"}
              </ThemedButton>
              <ThemedButton
                type="button"
                onClick={() => {
                  handleFetchTrailers(game);
                  setMode("review");
                  addBlipVideoSound();
                }}
                className="w-20 md:w-40 h-14 px-0 py-0 flex justify-center items-center "
                style={{ textShadow: "3px 3px 6px black" }}>
                {isMobile ? (
                  <Star
                    className="mr-1 text-yellow-400 hover:text-yellow-700
                   transition-colors duration-300 drop-shadow-[3px_3px_6px_black]"
                  />
                ) : (
                  "Review"
                )}
              </ThemedButton>
            </div>
            <AnimatePresence mode="wait">
              {showModal && (
                <Modal
                  onClose={() => {
                    setShowModal(false);
                  }}
                  className="z-20">
                  <YouTubeVideos
                    gameTitle={recommendationsList[index].title}
                    mode={mode}
                    autoplay={autoplay}
                    // autoplay="1"
                  />
                </Modal>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
