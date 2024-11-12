import { styled, Box } from '@mui/system';
import { prev, samsungphone, SamsungSvg } from '../../assets/icon/index';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from '@mui/material';

const InnerPageCard = () => {
  return (
    <div>
      <header>Header</header>
      <StyledPapaDiv>
        <StyledDiv>
          <StyledNavLink to="/Product">Товары</StyledNavLink>
          <StyledNavLink to="/About">Galaxy S21 5G</StyledNavLink>
        </StyledDiv>
        <div>
          <StyledImg src={SamsungSvg} />
          <StyledBr />
        </div>
        <StyledButtonDiv>
          <StyledButton variant="contained">Товар</StyledButton>
          <StyledButton>Детали Товара</StyledButton>
        </StyledButtonDiv>
        <div>
          <div>
            <img src={samsungphone} />
            <div>
            <img src={prev} alt="" />
            </div>

          </div> 
        </div>
      </StyledPapaDiv>
    </div>
  );
};

export default InnerPageCard;

const StyledPapaDiv = styled(Box)({
  padding: '60px',
});

const StyledDiv = styled(Box)({
  display: 'flex',
  gap: '5px',
});

const StyledNavLink = styled(NavLink)({
  color: 'black',
  textDecoration: 'none',
  fontSize: '15px',
  '&:active': {
    color: 'grey',
  },
});

const StyledImg = styled('img')({
  marginTop: '35px',
});

const StyledBr = styled(Box)({
  border: '1px solid #cdcdcd',
  marginTop: '20px',
});

const StyledButtonDiv = styled(Box)({
  display: 'flex',
  gap: '20px',
});

const StyledButton = styled(Button)({
  maxWidth: '100%',
  borderRadius: '4px',
  backgroundColor: '#384255',
  color: 'white',
});
