import React, { useState } from "react";

function Chatbot({ toggleChatbot }) {
  const [messages, setMessages] = useState([]);
  const [userMessage, setUserMessage] = useState("");
  const sendMessage = async () => {
    if (!userMessage.trim()) return;

    const newMessages = [...messages, { role: "user", content: userMessage }];
    setMessages(newMessages);

    try {
      const response = await fetch("http://localhost:5000/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: userMessage,
          conversation: newMessages,
        }),
      });
      const data = await response.json();
      if (response.ok) {
        // Append bot response
        setMessages((prevMessages) => [
          ...prevMessages,
          { role: "assistant", content: data.message },
        ]);
      } else {
        console.error(data.error);
        setMessages((prevMessages) => [
          ...prevMessages,
          { role: "assistant", content: "Sorry, something went wrong." },
        ]);
      }
    } catch (error) {
      console.error("Error:", error);
      setMessages((prevMessages) => [
        ...prevMessages,
        { role: "assistant", content: "Unable to connect to server." },
      ]);
    }
    console.log({
      message: userMessage,
      conversation: newMessages,
    });

    //clears input
    setUserMessage("");
  };
  return (
    <>
      <div
        className="bg-white shadow-lg rounded-lg fixed right-2 bottom-4"
        style={{ width: "400px" }}
      >
        {/* chatbot headerdiv */}
        <div className="border-b-2 px-2 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center ">
              <img
                src="https://fff4growth.com/wp-content/uploads/2024/08/DarkerCoolor.png"
                alt="logo"
                className="w-20"
              />
              <span className="ml-8 font-bold">FFF Growth </span>
            </div>
            <button
              className="btn btn-rounded align mr-2"
              onClick={toggleChatbot}
            >
              <i className="fas fa-times" />
            </button>
          </div>
        </div>
        {/* Chatbot Body */}
        <div className="h-80 flex flex-col max-w-md px-2 mb-2 mt-2 overflow-y-auto">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex ${
                msg.role === "user" ? "justify-end" : "justify-start"
              } mb-2`}
            >
              {msg.role === "assistant" && (
                <img
                  src="https://images.unsplash.com/photo-1727160930825-97245483a509?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="assistant"
                  className="h-10 w-10 rounded-full mr-2 object-cover object-top "
                />
              )}
              <span
                className={`px-4 py-2 rounded-lg ${
                  msg.role === "user"
                    ? "bg-gray-200 text-black"
                    : "bg-blue-500 text-white"
                }`}
              >
                {msg.content}
              </span>
            </div>
          ))}
        </div>

        {/* chatbot footer div */}
        <div className="border-t-2 flex items-center py-4 px-2">
          <textarea
            value={userMessage}
            onChange={(e) => setUserMessage(e.target.value)}
            placeholder="Chat with us.."
            className="flex-1 rounded-lg px-4 py-2 border-2 mr-2 outline-none"
          ></textarea>
          <button
            onClick={sendMessage}
            className="bg-black py-2 text-white px-2 rounded"
          >
            Send
          </button>
        </div>
      </div>
      ;
    </>
  );
}

export default Chatbot;
