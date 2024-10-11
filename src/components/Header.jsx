import styled from "@emotion/styled";
import { Box, Divider } from "@mui/material";
import React from "react";
import { IconAdgetarium, IconG, IconPersonal } from "../assets/icon";
import theme from "../assets/theme/theme";

const links = [
  { id: 1, text: "Главная" },
  { id: 2, text: "О магазине" },
  { id: 3, text: "Доставка" },
  { id: 4, text: "FAG" },
  { id: 5, text: "Контакты" },
];
console.log(links);

const Header = () => {
  return (
    <StyledBox>
      <HeaderBox>
        <IconBox>
          <img src={IconG} alt="icon" />
          <img src={IconAdgetarium} alt="icon" />
        </IconBox>

        <Cards>
          {links.map((item) => (
            <span key={item.id}>{item.text}</span>
          ))}
        </Cards>
        <ContactBox>
          +996 220-89-00-00
          <img src={IconPersonal} alt="contact" />
        </ContactBox>
      </HeaderBox>
      <Divider sx={{ backgroundColor: "grey", height: "2px" }} /> 
    </StyledBox>
  );
};

export default Header;
const StyledBox = styled(Box)(({ theme }) => ({
  width: "100%",
  position: "fixed",
  zIndex: "1",
  height: "173px",
  backgroundColor: theme.palette.black.dark,
  display: "flex",
  justifyContent: "space-between",
}));

const IconBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "2px",
  justifyContent: "flex-start",
  "& img:first-child": {
    width: "25px",
    backgroundColor: theme.palette.primary.main,
  },
}));

const Cards = styled(Box)(() => ({
  display: "flex",
  color: theme.palette.lightGrey.light,
  gap: "20px",
}));
const HeaderBox = styled(Box)(() => ({
  display: "flex",
  justifyContent: "space-between",
  width: "100%",
  padding: "15px 80px ",
}));
const ContactBox = styled(Box)(({ theme }) => ({
  color: theme.palette.lightGrey.light,
}));
