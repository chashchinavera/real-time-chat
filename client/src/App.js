import React from "react";
import "./app.css";
import LongPolling from "./LongPolling";
import ServerSentEvent from "./ServerSentEvent";

function App() {
  return (
    <div>
      {/* <LongPolling /> */}
      <ServerSentEvent />
    </div>
  );
}

export default App;
