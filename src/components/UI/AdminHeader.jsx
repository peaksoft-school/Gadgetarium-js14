import React from 'react';
import { Gadget, StateDown } from '../../assets/icon';
import { styled } from '@mui/material/styles';
import Button from '../UI/Button';

const AdminHeader = () => {
  return (
    <div>
      <StyledHeader>
        <div>
          <img src={Gadget} alt="" />
        </div>
        <StyledDiv>
          <p>Товары</p>
          <p>Заказы</p>
          <p>Отзывы и рейтинги</p>
        </StyledDiv>
        <StyledFlex>
          <Button variant="contained" sx={{ borderRadius: '60px' }}>
            Создать рыссылку
          </Button>
          <StyledI></StyledI>
          <StyledBlock>
            <div className="G">G</div>
          </StyledBlock>
          <StyledAdmin>Администратор</StyledAdmin>
          <img src={StateDown} alt="" style={{ filter: 'invert(1)' }} />
        </StyledFlex>
      </StyledHeader>
    </div>
  );
};

export default AdminHeader;

const StyledHeader = styled('div')(({ theme }) => ({
  width: '100%',
  backgroundColor: theme.palette.grey[900],
  display: 'flex',
  padding: '10px',
  alignItems: 'center',
  justifyContent: 'space-around',
}));

const StyledDiv = styled('div')(({ theme }) => ({
  display: 'flex',
  gap: '20px',
  fontSize: '14px',
  color: theme.palette.common.white,
  fontFamily: 'sans-serif',
}));

const StyledFlex = styled('div')(() => ({
  display: 'flex',
  gap: '15px',
  alignItems: 'center',
}));

const StyledBlock = styled('div')(({ theme }) => ({
  borderRadius: '100%',
  width: '85px',
  height: '42px',
  backgroundColor: theme.palette.common.white,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  '& .G': {
    color: theme.palette.primary.main,
    fontSize: '28px',
    fontWeight: 'bold',
    fontFamily: 'Arial, sans-serif',
  },
}));

const StyledI = styled('div')(({ theme }) => ({
  height: '32px',
  background: theme.palette.common.white,
  display: 'flex',
  alignItems: 'center',
  width: '1.5px',
  margin: '15px',
}));

const StyledAdmin = styled('div')(({ theme }) => ({
  color: theme.palette.common.white,
  fontSize: '14px',
  fontFamily: 'Arial, sans-serif',
  display: 'flex',
}));
