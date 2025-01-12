import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrdersData } from "../../store/ordersAdmin/ordersDataThunk";
import { useParams } from "react-router-dom";
import Loading from "../UI/Loading";

const OrdersData = () => {
  const { orderId } = useParams();
  const dispatch = useDispatch();

  const { ordersData, isLoading, error } = useSelector(
    (state) => state.ordersData
  );

  useEffect(() => {
    if (orderId) {
      dispatch(getOrdersData(orderId));
    }
  }, [dispatch, orderId]);

  return (
    <>
      {" "}
      {isLoading && <Loading />}
      <div style={{ padding: "30px 50px" }}>
        <div>
          {ordersData.map((order, index) => (
            <p key={index}>
              <span style={{ color: "gray" }}>заказы »</span> {order.fullName}
            </p>
          ))}
        </div>

        <div>
          <h2 style={{ marginTop: "30px", marginBottom: "15px" }}>
            Оплата заказа
          </h2>
        </div>

        <hr />

        {isLoading ? (
          <p>Загрузка...</p>
        ) : error ? (
          <p>Ошибка: {error.message}</p>
        ) : (
          <div style={{ display: "flex", gap: "530px", marginTop: "25px" }}>
            <div style={{ maxWidth: "100%" }}>
              {ordersData.map((order, index) => (
                <div key={index}>
                  <div
                    style={{
                      marginBottom: "15px",
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <span style={{ fontWeight: "bold" }}> Наименование:</span>{" "}
                    {order.orderNameInfo}
                  </div>

                  <p style={{ marginBottom: "15px" }}>
                    <span style={{ fontWeight: "bold" }}> Кол-во товара:</span>{" "}
                    {order.quantity}
                  </p>

                  <p style={{ marginBottom: "15px" }}>
                    <span style={{ fontWeight: "bold" }}>
                      {" "}
                      Общая сумма заказа:
                    </span>{" "}
                    {order.price} %
                  </p>

                  <p
                    style={{
                      color: "red",
                      fontWeight: "bold",
                      marginBottom: "15px",
                    }}
                  >
                    Скидка {order.discount}%
                  </p>
                  <p style={{ marginBottom: "15px" }}>
                    <span style={{ fontWeight: "bold" }}> Сумма скидки:</span>{" "}
                    {order.totalDiscount} c
                  </p>
                  <hr />
                  <p style={{ textAlign: "end" }}>
                    <span style={{ fontWeight: "bold" }}>Итого:</span>{" "}
                    {order.totalFinal} c
                  </p>
                </div>
              ))}
            </div>

            <div
              style={{
                width: "400px",
                border: "1px solid black",
                padding: "20px",
              }}
            >
              <h4 style={{ marginBottom: "15px" }}>Информация о заказе</h4>
              <hr style={{ marginBottom: "15px" }} />
              {ordersData.map((order, index) => (
                <div key={index}>
                  <p style={{ marginBottom: "15px" }}>
                    <span style={{ fontWeight: "bold" }}>Заказ:</span>{" "}
                    {order.orderNumber}
                  </p>
                  <p style={{ marginBottom: "15px" }}>
                    <span style={{ fontWeight: "bold" }}>Состояние:</span>{" "}
                    {order.orderStatus}
                  </p>
                  <p style={{ marginBottom: "15px" }}>
                    <span style={{ fontWeight: "bold" }}>
                      {" "}
                      Контактный телефон:
                    </span>{" "}
                    {order.phoneNumber}
                  </p>
                  <p style={{ marginBottom: "15px" }}>
                    <span style={{ fontWeight: "bold" }}>
                      {" "}
                      Адресс доставки:
                    </span>{" "}
                    {order.fullAddress}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default OrdersData;
