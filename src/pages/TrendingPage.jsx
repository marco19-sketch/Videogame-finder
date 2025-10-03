import { useContext, useCallback, useEffect, useState } from "react";
import { AppContext } from "../context/contextsCreation";
import { Link } from "react-router-dom";
import { getTrending } from "../lib/getTrending";
import FavoritesSetter from "../components/FavoritesSetter";
import clsx from "clsx";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
// import { scrollTo } from '../lib/scrollTo';
import {
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  ChevronDown,
} from "lucide-react";
import RatingStars from "../components/RatingStars";
import useMediaQuery from "../customHooks/useMediaQuery"; //listens to screen size change
import AnimateWrapper from "../components/AnimateWrapper";
import addNavSound from "../lib/addNavSound";

export default function TrendingPage(sortBy) {
  const { trendingGames, setTrendingGames } = useContext(AppContext);
  const [page, setPage] = useState(1);
  const [animationLeft, setAnimationLeft] = useState(false);
  const isMobile = useMediaQuery("(max-width: 768px)");
  const ArrowLeftUp = isMobile ? ChevronUp : ChevronLeft;
  const ArrowRightDown = isMobile ? ChevronDown : ChevronRight;

  sortBy = "-rating";

  const handlePrevious = useCallback(() => {
    if (page > 1) {
      setPage(prevPage => prevPage - 1);
    }
  }, [page, setPage]);

  const handleNext = useCallback(() => {
    if (page <= 6) {
      setPage(prevPage => prevPage + 1);
    }
  }, [setPage, page]);

  useEffect(() => {
    async function fetchTrending() {
      const data = await getTrending(sortBy, page);
      setTrendingGames(data);
    }
    fetchTrending();
  }, [page, setTrendingGames, sortBy]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black flex flex-col items-center py-8 px-4 text-white">
      <h1 className="text-3xl font-bold text-cyan-400 mb-6 drop-shadow-lg">
        Best games right now
      </h1>

      {/* Link back to Home */}
      <Link
        to="/home-page"
        onClick={() => {setPage(1);
          addNavSound();
        }}
        className="mb-6 text-xl text-cyan-400 font-semibold hover:text-cyan-300 transition">
        ⬅️ New search
      </Link>
      <AnimateWrapper
        results={trendingGames}
        isMobile={isMobile}
        animationLeft={animationLeft}
        page={page}>
        <button
          type="button"
          onClick={() => {
            setAnimationLeft(true);
            handlePrevious();
            addNavSound();
            // addSound(blipSound);
          }}
          disabled={page === 1}
          className="block ">
          <ArrowLeftUp
            className={clsx(
              "block ",
              page === 1
                ? "text-gray-500 h-16 w-16 cursor-not-allowed"
                : "h-24 w-24 cursor-pointer hover:drop-shadow-[0_0_8px_blue] hover:scale-110 transition-all duration-300"
            )}
          />
        </button>
        {/* Games grid */}
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-full max-w-7xl">
          {trendingGames?.map(game => (
            <li
              key={game.id}
              className="relative group rounded-2xl overflow-hidden shadow-lg hover:shadow-cyan-500/40 transition duration-300 transform hover:-translate-y-1 hover:scale-105">
              <Link to={`/details-page/${game.id}`} className="block">
                {/* Immagine con overlay */}
                <div className="relative">
                  <img
                    className="w-full h-52 object-cover"
                    src={game.short_screenshots[0].image}
                    alt={`screenshot of ${game.name}`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition duration-300" />
                </div>
                <FavoritesSetter game={game} />
                {/* Info card */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                  <h2 className="text-lg font-bold text-cyan-400 group-hover:text-white transition truncate">
                    {game.name}
                  </h2>
                  <p className="text-sm text-gray-300">
                    Released:{" "}
                    <span className="font-medium text-white">
                      {game.released || "N/A"}
                    </span>
                  </p>

                  <p className="text-sm text-gray-300 flex items-center gap-1">
                    Rating:{" "}
                    <span className="font-medium text-yellow-400 flex items-center gap-1">
                      {game.rating || "N/A"}
                      {game.rating && (
                        <span className="ml-1 text-yellow-400">★</span>
                      )}
                    </span>
                  </p>
                  <RatingStars rating={game.rating} className="text-sm" />
                </div>
              </Link>
            </li>
          ))}
        </ul>
        <button
          disabled={page === 6}
          type="button"
          onClick={() => {
            setAnimationLeft(false);
            handleNext();
            addNavSound();
            // addSound(blipSound);
          }}>
          <ArrowRightDown
            className={clsx(
              page === 6
                ? "text-gray-500 h-16 w-16 cursor-not-allowed"
                : "h-24 w-24 cursor-pointer hover:drop-shadow-[0_0_8px_blue] hover:scale-110 transition-all duration-300"
            )}
          />
        </button>
      </AnimateWrapper>
    </div>
  );
}
