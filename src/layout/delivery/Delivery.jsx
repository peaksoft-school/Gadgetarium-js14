import React from 'react';
import { Box } from '@mui/system';
import {
  Component44,
  FrameCard,
  Fb,
  Gadgettarium,
  GroceryCartTwo,
  Group,
  Heart,
  ico,
  Instagram,
  Money,
  ScalesEight,
  Systema,
  Wallet,
  WhatsApp,
} from '../../assets/icon/index';
import { styled } from '@mui/material/styles';
import { TextField, InputAdornment } from '@mui/material';
import Footer from '../../components/Footer';
import SidebarMenu from '../../components/UI/SaidebarMenu';

const Delivery = () => {
  return (
    <PapaDiv>
      <header>
        <StyledDiv>
          <img src={Gadgettarium} alt="" style={{ height: '45px' }} />
          <DivStyle>
            <p>Главная</p>
            <p>О Магазине</p>
            <p>Доставка</p>
            <p>FAG</p>
            <p>Контакты</p>
          </DivStyle>
          <StyledNumber>
            +996 (700) 18-09-19
            <img src={Group} alt="" style={{ width: '20px', height: '20px' }} />
          </StyledNumber>
        </StyledDiv>
        <StyledDiv>
          <FlexContainer>
            <SidebarMenu />
            <StyledInput
              id="myInput"
              label="Поиск по каталогу магазина"
              variant="outlined"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <img
                      src={Systema}
                      alt="search icon"
                      style={{ width: '20px', height: '20px' }}
                    />
                  </InputAdornment>
                ),
              }}
            />
          </FlexContainer>
          <SocialIcons>
            <img src={Fb} alt="" style={{ width: '25px', height: '25px' }} />
            <img
              src={WhatsApp}
              alt=""
              style={{ width: '25px', height: '25px' }}
            />
            <img
              src={Instagram}
              alt=""
              style={{ width: '20px', height: '20px' }}
            />
          </SocialIcons>
          <CartIcons>
            <img
              src={ScalesEight}
              alt=""
              style={{ width: '25px', height: '25px' }}
            />
            <img src={Heart} alt="" style={{ width: '17px', height: '17px' }} />
            <img
              src={GroceryCartTwo}
              alt=""
              style={{ width: '27px', height: '27px' }}
            />
          </CartIcons>
        </StyledDiv>
      </header>
      <Becgraund>
        <Divider>
          <StyledBlock>
            <p>Главная</p>
            <p>Контакты</p>
          </StyledBlock>
          <Block>
            <h1 style={{ fontSize: '29px' }}>Доставка</h1>
          </Block>
          <Styledhr></Styledhr>
        </Divider>
        <div>
          <CityDeliveryStyled>
            <p>
              Город доставки <span style={{ fontWeight: 'bold' }}>Бишкек</span>
            </p>
          </CityDeliveryStyled>
          <DeliveryStyled>
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
              description={
                <div>
                  По городу 200сом, по регионам Бесплатная доставка
                  <br /> при покупках свыше — 10 000с.
                </div>
              }
            />
            <div>
              <DivBlockRow>
                <h3>Способы оплаты</h3>
              </DivBlockRow>
              <PaymentDelivery>
                <PaymentRow>
                  <img src={Component44} alt="" />
                  <p>
                    Оплата картой <br />
                    онлайн
                  </p>
                </PaymentRow>
                <PaymentRow>
                  <img src={Money} alt="" />
                  <p>
                    Наличные при <br />
                    получении
                  </p>
                </PaymentRow>
                <PaymentRow>
                  <img src={FrameCard} alt="" />
                  <p>
                    Картой <br />
                    при получении
                  </p>
                </PaymentRow>
              </PaymentDelivery>
            </div>
          </DeliveryStyled>
        </div>
      </Becgraund>
      <Footer />
    </PapaDiv>
  );
};

const DeliveryOption = ({ title, description }) => (
  <DeliveryOptionStyled>
    <Row>
      <img src={ico} alt="" />
      <TextBlock>
        <p>{title}</p>
        <p>{description}</p>
      </TextBlock>
    </Row>
    <Row>
      <img src={Wallet} alt="" />
      <TextBlock>
        <p className="no-bold">Предоплата не требуется</p>
      </TextBlock>
    </Row>
  </DeliveryOptionStyled>
);

const PapaDiv = styled(Box)(({ theme }) => ({
  boxSizing: 'border-box',
  margin: '0 auto',
}));
const Becgraund = styled(Box)(({ theme }) => ({
  backgroundColor: '#f4f4f4',
}));

const StyledDiv = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '10px 95px',
  backgroundColor: '#1a1a25',
  flexWrap: 'wrap',
}));

const FlexContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '100px',
}));

const DivStyle = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  color: 'white',
  cursor: 'pointer',
  fontSize: '14px',
}));

const StyledInput = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    borderRadius: '10px',
    height: '45px',
    width: '687px',
    display: 'flex',
    alignItems: 'center',
    color: 'white',
    border: '1px solid white',
    zIndex: '0',
  },
  '& .MuiOutlinedInput-input': {
    padding: '0 14px',
    textAlign: 'center',
    color: 'white',
  },
  '& .MuiInputLabel-root': {
    color: 'white',
    fontWeight: 500,
  },
}));

const StyledNumber = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  fontSize: '18px',
  fontWeight: 500,
  color: 'white',
  cursor: 'pointer',
}));

const SocialIcons = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '5px',
}));

const CartIcons = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '5px',
}));

const StyledBlock = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: '5px',
  marginTop: '50px',
  cursor: 'pointer',
  '& p': {
    transition: 'color 0.3s ease',
    margin: '0', // Убираем отступы
  },
  '& p:hover': {
    color: 'grey', // Цвет при наведении
  },
}));

const Divider = styxled(Box)(({ theme }) => ({
  padding: '10px 95px',
  flexWrap: 'wrap',
}));

const Block = styled(Box)(({ theme }) => ({
  marginTop: '30px',
}));

const Styledhr = styled(Box)(({ theme }) => ({
  marginTop: '10px',
  border: '1px solid #cdcdcd',
}));

const DeliveryStyled = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: '20px',
  padding: '0 95px',
}));

const CityDeliveryStyled = styled(Box)(({ theme }) => ({
  padding: '0px 99px',
  marginTop: '50px',
  marginBottom: '20px',
}));

const DeliveryOptionStyled = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
}));

const Row = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
}));

const TextBlock = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  cursor: 'pointer',
  '& p:first-of-type:not(.no-bold)': {
    fontWeight: 'bold',
  },
  '& p': {
    margin: 0, // Убираем отступы
  },
}));

const PaymentDelivery = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: '20px',
  marginTop: '20px',
}));

const PaymentRow = styled(Box)(({ theme }) => ({
  flexShrink: 0,
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  padding: '5px',
  marginBottom: '70px',
  cursor: 'pointer',
}));
const DivBlockRow = styled(Box)(({ theme }) => ({
  marginTop: '70px',
}))  

export default Delivery;
