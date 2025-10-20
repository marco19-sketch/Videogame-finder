import { useEffect, useContext } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";
import { useNavigate } from 'react-router-dom';
import { AppContext, AuthContext } from '../context/contextsCreation';
import useNavSound from '../customHooks/useNavSound';

export default function UserAvatar({ className }) {
  const { avatar, setAvatar } = useContext(AppContext);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const playNav = useNavSound();


  useEffect(() => {
    if (!user) return
    const localAvatar = localStorage.getItem(`avatar_${user.uid}`);
    if (localAvatar) {
      setAvatar(localAvatar);
      return;
    }
    const fetchAvatar = async () => {
      if (!user) return;
      const docSnap = await getDoc(doc(db, "users", user.uid));
      if (docSnap.exists()) {
        setAvatar(docSnap.data().avatar);
      }
    };
    fetchAvatar();
  }, [setAvatar, user]);

  if (!avatar) return null;
 

  return (
    <img
      src={avatar || "https://via.placeholder.com/100"}
      alt="User avatar"
      onClick={() => {navigate('/avatar-page'); playNav();}}
      className={`rounded-full object-cover border-4 border-cyan-400  cursor-pointer ${className}`}
    />
  );
}
