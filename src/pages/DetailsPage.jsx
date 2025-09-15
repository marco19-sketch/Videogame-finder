import { useContext } from "react";
import { AppContext } from "../context/contextsCreation";
import { useParams, Link } from "react-router-dom";
import GameTrailer from "../components/GameTrailer";
import GameDetails from "../components/GameDetails";
import Modal from "../components/Modal";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";

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
    index,
    setIndex,
    results,
    trendingGames,
  } = useContext(AppContext);

  const { id } = useParams();
  const game =
    results?.find(g => g.id === Number(id)) ||
    trendingGames?.find(g => g.id === Number(id));

  //

  if (!game) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white">
        <p className="text-lg animate-pulse">Loading game details...</p>
      </div>
    );
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={game.id}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.5 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}>
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

          {/* Content */}
          <div className="relative z-10 min-h-screen flex flex-col items-center justify-center">
            <div className="flex gap-6 mb-8 text-cyan-400 font-semibold">
              <Link
                to="/results-page"
                className="hover:text-cyan-300 transition">
                ⬅️ Results
              </Link>
              <Link to="/home" className="hover:text-cyan-300 transition">
                🏠 Home
              </Link>
              <Link
                to="/trending-page"
                className="hover:text-cyan-300 transition">
                Trending now
              </Link>
            </div>

            {/* Title */}
            <h1 className="text-3xl font-bold text-cyan-400 mb-6 drop-shadow-lg">
              {game.name}
            </h1>

            {/* Game Info */}
            <p className="text-sm text-gray-300">
              Genres:{" "}
              {game.genres.map(g => (
                <span key={g.id} className="font-medium text-white">
                  {g.name || "N/A"}
                  {", "}
                </span>
              ))}
            </p>
            <p className="text-sm text-gray-300">
              Platforms:{" "}
              {game.parent_platforms.map(p => (
                <span key={p.platform.id} className="font-medium text-white">
                  {p.platform.name || "N/A"},{" "}
                </span>
              ))}
            </p>
            <p className="text-sm text-gray-300">
              Playtime:{" "}
              <span className="font-medium text-white">
                {game.playtime || "N/A"} hours
              </span>
            </p>
            <p className="text-sm text-gray-300">
              Rating:{" "}
              <span className="font-medium text-white">
                {game.rating || "N/A"}{" "}
                <span className="ml-1 text-yellow-400">★</span>
              </span>
            </p>
            <p className="text-sm text-gray-300">
              Released:{" "}
              <span className="font-medium text-white">
                {game.released || "N/A"}
              </span>
            </p>
            <p className="text-sm text-gray-300">
              Reviews count:{" "}
              <span className="font-medium text-white">
                {game.reviews_count || "N/A"}
              </span>
            </p>
            <GameDetails gameId={game.id} />
            {/* Watch Trailer Button */}
            <button
              type="button"
              onClick={() => {
                setGamePlay(false);
                handleFetchTrailers(game);
              }}
              className="mb-6 mt-6 px-6 py-2 rounded-lg font-semibold 
          bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-400 hover:to-blue-500 transition-colors duration-300">
              🎬 Watch trailers
            </button>

            <button
              type="button"
              onClick={() => {
                setGamePlay(true);
                handleFetchTrailers(game);
              }}
              className="mb-6 mt-6 px-6 py-2 rounded-lg font-semibold bg-gradient-to-r
           from-cyan-500 to-blue-600 text-white hover:from-cyan-400 hover:to-blue-500 transition-colors duration-300">
              🎮 Watch Gameplay
            </button>

            {/* Modal */}
            {showModal && (
              <Modal
                onClose={() => {
                  setShowModal(false);
                  setGamePlay(false);
                }}
                className="z-20">
                {showTrailer && trailers.length > 0 && !gamePlay ? (
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={trailers[index]?.name}
                      initial={{ opacity: 0, scale: 0.2 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.2 }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}>
                      {/* // {showTrailer && trailers.length > 0 ? ( */}
                      <div className=" bg-gray-900 border border-cyan-500/40 rounded-2xl shadow-xl p-4 max-w-3xl mx-auto">
                        {/* <div className="w-full max-w-3xl flex flex-col items-center gap-4"> */}

                        <h3 className="text-cyan-400 text-lg font-semibold mb-3 text-center">
                          {trailers[index]?.name}
                        </h3>
                        <div className="w-full max-w-3xl aspect-video rounded-xl overflow-hidden shadow-lg">
                          <video
                            controls
                            width="100%"
                            key={trailers[index]?.id}
                            className="w-auto h-auto">
                            {/* className="rounded-lg shadow-lg border border-gray-700"> */}
                            <source
                              src={trailers[index]?.data["480"]}
                              type="video/mp4"
                            />
                          </video>
                        </div>
                        <div className="flex justify-between mt-4">
                          <button
                            type="button"
                            onClick={() => setIndex(Math.max(0, index - 1))}
                            disabled={index === 0}
                            className={`px-5 py-2 rounded-lg font-semibold transition ${
                              index === 0
                                ? "bg-gray-600 text-gray-400 cursor-not-allowed"
                                : "bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-400 hover:to-blue-500"
                            }`}>
                            ⬅️ Previous
                          </button>
                          <button
                            type="button"
                            onClick={() => setIndex(index + 1)}
                            disabled={index === trailers.length - 1}
                            className={`px-5 py-2 rounded-lg font-semibold transition ${
                              index === trailers.length - 1
                                ? "bg-gray-600 text-gray-400 cursor-not-allowed"
                                : "bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-400 hover:to-blue-500"
                            }`}>
                            Next ➡️
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                ) : (
                   <AnimatePresence mode="wait">
                    <motion.div
                      key={trailers[index]?.name}
                      initial={{ scale: 0.2 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0.2 }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}>
                  <GameTrailer
                    key={gamePlay ? "gameplay" : "trailer"}
                    gameTitle={game.name}
                    mode={gamePlay ? "gameplay" : "trailer"}
                  />
                  </motion.div>
                  </AnimatePresence>
                )}
              </Modal>
            )}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
