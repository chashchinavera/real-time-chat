import React, { useEffect, useState } from "react";
import axios from "axios";

const ServerSentEvent = () => {
  const [messages, setMessages] = useState([]);
  const [value, setValue] = useState("");

  useEffect(() => {
    subscirbe();
  }, []);

  const subscirbe = async () => {
    const eventSource = new EventSource("http://localhost:5000/connect");
    eventSource.onmessage = function (event) {
      const message = JSON.parse(event.data);
      setMessages((prev) => [message, ...prev]);
    };
  };

  const sendMessage = async () => {
    await axios.post("http://localhost:5000/new-messages", {
      message: value,
      id: Date.now(),
    });
  };

  return (
    <div className="center">
      <div>
        <div className="form">
          <input
            type="text"
            onChange={(e) => setValue(e.target.value)}
            value={value}
          />
          <button onClick={sendMessage}>Отправить</button>
        </div>
        <div className="messages">
          {messages.map((m) => (
            <div className="message" key={m.id}>
              {m.message}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServerSentEvent;
