import { useEffect, useRef, useContext, useState } from "react";
import { AppContext } from "../context/contextsCreation";
import { getTrending } from "../lib/getTrending";
import YouTubeEmbed from "../components/YouTubeEmbed";
import { findVideoIds } from "../lib/youtube";

export default function ParallaxVideoPage() {
  const videoRef = useRef(null);
  const parallaxDivRef = useRef(null);
  const [trailer, setTrailer] = useState("");
  const [ids, setIds] = useState([]);
  const [featuredGame, setFeaturedGame] = useState(0);
  const { handleFetchTrailers, setLandingPageCall, setTrendingGames } =
    useContext(AppContext);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY * 0.4; // adjust parallax speed
      if (parallaxDivRef.current) {
        parallaxDivRef.current.style.transform = `translateY(${offset}px)`;
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    async function fetchTrending() {
      const data = await getTrending("-added", 1);
      // const data = await getTrending("-rating", 1);

      setFeaturedGame(data[Math.floor(Math.random() * data.length)]);
    }
    fetchTrending();
  }, [setTrendingGames]);

  useEffect(() => {
    const fetchTrailer = async () => {
      if (!featuredGame || !featuredGame.id) return;

      const trailers = await handleFetchTrailers(featuredGame);

      if (trailers && trailers.length > 0) {
        const url = trailers[0].data.max || trailers[0].data["480"];
        setTrailer(url);
        setIds([]);
      } else {
        const videoIds = await findVideoIds(`${featuredGame.name}trailer`);
        if (videoIds && videoIds.length > 0) {
          setTrailer(null);
          setIds(videoIds);
        } else {
          setIds([]);
          setTrailer(
            "https://steamcdn-a.akamaihd.net/steam/apps/256693661/movie_max.mp4"
          );
          console.log("No YouTube videoIds trailer found");
        }
      }
    };
    fetchTrailer();
  }, [handleFetchTrailers, featuredGame, setLandingPageCall]);

  useEffect(() => {
    let playPromise;
    if (videoRef.current && trailer) {
      playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(err => {
          console.warn("Autoplay prevented:", err);
        });
      }
    }
  }, [trailer, featuredGame]);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Section with parallax video */}
      <section className="relative h-screen overflow-hidden">
        {/* Background video */}
        <div ref={parallaxDivRef}>
          {trailer ? (
            <video
              ref={videoRef}
              key={trailer} //this force the React to update the source after mounting
              autoPlay
              loop
              muted
              playsInline
              className="absolute top-0 left-0 w-full h-full object-cover will-change-transform">
              <source src={trailer} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : (
            <YouTubeEmbed videoId={ids[0]} title="YouTube video" />
          )}
        </div>
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Foreground content */}
        <div className="relative z-10 flex items-center justify-center h-full">
          <h1 className="text-5xl font-extrabold text-white drop-shadow-lg text-center">
            Parallax Video Background 🚀
          </h1>
        </div>
      </section>

      {/* Normal content below to test scroll */}
      <section className="bg-white text-gray-900 p-12 space-y-6">
        <h2 className="text-3xl font-bold">Scroll Section</h2>
        <p>
          This is regular content below the video. Scroll to see the parallax
          effect kick in. You can add as much content as you like here.
        </p>
        <p>
          Tailwind makes it easy to style both the video overlay and the content
          sections. You can also add more parallax sections if you want.
        </p>
        <p className="text-gray-500">Keep scrolling…</p>
      </section>
    </div>
  );
}
