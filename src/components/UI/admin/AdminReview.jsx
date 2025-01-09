import { useState } from "react";
import { Avatar, Box, Typography, Rating, Paper } from "@mui/material";
import styled from "@emotion/styled";
import { DeleteAicanRed, StateDown, StateUp } from "../../../assets/icon";
import { useDispatch } from "react-redux";
import { deleteComment } from "../../../store/slice/adminComents/adminCommentsAuth";
import CommentsAdminInput from "./CommentsAdminInput";
// import { DeleteAicanRed, garbage, StateDown, StateUp } from "../../../assets/icon";
import Input from "../Input";
import Button from "../Button";

const AdminReview = ({ reviews }) => {
  const [isExpandedAll, setIsExpandedAll] = useState(false);
  const [expandedComments, setExpandedComments] = useState({});

  const dispatch = useDispatch();

  const handlerDelete = (id) => {
    dispatch(deleteComment(id));
  };

  const toggleExpandAll = (id) => {
    const newExpandedComments = reviews.reduce((acc, review) => {
      if (review.id === id) {
        acc[review.id] = !isExpandedAll;
      }
      return acc;
    }, {});

    setExpandedComments(newExpandedComments);
  };

  const toggleExpandComment = (id) => {
    setExpandedComments((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <StyledContainer component={Paper}>
      <StyledHeader>
        <Typography>№</Typography>
        <Typography>Фото</Typography>
        <Typography>Название товара</Typography>
        <Typography>Комментарий</Typography>
        <Typography>Оценка</Typography>
        <Typography>Пользователь</Typography>
      </StyledHeader>

      {reviews.length > 0 ? (
        reviews.map((review, reviewId) => {
          const isExpanded = expandedComments[review.id] || isExpandedAll;

          return (
            <StyledRow key={review.id}>
              <Typography>{reviewId + 1}</Typography>
              <Avatar
                src={review.productImg || review.images[0]}
                alt="Product"
              />

              <StyledProductInfo>
                <Typography>{review.productItemNumber}</Typography>
                <Typography>{review.productName}</Typography>
              </StyledProductInfo>
              <Box style={{ display: "flex", gap: "70px" }}>
                <StyledCommentBox>
                  <Box sx={{ width: "400px" }}>
                    <Typography>
                      {isExpanded
                        ? review.commentary
                        : `${review.commentary
                            .split(" ")
                            .slice(0, 10)
                            .join(" ")}...`}
                    </Typography>
                    {review.commentary.split(" ").length > 10 && (
                      <Typography
                        variant="body2"
                        color="primary"
                        onClick={() => toggleExpandComment(review.id)}
                        style={{ cursor: "pointer" }}
                      >
                        {isExpanded ? "Свернуть" : "Читать дальше"}
                      </Typography>
                    )}
                  </Box>
                  <Typography variant="caption">{review.answer}</Typography>
                </StyledCommentBox>
              </Box>

              <StyledBox>
                <Box sx={{ display: "flex", gap: "60px" }}>
                  <Rating value={review.grade} readOnly />
                  <StyledUserInfo>
                    <Avatar src={review.userImg} alt={review.userName} />
                    <Box>
                      <Typography>{review.userName}</Typography>
                      <Typography variant="caption" style={{ color: "#999" }}>
                        {review.userEmail}
                      </Typography>
                    </Box>
                    <StyledDeleteIcon
                      src={DeleteAicanRed}
                      alt=""
                      onClick={() => handlerDelete(review.id)}
                    />
                    <img
                      src={isExpandedAll ? StateUp : StateDown}
                      alt="Expand All"
                      onClick={() => toggleExpandAll(review.id)}
                      style={{ cursor: "pointer", marginLeft: "10px" }}
                    />
                  </StyledUserInfo>
                </Box>

                {isExpanded && <CommentsAdminInput review={review} />}
              </StyledBox>
            </StyledRow>
          );
        })
      ) : (
        <Typography sx={{ padding: "20px", textAlign: "center" }}>
          Нет отзывов для отображения.
        </Typography>
      )}
    </StyledContainer>
  );
};

export default AdminReview;

const StyledBox = styled("div")(() => ({}));

const StyledContainer = styled(Box)({
  width: "100%",
  borderRadius: "8px",
  boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.1)",
});

const StyledHeader = styled("div")({
  display: "grid",
  gridTemplateColumns: "0.2fr 0.30fr 0.70fr 1.5fr 0.7fr 0.80fr",
  padding: "10px 20px",
  backgroundColor: "#f5f5f5",
  fontWeight: "bold",
});

const StyledRow = styled("div")({
  display: "grid",
  alignItems: "start",
  padding: "15px 20px",
  borderBottom: "1px solid black",
  gap: "10px",
  gridTemplateColumns: "40px  0.50fr 0.60fr 0.80fr 0.40fr",
});

const StyledProductInfo = styled("div")({
  display: "flex",
  flexDirection: "column",
});

const StyledCommentBox = styled("div")({
  display: "flex",
  flexDirection: "column",
});

const StyledUserInfo = styled("div")({
  display: "flex",
  alignItems: "center",
  gap: "10px",
});

const StyledDeleteIcon = styled("img")({
  cursor: "pointer",
  width: "24px",
  height: "24px",
  marginLeft: "10px",
  transition: "filter 0.3s ease",
  filter:
    "brightness(0) saturate(100%) invert(62%) sepia(7%) saturate(220%) hue-rotate(180deg) brightness(91%) contrast(88%)", // #91969e

  "&:hover": {
    filter:
      "brightness(0) saturate(100%) invert(24%) sepia(84%) saturate(7496%) hue-rotate(358deg) brightness(102%) contrast(114%)", // red
  },
});
