import { Typography, styled } from "@mui/material";
import { toast } from "react-toastify";
import { deleteX } from "../../assets/icon";

// Стили для сообщения
const StyledMessage = styled(Typography)(() => ({
  color: "#ffff",
  fontSize: "18px",
  fontWeight: 400,
  display: "flex",
  alignItems: "center", // Центрируем текст и изображение по вертикали
  justifyContent: "space-between", // Разделяем текст и ссылку
  borderRadius: "4px",
  width: "100%", // Занимаем всю ширину контейнера
  whiteSpace: "normal", // Позволяет тексту переноситься
  overflowWrap: "break-word", // Обеспечивает перенос длинных слов
}));

// Функция для отображения уведомлений
export const toastifyMessage = ({
  message = "Успешно",
  status = "success",
  duration = 3000,
  imageUrl = deleteX,
  linkText = "Перейти в корзину",
  linkUrl = "#", // URL для ссылки
}) => {
  let borderColor;
  let backgroundColor;

  switch (status) {
    case "error":
      borderColor = "#000";
      backgroundColor = "#000";
      break;
    default:
      borderColor = "#000";
      backgroundColor = "#000";
      break;
  }

  const style = {
    borderLeft: "10px solid",
    borderLeftColor: borderColor,
    borderRadius: 3,
    backgroundColor,
  };

  const toastOptions = {
    icon: false,
    position: "top-right",
    autoClose: duration,
    style,
  };

  // Создаем компонент с изображением, сообщением и ссылкой
  const toastContent = (
    <StyledMessage>
      <span>{message}</span>
      <a
        href={linkUrl}
        style={{
          color: "#3cde14",
          textDecoration: "none",
          marginLeft: "8px",
          fontSize: "18px",
          fontWeight: "700",
        }}
      >
        {linkText}
      </a>
      {imageUrl && (
        <img
          src={imageUrl}
          alt="Notification"
          style={{ marginLeft: "8px", width: "24px", height: "24px" }}
        />
      )}
    </StyledMessage>
  );

  toast[status](toastContent, toastOptions);
};
