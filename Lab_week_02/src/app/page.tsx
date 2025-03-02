"use client";
import { useState } from "react";
import Bai01 from "./components/bai01";
import Bai02 from "./components/bai02";
import Bai03 from "./components/todoApp";
import Bai01_review from "./components/bai01_review";
import Bai02_review from "./components/bai02_review";
import Bai03_review from "./components/todoApp_review";

export default function Home() {
  const [selectedPages, setSelectedPages] = useState<string[]>([]);

  function togglePage(page: string) {
    setSelectedPages((prev) =>
      prev.includes(page) ? prev.filter((p) => p !== page) : [...prev, page]
    );
  }

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <button onClick={() => togglePage("bai01")}>
        {selectedPages.includes("bai01") ? "Ẩn Bài 1" : "Hiển thị Bài 1"}
      </button>
      <button onClick={() => togglePage("bai02")} style={{ marginLeft: "10px" }}>
        {selectedPages.includes("bai02") ? "Ẩn Bài 2" : "Hiển thị Bài 2"}
      </button>
      <button onClick={() => togglePage("todoApp")} style={{ marginLeft: "10px" }}>
        {selectedPages.includes("todoApp") ? "Ẩn Bài 3" : "Hiển thị Bài 3"}
      </button>
      <button onClick={() => togglePage("bai01_review")} style={{marginLeft: "10px"}}>
        {selectedPages.includes("bai01_review") ? "Ẩn Bài 01 review": "Hiển thị Bài 01 review"}
      </button>
      <button onClick={() => togglePage("bai02_review")} style={{marginLeft: "10px"}}>
        {selectedPages.includes("bai02_review") ? "Ẩn Bài 02 review": "Hiển thị Bài 02 review"}
      </button>
      <button onClick={() => togglePage("bai03_review")} style={{marginLeft: "10px"}}>
        {selectedPages.includes("bai03_review") ? "Ẩn Bài 03 review": "Hiển thị Bài 03 review"}
      </button>

      <div style={{ marginTop: "20px" }}>
        {selectedPages.includes("bai01") && <Bai01 />}
        {selectedPages.includes("bai02") && <Bai02 />}
        {selectedPages.includes("todoApp") && <Bai03 />}
        {selectedPages.includes("bai01_review") && <Bai01_review/>}
        {selectedPages.includes("bai02_review") && <Bai02_review/>}
        {selectedPages.includes("bai03_review") && <Bai03_review/>}
      </div>
    </div>
  );
}
