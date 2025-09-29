import { useEffect, useContext } from "react";
import { AppContext } from "../context/contextsCreation";
import  useSound  from '../customHooks/useSound';
import addSound from '../assets/sounds/add-to-favorite.mp3'
import removeSound from "../assets/sounds/whoosh_zapsplat.mp3";


export default function FavoritesSetter({ game, className }) {
  const { setFavorites, favorites, isFavoritesPage } = useContext(AppContext);
  const isAlreadyFavorite = favorites?.some(fav => fav.id === game.id);
  const [playAdd, AddAudio] = useSound(addSound)
  const [playRemove, RemoveAudio] = useSound(removeSound)

  console.log('game', game)

  useEffect(() => {
    localStorage.setItem("savedGames", JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = game => {
    if (isAlreadyFavorite) {
      if (isFavoritesPage) {
        //flags book for removal animation
        setFavorites(prev =>
          prev.map(fav =>
            fav.id === game.id ? { ...fav, removing: true } : fav
          )
        );
        playRemove();
        //physical removal after delay
        const timer = setTimeout(() => {
          setFavorites(prev => prev.filter(fav => fav.id !== game.id));
          
          
        }, 300);
        return () => clearTimeout(timer);
      } else {
        //remove immediately in every other page
        setFavorites(prev => prev.filter(fav => fav.id !== game.id));
        playRemove();
      
      }
    } else {
      if (!game || !game.id) {
        console.warn("Tried to add invalid game:", game);
        return;
      }
      setFavorites(prev => [...prev, game]);
      playAdd();
    }
  };

  return (
    <>
      {/*add to my list button */}
      <button
       title='add to My List'
        className={`absolute top-2.5 right-2.5 z-20  bg-gradient-to-b from-cyan-500 to-blue-600 rounded-sm
         hover:from-cyan-400 hover:to-500 hover:scale-110 transition-all duration-300 cursor-pointer ${className}`}
        type="button"
        onClick={e => {
          e.preventDefault();
          e.stopPropagation();
          if (!game) {
            console.warn("No game provided to FavoritesSetter");
            return;
          }
          toggleFavorite(game);
        }}>
        {isAlreadyFavorite ? "✔️" : "➕"}{" "}
      </button>
      {AddAudio}
      {RemoveAudio}
    </>
  );
}
