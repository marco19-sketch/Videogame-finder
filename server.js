import express from "express";
import { handler as rawgHandler } from "./netlify/functions/rawg.js";
import { handler as youtubeHandler } from "./netlify/functions/youtubeNet.js";

const app = express();

app.get("/.netlify/functions/rawg", async (req, res) => {
  const result = await rawgHandler({ queryStringParameters: req.query });
  res.status(result.statusCode).send(result.body);
});

app.get("/.netlify/functions/youtubeNet", async (req, res) => {
  const result = await youtubeHandler({ queryStringParameters: req.query });
  res.status(result.statusCode).send(result.body);
});

// serve frontend build
app.use(express.static("dist"));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
