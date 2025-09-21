import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../firebase";
import { useState } from "react";
import ThemedButton from "../ThemedComponents/ThemedButton";
import ThemedLabel from "../ThemedComponents/ThemedLabel";
import ThemedInput from "../ThemedComponents/ThemedInput";

// import authErrorToMessage from "./authErrorToMessage";

export default function ResetPasswordPage() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
//   const actionCodeSettings = {
//     url: "http://localhost:5173/updatePassword", // in dev
//     handleCodeInApp: true, // importantissimo
//   };

  const handleSubmit = async e => {
    e.preventDefault();
    setMessage("");
    setError("");
    try {
        const actionCodeSettings = {
          url: `${window.location.origin}/update-password-page`, //dynamic link to the app
          handleCodeInApp: true,
        };
      await sendPasswordResetEmail(auth, email, actionCodeSettings);
      setMessage("Email sent. Check your inbox");
    } catch (err) {
      console.error("Reset password error:", err);
      // setError(authErrorToMessage(err.code));
      setError("Error sending email");
    }
  };

  return (
    <div className="h-screen w-full flex flex-col justify-center items-center">
      <p className='text-2xl text-cyan-400 mb-4'>Reset password</p>
      <form
        onSubmit={handleSubmit}
        className="bg-gray-800 mb-4 flex flex-col items-center p-6 rounded-2xl shadow-lg w-full max-w-md mx-auto space-y-4">
        <ThemedLabel htmlFor="reset-email">Enter Email</ThemedLabel>
        <ThemedInput
          type="email"
          id="reset-email"
          value={email}
          placeholder='email'
          onChange={e => setEmail(e.target.value)}
          required
        />
        <ThemedButton type="submit">Send reset email</ThemedButton>
      </form>
      {message && <p style={{ color: "green" }}>{message}</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}
