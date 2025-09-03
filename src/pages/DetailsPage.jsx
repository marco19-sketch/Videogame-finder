import { useContext, useState, useCallback } from "react";
import { AppContext } from "../context/contextsCreation";
import { useParams, Link } from "react-router-dom";
import GameTrailer from "../components/GameTrailer";

export default function DetailsPage() {
  const { results, rawgKey, showTrailer, setShowTrailer } =
    useContext(AppContext);
  const { id } = useParams();
  const game = results?.find(g => g.id === Number(id));
  const [trailers, setTrailers] = useState([]);
  const [index, setIndex] = useState(0);

  const [youTube, setYouTube] = useState(false);

  //Getting trailers using gameId

  const handleFetchTrailers = useCallback(async () => {
    console.log("handle fetch fires");
    if (!game) return
    // if (!game) {
    //   return (
    //     <div className="layout-container">
    //       <p>Loading game details...</p>
    //     </div>
    //   );
    // }
   
    try {
      const res = await fetch(
        `https://api.rawg.io/api/games/${game.id}/movies?key=${rawgKey}`
      );
      const data = await res.json();

      setTrailers(data.results);
      if (data.results.length === 0 || !data.results) {
        setYouTube(true);
        setShowTrailer(false);
      } else {
        setYouTube(false);
        setShowTrailer(true);
      }
    } catch (err) {
      console.error("Error trying to fetch game trailers:", err);
    }
  }, [rawgKey, game, setShowTrailer]);

  console.log("youtube, showTrailer", youTube, showTrailer);

 if (!game) {
   return (
     <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white">
       <p className="text-lg animate-pulse">Loading game details...</p>
     </div>
   );
 }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white flex flex-col items-center py-10 px-4">
      {/* Navigation */}
      <div className="flex gap-6 mb-8 text-cyan-400 font-semibold">
        <Link to="/results-page" className="hover:text-cyan-300 transition">
          ⬅️ Results
        </Link>
        <Link to="/home" className="hover:text-cyan-300 transition">
          🏠 Home
        </Link>
      </div>

      {/* Title */}
      <h1 className="text-3xl font-bold text-cyan-400 mb-6 drop-shadow-lg">
        {game.name}
      </h1>

      {/* Button to fetch trailers */}
      <button
        type="button"
        onClick={handleFetchTrailers}
        className="mb-6 px-6 py-2 rounded-lg font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-400 hover:to-blue-500 transition-colors duration-300">
        🎬 Watch trailers
      </button>

      {/* Trailer player */}
      {showTrailer && (
        <div className="w-full max-w-3xl flex flex-col items-center gap-4">
          <h3 className="text-xl font-semibold text-yellow-400">
            {trailers[index]?.name}
          </h3>
          <video
            controls
            width="100%"
            key={trailers[index]?.id}
            className="rounded-lg shadow-lg border border-gray-700">
            <source src={trailers[index]?.data["480"]} type="video/mp4" />
          </video>

          <div className="flex gap-4 mt-4">
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
      )}

      {/* Fallback YouTube trailer */}
      {youTube && !showTrailer && (
        <div className="mt-8 w-full max-w-3xl">
          <GameTrailer gameTitle={game.name} />
        </div>
      )}
    </div>
  );
}