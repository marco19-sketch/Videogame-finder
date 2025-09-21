import { useEffect, useRef, useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { AppContext } from "../context/contextsCreation";
import { getTrending } from "../lib/getTrending";
import YouTubeEmbed from "../components/YouTubeEmbed";
import { findVideoIds } from "../lib/youtube";
import GhqLogo from '../ThemedComponents/GhqLogo';

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
        <div className="absolute inset-0 z-0" ref={parallaxDivRef}>
          {trailer ? (
            <video
              ref={videoRef}
              key={trailer} //this force the React to update the source after mounting
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 -z-10 top-0 left-0 w-full h-full object-cover will-change-transform">
              {/* className="absolute top-0 left-0 w-full h-full object-cover will-change-transform z-0"> */}
              <source src={trailer} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : (
            // trying react-youtube api. (see YouTubeEmbed.jsx for comment)
            // <YouTubeEmbed videoId={ids[0]} playlistIds={ids} title="YouTube video" />

            <YouTubeEmbed
              videoId={ids[0]}
              title="YouTube video"
              playlist={ids}
              // onVideoEnd={() => setVideoEnd(true)} // that's the real call
              onVideoEnd={() => {
                setVideoEnd(true); // that's for dev mode
                console.log("video has ended, onVideoEnd fired");
              }}
              // className='h-full w-full absolute top-0 left-0'
            />
          )}
        </div>
        {/* Overlay */}

        <div className="absolute inset-0 bg-black/40 z-0" />

        {/* Foreground content */}
        <div className="relative  flex flex-col items-center justify-center h-full bg-black/40">
          {/* <NavLink to="/home-page"> */}
          <h1 className="text-5xl text-cyan-400 mb-7 font-semibold drop-shadow-lg text-center ">
            Welcome to <br />
            Game Quest Hub
          </h1>
          {/* </NavLink> */}
          {/*navigation*/}
          <NavLink to="/recommendations-page">
            <GhqLogo 
            className='w-48 h-30 p-5'
            style={{ borderRadius: '50%'}}
            textStyle={{ fontSize: 64, textShadow: '3px 3px 6px cyan' }}
            />
            {/* <div
              className="
                relative rounded-4xl pb-18 pt-0 
                shadow-[0_0_20px_cyan] 
                hover:shadow-[0_0_40px_cyan] hover:scale-110
                transition-all duration-300
                ">
              <p
                className="-mt-4 pt-0 text-cyan-400 font-light text-9xl"
                // style={{ textShadow:  }}
              >
                G H
              </p>
              <p className="text-cyan-400 absolute left-1/2 -translate-x-1/2 top-1/3 font-light text-9xl">
                Q
              </p>
            </div> */}
          </NavLink>
          {/* <div className="flex items-center justify-between">
            <NavLink to="/trending-page">
              <CustomButton text="trending" />
            </NavLink>
            <NavLink to="/recommendations-page">
              <p>Recommended</p>
            </NavLink>
            <NavLink to="/home-page">
              <p>Search</p>
            </NavLink>
          </div> */}
        </div>
      </section>
    </div>
  );
}
