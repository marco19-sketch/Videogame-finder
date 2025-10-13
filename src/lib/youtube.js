import { fetchYouTube } from "../api/apiClient"; // per nascondere chiave api

/**Fetch video ID
 * Search YouTube and return the first embeddable videoId for a query.
 * Example query: "zelda tears of the kingdom trailer"
 */
export async function findVideoIds(gameTitle, mode) {
   if (!gameTitle || !gameTitle.trim()) return null;

  try {
    const data = await fetchYouTube(gameTitle, mode);
    return (
      data?.items
        ?.filter(item => item.id?.videoId)
        .map(item => ({
          videoId: item.id.videoId,
          title: item.snippet?.title || "YouTube video",
        })) ?? []
    );
    
  } catch (err) {
    console.error("Error inside findVideo.js", err);
    return null
  }
}
