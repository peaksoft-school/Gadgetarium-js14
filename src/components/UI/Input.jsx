import { forwardRef } from "react";
import { styled, TextField, InputAdornment } from "@mui/material";
// eslint-disable-next-line no-unused-vars
import React from "react";

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
      sx,
      ...props
    },
    ref
  ) => {
    return (
      <LabelDiv>
        <StyledLabel htmlFor="1">{label}</StyledLabel>
        <StyledInput
          id="1"
          value={value}
          onChange={onChange}
          type={type}
          variant="outlined"
          fullWidth
          inputRef={ref}
          error={error}
          sx={sx}
          disabled={disabled}
          InputProps={{
            startAdornment: Icon && (
              <InputAdornment position="start">{Icon}</InputAdornment>
            ),
          }}
          {...props}
        />
      </LabelDiv>
    );
  }
);

export default Input;

Input.displayName = "Input";

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

const LabelDiv = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  margin: 0,
  padding: 0,
  alignItems: "start",
  gap: "5px",
}));
const StyledLabel = styled("label")(({ disabled }) => ({
  color: disabled ? "lightgray" : "#000",
  fontWeight: 500,
}));
