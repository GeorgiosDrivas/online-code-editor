import { useState } from "react";
import Input from "./components/input";
import Output from "./components/output";
import { API } from "./api";
import "./App.css";
import { languages } from "./constants";
import { Option } from "./type";

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
          <select
            id="selected-language"
            value={lng?.language}
            onChange={(e) =>
              setLanguage(
                languages.find(
                  (item: Option) => item.language === e.target.value
                ) || languages[0]
              )
            }
          >
            {languages.map((option) => (
              <option value={option.language} key={option.id}>
                {option.language}
              </option>
            ))}
          </select>
          <div className="flex">
            <button onClick={() => setToggleMode((prv) => !prv)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="35px"
                className="me-5 mb-2"
                height="35px"
                viewBox="0 -5 50 50"
              >
                <title>dark-mode</title>
                <g id="Layer_2" data-name="Layer 2">
                  <g id="Icons">
                    <g>
                      <rect width="20" height="20" fill="none" />
                      <g>
                        <path d="M14,24A10,10,0,0,0,24,34V14A10,10,0,0,0,14,24Z" />
                        <path d="M24,2A22,22,0,1,0,46,24,21.9,21.9,0,0,0,24,2ZM6,24A18.1,18.1,0,0,1,24,6v8a10,10,0,0,1,0,20v8A18.1,18.1,0,0,1,6,24Z" />
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
            </button>
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
            input={input}
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
