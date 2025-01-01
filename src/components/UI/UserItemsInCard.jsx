import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import {
  decrementQuantity,
  incrementQuantity,
  removeItem,
} from "../../store/intemsInCard/itemsInCardSlaice";
import { deleteX, greyHeart } from "../../assets/icon";
import { styled } from "@mui/system";
import { deleteBasket, moveToFavoriteById } from "../../store/intemsInCard/itemsInCardAuth";

const UserItemsInCard = ({product, onCheckboxChange, checked  }) => {
  const dispatch = useDispatch();

  const handleIncrement = () => dispatch(incrementQuantity(product.itemNumber));
  const handleDecrement = () => dispatch(decrementQuantity(product.itemNumber));
  const handleRemove = () => dispatch(removeItem(product.itemNumber));

  const handleDeleteBasket = (ids) => {
    dispatch(deleteBasket(ids));
  };

  const handleMoveToFavorites = (id) => {
    dispatch(moveToFavoriteById(id));
  };

  const renderStars = (rating) => {
    const totalStars = 5;
    const fullStars = Math.floor(rating);
    const emptyStars = totalStars - fullStars;

    return (
      <>
        {"⭐️".repeat(fullStars)}
        {"☆".repeat(emptyStars)}
      </>
    );
  };

  return (
    <div style={styles.cardContainer}>
       <div>
        <StyledInput
          type="checkbox"
          style={styles.checkbox}
          onChange={onCheckboxChange}
          checked={checked}
        />
      </div>
      <div style={styles.imageContainer}>
        <img src={product.image} alt={product.name} style={styles.image} />
      </div>
      <div style={styles.productDetails}>
        <h3 style={styles.productName}>{product.name}</h3>
        <p style={styles.rating}>
          Рейтинг: <span>{renderStars(product.rating)}</span> ({product.rating})
        </p>
        <p style={styles.inStock}>В наличии ({product.stock}шт)</p>
        <p style={styles.code}>Код товара: {product.code}</p>
      </div>
      <div style={styles.priceContainer}>
        <div style={styles.quantitySelector}>
          <div>
            <StyledButton onClick={handleDecrement} style={styles.button}>
              -
            </StyledButton>
            <span style={styles.quantity}>{product.quantity}</span>
            <StyledButton onClick={handleIncrement} style={styles.button}>
              +
            </StyledButton>
          </div>
          <div style={styles.price}>
            <strong>{product.price} с</strong>
          </div>
        </div>
        <StyledProdarct style={styles.actions}>
          <div
            style={{ display: "flex", alignItems: "center", cursor: "pointer" }}
            onClick={() => handleDeleteBasket([product.id])}
          >
            <img src={deleteX} alt="" style={{ height: "28px" }} />
            <span>Удалить</span>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              cursor: "pointer",
            }}
            onClick={() => handleMoveToFavorites(product.id)} 
          >
            <img src={greyHeart} alt="heart" />
            <span>В избранное</span>
          </div>
        </StyledProdarct>
      </div>
    </div>
  );
};


UserItemsInCard.propTypes = {
  product: PropTypes.shape({
    itemNumber: PropTypes.number.isRequired,
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

const StyledProdarct = styled("div")(() => ({
  gap: "20px",
}));

const StyledButton = styled("button")(() => ({
  borderRadius: "100px",
}));

// Стили
const styles = {
  cardContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "16px",
    border: "1px solid #e6e6e6",
    borderRadius: "8px",
    marginBottom: "16px",
    backgroundColor: "#fff",
    boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
    fontFamily: "Arial, sans-serif",
  },
  checkbox: {
    marginRight: "16px",
  },
  imageContainer: {
    flex: "0 0 80px",
    marginRight: "16px",
  },
  image: {
    width: "80px",
    height: "80px",
    objectFit: "contain",
    borderRadius: "8px",
  },
  productDetails: {
    flex: "1",
    marginRight: "16px",
  },
  productName: {
    fontSize: "16px",
    fontWeight: "bold",
    marginBottom: "8px",
  },
  rating: {
    fontSize: "14px",
    marginBottom: "8px",
    color: "#ffa500",
  },
  inStock: {
    color: "green",
    marginBottom: "8px",
  },
  code: {
    color: "#888",
  },
  priceContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginRight: "16px",
  },
  quantitySelector: {
    color: "#909cb5",
    display: "flex",
    gap: "20px",
    alignItems: "center",
    marginBottom: "8px",
  },
  button: {
    width: "25px",
    border: "1px solid #909cb5",
    background: "transparent",
    padding: "4px 8px",
    borderRadius: "20%px",
    cursor: "pointer",
  },
  quantity: {
    margin: "0 8px",
  },
  price: {
    color: "#292929",
    fontSize: "18px",
    fontWeight: "bold",
  },
  actions: {
    display: "flex",
    alignItems: "center",
    color: "#888",
  },
  actionLink: {
    textDecoration: "none",
    color: "#888",
    fontSize: "14px",
  },
  actionSeparator: {
    margin: "0 8px",
  },
};
const StyledInput = styled('input')({
  backgroundColor: '#cb11ab',
  color: 'white',
  width: '20px',
  height: '20px',
  accentColor: '#cb11ab', 
  '&:checked': {
    backgroundColor: '#a50a89', 
  },
});
