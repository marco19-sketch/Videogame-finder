import Home from "./pages/Home";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import ResultsPage from "./pages/ResultsPage";
import DetailsPage from "./pages/DetailsPage";

function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="container mx-auto px-4 py-4">
        <h1 className="text-2xl font-extrabold">Videogame Finder</h1>
      </header>

      <main className="container mx-auto px-4 pb-12">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/results-page" element={<ResultsPage />} />
          <Route path="/details-page/:id" element={<DetailsPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
