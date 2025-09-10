import { NavLink } from "react-router-dom";
import clsx from 'clsx';

export default function NavBar() {
  return (
    <nav className="text-3xl font-bold text-cyan-400 mb-3 mt-3 border-1 p-4 rounded-2xl drop-shadow-lg flex flex-4 justify-between w-full">
      <NavLink
        to="/home"
        className={({ isActive }) =>
          clsx(
            "hover:text-cyan-300 transition  w-60 text-center",
            isActive ? "underline decoration-4 decoration-cyan-400" : ""
          )
        }>
        Home
      </NavLink>
      <NavLink
        to="/favorites-page"
        className={({ isActive }) =>
          clsx(
            "hover:text-cyan-300 transition  w-60 text-center",
            isActive ? "underline decoration-4 decoration-cyan-400" : ""
          )
        }>
        My List
      </NavLink>
      <NavLink
        to="/trending-page"
        className={({ isActive }) =>
          clsx(
            "hover:text-cyan-300 transition  w-60 text-center",
            isActive ? "underline decoration-4 decoration-cyan-400" : ""
          )
        }>
        Best Games
      </NavLink>
      <NavLink to='/'
       className={({ isActive }) =>
          clsx(
            "hover:text-cyan-300 transition  w-60 text-center",
            isActive ? "underline decoration-4 decoration-cyan-400" : ""
          )
        }>Landing</NavLink>
        <NavLink to='/log-in-page'
        className={({ isActive }) =>
          clsx(
            "hover:text-cyan-300 transition  w-60 text-center",
            isActive ? "underline decoration-4 decoration-cyan-400" : ""
          )
        }>Log in</NavLink>
    </nav>
  );
}
