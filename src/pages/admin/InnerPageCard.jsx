import { styled, Box, display } from "@mui/system";
import {
  garbage,
  Left,
  Right,
  samsungphone,
  systemUiconsDocumentList,
} from "../../assets/icon";
import { NavLink } from "react-router-dom";
import Comments from "../../components/UI/Comments";
import { Button, Rating, Typography } from "@mui/material";
import AdminHeader from "../../components/UI/AdminHeader";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  deleteProduct,
  getProdates,
  getRating,
} from "../../store/innerPageCardAmin/innerPageCardThunk";

const InnerPageCard = () => {
  const dispatch = useDispatch();
  const { products, ratingData } = useSelector((state) => state.innerPageCard);

  useEffect(() => {
    dispatch(
      getProdates({
        productId: 1,
        color: "red",
      })
    );
    dispatch(getRating({ productId: 2 }));
  }, [dispatch]);

  const handleDelete = (productId) => {
    dispatch(deleteProduct(productId));
  };

  return (
    <Box>
      <AdminHeader />
      <StyledPapaDiv>
        <h1>{products?.name || "Название товара не доступно"}</h1>
        <p>{products?.description || "Описание товара не доступно"}</p>
        <StyledDiv>
          <StyledNavLink to="/Product">Товары</StyledNavLink>
          <StyledNavLink to="/About">About</StyledNavLink>
        </StyledDiv>

        <div>
          <StyledImg src={products?.logo || ""} alt="Product Logo" />
          <StyledBr />
        </div>

        <StyledButtonDiv>
          <StyledButton variant="contained">Товар</StyledButton>
          <StyledButton>Детали Товара</StyledButton>
        </StyledButtonDiv>

        <StyledFlex>
          <div>
            <StyledLargeImg
              src={samsungphone}
              // src={products?.images?.[0] || ""}
              // alt="Product Image"
            />

            <StyledImgDiv>
              <StyledArrowImg src={Left} alt="Left Arrow" />
              {products?.images && products.images.length > 0 ? (
                products.images.map((image, index) => (
                  <img key={index} src={image} alt={`Product ${index + 1}`} />
                ))
              ) : (
                <div>No images available</div>
              )}
              <StyledArrowImg src={Right} alt="Right Arrow" />
            </StyledImgDiv>
          </div>

          <StyledBorder>
            <div>
              <h3>{products?.name || "Название товара не доступно"}</h3>
            </div>

            <StyledText>
              <div className="in-stock">
                В наличии ({products?.quantity || "неизвестно"})
              </div>
              <div>Артикул: {products?.itemNumber || "неизвестно"}</div>
            </StyledText>

            <StyledBr />
            <div style={{ display: "flex" }}>
              <div>
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
                <div>
                  <h4>Коротко о товаре:</h4>
                  <StyledIngredients>
                    <StyledIngredientItem>
                      Экран{" "}
                      <span className="value">
                        {products?.characteristics?.["разрешение экрана"] ||
                          "неизвестно"}
                      </span>
                    </StyledIngredientItem>
                    <StyledIngredientItem>
                      Цвет{" "}
                      <span className="value">
                        {products?.color || "неизвестно"}
                      </span>
                    </StyledIngredientItem>
                    <StyledIngredientItem>
                      Дата выпуска{" "}
                      <span className="value">
                        {products?.dateOfIssue || "неизвестно"}
                      </span>
                    </StyledIngredientItem>
                    <StyledIngredientItem>
                      Операционная система{" "}
                      <span className="value">
                        {products?.name || "неизвестно"}
                      </span>
                    </StyledIngredientItem>
                    <StyledIngredientItem>
                      Память{" "}
                      <span className="value">
                        {products?.characteristics?.["память"] || "неизвестно"}
                      </span>
                    </StyledIngredientItem>
                    <StyledIngredientItem>
                      SIM-карты{" "}
                      <span className="value">
                        {products?.quantity || "неизвестно"}
                      </span>
                    </StyledIngredientItem>
                    <StyledIngredientItem>
                      емкость аккумулятора(mA/h){" "}
                      <span className="value">
                        {products?.characteristics?.[
                          "емкость аккумулятора(mA/h)"
                        ] || "неизвестно"}
                      </span>
                    </StyledIngredientItem>
                    <StyledIngredientItem>
                      диогональ экрана{" "}
                      <span className="value">
                        {products?.characteristics?.["диогональ экрана"] ||
                          "неизвестно"}
                      </span>
                    </StyledIngredientItem>
                    <StyledIngredientItem>
                      RAM{" "}
                      <span className="value">
                        {products?.characteristics?.["RAM"] || "неизвестно"}
                      </span>
                    </StyledIngredientItem>
                  </StyledIngredients>
                </div>
              </div>

              <StyledDivFlex>
                <StyledSkidka>
                  <div style={{ fontSize: "10px", fontWeight: "bold" }}>
                    -{products?.percentOfDiscount || 0}%
                  </div>
                </StyledSkidka>

                <h3>{products?.price || "неизвестно"} c</h3>
                <div className="old-price">
                  {products?.price +
                    products?.price * (products?.percentOfDiscount / 100) ||
                    "неизвестно"}{" "}
                  c
                </div>
              </StyledDivFlex>
            </div>

            <StyledButtonsDiv>
              <Button
                variant="outlined"
                onClick={() => handleDelete(products.productId)}
              >
                <img src={garbage} alt="Delete" />
              </Button>
              <Button
                variant="contained"
                sx={{ width: "220px" }}
                color="primary"
              >
                Редактировать
              </Button>
            </StyledButtonsDiv>
          </StyledBorder>
        </StyledFlex>

        <StyledMiniFlex>
          <StyledNav>
            <StyledNavLink2 to={'/description'}>Описание</StyledNavLink2>
            <StyledNavLink2 to={'/Characteristics'}>Характеристики</StyledNavLink2>
            <StyledNavLink2 to ={'/reviwsUsers'}>Отзывы</StyledNavLink2>
          </StyledNav>
          <div style={{ display: "flex", gap: "10px" }}>
            <img
              style={{ width: "25px", height: "25px" }}
              src={systemUiconsDocumentList}
              alt="Documents"
            />
            <StyledNavLink2>Скачать документы.pdf</StyledNavLink2>
          </div>
        </StyledMiniFlex>

        <StyledBr />

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "30px",
            gap: "20px",
          }}
        >
          <h2>Отзывы</h2>
          <RatingReviewsBorder>
            <LeftColumn>
              <DivCar>
                <h3 variant="body2">{ratingData?.rating}</h3>
                <Rating
                  sx={{ fontSize: "20px" }}
                  name="half-rating"
                  value={ratingData?.rating || 0}
                  precision={0.5}
                />
              </DivCar>
              <Typography name="body2" value={ratingData?.rating || 2}>
                отзывов
              </Typography>
            </LeftColumn>
            <RightColumn>
              <RatingWithText>
                <Rating
                  sx={{ fontSize: "20px" }}
                  name="Rating"
                  value={ratingData?.five || 0}
                  precision={1}
                />
                <Typography variant="body2">
                  {ratingData?.five || 0} отзывов
                </Typography>
              </RatingWithText>
              <RatingWithText>
                <Rating
                  sx={{ fontSize: "20px" }}
                  name="Rationg"
                  value={ratingData?.four || 0}
                  precision={1}
                />
                <Typography variant="body2">
                  {ratingData?.four || 0} отзывов
                </Typography>
              </RatingWithText>
              <RatingWithText>
                <Rating
                  sx={{ fontSize: "20px" }}
                  name="half-rating"
                  value={ratingData?.three || 0}
                  precision={1}
                />
                <Typography variant="body2">
                  {ratingData?.three || 0} отзывов
                </Typography>
              </RatingWithText>
              <RatingWithText>
                <Rating
                  sx={{ fontSize: "20px" }}
                  name="half-rating"
                  value={ratingData?.two || 0}
                  precision={1}
                />
                <Typography variant="body2">
                  {ratingData?.two || 0} отзывов
                </Typography>
              </RatingWithText>
              <RatingWithText>
                <Rating
                  sx={{ fontSize: "20px" }}
                  name="half-rating"
                  value={ratingData?.one || 0}
                  precision={1}
                />
                <Typography variant="body2">
                  {ratingData?.one || 0} отзывов
                </Typography>
              </RatingWithText>
            </RightColumn>
          </RatingReviewsBorder>
        </div>
      </StyledPapaDiv>

      <div>
        <Comments />
      </div>
    </Box>
  );
};

