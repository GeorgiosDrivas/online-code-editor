import { useState } from "react";
import Input from "./components/input";
import Output from "./components/output";
import { handleRun } from "./api";
import "./App.css";
import { languages } from "./constants";
import { Option } from "./type";
import Mode from "./components/mode";
import SelectLanguage from "./components/selectLanguage";

export default function App() {
  const [output, setOutput] = useState("");
  const [input, setInput] = useState("");
  const [lng, setLanguage] = useState<Option | null>(languages[0]);
  const [toggleMode, setToggleMode] = useState(false);
  const clearCode = input.length > 0;

  const handleClearCode = () => {
    setInput("");
  };

  return (
    <>
      <div className="flex flex-col">
        <div
          className={
            toggleMode
              ? "text-end flex justify-between utils-wrap dark"
              : "text-end flex justify-between utils-wrap light"
          }
        >
          <div>
            <SelectLanguage
              toggleMode={toggleMode}
              lng={lng}
              setLanguage={setLanguage}
            />
            {clearCode && (
              <button onClick={() => handleClearCode()} id="clear-btn">
                Clear code
              </button>
            )}
          </div>
          <div className="flex">
            <button
              id="runButton"
              className="me-5"
              onClick={() => handleRun({ lng, input, setOutput })}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-play"
              >
                <polygon points="5 3 19 12 5 21 5 3"></polygon>
              </svg>
            </button>
            <Mode toggleMode={toggleMode} setToggleMode={setToggleMode} />
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
            input={input}
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
