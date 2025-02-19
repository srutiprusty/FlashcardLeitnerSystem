/* import React from "react";
import { useFlashcards } from "../context/FlashcardContext.jsx";
import Flashcard from "./Flashcard";
import Box from "@mui/material/Box";

const FlashcardList = () => {
  const { flashcards, loading } = useFlashcards();

  if (loading) return <p>Loading flashcards...</p>;

  return (
    <Box
      sx={{
        width: "100%",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
        gap: 2,
        padding: 2,
      }}
    >
      {flashcards.length === 0 ? (
        <p>No flashcards due today 🎉</p>
      ) : (
        flashcards.map((flashcard) => (
          <Flashcard key={flashcard._id} flashcard={flashcard} />
        ))
      )}
    </Box>
  );
};

export default FlashcardList;
 */

import React from "react";
import { useFlashcards } from "../context/FlashcardContext.jsx";
import Flashcard from "./Flashcard";
import Box from "@mui/material/Box";

const FlashcardList = () => {
  const { flashcards, loading } = useFlashcards();

  if (loading) return <p>Loading flashcards...</p>;

  return (
    <Box
      sx={{
        width: "100%",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
        gap: 30, // Space between flashcards
        padding: 2,
        // backgroundColor: "#e3f2fd", // Light blue background for contrast
        minHeight: "100vh",
      }}
    >
      {flashcards.length === 0 ? (
        <p>No flashcards due today 🎉</p>
      ) : (
        flashcards.map((flashcard) => (
          <Flashcard key={flashcard._id} flashcard={flashcard} />
        ))
      )}
    </Box>
  );
};

export default FlashcardList;
