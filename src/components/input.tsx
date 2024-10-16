import { Editor } from "@monaco-editor/react";
import { InputType } from "../type";

export default function Input({ setInput, language, toggleMode }: InputType) {
  return (
    <>
      <div id="input" className="w-1/2">
        <Editor
          height="100%"
          defaultLanguage={language}
          theme={toggleMode ? "vs-dark" : "vs"}
          onChange={(value) => setInput(value || "")}
        />
      </div>
    </>
  );
}
