import React, { useState } from "react";

export default function TestReact() {
  const [n, setN] = useState(0);
  return (
    <button
      onClick={() => setN(n + 1)}
      className="px-4 py-2 bg-blue-600 text-white rounded"
    >
      Clicks: {n}
    </button>
  );
}
