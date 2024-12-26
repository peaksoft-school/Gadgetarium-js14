import { Box, styled } from "@mui/system";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AdminReview from "../../components/UI/admin/AdminReview";
import { getAllComments } from "../../store/slice/adminComents/adminCommentsAuth";
import Infografics from "../../components/UI/Infografics";
import AdminHeader from "../../components/UI/AdminHeader";
import CircularProgress from "@mui/material/CircularProgress"; // Импортируем спиннер

const AdminProductComents = () => {
  const dispatch = useDispatch();
  const { comments, loading, error } = useSelector(
    (state) => state.adminComments
  );

  const [type, setType] = useState("AllReviews");

  useEffect(() => {
    dispatch(getAllComments("AllReviews"));
  }, [dispatch]);

  const handleType = (type) => {
    setType(type);
    dispatch(getAllComments(type));
  };

  if (loading) {
    return (
      <LoaderContainer>
        <CircularProgress size={50} /> {/* Спиннер вместо текста */}
      </LoaderContainer>
    );
  }

  if (error) {
    return <p>Ошибка: {error}</p>;
  }

  return (
    <div>
      <AdminHeader />
      <ButtonContainer>
        <StyledButton
          onClick={() => handleType("AllReviews")}
          active={type === "AllReviews"}
        >
          Все отзывы
        </StyledButton>
        <StyledButton
          onClick={() => handleType("Unanswered")}
          active={type === "Unanswered"}
        >
          Неотвеченные
        </StyledButton>
        <StyledButton
          onClick={() => handleType("Answered")}
          active={type === "Answered"}
        >
          Отвеченные
        </StyledButton>
      </ButtonContainer>

      <StyledDivComtainer>
        <AdminReview reviews={comments.reviewResponses || []} />
        <Infografics />
      </StyledDivComtainer>
    </div>
  );
};

export default AdminProductComents;

const LoaderContainer = styled(Box)(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
}));

const ButtonContainer = styled(Box)({
  padding: "10px",
  display: "flex",
  gap: "10px",
  marginBottom: "20px",
});

const StyledButton = styled("button")(({ active }) => ({
  padding: "10px 20px",
  borderRadius: "4px",
  border: "none",
  cursor: "pointer",
  backgroundColor: active ? "#e0e2e7" : "#fff",
  color: "#555",
  fontWeight: "bold",
  fontSize: "14px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "5px",

  "&:hover": {
    backgroundColor: "#cb11ab",
    color: "#fff",
  },
  "&:focus": {
    outline: "none",
  },
}));

const StyledDivComtainer = styled(Box)(() => ({
  padding: "20px",
  display: "flex",
  justifyContent: "space-between",
}));
