import { useContext, useCallback } from "react";
import { AppContext } from "../context/contextsCreation";

export default function useDescriptionSound() {
  const { sound } = useContext(AppContext);

  return useCallback(() => {
    if (sound) {
      const audio = new Audio("/sounds/whoosh-end-384629.mp3");
      
      //   const audio = new Audio(src);
      audio.currentTime = 0;
      audio.play().catch(err => {
        console.error("Audio play failed:", err);
      });
    }
  }, [sound])
}
