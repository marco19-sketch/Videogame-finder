import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../firebase";
import { useState } from "react";

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
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="reset-email">Enter Email</label>
        <input
          type="email"
          id="reset-email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
        <button type="submit">Send reset email</button>
      </form>
      {message && <p style={{ color: "green" }}>{message}</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </>
  );
}
