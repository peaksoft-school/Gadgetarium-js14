import { TextField } from "@mui/material";
import { DatePicker as MuiDatePicker } from "@mui/x-date-pickers";
import React from "react";

const DatePicker = ({ onChange, value }) => {
  const formatDate = (value) => {
    onChange(value.format("YYYY-MM-DD"));
  };

  return (
    <MuiDatePicker
      label="pick a date"
      value={value}
      onChange={(newValue) => formatDate(newValue)}
      renderInput={(params) => <TextField {...params} fullWidth />}
    />
  );
};

export default DatePicker;
