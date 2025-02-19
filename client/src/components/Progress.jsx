import React from "react";
import { useFlashcards } from "../context/FlashcardContext.jsx";

const Progress = () => {
  const { flashcards } = useFlashcards();

  return (
    <div className="flex justify-center text-center items-center h-16">
      <h3 className="text-lg font-bold text-center">
        {flashcards.length > 0
          ? `📚 You have ${flashcards.length} flashcards due today`
          : "✅ No flashcards due today"}
      </h3>
    </div>
  );
};

export default Progress;
