import { useContext, useState, useEffect } from "react";
import { AppContext } from "../context/contextsCreation";
import { useParams, useNavigate } from "react-router-dom";
import YouTubeVideos from "../components/YouTubeVideos";
import GameDetails from "../components/GameDetails";
import Modal from "../components/Modal";
import RawgVideos from "../components/RawgVideos";
import { getDetails } from "../lib/getDetails";
import ThemedButton from "../ThemedComponents/ThemedButton";
import { AnimatePresence } from "framer-motion";

export default function DetailsPage() {
  const {
    showTrailer,
    handleFetchTrailers,
    showModal,
    setShowModal,
    trailers,
    results,
    trendingGames,
    favorites,
    setMode,
    mode,
    autoplay,
    setAutoplay,
  } = useContext(AppContext);

  const { id } = useParams();
  const navigate = useNavigate();
  const game =
    results?.find(g => g.id === Number(id)) ||
    trendingGames?.find(g => g.id === Number(id));
  const [fetchedGame, setFetchedGame] = useState(null);
  // const [autoplay, setAutoplay] = useState(0);

  // If game isn't in results or trending, try favorites or fetch details
  useEffect(() => {
    let mounted = true;
    const ensureGame = async () => {
      if (game) return; // already found

      const fav = favorites?.find(f => f.id === Number(id));
      if (fav) {
        if (mounted) setFetchedGame(fav);
        return;
      }

      // try fetching details from API as a last resort
      try {
        const data = await getDetails(Number(id));
        if (mounted) setFetchedGame(data);
      } catch (err) {
        console.error("Failed to fetch game details for id", id, err);
      }
    };

    ensureGame();

    return () => {
      mounted = false;
    };
  }, [id, game, favorites]);

  const gameToShow = game || fetchedGame;

  if (!gameToShow) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white">
        <p className="text-lg animate-pulse">Loading game details...</p>
      </div>
    );
  }

  return (
    // <AnimatePresence mode="wait">
    <div
      className="relative text-cyan-300 min-h-screen py-10 px-4  bg-cover bg-center"
      style={{ backgroundImage: `url(${gameToShow.background_image})` }}>
      {/*loading skeleton */}
      {/* {loading && (
            <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50 cursor-wait">
              <p className="text-white text-lg font-semibold animate-pulse">
                Loading...
              </p>
            </div>
          )} */}
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-gray-900/70 to-black/90"></div>

      {/* nav bar */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center">
        <div className="flex gap-6 mb-8 text-cyan-400 font-semibold">
          <button
            onClick={() => navigate(-1)}
            className="hover:text-cyan-300 transition text-xl">
            ⬅️ Back
          </button>
        </div>
        <GameDetails
          gameId={gameToShow.id}
          game={gameToShow}
          setAutoplay={setAutoplay}
        />

        {/* Button section */}
        <div
          className="w-full mt-8 sm:w-2/3 flex flex-col justify-center items-center 
         [@media(min-width:860px)]:flex-row md:justify-between">
          <ThemedButton
            type="button"
            onClick={() => {
              setAutoplay(1);
              setMode("official trailer");
              handleFetchTrailers(gameToShow);
            }}
            className={"w-40 mb-8 h-14 px-0 py-0 "}
            style={{ textShadow: "3px 3px 6px black" }}>
            {"Trailer"}
          </ThemedButton>

          <ThemedButton
            type="button"
            onClick={() => {
              setAutoplay(1);
              setMode("gameplay");
              handleFetchTrailers(gameToShow);
            }}
            className={"w-40 mb-8 h-14 px-0 py-0 "}
            style={{ textShadow: "3px 3px 6px black" }}>
            Gameplay
          </ThemedButton>

          <ThemedButton
            type="button"
            onClick={() => {
              setAutoplay(1);
              setMode("review");
              handleFetchTrailers(gameToShow);
            }}
            className={"w-40 mb-8 h-14 px-0 py-0 "}
            style={{ textShadow: "3px 3px 6px black" }}>
            Review
          </ThemedButton>
        </div>
        <AnimatePresence mode="wait">
          {/* Modal */}
          {showModal && (
            <Modal
              onClose={() => {
                setShowModal(false);

                setMode("");
              }}
              className="z-20 ">
              {showTrailer &&
              trailers.length > 0 &&
              mode === "official trailer" ? (
                <RawgVideos />
              ) : (
                <YouTubeVideos
                  key={mode}
                  gameTitle={gameToShow.name}
                  mode={mode}
                  autoplay={autoplay}
                  setAutoplay={setAutoplay}
                />
              )}
            </Modal>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
