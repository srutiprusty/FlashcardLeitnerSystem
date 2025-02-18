import mongoose from "mongoose";
const flashcardSchema = new mongoose.Schema({
  question: {
    type: String,
    required: true,
  },
  answer: {
    type: String,
    required: true,
  },
  level: {
    type: Number,
    default: 0,
  }, // The current level of the flashcard
  lastReviewed: {
    type: Date,
    default: Date.now,
  },
  dueDate: {
    type: Date,
    required: true,
  },
});

const Flashcard = mongoose.model("Flashcard", flashcardSchema);
export default Flashcard;
