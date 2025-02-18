import express from "express";

const router = express.Router();

import {
  createFlashcard,
  deleteFlashcard,
  getDueFlashcards,
  getAllFlashcards,
  updateFlashcard,
} from "../controllers/flashcardController.js";

router.post("/create", createFlashcard);
router.get("/flashcards", getAllFlashcards);
router.get("/flashcards", getDueFlashcards);
router.put("/flashcards/:id", updateFlashcard);
router.delete("/flashcards/:id", deleteFlashcard);

export default router;
