import { doc, getDoc, setDoc } from "firebase/firestore";
import { updateProfile } from "firebase/auth";
import { db, auth } from "../firebase";

export default async function setUsername(username, avatar) {
  try {
    const user = auth.currentUser;
    if (!user) throw new Error("Not authenticated");

    const usernameRef = doc(db, "usernames", username.toLowerCase());
    const usernameSnap = await getDoc(usernameRef);

    if (usernameSnap.exists()) {
      throw new Error("Username already taken 😢");
    }

    // Reserve username
    await setDoc(usernameRef, { uid: user.uid });

    // Save profile data
    await setDoc(
      doc(db, "users", user.uid),
      {
        username,
        email: user.email,
        photoURL: avatar || "",
      },
      { merge: true }
    );

    localStorage.setItem(`username_${user.uid}`, username);
    // Update Firebase Auth display name
    await updateProfile(user, { displayName: username, photoURL: avatar });
  } catch (err) {
    console.error("Error setting username:", err);
  }
}
