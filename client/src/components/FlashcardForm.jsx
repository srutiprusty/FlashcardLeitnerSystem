import React from "react";
import { useState } from "react";
import { createFlashcard } from "../services/api";

const FlashcardForm = (onFlashcardAdded) => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    await createFlashcard({ question, answer });
    setQuestion("");
    setAnswer("");
    onFlashcardAdded();
  };
  return (
    <form onSubmit={handleSubmit} className="p-4 border shadow-lg bg-white m-4">
      <input
        type="text"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="Enter Question"
        className="block border p-2 w-full"
        required
      />
      <input
        type="text"
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
        placeholder="Enter Answer"
        className="block border p-2 w-full mt-2"
        required
      />
      <button
        type="submit"
        className="mt-3 bg-blue-500 text-white px-4 py-2 rounded"
      >
        + Add Flashcard
      </button>
    </form>
  );
};
export default FlashcardForm;
