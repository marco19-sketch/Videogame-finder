import { useContext, useCallback } from "react";
import { AppContext } from "../context/contextsCreation";

export default function useRadioCheck() {
  const { sound } = useContext(AppContext);

  return useCallback(() => {
    if (sound) {
      const audio = new Audio("/sounds/confirm-tap-394001.mp3");
      
      // console.trace("Audio played:", audio.src); // this log shows the component-s playing this audio
      audio.currentTime = 0;
      audio.play().catch(err => {
        console.error("Audio play failed:", err);
      });
    }
  }, [sound])
}
