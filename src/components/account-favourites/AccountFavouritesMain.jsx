import { Box, styled } from "@mui/system";
import React, { useEffect, useState } from "react";
import EmptyAccountFavourites from "./EmptyAccountFavourites";
import Card from "../UI/Card";
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getAccountFavourites } from "../../store/account-favourites/accountFavouritesThunk";
import Loading from "../UI/Loading";
import { NavLink, useNavigate } from "react-router-dom";

const AccountFavouritesMain = () => {
  const [activeButton, setActiveButton] = useState("История");
  const { favouritesCards, isLoading } = useSelector(
    (state) => state.accountFavourites
  );
  const navigate = useNavigate();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAccountFavourites());
  }, [dispatch]);

  const handleButtonClick = (button) => {
    setActiveButton(button);
    if (button === "Избранное") {
      dispatch(getAccountFavourites());
    }
  };

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

  return (
    <WrapperBox>
      {isLoading && <Loading />}

      <FirstBox>
        <span>Главная »</span>
        <span>{getStyledH2Text()}</span>
        <StyledH2>{getStyledH2Text()}</StyledH2>
        <StyledHr />
      </FirstBox>

      <StyledButtonDiv>
        <StyledNavlink
          isActive={activeButton === "История"}
          onClick={() => handleButtonClick("История")}
        >
          История заказов
        </StyledNavlink>
        <StyledNavlink
          isActive={activeButton === "Избранное"}
          onClick={() => handleButtonClick("Избранное")}
        >
          Избранное
        </StyledNavlink>
        <StyledNavlink
          isActive={activeButton === "Профиль"}
          onClick={() => handleButtonClick("Профиль")}
        >
          Профиль
        </StyledNavlink>
      </StyledButtonDiv>

      {!isLoading && activeButton === "Избранное" ? (
        <>
          {favouritesCards.length === 0 ? (
            <EmptyAccountFavourites text={activeButton} />
          ) : (
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "20px",
                padding: "20px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  gap: "20px",
                  flexWrap: "wrap",
                }}
              >
                {favouritesCards.map((card, index) => (
                  <Box key={index}>
                    <Card
                      type="viewed"
                      img={card.images}
                      // text={card.productName}
                      // discount={card.discount}
                      title={card.productName}
                      reiting={card.rating}
                      // reviews={card.reviews}
                      newPrice={card.price}
                      // oldPrice={card.oldPrice}
                      // discountNew={card.discountNew}
                      // discountClas={card.discountClas}
                    />
                  </Box>
                ))}
              </Box>

              <Box
                sx={{
                  marginTop: "20px",
                  alignSelf: "center",
                }}
              >
                <Button
                  variant="outlined"
                  onClick={() => navigate("/user/catalog/1")}
                >
                  Продолжить покупки
                </Button>
              </Box>
            </Box>
          )}
        </>
      ) : null}
    </WrapperBox>
  );
};

export default AccountFavouritesMain;

const WrapperBox = styled(Box)(({ theme }) => ({
  width: "100%",
  padding: "50px 0px 15px 60px",
  backgroundColor: "#f4f4f4",
}));

const FirstBox = styled(Box)(({ theme }) => ({
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
  gap: "15px",
  marginTop: "40px",
  marginBottom: "30px",
});

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
