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
    <div className="layout-container">
      <h1 className="main-title">Video Game Finder</h1>
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
  );
}
