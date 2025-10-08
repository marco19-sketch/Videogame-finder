import { useContext, useCallback } from "react";
import { AppContext } from "../context/contextsCreation";

export default function useCheckSound() {
  const { sound } = useContext(AppContext);

  return useCallback(() => {
    if (sound) {
      const audio = new Audio("/sounds/check-83184.mp3");
      
      //   const audio = new Audio(src);
      audio.currentTime = 0;
      audio.play().catch(err => {
        console.error("Audio play failed:", err);
      });
    }
  }, [sound])
}
