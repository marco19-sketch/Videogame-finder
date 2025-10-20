import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase";

const googleProvider = new GoogleAuthProvider();

export const GoogleLogin = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);

    const credentials = GoogleAuthProvider.credentialFromResult(result);
    const token = credentials.accessToken;

    const user = result.user;

    console.log("Successfully signed in with Google:", user);
    console.log("Access Token:", token);

    return user;
  } catch (error) {
    console.error("Error during Google sign in", error);

    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage, errorCode);

    throw error;
  }
};
