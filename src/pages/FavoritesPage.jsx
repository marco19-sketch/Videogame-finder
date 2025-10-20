import { useContext, useCallback, useState } from "react";
import { AppContext, AuthContext } from "../context/contextsCreation";
import { Link } from "react-router-dom";
import clsx from "clsx";
import {
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  ChevronDown,
} from "lucide-react";
import useMediaQuery from "../customHooks/useMediaQuery";
import AnimateWrapper from "../components/AnimateWrapper";
// flushSync forces an immediate render so the animatePresence key is
// forced to change before the isAnimationLeft. In this way
// the animation starts always with the right direction.
import { flushSync } from "react-dom";
import useNavSound from "../customHooks/useNavSound";
import useUsername from "../customHooks/useUsername";
import UserAvatar from "../components/UserAvatar";
import GameGrid from "../components/GameGrid";

export default function MyListPage() {
  // const { favorites, page, setPage, handleFetch } = useContext(AppContext);
  const { page, setPage, favorites } = useContext(AppContext);
  const { user } = useContext(AuthContext);
  const gamesPerPage = 8;
  const start = (page - 1) * 8;
  const end = start + gamesPerPage;
  const visibleFavorites = favorites.slice(start, end);
  const lastPage = end >= favorites.length;
  const isMobile = useMediaQuery("(max-width: 768px)");
  const ArrowLeftUp = isMobile ? ChevronUp : ChevronLeft;
  const ArrowRightDown = isMobile ? ChevronDown : ChevronRight;
  const [isAnimationLeft, setIsAnimationLeft] = useState(false);
  const playNav = useNavSound();
  const username = useUsername();
  // setIsAnimationLeft has to come before the page update(framer motion key)
  // so the start animation is set to the right direction, and flushSync helps with that
  const handlePrevious = useCallback(() => {
    if (page > 1) {
      flushSync(() => {
        setIsAnimationLeft(true);
      });
      setPage(prevPage => prevPage - 1);
    }
  }, [page, setPage]);

  const handleNext = useCallback(() => {
    flushSync(() => {
      setIsAnimationLeft(false);
    });
    setPage(prevPage => prevPage + 1);
  }, [setPage]);

  return (
    <div
      className="h-fit pb-30 px-4 w-fit  mx-auto bg-gradient-to-b from-gray-900 via-gray-800
     to-black flex flex-col items-center  text-white ">
      {/* Profile Header */}
      <div className="flex items-center  sm:place-self-start gap-6 justify-center sm:ml-24 mb-8 ">
        <Link to="/avatar-page" title="modify avatar">
          <UserAvatar className="w-24 h-24 mt-4" />
        </Link>
        <div>
          <Link to="/username-page" title="modify username">
            <h1 className="text-2xl font-bold cursor-pointer">
              {username || "Guest Gamer"}
            </h1>
          </Link>
          {/* <h1 className="text-2xl font-bold">{user?.name || "Guest Gamer"}</h1> */}
          <p className="text-gray-600">{user?.email || "Not logged in"}</p>
        </div>
      </div>

      {/* Link back to Home */}
      <h1 className="text-3xl font-bold text-cyan-400 mb-6 drop-shadow-lg">
        My List ({favorites.length})
      </h1>
      <Link
        to="/home-page"
        onClick={() => {
          setPage(1);
          playNav();
        }}
        className="mb-6 text-cyan-400 font-semibold hover:text-cyan-300 transition">
        ⬅️ New search
      </Link>
      <AnimateWrapper
        results={visibleFavorites}
        isMobile={isMobile}
        animationLeft={isAnimationLeft}
        page={page}>
        <button
          type="button"
          onClick={() => {
            handlePrevious();
            playNav();
          }}
          disabled={page === 1}>
          <ArrowLeftUp
            className={clsx(
              page === 1
                ? "text-gray-500 h-16 w-16 cursor-not-allowed"
                : "h-24 w-24 cursor-pointer hover:drop-shadow-[0_0_8px_blue] hover:scale-110 transition-all duration-300"
            )}
          />
        </button>

        <GameGrid results={visibleFavorites} />

        <button
          type="button"
          disabled={lastPage}
          onClick={() => {
            handleNext();
            playNav();
          }}>
          <ArrowRightDown
            className={clsx(
              lastPage
                ? "text-gray-500 h-16 w-16 cursor-not-allowed"
                : "h-24 w-24 cursor-pointer hover:drop-shadow-[0_0_8px_blue] hover:scale-110 transition-all duration-300"
            )}
          />
        </button>
      </AnimateWrapper>
    </div>
  );
}
