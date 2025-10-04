import { useContext } from "react";
import { AppContext, AuthContext } from "../context/contextsCreation";
import { Link } from "react-router-dom";

export default function ProfilePage() {
  const { favorites } = useContext(AppContext);
  const { user } = useContext(AuthContext);

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Profile Header */}
      <div className="flex items-center gap-6 mb-8">
        <img
          src={user?.avatar || "https://via.placeholder.com/100"}
          alt="User avatar"
          className="w-24 h-24 rounded-full border-4 border-indigo-500 shadow-lg"
        />
        <div>
          <h1 className="text-2xl font-bold">{user?.name || "Guest Gamer"}</h1>
          <p className="text-gray-600">{user?.email || "Not logged in"}</p>
        </div>
      </div>

      {/* Favorites Section */}
      <h2 className="text-xl font-semibold mb-4">My Favorite Games</h2>
      {favorites.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {favorites.map(game => (
            <Link
              key={game.id}
              to={`/game/${game.id}`}
              className="block rounded-lg overflow-hidden shadow hover:shadow-lg transition">
              <img
                src={game.background_image}
                alt={game.name}
                className="w-full h-40 object-cover"
              />
              <div className="p-2 text-center text-sm font-medium">
                {game.name}
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <p className="text-gray-500">You haven’t saved any favorites yet.</p>
      )}
    </div>
  );
}
