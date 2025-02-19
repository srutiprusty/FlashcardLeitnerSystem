import React, { useState } from "react";
import { updateFlashcardLevel, deleteFlashcard } from "../services/api";
import { useFlashcards } from "../context/FlashcardContext.jsx";
import {
  Button,
  Stack,
  Typography,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import "../App.css"; // External CSS for animations

const Flashcard = ({ flashcard }) => {
  const { fetchFlashcards } = useFlashcards();
  const [isFlipped, setIsFlipped] = useState(false);
  const [value, setValue] = useState("");

  const handleDelete = async () => {
    await deleteFlashcard(flashcard._id);
    fetchFlashcards();
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleVerification = async () => {
    if (value) {
      await updateFlashcardLevel(flashcard._id, value);
      fetchFlashcards();
      setIsFlipped(false);
      setValue("");
    }
  };

  return (
    <div className="flashcard-container">
      <Typography variant="h5" fontWeight="bold">
        Level:{"  "} {flashcard.level}
      </Typography>
      <div
        className={`flashcard ${isFlipped ? "flipped" : ""}`}
        onClick={() => setIsFlipped(!isFlipped)}
      >
        {/* Front Side */}
        <div className="flashcard-front">
          <Typography variant="h6" fontWeight="bold">
            Q:{"  "} {flashcard.question}
          </Typography>
        </div>

        {/* Back Side */}
        <div className="flashcard-back">
          <Typography variant="h6" color="text.secondary" fontWeight="bold">
            Ans:{"  "} {flashcard.answer}
          </Typography>

          {/* Verification Section */}
          <FormControl sx={{ mt: 2 }}>
            {/* <FormLabel>Verify</FormLabel> */}
            <RadioGroup value={value} onChange={handleChange} row>
              <FormControlLabel
                value="right"
                control={<Radio />}
                label="Got it right"
              />
              <FormControlLabel
                value="wrong"
                control={<Radio />}
                label="Got it wrong"
              />
            </RadioGroup>
          </FormControl>

          <Button
            variant="contained"
            color="success"
            onClick={handleVerification}
            sx={{ mt: 1 }}
            disabled={!value}
          >
            Submit
          </Button>
        </div>
      </div>

      {/* Delete Button Below */}
      <Stack direction="row" justifyContent="center" sx={{ mt: 2 }}>
        <Button
          variant="outlined"
          startIcon={<DeleteIcon />}
          color="error"
          onClick={handleDelete}
        >
          Delete
        </Button>
      </Stack>
    </div>
  );
};

export default Flashcard;
