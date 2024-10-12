import { Button as MuiButton, styled } from '@mui/material';

const Button = ({
  children,
  onClick,
  variant = 'outlined',
  size,
  type,
  startIcon,
  ...props
}) => {
  return (
    <StyledBtn
    startIcon={startIcon}
      type={type}
      onClick={onClick}
      variant={variant}
      size={size}
      {...props}
    >
      {children}
    </StyledBtn>
  );
};

export default Button;

const StyledBtn = styled(MuiButton)(({ variant, ...props }) => {
  switch (variant) {
    case 'outlined':
      return {
        '&.MuiButtonBase-root': {
          width: '100%',
          color: '#88226a',
          fontSize: '18px',
          borderRadius: '4px',
          border: '1px solid #e313bf',
          textTransform: 'uppercase',
          backgroundColor: 'transparet',
          '&:hover': {
            color: 'white',
            backgroundColor: '#cb11ab',
          },
          '&:active': {
            backgroundColor: '#e313bf',
            color: 'white',
          },
        },
      };
    case 'contained':
      return {
        '&.MuiButtonBase-root': {
          width: '100%',
          color: '#fff',
          fontSize: '18px',
          borderRadius: '4px',
          border: '1px solid #e313bf',
          textTransform: 'uppercase',
          backgroundColor: '#cb11ab',
          '&:hover': {
            color: 'white',
            backgroundColor: '#cb11ab',
          },
          '&:active': {
            backgroundColor: '#e313bf',
            color: 'white',
          },
        },
      };

    case 'text':
      return {
        '&.MuiButtonBase-root': {
          width: '100%',
          color: '#e313bf',
          fontSize: '18px',
          borderRadius: '4px',
          border: '1px solid #e313bf',
          textTransform: 'uppercase',
          backgroundColor: 'white',
          '&:hover': {
            color: 'white',
            backgroundColor: '#cb11ab',
          },
          '&:active': {
            backgroundColor: '#e313bf',
            color: 'white',
          },
        },
      };
    case 'text-outlined':
      return {
        '&.MuiButtonBase-root': {
          width: '100%',
          color: 'white',
          fontSize: '18px',
          borderRadius: '4px',
          border: '1px solid #e313bf',
          textTransform: 'uppercase',
          backgroundColor: '#cb11ab',
          '&:hover': {
            color: 'white',
            backgroundColor: '#cb11ab',
          },
          '&:active': {
            backgroundColor: '#e313bf',
            color: 'white',
          },
        },
      };
  }
});
