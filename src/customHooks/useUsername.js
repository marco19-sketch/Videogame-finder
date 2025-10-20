import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "../firebase";

export default function useUsername() {
  const [username, setUsername] = useState(null);

  useEffect(() => {
    const fetchUsername = async () => {
      const user = auth.currentUser;
      if (!user) return;

      const docRef = doc(db, "users", user.uid);
      const snap = await getDoc(docRef);

      if (snap.exists()) {
        setUsername(snap.data().username);
      }
    };

    fetchUsername();
  }, []);

  return username;
}
