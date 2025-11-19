import { doc, getDoc, setDoc } from 'firebase/firestore';
import { db } from '../firebase';
import { fetchRAWG } from "../api/apiClient";

export async function getDetails(gameId) {
  if (!gameId) throw new Error("Invalid or missing game ID");
  try {
    const cachekey = `gameDetails${gameId}`;

    const cacheRef = doc(db, "gameDetailsCache", cachekey);
    const snapshot = await getDoc(cacheRef);

    // 🕒 Use cache if it exists and is fresh (e.g. 30 days)
    if (snapshot.exists()) {
      const data = snapshot.data();
      const cacheAge = Date.now() - new Date(data.timestamp).getTime();
      const oneMonth = 30 * 24 * 60 * 60 * 1000;

      if (cacheAge < oneMonth) {
        console.log("✅ Using cached RAWG data for gameId:", gameId);
        return data.gameData;
      }
    }

    // ⚡ Otherwise, fetch new ones
    console.log("⚡ Fetching new RAWG data for gameId:", gameId);
    // return data;

    const fetchedData = await fetchRAWG(`games/${gameId}`, "");

    const gameData = fetchedData;

    if (!gameData) return null;

    if (gameData) {
        console.log('Uploading to Firestore', {
            gameData,
            timestamp: new Date().toISOString()
        });

        await setDoc(cacheRef, {
            gameData,
            timestamp: new Date().toISOString()
        });
    }

    return gameData;
  } catch (err) {
    console.error(
      "Error trying to fetch game details from helper function:",
      err
    );
    return null;
  }
}
