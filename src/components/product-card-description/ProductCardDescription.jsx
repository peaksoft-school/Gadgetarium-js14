import { Box, styled } from "@mui/system";
import React, { useEffect, useState } from "react";
import { SamsungText, Smsung } from "../../assets/image";
import ProductCardTabPanel from "./ProductCardTabPanel";
import { useDispatch, useSelector } from "react-redux";
import Card from "../../components/UI/Card";
import {
  getCharacteristics,
  getLastViews,
  postToFavorites,
} from "../../store/cardof-product-description/cardofProductDescriptionThunk";
import { Button } from "@mui/material";
import {
  greyHeart,
  IconBasket,
  IconC,
  Left,
  Minus,
  PlusCircleIcon,
  redHeart,
  Right,
} from "../../assets/icon";

// /api/user/reviews/{productId} raiting
const viewedItems = [
  {
    img: "https://via.placeholder.com/180",
    brand: "Adidas",
    numberOfReviews: 120,
    price: "1500 руб",
  },
  {
    img: "https://via.placeholder.com/180",
    brand: "Nike",
    numberOfReviews: 85,
    price: "3200 руб",
  },
  {
    img: "https://via.placeholder.com/180",
    brand: "Puma",
    numberOfReviews: 50,
    price: "2800 руб",
  },
  {
    img: "https://via.placeholder.com/180",
    brand: "Reebok",
    numberOfReviews: 70,
    price: "3400 руб",
  },
];
const products = {
  name: "Samsung Galaxy S23",
  quantity: 25,
  itemNumber: "SGS23-001",
  colours: ["#000000", "#FF0000", "#00FF00", "#0000FF"],
  images: [Smsung, Smsung, "https://example.com/image3.jpg"],
  characteristics: {
    "разрешение экрана": "1080 x 2400",
    память: "128GB",
    "Гарантия (месяцев)": "3",
    процессор: '6.1"',
    Вес: "1.5 g",
  },
  color: "Чёрный",
  dateOfIssue: "2024-01-15",
  percentOfDiscount: 10,
  price: 60000,
};

