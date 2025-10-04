import { useState } from "react";
import setUsername  from "./setUsername";
import ThemedLabel from '../ThemedComponents/ThemedLabel';
import ThemedButton from '../ThemedComponents/ThemedButton';
import ThemedInput from '../ThemedComponents/ThemedInput';

export default function UsernameForm() {
  const [username, setUsernameInput] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async e => {
    e.preventDefault();
    setError("");
    setSuccess("");
    try {
      await setUsername(username);
      setSuccess("Username set successfully 🎉");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="h-screen w-full flex flex-col justify-center items-center">
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
          // style={{
          //   background: disabled ? "gray" : "",
          // }}
          // disabled={disabled}
          className="w-24 p-3">
          Save
        </ThemedButton>
        {error && <p className="text-red-500">{error}</p>}
        {success && <p className="text-green-500">{success}</p>}
      </form>
    </div>
  );
}
    
