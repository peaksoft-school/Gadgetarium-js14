import React from "react";
import { AccountFavourites } from "../../assets/image";
import { styled } from "@mui/system";
import { NavLink } from "react-router-dom";

const EmptyAccountFavourites = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        padding: "70px 0px",
        gap: "20px",
      }}
    >
      <img src={AccountFavourites} alt="photo" />
      <StyledP>В избранном пока пусто</StyledP>
      <StyledPy>
        Воспользуйтесь поиском или каталогом, <br />
        выберите нужные товары и добавьте их в избранное!
      </StyledPy>
      <div>
        <StyledNavLink to="/">К покупкам</StyledNavLink>
      </div>
    </div>
  );
};
export default EmptyAccountFavourites;

const StyledP = styled("p")(() => ({
  fontSize: "24px",
  fontWeight: "500",
}));

const StyledPy = styled("p")(() => ({
  fontSize: "18px",
  fontWeight: "300",
}));

const StyledNavLink = styled(NavLink)(({ theme }) => ({
  display: "inline-block",
  width: "140px",
  color: "#fff",
  fontSize: "18px",
  borderRadius: "4px",
  border: "1px solid #e313bf",
  backgroundColor: "#ca11ac",
  textDecoration: "none",
  textAlign: "center",
  padding: "10px 0",

  "&:hover": {
    color: "white",
    backgroundColor: "#8f137a",
  },
}));
