import React from "react";
import { Box, styled } from "@mui/system";
import { FotoCard } from "../../assets/image";

const CartProjectItem = () => {
  return (
    <div style={{ width: "100%" }}>
      <Box sx={{ padding: "70px" }}>
        <StyledBox>
          <StyledBox>
            <img src={FotoCard} alt="" />
          </StyledBox>
        </StyledBox>
        <StyledBox>
          <StyledP>Ваша корзина пуста</StyledP>
        </StyledBox>
        <br />
        <StyledBox>
          <StyledPy>Но вы всегда можете ее наполнить </StyledPy>
        </StyledBox>
        <br />
        <StyledBox>
          <StyeledButton>К покупкам</StyeledButton>
        </StyledBox>
      </Box>
    </div>
  );
};

export default CartProjectItem;

const StyledBox = styled(Box)(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "row",
  width: "100%",
}));

const StyeledButton = styled("button")(() => ({
  backgroundColor: "#cb11ab",
  color: "#fdfdfd",
  borderRadius: "3px",
  border: "none",
  width: "140px",
  height: "40px",
  fontSize: "16px",
  fontWeight: "bold",
}));

const StyledP = styled("p")(() => ({
  fontSize: "24px",
  fontWeight: "500",
}));
const StyledPy = styled("p")(() => ({
  fontSize: "18px",
  fontWeight: "300",
}));
