import React from "react";
import { useSelector } from "react-redux";
import {
  selectDiscount,
  selectItemsCount,
  selectTotalSum,
} from "../../store/intemsInCard/itemsInCardSlaice";

const ModalCard = () => {
  const itemsCount = useSelector(selectItemsCount);
  const totalSum = useSelector(selectTotalSum);
  const discount = useSelector(selectDiscount);
  const finalSum = totalSum - discount;

  const styles = {
    modalCard: {
      width: "450px",

      background: "#fff",
      padding: "16px",
      borderRadius: "8px",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      fontFamily: "Arial, sans-serif",
    },
    title: {
      fontSize: "18px",
      fontWeight: "bold",
      marginBottom: "8px",
    },
    divider: {
      border: "0.5px solid #e0e0e0",
      margin: "8px 0",
    },
    details: {
      margin: "4px 0",
      display: "flex",
      justifyContent: "space-between",
    },
    discount: {
      color: "red",
    },
    total: {
      display: "flex",
      justifyContent: "space-between",
      margin: "16px 0",
      fontSize: "16px",
      fontWeight: "bold",
    },
    button: {
      width: "100%",
      padding: "12px 16px",
      background: "magenta",
      color: "#fff",
      fontSize: "14px",
      fontWeight: "bold",
      border: "none",
      borderRadius: "8px",
      cursor: "pointer",
      textAlign: "center",
    },
  };

  return (
    <div style={styles.modalCard}>
      <h3 style={styles.title}>Сумма заказа</h3>
      <hr style={styles.divider} />
      <div>
        <p style={styles.details}>
          Количество товаров: <span>{itemsCount} шт.</span>
        </p>
        <p style={styles.details}>
          Ваша скидка:{" "}
          <span style={styles.discount}>- {discount.toLocaleString()} с</span>
        </p>
        <p style={styles.details}>
          Сумма: <span>{totalSum.toLocaleString()} с</span>
        </p>
      </div>
      <div style={styles.total}>
        <strong>Итого</strong>
        <span>{finalSum.toLocaleString()} с</span>
      </div>
      <button
        style={styles.button}
        onMouseOver={(e) => (e.target.style.background = "darkmagenta")}
        onMouseOut={(e) => (e.target.style.background = "magenta")}
      >
        ПЕРЕЙТИ К ОФОРМЛЕНИЮ
      </button>
    </div>
  );
};

export default ModalCard;
