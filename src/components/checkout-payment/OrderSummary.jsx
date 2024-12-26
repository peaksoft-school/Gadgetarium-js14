import { Box, styled } from "@mui/system";
import React, { useState } from "react";
import Button from "../UI/Button";
import { Modal, Typography } from "@mui/material";
import { SystemX } from "../../assets/icon";

const OrderSummary = () => {
  const [openModal, setOpenModal] = useState(false);
  const handleOrderClick = () => {
    setOpenModal(true);
  };
  return (
    <StyledWrapper>
      <StyledH2>Обзор заказа</StyledH2>
      <Box>
        <div
          style={{
            display: "flex",
            gap: "75px",
            color: "#c812aa",
            fontSize: "20px",
          }}
        >
          <h3> Итого</h3>
          <h3> 250 000 c</h3>
        </div>
        <StyledHr />
        <StyledDives>
          <h4>Доставка</h4>
          <div>
            <p>
              г.Бишкек, ул. <br /> Ахунбаева,д. 14,
              <br />
              кв.15
            </p>
          </div>
          <h5>Изменить</h5>
        </StyledDives>

        <StyledDives>
          <h4>Оплата</h4>
          <div>
            <p>Картой онлайн</p>
          </div>
          <h5>Изменить</h5>
        </StyledDives>
      </Box>
      <StyledHr />
      <Button variant="contained" onClick={handleOrderClick}>
        Оформить заказ
      </Button>
      <Modal
        open={openModal}
        onClose={() => setOpenModal(false)}
        aria-labelledby="order-success-modal"
        aria-describedby="order-success-description"
      >
        <StyledModalBox>
          <img src={SystemX} alt="" onClick={() => setOpenModal(false)} />
          <Typography variant="body1" id="order-success-description">
            Спасибо! <br />
            Заявка успешно оформлена! <br /> <br />
            <h3> Номер заявки:</h3>  <br />
            Ваш заявка N 26478598 от 20.06.25 оформлена. <br />
            Вся актуальная информация о статусе исполнения <br /> заказа придёт
            на указанный email:
          </Typography>
          <Box sx={{ width: "220px", "& p": { fontSize: "13px" } }}>
            <Button variant="contained" onClick={() => setOpenModal(false)}>
              <p> Продолжить покупки</p>
            </Button>
          </Box>
        </StyledModalBox>
      </Modal>
    </StyledWrapper>
  );
};

export default OrderSummary;
const StyledWrapper = styled("div")({
  width: "400px",
  height: "350px",
});

const StyledH2 = styled("h2")(() => ({
  fontFamily: "sans-serif",
  marginBottom: "20px",
  marginTop: "10px",
}));

const StyledDives = styled("div")(() => ({
  display: "flex",
  justifyContent: "space-between",
  marginTop: "15px",
  "& h5": {
    color: "#4B7EE8",
  },
}));

const StyledHr = styled("hr")(() => ({
  marginBottom: "20px",
  marginTop: "10px",
}));

const StyledModalBox = styled("div")(() => ({
  width: "550px",
  height: "400px",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "white",
  padding: "20px",
  borderRadius: "4px",
  boxShadow: 24,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "15px",
  justifyContent: "center",
  textAlign: "center",

  "& img": {
    width: "35px",
    height: "35px",
    position: "absolute",
    top: "10px",
    right: "10px",
  },
}));
