import React from "react";
import Progress from "../components/Progress";
import FlashcardList from "../components/FlashcardList";
import FlashcardForm from "../components/FlashcardForm";

import Header from "../components/Header";
const Home = () => {
  return (
    <div className="p-5">
      <Header />
      <FlashcardForm className="ml-4" />
      <Progress />
      <FlashcardList />
    </div>
  );
};

export default Home;
