import { useEffect, useContext } from "react";
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "../firebase";

import { AppContext, AuthContext } from '../context/contextsCreation';

export default function UserAvatar({ className }) {
  
  // const [avatar, setAvatar] = useState(null);
  const { avatar, setAvatar } = useContext(AppContext);
  const { user } = useContext(AuthContext);


  useEffect(() => {
    if (!user) return
    const localAvatar = localStorage.getItem(`avatar_${user.uid}`);
    if (localAvatar) {
      setAvatar(localAvatar);
      return;
    }
    const fetchAvatar = async () => {
      // const user = auth.currentUser;
      if (!user) return;
      const docSnap = await getDoc(doc(db, "users", user.uid));
      if (docSnap.exists()) {
        setAvatar(docSnap.data().avatar);
      }
    };
    fetchAvatar();
  }, [setAvatar, user]);

  if (!avatar) return null;
  console.log('avatar', avatar)

  return (
    <img
      src={avatar || "https://via.placeholder.com/100"}
      alt="User avatar"
      className={`rounded-full object-cover border-4 border-cyan-400 ${className}`}
    />
  );
}