export default InnerPageCard;

const StyledPapaDiv = styled(Box)({
  padding: "60px",
});
const StyledMiniFlex = styled(Box)({
  display: "flex",
  marginTop: "80px",
  justifyContent: "space-between",
});
const StyledNav = styled(Box)({
  display: "flex",
  gap: "30px",
});

const StyledDiv = styled(Box)({
  display: "flex",
  gap: "5px",
});

const StyledNavLink = styled(NavLink)({
  color: "black",
  textDecoration: "none",
  fontSize: "15px",
  "&:active": {
    color: "grey",
  },
});
const StyledNavLink2 = styled(NavLink)({
  textDecoration: "none",
  color: "inherit",
  "&:hover": {
    color: "#cb11ab",
  },
});

const StyledDivFlex = styled(Box)({
  display: "flex",
  gap: "20px",
  marginLeft: "130px",

  ".old-price": {
    color: "grey",
    textDecoration: "line-through",
    fontSize: "14px",
  },
});

const StyledImg = styled("img")({
  marginTop: "35px",
});

const StyledBr = styled(Box)({
  border: "1px solid #cdcdcd",
  marginTop: "20px",
});

const StyledButtonDiv = styled(Box)({
  display: "flex",
  gap: "20px",
});

const StyledButton = styled(Button)({
  maxWidth: "100%",
  borderRadius: "4px",
  backgroundColor: "#384255",
  color: "white",
  marginTop: "40px",
});

