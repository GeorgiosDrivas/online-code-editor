import { Editor } from "@monaco-editor/react";

export default function Input({ setInput, language }: any) {
  return (
    <>
      <div id="input">
        <Editor
          height="100%"
          defaultLanguage={language}
          onChange={(value) => setInput(value || "")}
        />
      </div>
    </>
  );
}
