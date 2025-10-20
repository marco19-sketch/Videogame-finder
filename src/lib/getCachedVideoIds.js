import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../firebase";
import { findVideoIds } from "../lib/youtube"; 

export async function getCachedVideoIds(gameId, gameTitle, mode = 'official trailer') {
  try {
    // 🔑 Use a unique doc ID combining gameId + mode
    const cacheKey = `${gameId}_${mode.toLowerCase().replace(/\s+/g, "_")}`;
    const cacheRef = doc(db, "youtubeCache", cacheKey);
    const snapshot = await getDoc(cacheRef);

    // ✅ Use cached data if it exists and is recent
    if (snapshot.exists()) {
      const data = snapshot.data();
      const cacheAge = Date.now() - new Date(data.timestamp).getTime();
      const oneWeek = 7 * 24 * 60 * 60 * 1000;

      if (cacheAge < oneWeek) {
        console.log("✅ Using cached YouTube IDs for:", gameTitle, 'mode', mode);
        return data.videoIds;
      }
    }

    // ⚡ Otherwise, fetch new ones
    console.log("⚡ Fetching new YouTube IDs for:", gameTitle, 'mode', mode);
    const videoIds = await findVideoIds(gameTitle, mode);

    if (videoIds?.length) {
      await setDoc(cacheRef, {
        videoIds,
        timestamp: new Date().toISOString(),
      });
    }

    return videoIds || [];
  } catch (err) {
    console.error("Error fetching cached YouTube IDs:", err);
    return [];
  }
}
