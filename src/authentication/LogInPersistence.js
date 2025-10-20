import {
  setPersistence,
  browserLocalPersistence,
  browserSessionPersistence,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from '../firebase';

export default async function LogInPersistence(email, password, remember = true ) {
    try {
        await setPersistence(auth, remember ? browserLocalPersistence: browserSessionPersistence);
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        return userCredential.user;
    }   catch (err) {
        console.error('Log in error:',err);
        throw err;
    }
}