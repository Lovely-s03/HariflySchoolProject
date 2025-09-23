import React, { useState, useRef, useEffect } from "react";

const DoubtChatBox = () => {
  const [messages, setMessages] = useState([
    { id: 1, sender: "teacher", text: "Welcome to Doubt Class! 👩‍🏫 Ask your questions here." },
  ]);
  const [newMessage, setNewMessage] = useState("");
  const messagesEndRef = useRef(null);

  const handleSend = () => {
    if (!newMessage.trim()) return;

    const studentMsg = {
      id: Date.now(),
      sender: "student",
      text: newMessage,
    };

    setMessages((prev) => [...prev, studentMsg]);
    setNewMessage("");

    // Dummy Teacher reply
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { id: Date.now(), sender: "teacher", text: "Good question! Let me explain it..." },
      ]);
    }, 1000);
  };
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="flex justify-center items-start bg-gradient-to-br p-2 gap-4">
      
      <div className="flex-1 max-w-2xl h-[80vh] flex flex-col border rounded-2xl shadow-xl bg-white overflow-hidden">
        <div className="bg-indigo-600 text-white p-4 flex justify-between items-center">
          <h2 className="text-lg font-bold">📚 Doubt Class</h2>
          <span className="text-xs bg-green-500 px-2 py-1 rounded-full">Teacher Online</span>
        </div>

        <div className="flex-1 p-4 space-y-3 overflow-y-auto bg-gray-50">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex ${msg.sender === "student" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`px-4 py-2 rounded-2xl max-w-[75%] text-sm shadow-md ${
                  msg.sender === "student"
                    ? "bg-indigo-500 text-white rounded-br-none"
                    : "bg-gray-200 text-gray-800 rounded-bl-none"
                }`}
              >
                <span className="block text-xs font-semibold opacity-70 mb-1">
                  {msg.sender === "student" ? "You" : "Teacher"}
                </span>
                {msg.text}
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        <div className="p-3 border-t flex gap-2 bg-white">
          <input
            type="text"
            placeholder="Type your doubt..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            className="flex-1 border rounded-full px-4 py-2 outline-none focus:ring-2 focus:ring-indigo-400 text-sm"
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
          />
          <button
            onClick={handleSend}
            className="bg-[#000080] text-white px-5 py-2 rounded-full hover:bg-indigo-700 transition text-sm"
          >
            Ask
          </button>
        </div>
      </div>

      {/* Sidebar History */}
      <div className="w-80 h-[80vh] border rounded-2xl shadow-xl bg-gray-50 p-4 overflow-y-auto">
        <h3 className="font-bold mb-4 text-gray-700">🕑 Chat History</h3>
        <div className="space-y-3">
          {messages.map((msg) => (
            <div key={msg.id} className="text-sm">
              <span className="font-semibold text-gray-600">
                {msg.sender === "student" ? "You" : "Teacher"}:
              </span>{" "}
              <span className="text-gray-800">{msg.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DoubtChatBox;
