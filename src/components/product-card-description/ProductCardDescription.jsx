import { Box, styled } from "@mui/system";
import React from "react";
import { SamsungText } from "../../assets/image";
import ProductCardTabPanel from "./ProductCardTabPanel";

const ProductCardDescription = () => {
  return (
    <WrapperMainBox>
      <FirstBox>
        <span>Главная » Смартфоны »</span>
        <span>Galaxy S21 5G</span>
        <StyledH2>
          <img src={SamsungText} alt="samsung" />
        </StyledH2>
        <StyledHr />
      </FirstBox>
      <ProductCardTabPanel />
      <Box>
        <h2>Просмотренные товары</h2>
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

const StyledH2 = styled("h1")(() => ({
  fontFamily: "sans-serif",
}));
