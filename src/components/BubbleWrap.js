// src/components/BubbleWrap.js
import React, { useState } from "react";
import Bubble from "./Bubble";
import "./BubbleWrap.css";

const BubbleWrap = () => {
  const bubbleCount = 100; // Adjust this to change the number of bubbles
  const [bubbles, setBubbles] = useState(Array(bubbleCount).fill(false)); // false = not popped

  // Function to play the pop sound
  const playPopSound = () => {
    const audio = new Audio("/pop.mp3"); // Ensure 'pop.mp3' is in your public folder
    audio.play();
  };

  // Function to handle popping a specific bubble
  const popBubble = (index) => {
    const newBubbles = [...bubbles];
    if (!newBubbles[index]) {
      // Only play the sound and pop if it hasn't been popped yet
      newBubbles[index] = true; // Set the bubble at the clicked index to "popped"
      setBubbles(newBubbles);
      playPopSound(); // Play the sound when the bubble pops
    }
  };

  // Function to reset all bubbles to "unpopped"
  const resetBubbles = () => {
    setBubbles(Array(bubbleCount).fill(false)); // Reset all bubbles to "unpopped"
  };

  return (
    <div>
      <button onClick={resetBubbles}>Reset</button>
      <div className="bubble-wrap">
        {bubbles.map((isPopped, index) => (
          <Bubble
            key={index}
            isPopped={isPopped}
            handleClick={() => popBubble(index)} // Pass the index to popBubble
          />
        ))}
      </div>
    </div>
  );
};

export default BubbleWrap;
