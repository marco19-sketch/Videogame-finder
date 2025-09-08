import { fetchYouTube } from "../api/apiClient"; // per nascondere chiave api

/**Fetch video ID
 * Search YouTube and return the first embeddable videoId for a query.
 * Example query: "zelda tears of the kingdom trailer"
 */
export async function findVideoIds(gameTitle, mode) {

  if (!gameTitle || !gameTitle.trim()) return null;


   const data = await fetchYouTube(gameTitle, mode);

  return data?.items?.map(item => item.id?.videoId).filter(Boolean);
}
