import { useEffect, useState } from "react";

export default function useConsent() {
  const [consent, setConsent] = useState({
    shareData: false,
    allowAnalytics: false,
    timestamp: null,
  });

  // Load saved settings from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem("privacySettings");
    if (saved) {
      setConsent(JSON.parse(saved));
    }
  }, []);

  const saveConsent = (shareData, allowAnalytics) => {
    const data = {
      shareData,
      allowAnalytics,
      timestamp: new Date().toISOString(),
    };
    localStorage.setItem("privacySettings", JSON.stringify(data));
    setConsent(data);

    if (allowAnalytics) {
      console.log("Analytics enabled ✅");
    } else {
      console.log("Analytics disabled ❌");
    }
  };

  return { consent, saveConsent };
}
