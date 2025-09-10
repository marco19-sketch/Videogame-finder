import { useEffect, useRef, useContext, useState, useMemo } from "react";
import { AppContext } from "../context/contextsCreation";

export default function ParallaxVideoPage() {
  const videoRef = useRef(null);
  const [trailer, setTrailer] = useState("");
  const featuredGame = useMemo(() => {
    return { name: "Grand Theft Auto V", id: 3498 };
  }, []);

  const { handleFetchTrailers, setLandingPageCall } = useContext(AppContext);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY * 0.4; // adjust parallax speed
      if (videoRef.current) {
        videoRef.current.style.transform = `translateY(${offset}px)`;
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  console.log("trailer from parallax page", trailer);

  useEffect(() => {
    const fetchTrailer = async () => {
      setLandingPageCall(true);
      const url = await handleFetchTrailers(featuredGame);
      console.log("url from parallax", url);
      if (url) {
        setTimeout(() => {
          setTrailer(url);
        }, 1000);
      }
    };
    fetchTrailer();
  }, [handleFetchTrailers, featuredGame, setLandingPageCall]);

  useEffect(() => {
    if (videoRef.current && trailer) {
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(err => {
          console.warn("Autoplay prevented:", err);
        });
      }
    }
  }, [trailer]);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Section with parallax video */}
      <section className="relative h-screen overflow-hidden">
        {/* Background video */}
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
