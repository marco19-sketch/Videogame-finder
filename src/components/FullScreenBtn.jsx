import screenfull from "screenfull";
import { useCallback } from "react";
import { Fullscreen } from "lucide-react";

export default function FullScreenBtn({ container }) {
  const toggleFullscreen = useCallback(() => {
    if (screenfull.isEnabled && container?.current) {
      screenfull.toggle(container.current);
    }
  }, [container]);

  return (
    <button
      className="absolute md:w-40 md:h-40 text-transparent hover:text-white bg-transparent cursor-pointer flex justify-end items-end p-6 bottom-0 right-0 z-20"
      onClick={toggleFullscreen}>
      <Fullscreen />
    </button>
  );
}
