import { getDetails } from "../lib/getDetails";
import { useEffect, useState } from "react";

export default function GameDetails({ gameId, game }) {
  // export default function GameDetails({ gameId, game }) {
  const [details, setDetails] = useState({});
  const [showDescription, setShowDescription] = useState(false);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const data = await getDetails(gameId);
       
        setDetails(data);
      } catch (err) {
        console.error("Error fetching details from GameDetails", err);
      }
    };
    if (gameId) {
      fetchDetails();
    }
  }, [gameId]);

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-3xl font-bold text-cyan-400 mb-6 drop-shadow-lg">
        {game.name}
      </h1>
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
          {game.rating || "N/A"} <span className="ml-1 text-yellow-400">★</span>
        </span>
      </p>
      <p className="text-sm text-gray-300">
        Released:{" "}
        <span className="font-medium text-white">{game.released || "N/A"}</span>
      </p>
      <p className="text-sm text-gray-300">
        Reviews count:{" "}
        <span className="font-medium text-white">
          {game.reviews_count || "N/A"}
        </span>
      </p>
      <p className="text-sm text-gray-300">
        Publishers:{" "}
        {details?.publishers?.map(p => (
          <span key={p.id} className="font-medium text-white">
            {p.name}
            {", "}
          </span>
        ))}
      </p>
      <button
        className="mb-1 rounded-lg px-4 py-2 bg-transparent
        underline
         hover:text-yellow-400  text-white font-semibold 
         shadow-md transition duration-200 cursor-pointer"
        type="button"
        onClick={() => setShowDescription(!showDescription)}>
        Read the description
      </button>
      {showDescription && (
        <p className="font-medium text-white">
          Description:{" "}
          <span className="text-sm text-gray-300">
            {details.description_raw}
          </span>
        </p>
      )}
    </div>
  );
}
