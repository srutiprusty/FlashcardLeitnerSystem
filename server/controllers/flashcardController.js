import Flashcard from "../models/Flashcard.js"; // Assuming you're using Mongoose for MongoDB

// Create a new flashcard
export const createFlashcard = async (req, res) => {
  const { question, answer } = req.body;

  try {
    const newFlashcard = new Flashcard({
      question,
      answer,
      level: 0, // Start with level 0
      lastReviewed: new Date(),
      dueDate: new Date(),
    });
    await newFlashcard.save();
    res.status(201).json(newFlashcard);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get all flashcards
export const getAllFlashcards = async (req, res) => {
  try {
    const flashcards = await Flashcard.find();
    res.status(200).json(flashcards);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get flashcards due for review (e.g., flashcards that should be reviewed today)
export const getDueFlashcards = async (req, res) => {
  const today = new Date();
  try {
    const flashcards = await Flashcard.find({
      dueDate: { $lte: today }, // Cards that are due for review
    });
    res.status(200).json(flashcards);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update flashcard level based on answer (correct/incorrect)
export const updateFlashcard = async (req, res) => {
  const { id } = req.params;
  const { correct } = req.body; // true/false if the answer was correct
  const today = new Date();

  try {
    const flashcard = await Flashcard.findById(id);
    if (!flashcard) {
      return res.status(404).json({ message: "Flashcard not found" });
    }

    let newLevel = flashcard.level;

    // Correct answer: increase level (up to max level)
    if (correct) {
      newLevel = Math.min(newLevel + 1, 4); // Max level = 4
    } else {
      // Incorrect answer: reset level to 0
      newLevel = 0;
    }

    // Set new due date based on the level (higher levels should have longer intervals)
    const dueDate = calculateNextReviewDate(newLevel);

    flashcard.level = newLevel;
    flashcard.dueDate = dueDate;
    flashcard.lastReviewed = today;

    await flashcard.save();
    res.status(200).json(flashcard);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Delete a flashcard
export const deleteFlashcard = async (req, res) => {
  const { id } = req.params;
  try {
    await Flashcard.findByIdAndDelete(id);
    res.status(200).json({ message: "Flashcard deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Helper function to calculate the next review date based on the level
export const calculateNextReviewDate = (level) => {
  let intervalDays = 1; // Default to 1 day

  switch (level) {
    case 0:
      intervalDays = 1; // Level 0 cards get reviewed daily
      break;
    case 1:
      intervalDays = 3; // Level 1 cards get reviewed in 3 days
      break;
    case 2:
      intervalDays = 7; // Level 2 cards get reviewed in 1 week
      break;
    case 3:
      intervalDays = 14; // Level 3 cards get reviewed in 2 weeks
      break;
    case 4:
      intervalDays = 30; // Level 4 cards get reviewed in 1 month
      break;
    default:
      intervalDays = 1;
  }

  return new Date(Date.now() + intervalDays * 24 * 60 * 60 * 1000);
};
