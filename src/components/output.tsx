import { outputType } from "../type";

export default function Output({ output, toggleMode }: outputType) {
  return (
    <>
      <div id="line" className="h-screen"></div>
      <div id="output" className={toggleMode ? "dark w-1/2" : "light w-1/2"}>
        <p>{output}</p>
      </div>
    </>
  );
}
