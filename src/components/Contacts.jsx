import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";
import React from "react";
import Input from "./UI/Input";
import Button from "./UI/Button";
import { Map } from "../assets/image";

const adress = [
  { main: "Главная »", contacts: "Контакты" },
  { h1Contact: "Контакты" },
  { store: "Магазин Gadgetarium" },
  { adress: "Адрес:", city: "г.Бишкек, ул.Гражданская 119" },
  { phone: "Телефон:", g: "+996(400)00-00-00" },
  { email: "Почта:", name: "Gadgetarium.kg" },
  { schedule: "Режим работы:", time: "10:00-21:00" },
  { image: Map },
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
          <Typography component="h2">{adress[1].h1Contact}</Typography>
        )}
        <StyledHr />
      </Box>

      <SecondBox>
        <Box>
          {adress.slice(2, 7).map((item, index) => (
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
            multiline
            rows={4}
          />
          <Box>
            <Button variant="contained">Отправить</Button>
          </Box>
        </StyledForm>
      </SecondBox>

      <MapBox>
        <iframe
          width="83%"
          height="500"
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
          src="https://maps.google.com/maps?width=100%25&amp;height=500&amp;hl=ru&amp;q=%D0%B3.%D0%91%D0%B8%D1%88%D0%BA%D0%B5%D0%BA,%20%D1%83%D0%BB.%D0%93%D1%80%D0%B0%D0%B6%D0%B4%D0%B0%D0%BD%D1%81%D0%BA%D0%B0%D1%8F%20119+(%D1%83%D0%BB.%D0%93%D1%80%D0%B0%D0%B6%D0%B4%D0%B0%D0%BD%D1%81%D0%BA%D0%B0%D1%8F%20119)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          title="Google Map"
        />
      </MapBox>
    </WrapperMainBox>
  );
};

export default Contacts;

const WrapperMainBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.lightGrey.light,
  width: "100%",
}));

const FirstBox = styled(Box)`
  font-size: 15px;
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
  padding: 0.6px;
  border: none;
  background-color: #d1cfcf;
  margin-top: 10px;
`;

const AddressBox = styled(Box)({
  marginBottom: "25px",
  "& h2": {
    marginTop: "80px",
    marginBottom: "40px",
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
  maxWidth: "38%",
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
  width: "100%",
  backgroundColor: "white",
  marginBottom: "20px",
  "& .MuiOutlinedInput-root": {
    borderRadius: "8px",
    "& fieldset": {
      border: "none",
    },
  },
  "& .MuiOutlinedInput-input": {
    padding: "10px",
  },
}));

const MapBox = styled(Box)(() => ({
  width: "100%",
  textAlign: "center",
  padding: "80px 0px",
}));
