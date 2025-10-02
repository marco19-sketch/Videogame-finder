import { useContext, useCallback, useEffect, useState, useRef } from "react";
import { AppContext } from "../context/contextsCreation";
import { NavLink, Link } from "react-router-dom";
import FavoritesSetter from "../components/FavoritesSetter";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { scrollTo } from "../lib/scrollTo";
import {
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  ChevronDown,
} from "lucide-react";
import clsx from "clsx";
import useMediaQuery from "../customHooks/useMediaQuery"; //listens to screen size change
import RatingStars from "../components/RatingStars";

export default function ResultsPage() {
  const { results, page, setPage, handleFetch, loading, setLoading } =
    useContext(AppContext);
  const [lastPage, setLastPage] = useState(false);
  const [animationLeft, setAnimationLeft] = useState(false);
  const isMobile = useMediaQuery("(max-width: 768px)");
  const ArrowLeftUp = isMobile ? ChevronUp : ChevronLeft;
  const ArrowRightDown = isMobile ? ChevronDown : ChevronRight;
 

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

  //  useEffect(() => {
  //    if (results.length > 0) {
  //     //decide direction based on animation
  //     const delay = 3000;
  //     if (animationLeft) {
  //     scrollTo(1300, delay);
  //    } else {
  //      scrollTo(-1300, delay);
  //    }
  //   }
  //  }, [animationLeft, results]);

  useEffect(() => {
    console.log(
      "🔄 isAnimationLeft applied:",
      animationLeft,
      Date.now() / 1000
    );
  }, [animationLeft]);

  useEffect(() => {
    console.log("📄 page applied:", page, Date.now() / 1000);
  }, [page]);

  useEffect(() => {
    console.log(
      "⭐ visibleFavorites recalculated:",
      results.map(f => f.id),
      Date.now() / 1000
    );
  }, [results]);
 console.log('height', window.scrollY)
  return (
    <div
      className="min-h-screen  bg-gradient-to-b from-gray-900 via-gray-800
     to-black flex flex-col items-center justify-center py-8 px-4 text-white">
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
        onClick={() => setPage(1)}
        className=" h-12 text-cyan-400 font-semibold hover:text-cyan-300 transition ">
        ⬅️ New search
      </NavLink>
      <AnimatePresence
        mode="wait"
        onExitComplete={() => {
          if (results.length > 0 && isMobile) {
            const delay = 3500;
            console.log("doc height:", document.documentElement.scrollHeight);
            console.log(
              "max scroll:",
              document.documentElement.scrollHeight - window.innerHeight
            );

            scrollTo(animationLeft ? 1600 : 0, delay);
            console.log('scroll height', window.scrollY, Date.now() / 1000)
            console.log("✅ exit animation completed → scrolled");
          }
        }}>
        <motion.div
          key={results[0]?.id || page}
          // key={`page-${page}`}
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
          // onAnimationStart={() =>
          //   console.log(
          //     "🎬 animation START",
          //     Date.now() / 1000,
          //     "direction:",
          //     animationLeft
          //   )
          // }
          // onAnimationComplete={() =>
          //   console.log(
          //     "✅ animation COMPLETE",
          //     Date.now() / 1000,
          //     "direction:",
          //     animationLeft
          //   )
          // }
          // onAnimationComplete={() => {
          //    console.log("animation completed", Date.now() / 1000);
          //   if (!didScroll.current && results.length > 0 && isMobile) {
          //     //decide direction based on animation
          //     const delay = 500;
          //     scrollTo(animationLeft ? 1700 : - 1000, delay);
          //     console.log('scroll' ,window.scrollY, Date.now() / 1000);
          //     didScroll.current = true;
          //      setTimeout(() => {
          //        didScroll.current = false;
          //      }, 1000);
          // if (animationLeft) {
          //   scrollTo(1700, delay);
          // } else {
          //   scrollTo(-1000, delay);
          // }

          //   }

          // }}
          className={`flex ${isMobile ? "flex-col items-center " : ""}`}>
          <button
            type="button"
            onClick={() => {
              setAnimationLeft(true);
              handlePrevious();
              setLoading(true);
              // scrollTo(1700, 50);
              console.log(
                "animate and key from results page",
                animationLeft,
                results[0].id
              );
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
                transition duration-300 transform hover:-translate-y-1 hover:scale-105">
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
                          ? new Date(game.released).toLocaleDateString(
                              "en-US",
                              {
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                              }
                            )
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
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
