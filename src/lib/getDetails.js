//  const rawgKey = import.meta.env.VITE_RAWG_API_KEY;
import { fetchRAWG } from "../api/apiClient";

export async function getDetails(gameId) {
  if (!gameId) throw new Error("Invalid or missing game ID");
  try {
    const data = await fetchRAWG(`games/${gameId}`, "");
    console.log('data', data)
    return data;
  } catch (err) {
    console.error(
      "Error trying to fetch game details from helper function:",
      err
    );
    throw err;
  }
}
