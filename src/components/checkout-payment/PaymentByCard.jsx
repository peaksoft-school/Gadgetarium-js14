import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  Alert,
  CircularProgress,
} from "@mui/material";
import axios from "axios";

const PaymentByCard = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvc, setCvc] = useState("");
  const [cardholderName, setCardholderName] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handlePayment = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage("");
    setSuccessMessage("");

    try {
      const response = await axios.post("http://localhost:3000/payment", {
        cardNumber,
        expiryDate,
        cvc,
        cardholderName,
      });

      if (response.data.id) {
        setSuccessMessage("Оплата успешно завершена!");
      } else {
        setErrorMessage(
          "Ошибка при оплате. Проверьте данные и повторите попытку."
        );
      }
    } catch (error) {
      console.error("Ошибка при выполнении платежа:", error);
      setErrorMessage("Ошибка при выполнении платежа. Проверьте данные.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        maxWidth: "400px",
        margin: "50px auto",
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "8px",
        background: "#f9f9f9",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Typography variant="h5" textAlign="center" marginBottom={2}>
        Оплата картой
      </Typography>
      <form onSubmit={handlePayment}>
        <TextField
          fullWidth
          label="Номер карты"
          variant="outlined"
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
          margin="normal"
          required
        />
        <TextField
          fullWidth
          label="Срок действия (MM/YY)"
          variant="outlined"
          value={expiryDate}
          onChange={(e) => setExpiryDate(e.target.value)}
          margin="normal"
          required
        />
        <TextField
          fullWidth
          label="CVC"
          variant="outlined"
          value={cvc}
          onChange={(e) => setCvc(e.target.value)}
          margin="normal"
          required
        />
        <TextField
          fullWidth
          label="Имя владельца"
          variant="outlined"
          value={cardholderName}
          onChange={(e) => setCardholderName(e.target.value)}
          margin="normal"
          required
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{ marginTop: "16px" }}
          disabled={loading}
        >
          {loading ? (
            <CircularProgress size={24} color="inherit" />
          ) : (
            "Продолжить"
          )}
        </Button>
        {errorMessage && (
          <Alert severity="error" sx={{ marginTop: "16px" }}>
            {errorMessage}
          </Alert>
        )}
        {successMessage && (
          <Alert severity="success" sx={{ marginTop: "16px" }}>
            {successMessage}
          </Alert>
        )}
      </form>
    </Box>
  );
};

export default PaymentByCard;
