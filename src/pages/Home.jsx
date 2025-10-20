import { useCallback, useContext, useState } from "react";
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

  const [genresCBox, setGenresCBox] = useState(false);

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
    setGenresCBox(false);
  }, [
    setResults,
    setGameName,
    setGenres,
    setIsSorting,
    setSort,
    setDates,
    setStartDate,
    setEndDate,
    setExactSearch,
    setGenresCBox
  ]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black flex flex-col items-center p-6">
     
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
          genresCBox={genresCBox}
          setGenresCBox={setGenresCBox}
        />
      </div>
    </div>
  );
}
