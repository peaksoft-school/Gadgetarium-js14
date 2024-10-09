// toastUtils.js
import { Typography, styled } from "@mui/material";
import { toast } from "react-toastify";


// Стили для текста уведомлений
const StyledMessage = styled(Typography)(() => ({
  color: "white", // Белый текст
  fontSize: "16px",
  fontWeight: 400,
}));

// Функция для вызова уведомлений
export const toastifyMessage = ({
  message = "Успешно",
  status = "success",
  duration = 2000,
}) => {
  let borderColor;
  const backgroundColor = "black"; // Чёрный фон

  switch (status) {
    case "error":
      borderColor = "red";
      break;
    default:
      borderColor = "green";
      break;
  }

  const style = {
    borderLeft: "10px solid",
    borderLeftColor: borderColor,
    borderRadius: 3,
    backgroundColor: backgroundColor, // Чёрный фон
  };

  const toastOptions = {
    icon: false,
    position: "top-right",
    autoClose: duration,
    style,
  };

  // Вызов тоста в зависимости от статуса
  toast[status](<StyledMessage>{message}</StyledMessage>, toastOptions);
};
