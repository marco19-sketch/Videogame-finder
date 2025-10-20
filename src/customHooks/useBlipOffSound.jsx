import { useContext, useCallback } from "react";
import { AppContext } from "../context/contextsCreation";

export default function useBlipOffSound() {
  const { sound } = useContext(AppContext);

  return useCallback(() => {
    if (sound) {
      const audio = new Audio("/sounds/blip-video-off.mp3");
      audio.currentTime = 0;
      audio.play().catch(err => {
        console.error("Audio play failed:", err);
      });
    }
  }, [sound])
}
