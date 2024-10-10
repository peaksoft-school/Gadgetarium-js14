import { Typography, styled } from "@mui/material";
import { toast } from "react-toastify";
import { deleteX } from "../../assets/icon/index";

const StyledMessage = styled(Typography)(() => ({
  color: "#ffff",
  fontSize: "18px",
  fontWeight: 400,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  borderRadius: "4px",
  width: "100%",
  whiteSpace: "normal",
  overflowWrap: "break-word",
}));

export const toastifyMessage = ({
  message = "Успешно",
  status = "success",
  duration = 1111111111,
  imageUrl = deleteX,
  linkText = "",
  linkUrl = "#",
}) => {
  let borderColor;
  let backgroundColor;

  switch (status) {
    case "error":
      borderColor = "#f00";
      backgroundColor = "#f00";

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

  const toastContent = (
    <StyledMessage>
      <span style={{}}>{message}</span>
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
