import { Checkbox } from "@mui/material";
import { borderRadius, Box, padding, styled, width } from "@mui/system";
import React, { useState } from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Input from "../UI/Input";
import Button from "../UI/Button";
import { Form, useForm } from "react-hook-form";
import DeliveryForm from "./DeliveryForm";
import { useDispatch, useSelector } from "react-redux";
import { addUserDetails } from "../../store/checkout-payment/checkoutPaymentSlice";

const schema = yup.object().shape({
  name: yup.string().required("Имя обязательно"),
  surename: yup.string().required("Фамилия обязательна"),
  phone: yup
    .string()
    // .matches(/^996 \d{3} \d{2} \d{2} \d{2}$/, "Неверный формат телефона")
    .required("Телефон обязателен"),

  email: yup
    .string()
    .email("Неверный формат Email")
    .required("Email обязателен"),
});

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const MethodDelivery = () => {
  const dispatch = useDispatch();
  const { customerInfo } = useSelector((state) => state.checkout);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const [selected, setSelected] = useState("pickup");
  const handleChange = (method) => {
    setSelected(method);
  };

  const onSubmit = (data) => {
    const newData = {
      firstName: data.name,
      lastName: data.surename,
      email: data.email,
      phoneNumber: data.phone,
      address: data.address || "",
    };
    dispatch(addUserDetails(newData));
  };

  return (
    <>
      <StyledH2>Оформление заказа</StyledH2>
      <Box sx={{ display: "flex", gap: "10px" }}>
        <StyledDives isSelected={selected === "pickup"}>
          <Box
            sx={{ display: "flex", alignItems: "center", paddingTop: "10px" }}
          >
            <Checkbox
              checked={selected === "pickup"}
              onChange={() => handleChange("pickup")}
              color="success"
            />
            <h3>Самовывоз из магазина</h3>
          </Box>
          <Box sx={{ padding: "5px 40px" }}>
            <p>Забрать 20 июля,</p>
            <h4>Бесплатно</h4>
          </Box>
        </StyledDives>

        <StyledDives isSelected={selected === "delivery"}>
          <Box
            sx={{ display: "flex", alignItems: "center", paddingTop: "10px" }}
          >
            <Checkbox
              checked={selected === "delivery"}
              onChange={() => handleChange("delivery")}
              color="success"
            />
            <h3>Доставка курьером</h3>
          </Box>
          <Box sx={{ padding: "5px 40px" }}>
            <p>Забрать 20 июля,</p>
            <h4>Бесплатно свыше 10 000 с</h4>
            <p>до 10 000 с-от 200 с</p>
          </Box>
        </StyledDives>
      </Box>
      <StyledHr />
      <StyledH2>Личные данные</StyledH2>

      {selected === "delivery" ? (
        <>
          <DeliveryForm />
        </>
      ) : (
        <>
          {" "}
          <StyledForm onSubmit={handleSubmit(onSubmit)}>
            <StyledInputBox>
              <Input
                {...register("name")}
                label={
                  <StyledLabel>
                    <p
                      style={{
                        fontSize: "16px",
                        fontFamily: "sans-serif",
                      }}
                    >
                      Имя
                    </p>
                    {errors.name && <span style={{ color: "red" }}>*</span>}
                  </StyledLabel>
                }
                placeholder="Напишите ваше имя"
                error={!!errors.name}
                helperText={errors.name ? errors.name.message : ""}
              />
              <Input
                {...register("surename")}
                label={
                  <StyledLabel>
                    <p
                      style={{
                        fontSize: "16px",
                        fontFamily: "sans-serif",
                      }}
                    >
                      Фамилия
                    </p>
                    {errors.surename && <span style={{ color: "red" }}>*</span>}
                  </StyledLabel>
                }
                placeholder="Напишите вашу фамилию"
                error={!!errors.surename}
                helperText={errors.surename ? errors.surename.message : ""}
              />
            </StyledInputBox>
            <StyledInputBox>
              <Input
                {...register("email")}
                label={
                  <StyledLabel>
                    <p
                      style={{
                        fontSize: "16px",
                        fontFamily: "sans-serif",
                      }}
                    >
                      E-mail
                    </p>
                    {errors.email && <span style={{ color: "red" }}>*</span>}
                  </StyledLabel>
                }
                placeholder="Напишите email"
                error={!!errors.email}
                helperText={errors.email ? errors.email.message : ""}
              />
              <Input
                {...register("phone")}
                label={
                  <StyledLabel>
                    <p
                      style={{
                        fontSize: "16px",
                        fontFamily: "sans-serif",
                      }}
                    >
                      Телефон
                    </p>
                    {errors.phone && <span style={{ color: "red" }}>*</span>}
                  </StyledLabel>
                }
                placeholder="+996 (___) __ __ __"
                error={!!errors.phone}
                helperText={errors.phone ? errors.phone.message : ""}
              />
            </StyledInputBox>
            <Button variant="contained" type="submit">
              Продолжить
            </Button>
          </StyledForm>{" "}
        </>
      )}
    </>
  );
};

export default MethodDelivery;

const StyledH2 = styled("h2")(() => ({
  fontFamily: "sans-serif",
  marginBottom: "20px",
  marginTop: "10px",
}));

const StyledDives = styled("div")(({ isSelected }) => ({
  border: `solid 2px ${isSelected ? "#30c600" : null}`,
  width: "290px",
  height: "180px",
  borderRadius: "4px",
  background: "#fff",
}));

const StyledHr = styled("hr")({
  padding: "0.6px",
  border: "none",
  backgroundColor: "#d1cfcf",
  marginTop: "30px",
});

const StyledForm = styled("form")(() => ({
  width: "100%",
  "& button": {
    marginTop: "20px",
    width: "100%",
  },
  "& input": {
    backgroundColor: "#fff",
    padding: "12px !important",
  },
}));

const StyledInputBox = styled("div")(() => ({
  display: "flex",
  gap: "8px",
  marginBottom: "3px",
  "& input": {
    width: "320px",
    backgroundColor: "#fff",
    padding: "12px !important",
  },
  "& .MuiFormHelperText-root": {
    marginLeft: 0,
    marginRight: 0,
  },
}));

const StyledLabel = styled("div")(() => ({
  display: "flex",
  gap: "3px",
  padding: "0px !important",
}));
