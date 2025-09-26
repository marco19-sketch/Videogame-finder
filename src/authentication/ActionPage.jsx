// src/pages/ActionPage.jsx
import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { confirmPasswordReset, applyActionCode } from "firebase/auth";
import { auth } from '../firebase';
import ThemedButton from '../ThemedComponents/ThemedButton';
import ThemedLabel from '../ThemedComponents/ThemedLabel';
import ThemedInput from '../ThemedComponents/ThemedInput';
import ShowPassword from '../ThemedComponents/ShowPassword';
import { AppContext } from '../context/contextsCreation';

export default function ActionPage() {
  const [status, setStatus] = useState("Processing...");
  const [newPassword, setNewPassword] = useState("");
  const [showResetForm, setShowResetForm] = useState(false);
  const { showPassword } = useContext(AppContext);
  const navigate = useNavigate();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const mode = urlParams.get("mode");
    const oobCode = urlParams.get("oobCode");

    if (!mode || !oobCode) {
      setStatus("❌ Invalid or missing parameters.");
      return;
    }

    if (mode === "verifyEmail") {
      applyActionCode(auth, oobCode)
        .then(() => setStatus("✅ Email verified! You are logged in."))
        .catch(() => setStatus("❌ Verification failed or link expired."));
    }

    if (mode === "resetPassword") {
      setShowResetForm(true);
      setStatus("Enter your new password below:");
    }
  }, []);

  const handlePasswordReset = async e => {
    e.preventDefault();
    const urlParams = new URLSearchParams(window.location.search);
    const oobCode = urlParams.get("oobCode");

    try {
      await confirmPasswordReset(auth, oobCode, newPassword);
      setStatus("✅ Password has been reset! You can log in now.");
      setShowResetForm(false);
    } catch (err) {
      console.error("Error resetting password:", err);
      setStatus("❌ Failed to reset password. Try again.");
    }
  };

  return (
    <div className="h-screen w-full flex flex-col justify-center items-center">
      <p className="text-lg text-white mb-4">{status}</p>

      {showResetForm && (
        <form
          onSubmit={handlePasswordReset}
          className=" bg-gray-800 mb-4 flex flex-col items-center p-6 rounded-2xl shadow-lg w-full max-w-md mx-auto space-y-4">
          <ThemedLabel htmlFor="new-password">Enter new password</ThemedLabel>
          <div className="relative w-full">
            <ThemedInput
              id="new-password"
              type={`${showPassword ? "text" : "password"}`}
              placeholder="New password"
              value={newPassword}
              onChange={e => setNewPassword(e.target.value)}
              className={`text-${showPassword ? "white" : ""}`}
            />
            <ShowPassword className="absolute top-2 right-4" />
          </div>
          <ThemedButton type="submit" disabled={newPassword.length === 0}
          className='w-36 h-14 p-4 flex justify-center items-center'>
            Reset Password
          </ThemedButton>
        </form>
      )}
      {status === "✅ Password has been reset! You can log in now." ? (
        <ThemedButton type="button" onClick={() => navigate("/log-in-page")}
        className='w-28 h-14'>
          Log in
        </ThemedButton>
      ) : (
        <ThemedButton type="button" onClick={() => navigate("/home-page")}
        className='w-28 h-14'>
          Home
        </ThemedButton>
      )}
    </div>
  );
}
