import { styled } from "@mui/material";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Notification = () => <StyledToastContainer icon={false} />;

export default Notification;

const StyledToastContainer = styled(ToastContainer)(({ theme }) => ({
  "& .Toastify__toast--error": {
    backgroundColor: theme.palette.black.black,
    borderLeft: "10px solid red",



  },
  "& .Toastify__toast--success": {
    backgroundColor: theme.palette.black.dark,
    borderLeft: `10px solid ${theme.palette.error.main}`,
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
