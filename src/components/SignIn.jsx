import { IconButton, InputAdornment, Modal } from "@mui/material";
import Input from "./UI/Input";
import Button from "./UI/Button";
import { useState } from "react";
import styled from "@emotion/styled";
import { SystemX } from "../assets/icon";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({
  email: yup
    .string()
    .email("Неверный формат Email")
    .required("Email обязателен"),
  password: yup
    .string()
    .min(8, "Пароль должен содержать не менее 8 символов")
    .matches(/[A-Z]/, "Пароль должен содержать хотя бы одну заглавную букву")
    .matches(/\d/, "Пароль должен содержать хотя бы одну цифру")
    .required("Пароль обязателен"),
});

const SignIn = ({ data, open, onClose, openSignUp }) => {
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (formData) => {
    data(formData);
  };
  return (
    <StyledModal open={open} onClose={onClose}>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <img src={SystemX} alt="" onClick={onClose} />
        <h1>Войти</h1>
        <Input
          {...register("email")}
          placeholder="Напишите email"
          error={!!errors.email}
          helperText={errors.email ? errors.email.message : ""}
        />
        <Input
          {...register("password")}
          placeholder="Напишите пароль"
          type={showPassword ? "text" : "password"}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            ),
          }}
          error={!!errors.password}
          helperText={errors.password ? errors.password.message : ""}
        />
        {(errors.email || errors.password) && (
          <ErrorMessage>Неправильно указан Email и/или пароль</ErrorMessage>
        )}
        <Button variant="contained" type="submit">
          Войти
        </Button>
        <StyledP>
          Нет аккаунта?
          <span onClick={openSignUp}>Зарегистрироваться</span>
        </StyledP>
      </StyledForm>
    </StyledModal>
  );
};
export default SignIn;

const StyledModal = styled(Modal)(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

const StyledForm = styled("form")(() => ({
  width: "580px",
  height: "auto",
  backgroundColor: "#fff",
  display: "flex",
  flexDirection: "column",
  gap: "18px",
  padding: "60px",
  textAlign: "center",
  position: "relative",

  "& img": {
    width: "35px",
    height: "35px",
    position: "absolute",
    top: "10px",
    right: "10px",
  },
}));

const ErrorMessage = styled("p")(() => ({
  color: "red",
  fontSize: "16px",
  marginTop: "10px",
  marginBottom: "0px",
}));

const StyledP = styled(`p`)(() => ({
  "& span": {
    fontWeight: "bold",
    color: "#3268e6",
    marginLeft: "3px",
  },
}));
