// eslint-disable-next-line no-unused-vars
import React from "react";
import { Box,  styled, TextField, Typography } from "@mui/material";
// import Input from "./UI/Input";
import Button from "./UI/Button";
import {
  Chasy,
  Mestonahajdenie,
  Nathvania,
  Pochta,
  Telefon,
} from "../assets/icon";

const Footer = () => {
  return (
    <>
      <ConteinerFuter className="futerConteiner">
        <div style={{ display: "flex", width: "1300px", margin: "0 auto" }}>
          <div
            style={{
              width: "900px",
              display: "flex",
            }}
          >
            <Box className="box-text">
              <FooterTitle>Каталог</FooterTitle>
              <FooterLinkp>Смартфоны</FooterLinkp>
              <FooterLinkp>Ноутбуки и планшеты</FooterLinkp>
              <FooterLinkp>Смарт-часы и браслеты</FooterLinkp>
              <FooterLinkp>Аксессуары</FooterLinkp>
            </Box>
            <Box className="box-text">
              <FooterTitle>Будь с нами</FooterTitle>

              <FooterLinkp>Акции</FooterLinkp>
              <FooterLinkp>Новинки</FooterLinkp>
              <FooterLinkp>Популярные категории</FooterLinkp>
            </Box>
            <Box className="box-text">
              <FooterTitle>Помощь и сервисы</FooterTitle>
              <FooterLinkp>О магазине</FooterLinkp>
              <FooterLinkp>Доставка</FooterLinkp>
              <FooterLinkp>FAQ</FooterLinkp>
              <FooterLinkp>Контакты</FooterLinkp>
            </Box>
          </div>

          <Box className="box-text2">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                marginBottom: "20px",
              }}
            >
              <FooterTitle style={{position:'relative',top:'20px'}}>Расскажем об акциях и скидках</FooterTitle>
              <Box className="button-input">
                <TextField
                  size="small"
                  className="inputr"
                  sx={{ borderRadius: "4px 0 0 4px" }}
                  placeholder="Email"
                />
                <Button
                  className="button"
                  variant="contained"
                  style={{ borderRadius: "0 4px 4px 0" }}
                >
                  Подписаться
                </Button>
              </Box>
              <p>
                Нажимая на кнопку «подписаться», Вы соглашаетесь <br /> на
                обработку персональных данных
              </p>
            </div>
            <Box className="text-container">
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
                  <Typography className="text">
                    г.Бишкек, ул. Гражданская 119
                  </Typography>
                </Box>
                <Box className="contact-info">
                  <img src={Chasy} alt="Hours" />
                  <Typography className="text">
                    С 10:00 до 21:00 (без выходных)
                  </Typography>
                </Box>
              </StyledButton>
            </Box>
          </Box>
        </div>
        <Box className="hr"></Box>
        <BoxZagalovok
          className="boxzagalovak"
        >
          <img src={Nathvania} alt="" />
          <Typography style={{color:'#6c7386'}} textAlign={"center"} lineHeight={1.5} m={"10px 0 0 0"}>
            © 2022 Gadgetarium. Интернет магазин <br /> Все права защищены.
          </Typography>
        </BoxZagalovok>
      </ConteinerFuter>
    </>
  );
};

export default Footer;

const StyledButton = styled(Box)(() => ({
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

const ConteinerFuter = styled(Box)(() => ({
  "& .box-text2": {
    width: "45%",
  },
  "&.futerConteiner": {
    width: "100%",
    backgroundColor: "#1c1c1c",
    padding: "20px",
    color: "#d3d3d3",
  },
  "& .box-text": {
    display: "flex",
    flexDirection: "column",
    padding: "20px",
    color:'#80899e',
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
      "& .MuiOutlinedInput-root": {
        padding: 0,
        "& fieldset": {
          backgroundColor: "#fff",
          borderRadius: "4px 0 0 4px",
        },
        "&:hover fieldset": {
          borderColor: "#9e969c",
        },
        "&.Mui-focused fieldset": {
          borderColor: "#c9ccd4",
          borderWidth: "1px",
        },
      },
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
  "& .hr": {
    border: "1px solid #2a2c38",
    height: "2px",
    width: "87%",
    margin: "15px auto",
  },
  "& .contact-info": {
    color: "#d3d3d3",
  },
}));

const BoxZagalovok = styled(Box)(() => ({
  width: "1300px",
  margin: "0 auto",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
}));
const FooterTitle = styled(Typography)({
  fontWeight: 600,
  fontSize: "18px",
  marginBottom: "16px",
  color: "#ffffff",
});
const FooterLinkp = styled(Typography)({
  fontSize: "14px",
  cursor: "pointer",
  color: "#d3d3d3",
  lineHeight: '30px',
  "&:hover": {
    color: "#ffffff",
  },
});
