export async function handler(event) {
  const API_KEY = process.env.YOUTUBE_API_KEY;
  const { gameTitle = "", mode = "" } = event.queryStringParameters;
  //   const { query = "" } = event.queryStringParameters;

  if (!gameTitle)
    //   if (!query)
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "Missing query" }),
    };

  try {
    const params = new URLSearchParams({
      key: API_KEY,
      part: "snippet",
      q: `${gameTitle} ${mode}`, // << combine them here
      type: "video",
      maxResults: "4", // to avoid finishing daily quota
      videoEmbeddable: "true",
      order: "relevance",
    });
    console.log('params from youtubeNet', params)
    const res = await fetch(
      `https://www.googleapis.com/youtube/v3/search?${params}`
    );
    const data = await res.json();
    
    return { statusCode: 200, body: JSON.stringify(data) };
  } catch (err) {
    return { statusCode: 500, body: JSON.stringify({ error: err.message }) };
  }
}
