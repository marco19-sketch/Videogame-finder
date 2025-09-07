import Home from "./pages/Home";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import ResultsPage from "./pages/ResultsPage";
import DetailsPage from "./pages/DetailsPage";
import TrendingPage from "./pages/TrendingPage";
import FavoritesPage from "./pages/FavoritesPage";
import NavBar from "./components/NavBar";
import SignUpPage from './authentication/SignUpPage';
// import { useEffect, useContext } from "react";
// import { AppContext } from './context/contextsCreation';
// import getRandomBg from "./lib/getRandomBg";
// const rawgKey = import.meta.env.VITE_RAWG_API_KEY;

function App() {
  // const { randomBg, setRandomBg } = useContext(AppContext);
  // const location = useLocation();
  // const url = `https://api.rawg.io/api/games?key=${rawgKey}&page=1&page_size=40&ordering=-rating`;


  // useEffect(() => {
  //   const fetchBg = async () => {
  //     const bg = await getRandomBg(url);
  //     setRandomBg(bg);
  //   };
  //   fetchBg();
  // }, [location, url, setRandomBg]);

  return (
    // <div
    //   className="min-h-screen w-full text-gray-100 bg-cover bg-center"
    //   style={{
    //     backgroundImage: randomBg
    //       ? `url('${randomBg}')`
    //       : "bg-gradient-to-br from-gray-900 via-gray-800 to-black text-gray-100",
    //   }}
    //   >
      <div className="min-h-screen w-full bg-gradient-to-br from-gray-900 via-gray-800 to-black text-gray-100"> 
      <header className="px-6 py-4 border-b border-gray-700">
        <h1 className="text-3xl font-extrabold text-cyan-400 tracking-wide">
          🎮 Videogame Finder
        </h1>
        <NavBar />
      </header>
      <main
        className="px-6 py-8"
        // style={{
        //   backgroundImage: randomBg
        //     ? `url('${randomBg}')`
        //     : "bg-gradient-to-br from-gray-900 via-gray-800 to-black text-gray-100",
        // }}
        >
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/trending-page" element={<TrendingPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/results-page" element={<ResultsPage />} />
          <Route path="/details-page/:id" element={<DetailsPage />} />
          <Route path="/favorites-page" element={<FavoritesPage />} />
          <Route path='/sign-up-page' element={<SignUpPage />} />  
        </Routes>
      </main>
    </div>
  );
}

export default App;
