import { fetchYouTube } from "../api/apiClient"; // per nascondere chiave api

/**Fetch video ID
 * Search YouTube and return the first embeddable videoId for a query.
 * Example query: "zelda tears of the kingdom trailer"
 */
export async function findVideoIds(gameTitle, mode) {
  if (!gameTitle || !gameTitle.trim()) return null;

  //mock ids fetch
  return [
    "iTDvYvlyPaE",
    "yWMu6JeT2g8",
    "hfJ4Km46A-0"
  ];
  //  const data = await fetchYouTube(gameTitle, mode);
  //  console.log('data from youtube findVideoIds', data);

  // return data?.items?.map(item => item.id?.videoId).filter(Boolean);
}
