import React from "react";
import React, { useState } from 'react'
function Flashcard({ question, answer }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className={`flashcard ${flipped ? "flipped" : ""}`}
      onClick={() => setFlipped(!flipped)}
    >
      <h3>{flipped ? answer : question}</h3>
    </div>
  );
}

export default Flashcard;
