import { useState, useContext } from "react";
import setUsername from "./setUsername";
import ThemedLabel from "../ThemedComponents/ThemedLabel";
import ThemedButton from "../ThemedComponents/ThemedButton";
import ThemedInput from "../ThemedComponents/ThemedInput";
import { NavLink } from "react-router-dom";
import { AuthContext, AppContext } from "../context/contextsCreation";
import useRadioCheck from "../customHooks/useRadioCheck";
import useNavSound from "../customHooks/useNavSound";
import useErrorSound from "../customHooks/useErrorSound";
import { sanitizeText } from "../utils/sanitize"; // Fixed path - should be utils not lib

export default function UsernameForm() {
  const [username, setUsernameInput] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const { loading } = useContext(AuthContext);
  const { avatar, setMessage } = useContext(AppContext);
  const playBlip = useRadioCheck();
  const playNav = useNavSound();
  const playError = useErrorSound();

  const handleSubmit = async e => {
    if (loading) {
      setMessage("⏳ Checking authentication...");
    }
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      // Sanitize the username before using it
      const cleanUsername = sanitizeText(username);

      // Validate username is not empty after sanitization
      if (!cleanUsername.trim()) {
        setError("Username cannot be empty or contain only special characters");
        playError();
        return;
      }

      // Additional validation: username length and format
      if (cleanUsername.length < 3) {
        setError("Username must be at least 3 characters long");
        playError();
        return;
      }

      if (cleanUsername.length > 30) {
        setError("Username must be less than 30 characters");
        playError();
        return;
      }

      // Only allow alphanumeric, underscores, and hyphens
      const usernameRegex = /^[a-zA-Z0-9_-]+$/;
      if (!usernameRegex.test(cleanUsername)) {
        setError(
          "Username can only contain letters, numbers, underscores, and hyphens"
        );
        playError();
        return;
      }

      await setUsername(cleanUsername, avatar);
      setSuccess("Username set successfully 🎉");
      playBlip();
    } catch (err) {
      setError(err.message);
      playError();
    }
  };

  // Optional: Add real-time validation feedback
  const handleInputChange = e => {
    const value = e.target.value;
    setUsernameInput(value);

    // Basic client-side validation feedback
    if (value.length > 0 && value.length < 3) {
      setError("Username must be at least 3 characters");
    } else if (value.length > 30) {
      setError("Username must be less than 30 characters");
    } else {
      setError(""); // Clear error when valid
    }
  };

  return (
    <div className="h-screen w-full flex flex-col mt-32 items-center">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-800 mb-4 flex flex-col items-center p-6 
          rounded-2xl shadow-lg w-full max-w-md mx-auto space-y-4">
        <ThemedLabel htmlFor="username">Choose username</ThemedLabel>
        <ThemedInput
          id="username"
          value={username}
          onChange={handleInputChange} // Updated to use validation handler
          placeholder="Choose your username (3-30 characters)"
          maxLength={30} // Prevent too long inputs
        />
        <div className="text-sm text-gray-400">
          Letters, numbers, underscores, and hyphens only
        </div>

        <ThemedButton
          type="submit"
          className="w-24 p-3"
          disabled={!username.trim() || username.length < 3} // Disable if invalid
        >
          Save
        </ThemedButton>
        {error && <p className="text-red-500 text-sm">{error}</p>}
        {success && <p className="text-green-500">{success}</p>}
      </form>
      <ThemedButton className="w-24 p-3" onClick={() => playNav()}>
        <NavLink to="/avatar-page">Continue</NavLink>
      </ThemedButton>
    </div>
  );
}
