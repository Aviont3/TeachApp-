import React, { useState } from "react";

function FlashcardForm({ onAdd }) {
  const [form, setForm] = useState({ question: "", answer: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.question.trim() || !form.answer.trim()) return;

    onAdd(form);
    setForm({ question: "", answer: "" });
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "1rem" }}>
      <input
        type="text"
        placeholder="Question"
        value={form.question}
        onChange={(e) => setForm({ ...form, question: e.target.value })}
        required
      />
      <input
        type="text"
        placeholder="Answer"
        value={form.answer}
        onChange={(e) => setForm({ ...form, answer: e.target.value })}
        required
      />
      <button type="submit">Add Flashcard</button>
    </form>
  );
}

export default FlashcardForm;
