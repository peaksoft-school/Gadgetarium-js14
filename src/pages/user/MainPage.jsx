import { useEffect } from "react";
import BannerSlider from "../../components/banner/BannerSlider";
import Card from "../../components/UI/Card";
import { Box, styled } from "@mui/system";
import Button from "../../components/UI/Button";
import { useDispatch, useSelector } from "react-redux";
import {
  getDiscountCards,
  getNewCards,
  getrecommendedCards,
} from "../../store/cardProducts/cardThunk";
import Loading from "../../components/UI/Loading";

const MainPage = () => {
  const dispatch = useDispatch();
  const { recommendCards, isLoading, newCards, disCountCards } = useSelector(
    (state) => state.userCards
  );

  useEffect(() => {
    dispatch(getrecommendedCards());
  }, [dispatch]);

  const { elements } = recommendCards;

  useEffect(() => {
    dispatch(getNewCards());
  }, [dispatch]);

  const { elements: news } = newCards;

  useEffect(() => {
    dispatch(getDiscountCards());
  }, [dispatch]);

  const { elements: discountElements } = disCountCards;

  return (
    <WrapperBox>
      <BannerSlider />
      {isLoading && <Loading />}
      {discountElements && discountElements.length > 0 ? (
        <>
          <StyledH1>Акции</StyledH1>
          <StyledBox>
            {discountElements.map((recommend, index) => {
              const { image, productInfo, discount, price, quantity, rating } =
                recommend;
              return (
                <Box key={index} sx={{ width: "280px" }}>
                  <Card
                    img={image}
                    text={productInfo}
                    discount={discount}
                    title={quantity}
                    reiting={rating}
                    newPrice={price}
                    disPage={true}
                  />
                </Box>
              );
            })}
          </StyledBox>

          <StyledButtonBox>
            <Button>Показать ещё</Button>
          </StyledButtonBox>
        </>
      ) : null}

      {news && news.length > 0 ? (
        <>
          <StyledH1>Новинки</StyledH1>
          <StyledBox>
            {news.map((item, index) => {
              const { image, productInfo, discount, price, quantity, rating } =
                item;
              return (
                <Box key={index} sx={{ width: "280px" }}>
                  <Card
                    key={index}
                    img={image}
                    text={productInfo}
                    discount={discount}
                    title={quantity}
                    reiting={rating}
                    newPrice={price}
                    disPage={true}
                  />
                </Box>
              );
            })}
          </StyledBox>

          <StyledButtonBox>
            <Button>Показать ещё</Button>
          </StyledButtonBox>
        </>
      ) : null}

      {elements && elements.length > 0 ? (
        <>
          <StyledH1>Мы рекомендуем</StyledH1>
          <StyledBox>
            {elements.map((recommend, index) => {
              const { image, productInfo, discount, price, quantity, rating } =
                recommend;
              return (
                <Box key={index} sx={{ width: "280px" }}>
                  <Card
                    key={index}
                    img={image}
                    text={productInfo}
                    discount={discount}
                    title={quantity}
                    reiting={rating}
                    newPrice={price}
                    recommendet={true}
                    disPage={true}
                  />
                </Box>
              );
            })}
          </StyledBox>

          <StyledButtonBox>
            <Button>Показать ещё</Button>
          </StyledButtonBox>
        </>
      ) : null}
    </WrapperBox>
  );
};

export default MainPage;

const WrapperBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.lightGrey.light,
  width: "100%",
}));

const StyledBox = styled(Box)(() => ({
  display: "flex",
  flexWrap: "wrap",
  gap: "5px",
  justifyContent: "center",
  overflow: "hidden",
}));

const StyledH1 = styled("h1")(() => ({
  fontFamily: "sans-serif",
  margin: "80px 0px 40px 50px",
}));

const StyledButtonBox = styled(Box)(() => ({
  width: "280px",
  margin: "auto",
  marginTop: "40px",
  marginBottom: "30px",
}));
