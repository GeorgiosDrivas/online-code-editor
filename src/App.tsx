import { useState } from "react";
import Input from "./components/input";
import Output from "./components/output";
import { API } from "./api";
import "./App.css";
import { languages } from "./constants";

interface Option {
  id: number;
  language: string;
  version: string;
}

function App() {
  const [output, setOutput] = useState("");
  const [input, setInput] = useState("");
  const [lng, setLanguage] = useState<Option | null>(languages[0]);

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

      // console.log(response);
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
          <button id="runButton" onClick={() => handleRun()}>
            Run code
          </button>
        </div>
        <div className="flex flex-row main-wrap">
          <Input input={input} setInput={setInput} language={lng?.language} />
          <div id="line"></div>
          <Output output={output} />
        </div>
      </div>
    </>
  );
}

export default App;
