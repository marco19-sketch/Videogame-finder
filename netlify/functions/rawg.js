/* eslint-disable no-undef */
export async function handler(event) {
  const API_KEY = process.env.RAWG_API_KEY;
  const { endpoint, query, ...otherParams } = event.queryStringParameters || {};

  if (!endpoint) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "Missing endpoint" }),
    };
  }

  try {
    let decodedQuery = "";

    if (typeof query === "string") {
      // Handles case where query was double encoded
      decodedQuery = decodeURIComponent(decodeURIComponent(query));
    } else if (typeof query === "object" && query !== null) {
      // If query somehow is an object (rare case)
      decodedQuery = new URLSearchParams(query).toString();
    }

    // console.log("event.queryStringParameters:", event.queryStringParameters);
    // console.log("typeof query:", typeof event.queryStringParameters?.query);


    // Include other query parameters passed directly
    const searchParams = new URLSearchParams({ key: API_KEY, ...otherParams });
    // Append decodedQuery if it exists
    const finalQuery = decodedQuery
      ? `${searchParams.toString()}&${decodedQuery}`
      : searchParams.toString();

    const url = `https://api.rawg.io/api${
      endpoint.startsWith("/") ? endpoint : "/" + endpoint
    }?${finalQuery}`;

    console.log(
      "url from rawg.js:",
      url,
      "query:",
      query,
      "decodedQuery:",
      decodedQuery
    );

    const res = await fetch(url);
    const data = await res.json();

    return { statusCode: 200, body: JSON.stringify(data) };
  } catch (err) {
    return { statusCode: 500, body: JSON.stringify({ error: err.message }) };
  }
}
