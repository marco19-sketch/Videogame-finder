import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { auth } from "../firebase";
import { applyActionCode } from "firebase/auth";

export default function EmailVerificationPage() {
  const [status, setStatus] = useState("Verifying...");
  const navigate = useNavigate();

  useEffect(() => {
    //Get ooCode fro URL
    const urlParams = new URLSearchParams(window.location.search);
    const oobCode = urlParams.get("oobCode");

    if (!oobCode) {
      setStatus("Invalid verification link");
      return;
    }

    //Apply the verification code
    applyActionCode(auth, oobCode)
      .then(() => {
        setStatus("✅ Your email has been verified! You can now log in.");
      })
      .catch(error => {
        console.error("Error verifying email:", error);
        setStatus("❌ Verification failed or link expired.");
      });
  }, []);

  return (
    <>
    <div className="flex flex-col justify-center items-center">
      <p className="text-lg text-white">{status}</p>
      <button
        className="mb-6 mt-6 px-6 py-2 rounded-lg 
        font-semibold bg-gradient-to-r
         from-cyan-500 to-blue-600 text-white hover:from-cyan-400
          hover:to-blue-500 transition-colors duration-300"
        type="button"
        onClick={() => navigate("/home-page")}>
        Home
      </button>
    </div>
    </>
  );
}
