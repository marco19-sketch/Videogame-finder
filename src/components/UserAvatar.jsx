import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "../firebase";

export default function UserAvatar() {
  const [avatar, setAvatar] = useState(null);

  useEffect(() => {
    const fetchAvatar = async () => {
      const user = auth.currentUser;
      if (!user) return;
      const docSnap = await getDoc(doc(db, "users", user.uid));
      if (docSnap.exists()) {
        setAvatar(docSnap.data().avatar);
      }
    };
    fetchAvatar();
  }, []);

  if (!avatar) return null;

  return (
    <img
      src={avatar || "https://via.placeholder.com/100"}
      alt="User avatar"
      className="w-24 h-24 rounded-full object-cover border-4 border-cyan-400"
    />
  );
}
