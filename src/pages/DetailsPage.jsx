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
    if (!game) {
      return (
        <div className="layout-container">
          <p>Loading game details...</p>
        </div>
      );
    }
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
  return (
    <div className="layout-container">
      <h1 className="details-title">TITLE:{game.id}</h1>
      <Link to="/results-page">results list </Link>
      <Link to="/home"> Home</Link>
      <button
        type="button"
        className="trailers-btn"
        onClick={handleFetchTrailers}>
        Watch trailers
      </button>

      {showTrailer && (
        <>
          <h3 className="trailer-title">{trailers[index]?.name}</h3>
          <video controls width="640" key={trailers[index]?.id}>
            {/* <source src={trailers[index]?.data["max"]} type='video/mp4' /> */}
            <source src={trailers[index]?.data["480"]} type="video/mp4" />
          </video>
          <button
            type="button"
            className="next-btn"
            onClick={() => setIndex(index + 1)}>
            next
          </button>
          <button
            type="button"
            className="prev-btn"
            onClick={() => setIndex(index - 1)}>
            previous
          </button>
        </>
      )}
      {youTube && !showTrailer && <GameTrailer gameTitle={game.name} />}
    </div>
  );
}
