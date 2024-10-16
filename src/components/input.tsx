import { Editor } from "@monaco-editor/react";

export default function Input({ setInput, language, toggleMode }: any) {
  return (
    <>
      <div id="input">
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
