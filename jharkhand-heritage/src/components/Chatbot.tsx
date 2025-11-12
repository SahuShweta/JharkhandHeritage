import React, { useState } from "react";

const Chatbot = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {open && (
        <div className="bg-white p-4 w-80 h-96 shadow-2xl rounded-2xl border border-gray-200 mb-3">
          <div className="flex justify-between items-center border-b pb-2 mb-2">
            <h3 className="font-semibold text-green-700">AI Tourist Guide</h3>
            <button onClick={() => setOpen(false)}>✖</button>
          </div>
          <div className="text-sm text-gray-600 overflow-y-auto h-64">
            <p>Hello! Ask me about tourist places, culture, or history of Jharkhand.</p>
          </div>
          <input
            type="text"
            placeholder="Ask something..."
            className="border w-full mt-3 p-2 rounded-lg"
          />
        </div>
      )}
      <button
        onClick={() => setOpen(!open)}
        className="bg-gradient-to-r from-green-700 to-orange-500 text-white px-5 py-3 rounded-full shadow-lg hover:opacity-90"
      >
        💬 AI Guide
      </button>
    </div>
  );
};

export default Chatbot;