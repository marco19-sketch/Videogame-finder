import { useState, useCallback, useEffect, useContext } from "react";
import useRadioCheck from "../customHooks/useRadioCheck";
import { AppContext } from "../context/contextsCreation";
import { AuthContext } from "../context/contextsCreation";

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

//this component just renders the avatar imgs and sets the selected one
export default function AvatarPicker() {
  const { avatar, setAvatar, setMessage, setUrl } = useContext(AppContext);
  const { user } = useContext(AuthContext);
  const playBlip = useRadioCheck();
  const [selected, setSelected] = useState(avatar || "");

  useEffect(() => {
    if (!user) return;
    const savedAvatar = localStorage.getItem(`avatar_${user.uid}`);
    // Only apply the saved avatar if context doesn't already have one
    if (!avatar && savedAvatar) {
      setAvatar(savedAvatar);
      console.log("saved avatar", savedAvatar);
      // ❌ DO NOT call onSelect here, it will trigger Firestore writes on every render
    }
  }, [user, avatar, setAvatar]);

  useEffect(() => {
    setMessage("");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClick = useCallback(
    pic => {
      setSelected(pic);
      setUrl(pic);
      setMessage(""); //reset msg
      playBlip();
    },
    [setMessage, playBlip, setUrl]
  );

  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 cursor-pointer max-w-7xl">
        {avatarArray.map(pic => (
          <img
            key={pic}
            src={pic}
            alt={`${pic.replace("/avatar/", "").slice(0, -5)} avatar`}
            className={`object-cover rounded-full w-32 h-32 border-4 
            ${selected === pic ? "border-cyan-400" : "border-transparent"}`}
            onClick={() => {
              handleClick(pic);
            }}
          />
        ))}
      </div>
    </>
  );
}
