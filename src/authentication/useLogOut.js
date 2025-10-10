import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

export default function useLogOut() {
  const navigate = useNavigate();

  const logOut = async () => {
    try {
      await signOut(auth);
      navigate("log-in-page");

      console.log("User logged out");
    } catch (err) {
      console.error("Log out error:", err);
      throw err;
    }
  };
  return logOut;
}
