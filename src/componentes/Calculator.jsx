import logo from "../img/logo.jpg";
import React, { useState } from "react";
import { Button } from "./Boton";  // Importa el componente Button

function Calculator() {
  const [result, setResult] = useState("");

  const handleClick = (e) => setResult(result.concat(e.target.textContent));  // Usamos textContent
  const clear = () => setResult("");
  const deleteElement = () => setResult(result.slice(0, -1));
  const calculate = () => {
    try {
      let resultValue = eval(result);
      setResult(parseFloat(resultValue.toFixed(8)).toString());
    } catch (error) {
      setResult("Invalid");
    }
  };

  return (
    <div className="bg-[#373147] border border-purple-600 w-80 mx-auto mt-20 p-4 rounded-lg shadow-lg">
      <div className="flex items-center justify-center">
        <img className="h-20 w-20 mb-5" src={logo} alt="Logo Azarquiel" />
      </div>
      {/* Input */}
      <input
        type="text"
        value={result || "0"}
        disabled
        className="bg-white border border-purple-600 rounded-md w-full text-right py-1 px-5 text-2xl bg-transparent text-purple-900"
      />

      {/* Buttons */}
      <div className="grid grid-cols-4 gap-y-4 gap-x-3 mt-4">
        {/* Primera fila */}
        <Button
          label="7"
          variant="number"
          onClick={handleClick}
        />
        <Button
          label="8"
          variant="number"
          onClick={handleClick}
        />
        <Button
          label="9"
          variant="number"
          onClick={handleClick}
        />
        <Button
          label="+"
          variant="operator"
          onClick={handleClick}
        />

        {/* Segunda fila */}
        <Button
          label="4"
          variant="number"
          onClick={handleClick}
        />
        <Button
          label="5"
          variant="number"
          onClick={handleClick}
        />
        <Button
          label="6"
          variant="number"
          onClick={handleClick}
        />
        <Button
          label="-"
          variant="operator"
          onClick={handleClick}
        />

        {/* Tercera fila */}
        <Button
          label="1"
          variant="number"
          onClick={handleClick}
        />
        <Button
          label="2"
          variant="number"
          onClick={handleClick}
        />
        <Button
          label="3"
          variant="number"
          onClick={handleClick}
        />
        <Button
          label="*"
          variant="operator"
          onClick={handleClick}
        />

        {/* Cuarta fila */}
        <Button
          label="0"
          variant="number"
          onClick={handleClick}
        />
        <Button
          label="."
          variant="number"
          onClick={handleClick}
        />
        <Button
          label="/"
          variant="operator"
          onClick={handleClick}
        />
        <Button
          label="="
          variant="operator"
          onClick={calculate}
        />

        {/* Clear */}
        <Button
          label="Clear"
          variant="clear"
          onClick={clear}
          className="col-span-4"
        />

        {/* <button
          className="bg-[#2c2995] text-white rounded-lg p-2 transition duration-300 active:-translate-y-1 text-xl col-span-2 "
          onClick={clear}
        >
          AC
        </button>
        <button
          className="bg-[#2c2995] text-white rounded-lg p-2 transition duration-300 active:-translate-y-1 text-xl col-span-2"
          onClick={deleteElement}
        >
          DE
        </button> */}
      </div>
    </div>
  );
}

export default Calculator;
