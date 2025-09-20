import { useState, useContext } from "react";
import SignUpFunction from "./SignUpFunction";
import { AppContext } from '../context/contextsCreation';
import { useNavigate, NavLink } from "react-router-dom";
import GoogleButton from "./GoogleButton";
import ThemedButton from "../ThemedComponents/ThemedButton";
import ThemedLabel from "../ThemedComponents/ThemedLabel";
import ThemedInput from "../ThemedComponents/ThemedInput";
import ShowPassword from "../ThemedComponents/ShowPassword";

export default function SignUpPage() {
  const [email, setEmail] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(false);
  const navigate = useNavigate();
  const disabled = password !== passwordConfirm || password === "";
  const { showPassword } = useContext(AppContext);
  console.log(
    "password and passwordConfirm and disabled",
    password,
    passwordConfirm,
    disabled
  );

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const user = await SignUpFunction(email, password);
      console.log("User signed up", user);
      setMessage(true);
      // setRetry(false);
    } catch (err) {
      console.error("Error signing up:", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-screen w-full flex flex-col justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-800 mb-4 flex flex-col items-center p-6 rounded-2xl shadow-lg w-full max-w-md mx-auto space-y-4">
        <ThemedLabel htmlFor="email">Email</ThemedLabel>
        <ThemedInput
          type="email"
          id="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <ThemedLabel htmlFor="password">Password</ThemedLabel>
        <div className="relative w-full">
          <ThemedInput
            type={`${showPassword ? "text" : "password"}`}
            id="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            className={`text-${showPassword ? 'white' : ''}`}
          />
          <ShowPassword className="absolute top-2 right-4" />
        </div>
        <ThemedLabel htmlFor="password-confirm">Confirm password</ThemedLabel>
        <ThemedInput
          className="border-2 rounded-sm"
          style={{
            borderColor:
              passwordConfirm === ""
                ? "gray"
                : password !== passwordConfirm
                ? "red"
                : "green",
          }}
          id="password-confirm"
          type="password"
          value={passwordConfirm}
          onChange={e => setPasswordConfirm(e.target.value)}
        />
        {loading && <p>Loading...</p>}
        {error && <p>❌{error}</p>}
        {passwordConfirm && disabled && (
          <p className="text-red-500 text-xl mb-4">Passwords don't match</p>
        )}
        {message && (
          <p>
            Registration successful!
            <br /> To verify your email, check your inbox.
          </p>
        )}

        <ThemedButton
          type="submit"
          style={{
            background: disabled ? "gray" : "",
          }}
          disabled={disabled}>
          Sign Up
        </ThemedButton>
        <p>
          Have already an account?{" "}
          <NavLink to="/log-in-page" className="text-cyan-400">
            Sign in
          </NavLink>
        </p>
        <p>Or</p>
        <GoogleButton />
      </form>

      <ThemedButton
        type="button"
        onClick={e => {
          e.stopPropagation();
          navigate("/home-page");
        }}>
        Home
      </ThemedButton>
    </div>
  );
}
