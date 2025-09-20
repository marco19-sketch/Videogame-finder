import { useContext, useState } from "react";
import { AppContext } from "../context/contextsCreation";
import { useParams, Link } from "react-router-dom";
import YouTubeVideos from "../components/YouTubeVideos";
import GameDetails from "../components/GameDetails";
import Modal from "../components/Modal";
import RawgVideos from "../components/RawgVideos";

export default function DetailsPage() {
  const {
    showTrailer,
    loading,
    handleFetchTrailers,
    setGamePlay,
    showModal,
    setShowModal,
    trailers,
    gamePlay,
    results,
    trendingGames,
  } = useContext(AppContext);

  const { id } = useParams();
  const game =
    results?.find(g => g.id === Number(id)) ||
    trendingGames?.find(g => g.id === Number(id));
  const [autoplay, setAutoplay] = useState(0);

  if (!game) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white">
        <p className="text-lg animate-pulse">Loading game details...</p>
      </div>
    );
  }

  return (
    <div
      className="relative min-h-screen py-10 px-4 text-white bg-cover bg-center"
      style={{ backgroundImage: `url(${game.background_image})` }}>
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
          <Link to="/results-page" className="hover:text-cyan-300 transition">
            ⬅️ Results
          </Link>
          <Link to="/home-page" className="hover:text-cyan-300 transition">
            🏠 Home
          </Link>
          <Link to="/trending-page" className="hover:text-cyan-300 transition">
            Trending now
          </Link>
        </div>
        <GameDetails gameId={game.id} game={game} />

        {/* Watch Trailer Button */}
        <button
          type="button"
          onClick={() => {
            setGamePlay(false);
            handleFetchTrailers(game);
          }}
          className="mb-6 mt-6 px-6 py-2 rounded-lg font-semibold 
          bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-400
           hover:to-blue-500 transition-colors duration-300 cursor-pointer">
          🎬 Watch trailers
        </button>

        <button
          type="button"
          onClick={() => {
            setGamePlay(true);
            handleFetchTrailers(game);
            setAutoplay(1);
          }}
          className="mb-6 mt-6 px-6 py-2 rounded-lg font-semibold bg-gradient-to-r
           from-cyan-500 to-blue-600 text-white hover:from-cyan-400
            hover:to-blue-500 transition-colors duration-300 cursor-pointer">
          🎮 Watch Gameplay
        </button>

        {/* Modal */}
        {showModal && (
          <Modal
            onClose={() => {
              setShowModal(false);
              setGamePlay(false);
            }}
            className="z-20 ">
            {showTrailer && trailers.length > 0 && !gamePlay ? (
              <RawgVideos />
            ) : (
              <YouTubeVideos
                key={gamePlay ? "gameplay" : "trailer"}
                gameTitle={game.name}
                mode={gamePlay ? "gameplay" : "trailer"}
                autoplay={autoplay}
                setAutoplay={setAutoplay}
              />
            )}
          </Modal>
        )}
      </div>
    </div>
  );
}
