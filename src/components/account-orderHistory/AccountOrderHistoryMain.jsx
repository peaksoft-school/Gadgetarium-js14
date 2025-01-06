import { Box, styled } from "@mui/system";
import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { ROUTES } from "../../utils/routes";
import { deleteX } from "../../assets/icon";
import OrderHistoryTable from "./OrderHistoryTable";
import { useDispatch, useSelector } from "react-redux";
import EmptyOrderHistory from "./EmptyOrderHistory";
import { getOrderHistory } from "../../store/account-order-history/orderHistoryThunk";

const AccountOrderHistyryMain = () => {
  const [activeButton, setActiveButton] = useState("История");
  const [selectedOrder, setSelectedOrder] = useState(null);
  const navigate = useNavigate();
  const { orderHistory } = useSelector((state) => state.orderHistory);
  const dispatch = useDispatch();

  const getStyledH2Text = () => {
    switch (activeButton) {
      case "Избранное":
        return "Избранное";
      case "История":
        return "История заказов";
      case "Профиль":
        return "Профиль";
      default:
        return "Избранное";
    }
  };

  const handleButtonClick = (button, route) => {
    setActiveButton(button);
    navigate(route);
  };

  useEffect(() => {
    dispatch(getOrderHistory());
  }, []);

  return (
    <WrapperBox>
      <FirstBox>
        <span>Главная »</span>
        <span>{getStyledH2Text()}</span>
        <StyledH2>{getStyledH2Text()}</StyledH2>
        <StyledHr />
      </FirstBox>
      {!selectedOrder && (
        <StyledBox>
          <StyledButtonDiv>
            <StyledNavlink
              isActive={activeButton === "История"}
              onClick={() =>
                handleButtonClick("История", ROUTES.USER.orderHistory)
              }
            >
              История заказов
            </StyledNavlink>
            <StyledNavlink
              isActive={activeButton === "Избранное"}
              onClick={() => handleButtonClick("Избранное", "/favourites")}
            >
              Избранное
            </StyledNavlink>
            <StyledNavlink
              isActive={activeButton === "Профиль"}
              onClick={() => handleButtonClick("Профиль", "/profile")}
            >
              Профиль
            </StyledNavlink>
          </StyledButtonDiv>
          {orderHistory.length > 0 && (
            <div>
              <img src={deleteX} alt="x" />
              <StyledSpan>Очистить список </StyledSpan>
            </div>
          )}
        </StyledBox>
      )}
      {orderHistory.length > 0 ? (
        <OrderHistoryTable
          selectedOrder={selectedOrder}
          setSelectedOrder={setSelectedOrder}
        />
      ) : (
        <EmptyOrderHistory />
      )}
    </WrapperBox>
  );
};

export default AccountOrderHistyryMain;

const WrapperBox = styled(Box)(({ theme }) => ({
  width: "100%",
  padding: "50px 60px 15px 60px",
  backgroundColor: "#f4f4f4",
}));

const FirstBox = styled(Box)(({  }) => ({
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
  fontSize: "30px",
  lineHeight: "33px",
}));

const StyledHr = styled("hr")(() => ({
  width: "100%",
  padding: "0.6px",
  border: "none",
  backgroundColor: "#d1cfcf",
  marginTop: "10px",
}));

const StyledButtonDiv = styled(Box)({
  display: "flex",
  gap: "20px",
});

const StyledBox = styled(Box)(() => ({
  width: "55%",
  display: "flex",
  alignItems: "center",
  marginTop: "30px",
  marginBottom: "30px",
  justifyContent: "space-between",
  "& div": {
    display: "flex",
    alignItems: "center",
    gap: "5px",
    cursor: "pointer",
  },
}));

const StyledNavlink = styled(NavLink)(({ theme, isActive }) => ({
  display: "inline-flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "10px 16px",
  height: "36px",
  borderRadius: "4px",
  color: isActive ? "#fff" : "#384255",
  backgroundColor: isActive ? "#384255" : "##77777c",
  textDecoration: "none",
  fontWeight: "500",
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  transition: "background-color 0.3s ease, box-shadow 0.3s ease",
  textTransform: "capitalize",

  "&:hover": {
    backgroundColor: isActive ? "#384255" : "#e1e2e7",
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
