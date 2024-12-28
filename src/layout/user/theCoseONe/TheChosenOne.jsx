import React, { useEffect } from "react";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import { styled } from "@mui/system";
import { Box } from "@mui/material";
import { deleteX } from "../../../assets/icon";
import Card from "../../../components/UI/Card";
import { useDispatch, useSelector } from "react-redux";
import { deleteTheChosen, getTheChosen } from "../../../store/theChosenOne/theChosenOneAuthThunk";

const TheChosenOne = () => {
  const { favourites, loading, error } = useSelector(
    (state) => state.theChosenOne
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTheChosen());
  }, [dispatch]);

  const handlerDelete =()=>{
    dispatch(deleteTheChosen())
  }
  


  return (
    <StyledDiv>
      <WrapperMainBox>
        <FirstBox>
          <span>Главная »</span>
          <span>Избранное</span>
          <StyledH2>FAQ</StyledH2>
          <StyledHr />
        </FirstBox>

        <StyledBoxCard>


        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            cursor: "pointer",
            "& img": {
              width: "23px",
              filter:
                "invert(0%) sepia(0%) saturate(100%) hue-rotate(0deg) brightness(0) contrast(100%)",
            },
            "& span": {
                marginLeft: "8px",
              fontSize: "14px",
              color: "gray",
            },
        }}
        onClick={()=>handlerDelete()} 
        >
          <img src={deleteX} alt="Очистить" />
          <span>Очистить список товаров</span>
        </Box>

        {loading ? (
            <p>Загрузка...</p>
        ) : error ? (
            <p>Ошибка: {error}</p>
        ) : (
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
            {favourites.map((item) => (
                <Card
                key={item.subProductId}
                img={item.image}
                text={item.productInfo}
                newPrice={item.price}
                reiting={item.rating}
                title={item.quantity}
                discount={item.discount}
                />
            ))}
          </Box>
        )}
        </StyledBoxCard>
      </WrapperMainBox>
    </StyledDiv>
  );
};

export default TheChosenOne;

const StyledBoxCard = styled(Box)(()=>({
    paddingLeft:'55px'
}))

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
const StyledDiv = styled("div")(() => ({
    paddingBottom: '40px',
}));

