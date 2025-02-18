import React from "react";
import { useFlashcards } from "../context/FlashcardContext.jsx";

const Progress = () => {
  const { flashcards } = useFlashcards();

  return (
    <div className="text-center text-lg font-bold">
      {flashcards.length > 0
        ? `📚 You have ${flashcards.length} flashcards due today`
        : "✅ No flashcards due today"}
    </div>
  );
};

export default Progress;
