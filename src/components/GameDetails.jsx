import { getDetails } from "../lib/getDetails";
import { useEffect, useState, useContext } from "react";
import { AppContext } from "../context/contextsCreation";
// eslint-disable-next-line no-unused-vars
import { AnimatePresence, motion } from "framer-motion";
import Slideshow from "./Slideshow";
import FavoritesSetter from "./FavoritesSetter";
import RatingStars from "./RatingStars";
import RatingMsg from "./RatingMsg";
import useDescriptionSound from "../customHooks/useDescriptionSound";
import AmazonButton from "./AmazonButton";

export default function GameDetails({ gameId, game, setAutoplay }) {
  // export default function GameDetails({ gameId, game }) {
  const [details, setDetails] = useState({});
  const [showDescription, setShowDescription] = useState(false);
  const {
    current,
    setCurrent,
    slides,
    setSlides,
    setMode,
    handleFetchTrailers,
  } = useContext(AppContext);
  const playDescription = useDescriptionSound();

  useEffect(() => {
    if (game?.short_screenshots?.length > 0) {
      setSlides(game.short_screenshots); // push into context
      setCurrent(0); // reset to first slide
    }
  }, [game, setSlides, setCurrent]);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const data = await getDetails(gameId);

        setDetails(data);
      } catch (err) {
        console.error("Error fetching details from GameDetails", err);
      }
    };
    if (gameId) {
      fetchDetails();
    }
  }, [gameId]);

  return (
    <div
      className="flex flex-col justify-center items-center text-cyan-300"
      style={{ textShadow: "3px 3px 6px black" }}>
    
        <h1 className="text-3xl font-bold text-cyan-400 mb-8 drop-shadow-lg">
          {game.name}
        </h1>
        
      <div
        className="grid grid-cols-1 *:border-1 *:border-cyan-400 *:rounded-[8px] *:p-4 *:shadow-lg *:shadow-black sm:grid-cols-2 
      gap-4 items-start text-xl mb-8">
        <p className="font-bold text-cyan-300">
          Genres:{" "}
          {game.genres.map((g, index) => (
            <span key={g.id} className="font-normal text-cyan-300 ">
              {g.name || "N/A"}
              {index === game.genres.length - 1 ? "" : ", "}
            </span>
          ))}
        </p>
        <p className=" font-bold ">
          Platforms:{" "}
          {game.platforms.map((p, index) => (
            // {game.parent_platforms.map((p, index) => (
            <span key={p.platform.id} className="font-normal">
              {p.platform.name || "N/A"}
              {index === game.platforms.length - 1 ? "" : ", "}
            </span>
          ))}
        </p>
        <p className=" font-bold ">
          Playtime:{" "}
          <span className="font-normal ">{game.playtime || "N/A"} hours</span>
        </p>

        <div className="flex">
          <p className=" font-bold">Rating: </p>
          <RatingStars
            rating={game.rating}
            ratings={game.ratings}
            className="mt-1"
          />
          {/* <span className="font-normal text-sm ml-2 mt-1">
            {" "}
            ({game.rating || "N/A"}){" "}
          </span> */}
          <RatingMsg rating={game.rating} ratings={game.ratings} />
        </div>

        <p className=" font-bold ">
          Released:{" "}
          <span className="font-normal ">
            {game.released
              ? new Date(game.released).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })
              : "N/A"}
          </span>
        </p>
        <p className=" font-bold ">
          Reviews count:{" "}
          <span className="font-normal ">{game.reviews_count || "N/A"}</span>
        </p>
        <p className=" font-bold ">
          Publishers:{" "}
          {details?.publishers?.length > 0 ? (
            details?.publishers?.map((p, index) => (
              <span key={p.id} className="font-normal ">
                {p.name || "N/A"}
                {index === details?.publishers?.length - 1 ? "" : ", "}
              </span>
            ))
          ) : (
            <span className="font-normal">N/A</span>
          )}
        </p>
        <p className="font-bold">
          Developers:{" "}
          {details?.developers?.map(dev => (
            <span key={dev.id} className="font-normal">
              {dev.name || "N/A"}{" "}
            </span>
          ))}
          {console.log("episodes", details)}
        </p>
        {details?.game_series_count > 0 && (
          <p>
            Part of a series of{" "}
            <span>{details?.game_series_count || "N/A"}</span> episodes
          </p>
        )}
      </div>
      <AmazonButton
        title={game.name}
        // platform={game.parent_platforms[1].platform.name}
      />
      {slides.length > 0 && (
        <div
          className="relative my-8 w-full sm:w-160 hover:cursor-pointer
           hover:scale-105 transition-scale duration-300 ease-out"
          onClick={() => {
            setAutoplay(1);
            setMode("official trailer");
            handleFetchTrailers(game);
          }}>
          <Slideshow
            slides={slides || []}
            current={current}
            setCurrent={setCurrent}
          />

          <FavoritesSetter game={game} className="top-2.5 right-2.5" />
        </div>
      )}

      <button
        // className="mb-1 rounded-lg px-4 py-2 bg-transparent
        // underline text-yellow-200 text-xl
        //  hover:text-yellow-400   font-semibold
        //  shadow-md transition duration-200 cursor-pointer"
        className="relative text-yellow-300 font-bold flex items-center p-2 rounded-xl
             after:content-[''] after:absolute after:left-0 after:bottom-0 
             after:h-[2px] after:bg-yellow-300 after:w-0 
             after:transition-all after:duration-300 
             hover:after:w-full"
        type="button"
        onClick={() => {
          setShowDescription(!showDescription);
          playDescription();
        }}>
        Read the description
      </button>
      <AnimatePresence>
        {showDescription && (
          <motion.div
            initial={{ height: 0, opacity: 0, scale: 0.8 }}
            animate={{ height: "auto", opacity: 1, scale: 1 }}
            exit={{ height: 0, opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}>
            <p className="font-medium text-xl sm:mx-40 text-justify">
              Description:{" "}
              <span className="text-xl">{details.description_raw}</span>
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
