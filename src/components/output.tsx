import { outputType } from "../type";

export default function Output({ output, toggleMode }: outputType) {
  return (
    <>
      <div id="output" className={toggleMode ? "dark" : "light"}>
        <p>{output}</p>
      </div>
    </>
  );
}
