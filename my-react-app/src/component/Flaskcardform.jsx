import React, { useState } from "react";

function FlashcardForm({ onAdd }) {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:5000/api/cards", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ question, answer }),
    })
      .then((res) => res.json())
      .then((data) => {
        onAdd(data);
        setQuestion("");
        setAnswer("");
      });
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "1rem" }}>
      <input
        placeholder="Question"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        required
      />
      <input
        placeholder="Answer"
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
        required
      />
      <button type="submit">Add Flashcard</button>
    </form>
  );
}

export default FlashcardForm;
