import React from "react";

function FlashcardList({ cards, onDelete }) {
  const handleDelete = (id) => {
    fetch(`http://localhost:5000/api/cards/${id}`, {
      method: "DELETE",
    }).then(() => onDelete(id));
  };

  return (
    <ul>
      {cards.map((card) => (
        <li key={card._id}>
          <strong>{card.question}</strong>: {card.answer}
          <button onClick={() => handleDelete(card._id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default FlashcardList;
