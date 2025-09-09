import { useState } from "react";
import SignUpFunction from "./SignUpFunction";
import { useNavigate } from "react-router-dom";

export default function SignUpPage() {
  const [email, setEmail] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(false);
  // const [retry, setRetry] = useState(false);
  const navigate = useNavigate();
  // const [disabled, setDisabled] = useState(true);
  const disabled = password !== passwordConfirm || password === '';
  console.log("password and passwordConfirm and disabled", password, passwordConfirm, disabled);

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    setError("");
    // setDisabled(true);
    // setRetry(false);

    // if (password === passwordConfirm) {
    //   setPassword(password);
    //   setDisabled(false);
    // } else {
    //   setError("Passwords don't match");
    //   // setRetry(true);
    //   setPassword("");
    //   setPasswordConfirm("");
    //   setPassword("");
    //   return;
    // }
    

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
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          // value={password}
          // onChange={e => setPassword(e.target.value)}
        />
        <label htmlFor="password-confirm">Confirm password</label>
        <input
        className='border-2 rounded-sm'
          style={{borderColor: passwordConfirm === '' ? 'gray' : password !== passwordConfirm ? 'red' : 'green'}}
          id="password-confirm"
          type="password"
          value={passwordConfirm}
          onChange={e => setPasswordConfirm(e.target.value)}
        />
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        <button
          type="submit"
          className="mt-6 px-6 py-2 rounded-lg font-semibold "
          // "bg-gradient-to-r from-purple-500 to-pink-600 text-white hover:from-purple-400 hover:to-pink-500 transition-colors duration-300"
          style={{
            background: disabled
              ?  "gray"
              : "linear-gradient(to right,  #8b5cf6, #db2777)",
              
            color: "white",
            borderRadius: "0.5rem",
            fontWeight: "600",
            padding: "0.5rem 1.5rem", // py-2 px-6
            marginTop: "1.5rem", // mt-6
            transition: "background-color 300ms, color 300ms",
            cursor: disabled ? "not-allowed" : "pointer",
            opacity: disabled ? 0.7 : 1
          }}
          disabled={disabled}>
          Sign Up
        </button>
        {/* {retry && (
          <button
            className="mt-6 px-6 py-2 rounded-lg font-semibold bg-gradient-to-r from-purple-500 to-pink-600 text-white hover:from-purple-400 hover:to-pink-500 transition-colors duration-300"
            type="submit">
            Retry
          </button>
        )} */}
      </form>
      {message && (
        <p>
          Registration successful!
          <br /> To verify your email, check your inbox.
        </p>
      )}
      {passwordConfirm && disabled && <p>Passwords don't match</p>}
      <button
        className="mt-6 px-6 py-2 rounded-lg font-semibold bg-gradient-to-r from-purple-500 to-pink-600 text-white hover:from-purple-400 hover:to-pink-500 transition-colors duration-300"
        type="button"
        onClick={e => {
          e.stopPropagation();
          navigate("/home");
        }}>
        Home
      </button>
    </>
  );
}
