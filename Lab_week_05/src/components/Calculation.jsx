import { useReducer, useState } from 'react'
import '../App.css'

function reducer(state, action) {
  switch (action.type){
    case "+":
      return {result: action.num1 + action.num2};
    case "-":
      return {result: action.num1 - action.num2};
    case "*":
      return {result: action.num1 * action.num2};
    case "/":
      return state.num2 !== 0 ? {result:  (action.num1 / action.num2).toFixed(2)} : state;
    case "reset":
      return {result: 0}
    default:
      return state;
  }
}

function Calculation() {

  const [state, dispatch] = useReducer(reducer, {result: 0});
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);

  return (
    <>
      <div className='flex flex-col justify-center items-center gap-4'>
        <h2 className='font-semibold text-2xl'>CALCULATE</h2>
        <input
          onChange={(e) => setNum1(Number(e.target.value))}
          className='border border-gray-300 w-96 rounded-md p-1 hover:border-gray-500 transition outline-0'
          type="number" />
        <input
          onChange={(e) => setNum2(Number(e.target.value))}
          className='border border-gray-300 w-96 rounded-md p-1  hover:border-gray-500 transition outline-0'
          type="number" />

        <div className='flex flex-row gap-4'>
          <button
            onClick={() => dispatch( {type: "+", num1, num2})}
            className='border border-0 bg-amber-100  w-12 rounded-md'
          >
            +
          </button>
          <button
            onClick={() => dispatch( {type: "-", num1, num2})}
            className='border border-0 bg-amber-200  w-12 rounded-md'
          >
            -
          </button>
          <button
            onClick={() => dispatch( {type: "*", num1, num2})}
            className='border border-0 bg-amber-300  w-12 rounded-md'
          >
            *
          </button>
          <button
            onClick={() => dispatch( {type: "/", num1, num2})}
            className='border border-0 bg-amber-400  w-12 rounded-md'
          >
            /
          </button>
        </div>
        <span>Result: {state.result} </span>
      </div>
    </>
  )
}

