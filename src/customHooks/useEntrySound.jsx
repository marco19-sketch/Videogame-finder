import { useContext, useCallback } from "react";
import { AppContext } from "../context/contextsCreation";

export default function useEntrySound() {
  const { sound } = useContext(AppContext);

  return useCallback(() => {
    if (sound) {
      const audio = new Audio("/sounds/entry-sound.mp3");
      audio.currentTime = 0;
      audio.play().catch(err => {
        console.error("Audio play failed:", err);
      });
    }
  }, [sound])
}
