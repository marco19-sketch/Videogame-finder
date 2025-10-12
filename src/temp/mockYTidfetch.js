//Created this file to mock video ids fetch  to test the WelcomePage animation without wasting the youtube.v3 API quota.
// to use it just import it instead of the regular file (/lib/youtube.js)

import { fetchYouTube } from "../api/apiClient"; // this file calls a serverless netlify function that allows to hide the youtube.v3 API key in build

/**Fetch video ID
 * Search YouTube and return the first embeddable videoId for a query.
 * Example query: "zelda tears of the kingdom trailer"
 */
export async function findVideoIds(gameTitle) {
  if (!gameTitle || !gameTitle.trim()) return null;

  
  const mockIds = [
    "Nr928g2uHA4",
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
    "f3QF3F6kZ3I",
    "KiXFD-9j58k",
    "9Ok8bNCRj0A",
    "jeYym1U226M",
    "xk69qfTRIgY",
    "tYNhs0roxT0",
  ];

  const mockId = mockIds[Math.floor(Math.random() * mockIds.length)];
  console.log('mockId', mockId)

  return [
    // { videoId: "ZbPxNGh7dto", title: "L.A. Noire 4K Trailer" },
    { videoId:  mockId, title: "L.A. Noire 4K Trailer" },
  ];
}
