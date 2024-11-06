// eslint-disable-next-line no-unused-vars
import React from "react";
import { Box, styled, TextField, Typography } from "@mui/material";
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
        <StyledCond>
          <Box className="inputcrovs">
            <div
              style={{
                width: "900px",
                display: "flex",
              }}
            >
              <StyledBox>
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
              </StyledBox>
            </div>

            <Box className="box-text2">
              <div>
                <FooterTitle>Расскажем об акциях и скидках</FooterTitle>
                <Box className="button-input">
                  <TextField
                    label="Email"
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

                <p style={{ position: "relative", top: "10px" }}>
                  Нажимая на кнопку «подписаться», Вы соглашаетесь <br /> на
                  обработку персональных данных
                </p>
              </div>
              <Box className="text-container">
                <br />
                <StyledButton>
                  <Box className="contact-info">
                    <img src={Telefon} alt="Phone" />
                    <FooterText>+996 (400) 00 00 00</FooterText>
                  </Box>
                  <Box className="contact-info">
                    <img src={Pochta} alt="Email" />
                    <FooterText>Gadgetarium.kg</FooterText>
                  </Box>
                  <Box className="contact-info">
                    <img src={Mestonahajdenie} alt="Location" />
                    <FooterText>г.Бишкек, ул. Гражданская 119</FooterText>
                  </Box>
                  <Box className="contact-info">
                    <img src={Chasy} alt="Hours" />
                    <FooterText>С 10:00 до 21:00 (без выходных)</FooterText>
                  </Box>
                </StyledButton>
              </Box>
            </Box>
          </Box>
        </StyledCond>
        <Box className="hr"></Box>
        <BoxZagalovok className="boxzagalovak">
          <img src={Nathvania} alt="" />
          <StyledTypografy>
            © 2022 Gadgetarium. Интернет магазин <br /> Все права защищены.
          </StyledTypografy>
        </BoxZagalovok>
      </ConteinerFuter>
    </>
  );
};

export default Footer;

const StyledCond = styled(Box)(() => ({
  display: "flex",
  justifyContent: "space-between",
  padding: "0px 30px 0 30px",
}));

const StyledTypografy = styled(Typography)(() => ({
  color: "#6c7386",
  textAlign: "center",
  lineHeight: 1.5,
}));

const StyledButton = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  position: "relative",
  top: "10px",
  gap: "5px",
  "& .contact-info": {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
  "& .text": {
    color: "#6d7588",
  },
  "& img": {
    width: "20px",
    height: "20px",
  },
}));

const StyledBox = styled(Box)(() => ({
  display: "flex",
  justifyContent: "space-between",
  width: "100%",
  margin: "0 auto",
  color: "#80899e",

}));

const ConteinerFuter = styled(Box)(() => ({
  "& .box-text2": {
    flexDirection: "column",
  },
  "&.futerConteiner": {
    backgroundColor: "#1a1a25",
    padding: "20px",
    color: "#d3d3d3",
  },
  "& .inputcrovs": {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    margin: "0 auto",
  },
  "& .box-text": {
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
  color: "#fff",
});
const FooterLinkp = styled(Typography)({
  fontSize: "14px",
  cursor: "pointer",
  color: "#464a59",
  lineHeight: "30px",
  "&:hover": {
    color: "#ffffff",
  },
});

const FooterText = styled(Typography)({
  color: "#464a59",
  fontSize: "15px",
  "&:hover": {
    color: "#ffffff",
  },
});
