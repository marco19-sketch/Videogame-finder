import Home from "./pages/Home";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import ResultsPage from "./pages/ResultsPage";
import DetailsPage from "./pages/DetailsPage";
import TrendingPage from "./pages/TrendingPage";
import FavoritesPage from "./pages/FavoritesPage";
import ThemedNavBar from "./ThemedComponents/ThemedNavBar";
// import NavBar from "./components/NavBar";
import SignUpPage from "./authentication/SignUpPage";
import LogInPage from "./authentication/LogInPage";
import ResetPasswordPage from "./authentication/ResetPasswordPage";
import ActionPage from "./authentication/ActionPage";
import ThemedFooter from "./ThemedComponents/ThemedFooter";
import ParallaxVideoPage from "./pages/ParallaxVideoPage";
import RecommendationsPage from "./pages/RecommendationsPage";
import TestPage from "./pages/TestPage";

function App() {
  // const location = useLocation();

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-gray-900 via-gray-800 to-black text-gray-100">
      {/* {location.pathname !== "/parallax-page" && (    
      )} */}
      <header className="px-6 py-4 border-b border-gray-700">
        <ThemedNavBar />
        {/* <NavBar /> */}
      </header>
      <main>
        {/* <main className="px-6 py-8"> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/trending-page" element={<TrendingPage />} />
          <Route path="/results-page" element={<ResultsPage />} />
          <Route path="/details-page/:id" element={<DetailsPage />} />
          <Route path="/favorites-page" element={<FavoritesPage />} />
          <Route path="/sign-up-page" element={<SignUpPage />} />
          <Route path="/log-in-page" element={<LogInPage />} />
          <Route path="/reset-password-page" element={<ResetPasswordPage />} />
          <Route path="/action" element={<ActionPage />} />
          <Route path="/parallax-page" element={<ParallaxVideoPage />} />
          <Route
            path="/recommendations-page"
            element={<RecommendationsPage />}
          />
          <Route path="/test-page" element={<TestPage />} />
        </Routes>
      </main>
      <ThemedFooter />
    </div>
  );
}

export default App;
