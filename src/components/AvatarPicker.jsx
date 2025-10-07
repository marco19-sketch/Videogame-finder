import { useState, useCallback, useEffect, useContext } from "react";
import useRadioCheck from "../customHooks/useRadioCheck";
import ThemedLabel from '../ThemedComponents/ThemedLabel';
import ThemedInput from '../ThemedComponents/ThemedInput';
import AvatarUrlInput from '../components/AvatarUrlInput';
import AvatarFileUpload from '../components/AvatarFileUpload';
import { AppContext } from '../context/contextsCreation';

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
  // const [selected, setSelected] = useState(null);
  const { avatar, setAvatar } = useContext(AppContext);
  const playSound = useRadioCheck();
  const [url, setUrl] = useState('');

  // useEffect(() => {
  //   if (avatar) return
  //   const savedAvatar = localStorage.getItem("avatar");
  //   if (savedAvatar) {
  //     setAvatar(savedAvatar);
  //     // setSelected(savedAvatar);
  //     onSelect(savedAvatar); // inform parent on mount
  //     setUrl(savedAvatar); // in case user used URL
  //   }
  // }, [onSelect, setAvatar, avatar]);

  useEffect(() => {
    const savedAvatar = localStorage.getItem("avatar");
    // Only apply the saved avatar if context doesn't already have one
    if (!avatar && savedAvatar) {
      setAvatar(savedAvatar);
      setUrl(savedAvatar);
      // ❌ DO NOT call onSelect here, it will trigger Firestore writes on every render
    }
  }, [avatar, setAvatar]);



  const handleClick = useCallback(
    avatar => {
      setAvatar(avatar);
      // setSelected(avatar);
      onSelect(avatar); //send to parent or save in Firestore
    },
    [onSelect, setAvatar]
  );

  const handleUrlSubmit = useCallback(() => {
    if (!url.trim()) return;
    onSelect(url);
    setAvatar(null); //unselect present avatar if  URL is used
    // setSelected(null); //unselect present avatar if  URL is used
  }, [url, onSelect, setAvatar]);

 
  return (
  <>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 cursor-pointer max-w-7xl">
        {avatarArray.map(pic => (
          <img
            key={pic}
            src={pic}
            alt={`${pic.replace("/avatar/", "").slice(0, -5)} avatar`}
            className={`object-cover rounded-full w-32 h-32 border-4 
            ${avatar === pic ? "border-cyan-400" : "border-transparent"}`}
            // ${selected === pic ? "border-cyan-400" : "border-transparent"}`}
            onClick={() => {
              // setSelected(pic);
              handleClick(pic);
              setUrl(pic);
              playSound();
            }}
          />
        ))}
        
      </div>
     
      <div>
   <AvatarUrlInput 
    url={url}
    setUrl={setUrl}
    onSubmit={handleUrlSubmit}
    />
    {/* <AvatarFileUpload onUpload={onSelect}/> */}
    </div>
   </>
  );
}
