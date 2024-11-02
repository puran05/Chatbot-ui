import React, { useState } from "react";
import "./App.css";
import Chatbot from "./Chatbot";

function App() {
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);

  const toggleChatbot = () => {
    setIsChatbotOpen((prev) => !prev);
  };
  return (
    <>
      {/* //main container */}
      <div className="w-full  p-10 bg-red-400">
        <div className="flex flex-col min-h-screen">
          <div className="bg-gray-800 text-white p-6 text-center">
            <h1 className="text-3xl font-bold">Welcome to My Homepage</h1>
          </div>

          <div className="flex-grow p-6">
            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">About Us</h2>
              <p className="text-gray-700">
                This is a brief introduction to our website. We provide amazing
                content and resources.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">Our Services</h2>
              <p className="text-gray-700">
                Explore our variety of services designed to cater to your needs.
              </p>
            </div>
          </div>

          <div className="bg-gray-800 text-white text-center p-4">
            <p>&copy; 2024 My Website. All rights reserved.</p>
          </div>
        </div>
      </div>
      {/* Container for the chatbot and button */}
      <div className="fixed bottom-4 right-4 flex flex-col items-end">
        {/* Conditionally render the Chatbot above the button */}
        {isChatbotOpen && (
          <div className="mb-4 z-10">
            <Chatbot />
          </div>
        )}

        {/* Button to toggle the chatbot */}
        <button
          onClick={toggleChatbot}
          className="bg-blue-500 text-white px-4 py-2 rounded z-20"
        >
          {isChatbotOpen ? "Close Chat" : "Open Chat"}
        </button>
      </div>
    </>
  );
}

export default App;
