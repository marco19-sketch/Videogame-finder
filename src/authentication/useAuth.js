import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";

export function useAuth() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async currentUser => {
      if (currentUser) {
        const uid = currentUser.uid;

        // 🔹 Try to load from localStorage first
        let username = localStorage.getItem(`username_${uid}`);
        let avatar = localStorage.getItem(`avatar_${uid}`);

       
        // Only fetch from Firestore if value is truly missing, not empty
        // 🔹 If missing, fetch from Firestore
        if (!username || !avatar) {
          try {
            const userDoc = await getDoc(doc(db, "users", uid));
            if (userDoc.exists()) {
              const data = userDoc.data();
              username = data.username || "";
              avatar = data.photoURL || "";
              // Cache for next time
              localStorage.setItem(`username_${uid}`, username);
              localStorage.setItem(`avatar_${uid}`, avatar);
            }
          } catch (err) {
            console.error("Error fetching user data from Firestore:", err);
          }
        }

        // 🔹 Merge Firebase user data with Firestore fields
        setUser({
          ...currentUser,
          username,
          avatar,
        });
      } else {
        // User logged out → clear user state
        setUser(null);
      }

      setLoading(false);
    });

    

    return () => unsubscribe();
  }, []);

  return { user, loading };
}
