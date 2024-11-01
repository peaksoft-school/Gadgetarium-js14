import React, { useState } from "react";
import { Avatar, Box, Typography, Rating, Paper } from "@mui/material";
import styled from "@emotion/styled";
import { DeleteAicanRed, garbage, StateDown } from "../../../assets/icon";
import Input from "../Input";
import Button from "../Button";

const OrderPro = ({ reviews }) => {
  const [isExpandedAll, setIsExpandedAll] = useState(false);

  const toggleExpandAll = () => setIsExpandedAll(!isExpandedAll);

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

      {reviews.map((review, index) => (
        <ReviewComponent
          key={review.id}
          review={review}
          index={index}
          isExpandedAll={isExpandedAll}
          toggleExpandAll={toggleExpandAll}
        />
      ))}
    </StyledContainer>
  );
};

const ReviewComponent = ({ review, index, isExpandedAll, toggleExpandAll }) => {
  const [icon, setIcon] = useState(garbage);

  const [isExpanded, setIsExpanded] = useState(false);

  const handleMouseEnter = () => setIcon(DeleteAicanRed);
  const handleMouseLeave = () => setIcon(garbage);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const handleSaveResponse = () => {
    console.log("Response saved:", responseText);
    handleCloseModal();
  };

  return (
    <StyledRow
      style={{
        display: "grid",
        gap: "20px",
        gridTemplateColumns: "0.2fr 0.2fr 0.5fr 1fr 1fr 1fr",
      }}
    >
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
        <Typography>{review.comment}</Typography>
        {(isExpanded || isExpandedAll) && (
          <Box sx={{ mt: 1 }}>
            <Typography>Дополнительная информация о комментарии...</Typography>
          </Box>
        )}
        <Typography variant="caption">{review.date}</Typography>
      </StyledCommentBox>

      <StyledBox>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Rating value={review.rating} readOnly />

          <StyledUserInfo>
            <Avatar src={review.userAvatar} alt={review.user} />
            <Box>
              <Typography>{review.user}</Typography>
              <Typography variant="caption">{review.userEmail}</Typography>
            </Box>
            <StyledDeleteIcon
              src={icon}
              alt="Delete"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onClick={handleOpenModal}
            />
            <Box onClick={toggleExpandAll} style={{ cursor: "pointer" }}>
              <img src={StateDown} alt="Expand" />
            </Box>
          </StyledUserInfo>
        </Box>

        {(isExpanded || isExpandedAll) && (
          <CommentBox>
            <Typography variant="h6">Ответить на комментарий</Typography>
            <Input
              style={{ cursor: "pointer" }}
              placeholder="Введите ваш ответ..."
              multiline={true}
              rows={4}
            />
            <Box
              sx={{ marginLeft: "260px", width: "220px", marginTop: "10px" }}
            >
              <Button
                variant="contained"
                color="secondary"
                onClick={handleSaveResponse}
              >
                sdfdas
              </Button>
            </Box>
          </CommentBox>
        )}
      </StyledBox>
    </StyledRow>
  );
};

export default OrderPro;

const StyledBox = styled("div")(() => ({
  gap: "10px",
  width: "100%",
  padding: "20px",
  border: "1px solid red ",
}));

const StyledContainer = styled(Box)({
  width: "100%",
  padding: "20px",
  borderRadius: "8px",
  boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.1)",
  border: "1px solid red ",
});

const StyledHeader = styled("div")({
  display: "grid",
  gridTemplateColumns: "0.2fr 0.2fr 0.5fr 1fr 1fr 1fr",

  padding: "10px 20px",
  backgroundColor: "#f5f5f5",
  fontWeight: "bold",
  borderBottom: "2px solid gray",
});

const StyledRow = styled("div")({
  display: "flex",
  alignItems: "center",
  padding: "15px 20px",
  borderBottom: "1px solid black",
  width: "100%",
  boxSizing: "border-box",
});

const StyledProductInfo = styled("div")({
  border: "1px solid blue",
  display: "flex",
  flexDirection: "column",
});

const StyledCommentBox = styled("div")({
  border: "1px solid blue",

  display: "flex",
  flexDirection: "column",
});

const StyledUserInfo = styled("div")({
  border: "1px solid blue",
  display: "flex",
  alignItems: "center",
  gap: "20px",
});

const StyledTextModel = styled(Typography)(() => ({
  border: "1px solid blue",

  color: "#909cb5",
}));

const StyledDeleteIcon = styled("img")({
  border: "1px solid blue",

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
