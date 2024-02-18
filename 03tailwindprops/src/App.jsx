import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <div
      className=" w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className=" fixed flex flex-wrap justify-center bottom-10 inset-x-2 px-3">
        <div className="flex flex-wrap justify-center gap-3 shadow-xl bg-white px-3 py-3 rounded-xl">
          <button
          onClick={() => setColor("red")}
            className="outline-none px-4 py-2 rounded-full text-white shadow-md"
            style={{ backgroundColor: "red" }}
          >
            Red
          </button>

          <button
          onClick={() => setColor("blue")}
            className="outline-none px-4 py-2 rounded-full text-white shadow-md"
            style={{ backgroundColor: "Blue" }}
          >
            Blue
          </button>

          <button
          onClick={() => setColor("green")}
            className="outline-none px-4 py-2 rounded-full text-white shadow-md"
            style={{ backgroundColor: "Green" }}
          >
            Green
          </button>

          <button
          onClick={() => setColor("black")}
            className="outline-none px-4 py-2 rounded-full text-white shadow-md"
            style={{ backgroundColor: "Black" }}
          >
            Black
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
