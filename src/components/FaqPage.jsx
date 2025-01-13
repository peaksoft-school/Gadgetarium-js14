import React from "react";
import Question from "./Question";
import { Box, styled } from "@mui/system";

const FaqPage = () => {
  return (
    <WrapperMainBox>
      <FirstBox>
        <span>Главная »</span>
        <span>FAQ</span>
        <StyledH2>FAQ</StyledH2>
        <StyledHr />
      </FirstBox>
      <Question />
    </WrapperMainBox>
  );
};

export default FaqPage;
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
