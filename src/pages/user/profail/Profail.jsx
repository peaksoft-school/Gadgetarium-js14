import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, styled } from "@mui/material";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
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

        dispatch(updateProfileImage(updatedLink));
      })
      .catch((error) => {
        console.error("Ошибка загрузки изображения:", error);
      });
  };

  return (
    <div>
      <Header />
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
                src={profileData?.imageUrl || "/default-avatar.png"}
                alt="Avatar"
                style={{ width: "100%", height: "100%" }}
              />
            </AvatarPlaceholder>
            <label htmlFor="upload-image" style={{ cursor: "pointer" }}>
              <input
                id="upload-image"
                type="file"
                accept="image/*"
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
              </FormRow>
              <FormRow>
                <Input
                  {...register("email")}
                  placeholder="Напишите email"
                  error={!!errors.email}
                  helperText={errors.email ? errors.email.message : ""}
                />
                <Input
                  {...register("phone")}
                  placeholder="+996 (___) __ __ __"
                  error={!!errors.phone}
                  helperText={errors.phone ? errors.phone.message : ""}
                />
              </FormRow>
              <Input
                {...register("adress")}
                placeholder="Адрес"
                error={!!errors.adress}
              />

              <ActionButtons>
                <p
                  onClick={handlePasswordChangeClick}
                  style={{ cursor: "pointer", color: "blue" }}
                >
                  сменить пороль
                </p>
                <button type="button">Назад</button>
                <StyledButtonRed type="submit">Сохранить</StyledButtonRed>
              </ActionButtons>
            </Form>

            {showPasswordChange && (
              <PasswordChangeForm>
                <Form onSubmit={handlePasswordSubmit(onSubmitPassword)}>
                  <Input
                    {...registerPassword("oldPassword")}
                    placeholder="Старый пароль"
                    type="password"
                    error={!!passwordErrors.oldPassword}
                    helperText={passwordErrors.oldPassword?.message}
                  />
                  <Input
                    {...registerPassword("newPassword")}
                    placeholder="Новый пароль"
                    type="password"
                    error={!!passwordErrors.newPassword}
                    helperText={passwordErrors.newPassword?.message}
                  />
                  <Input
                    {...registerPassword("confirmPassword")}
                    placeholder="Подтвердите новый пароль"
                    type="password"
                    error={!!passwordErrors.confirmPassword}
                    helperText={passwordErrors.confirmPassword?.message}
                  />
                  <StyledButtonRed type="submit">
                    Сменить пароль
                  </StyledButtonRed>
                </Form>
              </PasswordChangeForm>
            )}
          </RightSection>
        </ContentWrapper>
      </WrapperMainBox>
      <Footer />
    </div>
  );
};

export default Profail;

const WrapperMainBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.lightGrey.light,
  width: "100%",
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

const StyledButtonRed = styled("button")(() => ({
  backgroundColor: "#d32f2f",
  color: "white",
  padding: "10px 20px",
  border: "none",
  cursor: "pointer",
  borderRadius: "4px",
}));

const PasswordChangeForm = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "10px",
}));
