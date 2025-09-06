import { useContext, useState, useCallback } from "react";
import { AppContext } from "../context/contextsCreation";
import { useParams, Link } from "react-router-dom";
import GameTrailer from "../components/GameTrailer";
import GameDetails from "../components/GameDetails";
import Modal from "../components/Modal";

export default function DetailsPage() {
  const { results, rawgKey, showTrailer, setShowTrailer, trendingGames } =
    useContext(AppContext);

  const { id } = useParams();
  const game =
    results?.find(g => g.id === Number(id)) ||
    trendingGames?.find(g => g.id === Number(id));
  const [trailers, setTrailers] = useState([]);
  const [index, setIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [gamePlay, setGamePlay] = useState(false);

  //Getting trailers using gameId
  const handleFetchTrailers = useCallback(async () => {
    if (!game) return;

    try {
      const res = await fetch(
        `https://api.rawg.io/api/games/${game.id}/movies?key=${rawgKey}`
      );
      const data = await res.json();

      setTrailers(data.results);
      if (data.results.length === 0 || !data.results) {
        // setYouTube(true);
        setShowTrailer(false);
      } else {
        // setYouTube(false);
        setShowTrailer(true);
      }

      setShowModal(true);
    } catch (err) {
      console.error("Error trying to fetch game trailers:", err);
    }
  }, [rawgKey, game, setShowTrailer]);

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
      {/* Overlay gradient */}
      
    </div>
  );
}
