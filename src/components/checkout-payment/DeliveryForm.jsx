import { styled } from "@mui/system";
import React, { useState } from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Input from "../UI/Input";
import Button from "../UI/Button";
import { useForm } from "react-hook-form";
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
  address: yup.string().required("Адрес доставки обязателен"),
});

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const DeliveryForm = () => {
  const dispatch = useDispatch();
  const { customerInfo } = useSelector((state) => state.checkout);
  console.log(customerInfo);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    const newData = {
      firstName: data.name,
      lastName: data.surename,
      email: data.email,
      phoneNumber: data.phone,
      address: data.address,
    };
    dispatch(addUserDetails(newData));
  };

  return (
    <>
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

        <Input
          {...register("address")}
          label={
            <StyledLabel>
              <p
                style={{
                  fontSize: "16px",
                  fontFamily: "sans-serif",
                }}
              >
                Адрес доставки
              </p>
              {errors.address && <span style={{ color: "red" }}>*</span>}
            </StyledLabel>
          }
          placeholder="Напишите адрес доставки"
          error={!!errors.address}
          helperText={errors.address ? errors.address.message : ""}
        />

        <Button variant="contained" type="submit">
          Продолжить
        </Button>
      </StyledForm>
    </>
  );
};

export default DeliveryForm;

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
