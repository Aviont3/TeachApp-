import { useState } from "react";
import React, { useState, useEffect } from "react";
import FlashcardForm from "./components/FlashcardForm.jsx";
import FlashcardList from "./components/FlashcardList.jsx";

function App() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/cards")
      .then((res) => res.json())
      .then((data) => setCards(data));
  }, []);

  const addCard = (newCard) => {
    setCards((prev) => [...prev, newCard]);
  };

  const deleteCard = (id) => {
    setCards((prev) => prev.filter((c) => c._id !== id));
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Flashcards</h1>
      <FlashcardForm onAdd={addCard} />
      <FlashcardList cards={cards} onDelete={deleteCard} />
    </div>
  );
}

export default App;
