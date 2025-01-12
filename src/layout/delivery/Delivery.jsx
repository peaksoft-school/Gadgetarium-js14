import { Box } from "@mui/system";
import {
  Component44,
  FrameCard,
  Money,
  ico,
  Wallet,
} from "../../assets/icon/index";
import { styled } from "@mui/material/styles";

const Delivery = () => {
  return (
    <Container>
      <Background>
        <Divider>
          <StyledBlock>
            <p>Главная »</p>
            <p>Контакты</p>
          </StyledBlock>
          <Header>Доставка</Header>
          <Separator />
        </Divider>
        <CityInfo>
          Город доставки <strong>Бишкек</strong>
        </CityInfo>
        <DeliveryOptions>
          <DeliveryOption
            title="Самовывоз со склада"
            description="Забрать в течение 14 дней"
          />
          <DeliveryOption
            title="Самовывоз из магазина"
            description="Забрать в течение 14 дней"
          />
          <DeliveryOption
            title="Доставка"
            description="По городу 200сом, по регионам Бесплатная доставка при покупках свыше — 10 000с."
          />
        </DeliveryOptions>
        <PaymentMethods>
          <h3>Способы оплаты</h3>
          <Paymentlists>
            <PaymentOption src={Component44} label="Оплата картой онлайн" />
            <PaymentOption src={Money} label="Наличные при получении" />
            <PaymentOption src={FrameCard} label="Картой при получении" />
          </Paymentlists>
        </PaymentMethods>
      </Background>
    </Container>
  );
};

const DeliveryOption = ({ title, description }) => (
  <OptionContainer>
    <OptionRow>
      <img src={ico} alt="" />
      <TextBlock>
        <p>{title}</p>
        <p>{description}</p>
      </TextBlock>
    </OptionRow>
    <OptionRow>
      <img src={Wallet} alt="" />
      <p>Предоплата не требуется</p>
    </OptionRow>
  </OptionContainer>
);

const PaymentOption = ({ src, label }) => (
  <OptionRow>
    <img src={src} alt={label} style={{ width: "40px", height: "40px" }} />
    <p style={{ whiteSpace: "nowrap" }}>{label}</p>
  </OptionRow>
);

const Container = styled(Box)({
  boxSizing: "border-box",
  margin: "0 auto",
});

const Background = styled(Box)({
  backgroundColor: "#f4f4f4",
  padding: "0 60px",
});

const Divider = styled(Box)({
  padding: "10px 0",
});

const StyledBlock = styled(Box)({
  display: "flex",
  gap: "5px",
  marginTop: "50px",
  cursor: "pointer",
  "& p": {
    margin: 0,
    transition: "color 0.3s ease",
    "&:hover": { color: "grey" },
  },
  "& span": {
    display: "inline-block",
    paddingBottom: "30px",
  },
  "& span:first-of-type": {
    color: "grey",
    paddingRight: "6px",
  },
  "& span:last-child": {
    fontWeight: "bold",
  },
});

const Header = styled("h1")({
  fontSize: "29px",
  marginTop: "30px",
});

const Separator = styled(Box)({
  marginTop: "10px",
  borderTop: "1px solid #cdcdcd",
});

const CityInfo = styled("p")({
  marginTop: "50px",
  marginBottom: "20px",
});

const DeliveryOptions = styled(Box)({
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: "20px",
});

const OptionContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: "10px",
});

const OptionRow = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  cursor: "pointer",
  "&:hover": {
    opacity: 0.7,
    "& p": { color: "grey" },
  },
});

const TextBlock = styled(Box)({
  "& p:first-of-type": { fontWeight: "bold" },
  "& p": { margin: 0 },
});

const PaymentMethods = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: "10px",
  marginTop: "80px",
});

const Paymentlists = styled(Box)({
  display: "flex",
  gap: "60px",
  marginTop: "10px",
  marginBottom: "60px",
});

export default Delivery;
