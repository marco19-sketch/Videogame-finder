import { NavLink } from 'react-router-dom';

export default function LandingPage() {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-indigo-100 to-indigo-300">
        <h1 className="text-5xl font-extrabold text-slate-800 mb-6 text-center">
          Welcome to Video Game Finder 🎮
        </h1>
        <NavLink
          to="/home"
          className="px-6 py-3 bg-indigo-600 text-white rounded-xl shadow hover:bg-indigo-700 transition">
          Start your search
        </NavLink>
      </div>
    );
    
}