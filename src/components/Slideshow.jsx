import { useEffect, useContext } from "react";
import { AppContext } from "../context/contextsCreation";
import useBlipVideoSound from "../customHooks/useBlipVideoSound";

export default function Slideshow() {
  const interval = 3500;
  const { slides, current, setCurrent } = useContext(AppContext);
  const playSound = useBlipVideoSound();

  useEffect(() => {
    if (slides.length > 0) {
      setCurrent(0);
    }
  }, [setCurrent, slides]);

  useEffect(() => {
    if (slides.length === 0) return;

    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % slides.length);
    }, interval);

    return () => clearInterval(timer);
  }, [slides.length, setCurrent]);

  return (
    <div className="relative " onClick={playSound}>
      {slides.map((slide, index) => (
        <img
          src={slide.image}
          key={slide.id}
          style={{ boxShadow: "6px 6px 12px black" }}
          alt="slide of the game"
          className={`w-full object-cover aspect-video
                rounded-2xl border-4 border-cyan-400
                transition-opacity 
            duration-[2000ms] ${
              index === current
                ? "opacity-100"
                : "opacity-0 absolute top-0 left-0"
            }`}
        />
      ))}
    </div>
  );
}
