import { IconButton, Modal, InputAdornment } from "@mui/material";
import { useState } from "react";
import Input from "./UI/Input";
import Button from "./UI/Button";
import { SystemX } from "../assets/icon";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import styled from "@emotion/styled";
import { useDispatch } from "react-redux";
import { signUpRequest } from "../store/auth/authThank";

const schema = yup.object().shape({
  name: yup.string().required("Имя обязательно"),
  surename: yup.string().required("Фамилия обязательна"),
  phone: yup
    .string()
    .matches(/^996 \d{3} \d{2} \d{2} \d{2}$/, "Неверный формат телефона")
    .required("Телефон обязателен"),

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
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Пароли не совпадают")
    .required("Подтверждение пароля обязательно"),
});

const SignUp = ({ onClose, openSignIn }) => {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // const {isLoadig} = useSelector((state)=>state.auth)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (value) => {
    const phoneNumber = Number(value.phone.replace(/\D/g, ""));
    const { name, surename, email, password } = value;
    const userData = { name, surename, phone: phoneNumber, email, password };

    // data(userData);

    dispatch(signUpRequest(userData));
  };

  return (
    <StyledModal open={open} onClose={onClose}>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <img src={SystemX} alt="" onClick={onClose} />
        <h1>Регистрация</h1>
        <Input
          {...register("name")}
          placeholder="Напишите ваше имя"
          error={!!errors.name}
          helperText={errors.name ? errors.name.message : ""}
        />
        <Input
          {...register("surename")}
          placeholder="Напишите вашу фамилию"
          error={!!errors.surename}
          helperText={errors.surename ? errors.surename.message : ""}
        />
        <Input
          {...register("phone")}
          placeholder="+996 (___) __ __ __"
          error={!!errors.phone}
          helperText={errors.phone ? errors.phone.message : ""}
        />

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
          error={!!errors.password}
          helperText={errors.password ? errors.password.message : ""}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <Input
          {...register("confirmPassword")}
          placeholder="Подтвердите пароль"
          type={showConfirmPassword ? "text" : "password"}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            ),
          }}
          error={!!errors.confirmPassword}
          helperText={
            errors.confirmPassword ? errors.confirmPassword.message : ""
          }
        />
        {(errors.email || errors.password) && (
          <ErrorMessage>Введите корректный Email </ErrorMessage>
        )}
        <Button variant="contained" type="submit">
          Создать аккаунт
        </Button>
        <StyledP>
          У вас уже есть аккаунт?{" "}
          <span style={{ cursor: "pointer" }} onClick={openSignIn}>
            {" "}
            Войти
          </span>
        </StyledP>
      </StyledForm>
    </StyledModal>
  );
};

export default SignUp;

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
  padding: "60px ",
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

const StyledP = styled("p")(() => ({
  "& span": {
    fontWeight: "bold",
    color: "#3268e6",
    marginLeft: "3px",
  },
}));
