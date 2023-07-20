import "./index.css";
import Measurement from "./components/Measurement";
import { useState } from "react";

function App() {
  const [input, setInput] = useState(0);
  const [status, setStatus] = useState(true);

  return (
    <div
      className="App"
      style={{
        background: status ? "black" : "white",
        color: status ? "white" : "black",
      }}
    >
      <div className="container">
        <div className="left">
          <div
            className="circle"
            style={{ backgroundColor: status ? "orange" : "green" }}
            onClick={() => setStatus(!status)}
          >
            <div
              className="innerCircle"
              style={{
                backgroundColor: status ? "blue" : "orange",
                background: `linear-gradient(blue, purple)`,
                transform: status ? `translateX(0%)` : `translateX(100%)`,
              }}
            ></div>
          </div>
          <input
            type="text"
            placeholder="0"
            onChange={(e) => setInput(e.target.value)}
            value={input}
            style={{
              background: status ? "black" : "white",
              color: status ? "white" : "black",
            }}
          />
        </div>
        <div className="right">
          <Measurement title="cm" value={input} />
          <Measurement title="mm" value={input * 10} />
          <Measurement title="m" value={input / 100} />
          <Measurement title="km" value={input / 100000} />
        </div>
      </div>
    </div>
  );
}

export default App;