const ProductCardDescription = () => {
  const [count, setCount] = useState(1);
  const [isFavourite, setIsFavourite] = useState(false);
  const handleClick = () => {
    dispatch(postToFavorites);
    setIsFavourite(!isFavourite);
  };
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const dispatch = useDispatch();
  const { lastViews } = useSelector((state) => state.cardofProduct);

  const handleLeftClick = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? products.images.length - 1 : prevIndex - 1
    );
  };

  const handleRightClick = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === products.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    dispatch(getLastViews());
  }, []);

  const { elements } = lastViews;
  console.log("ff", elements);

  const CardId = 1;
  useEffect(() => {
    dispatch(getCharacteristics(CardId));
  }, []);

  return (
    <WrapperMainBox>
      <FirstBox>
        <span>Главная » Смартфоны »</span>
        <span>Galaxy S21 5G</span>
        <StyledH2>
          <img src={SamsungText} alt="samsung" />
        </StyledH2>
        <StyledHr />
        <StyledFlex>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <StyledLargeImg
              src={products.images[currentImageIndex]}
              alt={`Product Image ${currentImageIndex + 1}`}
            />

            <StyledImgDiv>
              <StyledArrowImg
                src={Left}
                alt="Left Arrow"
                onClick={handleLeftClick}
              />
              {products?.images && products.images.length > 0 ? (
                products.images.map((image, index) => (
                  <Box
                    key={index}
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      margin: "0 10px",
                      padding: "5px",
                      border:
                        index === currentImageIndex
                          ? "2px solid #c812aa"
                          : "1px solid #ccc",
                      borderRadius: "2px",
                      cursor: "pointer",
                      transition: "transform 0.2s",
                      "&:hover": {
                        transform: "scale(1.05)",
                      },
                    }}
                    onClick={() => setCurrentImageIndex(index)}
                  >
                    <img
                      src={image}
                      alt={`Product ${index + 1}`}
                      style={{
                        width: "50px",
                        height: "50px",
                        objectFit: "cover",
                      }}
                    />
                  </Box>
                ))
              ) : (
                <div>No images available</div>
              )}

              <StyledArrowImg
                src={Right}
                alt="Right Arrow"
                onClick={handleRightClick}
              />
            </StyledImgDiv>
          </div>

          <StyledBorder>
            <div style={{ paddingBottom: "30px" }}>
              <StyledH2>
                {products?.name || "Название товара не доступно"}
              </StyledH2>
            </div>

            <StyledText>
              <div className="in-stock">
                В наличии ({products?.quantity || "неизвестно"})
              </div>
              <div>Артикул: {products?.itemNumber || "неизвестно"}</div>
            </StyledText>
            <StyledBr />
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Box>
                <h4>Цвет товара:</h4>
                <StyledFlexColor>
                  {products?.colours && products.colours.length > 0 ? (
                    products.colours.map((color, index) => (
                      <StyledBlack
                        key={index}
                        style={{ backgroundColor: color }}
                      />
                    ))
                  ) : (
                    <div>No colors available</div>
                  )}
                </StyledFlexColor>
              </Box>
              <Box>
                <h4>Количество:</h4>
                <div
                  style={{
                    display: "flex",
                    gap: "10px",
                    alignItems: "center",
                    marginTop: "8px",
                  }}
                >
                  <img
                    src={Minus}
                    alt="Minus"
                    onClick={() => setCount((prev) => Math.max(1, prev - 1))}
                  />
                  {count}
                  <img
                    src={PlusCircleIcon}
                    alt="Plus"
                    onClick={() => setCount((prev) => prev + 1)}
                  />
                </div>
              </Box>
              <Box>
                <Box sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
                  <StyledSkidka>
                    <div style={{ fontSize: "10px", fontWeight: "bold" }}>
                      -{products?.percentOfDiscount || 0}%
                    </div>
                  </StyledSkidka>

                  <h2>
                    {products?.price || "неизвестно"}{" "}
                    <img src={IconC} alt="currency" />
                  </h2>
                  <StyledOldBox>
                    {products?.price ? (
                      <>
                        <span className="old-price-text">
                          {products?.price +
                            products?.price *
                              (products?.percentOfDiscount / 100)}
                          c
                        </span>
                      </>
                    ) : (
                      "неизвестно"
                    )}
                  </StyledOldBox>
                </Box>
                <StyledHr />
                <StyledButtonsDiv>
                  <StyledFavouritBox onClick={handleClick}>
                    <img
                      src={isFavourite ? redHeart : greyHeart}
                      alt="Favourit"
                    />
                  </StyledFavouritBox>
                  <Button variant="contained" color="primary">
                    <img src={IconBasket} alt="" />В корзину
                  </Button>
                </StyledButtonsDiv>
              </Box>
            </Box>

            <div style={{ display: "flex" }}>
              <div>
                <div>
                  <h4>Коротко о товаре:</h4>
                  <StyledIngredients>
                    <StyledIngredientItem>
                      Экран
                      <span className="value">
                        {products?.characteristics?.["разрешение экрана"] ||
                          "неизвестно"}
                      </span>
                    </StyledIngredientItem>
                    <StyledIngredientItem>
                      Цвет
                      <span className="value">
                        {products?.color || "неизвестно"}
                      </span>
                    </StyledIngredientItem>
                    <StyledIngredientItem>
                      Дата выпуска
                      <span className="value">
                        {products?.dateOfIssue || "неизвестно"}
                      </span>
                    </StyledIngredientItem>
                    <StyledIngredientItem>
                      Операционная система
                      <span className="value">
                        {products?.name || "неизвестно"}
                      </span>
                    </StyledIngredientItem>
                    <StyledIngredientItem>
                      Память
                      <span className="value">
                        {products?.characteristics?.["память"] || "неизвестно"}
                      </span>
                    </StyledIngredientItem>
                    <StyledIngredientItem>
                      SIM-карты
                      <span className="value">
                        {products?.quantity || "неизвестно"}
                      </span>
                    </StyledIngredientItem>
                    <StyledIngredientItem>
                      Гарантия (месяцев)
                      <span className="value">
                        {products?.characteristics?.["Гарантия (месяцев)"] ||
                          "неизвестно"}
                      </span>
                    </StyledIngredientItem>
                    <StyledIngredientItem>
                      Процессор
                      <span className="value">
                        {products?.characteristics?.["процессор"] ||
                          "неизвестно"}
                      </span>
                    </StyledIngredientItem>
                    <StyledIngredientItem>
                      Вес
                      <span className="value">
                        {products?.characteristics?.["Вес"] || "неизвестно"}
                      </span>
                    </StyledIngredientItem>
                  </StyledIngredients>
                </div>
              </div>
            </div>
          </StyledBorder>
        </StyledFlex>
      </FirstBox>
      <ProductCardTabPanel />
      <Box sx={{ padding: "60px 80px" }}>
        {viewedItems.length > 0 && (
          <>
            <h2>Просмотренные товары</h2>
            <Box
              sx={{
                paddingLeft: "30px",
                display: "flex",
                gap: "95px",
                paddingTop: "20px",
              }}
            >
              {viewedItems.map((item, index) => (
                <Box key={index} sx={{ width: "160px" }}>
                  <Card
                    img={item.img}
                    text={item.brand}
                    reviews={item.numberOfReviews}
                    newPrice={item.price}
                    reiting={3}
                    type="viewed"
                  />
                </Box>
              ))}
            </Box>
          </>
        )}
      </Box>
    </WrapperMainBox>
  );
};

