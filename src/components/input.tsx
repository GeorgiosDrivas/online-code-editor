export default function Input({ input, setInput }: any) {
  return (
    <>
      <div id="input">
        <input
          type="textarea"
          id="inputField"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
    </>
  );
}
