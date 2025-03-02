"use client";
import { useState } from "react";

export default function Home() {
    const [name, setName] = useState("");
    const [displayName, setDisplayName] = useState("");


    function handleClick() {
        setDisplayName(name);
    }

    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <input onChange={(e) => setName(e.target.value)}
                style={{ width: "200px", height: "30px", margin: "20px", border: "solid 1px #171717" }}
                type="text"
                placeholder="Enter your name"
            />
            <button
                onClick={handleClick}
                style={{
                    width: "100px",
                    height: "30px",
                    backgroundColor: "#171717",
                    color: "#fff",
                    border: "none",
                    borderRadius: "5px",
                }}
            >
                Click
            </button>
            <span>{displayName}</span>
        </div>
    );
}