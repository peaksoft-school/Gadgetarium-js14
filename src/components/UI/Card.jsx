import styled from "@emotion/styled";
import { Box, Button, Typography } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import {
  Component,
  greyHeart,
  GroceryCart,
  DiscountClasIcon,
  redHeart,
} from "../../assets/icon";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  postFavourites,
  postToBasket,
} from "../../store/product-catalog/productCatalogThunk";

const Card = ({
  img,
  text,
  discount,
  title,
  reiting,
  reviews,
  newPrice,
  price,
  discountClas,
  subProductId,
  type = "default",
  recommendet = false,
  disPage = false,
}) => {
  const fullStars = Math.floor(reiting);
  const hasHalfStar = reiting % 1 !== 0;
  const dispatch = useDispatch();

  const handleAddToFavourites = () => {
    dispatch(postFavourites({ subProductId, addOrDelete: !discountClas }));
  };

  const handlePostpostToBasket = () => {
    dispatch(postToBasket({ subProductId }));
  };

  const discountPrice = Math.round(((newPrice - discount) / newPrice) * 100);

  return (
    <StyledContainer>
      <StyledCard>
        {type !== "viewed" && (
          <StyledIcanConteiner>
            <img src={Component} alt="compare" />
            <img
              src={discountClas ? redHeart : greyHeart}
              alt="like"
              onClick={handleAddToFavourites}
            />
          </StyledIcanConteiner>
        )}
        {type !== "viewed" && (
          <BoxAicanContainer>
            {discount ? (
              <DiscountContainer>
                <ProtsetBox>
                  {disPage === true ? `-${discountPrice}%` : `-${discount}%`}
                </ProtsetBox>
              </DiscountContainer>
            ) : null}

            {recommendet ? (
              <DiscountContainer>
                <img
                  className="scitca"
                  src={DiscountClasIcon}
                  alt="Icon Two"
                  style={{
                    width: "40px",
                    height: "40px",
                    position: "relative",
                    top: "-35px",
                  }}
                />
              </DiscountContainer>
            ) : null}
          </BoxAicanContainer>
        )}

        <ImageContainer>
          <img className="img" src={img} alt={text} />
        </ImageContainer>

        <Box padding={2} sx={{ cursor: "pointer" }}>
          {type !== "viewed" && (
            <Availability>{`В наличии (${title})`}</Availability>
          )}

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
              {[...Array(fullStars)].map((_, i) => (
                <StarIcon key={i} style={{ color: "#FFC107" }} />
              ))}
              {hasHalfStar && <StarHalfIcon style={{ color: "#FFC107" }} />}
              {[...Array(5 - fullStars - (hasHalfStar ? 1 : 0))].map((_, i) => (
                <StarIcon
                  key={i + fullStars + (hasHalfStar ? 1 : 0)}
                  style={{ color: "#909cb5" }}
                />
              ))}
            </div>

            <Typography variant="body2" color="textSecondary">
              ({reviews})
            </Typography>
          </RatingContainer>

          <StyledBoxProject>
            <Box>
              <NewPrice>{disPage === true ? discount : newPrice}</NewPrice>
              <OldPrice>{disPage === true ? newPrice : price}</OldPrice>
            </Box>

            {type !== "viewed" && (
              <Button
                className="buttonrever"
                variant="contained"
                onClick={handlePostpostToBasket}
              >
                <img src={GroceryCart} alt="" />В корзину
              </Button>
            )}
          </StyledBoxProject>
        </Box>
      </StyledCard>
    </StyledContainer>
  );
};

export default Card;

const StyledContainer = styled(Box)({
  display: "flex",
  justifyContent: "center",
  gap: "16px",
});

const StyledIcanConteiner = styled(Box)({
  display: "flex",
  justifyContent: "end",
  padding: "5px",
  gap: "5px",
  zIndex: 1,
  cursor: "pointer",
});

const DiscountContainer = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "5px",
});

const StyledBoxProject = styled(Box)(() => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "8px",
}));

const StyledCard = styled(Box)(() => ({
  border: "1px solid #e0e0e0",
  borderRadius: "4px",
  boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
  backgroundColor: "#fff",
  position: "relative",
}));

const ImageContainer = styled(Box)({
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

const Availability = styled(Typography)({
  color: "#4CAF50",
  fontWeight: "bold",
  fontSize: "12px",
  marginBottom: "8px",
});

const ProductName = styled(Typography)({
  fontWeight: "bold",
  fontSize: "16px",
  marginBottom: "8px",
});

const RatingContainer = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "4px",
  marginBottom: "8px",
  position: "relative",
});

const OldPrice = styled(Typography)({
  color: "#9e9e9e",
  textDecoration: "line-through",
  fontSize: "14px",
});

const NewPrice = styled(Typography)({
  color: "#000",
  fontWeight: "bold",
  fontSize: "18px",
});
const ProtsetBox = styled(Box)(() => ({
  borderRadius: "50%",
  width: "50px",
  height: "50px",
  backgroundColor: "#f43333",
  fontSize: "16px",
  fontWeight: "bold",
  color: "white",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
  top: "-35px",
}));

const ProtsetBoxNew = styled(Box)(() => ({
  borderRadius: "50%",
  width: "40px",
  height: "40px",
  padding: "10px",
  backgroundColor: "#2fc409",
  fontSize: "16px",
  fontWeight: "bold",
  color: "white",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
  top: "-35px",
}));

const BoxAicanContainer = styled(Box)(() => ({
  display: "flex",
  gap: "10px",
  padding: "8px",
}));
