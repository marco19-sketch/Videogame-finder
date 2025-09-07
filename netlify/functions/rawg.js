export async function handler(event) {
  const API_KEY = process.env.RAWG_API_KEY;
  const { endpoint = "", query = "" } = event.queryStringParameters || {};

  if (!endpoint)
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "Missing endpoint" }),
    };

  try {
    // const url = `https://api.rawg.io/api/${endpoint}?key=${API_KEY}&${
    //   query ? `${query}` : ""
    // }`;
     const url = `https://api.rawg.io/api${
       endpoint.startsWith("/") ? endpoint : "/" + endpoint
     }?key=${process.env.RAWG_API_KEY}${query ? `&${query}` : ""}`;

    const res = await fetch(url);
    const data = await res.json();

    return { statusCode: 200, body: JSON.stringify(data) };
  } catch (err) {
    return { statusCode: 500, body: JSON.stringify({ error: err.message }) };
  }
}
