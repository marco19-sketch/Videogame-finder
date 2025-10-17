import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../firebase";
import { fetchRAWG } from "../api/apiClient"; 

export async function getCachedGameData(apiEndpoint, gameTitle, query) {
  try {
    const safeTitle = (gameTitle || '').toLowerCase().replace((/\s+/g, '_'));
    // Use a normalized cache key
    // Include query in the cache key for uniqueness
    const cacheKey = `${apiEndpoint
      .toLowerCase()
      .replace(/\s+/g, "_")
      .replace(/\//g, "_")}_${safeTitle
      }_${encodeURIComponent(query)}`;

    const cacheRef = doc(db, "gameCache", cacheKey);
    const snapshot = await getDoc(cacheRef);

    // 🕒 Use cache if it exists and is fresh (e.g. 30 days)
    if (snapshot.exists()) {
      const data = snapshot.data();
      const cacheAge = Date.now() - new Date(data.timestamp).getTime();
      const oneMonth = 30 * 24 * 60 * 60 * 1000;

      if (cacheAge < oneMonth) {
        console.log("✅ Using cached RAWG data for:", gameTitle);
        return data.gameData;
      }
    }

    // ⚡ Otherwise, fetch new ones
    console.log("⚡ Fetching new RAWG data for:", gameTitle);
   

    // ✅ Only define a fallback query if none was passed
    // 🧠 Rebuild correct API endpoint (restore slashes for RAWG)
   
    apiEndpoint = apiEndpoint.trim().replace(/_/g, "/");
    const finalQuery =
      query ||
      (apiEndpoint === "/games"
        ? `page=1&page_size=1&search=${encodeURIComponent(gameTitle)}`
        : "");

    console.log(
      `⚡ Fetching RAWG data from: ${apiEndpoint} with query:`,
      finalQuery
    );
      const res = await fetchRAWG(apiEndpoint, finalQuery, '');
          
    // 🎬 If endpoint includes "/movies", RAWG returns { results: [...] }
    const gameData = res?.results ?? res;
   

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
