import { forwardRef } from 'react';
import { Checkbox as MuiCheckbox, FormControlLabel } from '@mui/material';

const Checkbox = forwardRef(({ label, checked, onChange, ...rest }, ref) => {
  return (
    <FormControlLabel
      label={label}
      control={
        <MuiCheckbox
          checked={checked}
          onChange={onChange}
          inputRef={ref}
          {...rest}
          color="success"
        />
      }
    />
  );
});

export default Checkbox;