export default ProductCardDescription;

const WrapperMainBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.lightGrey.light,
  width: "100%",
}));

const FirstBox = styled(Box)`
  font-size: 15px;
  padding: 60px 80px;
  span {
    display: inline-block;
    padding-bottom: 30px;
  }

  span:first-of-type {
    color: grey;
  }

  span:nth-of-type(2) {
    font-weight: bold;
    margin-left: 6px;
  }
`;
const StyledHr = styled("hr")(() => ({
  width: "100%",
  padding: "0.6px",
  border: "none",
  backgroundColor: "#d1cfcf",
  marginTop: "10px",
}));

const StyledH2 = styled("h2")(() => ({
  fontSize: "22px",
  fontFamily: "serif",
}));

const StyledFlex = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  gap: "20px",
  alignItems: "center",
});

const StyledFlexColor = styled(Box)({
  display: "flex",
  gap: "10px",
  marginTop: "8px",
});

const StyledBlack = styled(Box)({
  backgroundColor: "black",
  borderRadius: "50%",
  width: "23px",
  height: "23px",
  "&:hover": {
    border: "2px solid #c812aa",
  },
});

const StyledLargeImg = styled("img")({
  width: "300px",
  display: "flex",
  padding: "0px",
  alignSelf: "center",
  paddingTop: "0px !important",
});

const StyledArrowImg = styled("img")({
  width: "30px",
  height: "auto",
});

const StyledImgDiv = styled("div")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginTop: "100px",
  gap: "30px",
});

const StyledBorder = styled(Box)({
  marginTop: "20px",
  padding: "10px",
  width: "700px",
});

const StyledIngredients = styled("ul")({
  padding: 0,
  listStyle: "none",
  width: "100%",
  paddingTop: "5px",
});

const StyledIngredientItem = styled("li")({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",

  "&::before": {
    content: '""',
    borderBottom: "1.5px dashed #ccc",
    flexGrow: 1,
    order: 2,
    margin: "0 7px",
  },

  "& .value": {
    order: 3,
    color: "#000000 !important",
  },

  "& span": {
    padding: "6px 0",
  },

  color: "grey",
});

const StyledText = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  padding: "0px",
  ".in-stock": {
    color: "#30c600",
    fontSize: "15px",
    fontFamily: "sans-serif",
    letterSpacing: "1px",
  },
  ".old-price": {
    color: "grey",
    textDecoration: "underline",
    fontSize: "15px",
  },
  paddingBottom: "-3px",
});

const StyledButtonsDiv = styled(Box)({
  display: "flex",
  gap: "20px",
  justifyContent: "flex-start",
  marginTop: "20px",
});

const StyledSkidka = styled(Box)({
  backgroundColor: "#ee3c48",
  color: "white",
  fontSize: "bold",
  width: "35px",
  height: "35px",
  borderRadius: "50%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const StyledBr = styled(Box)({
  border: "1px solid #cdcdcd",
  marginTop: "10px",
  marginBottom: "30px",
});

const StyledOldBox = styled(Box)({
  "& .old-price-text": {
    textDecoration: "line-through",
    color: "grey",
    padding: "0px",
    fontWeight: "bold",
    marginLeft: "6px",
  },
});

const StyledFavouritBox = styled(Box)({
  width: "60px ",
  height: "45px",
  border: "1px solid #939cb1",
  textAlign: "center",
  display: "flex",
  alignItems: "center",
  borderRadius: "4px",
  justifyContent: "center",
  cursor: "pointer",
});
