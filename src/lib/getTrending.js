const rawgKey = import.meta.env.VITE_RAWG_API_KEY;

export async function getTrending(sortBy, page = 1) {
  const urlRating = `https://api.rawg.io/api/games?key=${rawgKey}&ordering=-${sortBy}&page=${page}&page_size=8`;

  try {
    const res = await fetch(urlRating);

    if (!res) throw new Error("Error fetching json data");

    const data = await res.json();
    
    return data.results;
  } catch (err) {
    console.error("Error fetching trending game:", err);
    return [];
  }
}
