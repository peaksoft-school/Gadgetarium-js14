import { styled } from "@mui/material";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Notification = () => (
  <StyledToastContainer closeButton={false} icon={false} />
);

export default Notification;

const StyledToastContainer = styled(ToastContainer)(({ theme }) => ({
  width: "fit-content",
  height: "60px",
  "& .Toastify__toast--error": {
    width: "auto",
    height: "60px",
    backgroundColor: theme.palette.black.black,
    borderLeft: "10px solid red",
    whiteSpace: "normal",
    overflowWrap: "break-word",
  },
  "& .Toastify__toast--success": {
    height: "60px",
    backgroundColor: theme.palette.black.dark,
    borderLeft: `10px solid ${theme.palette.error.main}`,
    whiteSpace: "normal",
    overflowWrap: "break-word",
  },
  "& .Toastify__progress-bar--success": {
    backgroundColor: theme.palette.primary.main,
  },
  "& .Toastify__progress-bar--error": {
    backgroundColor: theme.palette.primary.main,
  },
  "& .Toastify__toast--pending": {
    backgroundColor: theme.palette.primary.main,
  },
}));
