import { NavLink } from "react-router-dom";
// import { useContext, useEffect } from "react";
import { useCallback } from 'react';
import { AppContext } from "../context/contextsCreation";
import useLogOut from '../authentication/useLogOut';
// import getRandomBg from "../lib/getRandomBg";

export default function LandingPage() {
  // const { handleFetch } = useContext(AppContext);
  const logOut = useLogOut();

  // useEffect(() => {
  //   handleFetch();
    // getRandomBg(results);
  // }, [handleFetch]);

  const handleLogOut = useCallback((e) => {
    e.stopPropagation();
    logOut();
  }, [logOut])

  return (
    // <div
    //   className="min-h-screen min-w-screen bg-cover bg-center">
    //     style={{
    //       backgroundImage: randomBg
    //       ? `url(${randomBg})`
    //       : 'linear-gradient(to bottom, #e0e7ff, #c7d2fe)',
    //   }}
    // >
    <div
      className="min-h-screen min-w-screen 
          bg-gradient-to-b from-indigo-100 to-indigo-300">
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-indigo-100 to-indigo-300">
        <h1 className="text-5xl font-extrabold text-slate-800 mb-6 text-center">
          Welcome to Video Game Finder 🎮
        </h1>
        <NavLink
          to="/home"
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
        <NavLink to='/log-in-page'
        className="px-6 py-3 bg-indigo-600 text-white rounded-xl shadow hover:bg-indigo-700 transition">
          Log in
         </NavLink>
        <NavLink to='/reset-password-page'
        className="px-6 py-3 bg-indigo-600 text-white rounded-xl shadow hover:bg-indigo-700 transition">
          Forgot password
         </NavLink>
        <NavLink to='/update-password-page'
        className="px-6 py-3 bg-indigo-600 text-white rounded-xl shadow hover:bg-indigo-700 transition">
          Update password
         </NavLink>
        <button type='button' onClick={handleLogOut}
        className="px-6 py-3 bg-indigo-600 text-white rounded-xl shadow hover:bg-indigo-700 transition">
          Log out
         </button>
         
      </div>
    </div>
  );
}
