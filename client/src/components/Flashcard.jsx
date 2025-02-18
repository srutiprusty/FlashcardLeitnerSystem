import React, { useState } from "react";
import { updateFlashcardLevel, deleteFlashcard } from "../services/api";
import { useFlashcards } from "../context/FlashcardContext.jsx";

const Flashcard = ({ flashcard }) => {
  const { fetchFlashcards } = useFlashcards();
  const [showAnswer, setShowAnswer] = useState(false);

  const handleAnswer = async (correct) => {
    await updateFlashcardLevel(flashcard._id, correct);
    fetchFlashcards();
  };
  const handleDelete = async () => {
    await deleteFlashcard(flashcard._id);
    fetchFlashcards(); // Refetch flashcards after deletion
  };
  return (
    <div className="bg-white p-4 shadow-md rounded-md text-center">
      <h2 className="text-xl font-bold">{flashcard.question}</h2>

      {showAnswer && <p className="text-gray-700 mt-3">{flashcard.answer}</p>}

      <button
        onClick={() => setShowAnswer(true)}
        className="bg-blue-500 text-white px-4 py-2 mt-4 rounded"
      >
        Show Answer
      </button>
      <button
        onClick={handleDelete}
        className="bg-gray-500 text-white px-4 py-2 mt-4 rounded"
      >
        Delete
      </button>
      {showAnswer && (
        <div className="mt-4 flex justify-center gap-4">
          <button
            onClick={() => handleAnswer(true)}
            className="bg-green-500 text-white px-4 py-2 rounded"
          >
            ✅ Got it right
          </button>
          <button
            onClick={() => handleAnswer(false)}
            className="bg-red-500 text-white px-4 py-2 rounded"
          >
            ❌ Got it wrong
          </button>
        </div>
      )}
    </div>
  );
};

export default Flashcard;
