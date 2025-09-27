import { useCallback, useState, useEffect } from "react";
import DateRangePicker from "./DateRangePicker";
import { recommendationsList } from "../lib/recommendationsList";
import { fetchRAWG } from "../api/apiClient";
// eslint-disable-next-line no-unused-vars
import { AnimatePresence, motion } from "framer-motion";

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
  "Music",
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
  genresCBox,
  setGenresCBox,
}) {
  const [bground, setBground] = useState("");
  const [randomIndex] = useState(
    Math.floor(Math.random() * recommendationsList.length)
  );

  // const [genresCBox, setGenresCBox] = useState(false);
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
      {/* Game name */}
      <div className="flex flex-col justify-center items-center ">
        <label htmlFor="game-name" className="block text-cyan-400 mb-1">
          Insert game name
        </label>
        <input
          type="text"
          value={gameName}
          id="game-name"
          onChange={e => setGameName(e.target.value)}
          className="text-base text-cyan-400 font-semibold w-1/2 block m-auto px-4 py-2 rounded-lg bg-gray-700  placeholder-gray-400 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-400"
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
        className="w-1/2 mx-auto my-4 block py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-semibold shadow-lg shadow-cyan-500/30 transition">
        🔍 Search games
      </button>

      {/* Search by dates */}
      <label
        htmlFor="enable-dates"
        className="flex items-center justify-center mx-auto cursor-pointer text-cyan-400 text-sm">
        <input
          type="checkbox"
          id="enable-dates"
          checked={dates}
          onChange={e => setDates(e.target.checked)}
          className="w-4 h-4 mr-4 accent-cyan-500 cursor-pointer"
        />
        Enable search by dates
      </label>
      <AnimatePresence>
        {dates && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3, ease: "easeOut" }}>
            <DateRangePicker
              endDate={endDate}
              setEndDate={setEndDate}
              startDate={startDate}
              setStartDate={setStartDate}
              disabled={disabled}
            />
          </motion.div>
        )}
      </AnimatePresence>
      <div className="flex flex-col md:flex-row md:justify-between">
        {/* Exact match */}

        <label
          htmlFor="exact-search"
          className="flex items-center text-cyan-400 text-sm cursor-pointer">
          <input
            type="checkbox"
            checked={exactSearch}
            id="exact-search"
            onChange={e => setExactSearch(e.target.checked)}
            className="w-4 h-4 mr-4 accent-cyan-500 cursor-pointer"
          />
          Exact match
        </label>

        {/* Genres checkbox*/}

        <label
          htmlFor="genres"
          className="flex items-center text-cyan-400 text-sm cursor-pointer">
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
            checked={genresCBox}
            className="w-4 h-4 mr-4 accent-cyan-500 cursor-pointer"
          />
          Genres
        </label>

        {/* Sorting */}
        <div>
          <label
            htmlFor="is-sorting"
            className="flex items-center  text-cyan-400 text-sm cursor-pointer">
            <input
              id="is-sorting"
              type="checkbox"
              checked={isSorting}
              onChange={e => {
                const enabled = e.target.checked;
                setIsSorting(enabled);
                if (!enabled) setSort(null);
              }}
              className="w-4 h-4 mr-4 accent-cyan-500 cursor-pointer"
            />
            Enable sorting
          </label>

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
      </div>
      <div
        className="relative inset-0 w-full min-h-80 h-fit sm:min-h-64 md:min-h-60 bg-cover bg-center rounded-2xl"
        style={{ backgroundImage: `url('${bground}')` }}>
        <AnimatePresence initial={false}>
          {genresCBox && (
            <motion.div
              key={genresCBox}
              initial={{ height: 0, opacity: 0, scale: 0.8 }}
              animate={{ height: "auto", opacity: 1, scale: 1 }}
              exit={{ height: 0, opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}>
              <div className="inset-0 p-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-y-1 sm:gap-y-2 md:gap-y-4 gap-x-4 bg-black/50 rounded-2xl">
                {genresCheckboxes.map(genre => (
                  <label
                    key={genre}
                    htmlFor={genre}
                    className="flex items-center gap-2 bg-gray-800/80 px-2 py-1 rounded-lg border border-gray-700 cursor-pointer hover:border-cyan-400 transition">
                    <input
                      type="checkbox"
                      id={genre}
                      value={genre}
                      onChange={handleCheckboxes}
                      checked={genres.includes(genre.toLowerCase())}
                      className="w-4 h-4 accent-cyan-500 cursor-pointer"
                    />
                    <span className="text-cyan-300 text-sm">{genre}</span>
                  </label>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Reset button */}
      <button
        type="button"
        onClick={handleReset}
        className="block w-1/2 mx-auto py-2 rounded-xl bg-gray-700 hover:bg-red-500 text-white font-semibold shadow-lg transition">
        ♻️ Reset
      </button>
    </div>
  );
}
