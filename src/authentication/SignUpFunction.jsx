import { auth 
  //   signInWithEmailAndPassword,
  //   signOut,
  //   onAuthStateChanged,
  //   GoogleAuthProvider,
  //   signInWithPopup,
} from "../firebase";
import { createUserWithEmailAndPassword } from 'firebase/auth';

export default async function SignUp(email, password) {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    console.log("User created", user);
    return user;
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.error("Error creating new account:", errorCode, errorMessage);
    throw error;
  }
}
