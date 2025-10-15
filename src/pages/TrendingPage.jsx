import { useContext, useCallback, useEffect, useState } from "react";
import { AppContext } from "../context/contextsCreation";
import { Link } from "react-router-dom";
import { getTrending } from "../lib/getTrending";
import clsx from "clsx";
import {
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  ChevronDown,
} from "lucide-react";
import useMediaQuery from "../customHooks/useMediaQuery"; //listens to screen size change
import AnimateWrapper from "../components/AnimateWrapper";
import useNavSound from "../customHooks/useNavSound";
import GameGrid from "../components/GameGrid";

export default function TrendingPage(sortBy) {
  const { trendingGames, setTrendingGames } = useContext(AppContext);
  const [page, setPage] = useState(1);
  const [animationLeft, setAnimationLeft] = useState(false);
  const isMobile = useMediaQuery("(max-width: 768px)");
  const ArrowLeftUp = isMobile ? ChevronUp : ChevronLeft;
  const ArrowRightDown = isMobile ? ChevronDown : ChevronRight;
  const playNav = useNavSound();
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
    <div className="h-fit pb-30 pt-16 px-4 bg-gradient-to-b from-gray-900 via-gray-800 to-black flex flex-col items-center  text-white">
      <h1 className="text-3xl font-bold text-cyan-400 mb-6 drop-shadow-lg">
        Best games right now
      </h1>

      {/* Link back to Home */}
      <Link
        to="/home-page"
        onClick={() => {
          setPage(1);
          playNav();
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
            playNav();
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

        <GameGrid results={trendingGames} />

        <button
          disabled={page === 6}
          type="button"
          onClick={() => {
            setAnimationLeft(false);
            handleNext();
            playNav();
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
