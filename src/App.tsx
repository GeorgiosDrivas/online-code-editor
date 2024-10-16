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
              {toggleMode ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40px"
                  height="40px"
                  viewBox="0 0 24 24"
                  fill="#387478"
                  className="me-5"
                >
                  <g id="Light">
                    <g>
                      <path d="M12,18.09A6.09,6.09,0,1,1,18.09,12,6.1,6.1,0,0,1,12,18.09ZM12,6.91A5.09,5.09,0,1,0,17.09,12,5.1,5.1,0,0,0,12,6.91Z" />
                      <path d="M11.5,2.568v1.6a.5.5,0,1,0,1,0v-1.6a.5.5,0,1,0-1,0Z" />
                      <path d="M12.5,21.432v-1.6a.5.5,0,0,0-1,0v1.6a.5.5,0,1,0,1,0Z" />
                      <path d="M21.432,11.5h-1.6a.5.5,0,0,0,0,1h1.6a.5.5,0,1,0,0-1Z" />
                      <path d="M2.568,12.5h1.6a.5.5,0,1,0,0-1h-1.6a.5.5,0,1,0,0,1Z" />
                      <path d="M18.316,4.977l-.992.992-.141.141a.514.514,0,0,0-.146.353.508.508,0,0,0,.146.354.5.5,0,0,0,.354.146.515.515,0,0,0,.353-.146l.992-.992.141-.141a.515.515,0,0,0,.147-.354.508.508,0,0,0-.147-.353.5.5,0,0,0-.353-.147.522.522,0,0,0-.354.147Z" />
                      <path d="M5.684,19.023l.992-.992.141-.141a.514.514,0,0,0,.146-.353.508.508,0,0,0-.146-.354.5.5,0,0,0-.354-.146.515.515,0,0,0-.353.146l-.992.992-.141.141a.515.515,0,0,0-.147.354.508.508,0,0,0,.147.353.5.5,0,0,0,.353.147.522.522,0,0,0,.354-.147Z" />
                      <path d="M19.023,18.316l-.992-.992-.141-.141a.514.514,0,0,0-.353-.146.508.508,0,0,0-.354.146.5.5,0,0,0-.146.354.515.515,0,0,0,.146.353l.992.992.141.141a.515.515,0,0,0,.354.147.508.508,0,0,0,.353-.147.5.5,0,0,0,.147-.353.522.522,0,0,0-.147-.354Z" />
                      <path d="M4.977,5.684l.992.992.141.141a.514.514,0,0,0,.353.146.508.508,0,0,0,.354-.146.5.5,0,0,0,.146-.354.515.515,0,0,0-.146-.353l-.992-.992-.141-.141A.515.515,0,0,0,5.33,4.83a.508.508,0,0,0-.353.147.5.5,0,0,0-.147.353.522.522,0,0,0,.147.354Z" />
                    </g>
                  </g>
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30px"
                  height="30px"
                  viewBox="0 0 48 48"
                  className="me-5 mb-2"
                  fill="#387478"
                >
                  <defs></defs>
                  <path d="m32.8,29.3c-8.9-.8-16.2-7.8-17.5-16.6-.3-1.8-.3-3.7,0-5.4.2-1.4-1.4-2.3-2.5-1.6C6.3,9.7,2.1,16.9,2.5,25c.5,10.7,9,19.5,19.7,20.4,10.6.9,19.8-6,22.5-15.6.4-1.4-1-2.6-2.3-2-2.9,1.3-6.1,1.8-9.6,1.5Z" />
                </svg>
              )}
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
