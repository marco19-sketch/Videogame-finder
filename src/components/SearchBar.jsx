import { useCallback, useState, useEffect } from "react";
import DateRangePicker from "./DateRangePicker";
import {recommendationsList} from "../lib/recommendationsList";
import {fetchRAWG} from "../api/apiClient";

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
  const [bground, setBground] = useState("");
  const [randomIndex] = useState( Math.floor(
    Math.random() * recommendationsList.length
  ));
  
  const [genresCBox, setGenresCBox] = useState(false);
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

  useEffect(() => {
    const fetchBg = async () => {
      try {
        const query = `page=1&page_size=1&title&search=${encodeURIComponent(
          recommendationsList[randomIndex].title
        )}`;
        const data = await fetchRAWG("games", query);

        setBground(data.results[0].background_image);
       
      } catch (err) {
        console.error("Error trying to get screenshots from RAWG", err);
      }
    };
    fetchBg();
  }, [randomIndex]);

  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black p-6 rounded-2xl shadow-xl border border-cyan-500/40 space-y-6 max-w-4xl mx-auto">
      {/* Search by dates */}
      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          id="enable-dates"
          checked={dates}
          onChange={e => setDates(e.target.checked)}
          className="w-4 h-4 accent-cyan-500 cursor-pointer"
        />
        <label htmlFor="enable-dates" className="text-cyan-400 text-sm">
          Enable search by dates
        </label>
      </div>
      {dates && (
        <DateRangePicker
          endDate={endDate}
          setEndDate={setEndDate}
          startDate={startDate}
          setStartDate={setStartDate}
          disabled={disabled}
        />
      )}

      {/* Game name */}
      <div>
        <label htmlFor="game-name" className="block text-sm text-cyan-400 mb-1">
          Insert game name
        </label>
        <input
          type="text"
          value={gameName}
          id="game-name"
          onChange={e => setGameName(e.target.value)}
          className="text-base text-cyan-400 font-semibold w-full px-4 py-2 rounded-lg bg-gray-700  placeholder-gray-400 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          placeholder="e.g. The Witcher"
        />
      </div>

      {/* Search button */}
      <button
        type="button"
        onClick={() => {
          handleFetch();
        }}
        // onClick={() => handleFetch()}
        className="w-full py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-semibold shadow-lg shadow-cyan-500/30 transition">
        🔍 Search games
      </button>

      {/* Genres */}
      <div>
        <div className="flex items-center gap-3">
          <input
            type="checkbox"
            id="genres"
            onChange={e => {
              if (e.target.checked) {
                setGenresCBox(true);
              } else {
                setGenresCBox(false);
              }
            }}
            className="w-4 h-4 accent-cyan-500 cursor-pointer"
          />
          <label htmlFor="genresCBox" className="text-cyan-400 text-sm">
            Genres
          </label>
        </div>
        {genresCBox ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
            {genresCheckboxes.map(genre => (
              <label
                key={genre}
                htmlFor={genre}
                className="flex items-center gap-2 bg-gray-800 px-2 py-1 rounded-lg border border-gray-700 cursor-pointer hover:border-cyan-400 transition">
                <input
                  type="checkbox"
                  id={genre}
                  value={genre}
                  onChange={handleCheckboxes}
                  checked={genres.includes(genre.toLowerCase())}
                  className="w-4 h-4 accent-cyan-500 cursor-pointer"
                />
                <span className="text-gray-200 text-sm">{genre}</span>
              </label>
            ))}
          </div>
        ) : (
          <div
            className="inset-0 w-full h-96 bg-cover bg-center"
            style={{ backgroundImage: `url('${bground}')` }}></div>
        )}
      </div>

      {/* Exact match */}
      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          checked={exactSearch}
          id="exact-search"
          onChange={e => setExactSearch(e.target.checked)}
          className="w-4 h-4 accent-cyan-500 cursor-pointer"
        />
        <label htmlFor="exact-search" className="text-cyan-400 text-sm">
          Exact match
        </label>
      </div>

      {/* Sorting */}
      <div>
        <div className="flex items-center gap-3">
          <input
            id="is-sorting"
            type="checkbox"
            checked={isSorting}
            onChange={e => {
              const enabled = e.target.checked;
              setIsSorting(enabled);
              if (!enabled) setSort(null);
            }}
            className="w-4 h-4 accent-cyan-500 cursor-pointer"
          />
          <label htmlFor="is-sorting" className="text-cyan-400 text-sm">
            Enable sorting
          </label>
        </div>

        {isSorting && (
          <div className="flex gap-6 mt-3">
            <label
              htmlFor="radio-rating"
              className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                id="radio-rating"
                value="rating"
                checked={sort === "-rating"}
                name="radio-btn"
                onChange={() => setSort("-rating")}
                className="accent-cyan-500 cursor-pointer"
              />
              <span className="text-gray-200 text-sm">By Rating</span>
            </label>

            <label
              htmlFor="radio-released"
              className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                id="radio-released"
                value="released"
                checked={sort === "-released"}
                name="radio-btn"
                onChange={() => setSort("-released")}
                className="accent-cyan-500 cursor-pointer"
              />
              <span className="text-gray-200 text-sm">By Release Date</span>
            </label>
          </div>
        )}
      </div>

      {/* Reset button */}
      <button
        type="button"
        onClick={handleReset}
        className="w-full py-2 rounded-xl bg-gray-700 hover:bg-red-500 text-white font-semibold shadow-lg transition">
        ♻️ Reset
      </button>
    </div>
  );
}
