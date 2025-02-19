import React from "react";
import Progress from "../components/Progress";
import FlashcardList from "../components/FlashcardList";
import Header from "../components/Header";

const Flashcards = () => {
  return (
    <div>
      <Header />
      <Progress />
      <FlashcardList />
    </div>
  );
};

export default Flashcards;
