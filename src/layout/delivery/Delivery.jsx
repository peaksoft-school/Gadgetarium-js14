import { Box, Container, style } from '@mui/system';
import { Group } from '../../assets/icon/index';
import { styled } from '@mui/material/styles';

const Delivery = () => {
  return (
    <div>
      <HeaderStyled>
        <StyledDiv>
          <h1>Gadgetarium</h1>
          <DivStyle>
            <p>Главная</p>
            <p>О Магазине</p>
            <p>Доставка</p>
            <p>FAG</p>
            <p>Контакты</p>
          </DivStyle>
          <div>
            +996700180919
            <img src={Group} alt="" />
          </div>
        </StyledDiv>
      </HeaderStyled>
    </div>
  );
};

export default Delivery;

const StyledDiv = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  padding: '10px 20px',
  backgroundColor: '#F2F2F2',
}));
const DivStyle = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '15px',
}));
const HeaderStyled = styled(Box)(({ theme }) => ({
  backgroundColor: '#1a1a25',
}));
