import { useEffect } from "react";

export default function Slideshow({ slides, current, setCurrent }) {
  const interval = 5000;

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
    <div className="relative">
      {slides.map((slide, index) => (
        <img
          src={slide.image}
          key={slide.id}
          alt="slide of the game"
          className={`w-full object-cover aspect-video
                rounded-2xl border-2 border-cyan-400
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
