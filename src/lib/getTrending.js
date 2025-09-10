import { fetchRAWG } from "../api/apiClient";

export async function getTrending(sortBy, page = 1) {
  let query = `&ordering=${sortBy}&page=${page}&page_size=16`;

  try {
    const data = await fetchRAWG("games", query);

    return data.results;
  } catch (err) {
    console.error("Error fetching trending game:", err);
    return [];
  }
}
