import React from "react";
import "./Chessboard.css";

const Chessboard = () => {
  return (
 <div className="chessboard">
  {[...Array(64)].map((_, i) => (
    <div
     key={i}
     className={`square ${
     i % 2 === Math.floor(i / 8) % 2 ? "white" : "green"
     }`}
    ></div>
      ))}
    </div>
  );
};

export default Chessboard;
