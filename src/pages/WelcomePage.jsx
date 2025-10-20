import { useEffect, useRef, useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { AppContext } from "../context/contextsCreation";
import YouTubeEmbed from "../components/YouTubeEmbed";
import { getCachedVideoIds } from "../lib/getCachedVideoIds";
import { getCachedGameData } from "../lib/getCachedGameData";


import GhqLogo from "../ThemedComponents/GhqLogo";
import PrivacySettings from "../components/PrivacySettings";
// eslint-disable-next-line no-unused-vars
import { AnimatePresence, motion } from "framer-motion";
import useEntrySound from "../customHooks/useEntrySound";
import { scrollTo } from "../lib/scrollTo";

export default function WelcomePage() {
  const videoRef = useRef(null);
  const parallaxDivRef = useRef(null);
  const [trailer, setTrailer] = useState("");
  const [ids, setIds] = useState([]);
  const [featuredGame, setFeaturedGame] = useState(0);
  const [videoEnd, setVideoEnd] = useState(false);
  const { handleFetchTrailers, setUSE_MOCK } = useContext(AppContext);
  const playEntry = useEntrySound();

  useEffect(() => {
    scrollTo(100);
  }, []);

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

  // this function gets a random game object
  useEffect(() => {
    async function fetchTrending() {
      const sortBy = "-added";
      const randomPage = Math.floor(Math.random() * 10) + 1;
      const query = `&ordering=${sortBy}&page=${randomPage}&page_size=16`;
      const data = await getCachedGameData('/games',"", query);

      setFeaturedGame(data[Math.floor(Math.random() * data.length)]);
    }
    fetchTrending();
  }, [videoEnd]);

  //this function gets the trailer from RAWG or the id for YouTubeEmbed
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
        videoIds = await getCachedVideoIds(
          featuredGame.id,
          featuredGame.name,
          "official trailer"
        );
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
    <div className="h-fit flex flex-col">
      {/* Section with parallax video */}
      <section className="relative h-screen overflow-hidden">
        {/* Background video */}
        <div className="absolute inset-0 z-0 rounded-2xl" ref={parallaxDivRef}>
          {/* <AnimatePresence mode="wait"> */}
          {/* <motion.div initial={false} animate={{ opacity: 1 }}> */}
          <AnimatePresence mode="wait">
            {trailer ? (
              <motion.video
                key={featuredGame.id}
                // key={trailer}
                initial={{ scale: 0.7, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.7, opacity: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                ref={videoRef}
                autoPlay
                onEnded={() => {
                  setVideoEnd(true);
                  setTimeout(() => {
                    setVideoEnd(false);
                  }, 500);
                }}
                // loop

                muted
                playsInline //this forces the browser (especially Safari) to play the video inside the page and not in fullscreen
                className="absolute inset-0 -z-10 top-0 left-0 w-full h-full object-cover will-change-transform">
                <source src={trailer} type="video/mp4" />
                Your browser does not support the video tag.
              </motion.video>
            ) : (
              <motion.div
                key={Date.now()}
                // key={ids[0]?.videoId || Date.now()}
                // key={ids[0]?.videoId || "yt"}
                initial={{ scale: 0.7, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.7, opacity: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}>
                <YouTubeEmbed
                  videoId={ids[0]?.videoId}
                  // videoId={ids[0]}
                  title="YouTube video"
                  // playlist={ids}
                  // onVideoEnd={() => setVideoEnd(!videoEnd)}
                  // onVideoEnd={() => setVideoEnd(true)}
                  onVideoEnd={() => {
                    setVideoEnd(true);
                    setTimeout(() => {
                      setVideoEnd(false);
                    }, 500);
                  }}
                  customOpts={{ playerVars: { start: 0 } }}
                />
              </motion.div>
            )}
          </AnimatePresence>
          {/* </motion.div> */}
          {/* </AnimatePresence> */}
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-transparent z-0" />
        {/* <div className="absolute inset-0 bg-black/20 z-0" /> */}

        {/* Foreground content */}
        <div className="relative  flex flex-col items-center justify-center h-full bg-black/40">
          {/*navigation*/}
          <NavLink
            to="/recommendations-page"
            className="flex flex-col justify-center items-center hover:scale-110 transition-scale ease-in-out duration-300"
            onClick={() => playEntry()}>
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
