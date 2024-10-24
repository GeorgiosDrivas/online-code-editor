import { outputType } from "../type";

export default function Output({ output, toggleMode }: outputType) {
  return (
    <>
      <div id="output" className={toggleMode ? "dark h-1/2" : "light h-1/2"}>
        <p className="output-head">Output</p>
        <p>{output}</p>
      </div>
    </>
  );
}
