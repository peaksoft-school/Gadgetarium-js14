import React from 'react';
import { Box } from '@mui/system';
import {
  Component44,
  FrameCard,
  Money,
  ico,
  Wallet,
} from '../../assets/icon/index';
import { styled } from '@mui/material/styles';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

const Delivery = () => {
  return (
    <PapaDiv>
      <Header />
      <Becgraund>
        <Divider>
          <StyledBlock>
            <p>Главная</p>
            <p>Контакты</p>
          </StyledBlock>
          <Block>
            <h1 style={{ fontSize: '29px' }}>Доставка</h1>
          </Block>
          <Styledhr />
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
                  <img src={Component44} alt="Оплата картой онлайн" />
                  <p>
                    Оплата картой <br />
                    онлайн
                  </p>
                </PaymentRow>
                <PaymentRow>
                  <img src={Money} alt="Наличные при получении" />
                  <p>
                    Наличные при <br />
                    получении
                  </p>
                </PaymentRow>
                <PaymentRow>
                  <img src={FrameCard} alt="Картой при получении" />
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
      <Icon src={ico} alt="" />
      <TextBlock>
        <p>{title}</p>
        <p>{description}</p>
      </TextBlock>
    </Row>
    <Row>
      <Icon src={Wallet} alt="" />
      <TextBlock>
        <p className="no-bold">Предоплата не требуется</p>
      </TextBlock>
    </Row>
  </DeliveryOptionStyled>
);

// Стили
const PapaDiv = styled(Box)(({ theme }) => ({
  boxSizing: 'border-box',
  margin: '0 auto',
}));

const Becgraund = styled(Box)(({ theme }) => ({
  backgroundColor: '#f4f4f4',
}));

const Divider = styled(Box)(({ theme }) => ({
  padding: '10px 95px',
  flexWrap: 'wrap',
}));

const StyledBlock = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: '5px',
  marginTop: '50px',
  cursor: 'pointer',
  '& p': {
    transition: 'color 0.3s ease',
    margin: '0',
    '&:hover': {
      color: 'grey', 
    },
  },
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
  cursor: 'pointer',
  '&:hover': {
    opacity: 0.7,
    '& img': {
      opacity: 0.7, 
    },
    '& p': {
      color: 'grey', 
    },
  },
}));

const TextBlock = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  '& p:first-of-type': {
    fontWeight: 'bold',
  },
  '& p': {
    margin: 0,
    transition: 'color 0.3s ease',
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
  '&:hover': {
    opacity: 0.7,
    '& img': {
      opacity: 0.7,
    },
    '& p': {
      color: 'grey',
    },
  },
}));

const DivBlockRow = styled(Box)(({ theme }) => ({
  marginTop: '70px',
}));

const Icon = styled('img')(({ theme }) => ({
  cursor: 'pointer',
}));

export default Delivery;
