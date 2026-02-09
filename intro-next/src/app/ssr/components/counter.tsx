"use client";
import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(1);

  return (
    <div className="flex items-center gap-4 mt-4">
      <button 
        className="btn btn-outline" 
        onClick={() => setCount(Math.max(1, count - 1))}
      > - </button>
      <span className="text-xl font-bold">{count}</span>
      <button 
        className="btn btn-outline" 
        onClick={() => setCount(count + 1)}
      > + </button>
    </div>
  );
}