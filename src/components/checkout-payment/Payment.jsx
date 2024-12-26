import { Checkbox, TextField } from "@mui/material";
import { Box, styled } from "@mui/system";
import React, { useState } from "react";
import { ElCard, MasterCard, VisaCard } from "../../assets/icon";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import Button from "../UI/Button";
import { useDispatch, useSelector } from "react-redux";
import { getPay } from "../../store/checkout-payment/checkouPaymentThunk";
import PaymentByCard from "./PaymentByCard";

const Payment = () => {
  const [selected, setSelected] = useState("online");
  const [cardholderName, setCardholderName] = useState("");
  const stripe = useStripe();
  const elements = useElements();

  const { isLoading, error } = useSelector((state) => state.checkout);
  const dispatch = useDispatch();
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
      billing_details: {
        name: cardholderName,
      },
    });

    if (error) {
      console.error("[Ошибка]", error);
    } else {
      console.log("[Успех]", paymentMethod);
    }
  };

  const handlePaymentMethodChange = (method) => {
    setSelected(method);
  };

  const hanldeGet = () => {
    dispatch(getPay());
  };

  return (
    <div>
      <StyledH2>Способ оплаты</StyledH2>
      <Box sx={{ display: "flex", gap: "10px" }}>
        <StyledPaymentOption isSelected={selected === "online"}>
          <Box
            sx={{ display: "flex", alignItems: "center", paddingTop: "10px" }}
          >
            <Checkbox
              checked={selected === "online"}
              onChange={() => handlePaymentMethodChange("online")}
              color="success"
            />
            <h3>Оплата картой онлайн</h3>
          </Box>
          <div style={{ marginLeft: "50px", display: "flex", gap: "15px" }}>
            <img src={MasterCard} alt="MasterCard" />
            <img src={VisaCard} alt="VisaCard" />
            <img src={ElCard} alt="ElCard" />
          </div>
        </StyledPaymentOption>

        <StyledPaymentOption isSelected={selected === "delivery"}>
          <Box
            sx={{ display: "flex", alignItems: "center", paddingTop: "10px" }}
          >
            <Checkbox
              checked={selected === "delivery"}
              onChange={() => handlePaymentMethodChange("delivery")}
              color="success"
            />
            <h3>Картой при получении</h3>
          </Box>
          <p style={{ marginLeft: "43px" }}>Предоплата не требуется</p>
          <div style={{ marginLeft: "50px", display: "flex", gap: "15px" }}>
            <img src={MasterCard} alt="MasterCard" />
            <img src={VisaCard} alt="VisaCard" />
            <img src={ElCard} alt="ElCard" />
          </div>
        </StyledPaymentOption>

        <StyledPaymentOption isSelected={selected === "cash"}>
          <Box
            sx={{
              display: "flex",
              paddingTop: "10px",
              alignItems: "start",
              "& h3": { paddingTop: "6px" },
            }}
          >
            <Checkbox
              checked={selected === "cash"}
              onChange={() => handlePaymentMethodChange("cash")}
              color="success"
            />
            <h3>
              Наличными при <br /> получении
            </h3>
          </Box>
          <Box sx={{ padding: "0px 40px" }}>
            <p>Предоплата не требуется</p>
          </Box>
        </StyledPaymentOption>
      </Box>

      {selected === "online" && (
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: "40px",
          }}
        >
          <Box sx={{ width: "440px" }}>
            <StyledForm onSubmit={handleSubmit}>
              <Box>
                <div
                  style={{
                    display: "flex",
                    gap: "15px",
                    justifyContent: "flex-end",
                    marginBottom: "20px",
                  }}
                >
                  <img src={MasterCard} alt="MasterCard" />
                  <img src={VisaCard} alt="VisaCard" />
                  <img src={ElCard} alt="ElCard" />
                </div>
                <CardElement
                  options={{
                    style: {
                      base: {
                        fontSize: "16px",
                        color: "#424770",
                        "::placeholder": {
                          color: "#aab7c4",
                        },
                        fontFamily: "Roboto, sans-serif",
                      },
                      invalid: {
                        color: "#9e2146",
                      },
                    },
                  }}
                />
              </Box>

              <StyledTextField
                label="Имя владельца"
                variant="outlined"
                fullWidth
                value={cardholderName}
                onChange={(e) => setCardholderName(e.target.value)}
              />
            </StyledForm>
            <StyledButtonBox>
              <Button
                variant="contained"
                onClick={hanldeGet}
                disabled={!stripe}
              >
                Продолжить
              </Button>
            </StyledButtonBox>
          </Box>
          <Box sx={{ width: "390px" }}>
            <p style={{ color: "#384255" }}>
              Платеж защищен. Данные карты передаются только в зашифрованном
              виде по протоколу SSL, защищаются и обрабатываются по стандарту
              безопасности PCI DSS.
            </p>
          </Box>
        </Box>
      )}
    </div>
  );
};

export default Payment;

const StyledH2 = styled("h2")(() => ({
  fontFamily: "sans-serif",
  marginBottom: "20px",
  marginTop: "10px",
}));

const StyledPaymentOption = styled("div")(({ isSelected }) => ({
  border: `solid 2px ${isSelected ? "#30c600" : null}`,
  width: "290px",
  height: "140px",
  borderRadius: "4px",
  background: "#fff",
}));

const StyledForm = styled("form")(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "20px",
  padding: "20px",
  border: "1px solid #ccc",
  borderRadius: "8px",

  height: "260px",
  margin: "0 auto",
  backgroundColor: "#fff",
}));

const StyledButtonBox = styled(Box)(() => ({
  marginTop: "20px",
}));

const StyledTextField = styled(TextField)(() => ({
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      border: "none",
      borderBottom: "2px solid #aab7c4",
    },
    "&:hover fieldset": {
      borderBottom: "2px solid #30c600",
    },
    "&.Mui-focused fieldset": {
      borderBottom: "2px solid #30c600",
    },
  },
  "& .MuiInputLabel-root": {
    color: "#424770",
  },
}));
