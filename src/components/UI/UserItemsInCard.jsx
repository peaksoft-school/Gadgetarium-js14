import React from 'react';
import PropTypes from 'prop-types';

const UserItemsInCard = ({ product }) => {
  const renderStars = (rating) => {
    const totalStars = 5;
    const fullStars = Math.floor(rating);
    const emptyStars = totalStars - fullStars;

    return (
      <>
        {'⭐️'.repeat(fullStars)}
        {'☆'.repeat(emptyStars)}
      </>
    );
  };

  return (
    <div style={styles.cardContainer}>
      {/* Чекбокс */}
      <div>
        <input type="checkbox" style={styles.checkbox} />
      </div>

      {/* Изображение */}
      <div style={styles.imageContainer}>
        <img src={product.image} alt={product.name} style={styles.image} />
      </div>

      {/* Описание товара */}
      <div style={styles.productDetails}>
        <h3 style={styles.productName}>{product.name}</h3>
        <p style={styles.rating}>
          Рейтинг: <span>{renderStars(product.rating)}</span> ({product.rating})
        </p>
        <p style={styles.inStock}>В наличии ({product.stock}шт)</p>
        <p style={styles.code}>Код товара: {product.code}</p>
      </div>

      {/* Количество и цена */}
      <div style={styles.priceContainer}>
        <div style={styles.quantitySelector}>
          <button style={styles.button}>-</button>
          <span style={styles.quantity}>{product.quantity}</span>
          <button style={styles.button}>+</button>
        </div>
        <div style={styles.price}>
          <strong>{product.price} с</strong>
        </div>
      </div>

      {/* Действия */}
      <div style={styles.actions}>
        <a href="#" style={styles.actionLink}>🤍 В избранное</a>
        <span style={styles.actionSeparator}>|</span>
        <a href="#" style={styles.actionLink}>✖️ Удалить</a>
      </div>
    </div>
  );
};

UserItemsInCard.propTypes = {
  product: PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    stock: PropTypes.number.isRequired,
    code: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
    price: PropTypes.string.isRequired,
  }).isRequired,
};

export default UserItemsInCard;

// Стили
const styles = {
  cardContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '16px',
    border: '1px solid #e6e6e6',
    borderRadius: '8px',
    marginBottom: '16px',
    backgroundColor: '#fff',
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
    fontFamily: 'Arial, sans-serif',
  },
  checkbox: {
    marginRight: '16px',
  },
  imageContainer: {
    flex: '0 0 80px',
    marginRight: '16px',
  },
  image: {
    width: '80px',
    height: '80px',
    objectFit: 'contain',
    borderRadius: '8px',
  },
  productDetails: {
    flex: '1',
    marginRight: '16px',
  },
  productName: {
    fontSize: '16px',
    fontWeight: 'bold',
    marginBottom: '8px',
  },
  rating: {
    fontSize: '14px',
    marginBottom: '8px',
    color: '#ffa500',
  },
  inStock: {
    color: 'green',
    marginBottom: '8px',
  },
  code: {
    color: '#888',
  },
  priceContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginRight: '16px',
  },
  quantitySelector: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '8px',
  },
  button: {
    border: '1px solid #ccc',
    background: 'transparent',
    padding: '4px 8px',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  quantity: {
    margin: '0 8px',
  },
  price: {
    fontSize: '18px',
    fontWeight: 'bold',
  },
  actions: {
    display: 'flex',
    alignItems: 'center',
    color: '#888',
  },
  actionLink: {
    textDecoration: 'none',
    color: '#888',
    fontSize: '14px',
  },
  actionSeparator: {
    margin: '0 8px',
  },
};
