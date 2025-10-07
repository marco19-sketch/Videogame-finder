import { doc, setDoc } from "firebase/firestore";
import { db } from "../firebase";
import AvatarPicker from "../components/AvatarPicker";
import { useState, useContext, useRef } from "react";
import { AuthContext, AppContext } from "../context/contextsCreation";


export default function AvatarPage() {
  const [message, setMessage] = useState("");
  const { user, loading } = useContext(AuthContext);
  const { avatar, setAvatar } = useContext(AppContext);
  const prevAvatarRef = useRef(null);

  const handleAvatarSelect = async avatarUrl => {
   if (prevAvatarRef.current === avatarUrl) return
    
    if (loading) {
      setMessage("⏳ Checking authentication...")
      return;
    }
    if (!user) {
      setMessage("❌ You must be authenticated to choose an avatar");

      return;
    }

    try {
      await setDoc(
        doc(db, "users", user.uid),
        { avatar: avatarUrl },
        { merge: true } // keep other data like username
      );
      setAvatar(avatarUrl)
      if (avatar !== prevAvatarRef.current) {
      setMessage("✅ Avatar saved successfully!");
      }
      prevAvatarRef.current = avatarUrl
    } catch (err) {
      console.error("Error saving avatar:", err);
      setMessage("❌ Failed to save avatar.");
    }
  };

 
 
  console.log('avatar', avatar)

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
      <AvatarPicker onSelect={handleAvatarSelect} />
      {/* <AvatarPicker onSelect={handleAvatarSelect} url={avatarUrl}/> */}
    </div>
  );
}
