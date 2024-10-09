import { TextField } from "@mui/material";
import { DatePicker as MuiDatePicker } from "@mui/x-date-pickers";

const DatePickers = ({ onChange, value, label }) => {
  const formatDate = (value) => {
    onChange(value.format("YYYY-MM-DD"));
  };

  return (
    <MuiDatePicker
      label={label}
      value={value}
      onChange={(newValue) => formatDate(newValue)}
      renderInput={(params) => <TextField {...params} fullWidth />}
    />
  );
};

export default DatePickers;
