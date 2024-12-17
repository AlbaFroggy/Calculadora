import React, { useState } from "react";

function Calculator() {
  const [result, setResult] = useState("");

  const handleClick = (e) => setResult(result.concat(e.target.id));
  const clear = () => setResult("");
  const deleteElement = () => setResult(result.slice(0, -1));
  const calculate = () => {
    try {
      let resultValue = eval(result);
      // Redondear el resultado a 2 decimales
      setResult(parseFloat(resultValue.toFixed(8)).toString());
    } catch (error) {
      setResult("Invalid");
    }
  };

  return (
    <div className="bg-[#373147] border border-purple-600 w-80 mx-auto mt-20 p-4 rounded-lg shadow-lg">
      {/* Input */}
      <input
        type="text"
        value={result || "0"}
        disabled
        className=" bg-white border border-purple-600 rounded-md w-full text-right py-1 px-5 text-2xl bg-transparent text-purple-900"
      />

      {/* Buttons */}
      <div className="grid grid-cols-4 gap-y-4 gap-x-3 mt-4">
        {/* Primera fila */}
        <button
          className="bg-[#2c2995] text-white rounded-lg p-2 transition duration-300 active:-translate-y-1 text-xl "
          onClick={clear}
        >
          AC
        </button>
        <button
          className="bg-[#2c2995] text-white rounded-lg p-2 transition duration-300 active:-translate-y-1 text-xl"
          onClick={deleteElement}
        >
          DE
        </button>
        <button
          id="."
          className="bg-[#9e47aa] text-white rounded-lg p-2 transition duration-300 active:-translate-y-1 text-xl"
          onClick={handleClick}
        >
          .
        </button>
        <button
          id="/"
          className="bg-[#9e47aa] text-white rounded-lg p-2 transition duration-300 active:-translate-y-1 text-xl"
          onClick={handleClick}
        >
          /
        </button>

        {/* Segunda fila */}
        <button
          id="7"
          className="bg-white text-purple-900 rounded-lg p-2 transition duration-300 active:-translate-y-1 text-xl"
          onClick={handleClick}
        >
          7
        </button>
        <button
          id="8"
          className="bg-white text-purple-900 rounded-lg p-2 transition duration-300 active:-translate-y-1 text-xl"
          onClick={handleClick}
        >
          8
        </button>
        <button
          id="9"
          className="bg-white text-purple-900 rounded-lg p-2 transition duration-300 active:-translate-y-1 text-xl"
          onClick={handleClick}
        >
          9
        </button>
        <button
          id="*"
          className="bg-[#9e47aa] text-white rounded-lg p-2 transition duration-300 active:-translate-y-1 text-xl"
          onClick={handleClick}
        >
          *
        </button>

        {/* Tercera fila */}
        <button
          id="4"
          className="bg-white text-purple-900 rounded-lg p-2 transition duration-300 active:-translate-y-1 text-xl"
          onClick={handleClick}
        >
          4
        </button>
        <button
          id="5"
          className="bg-white text-purple-900 rounded-lg p-2 transition duration-300 active:-translate-y-1 text-xl"
          onClick={handleClick}
        >
          5
        </button>
        <button
          id="6"
          className="bg-white text-purple-900 rounded-lg p-2 transition duration-300 active:-translate-y-1 text-xl"
          onClick={handleClick}
        >
          6
        </button>
        <button
          id="-"
          className="bg-[#9e47aa] text-white rounded-lg p-2 transition duration-300 active:-translate-y-1 text-xl"
          onClick={handleClick}
        >
          -
        </button>

        {/* Cuarta fila */}
        <button
          id="1"
          className="bg-white text-purple-900 rounded-lg p-2 transition duration-300 active:-translate-y-1 text-xl"
          onClick={handleClick}
        >
          1
        </button>
        <button
          id="2"
          className="bg-white text-purple-900 rounded-lg p-2 transition duration-300 active:-translate-y-1 text-xl"
          onClick={handleClick}
        >
          2
        </button>
        <button
          id="3"
          className="bg-white text-purple-900 rounded-lg p-2 transition duration-300 active:-translate-y-1 text-xl"
          onClick={handleClick}
        >
          3
        </button>
        <button
          id="+"
          className="bg-[#9e47aa] text-white rounded-lg p-2 transition duration-300 active:-translate-y-1 text-xl"
          onClick={handleClick}
        >
          +
        </button>

        {/* Última fila */}
        <button
          id="00"
          className="bg-white text-purple-900 rounded-lg p-2 transition duration-300 active:-translate-y-1 text-xl"
          onClick={handleClick}
        >
          00
        </button>
        <button
          id="0"
          className="bg-white text-purple-900 rounded-lg p-2 transition duration-300 active:-translate-y-1 text-xl"
          onClick={handleClick}
        >
          0
        </button>
        <button
          id="="
          className="bg-[#9e47aa] text-white rounded-lg p-2 transition duration-300 active:-translate-y-1 text-xl col-span-2"
          onClick={calculate}
        >
          =
        </button>
      </div>
    </div>
  );
}

export default Calculator;
