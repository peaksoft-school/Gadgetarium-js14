import React from "react";
import { Box, styled, Typography } from "@mui/material";
import Input from "./UI/Input";
import Button from "./UI/Button";
import { Chasy, Mestonahajdenie, Nathvania, Pochta, Telefon } from "../assets/icon";

const Footer = () => {
  return (
    <ConteinerFuter className="futerConteiner">
      <Box className="box-text">
        <p>Каталог</p>
        <p>Смартфоны</p>
        <p>Ноутбуки и планшеты</p>
        <p>Смарт-часы и браслеты</p>
        <p>Аксессуары</p>
      </Box>
      <Box className="box-text">
        <p>Будь с нами</p>
        <p>Акции</p>
        <p>Новинки</p>
        <p>Популярные категории</p>
      </Box>
      <Box className="box-text">
        <p>Помощь и сервисы</p>
        <p>О магазине</p>
        <p>Доставка</p>
        <p>FAQ</p>
        <p>Контакты</p>
      </Box>
      <Box className="box-text">
        <p>Расскажем об акциях и скидках</p>
        <Box className="button-input">
          <Input className="inputr" placeholder="Email" />
          <Button className="button">Подписаться</Button>
        </Box>
        <Box className="text-container">
          <p>
            Нажимая на кнопку «подписаться», Вы соглашаетесь <br /> на обработку
            персональных данных
          </p>
          <br />
          <StyledButton>
            <Box className="contact-info">
              <img src={Telefon} alt="Phone" />
              <Typography className="text">+996 (400) 00 00 00</Typography>
            </Box>
            <Box className="contact-info">
              <img src={Pochta} alt="Email" />
              <Typography className="text">Gadgetarium.kg</Typography>
            </Box>
            <Box className="contact-info">
              <img src={Mestonahajdenie} alt="Location" />
              <Typography className="text">г.Бишкек, ул. Гражданская 119</Typography>
            </Box>
            <Box className="contact-info">
              <img src={Chasy} alt="Hours" />
              <Typography className="text">С 10:00 до 21:00 (без выходных)</Typography>
            </Box>
          </StyledButton>
        </Box>
        <Box className='hr'>


</Box>
<Box >
  <img src={Nathvania} alt="" />
  <Typography>
  © 2022 Gadgetarium. Интернет магазин 
  Все права защищены.
  </Typography>
</Box>
      </Box>

     
    </ConteinerFuter>
  );
};

export default Footer;

const StyledButton = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "10px", 
  "& .contact-info": {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    color: "#d3d3d3", 
  },
  "& img": {
    width: "20px", 
    height: "20px",
  },
}));

const ConteinerFuter = styled(Box)(({ theme }) => ({
  "&.futerConteiner": {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: "#1c1c1c",
    padding: "20px",
    color: "#d3d3d3",
  },
  "& .box-text": {
    display: "flex",
    flexDirection: "column",
    padding: "20px",
    "& .textBox": {
      color: "#d3d3d3",
      margin: "10px",
      fontSize: "16px",
    },
  },
  "& .button-input": {
    display: "flex",
    alignItems: "center",
    "& .inputr": {
      width: "200px",
      top: "-2px",
    },
    "& .button": {
      width: "162px",
      height: "40px",
    },
  },
  "& .text-container": {
    "& p": {
      color: "#d3d3d3",
      fontSize: "12px",
    },
  },
  '& .hr':{
    display:'flex',
    justifyContent:'center',
 
    border: '1px solid #2a2c38',
    margin: '20px 0',
    width: '1000px'
  }
}));
