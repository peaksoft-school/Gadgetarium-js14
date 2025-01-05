import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, styled, TextField, Button } from "@mui/material";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import { saveProfileImage } from "../../../store/profail/profailAuthThunk";

const Profail = () => {
  const dispatch = useDispatch();
  const { loading, profileData } = useSelector((state) => state.profile);
  const [selectedFile, setSelectedFile] = useState(null);
  const [showPasswordChange, setShowPasswordChange] = useState(false);

  const handlePasswordChangeClick = () => {
    setShowPasswordChange((prev) => !prev);
  };

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleFileUpload = () => {
    console.log(selectedFile);
    if (selectedFile) {
      const formData = new FormData();
      formData.append("image", selectedFile);
      dispatch(saveProfileImage(formData));
    }
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

        <Box
          sx={{
            display: "flex",
            gap: "20px",
            padding: "0 120px",
            marginBottom: "40px",
          }}
        >
          <StyledButton>История заказов</StyledButton>
          <StyledButton>Избранное</StyledButton>
          <ActiveButton>Профиль</ActiveButton>
        </Box>

        <ContentWrapper>
          <LeftSection>
            <AvatarPlaceholder>
              <img
                src={profileData?.imageUrl || ""}
                alt="Avatar"
                style={{ width: "100%", height: "100%" }}
              />
            </AvatarPlaceholder>
            <label>
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                style={{ display: "none" }}
              />
              <span style={{ cursor: "pointer" }}>
                Нажмите для <br /> добавления фотографии
              </span>
            </label>
            <Button
              onClick={handleFileUpload}
              disabled={loading || !selectedFile}
              variant="contained"
              sx={{ marginTop: "10px" }}
            >
              {loading ? "Загрузка..." : "Сохранить"}
            </Button>
          </LeftSection>
          <RightSection>
            <Form>
              <SectionTitle>Личные данные</SectionTitle>
              <FormRow>
                <TextField label="Имя" />
                <TextField label="Фамилия" />
              </FormRow>
              <FormRow>
                <TextField label="E-mail" fullWidth />
                <TextField label="Телефон" fullWidth />
              </FormRow>
              <TextField
                label="Адрес доставки"
                required
                fullWidth
                sx={{ marginBottom: "40px" }}
              />

              <StyledEditButton onClick={handlePasswordChangeClick}>
                {showPasswordChange ? "" : "Сменить пароль"}
              </StyledEditButton>

              {showPasswordChange && (
                <>
                  <SectionTitle>Смена пароля</SectionTitle>
                  <FormRow>
                    <TextField
                      label="Старый пароль"
                      type="password"
                      fullWidth
                      sx={{ marginBottom: "20px" }}
                    />
                  </FormRow>
                  <FormRow>
                    <TextField
                      label="Новый пароль"
                      type="password"
                      fullWidth
                      sx={{ marginBottom: "20px" }}
                    />
                  </FormRow>
                  <FormRow>
                    <TextField
                      label="Подтвердите новый пароль"
                      type="password"
                      fullWidth
                      sx={{ marginBottom: "40px" }}
                    />
                  </FormRow>
                </>
              )}

              <ActionButtons>
                <StyledBackButton>Назад</StyledBackButton>
                <StyledButtonRed>Редактировать</StyledButtonRed>
              </ActionButtons>
            </Form>
          </RightSection>
        </ContentWrapper>
      </WrapperMainBox>
      <Footer />
    </div>
  );
};

export default Profail;

/* Стили */
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

const StyledButton = styled(Button)(() => ({
  padding: "10px 30px",
  backgroundColor: "#e0e2e7",
  color: "#3b4558",
  borderRadius: "5px",
  fontWeight: "bold",
  fontSize: "16px",
  textTransform: "none",
  "&:hover": {
    backgroundColor: "#384255",
    color: "white",
  },
}));

const ActiveButton = styled(StyledButton)(() => ({
  backgroundColor: "#384255",
  color: "white",
}));

const ContentWrapper = styled(Box)(() => ({
  display: "flex",
  padding: "0 120px 40px",
  gap: "40px",
}));

const LeftSection = styled(Box)(() => ({
  // flex: '0 0 200px',
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
  // fontSize: '18px',
  // fontWeight: 'bold',
  // marginBottom: '20px',
}));

const ActionButtons = styled(Box)(() => ({
  display: "flex",
  justifyContent: "center",
  gap: "20px",
}));

const StyledBackButton = styled(Button)(() => ({
  width: "200px",
  padding: "10px 30px",
  backgroundColor: "#e0e2e7",
  color: "#3b4558",
  borderRadius: "5px",
  fontWeight: "bold",
  fontSize: "16px",
  textTransform: "none",
  "&:hover": {
    backgroundColor: "#d1cfcf",
  },
}));

const StyledButtonRed = styled("button")(() => ({
  padding: "10px 30px",
  backgroundColor: "#d81b60",
  color: "white",
  borderRadius: "5px",
  fontWeight: "bold",
  fontSize: "16px",
  textTransform: "none",
  "&:hover": {
    backgroundColor: "#c2185b",
  },
}));

const StyledEditButton = styled("p")(() => ({
  color: "#cb11ab",
  fontWeight: "bold",
  fontSize: "16px",
  textTransform: "none",
  cursor: "pointer",
}));
