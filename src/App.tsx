import { useState } from "react";
import Input from "./components/input";
import Output from "./components/output";
import { handleRun } from "./api";
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

  return (
    <>
      <div className="flex flex-col">
        <div className="text-end flex justify-between utils-wrap">
          <SelectLanguage lng={lng} setLanguage={setLanguage} />
          <div className="flex">
            <Mode toggleMode={toggleMode} setToggleMode={setToggleMode} />
            <button
              id="runButton"
              onClick={() => handleRun({ lng, input, setOutput })}
            >
              Run code
            </button>
          </div>
        </div>
        <div
          className={
            toggleMode
              ? "dark flex flex-col main-wrap h-screen"
              : "light flex flex-col main-wrap h-screen"
          }
        >
          <Input
            setInput={setInput}
            language={lng?.language}
            toggleMode={toggleMode}
          />
          <Output output={output} toggleMode={toggleMode} />
        </div>
      </div>
    </>
  );
}

export default App;
