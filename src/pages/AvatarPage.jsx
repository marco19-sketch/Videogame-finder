import { doc, setDoc } from "firebase/firestore";
import { db } from "../firebase";
import AvatarPicker from "../components/AvatarPicker";
import AvatarUrlInput from '../components/AvatarUrlInput';
import { useContext, useRef, useEffect } from "react";
import { AuthContext, AppContext } from "../context/contextsCreation";
import useErrorSound from '../customHooks/useErrorSound';
import useRadioCheck from '../customHooks/useRadioCheck';

export default function AvatarPage() {
  const { user, loading } = useContext(AuthContext);
  const { avatar, setAvatar, formUrl, setFormUrl, message, setMessage } =
    useContext(AppContext);
  const prevAvatarRef = useRef(null);
  const playBlip = useRadioCheck();


  const handleAvatarSelect = async avatarUrl => {
    if (prevAvatarRef.current === avatarUrl) return;

    if (loading) {
      setMessage("⏳ Checking authentication...");
      return;
    }
    // if (!user) {
    //   setMessage("❌ You must be authenticated to choose an avatar");
    //   // playError();
    //   return;
    // }

    try {
      await setDoc(
        doc(db, "users", user.uid),
        { photoURL: avatar }, // save in firestore
        { merge: true } // keep other data like username
      );
      // setAvatar(avatarUrl);
      // console.log('setAvatar', avatarUrl)
      // if (formUrl && avatar !== prevAvatarRef.current) {
      // setMessage("✅ Avatar saved successfully!");

      // }
      // prevAvatarRef.current = avatarUrl
    } catch (err) {
      console.error("Error saving avatar:", err);
      setMessage("❌ Failed to save avatar.");
    }
  };

  useEffect(() => {
    if (!formUrl) return;
    if (formUrl && avatar !== prevAvatarRef.current) {
      setMessage("✅ Avatar saved successfully!");
      playBlip();
      prevAvatarRef.current = avatar;
      setFormUrl(false);
    }
  }, [avatar, formUrl, setFormUrl, setMessage, playBlip]);



  return (
    <div
      className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800
     to-black flex flex-col items-center py-8 px-4 text-white">
      <h1 className="text-3xl font-bold text-cyan-400 mb-2 drop-shadow-lg">
        Choose your avatar
      </h1>
      {message && (
        <p className="text-center text-cyan-400 font-semibold mt-6">
          {message}
        </p>
      )}
      <AvatarUrlInput url={avatar} setUrl={setAvatar} onSubmit={handleAvatarSelect} />
      <AvatarPicker  />
    </div>
  );
}
