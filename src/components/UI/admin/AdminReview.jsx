import React, { useState } from "react";
import { Avatar, Box, Typography, Rating, Paper, Button } from "@mui/material";
import styled from "@emotion/styled";
import { DeleteAicanRed, garbage, StateDown } from "../../../assets/icon"; // Убедитесь, что пути к иконкам правильные
import Input from "../Input"; // Импорт Input, если он используется

const AdminReview = ({ reviews }) => {
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

      <Button variant="outlined" onClick={toggleExpandAll}>
        {isExpandedAll ? "Скрыть все ответы" : "Показать все ответы"}
      </Button>
    </StyledContainer>
  );
};

const ReviewComponent = ({ review, index, isExpandedAll,toggleExpandAll }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [icon, setIcon] = useState(garbage);
  const [responseText, setResponseText] = useState("");

  const handleMouseEnter = () => setIcon(DeleteAicanRed);
  const handleMouseLeave = () => setIcon(garbage);
  const handleOpenModal = () => setIsModalOpen(true);


  const handleSaveResponse = () => {
    console.log("Response saved:", responseText);
    setResponseText(""); // Сброс текста ответа после сохранения
    setIsExpanded(false); // Закрыть поле ответа после сохранения
  };

  return (
    <StyledRow>
      <Typography>{index + 1}</Typography>
      <Avatar
        src={review.photo}
        alt="Фото"
        style={{ width: "40px", height: "40px" }}
      />
      <ProductInfo>
        <Typography>{review.productName}</Typography>
        <Typography variant="caption">Модель: {review.model}</Typography>
      </ProductInfo>
      <CommentSection>
        <Typography>{review.comment}</Typography>
        {(isExpanded || isExpandedAll) && (
          <Box sx={{ mt: 1 }}>
            <Typography>Дополнительная информация о комментарии...</Typography>
          </Box>
        )}
      </CommentSection>
      <StyledDiv>
        <RatingSection>
          <Rating value={review.rating} readOnly />
        </RatingSection>
        <UserSection>
          <Typography>{review.user}</Typography>
        </UserSection>
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

      {(isExpanded || isExpandedAll) && (
        <Box sx={{ mt: 1, gridColumn: 'span 6' }}>
          <Typography variant="h6">Ответить на комментарий</Typography>
          <Input
            style={{ cursor: "pointer" }}
            placeholder="Введите ваш ответ..."
            multiline={true}
            rows={4}
            value={responseText}
            onChange={(e) => setResponseText(e.target.value)} 
            />
          <Button
            variant="contained"
            color="secondary"
            onClick={handleSaveResponse}
            >
            Сохранить ответ
          </Button>
        </Box>
      )}
      </StyledDiv>
    </StyledRow>
  );
};

export default AdminReview;

const StyledContainer = styled(Box)( {
  width: "100%",
  padding: "20px",
  borderRadius: "8px",
  boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.1)",
});

const StyledHeader = styled("div")({
  display: "grid",
  gridTemplateColumns: "0.1fr 0.15fr 0.35fr 1.5fr 0.2fr 0.25fr",
  padding: "10px 20px",
  backgroundColor: "#f5f5f5",
  fontWeight: "bold",
  borderBottom: "2px solid gray",
});

const StyledRow = styled("div")({
  display: "grid",
  gridTemplateColumns: "0.1fr 0.15fr 0.35fr 1.5fr 0.2fr 0.25fr",
  alignItems: "center",
  padding: "15px 20px",
  borderBottom: "1px solid #ddd",
  boxSizing: "border-box",
});

const ProductInfo = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "4px",
});

const CommentSection = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "4px",
});

const RatingSection = styled(Box)( {
  marginLeft: "-70px",
});

const UserSection = styled("div")({
  display: "flex",
  alignItems: "center",
  marginLeft: "10px",
});

const StyledDiv = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'flex-end',
  gap: '10px',
}));
const StyledDeleteIcon = styled("img")({
  border: "1px solid blue",

  cursor: "pointer",
  width: "24px",
  height: "24px",
  marginLeft: "10px",
  transition: "filter 0.3s ease",
});