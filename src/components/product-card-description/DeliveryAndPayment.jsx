import { Box } from "@mui/system";
import React from "react";
import { BankCart, ico, IconC, PaymentByCard, XMLID } from "../../assets/icon";
import { Wallet } from "../../assets/icon";
import { styled } from "@mui/material";

const DeliveryAndPayment = () => {
  return (
    <div>
      <h2>Доставка</h2>
      <Box sx={{ display: "flex", gap: "4px", marginTop: "30px" }}>
        Город доставки<h4>Бишкек</h4>
      </Box>
      <Box
        sx={{
          display: "flex",
          marginTop: "40px",
          justifyContent: "space-between",
          marginBottom: "60px",
        }}
      >
        <div>
          <Box
            sx={{
              display: "flex",
              gap: "10px",
              "& img": { marginBottom: "20px" },
            }}
          >
            <img src={ico} alt="" />
            <Box>
              <h4>Самовывоз со склада</h4>
              Забрать в течение 14 дней
            </Box>
          </Box>
          <Box
            sx={{
              paddingTop: "10px",
              "& img": {
                marginRight: "10px",
              },
            }}
          >
            <img src={Wallet} alt="" />
            Предоплата не требуется
          </Box>
        </div>
        <Box
          sx={{
            display: "flex",

            gap: "2px",
            "& img": {
              width: "11px",
              height: "11px",
              marginTop: "8px",
            },
          }}
        >
          <h3>0</h3>
          <img src={IconC} alt="" />
        </Box>
        <div>
          <Box
            sx={{
              display: "flex",
              gap: "10px",
              "& img": { marginBottom: "20px" },
            }}
          >
            <img src={ico} alt="" />
            <Box>
              <h4>Самовывоз из магазина</h4>
              Забрать в течение 14 дней
            </Box>
          </Box>
          <Box
            sx={{
              paddingTop: "10px",
              "& img": {
                marginRight: "10px",
              },
            }}
          >
            <img src={Wallet} alt="" />
            Предоплата не требуется
          </Box>
        </div>
        <Box
          sx={{
            display: "flex",

            gap: "2px",
            "& img": {
              width: "11px",
              height: "11px",
              marginTop: "8px",
            },
          }}
        >
          <h3>0</h3>
          <img src={IconC} alt="" />
        </Box>
        <div>
          <Box
            sx={{
              display: "flex",
              gap: "10px",
              "& img": { marginBottom: "20px" },
            }}
          >
            <img src={ico} alt="" />
            <Box>
              <h4>Доставка</h4>
              Бесплатная доставка
              <br /> при покупке свыше -10 000с.
            </Box>
          </Box>
          <Box
            sx={{
              paddingTop: "10px",
              "& img": {
                marginRight: "10px",
              },
            }}
          >
            <img src={Wallet} alt="" />
            Предоплата не требуется
          </Box>
        </div>
        <Box
          sx={{
            display: "flex",
            gap: "2px",
            "& img": {
              width: "11px",
              height: "11px",
              marginTop: "8px",
            },
            padding: "0px",
          }}
        >
          <h3> от 200</h3>
          <img src={IconC} alt="" />
        </Box>
      </Box>

      <h3>Способы оплаты</h3>
      <Box
        sx={{
          width: "50%",
          display: "flex",
          justifyContent: "space-between",
          marginTop: "30px",
        }}
      >
        <Box>
          <StyledPaymentBox>
            <img src={BankCart} alt="" />
            Оплата картой <br /> онлайн
          </StyledPaymentBox>
        </Box>
        <Box>
          <StyledPaymentBox>
            <img src={XMLID} alt="" />
            Наличными при <br /> получении
          </StyledPaymentBox>
        </Box>
        <Box>
          <StyledPaymentBox>
            <img src={PaymentByCard} alt="" />
            Картой <br />
            при получении
          </StyledPaymentBox>
        </Box>
      </Box>
    </div>
  );
};

export default DeliveryAndPayment;

const StyledPaymentBox = styled(Box)(() => ({
  display: "flex",
  gap: "20px",
}));
