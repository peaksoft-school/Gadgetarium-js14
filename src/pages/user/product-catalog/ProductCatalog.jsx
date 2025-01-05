import React from "react";
import { Box, styled } from "@mui/system";

import DropDownProduct from "./DropDownProduct";
import { useParams } from "react-router-dom";

const ProductCatalog = () => {
  const { category } = useParams();

  return (
    <WrapperMainBox>
      <FirstBox>
        <span>Главная »</span>
        <span>
          {category === "1"
            ? "Смартфоны"
            : category === "2"
            ? "Планшеты"
            : category === "3"
            ? "Ноутбуки"
            : category === "4"
            ? "Смарт часы"
            : ""}
        </span>
        <StyledH2>
          {category === "1"
            ? "Смартфоны"
            : category === "2"
            ? "Планшеты"
            : category === "3"
            ? "Ноутбуки"
            : category === "4"
            ? "Смарт часы"
            : ""}
        </StyledH2>
        <StyledHr />
        <DropDownProduct />
      </FirstBox>
    </WrapperMainBox>
  );
};

export default ProductCatalog;

const WrapperMainBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.lightGrey.light,
  width: "100%",
}));

const FirstBox = styled(Box)`
  font-size: 15px;
  padding: 60px;
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

const StyledH2 = styled("h1")(() => ({
  fontFamily: "sans-serif",
}));
