import React, { useState } from "react";
import { Avatar, Box, Typography, Rating, Paper } from "@mui/material";
import styled from "@emotion/styled";
import { DeleteAicanRed, garbage, StateDown, StateUp } from "../../../assets/icon";
import Input from "../Input";
import Button from "../Button";

const AdminReview = ({ reviews }) => {
  const [isExpandedAll, setIsExpandedAll] = useState(false);
  const [expandedComments, setExpandedComments] = useState({});

  const toggleExpandAll = () => {
    setIsExpandedAll(!isExpandedAll);
    const newExpandedComments = reviews.reduce((acc, review) => {
      acc[review.id] = !isExpandedAll;
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
        reviews.map((review, index) => {
          const isExpanded = expandedComments[review.id] || isExpandedAll;

          return (
            <StyledRow key={review.id}>
              <Typography>{index + 1}</Typography>
              <Avatar src={review.productImage} alt="Product" />

              <StyledProductInfo>
                <Typography>{review.productName}</Typography>
                <StyledTextModel variant="caption">
                  Модель
                  <br />
                  {review.model}
                </StyledTextModel>
              </StyledProductInfo>

              <StyledCommentBox>
                <Box sx={{ display: "flex", width: "400px", flexWrap: "wrap", margin:'0', padding:'0' }}>
                  <Typography>
                    {isExpanded
                      ? review.comment
                      : review.comment.split(" ").slice(0, 11).join(" ")}{" "}
                  </Typography>

                  {review.comment.split(" ").length > 11 && (
                    <Typography
                      variant="body2"
                      color="primary"
                      onClick={() => toggleExpandComment(review.id)}
                    >
                      {isExpanded }
                    </Typography>
                  )}
                </Box>

                <Typography variant="caption">{review.date}</Typography>
              </StyledCommentBox>

              <StyledBox>
                <Box sx={{ display: "flex", justifyContent: "space-between", width: "100%",  gap:'125px'}}>
                  <Rating value={review.rating} readOnly />

                  <StyledUserInfo>
                    <Avatar src={review.userAvatar} alt={review.user} />
                    <Box>
                      <Typography>{review.user}</Typography>
                      <Typography style={{ color: "#dbdddf" }} variant="caption">
                        {review.userEmail}
                      </Typography>
                    </Box>
                    <StyledDeleteIcon
                      src={garbage}
                      alt="Delete"
                      onMouseEnter={(e) => (e.currentTarget.src = DeleteAicanRed)}
                      onMouseLeave={(e) => (e.currentTarget.src = garbage)}
                      onClick={() => console.log("Delete review:", review.id)}
                    />
                    <Box onClick={toggleExpandAll} style={{ cursor: "pointer" }}>
                      <img src={isExpandedAll ? StateUp : StateDown} alt="Expand All" />
                    </Box>
                  </StyledUserInfo>
                </Box>

                {isExpanded && (
                  <CommentBox>
                    <Typography variant="h6">Ответить на комментарий</Typography>
                    <Input
                      style={{ cursor: "pointer" }}
                      placeholder="Введите ваш ответ..."
                      multiline={true}
                      rows={4}
                    />
                    <Box sx={{ marginLeft: "260px", width: "220px", marginTop: "10px" }}>
                      <Button variant="contained" color="secondary">
                        Отправить
                      </Button>
                    </Box>
                  </CommentBox>
                )}
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

// Стили
const StyledBox = styled("div")(() => ({
  gap: "50px",
  
}));

const StyledContainer = styled(Box)({
  width: "100%",
  padding: "20px",
  borderRadius: "8px",
  boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.1)",
});

const StyledHeader = styled("div")({
  display: "grid",
  gridTemplateColumns: "0.1fr 0.22fr 0.45fr 1.5fr 0.6fr 0.45fr",
  padding: "10px 20px",
  backgroundColor: "#f5f5f5",
  fontWeight: "bold",
  borderBottom: "2px solid gray",
});

const StyledRow = styled("div")({
  display: "grid",
  alignItems: "start",
  padding: "15px 20px",
  borderBottom: "1px solid black",
  gap: "10px",
  gridTemplateColumns: "28px  0.22fr 0.44fr 1.5fr 0.2fr",
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

const StyledTextModel = styled(Typography)(() => ({
  color: "#909cb5",
}));

const StyledDeleteIcon = styled("img")({
  cursor: "pointer",
  width: "24px",
  height: "24px",
  marginLeft: "10px",
  transition: "filter 0.3s ease",
});

const CommentBox = styled(Box)(() => ({
  mt: 1,
  width: "480px",
  "& Input": {
    width: "100%",
  },
}));

export default AdminReview;
