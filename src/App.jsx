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
import LogInPage from './authentication/LogInPage';
import ResetPasswordPage from './authentication/ResetPasswordPage';
import ActionPage from './authentication/ActionPage';
import Footer from './components/Footer';
import ParallaxVideoPage from "./pages/ParallaxVideoPage";


function App() {


  return (
      <div className="min-h-screen w-full bg-gradient-to-br from-gray-900 via-gray-800 to-black text-gray-100"> 
      <header className="px-6 py-4 border-b border-gray-700">
        <h1 className="text-3xl font-extrabold text-cyan-400 tracking-wide">
          🎮 Game Quest Hub
        </h1>
        <NavBar />
      </header>
      <main
        className="px-6 py-8"
  
        >
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/trending-page" element={<TrendingPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/results-page" element={<ResultsPage />} />
          <Route path="/details-page/:id" element={<DetailsPage />} />
          <Route path="/favorites-page" element={<FavoritesPage />} />
          <Route path='/sign-up-page' element={<SignUpPage />} />  
          <Route path='/log-in-page' element={<LogInPage />} />
          <Route path='/reset-password-page' element={<ResetPasswordPage />} />
          <Route path='/action' element={<ActionPage />} />
          <Route path='/parallax-page' element={<ParallaxVideoPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
