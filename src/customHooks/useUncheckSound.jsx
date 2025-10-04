import { useContext, useCallback } from "react";
import { AppContext } from "../context/contextsCreation";

export default function useUncheckSound() {
  const { sound } = useContext(AppContext);

  return useCallback(() => {
    if (sound) {
      const audio = new Audio("/sounds/pencil-scratch-30373.mp3");
      console.log("Playing sound:", audio);
      //   const audio = new Audio(src);
      audio.currentTime = 0;
      audio.play().catch(err => {
        console.error("Audio play failed:", err);
      });
    }
  }, [sound])
}
