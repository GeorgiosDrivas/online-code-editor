import { useState } from "react";
import Input from "@src/components/input";
import Output from "@src/components/output";
import { handleRun } from "@src/api";
import "@src/App.css";
import { languages } from "@src/constants";
import { Option } from "@src/type";
import Mode from "@src/components/mode";
import SelectLanguage from "@src/components/selectLanguage";

function App() {
  const [output, setOutput] = useState("");
  const [input, setInput] = useState("");
  const [lng, setLanguage] = useState<Option | null>(languages[0]);
  const [toggleMode, setToggleMode] = useState(false);

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
          <SelectLanguage
            toggleMode={toggleMode}
            lng={lng}
            setLanguage={setLanguage}
          />
          <div className="flex">
            <Mode toggleMode={toggleMode} setToggleMode={setToggleMode} />
            <button
              id="runButton"
              onClick={() => handleRun({ lng, input, setOutput })}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="feather feather-play"
              >
                <polygon points="5 3 19 12 5 21 5 3"></polygon>
              </svg>
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
