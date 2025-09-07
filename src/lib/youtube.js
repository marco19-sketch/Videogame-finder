import { fetchYouTube } from "../api/apiClient"; // per nascondere chiave api

// const youTubeKey = import.meta.env.VITE_YOUTUBE_API_KEY;

/**Fetch video ID
 * Search YouTube and return the first embeddable videoId for a query.
 * Example query: "zelda tears of the kingdom trailer"
 */
export async function findVideoIds(gameTitle, mode) {
// export async function findVideoIds(query) {
  if (!gameTitle || !gameTitle.trim()) return null;
  // if (!query || !query.trim()) return null;
 
  // const params = new URLSearchParams({
  //   key: youTubeKey,
  //   part: "snippet",
  //   q: query,
  //   type: "video",
  //   maxResults: "5",
  //   videoEmbeddable: "true", // only videos you can embed
  //   order: "relevance",
    // Optional: shrink payload (partial response)
    // fields: "items(id/videoId)"
  // });

   const data = await fetchYouTube(gameTitle, mode);
  //  const data = await fetchYouTube(query);
   console.log("query from youtube.js in lib", gameTitle, mode);
  // const res = await fetch(
  //   `https://www.googleapis.com/youtube/v3/search?${params}`
  // );
  // if (!res.ok) throw new Error(`YouTube search failed: ${res.status}`);
  // const data = await res.json();

  return data?.items?.map(item => item.id?.videoId).filter(Boolean);
}
