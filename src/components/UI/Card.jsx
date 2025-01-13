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
import { useDispatch, useSelector } from "react-redux";
import {
  postFavourites,
  postToBasket,
} from "../../store/product-catalog/productCatalogThunk";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useState } from "react";

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
  type = "default",
  disPage = false,
  recommendet = false,
}) => {
  const [addOrDelete, setAddorDelete] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { userData } = useSelector((state) => state.auth);

  const fullStars = Math.floor(reiting);
  const hasHalfStar = reiting % 1 !== 0;

  const subProductId = "1";

  // const handleAddToFavourites = () => {
  //   const updatedState = !addOrDelete;
  //   setAddorDelete(updatedState);
  //   dispatch(postFavourites({ subProductId, addOrDelete: updatedState })); // Отправляем обновленное значение
  // };

  const handleAddToFavourites = () => {
    if (userData.token) {
      const updatedState = !addOrDelete;
      setAddorDelete(updatedState);

      dispatch(postFavourites({ subProductId, addOrDelete: updatedState })); // Отправляем обновленное значение
    } else {
      toast.error("Для добавления в избранное необходимо войти в аккаунт.");
    }
  };

  const handlePostpostToBasket = () => {
    dispatch(postToBasket({ subProductId, quantity: 1 }));
  };

  const discountPrice = Math.round(((newPrice - discount) / newPrice) * 100);

  const handleNavigate = () => {
    navigate(`/user/product/${subProductId}`);
  };

  return (
    <StyledContainer>
      <StyledCard>
        {type !== "viewed" && (
          <StyledIcanConteiner>
            <img src={Component} alt="compare" />
            <img
              src={addOrDelete === true ? redHeart : greyHeart}
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

        <Box padding={2}>
          {type !== "compare" && (
            <Availability>{`В наличии (${title})`}</Availability>
          )}
          <ProductName onClick={handleNavigate}>{text}</ProductName>
          {type !== "compare" && (
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
                {[...Array(5 - fullStars - (hasHalfStar ? 1 : 0))].map(
                  (_, i) => (
                    <StarIcon
                      key={i + fullStars + (hasHalfStar ? 1 : 0)}
                      style={{ color: "#909cb5" }}
                    />
                  )
                )}
              </div>

              <Typography variant="body2" color="textSecondary">
                ({reviews})
              </Typography>
            </RatingContainer>
          )}
          <StyledBoxProject>
            <Box>
              {discount === 0 ? (
                <>
                  <NewPrice>{disPage === true ? discount : newPrice}</NewPrice>
                </>
              ) : (
                <>
                  <NewPrice>{disPage === true ? discount : newPrice}</NewPrice>
                  <OldPrice>{disPage === true ? newPrice : price}</OldPrice>
                </>
              )}
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
  width: "280px",
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

const StyledBoxProject = styled(Box)(({ type }) => ({
  display: "flex",
  flexDirection: type === "compare" ? "column" : "row",
  justifyContent: "space-between",
  alignItems: type === "compare" ? "flex-start" : "center",
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

  "&:hover": {
    textDecoration: "underline",
  },
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
