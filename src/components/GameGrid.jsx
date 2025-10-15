import FavoritesSetter from './FavoritesSetter';
import { Link } from 'react-router-dom';
import RatingStars from './RatingStars';
import useSelectSound from '../customHooks/useSelectSound';

export default function GameGrid({results}) {
  const playSelect = useSelectSound();
  
    return (
    <ul className="relative  grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-full max-w-7xl">
      {results.map(game => (
        <li
          key={game.id}
          className="relative z-10 group rounded-2xl overflow-hidden shadow-lg hover:shadow-cyan-500/40 
                transition duration-300 transform hover:-translate-y-1 hover:scale-105"
          onClick={playSelect}>
          <Link to={`/details-page/${game.id}`} className="block">
            {/* Immagine con overlay */}
            <div>
              {/* <div className="relative"> */}
              <img
                className="w-full h-52 object-cover"
                src={
                  Array.isArray(game?.short_screenshots)
                    ? game?.short_screenshots[0]?.image
                    : undefined
                }
                alt={`screenshot of ${game.name}`}
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-black/70
                     via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition duration-300"
              />
              <FavoritesSetter game={game} />
            </div>

            {/* Info card */}
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
              <h2 className="text-lg font-bold text-cyan-400 group-hover:text-white transition truncate">
                {game.name}
              </h2>

              <p className="text-sm text-gray-300">
                Released:{" "}
                <span className="font-medium text-white">
                  {game.released
                    ? new Date(game.released).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })
                    : "N/A"}
                </span>
              </p>

              <div className="text-sm text-gray-300 flex items-center gap-1">
                Rating:{" "}
                {/* <span className="font-medium text-yellow-400 flex items-center gap-1">
                        {game.rating || "N/A-"}
                      </span> */}
                <RatingStars rating={game.rating} className="text-sm" />
              </div>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}
