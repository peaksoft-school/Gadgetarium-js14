import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { styled } from '@mui/system';
import Button from '../UI/Button';

export default function ModalWindow() {
  const [open, setOpen] = React.useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <StyledTitle id="modal-modal-title" variant="h6" component="h2">
            Ответ на комментарий
          </StyledTitle>
          <StyledDescription id="modal-modal-description">
            Добрый день! Благодарим Вас за отзыв, рады быть полезными. Спасибо,
            что выбираете нас. Хорошего дня!
          </StyledDescription>
          <ButtonContainer>
            <Button variant="outlined" onClick={handleClose}>
              Отменить
            </Button>
            <Button variant="contained" onClick={handleClose}>
              Добавить
            </Button>
          </ButtonContainer>
        </Box>
      </Modal>
    </div>
  );
}

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  borderRadius: '10px',
  width: '544px',
  height: '350px',
};

const StyledTitle = styled(Typography)(({ theme }) => ({
  fontSize: '1.5rem',
  fontWeight: 'bold',
  color: 'black',
  textAlign: 'center',
}));

const StyledDescription = styled(Typography)(({ theme }) => ({
  fontSize: '1rem',
  color: '#555',
  marginTop: '10px',
  lineHeight: '1.5',
  border: '1px solid grey',
  height: '128px',
  width: '480px',
  top: '108px',
  left: '32px',
  borderRadius: '4px 0px 0px 0px',
  padding: '3px 3px 3px 5px',
}));

const ButtonContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  width: '480px',
  gap: '20px',
  marginTop: '40px',
}));
