import { useState } from "react";
import { GoogleLogin } from "./GoogleLogin"; // Import your function
import authErrorToMessage from "./authErrorToMessage"; // Import your error mapper

function Login() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState(false)

  const handleGoogleSignIn = async () => {
    setLoading(true);
    setError(""); // Reset any previous errors

    try {
      await GoogleLogin();
      setMessage(true);
      // The sign-in was successful.
      // Firebase Auth state listener (via onAuthStateChanged) will
      // handle the redirect or UI update elsewhere in your app.
    } catch (err) {
      // Display a friendly error message to the user
      setError(authErrorToMessage(err.code));
      console.error("Sign-in error details:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <button
        onClick={handleGoogleSignIn}
        disabled={loading}
        style={{ padding: "10px 20px" }}>
        {loading ? "Signing In..." : "Sign in with Google"}
      </button>
        {message && <p className='text-lg text-green-600'>Google log in successful</p>}
      {error && <p style={{ color: "red" }}>Error: {error}</p>}
    </div>
  );
}

export default Login;
