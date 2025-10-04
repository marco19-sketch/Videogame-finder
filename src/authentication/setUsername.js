import { doc, getDoc, setDoc } from "firebase/firestore";
import { updateProfile } from "firebase/auth";
import { db, auth } from "../firebase";

export default async function setUsername(username) {
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
  await setDoc(doc(db, "users", user.uid), {
    username,
    email: user.email,
    photoURL: user.photoURL || "",
  });

  // Update Firebase Auth display name
  await updateProfile(user, { displayName: username });
}
