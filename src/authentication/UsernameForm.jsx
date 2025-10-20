import { useState, useContext } from "react";
import setUsername from "./setUsername";
import ThemedLabel from "../ThemedComponents/ThemedLabel";
import ThemedButton from "../ThemedComponents/ThemedButton";
import ThemedInput from "../ThemedComponents/ThemedInput";
import { NavLink } from "react-router-dom";
import { AuthContext, AppContext } from '../context/contextsCreation';
import useRadioCheck from '../customHooks/useRadioCheck';
import useNavSound from '../customHooks/useNavSound';
import useErrorSound from '../customHooks/useErrorSound';


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
      await setUsername(username, avatar );
      setSuccess("Username set successfully 🎉");
      playBlip();
    } catch (err) {
      setError(err.message);
      playError();
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
          onChange={e => setUsernameInput(e.target.value)}
          placeholder="Choose your username"
        />

        <ThemedButton
          type="submit"
          className="w-24 p-3">
          Save
        </ThemedButton>
        {error && <p className="text-red-500">{error}</p>}
        {success && <p className="text-green-500">{success}</p>}
      </form>
      <ThemedButton className="w-24 p-3"
      onClick={() => playNav()}>
        <NavLink to="/avatar-page">Continue</NavLink>
      </ThemedButton>
    </div>
  );
}
