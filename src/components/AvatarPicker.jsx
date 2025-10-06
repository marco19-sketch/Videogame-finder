import { useState, useCallback, useEffect } from "react";
import useRadioCheck from "../customHooks/useRadioCheck";
import ThemedLabel from '../ThemedComponents/ThemedLabel';
import ThemedInput from '../ThemedComponents/ThemedInput';
import AvatarUrlInput from '../components/AvatarUrlInput';
import AvatarFileUpload from '../components/AvatarFileUpload';

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
  const [url, setUrl] = useState('');

  useEffect(() => {
    const savedAvatar = localStorage.getItem("avatar");
    if (savedAvatar) {
      setSelected(savedAvatar);
      onSelect(savedAvatar); // inform parent on mount
      setUrl(savedAvatar); // in case user used URL
    }
  }, [onSelect]);


  const handleClick = useCallback(
    avatar => {
      setSelected(avatar);
      onSelect(avatar); //send to parent or save in Firestore
    },
    [onSelect]
  );

  const handleUrlSubmit = useCallback(() => {
    if (!url.trim()) return;
    onSelect(url);
    setSelected(null); //unselect present avatar if  URL is used
  }, [url, onSelect]);

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
