import { fetchYouTube } from "../api/apiClient"; // per nascondere chiave api

/**Fetch video ID
 * Search YouTube and return the first embeddable videoId for a query.
 * Example query: "zelda tears of the kingdom trailer"
 */
export async function findVideoIds(gameTitle, mode) {
  if (!gameTitle || !gameTitle.trim()) return null;

  //mock ids fetch
  return [
  "KiXFD-9j58k",
  "9Ok8bNCRj0A",
  "2MhfjBZw4ZI",
  "Xovvmew4lEQ",
  "1Q-H9BMSwTQ",
  "T9cTArd30Dw",
  "gWlOuekJY3E",
    "iTDvYvlyPaE",
    "yWMu6JeT2g8",
    "hfJ4Km46A-0",
    "yPq_NVi-TC4",
    "F3JeYDw1J0A",
    "pWdQ49JtnwU",
    "2gUtfBmw86Y",
    "QdBZY2fkU-0",
    "f3QF3F6kZ3I"
  ];

  // const data = await fetchYouTube(gameTitle, mode);
  // return data?.items?.map(item => item.id?.videoId).filter(Boolean);
}
