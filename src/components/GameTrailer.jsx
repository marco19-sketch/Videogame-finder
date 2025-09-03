import { useEffect, useState, useContext } from "react";
import { findVideoIds } from "../lib/youtube";
import YouTubeEmbed from "./YouTubeEmbed";
import { AppContext } from "../context/contextsCreation";

export default function GameTrailer({ gameTitle }) {
  const [videoIds, setVideoIds] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [status, setStatus] = useState("idle"); // idle | loading | empty | error
  const { showTrailer } = useContext(AppContext);

  useEffect(() => {
    if (!gameTitle || showTrailer) return;

    const controller = new AbortController();
    const timer = setTimeout(async () => {
      try {
        setStatus("loading");
        // Nudge relevance by appending "trailer"

        const ids = await findVideoIds(gameTitle + "trailer");

        setVideoIds(ids);
        setCurrentIndex(0);

        setStatus("idle");

        setStatus(ids.length ? "idle" : "empty");
      } catch {
        setStatus("error");
      }
    }, 300); // debounce

    return () => {
      controller.abort();
      clearTimeout(timer);
    };
  }, [gameTitle, showTrailer]);
  console.log("game title and showTrailer", gameTitle, showTrailer);
  if (status === "loading") return <p>Searching YouTube…</p>;
  if (status === "error") return <p>Couldn’t load a video right now.</p>;
  if (status === "empty") return <p>No embeddable results found.</p>;

  //   return <YouTubeEmbed videoId={videoId} title={`${gameTitle} trailer`} />;
  const currentVideoId = videoIds[currentIndex];

  return (
    <div>
      <YouTubeEmbed videoId={currentVideoId} title={`${gameTitle} trailer`} />

      {videoIds.length > 1 && (
        <div>
          <button
            onClick={() =>
              setCurrentIndex(i => (i > 0 ? i - 1 : videoIds.length - 1))
            }>
            Previous
          </button>
          <button
            onClick={() =>
              setCurrentIndex(i => (i < videoIds.length - 1 ? i + 1 : 0))
            }>
            Next
          </button>
        </div>
      )}
    </div>
  );
}
