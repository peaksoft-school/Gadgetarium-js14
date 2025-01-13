import React from "react";
import { Box } from "@mui/material";
import Input from "../../components/UI/Input";

const DateRangePicker = ({ from, before, onFromChange, onBeforeChange }) => {
  const handleFromChange = (e) => {
    const selectedDate = e.target.value;
    onFromChange(selectedDate);

    if (before && new Date(selectedDate) > new Date(before)) {
      onBeforeChange("");
    }
  };

  const handleBeforeChange = (e) => {
    const selectedDate = e.target.value;
    onBeforeChange(selectedDate);

    // Если "before" раньше "from", сбросить "from"
    if (from && new Date(selectedDate) < new Date(from)) {
      onFromChange("");
    }
  };

  return (
    <Box display="flex" gap={2} alignItems="center">
      <Input
        type="date"
        value={from}
        onChange={handleFromChange}
        InputLabelProps={{ shrink: true }}
        inputProps={{ max: before || undefined }}
      />
      <Input
        type="date"
        value={before}
        onChange={handleBeforeChange}
        InputLabelProps={{ shrink: true }}
        inputProps={{ min: from || undefined }}
      />
    </Box>
  );
};

export default DateRangePicker;
