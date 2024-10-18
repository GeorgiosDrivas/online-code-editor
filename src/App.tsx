import { useState } from "react";
import Input from "./components/input";
import Output from "./components/output";
import { API } from "./api";
import "./App.css";
import { languages } from "./constants";
import { Option } from "./type";
import Mode from "./components/mode";
import SelectLanguage from "./components/selectLanguage";

function App() {
  const [output, setOutput] = useState("");
  const [input, setInput] = useState("");
  const [lng, setLanguage] = useState<Option | null>(languages[0]);
  const [toggleMode, setToggleMode] = useState(false);

  const handleRun = async () => {
    try {
      const response = await API.post("/execute", {
        language: lng?.language,
        version: lng?.version,
        files: [
          {
            name: "code.js",
            content: input,
          },
        ],
      });
      setOutput(response.data.run.output);
    } catch (error) {
      console.error("Fetch failed:", error);
    }
  };

  return (
    <>
      <div className="flex flex-col">
        <div className="text-end flex justify-between utils-wrap">
          <SelectLanguage lng={lng} setLanguage={setLanguage} />
          <div className="flex">
            <Mode toggleMode={toggleMode} setToggleMode={setToggleMode} />
            <button id="runButton" onClick={() => handleRun()}>
              Run code
            </button>
          </div>
        </div>
        <div
          className={
            toggleMode
              ? "dark flex flex-row main-wrap"
              : "light flex flex-row main-wrap"
          }
        >
          <Input
            setInput={setInput}
            language={lng?.language}
            toggleMode={toggleMode}
          />
          <div id="line"></div>
          <Output output={output} toggleMode={toggleMode} />
        </div>
      </div>
    </>
  );
}

export default App;
