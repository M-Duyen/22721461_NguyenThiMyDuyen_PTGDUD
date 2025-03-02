"use client";
import { useState } from "react";

export default function Home() {
  const [num1, setNum1] = useState<number>(0);
  const [num2, setNum2] = useState<number>(0);
  const [operation, setOperation] = useState("");
  const [result, setResult] = useState<string>("Result:");

  function handleClick() {
    let cal: number = 0;
    switch (operation) {
      case "add":
        cal = num1 + num2;
        break;
      case "subtract":
        cal = num1 - num2;
        break;
      case "multiply":
        cal = num1 * num2;
        break;
      case "devide":
        if (num2 !== 0) {
          cal = num1 / num2;
        } else {
          setResult("Không thể chia cho 0");
          return;
        }
        break;
      default:
        setResult("Vui lòng chọn phép toán");
        return;
    }
    setResult(`Result: ${cal}`);
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white p-6">
      <input
        value={num1}
        onChange={(e) => setNum1(parseFloat(e.target.value))}
        type="number"
        placeholder="Enter num 1"
        className="w-48 h-8 mb-2 border border-gray-700 rounded-md px-2"
      />
      <input
        value={num2}
        onChange={(e) => setNum2(parseFloat(e.target.value))}
        type="number"
        placeholder="Enter num 2"
        className="w-48 h-8 mb-2 border border-gray-700 rounded-md px-2"
      />
      <button
        onClick={handleClick}
        className="w-28 h-8 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition mb-4"
      >
        Click me
      </button>

      <div className="flex space-x-4">
        {["add", "subtract", "multiply", "devide"].map((op) => (
          <label key={op} className="flex items-center space-x-1">
            <input
              type="radio"
              name="operation"
              value={op}
              checked={operation === op}
              onChange={() => setOperation(op)}
              className="accent-gray-800"
            />
            <span className="capitalize">{op}</span>
          </label>
        ))}
      </div>

      <span className="mt-4 text-lg font-semibold">{result}</span>
    </div>
  );
}
