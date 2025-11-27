import React, { useState } from "react";

const personalInfo = {
  name: "Nancy Kumari",
  location: "Berlin, India",
  skills: ["PHP (Laravel)", "MERN Stack", "React", "Node.js"],
  experience: "3+ years in PHP and MERN development",
  projects: [
    {
      name: "Ticket Management System",
      tech: "Laravel, MySQL",
      description: "A system to manage tickets for internal tasks."
    },
    {
      name: "Portfolio Website",
      tech: "React, TailwindCSS",
      description: "My personal portfolio showcasing projects."
    }
  ]
};

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const getBotReply = (question) => {
    // Convert question to lowercase
    const q = question.toLowerCase();

    // Simple rules-based matching
    if (q.includes("name")) return `My name is ${personalInfo.name}.`;
    if (q.includes("location")) return `I am based in ${personalInfo.location}.`;
    if (q.includes("skills")) return `I have experience in: ${personalInfo.skills.join(", ")}.`;
    if (q.includes("experience")) return personalInfo.experience;
    if (q.includes("projects")) {
      return personalInfo.projects.map(p => `${p.name} (${p.tech}): ${p.description}`).join("\n");
    }
    return "Sorry, I can only answer questions about me, my skills, and projects.";
  };

  const sendMessage = () => {
    if (!input.trim()) return;

    const userMessage = { sender: "user", text: input };
    setMessages([...messages, userMessage]);

    const botMessage = { sender: "bot", text: getBotReply(input) };
    setMessages(prev => [...prev, botMessage]);

    setInput("");
  };

  return (
    <div style={{ width: 400, margin: "20px auto", fontFamily: "Arial" }}>
      <div style={{ height: 400, overflowY: "auto", border: "1px solid #ccc", padding: 10, borderRadius: 10, background: "#fafafa" }}>
        {messages.map((msg, i) => (
          <p key={i} style={{ textAlign: msg.sender === "user" ? "right" : "left", background: msg.sender === "user" ? "#e0f7fa" : "#ffe0b2", padding: "8px 12px", borderRadius: 10, margin: "8px 0" }}>
            {msg.text}
          </p>
        ))}
      </div>
      <div style={{ display: "flex", marginTop: 10 }}>
        <input style={{ flex: 1, padding: 10, border: "1px solid #ccc", borderRadius: 5 }} value={input} onChange={(e) => setInput(e.target.value)} placeholder="Ask about me..." />
        <button style={{ marginLeft: 10, padding: 10, border: "none", background: "#0288d1", color: "white", borderRadius: 5, cursor: "pointer" }} onClick={sendMessage}>
          Send
        </button>
      </div>
    </div>
  );
};

export default Chatbot;
