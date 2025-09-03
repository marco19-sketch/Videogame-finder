import { useMemo, useState, useCallback } from "react";
import { AppContext, AuthContext } from "./contextsCreation";
import { useNavigate } from "react-router-dom";

export default function ContextProvider({ children }) {
  const [results, setResults] = useState([]);
  const [page, setPage] = useState(1);
  const key = "key=f3ea5ddf24ad48c2a58bda496fbb43c8";

  const [gameName, setGameName] = useState("");
  const [genres, setGenres] = useState([]);
  const [sort, setSort] = useState("");
  const [isSorting, setIsSorting] = useState(false);
  const [exactSearch, setExactSearch] = useState(false);
  const [dates, setDates] = useState(false);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const navigate = useNavigate();

  ///Main fetch, get the list of games searched
  const handleFetch = useCallback(
    async (pageToFetch = page) => {
      navigate("/results-page");
      let url = `https://api.rawg.io/api/games?${key}&page=${pageToFetch}&page_size=20&search=${encodeURIComponent(
        // let url = `https://api.rawg.io/api/games?${key}&page=1&page_size=20&search=${encodeURIComponent(
        gameName
      )}`;

      if (genres.length !== 0) {
        url += `&genres=${genres}`;
      }
      if (sort) {
        url += `&ordering=${sort}`;
      }
      if (exactSearch) {
        url += `&search_exact=${exactSearch}`;
      }
      if (dates) {
        const formattedStart = startDate?.toISOString().split("T")[0];
        const formattedEnd = endDate?.toISOString().split("T")[0];
        url += `&dates=${formattedStart},${formattedEnd}`;
      }
      console.log("url", url);
      try {
        const res = await fetch(url);
        const data = await res.json();
        console.log("results", data.results);
        setResults(data.results);
      } catch (err) {
        console.error("Error trying to fetch data:", err);
      }
    },
    [
      gameName,
      genres,
      sort,
      exactSearch,
      dates,
      endDate,
      startDate,
      navigate,
      setResults,
      key,
      page,
    ]
  );

  const AppContextValues = useMemo(
    () => ({
      results,
      setResults,
      key,
      page,
      setPage,
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
    }),
    [
      results,
      setResults,
      page,
      setPage,
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
    ]
  );
  const AuthContextValues = useMemo(() => {}, []);

  return (
    <AuthContext.Provider value={AuthContextValues}>
      <AppContext.Provider value={AppContextValues}>
        {children}
      </AppContext.Provider>
    </AuthContext.Provider>
  );
}
