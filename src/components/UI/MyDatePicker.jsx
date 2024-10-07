import { TextField } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import React from "react";

const MyDatePicker = ({ onChange, value }) => {
  return (
    <DatePicker
      label="pick a date"
      value={value}
      onChange={(newValue) => onChange(newValue)}
      renderInput={(params) => <TextField {...params} fullWidth />}
    />
  );
};

export default MyDatePicker;
