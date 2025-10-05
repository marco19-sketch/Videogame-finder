import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "../firebase";
import AvatarPicker from '../components/AvatarPicker';
import { useState } from 'react';

export default function AvatarPage() {
const [message, setMessage] = useState('');

const handleAvatarSelect  = async (avatarUrl) =>  {
  const user = auth.currentUser;
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

  setMessage("✅ Avatar saved successfully!")
} catch (err) {
  console.error('Error saving avatar:', err);
  setMessage("❌ Failed to save avatar.")
}
};

return (
  <div
    className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800
     to-black flex flex-col items-center py-8 px-4 text-white">
    <h1 className="text-3xl font-bold text-cyan-400 mb-2 drop-shadow-lg">
      Choose your avatar
    </h1>
    {message && (
      <p className="text-center text-cyan-400 font-semibold mt-6">{message}</p>
    )}
    <AvatarPicker onSelect={handleAvatarSelect} />
    {/* <AvatarPicker onSelect={handleAvatarSelect} url={avatarUrl}/> */}
  </div>
);
}

