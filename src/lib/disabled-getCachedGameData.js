import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../firebase";
import { fetchRAWG } from "../api/apiClient"; 

export async function getCachedGameData(gameTitle, query = '') {
  try {
    // Use a normalized cache key
    const cacheKey = gameTitle.toLowerCase().replace(/\s+/g, "_");
    const cacheRef = doc(db, "gameCache", cacheKey);
    const snapshot = await getDoc(cacheRef);

    // 🕒 Use cache if it exists and is fresh (e.g. 30 days)
    if (snapshot.exists()) {
      const data = snapshot.data();
      const cacheAge = Date.now() - new Date(data.timestamp).getTime();
      const oneMonth = 30 * 24 * 60 * 60 * 1000;

      if (cacheAge < oneMonth) {
        console.log(
          "✅ Using cached RAWG data for:",
          gameTitle
        );
        return data.gameData;
      }
    }

    // ⚡ Otherwise, fetch new ones
    console.log("⚡ Fetching new RAWG data for:", gameTitle);
    const query = `page=1&page_size=1&search=${encodeURIComponent(gameTitle)}`;
    const res = await fetchRAWG('games', query);
    const gameData = res?.results?.[0];
    
    if (gameData) {
      await setDoc(cacheRef, {
        gameData,
        timestamp: new Date().toISOString(),
      });
      return gameData;
    }

    return null;
  } catch (err) {
    console.error("Error fetching cached game data:", err);
    return null;
  }
}
