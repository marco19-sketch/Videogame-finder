import { useContext, useCallback,  useEffect } from "react";
import { AppContext } from "../context/contextsCreation";
import { Link } from "react-router-dom";

export default function ResultsPage() {
  const { results, page, setPage, handleFetch } = useContext(AppContext);

  const handlePrevious = useCallback(() => {
    if (page > 1) {
      setPage(prevPage => prevPage - 1);
    }
  }, [page, setPage]);

  const handleNext = useCallback(() => {
    setPage(prevPage => prevPage + 1);
  }, [setPage]);

  useEffect(() => {
    handleFetch(page);
  }, [page, handleFetch]);

  console.log("page", page);

  return (
    <div className="layout-container">
      <Link to="/home" onClick={() => setPage(1)}>
        New search
      </Link>
      <ul className="game-list">
        {results.map(game => (
          <li key={game.id}>
            <Link to={`/details-page/${game.id}`}>
              {game.name}
              {game.id} <br />
              released: {game.released || "N/A"} <br />
              rating: {game.rating || "N/A"}
            </Link>
          </li>
        ))}
      </ul>
      <button type="button" className="next-page-btn" onClick={handleNext}>
        next page
      </button>
      <button
        type="button"
        className="prev-page-btn"
        onClick={handlePrevious}
        disabled={page === 1}>
        previous page
      </button>
    </div>
  );
}
