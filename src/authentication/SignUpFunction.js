import { auth } from "../firebase";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";

export default async function SignUp(email, password) {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    console.log("User created", user);

    // await sendEmailVerification(user, {
    //   url: `${window.location.origin}/action`,
    //   handleCodeInApp: true
    // });

    const baseUrl =
      window.location.hostname === "localhost"
        ? `http://localhost:8888`
        : "https://dev--gamequesthub.netlify.app";

    await sendEmailVerification(user, {
      url: `${baseUrl}/action`,
      handleCodeInApp: true,
    });

    return user;
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.error("Error creating new account:", errorCode, errorMessage);
    throw error;
  }
}
