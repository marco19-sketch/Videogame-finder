// import { AuthContext } from '../context/contextsCreation';
import { useState, useContext } from "react";
import { AppContext } from "../context/contextsCreation";
import LogInFunction from "./LogInFunction";
import { useNavigate, NavLink } from "react-router-dom";
import authErrorToMessage from "./authErrorToMessage";
import GoogleButton from "./GoogleButton";
import ThemedButton from "../ThemedComponents/ThemedButton";
import ThemedLabel from "../ThemedComponents/ThemedLabel";
import ThemedInput from "../ThemedComponents/ThemedInput";
import ShowPassword from "../ThemedComponents/ShowPassword";
import useEntrySound from '../customHooks/useEntrySound';

export default function LogInPage() {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { showPassword } = useContext(AppContext);
  const playEntry = useEntrySound();

  const handleSubmit = async e => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      await LogInFunction(email, password);

      navigate("/favorites-page");
      playEntry();
    } catch (err) {
      setError(authErrorToMessage(err.code));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-screen w-full flex flex-col justify-center items-center">
      <p className="text-2xl text-cyan-400 mb-4">Log in</p>
      <form
        onSubmit={handleSubmit}
        className="bg-gray-800 mb-4 flex flex-col items-center p-6 rounded-2xl shadow-lg w-full max-w-md mx-auto space-y-4">
        <ThemedLabel htmlFor="email">Email</ThemedLabel>
        <ThemedInput
          type="email"
          id="email"
          value={email}
          placeholder="email"
          onChange={e => setEmail(e.target.value)}
        />
        <ThemedLabel htmlFor="password">Password</ThemedLabel>
        <div className="relative w-full flex flex-col">
          <ThemedInput
            type={showPassword ? "text" : "password"}
            id="password"
            value={password}
            placeholder="password"
            onChange={e => setPassword(e.target.value)}
            className={`${showPassword ? "text-white" : ""}`}
          />
          <ShowPassword className="absolute top-2 right-4" />
          <NavLink
            className="text-right text-cyan-400 text-sm"
            to="/reset-password-page">
            Forgot password
          </NavLink>
        </div>

        <ThemedButton type="submit" disabled={loading}
        className='w-24 p-3'>
          {loading ? "..." : "Log In"}
        </ThemedButton>
        {error && <p>❌{error}</p>}
        <p>
          Don't have an account yet?{" "}
          <NavLink className="text-cyan-400" to="/sign-up-page">
            Sign up
          </NavLink>
        </p>
        <p>Or</p>
        <GoogleButton />
      </form>
    </div>
  );
}
