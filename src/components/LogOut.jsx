import { Box, Modal, Typography } from "@mui/material";
import React from "react";
import Button from "./UI/Button";
import { logout } from "../store/auth/authSlice";
import { useDispatch } from "react-redux";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  borderRadius: "10px",
};

const LogOut = ({ open, onClose }) => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    onClose();
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={style}>
        <Typography>Вы уверены, что хотите выйти?</Typography>
        <div style={{ display: "flex", gap: "8px" }}>
          <Button
            variant="outlined"
            color="primary"
            onClick={onClose}
            style={{ marginTop: "8px" }}
          >
            Закрыть
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={handleLogout}
            style={{ marginTop: "8px" }}
          >
            Выйти
          </Button>
        </div>
      </Box>
    </Modal>
  );
};

export default LogOut;
