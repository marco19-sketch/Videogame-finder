export default async function getRandomBg(url) {
  try {
    const res = await fetch(url);
    if (!res) throw new Error("Invalid json for randomBg");

    const data = await res.json();
    console.log("data.results from getRandomBg", data.results);
    return data.results[Math.floor(Math.random() * data.results.length)]
      ?.background_image;
    //   return data.results;
  } catch (err) {
    console.error("Error trying to fetch randomBg", err);
    return null;
  }
}
