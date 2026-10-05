import { useEffect, useRef, useState } from "react";
import "./App.css";
import ReactMarkdown from "react-markdown";

const suggestions = [
  "What is React?",
  "What is JavaScript?",
  "What is MERN?",
  "What is an API?",
];

function App() {
  const [input, setInput] = useState("");

  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "bot",
      text: "Hello! 👋 I'm DevBot. Ask me anything about web development.",
      time: new Date(),
    },
  ]);

  const [isTyping, setIsTyping] = useState(false);

  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, isTyping]);

  const sendMessage = async (customMessage = null) => {
    const message = (customMessage || input).trim();

    if (!message) return;

    setMessages((prev) => [
      ...prev,
      {
        id: Date.now(),
        sender: "user",
        text: message,
        time: new Date(),
      },
    ]);

    setInput("");
    setIsTyping(true);

    try {
      const response = await fetch("http://localhost:5000/api/chat", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          message: message,
        }),
      });

      const data = await response.json();

      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          sender: "bot",
          text: data.reply,
          time: new Date(),
        },
      ]);
    } catch (error) {
      console.error("Error:", error);

      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          sender: "bot",
          text: "Sorry, something went wrong. Please try again.",
          time: new Date(),
        },
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  };

  const clearChat = () => {
    setMessages([
      {
        id: Date.now(),
        sender: "bot",
        text: "Chat cleared! 👋 What would you like to ask?",
        time: new Date(),
      },
    ]);
  };

  const formatTime = (date) => {
    return date.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div className="app">
      <div className="chatbot">
        <header className="chat-header">
          <div className="bot-info">
            <div className="bot-avatar">🤖</div>

            <div>
              <h2>DevBot</h2>

              <div className="online-status">
                <span></span>
                Online
              </div>
            </div>
          </div>

          <button className="clear-btn" onClick={clearChat} title="Clear chat">
            🗑️
          </button>
        </header>

        <main className="chat-body">
          <div className="welcome">
            <div className="welcome-icon">✨</div>

            <h1>How can I help?</h1>

            <p>Ask me anything about React, JavaScript or web development.</p>
          </div>

          {messages.map((message) => (
            <div
              key={message.id}
              className={`message-row ${
                message.sender === "user" ? "user-row" : "bot-row"
              }`}
            >
              {message.sender === "bot" && (
                <div className="small-avatar">🤖</div>
              )}

              <div className="message-wrapper">
                <div
                  className={`message ${
                    message.sender === "user" ? "user-message" : "bot-message"
                  }`}
                >
                  <ReactMarkdown>{message.text}</ReactMarkdown>
                </div>

                <span className="message-time">{formatTime(message.time)}</span>
              </div>
            </div>
          ))}

          {isTyping && (
            <div className="message-row bot-row">
              <div className="small-avatar">🤖</div>

              <div className="typing">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          )}

          <div ref={messagesEndRef}></div>
        </main>

        <div className="suggestions">
          {suggestions.map((question) => (
            <button key={question} onClick={() => sendMessage(question)}>
              {question}
            </button>
          ))}
        </div>

        <div className="input-area">
          <input
            type="text"
            placeholder="Ask something..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
          />

          <button className="send-btn" onClick={() => sendMessage()}>
            ➤
          </button>
        </div>

        <div className="footer">Powered by React • AI Chatbot</div>
      </div>
    </div>
  );
}

export default App;
