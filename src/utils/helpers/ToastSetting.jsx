import { Typography, styled } from "@mui/material";
import { toast } from "react-toastify";

// eslint-disable-next-line react-refresh/only-export-components
const StyledMessage = styled(Typography)(() => ({
  color: "#ffff",
  fontSize: "18px",
  fontWeight: 400,
  icon:
}));

export const toastifyMessage = ({
  message = "Успешно",
  status = "success",
  duration = 2000,
}) => {
  let borderColor;
  let backroundColor;

  switch (status) {
    case "error":
      borderColor = "#000";
      backroundColor = "#000";
      break;
    default:
      borderColor = "#000";
      backroundColor = "#000";

      break;
  }

  const style = {
    borderLeft: "10px solid",
    borderLeftColor: borderColor,
    borderRadius: 3,
    backgroundColor: backroundColor,
  };

  const toastOptions = {
    icon: false,
    position: "top-right",
    autoClose: duration,
    style,
  };

  toast[status](<StyledMessage>{message}</StyledMessage>, toastOptions);
};
