'use client';
import { useState } from "react";
export default function Home() {
    const [text, setText] = useState<string>("");
    const [items, setIems] = useState<string[]>([]);

    function handleAddItem() {
        if(text.trim() !==""){
            setIems([...items, text])
            setText("")
        }

    }
    function handleRemoveItem(index: number) {
        const newItems = items.filter((_, idx) => idx !== index);
        setIems(newItems);
    }

    return (
        <div className="flex flex-col items-center justify-center ">
            <input
                type="text"
                placeholder="Enter your todo"
                value={text}
                onChange={(e) => setText(e.target.value)}
                className="border border-gray-400 px-3 py-2 rounded-md w-96"

            >
            </input>

            <button 
                onClick ={handleAddItem}
                className="bg-black text-white px-4 py-2 rounded-md ml-2 mt-2 hover:bg-gray-500 transition"
            >
                Add
            </button>

            <ul className="mt-4 w-64 text-left">
                {items.map((item, index) => (
                    <li key={index} className="border-b py-2">
                        {item}
                        <button className=" bg-red-500 text-white px-3 py-2 rounded-md ml-2 mt-2 hover:bg-red-300 transition " 
                            onClick = {() => handleRemoveItem(index)}
                        >
                            Remove
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}