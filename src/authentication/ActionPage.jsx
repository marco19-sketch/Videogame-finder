// src/pages/ActionPage.jsx
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { confirmPasswordReset, applyActionCode } from "firebase/auth";
import { auth } from '../firebase';

export default function ActionPage() {
  const [status, setStatus] = useState("Processing...");
  const [newPassword, setNewPassword] = useState("");
  const [showResetForm, setShowResetForm] = useState(false);

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
        .then(() => setStatus("✅ Email verified! You can now log in."))
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
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-900">
      <p className="text-lg text-white mb-4">{status}</p>

      {showResetForm && (
        <form
          onSubmit={handlePasswordReset}
          className="flex flex-col gap-4 bg-gray-800 p-6 rounded-lg shadow-lg">
          <input
            type="password"
            placeholder="New password"
            value={newPassword}
            onChange={e => setNewPassword(e.target.value)}
            className="px-4 py-2 rounded-lg border border-gray-600 bg-gray-700 text-white"
            required
          />
          <button
            type="submit"
            className="px-6 py-2 rounded-lg font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-400 hover:to-blue-500 transition-colors duration-300">
            Reset Password
          </button>
        </form>
      )}

      <button
        className="mt-6 px-6 py-2 rounded-lg font-semibold bg-gradient-to-r from-purple-500 to-pink-600 text-white hover:from-purple-400 hover:to-pink-500 transition-colors duration-300"
        type="button"
        onClick={() => navigate("/")}>
        Go Home
      </button>
    </div>
  );
}
