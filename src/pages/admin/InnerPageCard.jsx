import { styled, Box } from "@mui/system";
import {
  garbage,
  Left,
  Right,
  samsungphone,
  systemUiconsDocumentList,
} from "../../assets/icon";
import { NavLink, useNavigate } from "react-router-dom";
import Comments from "../../components/UI/Comments";
import { Button, Rating } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  deleteProduct,
  getProdates,
} from "../../store/innerPageCardAmin/innerPageCardThunk";
import { ROUTES } from "../../utils/routes";
import { TabList, TabPanel } from "@mui/lab";

import TabsContent from "./TabsContent";

const products2 = {
  name: "Samsung Galaxy S23",
  quantity: 25,
  itemNumber: "SGS23-001",
  colours: ["#000000", "#FF0000", "#00FF00", "#0000FF"],
  images: [samsungphone, samsungphone, "https://example.com/image3.jpg"],
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

const InnerPageCard = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };
  const [value1, setValue1] = useState("1");
  const handleChange2 = (event, newValue) => {
    setValue1(newValue);
  };

  const dispatch = useDispatch();
  const { products} = useSelector((state) => state.innerPageCard);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [value, setValue] = useState(0);

  useEffect(() => {
    dispatch(
      getProdates({
        productId: 1,
        color: "red",
      })
    );
  }, [dispatch]);

  const prodactID = 1;
  const handleDelete = () => {
    dispatch(deleteProduct(prodactID));
  };

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
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box>
      <StyledPapaDiv>
        <h1>{products?.name || "Название товара не доступно"}</h1>
        <p>{products?.description || "Описание товара не доступно"}</p>
        <StyledDiv>
          <StyledNavLink to="/Product">Товары</StyledNavLink>
          <StyledNavLink to="/About">About</StyledNavLink>
        </StyledDiv>

        <div>
          <StyledImg src={products?.logo || ""} alt="Product Logo" />
          <hr />
        </div>

        <StyledButtonDiv>
          <StyledButton variant="contained">Товар</StyledButton>
          <StyledButton variant="contained" to={ROUTES.ADMIN.productTable}>
            Детали Товара
          </StyledButton>
        </StyledButtonDiv>

        <StyledFlex>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <StyledLargeImg
              src={products2.images[currentImageIndex]}
              alt={`Product Image ${currentImageIndex + 1}`}
            />

            <StyledImgDiv>
              <StyledArrowImg
                src={Left}
                alt="Left Arrow"
                onClick={handleLeftClick}
              />
              {products2?.images && products2.images.length > 0 ? (
                products2.images.map((image, index) => (
                  <Box
                    key={index}
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      margin: "0 10px",
                      padding: "5px",
                      width: "55px",
                      height: "70px",
                      border:
                        index === currentImageIndex
                          ? "2px solid #c812aa"
                          : "1px solid transparent",
                      borderRadius: "2px",
                      cursor: "pointer",
                      transition: "transform 0.2s, border 0.2s",
                      "&:hover": {
                        border: "2px solid #c812aa",
                        transform: "scale(1.05)",
                      },
                      "&:active": {
                        border: "2px solid #c812aa",
                      },
                    }}
                    onClick={() => setCurrentImageIndex(index)}
                  >
                    <img
                      src={image}
                      alt={`Product ${index + 1}`}
                      style={{
                        width: "40px",
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
            <div>
              <h3>{products?.name || "Название товара не доступно"}</h3>
            </div>

            <StyledText>
              <div className="in-stock">
                В наличии ({products?.quantity || "неизвестно"})
              </div>
              <div>Артикул: {products?.itemNumber || "неизвестно"}</div>
              <div>
                <Rating
                  precision={0.5}
                  value={products?.rating || "неизвестно"}
                >
                  {products?.rating || "неизвестно"}
                </Rating>
              </div>
            </StyledText>

            <StyledBr />
            <div style={{ display: "flex" }}>
              <div>
                <h4 style={{ marginTop: "10px" }}>Цвет товара:</h4>
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
                  <h4 style={{ marginTop: "10px", marginBottom: "10px" }}>
                    Коротко о товаре:
                  </h4>
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
              <Button variant="outlined" onClick={() => handleDelete()}>
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

        <TabsContent />

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "30px",
            gap: "20px",
          }}
        ></div>
      </StyledPapaDiv>
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
  width: "150px",
  objectFit: "cover",
});

const StyledBr = styled(Box)({
  border: "1px solid #cdcdcd",
  marginTop: "-10px",
});

const StyledButtonDiv = styled(Box)({
  display: "flex",
  gap: "20px",
  marginTop: "30px",
  marginBottom: "10px",
});

const StyledButton = styled(NavLink)(({ theme }) => ({
  display: "inline-flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "6px 16px",
  height: "36px",
  borderRadius: "4px",
  color: "#fff",
  textDecoration: "none",
  fontWeight: "500",
  textTransform: "uppercase",
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  transition: "background-color 0.3s ease, box-shadow 0.3s ease",

  "&.active": {
    backgroundColor: "#384255",
  },

  "&:hover": {
    backgroundColor: "#1565c0",
    boxShadow: "0 6px 12px rgba(0, 0, 0, 0.2)",
  },

  "&:active": {
    backgroundColor: "#0d47a1",
  },

  "&:focus": {
    outline: "none",
  },

  "&:not(.active)": {
    backgroundColor: "#E0E2E7",
    color: "#384255",
  },

  "&:disabled": {
    backgroundColor: "#e0e0e0",
    color: "#b0b0b0",
    cursor: "not-allowed",
  },
}));

const StyledLargeImg = styled("img")({
  width: "200px",
  height: "auto",
  marginTop: "20px",
  marginLeft: "130px",
});

const StyledArrowImg = styled("img")({
  width: "30px",
  height: "auto",
  marginLeft: "40px",
  width: "50px",
  height: "30px",
  marginTop: "20px",
});

const StyledImgDiv = styled("div")({
  display: "flex",
  marginTop: "60px",
  width: "100px",
  height: "100px",
  objectFit: "cover",
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

const StyledFlex = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  gap: "20px",
});

const StyledFlexColor = styled(Box)({
  display: "flex",
  gap: "10px",
  marginTop: "10px",
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
  marginTop: "-300px",
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
// const StyledWrapperBox = styled(Box)(() => ({
// }));

const StyledLabelBox = styled(Box)(({ theme }) => ({
  display: "flex",
  textTransform: "capitalize",
  padding: "0px",
  "& span": {
    fontSize: "16px",
    fontWeight: 400,
    color: theme.palette.text.primary,
    padding: "0px",
  },
}));

const StyledTabList = styled(TabList)(({ theme }) => ({
  width: "100%",
  "& .MuiTabs-indicator": {
    background: theme.palette.primary.main,
    height: "0px",
    borderRadius: "70px",
    padding: "1px",
  },
  "& .Mui-selected span": {
    color: theme.palette.primary.main,
  },
}));

const StyledTabPanel = styled(TabPanel)(() => ({
  padding: "40px 0px",
}));
