import { useEffect, useRef, useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { AppContext } from "../context/contextsCreation";
import { getTrending } from "../lib/getTrending";
import YouTubeEmbed from "../components/YouTubeEmbed";
import { findVideoIds } from "../lib/youtube";
import GhqLogo from "../ThemedComponents/GhqLogo";
import PrivacySettings from "../components/PrivacySettings";
// eslint-disable-next-line no-unused-vars
import { AnimatePresence, motion } from "framer-motion";

export default function WelcomePage() {
  const videoRef = useRef(null);
  const parallaxDivRef = useRef(null);
  const [trailer, setTrailer] = useState("");
  const [ids, setIds] = useState([]);
  const [featuredGame, setFeaturedGame] = useState(0);
  const [videoEnd, setVideoEnd] = useState(false);
  const { handleFetchTrailers } = useContext(AppContext);

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
  }, [videoEnd]);

  useEffect(() => {
    const fetchTrailer = async () => {
      if (!featuredGame || !featuredGame.id) return;

      const trailers = await handleFetchTrailers(featuredGame);
      let videoIds;
      if (trailers && trailers.length > 0) {
        const url = trailers[0].data.max || trailers[0].data["480"];
        setTrailer(url);
        setIds([]);
      } else {
        videoIds = await findVideoIds(featuredGame.name, "official trailer");
      }
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
    };
    fetchTrailer();
  }, [handleFetchTrailers, featuredGame]);

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
        <div className="absolute inset-0 z-0 rounded-2xl" ref={parallaxDivRef}>
          <AnimatePresence mode="wait" initial={false}>
            <motion.div initial={false} animate={{ opacity: 1 }}>
              <AnimatePresence mode="wait">
                {trailer ? (
                  <motion.video
                    key={trailer}
                    initial={{ scale: 0.7, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.7, opacity: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    ref={videoRef}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 -z-10 top-0 left-0 w-full h-full object-cover will-change-transform">
                    {/* className="absolute top-0 left-0 w-full h-full object-cover will-change-transform z-0"> */}
                    <source src={trailer} type="video/mp4" />
                    Your browser does not support the video tag.
                  </motion.video>
                ) : (
                  <motion.div
                    key={ids[0] || "yt"}
                    initial={{ scale: 0.7, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.7, opacity: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}>
                    <YouTubeEmbed
                      videoId={ids[0]}
                      title="YouTube video"
                      playlist={ids}
                      onVideoEnd={() => setVideoEnd(true)}
                      customOpts={{ playerVars: { start: 0, end: 30 } }}
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 z-0" />

        {/* Foreground content */}
        <div className="relative  flex flex-col items-center justify-center h-full bg-black/40">
          {/*navigation*/}
          <NavLink
            to="/recommendations-page"
            className="flex flex-col justify-center items-center hover:scale-110 transition-scale ease-in-out duration-300">
            <h1
              className="text-5xl text-cyan-400 mb-7 font-semibold text-center "
              style={{ textShadow: "2px 2px 6px cyan" }}>
              Welcome to <br />
              Game Quest Hub
            </h1>
            <GhqLogo
              className="w-48 h-30 p-5"
              style={{ borderRadius: "50%" }}
              textStyle={{ fontSize: 64, textShadow: "3px 3px 6px cyan" }}
            />
            <p
              className="text-cyan-400 text-3xl"
              style={{ textShadow: "3px 3px 6px cyan" }}>
              Enter
            </p>
          </NavLink>
          <PrivacySettings />
        </div>
      </section>
    </div>
  );
}
