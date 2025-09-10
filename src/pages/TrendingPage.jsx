import { useContext, useCallback, useEffect, useState } from "react";
import { AppContext } from "../context/contextsCreation";
import { Link } from "react-router-dom";
import { getTrending } from "../lib/getTrending";

export default function TrendingPage(sortBy) {
  
  const { trendingGames, setTrendingGames, results } = useContext(AppContext);
  const [page, setPage] = useState(1);

  sortBy = "-rating";

  const handlePrevious = useCallback(() => {
    if (page > 1) {
      setPage(prevPage => prevPage - 1);
    }
  }, [page, setPage]);

  const handleNext = useCallback(() => {
    if (page <= 3) {
      setPage(prevPage => prevPage + 1);
    }
  }, [setPage, page]);

  useEffect(() => {
    async function fetchTrending() {
      const data = await getTrending(sortBy, page);
      setTrendingGames(data);
    }
    fetchTrending();
  }, [page, setTrendingGames, sortBy, results]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black flex flex-col items-center py-8 px-4 text-white">
      <h1 className="text-3xl font-bold text-cyan-400 mb-6 drop-shadow-lg">
        Best games right now
      </h1>
      {/* Link back to Home */}
      <Link
        to="/home"
        onClick={() => setPage(1)}
        className="mb-6 text-cyan-400 font-semibold hover:text-cyan-300 transition">
        ⬅️ New search
      </Link>

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
              </div>
            </Link>
          </li>
        ))}
      </ul>

      {/* Pagination buttons */}
      <div className="flex gap-4 mt-10">
        <button
          type="button"
          onClick={handlePrevious}
          disabled={page === 1}
          className={`px-6 py-2 rounded-lg font-semibold transition-colors duration-300 ${
            page === 1
              ? "bg-gray-600 text-gray-300 cursor-not-allowed"
              : "bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-400 hover:to-blue-500"
          }`}>
          ⬅️ Previous
        </button>
        <button
          type="button"
          onClick={handleNext}
          disabled={page === 3}
          className={`px-6 py-2 rounded-lg font-semibold transition-colors duration-300 ${
            page === 3
              ? "bg-gray-600 text-gray-300 cursor-not-allowed"
              : "bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-400 hover:to-blue-500"
          }`}>
          Next ➡️
        </button>
      </div>
    </div>
  );
}
