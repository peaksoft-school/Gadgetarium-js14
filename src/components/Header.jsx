import styled from "@emotion/styled";
import { Box } from "@mui/material";
import React from "react";
import { IconAdgetarium } from "../assets/icon";

const Header = () => {
  return (
    <StyledBox>
      <IconAdgetarium />
      <img src={IconAdgetarium} alt="" />
    </StyledBox>
  );
};

export default Header;
const StyledBox = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "173px",
  backgroundColor: theme.palette.black.dark,
}));
