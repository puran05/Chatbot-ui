import React from "react";

function Chatbot({ toggleChatbot }) {
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
        {/* chatbot body div */}
        <div className="h-80 flex flex-col max-w-md px-2 mb-2 mt-2">
          {/* chatbot text */}
          <div className=" flex flex-col mt-4 space-y-2 text-center">
            <span className="text-gray-600 text-sm">
              Chat started at 8:23 AM{" "}
            </span>
          </div>
          <div className="flex flex-col space-y-4 items-start">
            <span className="bg-blue-500 px-2 py-4 rounded-tl-xl rounded-b-xl mb-2 mt-4 text-white">
              Hi how are you Hi how are you Hi how are youv
            </span>
          </div>
          {/* chatbot user text */}
          <div className="flex flex-col items-end ml-6">
            <span className="bg-gray-200 px-2 py-4  mb-2 mt-2 rounded-b-xl rounded-tr-xl text-black">
              I need a ticketI a ticket Hi how are you Hi how are you Hi how are
              youv a ticketI a ticket Hi how are you Hi how are you Hi how are
              youv
            </span>
          </div>
        </div>

        {/* chatbot footer div */}
        <div className="border-t-2 flex items-center py-4 px-2">
          <textarea
            type="text"
            placeholder="Chat with us.."
            className="flex-1 rounded-lg px-4 py-2 border-2 mr-2 outline-none"
          ></textarea>
          <button
            type="submit"
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
