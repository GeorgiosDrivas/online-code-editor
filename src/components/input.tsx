import { Editor } from "@monaco-editor/react";
import { InputType } from "../type";

export default function Input({
  input,
  setInput,
  language,
  toggleMode,
}: InputType) {
  return (
    <>
      <div id="input" className="h-1/2">
        <Editor
          defaultLanguage={language}
          options={{
            minimap: { enabled: false },
          }}
          value={input}
          theme={toggleMode ? "vs-dark" : "vs"}
          onChange={(value) => setInput(value || "")}
        />
      </div>
    </>
  );
}
