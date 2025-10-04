import Home from "./pages/Home";
import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
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
import WelcomePage from "./pages/WelcomePage";
import RecommendationsPage from "./pages/RecommendationsPage";
import ProfilePage from './pages/ProfilePage';
import ProtectedRoute from "./authentication/ProtectedRoute";
import UsernameForm from './authentication/UsernameForm';
import ChooseAvatar from './pages/ChooseAvatar';
// eslint-disable-next-line no-unused-vars
import { AnimatePresence, motion } from "framer-motion";

function App() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <div className="text-cyan-300 min-h-screen w-full bg-gradient-to-br from-gray-900 via-gray-800 to-black">
        <header className="px-6 py-4 border-b border-gray-700">
          <ThemedNavBar />
          {/* <NavBar /> */}
        </header>
        <motion.div
          key={location.pathname} // 👈 important for exit/enter to trigger
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: .5 }}
          >
          <main>
            {/* <main className="px-6 py-8"> */}
            <Routes location={location}>
              <Route path="/" element={<WelcomePage />} />
              <Route path="/home-page" element={<Home />} />
              <Route path="/trending-page" element={<TrendingPage />} />
              <Route path="/results-page" element={<ResultsPage />} />
              <Route path="/details-page/:id" element={<DetailsPage />} />
              <Route path='/choose-avatar' element={<ChooseAvatar />} />
              <Route
                path="/favorites-page"
                element={
                  <ProtectedRoute>
                    <FavoritesPage />
                  </ProtectedRoute>
                }
              />
              <Route path="/sign-up-page" element={<SignUpPage />} />
              <Route path="/log-in-page" element={<LogInPage />} />
              <Route path='/username-page' element={<UsernameForm /> } />
              <Route path='/profile-page' element={<ProfilePage />} />
              <Route
                path="/reset-password-page"
                element={<ResetPasswordPage />}
              />
              <Route path="/action" element={<ActionPage />} />
              <Route
                path="/recommendations-page"
                element={<RecommendationsPage />}
              />
              
            </Routes>
          </main>
        </motion.div>
        <ThemedFooter />
      </div>
    </AnimatePresence>
  );

  // 👇 Define it here in the same file
  // function PageWrapper({ children }) {
  //   return (
  //     <motion.div
  //       initial={{ opacity: 0, y: 20 }}
  //       animate={{ opacity: 1, y: 0 }}
  //       exit={{ opacity: 0, y: -20 }}
  //       transition={{ duration: 0.5 }}
  //       className="h-full w-full">
  //       {children}
  //     </motion.div>
  //   );
  // }
}

export default App;
