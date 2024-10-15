/* eslint-disable no-unused-vars */
import styled from "@emotion/styled";
import { Box, Button, Typography } from "@mui/material";
import StarIcon from "@mui/icons-material/Star"; // Иконка полной звезды
import StarHalfIcon from "@mui/icons-material/StarHalf"; // Иконка полузаполненной звезды
import React from "react";
import { Component, greyHeart, GroceryCart } from "../../assets/icon";

const Card = ({
  img,
  text,
  discount,
  title,
  reiting,
  reviews,
  newPrice,
  oldPrice,
  discountNew,
  discountClas,
  ...rest
}) => {
  const fullStars = Math.floor(reiting); 
  const hasHalfStar = reiting % 1 !== 0; 

  

  

  return (
    <StyledContainer>
      <StyledCard>
        <StyledIcanConteiner>
          <img src={Component} alt="" />
          <img src={greyHeart} alt="" />
        </StyledIcanConteiner>

        <Box>
        {/* Проверка иконки скидки (discountIcon), если строка не пустая */}
        {discount ? (
          <img
            className="scitca"
            src={discount}
            alt="Discount Icon"
            style={{ position: "relative", top: "-35px", padding: "5px" }}
          />
        ) : null}

        {/* Проверка на видимость иконки 1 с тернарным оператором */}
        {discountNew ? (
          <img
            className="scitca"
            src={discountNew}
            alt="Icon One"
            style={{ position: "relative", top: "-35px", padding: "5px" }}
          />
        ) : null}

        {/* Проверка на видимость иконки 2 с тернарным оператором */}
        {discountClas ? (
          <img
            className="scitca"
            src={discountClas}
            alt="Icon Two"
            style={{ position: "relative", top: "-35px", padding: "5px" }}
          />
        ) : null}

        {/* Остальной контент карточки */}
     
      </Box>
        <ImageContainer>
          <img className="img" src={img} alt={text} />
        </ImageContainer>

        {/* Тело карточки */}
        <Box padding={2}>
          <Availability>{`В наличии (${title})`}</Availability>
          <ProductName>{text}</ProductName>

          <RatingContainer>
            <Typography
              variant="body2"
              style={{
                fontWeight: "bold",
                color: "#909cb5",
                fontSize: "13px",
                marginRight: "8px",
              }}
            >
              Рейтинг
            </Typography>

            <div style={{ display: "flex", flexDirection: "row" }}>
              {/* Рендерим полные звезды */}
              {[...Array(fullStars)].map((_, i) => (
                <StarIcon key={i} style={{ color: "#FFC107" }} />
              ))}
              {hasHalfStar && <StarHalfIcon style={{ color: "#FFC107" }} />}
              {/* Рендерим пустые звезды до 5 */}
                {[...Array(5 - fullStars - (hasHalfStar ? 1 : 0))].map((_, i) => (
                  <StarIcon key={i + fullStars + (hasHalfStar ? 1 : 0)} style={{ color: "#909cb5" }} />
                ))}
            </div>

            <Typography variant="body2" color="textSecondary">
              ({reviews})
            </Typography>
          </RatingContainer>

          {/* Цена и кнопка */}
          <StyledBoxProject>
            <Box>
              <NewPrice>{newPrice}</NewPrice>
              <OldPrice>{oldPrice}</OldPrice>
            </Box>
            <Button className="buttonrever" variant="contained">
              <img src={GroceryCart} alt="" />В корзину
            </Button>
          </StyledBoxProject>
        </Box>
      </StyledCard>
    </StyledContainer>
  );
};

export default Card;

const StyledContainer = styled(Box)( {
  display: "flex",
  justifyContent: "center",
  gap: "16px",
});

const StyledIcanConteiner = styled(Box)( {
  display: "flex",
  justifyContent: "end",
  padding: "5px",
  gap: "5px",
  zIndex: 1,
});

const StyledBoxProject = styled(Box)(() => ( {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "8px",
  "&.MuiButtonBase-root": {
    width: "100%",
    color: "#88226a",
    fontSize: "18px",
    borderRadius: "4px",
    border: "1px solid #e313bf",
    textTransform: "uppercase",
    backgroundColor: "transparent",
    "&:hover": {
      color: "white",
      backgroundColor: "#cb11ab",
    },
    "&:active": {
      backgroundColor: "#e313bf",
      color: "white",
    },
  },
}));

const StyledCard = styled(Box)( {
  width: "300px",
  border: "1px solid #e0e0e0",
  borderRadius: "12px",
  boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
  backgroundColor: "#fff",
  position: "relative",
});

const ImageContainer = styled(Box)( {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "200px",
  position: "relative",
  "& .img": {
    width: "180px",
    padding: "10px",
    height: "auto",
    objectFit: "cover",
    borderTopLeftRadius: "12px",
    borderTopRightRadius: "12px",
  },
});

const Availability = styled(Typography)( {
  color: "#4CAF50",
  fontWeight: "bold",
  fontSize: "12px",
  marginBottom: "8px",
});

const ProductName = styled(Typography)( {
  fontWeight: "bold",
  fontSize: "16px",
  marginBottom: "8px",
});

const RatingContainer = styled(Box)( {
  display: "flex",
  alignItems: "center",
  gap: "4px",
  marginBottom: "8px",
  position: "relative",
});

const OldPrice = styled(Typography)( {
  color: "#9e9e9e",
  textDecoration: "line-through",
  fontSize: "14px",
});

const NewPrice = styled(Typography)( {
  color: "#000",
  fontWeight: "bold",
  fontSize: "18px",
});
