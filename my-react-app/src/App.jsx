import React, { useState, useEffect } from "react";
import axios from "axios";
import FlashcardForm from "./components/FlashcardForm.jsx";
import FlashcardList from "./components/FlashcardList.jsx";

function App() {
  const [cards, setCards] = useState([]);

  // Fetch cards from Flask API on mount
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/cards")
      .then((res) => setCards(res.data))
      .catch((err) => console.error("❌ Error fetching cards:", err));
  }, []);

  // Add new card
  const addCard = (newCard) => {
    axios
      .post("http://localhost:5000/api/cards", newCard)
      .then((res) => setCards((prev) => [...prev, res.data]))
      .catch((err) => console.error("❌ Error adding card:", err));
  };

  // Delete card
  const deleteCard = (id) => {
    axios
      .delete(`http://localhost:5000/api/cards/${id}`)
      .then(() => setCards((prev) => prev.filter((c) => c._id !== id)))
      .catch((err) => console.error("❌ Error deleting card:", err));
  };

  return (
    <div
      style={{
        padding: "2rem",
        textAlign: "center",
        maxWidth: "800px",
        margin: "0 auto",
      }}
    >
      <h1 style={{ color: "royalblue" }}>📚 Flashcards</h1>
      <FlashcardForm onAdd={addCard} />
      <FlashcardList cards={cards} onDelete={deleteCard} />
    </div>
  );
}

export default App;
