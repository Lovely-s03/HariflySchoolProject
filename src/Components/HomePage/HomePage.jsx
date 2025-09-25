import React, { useEffect, useRef, useState } from "react";
import Hero from "./Hero";
import Hero2 from "./Hero2";
import Exam from "./Exam";
import TestimonialSection from "./TestimonialSection";
import StudyResources from "./StudyResources";
import PWFamily from "./PWFamily";
import Result from "./Result";
import Students from "./Students";
import Location from "./Location";
import AppPromoSection from "./AppPromoSection";

const HomePage = () => {
  const [showPermission, setShowPermission] = useState(false);
  const [liveChatEnabled, setLiveChatEnabled] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: "ai", text: "Hi! How can I help you today?" },
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => setShowPermission(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (chatOpen && messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, chatOpen]);

  const handleAllow = () => {
    setShowPermission(false);
    setLiveChatEnabled(true);
  };

  const handleDeny = () => {
    setShowPermission(false);
    setLiveChatEnabled(false);
  };

  const handleSend = async () => {
    if (!input.trim()) return;

    setMessages((msgs) => [...msgs, { sender: "user", text: input }]);
    setInput("");

    try {
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
          input
        )}&key=${process.env.REACT_APP_GOOGLE_API_KEY}`
      );
      const data = await response.json();

      let reply = "AI: I'm just a demo. Ask me anything!";
      if (data.status === "OK" && data.results.length > 0) {
        const location = data.results[0].formatted_address;
        reply = `AI: The location you entered looks like "${location}".`;
      } else if (data.status !== "OK") {
        reply = `AI: Google API error: ${data.status}`;
      }

      setMessages((msgs) => [...msgs, { sender: "ai", text: reply }]);
    } catch (error) {
      setMessages((msgs) => [
        ...msgs,
        { sender: "ai", text: "AI: Sorry, I couldn't fetch data right now." },
      ]);
    }
  };

  return (
    <div>
      {showPermission && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/30">
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-xs w-full text-center m-5">
            <h2 className="font-semibold text-lg mb-2">Permission Required</h2>
            <p className="text-sm text-gray-600 mb-4">
              This app needs permission to access certain features. Please allow
              access for the best experience.
            </p>
            <div className="flex justify-center gap-3">
              <button
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded"
                onClick={handleAllow}
              >
                Allow
              </button>
              <button
                className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded"
                onClick={handleDeny}
              >
                Deny
              </button>
            </div>
          </div>
        </div>
      )}

      {liveChatEnabled && !chatOpen && (
        <button
          className="fixed right-4 bottom-4 z-40 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full shadow-lg flex items-center gap-2 transition animate-bounce"
          style={{ minWidth: 120 }}
          onClick={() => setChatOpen(true)}
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
          </svg>
          Live Chat
        </button>
      )}

      {/* Live Chat Window */}
      {liveChatEnabled && chatOpen && (
        <div className="fixed right-4 bottom-4 z-50 w-80 max-w-full bg-white rounded-xl shadow-2xl flex flex-col">
          <div className="flex items-center justify-between px-4 py-2 bg-green-500 rounded-t-xl">
            <span className="text-white font-semibold">Live Chat AI</span>
            <button
              className="text-white font-semibold"
              onClick={() => setChatOpen(false)}
              title="Close"
            >
              ×
            </button>
          </div>
          <div
            className="flex-1 px-4 py-3 space-y-2 overflow-y-auto"
            style={{ maxHeight: 260 }}
          >
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${
                  msg.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`inline-block px-3 py-2 rounded-xl text-sm ${
                    msg.sender === "ai"
                      ? "bg-gray-200 text-gray-800"
                      : "bg-green-500 text-white"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          <form
            className="flex px-4 py-2 border-t bg-gray-50"
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
          >
            <input
              className="flex-1 px-2 py-1 rounded border border-gray-300 focus:outline-none"
              type="text"
              placeholder="Type your message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button
              className="ml-2 bg-green-500 hover:bg-green-600 text-white px-4 py-1 rounded"
              type="submit"
            >
              Send
            </button>
          </form>
        </div>
      )}
      <Hero />
      <Hero2 />
      <Exam />
      <Location />
      <Students />
      <Result />
      <AppPromoSection />
      <TestimonialSection />
      <StudyResources />
      <PWFamily />
    </div>
  );
};

export default HomePage;
