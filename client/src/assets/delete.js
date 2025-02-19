import * as React from "react";
import Chip from "@mui/material/Chip";

import DeleteIcon from "@mui/icons-material/Delete";

export default function CustomDeleteIconChips() {
  const handleClick = () => {
    console.info("You clicked the Chip.");
  };

  const handleDelete = () => {
    console.info("You clicked the delete icon.");
  };

  return (
    <Chip
      label="Custom delete icon"
      onClick={handleClick}
      onDelete={handleDelete}
      deleteIcon={<DeleteIcon />}
    />
  );
}
