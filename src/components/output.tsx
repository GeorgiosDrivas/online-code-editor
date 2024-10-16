export default function Output({ output, toggleMode }: any) {
  return (
    <>
      <div id="output" className={toggleMode ? "dark" : "light"}>
        <p>{output}</p>
      </div>
    </>
  );
}
