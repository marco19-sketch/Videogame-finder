import { useState, useCallback } from "react";
import useRadioCheck from "../customHooks/useRadioCheck";

const avatarArray = [
  "/avatar/doom.avif",
  "/avatar/face.avif",
  "/avatar/goat.avif",
  "/avatar/guygun.avif",
  "/avatar/redredemption.avif",
  "/avatar/sheriff.avif",
  "/avatar/spiderman.avif",
  "/avatar/witcher.avif",
];

export default function AvatarPicker({ onSelect }) {
  const [selected, setSelected] = useState(null);
  const playSound = useRadioCheck();

  const handleClick = useCallback(
    avatar => {
      setSelected(avatar);
      onSelect(avatar); //send to parent or save in Firestore
    },
    [onSelect]
  );

  return (
  
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 cursor-pointer">
        {avatarArray.map(pic => (
          <img
            key={pic}
            src={pic}
            alt={`${pic.replace("/avatar/", "").slice(0, -5)} avatar`}
            className={`object-cover rounded-full w-32 h-32 border-4 
            ${selected === pic ? "border-cyan-400" : "border-transparent"}`}
            onClick={() => {
              handleClick(pic);
              playSound();
            }}
          />
        ))}
      </div>
   
  );
}
