import { useState } from "react";
import "./App.css";
import Input from "./components/input";
import Output from "./components/output";
import axios from "axios";

// API: https://emkc.org/api/v2/piston/

function App() {
  const API = axios.create({
    baseURL: "https://emkc.org/api/v2/piston",
  });

  const [output, setOutput] = useState("");
  const [input, setInput] = useState("");

  const handleRun = async () => {
    try {
      const response = await API.post("/execute", {
        language: "javascript",
        version: "18.15.0",
        files: [
          {
            name: "code.js",
            content: input,
          },
        ],
      });

      // console.log(response);
      setOutput(response.data.run.output);
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <>
      <div className="flex flex-col">
        <div className="text-end">
          <button id="runButton" onClick={() => handleRun()}>
            Run code
          </button>
        </div>
        <div className="flex flex-row main-wrap">
          <Input input={input} setInput={setInput} />
          <div id="line"></div>
          <Output output={output} />
        </div>
      </div>
    </>
  );
}

export default App;
