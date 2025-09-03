import Home from "./pages/Home";
// import ContextProvider from "./context/TempContextProvider";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import ResultsPage from './pages/ResultsPage';
import DetailsPage from './pages/DetailsPage';

function App() {
  return (
    
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route path='/results-page' element={<ResultsPage />} />
        <Route path='/details-page/:id' element={<DetailsPage />} />
      </Routes>
    
  );
}

export default App;
