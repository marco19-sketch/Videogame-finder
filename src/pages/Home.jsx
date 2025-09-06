import { useCallback, useContext } from "react";
import { AppContext } from "../context/contextsCreation";

import SearchBar from "../components/SearchBar";

export default function Home() {
  const {
    results,
    setResults,
    setGameName,
    setGenres,
    setIsSorting,
    setSort,
    setDates,
    setStartDate,
    setEndDate,
    gameName,
    genres,
    sort,
    isSorting,
    exactSearch,
    setExactSearch,
    dates,
    startDate,
    endDate,
    handleFetch,
    randomBg
  } = useContext(AppContext);

  console.log('results from home page', results)

  const handleReset = useCallback(() => {
    setGameName("");
    setResults([]);
    setGenres([]);
    setIsSorting(false);
    setSort("");
    setDates(false);
    setStartDate(null);
    setEndDate(null);
  }, [
    setResults,
    setGameName,
    setGenres,
    setIsSorting,
    setSort,
    setDates,
    setStartDate,
    setEndDate,
  ]);

  return (
    <div
      className={`min-h-screen bg-gray-100 flex flex-col items-center p-6"
    ${
      randomBg
        ? "bg-cover bg-center"
        : "bg-gradient-to-br from-gray-900 via-gray-800 to-black text-gray-100"
    }`}
      style={randomBg ? { backgroundImage: `url('${randomBg}')` } : {}}>
      {/* Page Title */}
      <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-8 text-center">
        Video Game Finder
      </h1>

      {/* Search Bar */}
      <div className="w-full max-w-4xl">
        <SearchBar
          results={results}
          setResults={setResults}
          gameName={gameName}
          setGameName={setGameName}
          genres={genres}
          setGenres={setGenres}
          sort={sort}
          isSorting={isSorting}
          setIsSorting={setIsSorting}
          setSort={setSort}
          exactSearch={exactSearch}
          setExactSearch={setExactSearch}
          dates={dates}
          setDates={setDates}
          startDate={startDate}
          setStartDate={setStartDate}
          endDate={endDate}
          setEndDate={setEndDate}
          handleFetch={handleFetch}
          handleReset={handleReset}
          disabled={!dates}
        />
      </div>
    </div>
  );
}
