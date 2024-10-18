import styled from "@emotion/styled";
import { Box, TextField, Typography } from "@mui/material";
import React from "react";
import Input from "./UI/Input";
import Button from "./UI/Button";

const adress = [
  { main: "Главная »", contacts: "Контакты" },
  { h1Contact: "Контакты" },
  { store: "Магазин Gadgetarium" },
  { adress: "Адрес:", city: "г.Бишкек, ул.Гражданская 119" },

  { phone: "Телефон:", g: "+996(400)00-00-00" },
  { email: "Почта:", name: "Gadgetarium.kg" },
  { schedule: "Режим работы:", time: "10:00-21:00" },
];

const Contacts = () => {
  return (
    <WrapperMainBox>
      <Box sx={{ padding: "60px 120px" }}>
        {adress[0].main && (
          <FirstBox>
            <span>{adress[0].main}</span>
            <span>{adress[0].contacts}</span>
          </FirstBox>
        )}
        {adress[1].h1Contact && (
          <Typography>
            <h2> {adress[1].h1Contact}</h2>
          </Typography>
        )}
        <StyledHr />
      </Box>

      <SecondBox>
        <Box>
          {adress.slice(2).map((item, index) => (
            <AddressBox key={index}>
              {item.store && <h2>{item.store}</h2>}
              {item.adress && (
                <StyledAdress>
                  <Box>{item.adress}</Box>
                  <span>{item.city}</span>
                </StyledAdress>
              )}

              {item.phone && (
                <StyledAdress>
                  <Box>{item.phone}</Box>
                  <span>{item.g}</span>
                </StyledAdress>
              )}
              {item.email && (
                <StyledAdress>
                  <Box>{item.email}</Box>
                  <span>{item.name}</span>
                </StyledAdress>
              )}
              {item.schedule && (
                <StyledAdress>
                  <Box>{item.schedule}</Box>
                  <span>{item.time}</span>
                </StyledAdress>
              )}
            </AddressBox>
          ))}
        </Box>

        <StyledForm component="form">
          <h2>Напишите нам</h2>
          <StyledInputBox>
            <Input label="Имя" placeholder="Напишите ваше имя " fullWidth />
            <Input
              label="Фамилия"
              placeholder="Напишите вашу фамилию"
              fullWidth
            />
          </StyledInputBox>
          <StyledInputBox>
            <Input label="E-mail" placeholder="Напишите ваш email" fullWidth />
            <Input
              label="Телефон"
              placeholder="+996 (_ _ _) _ _  _ _  _ _"
              fullWidth
            />
          </StyledInputBox>
          <StyledMassege
            label="Сообщение"
            placeholder="Напишите cообщение"
            fullWidth
          />
          <Box>
            <Button variant="contained">Отправить</Button>
          </Box>
        </StyledForm>
      </SecondBox>
      <Box>
        <img src="" alt="" />
      </Box>
    </WrapperMainBox>
  );
};

export default Contacts;

const WrapperMainBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.lightGrey.light,
  width: "100%",
}));

const FirstBox = styled(Box)`
  span {
    display: inline-block;
    padding-bottom: 30px;
  }

  span:first-child {
    color: grey;
  }

  span:last-child {
    font-weight: bold;
    padding-left: 3px;
  }
`;
const StyledHr = styled.hr`
  width: 100%;
  padding: 0.8px;
  border: none;
  background-color: #d1cfcf;
  margin-top: 10px;
`;

const AddressBox = styled(Box)({
  marginBottom: "25px",
  "& h2": {
    marginTop: "80px",
  },
});
const StyledAdress = styled(Box)(() => ({
  fontSize: "17px",
  "& > div": {
    fontWeight: "bold",
  },
  "& > span": {},
}));

const SecondBox = styled(Box)(() => ({
  display: "flex",
  justifyContent: "space-around",
  gap: "12rem",
}));

const StyledForm = styled(Box)(() => ({
  maxWidth: "580px",
  width: "100%",
  height: "500px",
  paddingTop: "18px",
  "& h2": {
    marginBottom: "40px",
  },
}));

const StyledInputBox = styled(Box)((theme) => ({
  display: "grid",
  gap: "10px",
  marginBottom: "10px",
  gridTemplateColumns: "1fr 1fr",
  "& input": {
    backgroundColor: "white",
  },
}));

const StyledMassege = styled(Input)(() => ({
  height: "130px",
  backgroundColor: "white",
  border: "none",
  marginBottom: "20px",
}));
