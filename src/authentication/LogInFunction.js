import { auth } from '../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import authErrorToMessage from "./authErrorToMessage";

export default async function LogInFunction(email, password) {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

       if (!user.emailVerified) {
         // 1. Define the error code in a variable for clarity and to avoid typos.
         const errorCode = "auth/email-not-verified";

         // 2. Create the error. Use your function to get the message!
         const error = new Error(authErrorToMessage(errorCode));

         // 3. Attach the original code for the reasons above.
         error.code = errorCode;

         // 4. Throw it.
         throw error;
       }
        console.log('User logged in:', user.uid, user.email);
        return user;
    } catch (err) {
      console.error("Log in error:", err.code, err.message);
      

      // This is the key part: transform the error before throwing it again
      // so the component that calls this function gets the friendly message.
      const friendlyError = new Error(authErrorToMessage(err.code)); // Get friendly message
      friendlyError.code = err.code; // Keep the original code if needed
      throw friendlyError; // Throw the new error with the friendly message
    }

    
}