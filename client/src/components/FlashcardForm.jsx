/* import React from "react";
import { useState } from "react";
import { createFlashcard } from "../services/api";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Input from "@mui/joy/Input";
import Button from "@mui/joy/Button";
import "../App.css";

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
    <form onSubmit={handleSubmit} className="flashcard-form">
      <FormControl className="form-control">
        <FormLabel>Username</FormLabel>
        <Input
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Enter Question"
          className="input-field"
          required
        />
      </FormControl>
      <FormControl className="form-control">
        <FormLabel>Username</FormLabel>
        <Input
          type="text"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          placeholder="Enter Answer"
          className="s-input"
          required
        />
      </FormControl>
      <Button
        type="submit"
        className="mt-3 bg-blue-500 text-white px-4 py-2 rounded"
      >
        + Add Flashcard
      </Button>
    </form>
  );
};
export default FlashcardForm;
 */

import React, { useState } from "react";
import { createFlashcard } from "../services/api";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Input from "@mui/joy/Input";
import Button from "@mui/joy/Button";
import "../App.css";

const FlashcardForm = ({ onFlashcardAdded }) => {
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
    <div className="flashcard-form-container">
      <form onSubmit={handleSubmit} className="flashcard-form">
        <h2 className="form-title">Create a Flashcard</h2>

        <FormControl className="form-control">
          <FormLabel className="form-label">Question</FormLabel>
          <Input
            type="text"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Enter Question"
            className="input-field"
            required
          />
        </FormControl>

        <FormControl className="form-control">
          <FormLabel className="form-label">Answer</FormLabel>
          <Input
            type="text"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            placeholder="Enter Answer"
            className="input-field"
            required
          />
        </FormControl>

        <Button type="submit" className="submit-button">
          + Add Flashcard
        </Button>
      </form>
    </div>
  );
};

export default FlashcardForm;
