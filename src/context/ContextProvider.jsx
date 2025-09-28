import { useMemo, useState, useCallback, useEffect } from "react";
import { AppContext, AuthContext } from "./contextsCreation";
import { auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate, useLocation } from "react-router-dom";
import { fetchRAWG } from "../api/apiClient";

export default function ContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
  const [trailers, setTrailers] = useState([]);
  const [indexA, setIndexA] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [gamePlay, setGamePlay] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [mode, setMode] = useState("");
  const [current, setCurrent] = useState(0);
  const [slides, setSlides] = useState([]);
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

  //Getting trailers using gameId
  const handleFetchTrailers = useCallback(
    async game => {
      if (!game || !game.id) return null;

      const controller = new AbortController();
      const timer = setTimeout(async () => {
        try {
          setLoading(true);

          const data = await fetchRAWG(`/games/${game.id}/movies`, {
            signal: controller.signal,
          });
          setTrailers(data.results);

          setShowTrailer(Boolean(data.results?.length));

          setShowModal(true);
          // setTimeout(() => {
          setLoading(false);
          // }, 300);
          return data.results;
        } catch (err) {
          // console.error("Error trying to fetch game trailers:", err);
          if (err.name === "AbortError") return; // fetch was cancelled
          console.error("Error trying to fetch game trailers:", err);
        } finally {
          setLoading(false);
        }
      }, 300); //debounce

      return () => {
        controller.abort();
        clearTimeout(timer);
      };
    },
    [setShowTrailer, setLoading, setShowModal, setTrailers]
  );
  //authentication context
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, u => {
      setUser(u);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const isFavoritesPage = location.pathname === "/favorites-page";

  const handleFetch = useCallback(
    async (pageToFetch = page) => {
      setLoading(true);
      if (location.pathname === "/home-page") {
        navigate("/results-page");
      }

      // let url = `https://api.rawg.io/api/games?key=${rawgKey}&page=${pageToFetch}&page_size=16&search=${encodeURIComponent(
      //   gameName
      // )}`;
      // Creiamo i parametri per RAWG come query string
      let query = `page=${pageToFetch}&page_size=8&search=${encodeURIComponent(
        gameName
      )}`;

      if (genres.length !== 0) {
        query += `&genres=${genres}`;
      }
      if (sort) {
        query += `&ordering=${sort}`;
      }
      if (exactSearch) {
        query += `&search_exact=${exactSearch}`;
      }
      if (dates) {
        const formattedStart = startDate?.toISOString().split("T")[0];
        const formattedEnd = endDate?.toISOString().split("T")[0];
        query += `&dates=${formattedStart},${formattedEnd}`;
      }

      try {
        // const res = await fetch(url);
        // const data = await res.json();
        setLoading(true);
        const data = await fetchRAWG("games", query);

        setResults(data.results);
      } catch (err) {
        console.error("Error trying to fetch data:", err);
      } finally {
        setLoading(false);
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
      location.pathname,
    ]
  );

  const AppContextValues = useMemo(
    () => ({
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
      loading,
      setLoading,
      trailers,
      indexA,
      setIndexA,
      showModal,
      setShowModal,
      gamePlay,
      setGamePlay,
      handleFetchTrailers,
      showPassword,
      setShowPassword,
      mode,
      setMode,
      current,
      setCurrent,
      slides,
      setSlides
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
      loading,
      setLoading,
      trailers,
      indexA,
      setIndexA,
      showModal,
      setShowModal,
      gamePlay,
      setGamePlay,
      handleFetchTrailers,
      showPassword,
      setShowPassword,
      mode,
      setMode,
      current,
      setCurrent,
      slides,
      setSlides
    ]
  );

  const AuthContextValues = useMemo(
    () => ({
      user,
      setUser,
      loading,
      setLoading,
      email,
      setEmail,
      password,
      setPassword,
    }),
    [user, setUser, loading, setLoading, email, setEmail, password, setPassword]
  );

  return (
    <AuthContext.Provider value={AuthContextValues}>
      <AppContext.Provider value={AppContextValues}>
        {children}
      </AppContext.Provider>
    </AuthContext.Provider>
  );
}
