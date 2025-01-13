import React, { useState } from "react";
import { IconButton, InputAdornment, Modal } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { Box, styled } from "@mui/material";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  updateProfile,
  resetPassword,
  uploadFileToAWS,
  updateProfileImage,
} from "../../../store/profail/profailAuthThunk";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import Input from "../../../components/UI/Input";
import { Label } from "@mui/icons-material";
import { padding, width } from "@mui/system";
import { DefaultP, eyes, greyHeart } from "../../../assets/icon";

const schema = yup.object().shape({
  name: yup.string().required("Имя обязательно"),
  surename: yup.string().required("Фамилия обязательна"),
  phone: yup.string().required("Телефон обязателен"),
  email: yup
    .string()
    .email("Неверный формат Email")
    .required("Email обязателен"),
  adress: yup.string().required("Адрес обязательно"),
});

const passwordSchema = yup.object().shape({
  oldPassword: yup.string().required("Старый пароль обязателен"),
  newPassword: yup
    .string()
    .min(6, "Пароль должен содержать минимум 6 символов")
    .required("Новый пароль обязателен"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("newPassword")], "Пароли должны совпадать")
    .required("Подтвердите новый пароль"),
});

const Profail = () => {
  const [showPasswordChange, setShowPasswordChange] = useState(false);
  const { loading, profileData } = useSelector((state) => state.profile);
  const [showPassword, setShowPassword] = useState(false);
  const [shoProtocol, setShoProtocol] = useState(false);
  const [showerer, setShowerer] = useState(false);
  const [imageLink, setImageLink] = useState(null);

  const [newPassword, setNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const { link } = profileData || {};

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const {
    register: registerPassword,
    handleSubmit: handlePasswordSubmit,
    formState: { errors: passwordErrors },
  } = useForm({
    resolver: yupResolver(passwordSchema),
  });

  const dispatch = useDispatch();

  const handlePasswordChangeClick = () => {
    setShowPasswordChange((prev) => !prev);
  };

  const onSubmitPassword = (data) => {
    const { oldPassword, newPassword } = data;
    dispatch(resetPassword({ currentPassword: oldPassword, newPassword }));
  };

  const onSubmitProfile = (data) => {
    const newUserData = {
      firstName: data.name,
      lastName: data.surename,
      phoneNumber: data.phone,
      email: data.email,
      address: data.adress,
    };
    dispatch(updateProfile(newUserData));
  };

  const handleImageUpload = async (file) => {
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

    dispatch(uploadFileToAWS(formData))
      .unwrap()
      .then((response) => {
        const imageUrl = response.link;
        const updatedLink = link || imageUrl;

        setImageLink(imageUrl);

        dispatch(updateProfileImage(updatedLink));
      })
      .catch((error) => {
        console.error("Ошибка загрузки изображения:", error);
      });
  };

  return (
    <div style={{ backgroundColor: "#f4f4f4" }}>
      <WrapperMainBox>
        <FirstBox>
          <span>Личный кабинет »</span>
          <span>Учетная запись</span>
          <StyledH2>Профиль</StyledH2>
          <StyledHr />
        </FirstBox>

        <ContentWrapper>
          <LeftSection>
            <AvatarPlaceholder>
              <img
                src={profileData?.imageUrl || imageLink}
                alt="Avatar"
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "50%",
                  objectFit: "cover",
                }}
              />
            </AvatarPlaceholder>
            <label htmlFor="upload-image" style={{ cursor: "pointer" }}>
              <input
                id="upload-image"
                type="file"
                accept=".jpg, .png, .jpeg"
                onChange={(e) => {
                  const file = e.target.files[0];
                  if (file) {
                    handleImageUpload(file);
                  } else {
                    console.error("Файл не выбран");
                  }
                }}
                style={{ display: "none" }}
              />
              Нажмите для <br /> добавления фотографии
            </label>
          </LeftSection>
          <RightSection>
            <Form onSubmit={handleSubmit(onSubmitProfile)}>
              <SectionTitle>Личные данные</SectionTitle>
              <FormRow>
                <StyledInputbox
                  label={
                    <StyledLabel>
                      <p style={{ fontSize: "16px", fontFamily: "sans-serif" }}>
                        Имя
                      </p>
                      {errors.name && <span style={{ color: "red" }}>*</span>}
                    </StyledLabel>
                  }
                  {...register("name")}
                  placeholder="Напишите ваше имя"
                  error={!!errors.name}
                  helperText={errors.name ? errors.name.message : ""}
                />
                <StyledInputbox
                  label={
                    <StyledLabel>
                      <p style={{ fontSize: "16px", fontFamily: "sans-serif" }}>
                        Фамилия
                      </p>
                      {errors.surename && (
                        <span style={{ color: "red" }}>*</span>
                      )}
                    </StyledLabel>
                  }
                  {...register("surename")}
                  placeholder="Напишите вашу фамилию"
                  error={!!errors.surename}
                  helperText={errors.surename ? errors.surename.message : ""}
                />
              </FormRow>
              <FormRow>
                <StyledInputbox
                  label={
                    <StyledLabel>
                      <p style={{ fontSize: "16px", fontFamily: "sans-serif" }}>
                        E-mail
                      </p>
                      {errors.email && <span style={{ color: "red" }}>*</span>}
                    </StyledLabel>
                  }
                  {...register("email")}
                  placeholder="Напишите email"
                  error={!!errors.email}
                  helperText={errors.email ? errors.email.message : ""}
                />
                <StyledInputbox
                  label={
                    <StyledLabel>
                      <p style={{ fontSize: "16px", fontFamily: "sans-serif" }}>
                        Телефон
                      </p>
                      {errors.phone && <span style={{ color: "red" }}>*</span>}
                    </StyledLabel>
                  }
                  {...register("phone")}
                  placeholder="+996 (___) __ __ __"
                  error={!!errors.phone}
                  helperText={errors.phone ? errors.phone.message : ""}
                />
              </FormRow>
              <StyledInputbox
                style={{
                  width: "700px",
                }}
                label={
                  <StyledLabel>
                    <p style={{ fontSize: "16px", fontFamily: "sans-serif" }}>
                      Адрес доставки
                    </p>
                    {errors.adress && <span style={{ color: "red" }}>*</span>}
                  </StyledLabel>
                }
                {...register("adress")}
                placeholder="Адрес"
                error={!!errors.adress}
                helperText={errors.adress ? errors.adress.message : ""}
              />

              <Box sx={{ display: "flex", justifyContent: "end" }}>
                <p
                  onClick={handlePasswordChangeClick}
                  style={{
                    cursor: "pointer",
                    color: "#cb11ab",
                    fontWeight: "bold",
                  }}
                >
                  Cменить пороль
                </p>
              </Box>
              <div
                style={{
                  display: "flex",
                  gap: "40px",
                  justifyContent: "center",
                }}
              >
                <StyledButtonStond primary>Назад</StyledButtonStond>
                <StyledButton primary>Редактировать</StyledButton>
              </div>
            </Form>

            {showPasswordChange && (
              <PasswordChangeForm>
                <Form onSubmit={handlePasswordSubmit(onSubmitPassword)}>
                  <StyledInputProfail
                    label={
                      <StyledLabel>
                        <p
                          style={{ fontSize: "16px", fontFamily: "sans-serif" }}
                        >
                          Старый пароль
                        </p>
                        {errors.oldPassword && (
                          <span style={{ color: "red" }}>*</span>
                        )}
                      </StyledLabel>
                    }
                    {...registerPassword("oldPassword")}
                    placeholder="Старый пароль"
                    type={showPassword ? "text" : "password"}
                    error={!!passwordErrors.oldPassword}
                    helperText={passwordErrors.oldPassword?.message}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            onClick={() => setShowPassword(!showPassword)}
                          >
                            {showPassword ? <Visibility /> : <VisibilityOff />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />

                  <StyledInputProfail
                    label={
                      <StyledLabel>
                        <p
                          style={{ fontSize: "16px", fontFamily: "sans-serif" }}
                        >
                          Новый пароль
                        </p>
                        {errors.newPassword && (
                          <span style={{ color: "red" }}>*</span>
                        )}
                      </StyledLabel>
                    }
                    {...registerPassword("newPassword")}
                    placeholder="Новый пароль"
                    error={!!passwordErrors.newPassword}
                    helperText={passwordErrors.newPassword?.message}
                    type={newPassword ? "text" : "password"}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            onClick={() => setNewPassword(!newPassword)}
                          >
                            {newPassword ? <Visibility /> : <VisibilityOff />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                  <StyledInputProfail
                    label={
                      <StyledLabel>
                        <p
                          style={{ fontSize: "16px", fontFamily: "sans-serif" }}
                        >
                          Подтвердите новый пароль
                        </p>
                        {errors.confirmPassword && (
                          <span style={{ color: "red" }}>*</span>
                        )}
                      </StyledLabel>
                    }
                    {...registerPassword("confirmPassword")}
                    placeholder="Подтвердите новый пароль"
                    type={showConfirmPassword ? "text" : "password"}
                    error={!!passwordErrors.confirmPassword}
                    helperText={passwordErrors.confirmPassword?.message}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            onClick={() =>
                              setShowConfirmPassword(!showConfirmPassword)
                            }
                          >
                            {showConfirmPassword ? (
                              <Visibility />
                            ) : (
                              <VisibilityOff />
                            )}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                  <Box sx={{ display: "flex", justifyContent: "center" }}>
                    <StyledButtonStonddd type="submit">
                      Сменить пароль
                    </StyledButtonStonddd>
                  </Box>
                </Form>
              </PasswordChangeForm>
            )}
          </RightSection>
        </ContentWrapper>
      </WrapperMainBox>
    </div>
  );
};

export default Profail;
const StyledLabel = styled("div")(() => ({
  display: "flex",
  gap: "3px",
}));

const WrapperMainBox = styled(Box)(({ theme }) => ({
  backgroundColor: "#f4f4f4",
  width: "100%",
}));

const StyledInputProfail = styled(Input)(() => ({
  width: "700px",
  borderRadius: "6px",
  // border: "1px solid #c2c2c2",
  "& .MuiInputBase-input": {
    padding: "15px",
  },
}));

const FirstBox = styled(Box)`
  font-size: 15px;
  padding: 60px 120px;
  span {
    display: inline-block;
    padding-bottom: 30px;
  }
  span:first-of-type {
    color: grey;
  }
  span:nth-of-type(2) {
    font-weight: bold;
    margin-left: 6px;
  }
`;

const StyledButton = styled("button")(({ theme, primary }) => ({
  width: "200px",
  padding: "10px 20px",
  fontSize: "16px",
  fontWeight: "bold",
  borderRadius: "5px",
  cursor: "pointer",
  border: `2px solid ${primary ? theme.palette.primary.main : "#d32f2f"}`,
  backgroundColor: primary ? theme.palette.primary.main : "transparent",
  color: primary ? "white" : "#d32f2f",
  transition: "all 0.3s ease",
  "&:hover": {
    backgroundColor: primary ? theme.palette.primary.dark : "#ffe5e5",
    color: primary ? "white" : "#d32f2f",
  },
}));

const StyledButtonStond = styled("button")(() => ({
  border: "3px solid #cb11ab",
  backgroundColor: "white",
  borderRadius: "5px",
  width: "200px",
  color: "#cb11ab",
  fontWeight: "bold",
}));
const StyledButtonStonddd = styled("button")(() => ({
  backgroundColor: "#cb11ab",
  borderRadius: "5px",
  width: "200px",
  color: "white",
  fontWeight: "bold",
  padding: "10px 20px",
  border: "none",
}));

const StyledInputbox = styled(Input)(() => ({
  width: "340px",
  borderRadius: "6px",
  "& .MuiInputBase-input": {
    padding: "15px",
  },
}));

const StyledHr = styled("hr")(() => ({
  width: "100%",
  padding: "0.6px",
  border: "none",
  backgroundColor: "#d1cfcf",
  marginTop: "10px",
}));

const StyledH2 = styled("h1")(() => ({
  fontFamily: "sans-serif",
}));

const ContentWrapper = styled(Box)(() => ({
  display: "flex",
  padding: "0 120px 40px",
  gap: "40px",
}));

const LeftSection = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  textAlign: "center",
}));

const AvatarPlaceholder = styled(Box)(() => ({
  width: "150px",
  height: "150px",
  border: "1px dashed #d1cfcf",
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "12px",
  color: "grey",
  textAlign: "center",
  margin: "0 auto",
}));

const RightSection = styled(Box)(() => ({
  flex: "1",
}));

const Form = styled("form")(() => ({
  width: "688px",
  display: "flex",
  flexDirection: "column",
  gap: "20px",
}));

const FormRow = styled(Box)(() => ({
  display: "flex",
  gap: "20px",
}));

const SectionTitle = styled("h3")(() => ({
  marginBottom: "20px",
}));

const ActionButtons = styled(Box)(() => ({
  display: "flex",
  justifyContent: "center",
  gap: "20px",
}));

const PasswordChangeForm = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "10px",
}));
