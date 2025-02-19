import React from "react";
import FlashcardForm from "../components/FlashcardForm";

import Header from "../components/Header";
const Home = () => {
  return (
    <div className="p-5">
      <Header />
      <FlashcardForm className="ml-4" />
    </div>
  );
};

export default Home;
