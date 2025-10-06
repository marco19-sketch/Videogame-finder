import { useState, useEffect } from "react";
import useConsent from "../customHooks/useConsent";

const PrivacySettings = () => {
  const { consent, saveConsent, loaded } = useConsent();
  const [showPrivacy, setShowPrivacy] = useState(!consent.timestamp);
  const [shareData, setShareData] = useState(consent.shareData);
  const [allowAnalytics, setAllowAnalytics] = useState(consent.allowAnalytics);

  // When data is loaded, decide if the modal should show
  useEffect(() => {
    if (loaded) {
      setShareData(consent.shareData);
      setAllowAnalytics(consent.allowAnalytics);
      setShowPrivacy(!consent.timestamp); //only show if never saved
    }
  }, [loaded, consent])

  if (!loaded) return null; // prevent flash before loading

  const handleAcceptAll = () => {
    saveConsent(true, true);
    setShowPrivacy(false);
  };

  const handleRejectAll = () => {
    saveConsent(false, false);
    setShowPrivacy(false);
  };

  const handleSaveCustom = () => {
    saveConsent(shareData, allowAnalytics);
    setShowPrivacy(false);
  };

  return (
    <>
      {showPrivacy && (
        <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 max-w-md w-full p-6 bg-white rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            Privacy Settings
          </h2>
          <p className="text-gray-700 mb-4">
            We use cookies and analytics to improve your experience. You can
            choose your preferences below.
          </p>

          <div className="space-y-4 mb-6">
            <label className="flex items-center space-x-3">
              <input
                type="checkbox"
                checked={shareData}
                onChange={() => setShareData(!shareData)}
                className="form-checkbox h-5 w-5 text-blue-600"
              />
              <span className="text-gray-700">
                Share my data with third parties
              </span>
            </label>

            <label className="flex items-center space-x-3">
              <input
                type="checkbox"
                checked={allowAnalytics}
                onChange={() => setAllowAnalytics(!allowAnalytics)}
                className="form-checkbox h-5 w-5 text-blue-600"
              />
              <span className="text-gray-700">Allow usage analytics</span>
            </label>
          </div>

          <div className="flex flex-col gap-3">
            <button
              onClick={handleAcceptAll}
              className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition">
              Accept All
            </button>

            <button
              onClick={handleRejectAll}
              className="w-full bg-gray-300 text-gray-800 py-2 px-4 rounded hover:bg-gray-400 transition">
              Reject All
            </button>

            <button
              onClick={handleSaveCustom}
              className="w-full bg-cyan-500 text-white py-2 px-4 rounded hover:bg-cyan-600 transition">
              Save Preferences
            </button>
          </div>

          <p className="mt-4 text-gray-500 text-sm">
            Read our{" "}
            <a href="/privacy" className="underline text-cyan-600">
              Privacy Policy
            </a>{" "}
            for more info.
          </p>
        </div>
      )}
    </>
  );
};

export default PrivacySettings;
