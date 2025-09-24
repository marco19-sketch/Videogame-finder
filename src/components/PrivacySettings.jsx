import { useState, useEffect } from "react";

const PrivacySettings = () => {
  const [shareData, setShareData] = useState(false);
  const [allowAnalytics, setAllowAnalytics] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(true);

  // Check localStorage on mount
  useEffect(() => {
    const savedSettings = localStorage.getItem("privacySettings");
    if (savedSettings) {
      const { shareData, allowAnalytics } = JSON.parse(savedSettings);
      setShareData(shareData);
      setAllowAnalytics(allowAnalytics);
      setShowPrivacy(false); // Hide popup if settings exist
    }
  }, []);

  const handleSave = () => {
    localStorage.setItem(
      "privacySettings",
      JSON.stringify({ shareData, allowAnalytics })
    );
    alert("Privacy settings saved!");
    setShowPrivacy(false);
  };

  const handleRejectAll = () => {
    setShareData(false);
    setAllowAnalytics(false);
    localStorage.setItem(
      "privacySettings",
      JSON.stringify({ shareData: false, allowAnalytics: false })
    );
    alert("All privacy options rejected.");
    setShowPrivacy(false);
  };

  return (
    <>
      {showPrivacy && (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            Privacy Settings
          </h2>

          <div className="space-y-4">
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

          <div className="mt-6 space-y-3">
            <button
              onClick={handleSave}
              className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition">
              Save Settings
            </button>

            <button
              onClick={handleRejectAll}
              className="w-full bg-gray-300 text-gray-800 py-2 px-4 rounded hover:bg-gray-400 transition">
              Reject All
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default PrivacySettings;
