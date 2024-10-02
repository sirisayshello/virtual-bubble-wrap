import React from "react";
import "./Bubble.css";

const Bubble = ({ isPopped, handleClick }) => {
  return (
    <div
      className={`bubble ${isPopped ? "popped" : ""}`}
      onClick={handleClick}
    ></div>
  );
};

export default Bubble;
