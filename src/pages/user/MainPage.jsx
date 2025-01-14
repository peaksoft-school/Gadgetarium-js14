import { useEffect } from "react";
import BannerSlider from "../../components/banner/BannerSlider";
import Card from "../../components/UI/Card";
import {
  Box,
  color,
  display,
  height,
  padding,
  styled,
  textAlign,
  width,
} from "@mui/system";
import Button from "../../components/UI/Button";
import { useDispatch, useSelector } from "react-redux";
import {
  getDiscountCards,
  getNewCards,
  getrecommendedCards,
} from "../../store/cardProducts/cardThunk";
import Loading from "../../components/UI/Loading";
import { BankCart, Bus, Hands, Order, WorkKey } from "../../assets/icon";

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
              const {
                image,
                productInfo,
                discount,
                price,
                quantity,
                rating,
                subProductId,
              } = recommend;
              return (
                <Box key={index} sx={{ width: "280px",  gap:'50px'}}>
                  <Card
                    img={image}
                    text={productInfo}
                    discount={discount}
                    title={quantity}
                    reiting={rating}
                    newPrice={price}
                    disPage={true}
                    subProductId={subProductId}
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
              const {
                image,
                productInfo,
                discount,
                price,
                quantity,
                rating,
                subProductId,
              } = item;
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
                    subProductId={subProductId}
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
              const {
                image,
                productInfo,
                discount,
                price,
                quantity,
                rating,
                subProductId,
              } = recommend;
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
                    subProductId={subProductId}
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
      <FooterBox>
        <div>
          <img src={Order} alt="distribute" />
          <p>Официальный дистрибьютер</p>
        </div>
        <div>
          <img src={WorkKey} alt="key" />
          <p>Гарантийное обслуживание</p>
        </div>
        <div>
          <img src={BankCart} alt="bankCard" />
          <p>Оплата любым удобным способом</p>
        </div>
        <div>
          <img src={Hands} alt="offer" />
          <p>Оптовые продажи</p>
        </div>
        <div>
          <img src={Bus} alt="delivery" />
          <p>Доставка в любой регион Кыргызстана</p>
        </div>
      </FooterBox>
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
  gap: "60px",
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

const FooterBox = styled(Box)(() => ({
  display: "flex",
  gap: "30px",
  "& div": {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "222px",
    height: "192px",
    backgroundColor: "#fff",
    textAlign: "center",
    gap: "15px",
    cursor: "pointer",
  },
  justifyContent: "center",
  padding: "40px 0px 80px 0px",
}));
