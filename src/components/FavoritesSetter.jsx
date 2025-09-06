import { useEffect, useContext } from "react";
import { AppContext } from "../context/contextsCreation";

export default function FavoritesSetter({ game }) {
  const { setFavorites, favorites, isFavoritesPage } = useContext(AppContext);

  useEffect(() => {
    localStorage.setItem("savedGames", JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = game => {
    //   const toggleFavorite = selectedGame => {
    console.log("toggleFavorites fired");
    const isAlreadyFavorite = favorites?.some(
      fav => fav.id === game.id
      //   fav => fav.id === selectedGame.id
    );
    console.log("isAlreadyFavorite", isAlreadyFavorite);
    if (isAlreadyFavorite) {
      if (isFavoritesPage) {
        //flags book for removal animation
        setFavorites(prev =>
          prev.map(
            fav => (fav.id === game.id ? { ...fav, removing: true } : fav)
          )
        );
        //physical removal after delay
        const timer = setTimeout(() => {
          setFavorites(prev => prev.filter(fav => fav.id !== game.id));
          //   setFavorites(prev => prev.filter(fav => fav.id !== selectedGame.id));
        }, 300);
        return () => clearTimeout(timer);
      } else {
        //remove immediately in every other page
        setFavorites(prev => prev.filter(fav => fav.id !== game.id));
        // setFavorites(prev => prev.filter(fav => fav.id !== selectedGame.id));
      }
    } else {
      if (!game || !game.id) {
        console.warn("Tried to add invalid game:", game);
        return;
      }
      console.log('game object from favSett', game)
      setFavorites(prev => [...prev, game]);
    }
  };
  console.log("Game prop received in FavoritesSetter:", game.name);

  console.log("favorite from favorite setter", favorites);

  return (
    <>
      {/*add to my list button */}
      <button
        className="absolute top-1 right-1 z-100"
        type="button"
        onClick={e => {
          console.log("You clicked My List button");
          e.preventDefault();
          e.stopPropagation();
          if (!game) {
            console.warn("No game provided to FavoritesSetter");
            return;
          }
          toggleFavorite(game);
        }}>
        ➕
      </button>
    </>
  );
}
