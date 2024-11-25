import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { styled, Box } from '@mui/system';
import { Button } from '@mui/material';
import { getProduct } from '../../store/innerPageCardAmin/innerPageCardThunk';

const InnerPageCard = ({ productId }) => {
  const dispatch = useDispatch();
  const { product, isLoading, error } = useSelector((state) => state.innerPageCard);

  useEffect(() => {
    dispatch(getProduct(productId)); // Запрос данных продукта при загрузке компонента
  }, [dispatch, productId]);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <StyledContainer>
      <header>Товар: {product?.name}</header>
      <StyledFlex>
        <StyledImage src={product?.images[0]} alt={product?.name} />
        <StyledInfo>
          <h3>{product?.name}</h3>
          <p>Цена: {product?.price} c</p>
          <p>Скидка: {product?.percentOfDiscount}%</p>
          <p>Дата выпуска: {product?.dateOfIssue}</p>
          <StyledCharacteristics>
            <h4>Характеристики:</h4>
            <ul>
              {product?.characteristics &&
                Object.entries(product.characteristics).map(([key, value]) => (
                  <li key={key}>
                    {key}: {value}
                  </li>
                ))}
            </ul>
          </StyledCharacteristics>
          <StyledButtons>
            <Button variant="contained" color="primary">
              Купить
            </Button>
            <Button variant="outlined" color="secondary">
              В корзину
            </Button>
          </StyledButtons>
        </StyledInfo>
      </StyledFlex>
    </StyledContainer>
  );
};

export default InnerPageCard;

// Стили
const StyledContainer = styled(Box)({
  padding: '20px',
});

const StyledFlex = styled(Box)({
  display: 'flex',
  gap: '20px',
});

const StyledImage = styled('img')({
  width: '300px',
  borderRadius: '8px',
});

const StyledInfo = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
});

const StyledCharacteristics = styled(Box)({
  '& ul': {
    listStyle: 'none',
    padding: 0,
  },
  '& li': {
    marginBottom: '5px',
  },
});

const StyledButtons = styled(Box)({
  display: 'flex',
  gap: '10px',
});
