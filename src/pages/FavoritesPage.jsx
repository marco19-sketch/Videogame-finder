import { useContext, useCallback, useState, useEffect } from "react";
import { AppContext } from "../context/contextsCreation";
import { Link } from "react-router-dom";
import FavoritesSetter from "../components/FavoritesSetter";
import clsx from "clsx";
import {
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  ChevronDown,
} from "lucide-react";
import useMediaQuery from "../customHooks/useMediaQuery";
// eslint-disable-next-line no-unused-vars
import { AnimatePresence, motion } from "framer-motion";
import { scrollTo } from "../lib/scrollTo";

export default function MyListPage() {
  // const { favorites, page, setPage, handleFetch } = useContext(AppContext);
  const { page, setPage, favorites } = useContext(AppContext);
  const gamesPerPage = 8;
  const start = (page - 1) * 8;
  const end = start + gamesPerPage;
  const visibleFavorites = favorites.slice(start, end);
  const lastPage = end >= favorites.length;
  const isMobile = useMediaQuery("(max-width: 768px)");
  const ArrowLeftUp = isMobile ? ChevronUp : ChevronLeft;
  const ArrowRightDown = isMobile ? ChevronDown : ChevronRight;
  const [isAnimationLeft, setIsAnimationLeft] = useState(false);
  const handlePrevious = useCallback(() => {
    if (page > 1) {
      setPage(prevPage => prevPage - 1);
    }
  }, [page, setPage]);

  const handleNext = useCallback(() => {
    setPage(prevPage => prevPage + 1);
  }, [setPage]);

useEffect(() => {
  console.log(
    "🔄 isAnimationLeft applied:",
    isAnimationLeft,
    Date.now() / 1000
  );
}, [isAnimationLeft]);

useEffect(() => {
  console.log("📄 page applied:", page, Date.now() / 1000);
}, [page]);

useEffect(() => {
  console.log(
    "⭐ visibleFavorites recalculated:",
    visibleFavorites.map(f => f.id),
    Date.now() / 1000
  );
}, [visibleFavorites]);

  return (
    <div
      className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800
     to-black flex flex-col items-center py-8 px-4 text-white">
      {/* Link back to Home */}
      <h1 className="text-3xl font-bold text-cyan-400 mb-6 drop-shadow-lg">
        My List ({favorites.length})
      </h1>
      <Link
        to="/home-page"
        onClick={() => setPage(1)}
        className="mb-6 text-cyan-400 font-semibold hover:text-cyan-300 transition">
        ⬅️ New search
      </Link>
      {/* <div className={`flex items-center ${isMobile ? "flex-col " : ""}`}> */}
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={ page}
          // key={visibleFavorites[0]?.id || page}
          custom={isAnimationLeft}
          initial={custom => ({
            opacity: 0,
            ...(isMobile
              ? { y: custom ? 100 : -100 }
              : { x: custom ? 100 : -100 }),
          })}
          animate={{ opacity: 1, x: 0, y: 0 }}
          exit={custom => ({
            opacity: 0,
            ...(isMobile
              ? { y: custom ? -100 : 100 }
              : { x: custom ? -100 : 100 }),
          })}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          // onAnimationComplete={() => {
          //   console.log("animation", Date.now() / 1000);
          //   if (visibleFavorites.length > 0 && isMobile) {
          //     //decide direction based on animation
          //     const delay = 50;
          //     if (isAnimationLeft) {
          //       scrollTo(1700, delay);
          //     } else {
          //       scrollTo(-1700, delay);
          //     }
          //     console.log(window.scrollY);
          //   }
          // }}
          onAnimationStart={() =>
            console.log(
              "🎬 animation START",
              Date.now() / 1000,
              "direction:",
              isAnimationLeft
            )
          }
          onAnimationComplete={() =>
            console.log(
              "✅ animation COMPLETE",
              Date.now() / 1000,
              "direction:",
              isAnimationLeft
            )
          }
          className={`flex items-center ${isMobile ? "flex-col " : ""}`}>
          <button
            type="button"
            onClick={() => {
              setIsAnimationLeft(true);
              handlePrevious();
            }}
            disabled={page === 1}>
            <ArrowLeftUp
              // onClick={() => {
              //   setIsAnimationLeft(true);
              //   handlePrevious();
              // }}
              // disabled={page === 1}
              className={clsx(
                page === 1
                  ? "text-gray-500 h-16 w-16 cursor-not-allowed"
                  : "h-24 w-24 cursor-pointer hover:drop-shadow-[0_0_8px_blue] hover:scale-110 transition-all duration-300"
              )}
            />
          </button>
          {/* <AnimatePresence mode="wait">
          <motion.div
            key={visibleFavorites[0]?.id || page}
            initial={{
              opacity: 0,
              ...(isMobile
                ? { y: isAnimationLeft ? 100 : -100 }
                : { x: isAnimationLeft ? 100 : -100 }),
            }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            exit={{
              opacity: 0,
              ...(isMobile
                ? { y: isAnimationLeft ? -100 : 100 }
                : { x: isAnimationLeft ? -100 : 100 }),
            }}
            transition={{ duration: 0.5, ease: "easeInOut" }}> */}
          {/* Games grid */}
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-full max-w-7xl">
            {visibleFavorites?.map(fav => (
              <li
                key={fav.id}
                className={clsx(
                  "relative group rounded-2xl overflow-hidden shadow-lg hover:shadow-cyan-500/40 transition duration-300 transform hover:-translate-y-1 hover:scale-105",
                  fav.removing &&
                    "opacity-0 scale-95 transition-all duration-300"
                )}>
                <Link to={`/details-page/${fav.id}`} className="block">
                  <div className="relative">
                    <img
                      className="w-full h-52 object-cover"
                      src={fav?.short_screenshots[1].image}
                      alt={`screenshot of ${fav.name}`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition duration-300" />
                    <FavoritesSetter game={fav} />
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                      <h2 className="text-lg font-bold text-cyan-400 group-hover:text-white transition truncate">
                        {fav.name}
                      </h2>
                      <p className="text-sm text-gray-300">
                        Rating:{" "}
                        <span className="font-medium text-white">
                          {" "}
                          {fav.rating || "N/A"}
                        </span>
                      </p>
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
          {/* </motion.div>
        </AnimatePresence> */}
          <button
            type="button"
            disabled={lastPage}
            onClick={() => {
              setIsAnimationLeft(false);
              handleNext();
            }}>
            <ArrowRightDown
              // disabled={lastPage}
              // onClick={() => {
              //   setIsAnimationLeft(false);
              //   handleNext();
              // }}
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
    // </div>
  );
}
