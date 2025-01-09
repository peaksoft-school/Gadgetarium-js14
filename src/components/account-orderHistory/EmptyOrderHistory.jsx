import React from "react";
import { OrderHistory } from "../../assets/image";
import { Box, styled } from "@mui/system";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../store/auth/authSlice";

const EmptyOrderHistory = () => {
  const dispatch = useDispatch();
  const navigat = useNavigate();
  return (
    <Box>
      <StyledInfoWrapper>
        <StyleInfo>
          <h4>
            Азамат <br />
            Азаматов
          </h4>
          <p>
            aza@gmail.com <br />
            +996 (400) 88-88-88
          </p>
          <StyledLgout
            onClick={() => {
              dispatch(logout());
              navigat("/");
            }}
          >
            Выйти
          </StyledLgout>
        </StyleInfo>
      </StyledInfoWrapper>

      <StyledEmpty>
        <img src={OrderHistory} alt="photo" />
        <StyledP>Здесь пока пусто</StyledP>
        <StyledPy>Здесь будет храниться история ваших заказов.</StyledPy>
        <div>
          <StyledNavLink to="/">К покупкам</StyledNavLink>
        </div>
      </StyledEmpty>
    </Box>
  );
};
export default EmptyOrderHistory;

const StyledP = styled("p")(() => ({
  fontSize: "24px",
  fontWeight: "500",
}));

const StyledPy = styled("p")(() => ({
  fontSize: "18px",
  fontWeight: "300",
}));

const StyledLgout = styled("p")(() => ({
  fontWeight: "bold",
  color: "#3268e6",
  marginTop: "8px",
  cursor: "pointer",
}));
const StyledNavLink = styled(NavLink)(() => ({
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

const StyledInfoWrapper = styled(Box)(() => ({
  display: "flex",
  justifyContent: "flex-end",
  marginTop: "-60px",
}));
const StyleInfo = styled(Box)(() => ({
  "& h4": {
    fontSize: "18px",
    lineHeight: "21.7px",
    fontWeight: "600px",
    color: "#384255",
    paddingBottom: "10px",
  },
  "& p": {
    fontSize: "16px",
    fontWeight: "400px",
    lineHeight: "24px",
  },
}));

const StyledEmpty = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "70px 0px",
  gap: "20px",
}));
