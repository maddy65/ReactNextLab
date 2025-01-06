"use client";
import React, { useState } from "react";
import Counter from "./counter";
import Index from "./hooks/stateHooks/index";

const pages = [
  { component: <h1>Welcome to the Demo Project!</h1>, label: "Home" },
  { component: <Counter />, label: "Counter Example" },
  { component: <Index />, label: "State Hooks" },
  { component: <h2>Context Hook Example Coming Soon!</h2>, label: "Context Hooks" },
];

export default function Page() {
  const [currentPage, setCurrentPage] = useState(0);

  const nextPage = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const previousPage = () => {
    if (currentPage > 0) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  return (
    <div style={{ position: "relative", height: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", backgroundColor: "#f0f0f0" }}>
      {/* First Page Centered Content */}
      {currentPage === 0 ? (
        <div style={{ textAlign: "center", color: "blue", fontSize: "2rem" }}>
          {pages[currentPage].component}
        </div>
      ) : (
        <div style={{ textAlign: "left", color: "black", fontSize: "1.5rem" }}>
          {pages[currentPage].component}
        </div>
      )}

      {/* Previous and Next Buttons at the Bottom */}
      <div style={{ position: "absolute", bottom: "20px", width: "100%", display: "flex", justifyContent: "space-between", padding: "0 20px" }}>
        <button onClick={previousPage} disabled={currentPage === 0} style={{ padding: "10px 20px", fontSize: "1rem" }}>
          Previous
        </button>
        <button onClick={nextPage} disabled={currentPage === pages.length - 1} style={{ padding: "10px 20px", fontSize: "1rem" }}>
          Next
        </button>
      </div>
    </div>
  );
}
