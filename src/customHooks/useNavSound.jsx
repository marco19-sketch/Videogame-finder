import { useContext, useCallback } from 'react';
import { AppContext } from '../context/contextsCreation';

export default function useNavSound() {
  const { sound } = useContext(AppContext);

  return useCallback(() => {
  if (sound) {
  const audio = new Audio("/sounds/blip-sfx-36568.mp3");
  
  // console.trace("Audio played:", audio.src);// shows in which file the audio is being played
  audio.currentTime = 0;
  audio.play().catch(err => {
    console.error("Audio play failed:", err);
  });
}
}, [sound])
}
