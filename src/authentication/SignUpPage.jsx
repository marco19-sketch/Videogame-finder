import { useState } from "react";
import SignUpFunction from "./SignUpFunction";

export default function SignUpPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const user = await SignUpFunction(email, password);
      console.log("User signed up", user);
    } catch (err) {
      console.error("Error signing up:", err);
      setError(err);
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
        />
        {loading && (<p>Loading...</p>)}
        {error && (<p>{error}</p>)}
        <button type='submit'>Sign Up</button>
      </form>
    </>
  );
}
