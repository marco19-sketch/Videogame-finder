import { useCallback } from "react";
import { AppContext } from "../context/contextsCreation";
import DateRangePicker from "./DateRangePicker";

const genresCheckboxes = [
  "Action",
  "Indie",
  "Adventure",
  "RPG",
  "Strategy",
  "Shooter",
  "Casual",
  "Simulation",
  "Puzzle",
  "Arcade",
  "Platformer",
  "Massively Multiplayer",
  "Racing",
  "Sports",
  "Fighting",
  "Family",
  "Board Games",
  "Card",
  "Educational",
];

export default function SearchBar({
  // results,
  gameName,
  setGameName,
  genres,
  setGenres,
  sort,
  setSort,
  isSorting,
  setIsSorting,
  exactSearch,
  setExactSearch,
  dates,
  setDates,
  startDate,
  setStartDate,
  endDate,
  setEndDate,
  handleFetch,
  handleReset,
  disabled,
}) {
  // Set genres
  const handleCheckboxes = useCallback(
    e => {
      const genre = e.target.value.toLowerCase();
      if (e.target.checked) {
        setGenres(prev => [...prev, genre]);
      } else {
        setGenres(prev => prev.filter(g => g !== genre));
      }
    },
    [setGenres]
  );

  return (
    <div className="layout-container">
      <label htmlFor="enable-dates">Enable search by dates</label>
      <input
        type="checkbox"
        id="enable-dates"
        checked={dates}
        onChange={e => setDates(e.target.checked)}
      />
      <DateRangePicker
        endDate={endDate}
        setEndDate={setEndDate}
        startDate={startDate}
        setStartDate={setStartDate}
        disabled={disabled}
      />
      <label htmlFor="game-name">Insert game name</label>
      <input
        type="text"
        value={gameName}
        id="game-name"
        onChange={e => setGameName(e.target.value)}
      />
      <button
        type="button"
        className="search-btn"
        onClick={() => handleFetch()}>
        Search games
      </button>
      {/* <ul className="game-list">
        {results.map(game => (
          <li key={game.id}>
            {game.name} <br />
            released: {game.released || "N/A"} <br />
            rating: {game.rating || "N/A"}
          </li>
        ))}
      </ul> */}

      {genresCheckboxes.map(genre => (
        <div key={genre}>
          <label htmlFor={genre}>{genre}</label>
          <input
            type="checkbox"
            id={genre}
            value={genre}
            onChange={handleCheckboxes}
            checked={genres.includes(genre.toLowerCase())}
          />
        </div>
      ))}
      <label htmlFor="exact-search">Exact match</label>
      <input
        type="checkbox"
        checked={exactSearch}
        id="exact-search"
        onChange={e => setExactSearch(e.target.checked)}
      />

      <label htmlFor="is-sorting">Enable sorting</label>
      <input
        id="is-sorting"
        type="checkbox"
        checked={isSorting}
        onChange={e => {
          const enabled = e.target.checked;
          setIsSorting(enabled);
          if (!enabled) setSort(null);
        }}
      />
      <label htmlFor="radio-rating">rating</label>
      <input
        type="radio"
        id="radio-rating"
        value="rating"
        checked={sort === "-rating"}
        name="radio-btn"
        onChange={() => setSort("-rating")}
        disabled={!isSorting}
      />
      <label htmlFor="radio-released">released</label>
      <input
        type="radio"
        id="radio-released"
        value="released"
        checked={sort === "-released"}
        name="radio-btn"
        onChange={() => setSort("-released")}
        disabled={!isSorting}
      />

      <button type="button" className="reset-btn" onClick={handleReset}>
        Reset
      </button>
    </div>
  );
}
