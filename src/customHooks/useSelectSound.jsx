import { useContext, useCallback } from "react";
import { AppContext } from "../context/contextsCreation";

export default function useSelectSound() {
  const { sound } = useContext(AppContext);

  return useCallback(() => {
    if (sound) {
      const audio = new Audio("/sounds/selectSound.mp3");
      console.log("Playing sound:", audio);
      //   const audio = new Audio(src);
      audio.currentTime = 0;
      audio.play().catch(err => {
        console.error("Audio play failed:", err);
      });
    }
  }, [sound])
}
