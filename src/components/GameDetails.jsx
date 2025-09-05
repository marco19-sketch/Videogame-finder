import { getDetails } from "../lib/getDetails";
import { useEffect, useState } from "react";

export default function GameDetails({ gameId }) {
  const [details, setDetails] = useState({});
  const [showDescription, setShowDescription] = useState(false);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const data = await getDetails(gameId);
        setDetails(data);
        console.log("details from GameDetails", data);
      } catch (err) {
        console.error("Error fetching details from GameDetails", err);
      }
    };
    if (gameId) {
      fetchDetails();
    }
  }, [gameId]);

  return (
    <>
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
         shadow-md transition duration-200"
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
    </>
  );
}
