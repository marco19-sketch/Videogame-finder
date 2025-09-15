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
    handleFetch 
  } = useContext(AppContext);

  

  const handleReset = useCallback(() => {
    setGameName("");
    setResults([]);
    setGenres([]);
    setIsSorting(false);
    setSort("");
    setDates(false);
    setStartDate(null);
    setEndDate(null);
    setExactSearch(false)
  }, [
    setResults,
    setGameName,
    setGenres,
    setIsSorting,
    setSort,
    setDates,
    setStartDate,
    setEndDate,
    setExactSearch
  ]);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      {/* Page Title */}
      <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-8 text-center">
        🎮 Game Quest Hub
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