const StyledLargeImg = styled("img")({
  width: "200px",
  height: "auto",
  marginTop: "20px",
  marginLeft: "130px",
});

const StyledArrowImg = styled("img")({
  width: "30px",
  height: "auto",
});

const StyledImgDiv = styled("div")({
  display: "flex",
  marginTop: "60px",
});

const StyledBorder = styled(Box)({
  marginTop: "20px",
  padding: "10px",
  width: "700px",
});

const StyledBlack = styled(Box)({
  backgroundColor: "black",
  borderRadius: "50%",
  width: "23px",
  height: "23px",
});

const StyledGrey = styled(Box)({
  backgroundColor: "grey",
  borderRadius: "50%",
  width: "23px",
  height: "23px",
});

const StyledSvet = styled(Box)({
  backgroundColor: "#795974",
  borderRadius: "50%",
  width: "23px",
  height: "23px",
});

const StyledRed = styled(Box)({
  backgroundColor: "red",
  borderRadius: "50%",
  width: "23px",
  height: "23px",
});
const StyledBlue = styled(Box)({
  backgroundColor: "blue",
  borderRadius: "50%",
  width: "23px",
  height: "23px",
});

const StyledFlex = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  gap: "20px",
});

const StyledFlexColor = styled(Box)({
  display: "flex",
  gap: "10px",
});

const StyledIngredients = styled("ul")({
  padding: 0,
  listStyle: "none",
  width: "100%",
});

const StyledIngredientItem = styled("li")({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  marginBottom: "0.5em",

  "&::before": {
    content: '""',
    borderBottom: "1px dashed #ccc",
    flexGrow: 1,
    order: 2,
    margin: "0 5px",
  },

  "& .value": {
    order: 3,
  },
});

const StyledText = styled(Box)({
  display: "flex",
  justifyContent: "flex-start",
  gap: "30px",
  ".in-stock": {
    color: "green",
  },
  ".old-price": {
    color: "grey",
    textDecoration: "underline",
    fontSize: "14px",
  },
});

const StyledButtonsDiv = styled(Box)({
  display: "flex",
  gap: "20px",
  justifyContent: "flex-start",
  marginTop: "20px",
  marginLeft: "380px",
  marginTop: "-250px",
});

const StyledSkidka = styled(Box)({
  backgroundColor: "red",
  color: "white",
  fontSize: "bold",
  width: "30px",
  height: "30px",
  borderRadius: "50%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});
const RatingReviewsBorder = styled("div")({
  backgroundColor: "#f4f4f4",
  width: "500px",
  height: "auto",
  borderRadius: "5px",
  display: "flex",
  padding: "16px",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  gap: "50px",
});

const RatingColumn = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "8px",
  alignItems: "center",
});

const RatingWithText = styled("div")({
  display: "flex",
  alignItems: "center",
  gap: "8px",
});

const LeftColumn = styled(RatingColumn)({
  display: "flex",
});

const RightColumn = styled("div")({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
});

const DivCar = styled("div")({
  display: "flex",
  flexDirection: "row",
});
