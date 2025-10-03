// lib/addSound.js
export default function addBlipVideoSound() {
  const audio = new Audio("/sounds/blip-video.mp3");
  console.log("Playing sound:", audio);
  //   const audio = new Audio(src);
  audio.currentTime = 0;
  audio.play().catch(err => {
    console.error("Audio play failed:", err);
  });
}
