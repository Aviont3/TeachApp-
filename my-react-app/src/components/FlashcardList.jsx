import Flashcard from "./Flashcard.jsx";

function FlashcardList({ cards, onDelete }) {
  return (
    <div>
      {cards.map((card) => (
        <div key={card._id}>
          <Flashcard question={card.question} answer={card.answer} />
          <button
            onClick={() => onDelete(card._id)}
            style={{
              marginTop: "0.5rem",
              background: "crimson",
              color: "white",
              border: "none",
              borderRadius: "5px",
              padding: "0.3rem 0.8rem",
              cursor: "pointer",
            }}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default FlashcardList;
