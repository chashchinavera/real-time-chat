import React, { useEffect, useState } from "react";
import axios from "axios";

const LongPolling = () => {
  const [messages, setMessages] = useState([]);
  const [value, setValue] = useState("");

  useEffect(() => {
    subscirbe();
  }, []);

  const subscirbe = async () => {
    try {
      const { data } = await axios.get("http://localhost:5000/get-messages");
      setMessages((prev) => [data, ...prev]);
      await subscirbe();
    } catch (e) {
      setTimeout(() => {
        subscirbe();
      }, 500);
    }
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

export default LongPolling;
