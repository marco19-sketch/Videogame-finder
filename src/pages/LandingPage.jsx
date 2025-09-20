import { NavLink } from "react-router-dom";
import { useCallback } from "react";


import useLogOut from "../authentication/useLogOut";

export default function LandingPage() {
  const logOut = useLogOut();

  const handleLogOut = useCallback(
    e => {
      e.stopPropagation();
      logOut();
    },
    [logOut]
  );

  return (
    <div
      className="min-h-screen min-w-screen 
          bg-gradient-to-b from-indigo-100 to-indigo-300">
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-indigo-100 to-indigo-300">
        <h1 className="text-5xl font-extrabold text-slate-800 mb-6 text-center">
          Welcome to Video Game Finder 🎮
        </h1>
        <NavLink
          to="/home-page"
          className="px-6 py-3 bg-indigo-600 text-white rounded-xl shadow hover:bg-indigo-700 transition">
          Start your search
        </NavLink>
        <NavLink
          to="/trending-page"
          className="px-6 py-3 bg-indigo-600 text-white rounded-xl shadow hover:bg-indigo-700 transition">
          See what's trending now
        </NavLink>
        <NavLink
          to="/favorites-page"
          className="px-6 py-3 bg-indigo-600 text-white rounded-xl shadow hover:bg-indigo-700 transition">
          Go to My List
        </NavLink>
        <NavLink
          to="/sign-up-page"
          className="px-6 py-3 bg-indigo-600 text-white rounded-xl shadow hover:bg-indigo-700 transition">
          Sign Up
        </NavLink>
        <NavLink
          to="/log-in-page"
          className="px-6 py-3 bg-indigo-600 text-white rounded-xl shadow hover:bg-indigo-700 transition">
          Log in
        </NavLink>
        <NavLink
          to="/reset-password-page"
          className="px-6 py-3 bg-indigo-600 text-white rounded-xl shadow hover:bg-indigo-700 transition">
          Forgot password
        </NavLink>
        <NavLink
          to="/update-password-page"
          className="px-6 py-3 bg-indigo-600 text-white rounded-xl shadow hover:bg-indigo-700 transition">
          Update password
        </NavLink>
        <NavLink
          to="/parallax-page"
          className="px-6 py-3 bg-indigo-600 text-white rounded-xl shadow hover:bg-indigo-700 transition">
          Parallax Page
        </NavLink>
        <NavLink
          to="/recommendations-page"
          className="px-6 py-3 bg-indigo-600 text-white rounded-xl shadow hover:bg-indigo-700 transition">
          Recommendations
        </NavLink>
        <NavLink
          to="/fullscreen-page"
          className="px-6 py-3 bg-indigo-600 text-white rounded-xl shadow hover:bg-indigo-700 transition">
          Fullscreen
        </NavLink>
        <button
          type="button"
          onClick={handleLogOut}
          className="px-6 py-3 bg-indigo-600 text-white rounded-xl shadow hover:bg-indigo-700 transition">
          Log out
        </button>

        <NavLink
          to="/test-page"
          className="px-6 py-3 bg-indigo-600 text-white rounded-xl shadow hover:bg-indigo-700 transition">
          TestPage with navigation bar comp.
        </NavLink>
      </div>
    </div>
  );
}
