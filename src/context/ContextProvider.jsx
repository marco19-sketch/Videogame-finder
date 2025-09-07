import { useMemo, useState, useCallback } from "react";
import { AppContext, AuthContext } from "./contextsCreation";
import { useNavigate, useLocation } from "react-router-dom";
const rawgKey = import.meta.env.VITE_RAWG_API_KEY;

export default function ContextProvider({ children }) {
  const [results, setResults] = useState([]);
  const [page, setPage] = useState(1);
  const [gameName, setGameName] = useState("");
  const [genres, setGenres] = useState([]);
  const [sort, setSort] = useState("");
  const [isSorting, setIsSorting] = useState(false);
  const [exactSearch, setExactSearch] = useState(false);
  const [dates, setDates] = useState(false);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const navigate = useNavigate();
  const [showTrailer, setShowTrailer] = useState(false);
  const [trendingGames, setTrendingGames] = useState([]);
  const location = useLocation();
  const [randomBg, setRandomBg] = useState(null);
const [favorites, setFavorites] = useState(() => {
  const saved = localStorage.getItem("savedGames");
  try {
    const parsed = saved ? JSON.parse(saved) : [];
    // filter out any null or invalid entries
    return Array.isArray(parsed) ? parsed.filter(f => f && f.id) : [];
  } catch {
    return [];
  }
});

  
  const isFavoritesPage = location.pathname === '/favorites-page';

  const handleFetch = useCallback(
    async (pageToFetch = page) => {
      if (location.pathname === '/home') {
      navigate("/results-page");
      }
      let url = `https://api.rawg.io/api/games?key=${rawgKey}&page=${pageToFetch}&page_size=16&search=${encodeURIComponent(
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
      
      try {
        const res = await fetch(url);
        const data = await res.json();
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
      page,
      location.pathname
    ]
  );

  const AppContextValues = useMemo(
    () => ({
      results,
      setResults,
      rawgKey,
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
      showTrailer,
      setShowTrailer,
      trendingGames,
      setTrendingGames,
      favorites,
      setFavorites,
      isFavoritesPage,
      randomBg,
      setRandomBg,
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
      showTrailer,
      setShowTrailer,
      trendingGames,
      setTrendingGames,
      favorites,
      setFavorites,
      isFavoritesPage,
      randomBg,
      setRandomBg,
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
