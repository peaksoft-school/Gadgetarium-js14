import { Box } from '@mui/system';
import {
  GroceryCartTwo,
  Group,
  Heart,
  Instagram,
  ScalesEight,
  WhatsApp,
} from '../../assets/icon/index';
import { styled } from '@mui/material/styles';
import { TextField } from '@mui/material';

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
        <StyledDiv>
          <div>Каталог</div>
          <div>
            <StyledInput
              id="myInput"
              label="Поиск по каталогу магазина"
              variant="outlined"
            />
          </div>
          <div>
            <img src="" alt="" />
            <img src={WhatsApp} alt="" />
            <img src={Instagram} alt="" />
          </div>
          <div>
            <img src={ScalesEight} alt="" />
            <img src={Heart} alt="" />
            <img src={GroceryCartTwo} alt="" />
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
const StyledInput = styled(TextField)(({ theme }) => ({
  '&.MuiOutlinedInput-input': {
    padding: '8px',
    margin: 0,
  },
  width: '787px',
  borderRadius1: '15px',
}));
