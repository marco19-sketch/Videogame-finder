import { useEffect } from "react";
import useConsent from "../customHooks/useConsent";

function AnalyticsLoader() {
  const { consent } = useConsent();

  useEffect(() => {
    if (consent.allowAnalytics) {
      // Load GA script dynamically
      const script = document.createElement("script");
      script.src = `https://www.googletagmanager.com/gtag/js?id=YOUR_GA_ID`;
      script.async = true;
      document.body.appendChild(script);

      window.dataLayer = window.dataLayer || [];
      function gtag() {
        window.dataLayer.push(arguments);
      }
      window.gtag = gtag;
      gtag("js", new Date());
      gtag("config", "YOUR_GA_ID");
    }
  }, [consent.allowAnalytics]);

  return null;
}

export default AnalyticsLoader;
