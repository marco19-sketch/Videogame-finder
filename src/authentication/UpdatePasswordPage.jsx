// src/pages/UpdatePasswordPage.jsx
import { useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { confirmPasswordReset } from "firebase/auth";
import { auth } from "../firebase";

export default function UpdatePasswordPage() {
  const [searchParams] = useSearchParams();
  const oobCode = searchParams.get("oobCode"); // preso dall’URL
  const [newPassword, setNewPassword] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();


  const handleSubmit = async e => {
    e.preventDefault();
    setError("");
    setMessage("");

    try {
      await confirmPasswordReset(auth, oobCode, newPassword);
      const timer = setTimeout(() => {
      setMessage("Password aggiornata con successo!");
      navigate('/log-in-page');
      }, 1000);
      return () => clearTimeout(timer);
    } catch (err) {
      console.error("Update password error:", err);
      setError("Errore nell’aggiornamento della password.");
    }
  };

  return (
    <div>
      <h2>Imposta una nuova password</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor='password'>Enter new password</label>
        <input
          type="password"
          id='password'
          placeholder="Nuova password"
          value={newPassword}
          onChange={e => setNewPassword(e.target.value)}
          required
        />
        <button type="submit">Aggiorna password</button>
      </form>

      {message && <p style={{ color: "green" }}>{message}</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}
