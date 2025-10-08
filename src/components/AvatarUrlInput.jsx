import { useCallback, useContext } from 'react';
import ThemedButton from '../ThemedComponents/ThemedButton';
import useErrorSound from '../customHooks/useErrorSound';

import ThemedInput from '../ThemedComponents/ThemedInput';
import { AppContext } from '../context/contextsCreation';
import { AuthContext } from '../context/contextsCreation';

export default function AvatarUrlInput({url, setUrl, onSubmit}) {

    const { setAvatar, setFormUrl, setMessage } = useContext(AppContext);
    const { user } = useContext(AuthContext);
    const playError = useErrorSound();
   

    const handleUseThisImage = useCallback(() => {
      if (!user) {
        setMessage("❌ You must be authenticated to choose an avatar");
        playError();
        return;
      }
      onSubmit(); //triggers avatarPage.handleAvatarSelect
      localStorage.setItem(`avatar_${user.uid}`, url); // persist

      setAvatar(url); //updates context
      setFormUrl(true);
    }, [onSubmit, url, setAvatar, setFormUrl, user, setMessage, playError])
   
  return (
    <div className="flex flex-col items-center   mt-12 gap-4 p-6 bg-gray-900 text-white rounded-xl">
      <label htmlFor="avatarUrl" className="text-cyan-400 font-semibold">
        Paste your avatar image URL
      </label>

      <ThemedInput
        id="avatarUrl"
        type="text"
        value={url}
        onChange={e => setUrl(e.target.value)}
        placeholder="https://example.com/my-avatar.jpg"
        className="p-2"
      />

      {/* Preview the image only if the URL is not empty */}
      
      {url && (
        <>
         
        <img
          src={url}
          alt="Avatar preview"
          className="w-32 h-32 rounded-full object-cover border-4 border-cyan-400 shadow-lg"
          onError={e => {
            console.error("Image failed to load:", e);
            setUrl("/avatar/default.jpg"); // fallback if broken URL
          }}
        />
        </>
      )}
      
      <ThemedButton
        onClick={handleUseThisImage}
        className="p-4">
        Use This Image
      </ThemedButton>
    </div>
  );
}
