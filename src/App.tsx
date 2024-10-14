import "./App.css";
import Input from "./components/input";
import Output from "./components/output";

// API: https://emkc.org/api/v2/piston/

function App() {
  return (
    <>
      <div className="flex flex-row">
        <Input />
        <div id="line"></div>
        <Output />
      </div>
    </>
  );
}

export default App;
