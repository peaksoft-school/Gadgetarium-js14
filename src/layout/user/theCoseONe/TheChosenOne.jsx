import React, { useEffect } from "react";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import { styled } from "@mui/system";
import { Box } from "@mui/material";
import { deleteX } from "../../../assets/icon";
import Card from "../../../components/UI/Card";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteTheChosen,
  getTheChosen,
} from "../../../store/theChosenOne/theChosenOneAuthThunk";
import noDataImg from "../../../assets/image/favorite-not-found.png";

const TheChosenOne = () => {
  const { favourites, loading, error } = useSelector(
    (state) => state.theChosenOne
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTheChosen());
  }, [dispatch]);

  const handlerDelete = () => {
    dispatch(deleteTheChosen());
  };

  return (
    <StyledDiv>
      <WrapperMainBox>
        <FirstBox>
          <span>Главная »</span>
          <span>Избранное</span>
          <StyledH2>Избранное</StyledH2>
          <StyledHr />
        </FirstBox>

        <StyledBoxCard>
          {favourites.length ? (
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                paddingRight: "55px",
              }}
            >
              <img
                src={deleteX}
                alt="Удалить все"
                onClick={handlerDelete}
                style={{ cursor: "pointer" }}
              />
            </Box>
          ) : null}

          {loading ? (
            <p>Загрузка...</p>
          ) : error ? (
            <p>Ошибка: {error}</p>
          ) : (
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
              {favourites.length ? (
                favourites.map((item) => (
                  <Card
                    key={item.id}
                    id={item.id}
                    title={item.productInfo}
                    price={item.price}
                    img={item.image}
                    newPrice={item.discount}
                    reiting={item.rating}
                  />
                ))
              ) : (
                <div
                  style={{
                    textAlign: "center",
                    display: "flex",
                    gap: "16px",
                    flexDirection: "column",
                    alignItems: "center",
                    width: "100%",
                  }}
                >
                  <img src={noDataImg} alt="Нет данных" width={400} />
                  <p>В ИЗБРАННОМ ПОКА ПУСТО</p>
                  <p style={{ width: "400px", paddingBottom: "40px" }}>
                    Воспользуйтесь поиском или каталогом, выберите нужные товары
                    и добавьте их в избранное!
                  </p>
                </div>
              )}
            </Box>
          )}
        </StyledBoxCard>
      </WrapperMainBox>
    </StyledDiv>
  );
};

export default TheChosenOne;

const StyledBoxCard = styled(Box)(() => ({
  paddingLeft: "55px",
}));

const WrapperMainBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.lightGrey.light,
  width: "100%",
}));

const FirstBox = styled(Box)`
  font-size: 15px;
  padding: 40px 60px;
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
const StyledDiv = styled("div")(() => ({}));
