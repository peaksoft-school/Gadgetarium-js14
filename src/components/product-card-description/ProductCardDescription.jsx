import { Box, styled } from "@mui/system";
import React, { useEffect } from "react";
import { SamsungText } from "../../assets/image";
import ProductCardTabPanel from "./ProductCardTabPanel";
import { useDispatch, useSelector } from "react-redux";
import Card from "../../components/UI/Card";
import { getLastViews } from "../../store/cardof-product-description/cardofProductDescriptionThunk";

const ProductCardDescription = () => {
  const dispatch = useDispatch();
  const { lastViews } = useSelector((state) => state.cardofProduct);

  console.log("ghgfhd", lastViews);
  useEffect(() => {
    dispatch(getLastViews());
  }, []);

  const { elements } = lastViews;
  console.log("999", elements);

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
      <Box sx={{ padding: "60px 80px" }}>
        {elements.length > 0 && (
          <>
            <h2>Просмотренные товары</h2>
            <Box sx={{ paddingLeft: "30px", display: "flex", gap: "80px" }}>
              {elements.map((item, index) => (
                <Box key={index} sx={{ width: "180px" }}>
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

const StyledH2 = styled("h1")(() => ({
  fontFamily: "sans-serif",
}));
