import React, { useState } from "react";
import { ArrowDownCircle, CheckCircle } from "lucide-react";

export default function RedirectToYouTube() {
  const [isClicked, setIsClicked] = useState(false);

  const handleRedirect = () => {
    setIsClicked(true);
    setTimeout(() => {
      window.location.href = "https://www.youtube.com"; // Redirect to YouTube
    }, 1000); // Add delay for animation
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900 to-black">
      <div className="bg-white p-6 rounded-2xl shadow-lg max-w-sm text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">100% UNC Synapse X Remade</h1>
        <p className="text-gray-600 mb-6">
          since synapse x betrayed us i remade there executor and synapse x devs pls don't fucking sue me
        </p>
        <button
          onClick={handleRedirect}
          disabled={isClicked}
          className={`w-full py-3 px-6 text-lg font-medium text-white rounded-full transition-all duration-300 ${
            isClicked
              ? "bg-green-500 cursor-not-allowed scale-95"
              : "bg-blue-600 hover:bg-blue-700 hover:scale-105"
          }`}
        >
          {isClicked ? (
            <>
              <CheckCircle className="inline-block mr-2 h-5 w-5" /> Redirecting...
            </>
          ) : (
            <>
              <ArrowDownCircle className="inline-block mr-2 h-5 w-5" /> Download
            </>
          )}
        </button>
      </div>
    </div>
  );
}
