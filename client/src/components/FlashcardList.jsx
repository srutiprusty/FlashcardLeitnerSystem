import React from "react";
import { useFlashcards } from "../context/FlashcardContext.jsx";
import Flashcard from "./Flashcard";

const FlashcardList = () => {
  const { flashcards, loading } = useFlashcards();

  if (loading) return <p>Loading flashcards...</p>;

  return (
    <div className="grid gap-4">
      {flashcards.length === 0 ? (
        <p>No flashcards due today 🎉</p>
      ) : (
        flashcards.map((flashcard) => (
          <Flashcard key={flashcard._id} flashcard={flashcard} />
        ))
      )}
    </div>
  );
};

export default FlashcardList;
