const youTubeKey = import.meta.env.VITE_YOUTUBE_API_KEY;

/**Fetch video ID
 * Search YouTube and return the first embeddable videoId for a query.
 * Example query: "zelda tears of the kingdom trailer"
 */
export async function findVideoIds(query) {
  if (!query || !query.trim()) return null;

  const params = new URLSearchParams({
    key: youTubeKey,
    part: "snippet",
    q: query,
    type: "video",
    maxResults: "5",
    videoEmbeddable: "true", // only videos you can embed
    order: "relevance",
    // Optional: shrink payload (partial response)
    // fields: "items(id/videoId)"
  });

  const res = await fetch(
    `https://www.googleapis.com/youtube/v3/search?${params}`
  );
  if (!res.ok) throw new Error(`YouTube search failed: ${res.status}`);
  const data = await res.json();
  console.log('you tube data items', data?.items)
  return data?.items?.map(item => item.id?.videoId).filter(Boolean);
}
