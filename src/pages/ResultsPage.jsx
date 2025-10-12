import { useContext, useCallback, useEffect, useState } from "react";
import { AppContext } from "../context/contextsCreation";
import { NavLink, Link } from "react-router-dom";
import FavoritesSetter from "../components/FavoritesSetter";
import {
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  ChevronDown,
} from "lucide-react";
import clsx from "clsx";
import useMediaQuery from "../customHooks/useMediaQuery"; //listens to screen size change
import RatingStars from "../components/RatingStars";
import AnimateWrapper from "../components/AnimateWrapper";
import useNavSound from "../customHooks/useNavSound";
import useSelectSound from '../customHooks/useSelectSound';

export default function ResultsPage() {
  const { results, page, setPage, handleFetch, loading, setLoading } =
    useContext(AppContext);
  const [lastPage, setLastPage] = useState(false);
  const [animationLeft, setAnimationLeft] = useState(false);
  const isMobile = useMediaQuery("(max-width: 768px)");
  const ArrowLeftUp = isMobile ? ChevronUp : ChevronLeft;
  const ArrowRightDown = isMobile ? ChevronDown : ChevronRight;
  const playNav = useNavSound();
  const playSelect = useSelectSound();

  const handlePrevious = useCallback(() => {
    if (page > 1) {
      setPage(prevPage => prevPage - 1);
    }
  }, [page, setPage]);

  useEffect(() => {
    if (results.length < 8) {
      setLastPage(true);
    } else {
      setLastPage(false);
    }
  }, [results]);

  const handleNext = useCallback(() => {
    if (!results.length < 8) setPage(prevPage => prevPage + 1);
  }, [setPage, results.length]);

  useEffect(() => {
    const timer = setTimeout(() => {
      handleFetch(page);
    }, 2000);
    return () => clearTimeout(timer);
  }, [page, handleFetch]);

  

  return (
    <div
      className="h-fit pb-30 pt-16 px-4 bg-gradient-to-b from-gray-900 via-gray-800
     to-black flex flex-col items-center justify-center   text-white">
      {loading && (
        <div className="fixed inset-0 flex justify-center items-center z-50 cursor-wait">
          <p className="text-white text-lg font-semibold  cursor-progress animate-pulse ">
            Loading...
          </p>
        </div>
      )}
      {/* Link back to Home */}

      <NavLink
        to="/home-page"
        onClick={() => {
          setPage(1);
          playNav();
        }}
        className=" h-12 text-cyan-400 text-xl  mb-8 font-semibold hover:text-cyan-300 transition ">
        ⬅️ New search
      </NavLink>

      <AnimateWrapper
        results={results}
        isMobile={isMobile}
        animationLeft={animationLeft}
        page={page}>
        <button
          type="button"
          onClick={() => {
            setAnimationLeft(true);
            handlePrevious();
            setLoading(true);
            playNav();
          }}
          disabled={page === 1}
          className="block ">
          {/* ⬅️ Previous */}
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
        <ul className="relative  grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-full max-w-7xl">
          {results.map(game => (
            <li
              key={game.id}
              className="relative z-10 group rounded-2xl overflow-hidden shadow-lg hover:shadow-cyan-500/40 
                transition duration-300 transform hover:-translate-y-1 hover:scale-105"
              onClick={playSelect}>
              <Link to={`/details-page/${game.id}`} className="block">
                {/* Immagine con overlay */}
                <div>
                  {/* <div className="relative"> */}
                  <img
                    className="w-full h-52 object-cover"
                    src={
                      Array.isArray(game?.short_screenshots)
                        ? game?.short_screenshots[0]?.image
                        : undefined
                    }
                    alt={`screenshot of ${game.name}`}
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-black/70
                     via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition duration-300"
                  />
                  <FavoritesSetter game={game} />
                </div>

                {/* Info card */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                  <h2 className="text-lg font-bold text-cyan-400 group-hover:text-white transition truncate">
                    {game.name}
                  </h2>

                  <p className="text-sm text-gray-300">
                    Released:{" "}
                    <span className="font-medium text-white">
                      {game.released
                        ? new Date(game.released).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })
                        : "N/A"}
                    </span>
                  </p>

                  <div className="text-sm text-gray-300 flex items-center gap-1">
                    Rating:{" "}
                    {/* <span className="font-medium text-yellow-400 flex items-center gap-1">
                        {game.rating || "N/A-"}
                      </span> */}
                    <RatingStars rating={game.rating} className="text-sm" />
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
        <button
          disabled={lastPage}
          type="button"
          onClick={() => {
            setAnimationLeft(false);
            handleNext();
            setLoading(true);
            playNav();
          }}
          // className="basis-1/12 px-6 py-2 rounded-lg font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-400 hover:to-blue-500 transition-colors duration-300">
        >
          <ArrowRightDown
            className={clsx(
              lastPage
                ? "text-gray-500 h-16 w-16 cursor-not-allowed"
                : "h-24 w-24 cursor-pointer hover:drop-shadow-[0_0_8px_blue] hover:scale-110 transition-all duration-300"
            )}
          />
        </button>
      </AnimateWrapper>
      {/* </motion.div>
      </AnimatePresence> */}
    </div>
  );
}
