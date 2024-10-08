import React, { useState } from 'react';
import { Radio, RadioGroup, FormControlLabel } from '@mui/material';
import { styled } from '@mui/system';

const RadioButton = ({ options }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleChange = (event) => {
    const value = event.target.value;

    setSelectedOption(selectedOption === value ? null : value);
  };

  return (
    <RadioGroup value={selectedOption} onChange={handleChange}>
      {options.map((option) => (
        <FormControlLabel
          key={option.value}
          control={<StyledRadio value={option.value} />}
          label={option.label}
          sx={{
            '& .MuiFormControlLabel-label': {
              color: 'gray',
            },
            '&:hover .MuiFormControlLabel-label': {
              color: '#cb11ab',
            },
          }}
        />
      ))}
    </RadioGroup>
  );
};

const StyledRadio = styled(Radio)(({ theme }) => ({
  '&.Mui-checked': {
    color: '#cb11ab',
  },
  '&:hover': {
    backgroundColor: 'transparent',
  },
}));

export default RadioButton;
