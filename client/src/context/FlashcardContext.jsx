import { createContext, useContext, useState, useEffect } from "react";
import { getDueFlashcards } from "../services/api";

const FlashcardContext = createContext();

export const FlashcardProvider = ({ children }) => {
  const [flashcards, setFlashcards] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchFlashcards = async () => {
    setLoading(true);
    const data = await getDueFlashcards();
    setFlashcards(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchFlashcards();
  }, []);

  return (
    <FlashcardContext.Provider value={{ flashcards, fetchFlashcards, loading }}>
      {children}
    </FlashcardContext.Provider>
  );
};

export const useFlashcards = () => useContext(FlashcardContext);
