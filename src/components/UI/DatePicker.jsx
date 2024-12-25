import { TextField } from "@mui/material";
import { DatePicker as MuiDatePicker } from "@mui/x-date-pickers";
import { forwardRef } from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";

const DatePickers = forwardRef(({ onChange, value, label, ...props }, ref) => {
  const formatDate = (value) => {
    onChange(value.format("YYYY-MM-DD"));
  };
  return (
    <DemoContainer components={["DatePicker"]}>
      <MuiDatePicker
        label={label}
        value={value}
        onChange={(newValue) => onChange(newValue)}
        // renderInput={(params) => <TextField {...params} fullWidth />}
        ref={ref}
        {...props}
      />
    </DemoContainer>
  );
});

export default DatePickers;
