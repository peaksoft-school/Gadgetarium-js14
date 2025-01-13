import React, { useEffect, useState } from "react";
import { Box, padding, styled, textAlign, width } from "@mui/system";
import { Button } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import { deleteX } from "../../assets/icon";
import Card from "../UI/Card";
import EmptyComparison from "./EmptyComparison";
import { useDispatch, useSelector } from "react-redux";
import { getCompareCards } from "../../store/compare/compareThunk";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const cardDataArray = [
  {
    img: "https://via.placeholder.com/180",
    text: "Stylish Headphones",
    reiting: 4.5,
    reviews: 150,
    newPrice: "1200 c",
  },
  {
    img: "https://via.placeholder.com/180",
    text: "Smartphone",
    reiting: 4.7,
    reviews: 200,
    newPrice: "3500 c",
  },
  {
    img: "https://via.placeholder.com/180",
    text: "Laptop",
    reiting: 4.8,
    reviews: 300,
    newPrice: "45000 c",
  },
  {
    img: "https://via.placeholder.com/180",
    text: "Smartwatch",
    reiting: 4.3,
    reviews: 75,
    newPrice: "2500 c",
  },
  {
    img: "https://via.placeholder.com/180",
    text: "Bluetooth Speaker",
    reiting: 4.6,
    reviews: 90,
    newPrice: "1800 c",
  },
];

const data = {
  Бренд: [
    "iPhone 13 Pro",
    "iPhone 13 Pro",
    "iPhone 13 Pro",
    "iPhone 13 Pro",
    "iPhone 13 Pro",
  ],
  Экран: [
    '53" (2340×1080) IPS',
    '53" (2340×1080) IPS',
    '53" (2340×1080) IPS',
    '53" (2340×1080) IPS',
    '53" (2340×1080) IPS',
  ],
  Цвет: ["Синий", "Синий", "Синий", "Синий", "Синий"],
  "Операционная система": ["iOS", "iOS", "iOS", "iOS", "iOS"],
  Память: ["128GB", "128GB", "128GB", "128GB", "128GB"],
  Вес: ["177", "177", "177", "177", "177"],
  "SIM-карты": [
    "2 (nano SIM)",
    "2 (nano SIM)",
    "2 (nano SIM)",
    "2 (nano SIM)",
    "2 (nano SIM)",
  ],
};

const CompareMainPage = () => {
  const [activeButton, setActiveButton] = useState("Смартфоны");
  const { compare } = useSelector((state) => state.compare);
  console.log("TEST", compare);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCompareCards());
  }, []);

  return (
    <Box sx={{ borderColor: "#fff", width: "100%" }}>
      <WrapperBox>
        <FirstBox>
          <span>Главная »</span>
          <span>Сравнение</span>
          <StyledH2>Сравнение товаров</StyledH2>
        </FirstBox>
      </WrapperBox>
      {cardDataArray.length > 0 ? (
        <>
          <Box sx={{ width: "100%", padding: "15px 0px 10px 120px" }}>
            <StyledButtonDiv>
              <StyledButton
                variant="contained"
                isActive={activeButton === "Смартфоны"}
                onClick={() => setActiveButton("Смартфоны")}
              >
                Смартфоны
              </StyledButton>
              <StyledButton
                variant="contained"
                isActive={activeButton === "Ноутбуки"}
                onClick={() => setActiveButton("Ноутбуки")}
              >
                Ноутбуки
              </StyledButton>
              <StyledButton
                variant="contained"
                isActive={activeButton === "Наушники"}
                onClick={() => setActiveButton("Наушники")}
              >
                Наушники
              </StyledButton>
            </StyledButtonDiv>
            <StyledBox>
              <div>
                <Checkbox
                  {...label}
                  defaultChecked
                  sx={{
                    "&.Mui-checked": {
                      color: "#ca11ac",
                      padding: "0px",
                    },
                  }}
                />
                <StyledSpan>Показывать только различия </StyledSpan>
              </div>
              <div>
                <img src={deleteX} alt="x" />
                <StyledSpan>Очистить список </StyledSpan>
              </div>
            </StyledBox>
          </Box>
          <Box sx={{ overflowX: "auto" }}>
            <Box sx={{ padding: "40px 0px 40px 60px" }}>
              <StyledTable>
                <thead>
                  <tr>
                    <td></td>
                    {cardDataArray && cardDataArray.length > 0 ? (
                      cardDataArray.map((card, index) => (
                        <td key={index}>
                          <Card key={index} {...card} type="compare" />
                        </td>
                      ))
                    ) : (
                      <p>No data available</p>
                    )}
                  </tr>
                </thead>
                <tbody>
                  {Object.keys(data).map((rowName, rowIndex) => (
                    <tr key={rowIndex}>
                      <td>{rowName}</td>
                      {data[rowName].map((value, colIndex) => (
                        <td align="right" key={colIndex}>
                          {value}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </StyledTable>
            </Box>
          </Box>
          <WrapperBox />
        </>
      ) : (
        <WrapperBox>
          <EmptyComparison />
        </WrapperBox>
      )}
    </Box>
  );
};

export default CompareMainPage;

const WrapperBox = styled(Box)(({ theme }) => ({
  width: "100%",
  padding: "50px 0px 15px 60px",
  backgroundColor: theme.palette.lightGrey.light,
}));

const FirstBox = styled(Box)(({ theme }) => ({
  fontSize: "15px",
  "& span": {
    display: "inline-block",
    paddingBottom: "30px",
    height: "40px",
    gap: "1px",
  },
  "& span:first-of-type": {
    color: "grey",
  },
  "& span:nth-of-type(2)": {
    fontWeight: "bold",
    marginLeft: "6px",
    padding: "0px",
  },
}));

const StyledH2 = styled("h1")(() => ({
  fontFamily: "sans-serif",
}));

const StyledButtonDiv = styled(Box)({
  display: "flex",
  gap: "15px",
  marginTop: "30px",
  marginBottom: "20px",
});

const StyledButton = styled(Button)(({ theme, isActive }) => ({
  display: "inline-flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "6px 16px",
  height: "36px",
  borderRadius: "4px",
  color: isActive ? "#fff" : "#384255",
  backgroundColor: isActive ? "#384255" : "#F4F4F4",
  textDecoration: "none",
  fontWeight: "500",
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  transition: "background-color 0.3s ease, box-shadow 0.3s ease",
  textTransform: "capitalize",

  "&:hover": {
    backgroundColor: isActive ? "#384255" : "#f4f4f4",
    boxShadow: "0 6px 12px rgba(0, 0, 0, 0.2)",
  },

  "&:focus": {
    outline: "none",
  },

  "&:disabled": {
    backgroundColor: "#e0e0e0",
    color: "#b0b0b0",
    cursor: "not-allowed",
  },
}));

const StyledSpan = styled("span")(() => ({
  fontWeight: "400px",
  fontSize: "14px",
  color: "#384255",
}));

const StyledBox = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  gap: "30px",
  "& div": {
    display: "flex",
    alignItems: "center",
    gap: "2px",
    cursor: "pointer",
  },
}));

const StyledTable = styled("table")(({ theme }) => ({
  width: "100%",
  borderCollapse: "collapse",

  "& th, & td": {
    borderTop: "1px dashed #ccc",
    borderBottom: "1px dashed #ccc",
    padding: "8px",
    textAlign: "left",
  },
  "& th": {},
  "& td:first-child": {
    fontWeight: "bold",
  },
}));
