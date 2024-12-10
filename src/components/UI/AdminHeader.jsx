import React, { useState } from 'react';
import {  Gadgettarium, StateDown } from '../../assets/icon/index';
import { styled } from '@mui/material/styles';
import { NavLink } from 'react-router-dom';
import { Popover, Button as MuiButton, Typography } from '@mui/material';
import Button from '../UI/Button';

const AdminHeader = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    console.log('Вышли из аккаунта');
    handleClose();
  };

  const open = Boolean(anchorEl);
  const id = open ? 'admin-popover' : undefined;

  return (
    <div>
      <StyledHeader>
        <div>
          <img src={Gadgettarium} alt="" />
        </div>
        <StyledDiv>
          <StyledNavLink to="/products">Товары</StyledNavLink>
          <StyledNavLink to="/orders">Заказы</StyledNavLink>
          <StyledNavLink to="/reviews">Отзывы и рейтинги</StyledNavLink>
        </StyledDiv>
        <StyledFlex>
          <Button variant="rounded" sx={{ borderRadius: '50%' }}>
            Создать рыссылку
          </Button>
          <StyledI></StyledI>
          <StyledBlock>
            <div className="G">G</div>
          </StyledBlock>
          <StyledAdmin onClick={handleClick} style={{ cursor: 'pointer' }}>
            Администратор
          </StyledAdmin>
          <img
            src={StateDown}
            alt=""
            style={{ filter: 'invert(1)', cursor: 'pointer' }}
            onClick={handleClick}
          />
        </StyledFlex>
      </StyledHeader>

      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <div style={{ padding: '16px' }}>
          <Typography>Вы уверены, что хотите выйти?</Typography>
          <MuiButton
            variant="contained"
            color="primary"
            onClick={handleLogout}
            style={{ marginTop: '8px' }}
          >
            Выйти
          </MuiButton>
        </div>
      </Popover>
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

const StyledNavLink = styled(NavLink)(({ theme }) => ({
  textDecoration: 'none',
  color: theme.palette.common.white,
  fontSize: '14px',
  fontFamily: 'sans-serif',
  '&:hover:not(.active)': {
    color: theme.palette.primary.main,
  },
}));

const StyledDiv = styled('div')(() => ({
  display: 'flex',
  gap: '20px',
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
