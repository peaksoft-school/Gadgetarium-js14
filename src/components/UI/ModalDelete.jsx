import { Modal, Typography } from "@mui/material";
import { Box, styled } from "@mui/system";
import React from "react";
import Button from "./Button";

const ModalDelete = ({ open, onClose, onConfirm, text }) => {
  return (
    <Modal open={open} onClose={onClose}>
      <ModalContent>
        <Typography variant="h6" gutterBottom>
          {text || "Вы уверены, что хотите удалить этот элемент?"}
        </Typography>
        <ButtonContainer>
          <Button variant="contained" color="error" onClick={onConfirm}>
            Да
          </Button>
          <Button variant="outlined" onClick={onClose}>
            Нет
          </Button>
        </ButtonContainer>
      </ModalContent>
    </Modal>
  );
};

export default ModalDelete;

const ModalContent = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  backgroundColor: theme.palette.background.paper, // Нейтральный цвет
  borderRadius: "8px",
  boxShadow: theme.shadows[5],
  padding: theme.spacing(4),
  textAlign: "center",
}));

const ButtonContainer = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  marginTop: "20px",
});
