import { useState } from "react";
import Confetti from "react-confetti";
import { useWindowSize } from "@react-hook/window-size";

export function IntegrationDashboard() {
  const [integrationStatus, setIntegrationStatus] = useState("pending");
  const [showIntegrationModal, setShowIntegrationModal] = useState(false);
  const [windowWidth, windowHeight] = useWindowSize();
  const [isTesting, setIsTesting] = useState(false);

  const handleTestIntegration = () => {
    setIsTesting(true); // Show testing state

    setTimeout(() => {
      // Simulating API check
      const success = Math.random() > 0.3; // 70% success rate

      if (success) {
        setIntegrationStatus("success");
      } else {
        setIntegrationStatus("failed");
      }

      setIsTesting(false);
    }, 2000);
  };

  return (
    <div className=" w-[80vw] md:max-w-2xl mx-auto mt-8 text-center">
      {!showIntegrationModal && integrationStatus === "success" && (
        <Confetti width={windowWidth} height={windowHeight} />
      )}

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
        <button
          className="p-6 border rounded hover:bg-gray-50 cursor-pointer"
          onClick={() => window.open("https://example.com", "_blank")}
        >
          Test Chatbot
        </button>

        <button
          className="p-6 border rounded hover:bg-gray-50 cursor-pointer"
          onClick={() => setShowIntegrationModal(true)}
        >
          Integrate on Website
        </button>

        <button
          className={`p-8 border rounded cursor-pointer transition-all ${
            isTesting ? "bg-gray-300 cursor-not-allowed" : "hover:bg-gray-50"
          }`}
          onClick={handleTestIntegration}
          disabled={isTesting}
        >
          {isTesting
            ? "Testing..."
            : integrationStatus === "success"
            ? "Integration Successful"
            : "Test Integration"}
        </button>
      </div>

      {showIntegrationModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-2 md:p-6 rounded-lg w-[90vw] md:w-[60vw] lg:w-[40vw]">
            <h3 className="text-lg font-semibold mb-4">Integration Options</h3>
            <div className="space-y-4">
              <div>
                <p className="text-sm mb-2">
                  Add this code to your website's &lt;head&gt;:
                </p>
                <div className="bg-gray-100 py-2 md:p-4 rounded relative space-x-10">
                  <code className=" text-xs  md:text-sm">
                    &lt;script src="chatbot.js"&gt;&lt;/script&gt;
                  </code>
                  <button
                    onClick={() =>
                      navigator.clipboard.writeText(
                        '<script src="chatbot.js"></script>'
                      )
                    }
                    className="absolute text-sm py-1 right-2 text-blue-400 hover:text-blue-700 cursor-pointer "
                  >
                    Copy
                  </button>
                </div>
              </div>
              <button
                className="w-full bg-gray-100 p-3 rounded hover:bg-gray-200 cursor-pointer"
                onClick={() =>
                  (window.location.href = "mailto:developer@example.com")
                }
              >
                Email Instructions
              </button>
            </div>
            <button
              className="mt-4 text-gray-500 hover:text-gray-600 "
              onClick={() => setShowIntegrationModal(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {!showIntegrationModal && integrationStatus === "success" ? (
        <div className="mt-8 ">
          <h2 className="text-2xl font-bold text-green-600 mb-4">
            Integration Successful! 🎉
          </h2>
          <div className="gap-4  flex flex-col md:flex-row justify-center items-center">
            <button className="bg-blue-600 text-white px-6 py-2 w-[40vw] md:w-[30vw] rounded hover:bg-blue-700 cursor-pointer">
              Admin Panel
            </button>
            <button className="bg-green-600 text-white px-6 py-2 w-[40vw] md:w-[30vw] rounded hover:bg-green-700 cursor-pointer">
              Start Chatting
            </button>
            <button className="bg-green-600 text-white px-6 py-2  rounded hover:bg-green-700 cursor-pointer">
              <img src="/share.svg" alt="" className="h-6 w-6  " />
            </button>
          </div>
        </div>
      ) : (
        <h2 className="text-2xl font-bold text-green-600 mb-4">
          Unsccessful Integration!
        </h2>
      )}
    </div>
  );
}
