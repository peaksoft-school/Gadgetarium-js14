import { forwardRef } from "react";
import { styled, TextField, InputAdornment, Typography } from "@mui/material";

const Input = forwardRef(
  (
    {
      label,
      value,
      onChange,
      type = "text",
      error = false,
      disabled = false,
      Icon,
      ...props
    },
    ref
  ) => {
    return (
      <LabelDiv>
        <Typography
          sx={{ color: disabled ? 'lightgray' : '#939292', margin: 0 }} 
        >
          {label}
        </Typography>
        <StyledInput
          value={value}
          onChange={onChange}
          type={type}
          variant="outlined"
          fullWidth
          inputRef={ref}
          error={error}
          disabled={disabled}
          InputProps={{
            startAdornment: Icon && (
              <InputAdornment position="start">
                {Icon}
              </InputAdornment>
            ),
          }}
          {...props}
        />
      </LabelDiv>
    );
  }
);

export default Input;

const StyledInput = styled(TextField)(({ theme, error }) => ({
  width: "100%",
  borderRadius: "8px",
  margin: 0, 
  padding: 0, 

  "& .MuiOutlinedInput-root": {
    padding: 0, 
    "& fieldset": {
      borderColor: error ? theme.palette.error.main : "#E5E5E5",
    },
    "&:hover fieldset": {
      borderColor: "#cb11ab",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#c9ccd4", 
      borderWidth: "3px",
    },
  },

  "& .MuiOutlinedInput-input": {
    padding: "8px", 
    margin: 0, 
  },
}));

const LabelDiv = styled("div")({
  display: "flex",
  flexDirection: "column",
  margin: 0, 
  padding: 0, 
});
