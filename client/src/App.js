import React from "react";
import "./app.css";
import LongPolling from "./LongPolling";
import ServerSentEvent from "./ServerSentEvent";
import WebSocket from "./WebSocket";

function App() {
  return (
    <div>
      {/* <LongPolling /> */}
      {/* <ServerSentEvent /> */}
      <WebSocket />
    </div>
  );
}

export default App;
