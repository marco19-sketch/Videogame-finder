/**
 * fetchRAWG
 * @param {string} endpoint - RAWG endpoint, es: "/games", "/games/3498/movies"
 * @param {string} query - opzionale, stringa con parametri RAWG, es: "page=1&page_size=16"
 */

export async function fetchRAWG(endpoint, query = "") {
if (!endpoint) throw new Error("Missing RAWG endpoint");

  const url = `/.netlify/functions/rawg?endpoint=${encodeURIComponent(
    endpoint
  )}${query ? `&query=${encodeURIComponent(query)}` : ""}`;

  const res = await fetch(url);
  if (!res.ok) throw new Error("Failed to fetch RAWG");
  return res.json();
}

export async function fetchYouTube(gameTitle, mode = '') {
    if (!gameTitle) return null;

    const queryString = `${gameTitle} ${mode}`.trim(); 
  const res = await fetch(
    `/.netlify/functions/youtube?gameTitle=${encodeURIComponent(
      gameTitle
    )}&mode=${encodeURIComponent(mode)}`
  );
  console.log('query from apiClient', gameTitle, mode, queryString)
  if (!res.ok) throw new Error("Failed to fetch YouTube");
  return res.json();
}
