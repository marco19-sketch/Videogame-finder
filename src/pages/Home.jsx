import { useCallback, useState, useContext } from "react";
import { AppContext } from "../context/contextsCreation";
// import { useNavigate } from "react-router-dom";
import SearchBar from "../components/SearchBar";

export default function Home() {
  // const [results, setResults] = useState([]);
  // const [gameId, setGameId] = useState("");
  // const key = "key=f3ea5ddf24ad48c2a58bda496fbb43c8";
  const [details, setDetails] = useState({});
  // const [trailers, setTrailers] = useState([]);
  // const [gameName, setGameName] = useState("");
  // const [genres, setGenres] = useState([]);
  // const [sort, setSort] = useState("");
  // const [isSorting, setIsSorting] = useState(false);
  // const [exactSearch, setExactSearch] = useState(false);
  // const [dates, setDates] = useState(false);
  // const [startDate, setStartDate] = useState(null);
  // const [endDate, setEndDate] = useState(null);
  // const navigate = useNavigate();

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
  

  ///Main fetch, get the list of games searched
  // const handleFetch = useCallback(async () => {
  //   navigate("/results-page");
  //   let url = `https://api.rawg.io/api/games?${key}&page=${page}&page_size=20&search=${encodeURIComponent(
  //   // let url = `https://api.rawg.io/api/games?${key}&page=1&page_size=20&search=${encodeURIComponent(
  //     gameName
  //   )}`;
  //   if (genres.length !== 0) {
  //     url += `&genres=${genres}`;
  //   }
  //   if (sort) {
  //     url += `&ordering=${sort}`;
  //   }
  //   if (exactSearch) {
  //     url += `&search_exact=${exactSearch}`;
  //   }
  //   if (dates) {
  //     console.log("start date & end date", startDate, endDate);
  //     const formattedStart = startDate?.toISOString().split("T")[0];
  //     const formattedEnd = endDate?.toISOString().split("T")[0];
  //     console.log("formatted start & end", formattedStart, formattedEnd);
  //     url += `&dates=${formattedStart},${formattedEnd}`;
  //   }
  //   console.log("url", url);
  //   try {
  //     const res = await fetch(url);
  //     const data = await res.json();
  //     console.log("results", data.results);
  //     setResults(data.results);
  //   } catch (err) {
  //     console.error("Error trying to fetch data:", err);
  //   }
  // }, [
  //   gameName,
  //   genres,
  //   sort,
  //   exactSearch,
  //   dates,
  //   endDate,
  //   startDate,
  //   navigate,
  //   setResults,
  //   key,
  //   page
  // ]);

  //Fetching single game details
  // const handleFetchDetails = useCallback(async () => {
  //   const game_pk = "1030";
  //   try {
  //     const res = await fetch(
  //       `https://api.rawg.io/api/games/${game_pk}?${key}`
  //     );
  //     const data = await res.json();
  //     console.log("details", data);
  //     setDetails(data);
  //   } catch (err) {
  //     console.error("Error fetching game details", err);
  //   }
  // }, [key]);


  const handleReset = useCallback(() => {
    setGameName("");
    setResults([]);
    setGenres([]);
    setIsSorting(false);
    setSort("");
    setDates(false);
    setStartDate(null);
    setEndDate(null);
    setDetails({});
    // setGameId("");
    // setTrailers([]);
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

      {/* <button
        type="button"
        className="details-btn"
        onClick={handleFetchDetails}>
        Details
      </button> */}

      <p className="game-name">{details.name}</p>
      <img
        src={details.background_image}
        alt={`${details.name}-image`}
        width="300"
        height="300"
      />
      {/* <button type="button" className="id-btn" onClick={handleFetchId}>
        Get game ID
      </button> */}
      {/* {trailers.map(mov => (
        <video controls width="640" key={mov.id}>
          <source src={mov.data["480"]} type="video/mp4" />
          Sorry, you browser doesn't support embedded videos.
        </video>
      ))} */}
    </div>
  );
}
