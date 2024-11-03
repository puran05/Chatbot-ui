import React, { useState } from "react";
import "./App.css";
import Chatbot from "./Chatbot";

function App() {
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);
  const [isButtonHovered, setIsButtonHovered] = useState(false);

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
      {/* <div className="fixed bottom-4 right-4 flex flex-col items-end  bg-white rounded-full p-5"> */}
      {/* Conditionally render the Chatbot above the button */}
      <div className="fixed bottom-4 right-4 flex flex-col items-end">
        {isChatbotOpen && (
          <div className="mb-4 z-20">
            <Chatbot toggleChatbot={toggleChatbot} />
          </div>
        )}

        {/* Button to toggle the chatbot */}
        {!isChatbotOpen && (
          <button
            onClick={toggleChatbot}
            onMouseEnter={() => setIsButtonHovered(true)}
            onMouseLeave={() => setIsButtonHovered(false)}
            className="fixed right-2 bottom-4  text-white bg-white p-5 rounded-full hover:transition duration-200 z-10"
          >
            <i
              className={`fas ${
                isButtonHovered ? "fa-pen" : "fa-comment-dots"
              } fa-xl text-black transition-all duration-1000`}
            ></i>
          </button>
        )}
        {/* </div> */}
      </div>
    </>
  );
}

export default App;
