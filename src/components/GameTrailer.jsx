import { useEffect, useState } from "react";
import { findVideoIds } from "../lib/youtube";
import YouTubeEmbed from "./YouTubeEmbed";
import { AppContext } from "../context/contextsCreation";

export default function GameTrailer({ gameTitle, mode }) {
  const [videoIds, setVideoIds] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [status, setStatus] = useState("idle"); // idle | loading | empty | error
  // const { gamePlay } = useContext(AppContext);
  // const { showTrailer, gamePlay } = useContext(AppContext);
  // console.log("GameTrailer gameplay true?", gamePlay);

  useEffect(() => {
    // if (!gameTitle || showTrailer) return;
    if (!gameTitle) return;

    const controller = new AbortController();
    const timer = setTimeout(async () => {
      try {
        setStatus("loading");
        // Nudge relevance by appending "trailer"

        const ids = await findVideoIds(gameTitle, mode);
        // const ids = await findVideoIds(gameTitle + "trailer");
        // console.log("gameplay true?", gamePlay);
        console.log("ids from gameTrailer", ids);
        console.log("Effect triggered, gameTitle:", gameTitle, mode);
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
  }, [gameTitle, mode]);
  // }, [gameTitle, showTrailer, gamePlay]);

  if (status === "loading")
    return (
      <p className="text-cyan-400 animate-pulse text-center mt-4">
        🔎 Searching YouTube…
      </p>
    );
  if (status === "error")
    return (
      <p className="text-red-500 text-center mt-4">
        ❌ Couldn’t load a video right now.
      </p>
    );
  if (status === "empty")
    return (
      <p className="text-gray-400 text-center mt-4">
        ⚠️ No embeddable results found.
      </p>
    );

  const currentVideoId = videoIds[currentIndex];

  return (
    <div className=" bg-gray-900 border border-cyan-500/40 rounded-2xl shadow-xl p-4 max-w-3xl mx-auto">
      <h2 className="text-cyan-400 text-lg font-semibold mb-3 text-center">
        🎬 {gameTitle} Trailer
      </h2>

      <div className="aspect-video w-full rounded-xl overflow-hidden shadow-lg">
        <YouTubeEmbed videoId={currentVideoId} title={`${gameTitle} trailer`} />
        {/* <YouTubeEmbed videoId={videoId} title={`${gameTitle} gameplay`} />;*/}
      </div>

      {videoIds.length > 1 && (
        <div className="flex justify-between mt-4">
          <button
            onClick={() =>
              setCurrentIndex(i => (i > 0 ? i - 1 : videoIds.length - 1))
            }
            className="px-4 py-2 rounded-xl bg-gray-800 text-cyan-400 hover:bg-cyan-600 hover:text-white shadow-md transition">
            ⬅️ Previous
          </button>
          <button
            onClick={() =>
              setCurrentIndex(i => (i < videoIds.length - 1 ? i + 1 : 0))
            }
            className="px-4 py-2 rounded-xl bg-gray-800 text-cyan-400 hover:bg-cyan-600 hover:text-white shadow-md transition">
            Next ➡️
          </button>
        </div>
      )}
    </div>
  );
}
