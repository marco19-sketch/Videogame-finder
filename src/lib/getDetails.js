 const rawgKey = import.meta.env.VITE_RAWG_API_KEY;
 
 export async function getDetails(gameId) {
    if (!gameId) throw new Error('Invalid or missing game ID')
    try {
        const res = await fetch(`https://api.rawg.io/api/games/${gameId}?key=${rawgKey}`);
        if (!res) throw new Error('Failed fetching json');

        const data = await res.json();
        return data
    } catch(err) {
        console.error('Error trying to fetch game details from helper function:', err)
    }
 }