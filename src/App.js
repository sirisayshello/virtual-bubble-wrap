import React from "react";
import BubbleWrap from "./components/BubbleWrap";
import "./App.css";
import DarkMode from "./components/DarkMode";

function App() {
  return (
    <div className="App">
      <DarkMode/>
      <h1>Virtual Bubble Wrap</h1>
      <BubbleWrap />
    </div>
  );
}

export default App;
