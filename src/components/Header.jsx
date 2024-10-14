import styled from "@emotion/styled";
import {
  Box,
  Divider,
  TextField,
  InputAdornment,
  Autocomplete,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import {
  IconAdgetarium,
  IconBasket,
  IconFacebook,
  IconG,
  IconInstagram,
  IconLike,
  IconPersonal,
  IconSearch,
  IconShoppingCard,
  IconWhatsApp,
} from "../assets/icon";
import ClearIcon from "@mui/icons-material/Clear";
import theme from "../assets/theme/theme";
import SidebarMenu from "./UI/SaidebarMenu";

const links = [
  { id: 2, text: "Главная" },
  { id: 3, text: "О магазине" },
  { id: 5, text: "Доставка" },
  { id: 7, text: "FAG" },
  { id: 8, text: "Контакты" },
];

const suggestions = [
  "Электроника",
  "Мобильные телефоны",
  "Ноутбуки",
  "Аксессуары",
  "Смарт-часы",
  "Гаджеты",
];

const Header = () => {
  const [inputValue, setInputValue] = useState("");
  const [selectedValue, setSelectedValue] = useState(null);
  const [showMainElements, setShowMainElements] = useState(true);
  const [showAdgetariumImg, setShowAdgetariumImg] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setShowMainElements(false);
      setShowAdgetariumImg(true);
    } else {
      setShowMainElements(true);
      setShowAdgetariumImg(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <HeaderBox>
      <FirstBox>
        {showMainElements && (
          <>
            <StyledAdgetariumImg>
              <img src={IconG} alt="iconG" />
              <img src={IconAdgetarium} alt="adgetarium" />
            </StyledAdgetariumImg>
            <LinkBox>
              {links.map(({ id, text }) => (
                <span key={id}>{text}</span>
              ))}
            </LinkBox>
            <StyledPersonBox>
              <span> +996 220-38-90-01</span>
              <img src={IconPersonal} alt="pr" />
            </StyledPersonBox>
          </>
        )}
        {showAdgetariumImg && (
          <StyledAdgetariumImg>
            <img src={IconG} alt="iconG" />
            <img src={IconAdgetarium} alt="adgetarium" />
          </StyledAdgetariumImg>
        )}
      </FirstBox>
      <StyledHr />

      <SecondBox>
        <BoxCatalog>
          <SidebarMenu />
          <hr />
        </BoxCatalog>
        <StyledAutcompled
          options={suggestions}
          value={selectedValue}
          onChange={(event, newValue) => {
            setSelectedValue(newValue);
            setInputValue(newValue);
          }}
          renderInput={(params) => (
            <StyledTextField
              {...params}
              placeholder="Поиск по каталогу магазина"
              InputProps={{
                ...params.InputProps,
                endAdornment: (
                  <InputAdornment position="start">
                    {selectedValue ? (
                      <InputAdornment position="end">
                        <ClearIcon
                          onClick={() => {
                            setInputValue("");
                            setSelectedValue(null);
                          }}
                          style={{ cursor: "pointer" }}
                        />
                      </InputAdornment>
                    ) : (
                      <img src={IconSearch} alt="search" />
                    )}
                  </InputAdornment>
                ),
              }}
              variant="outlined"
            />
          )}
          freeSolo
        />
        {!showAdgetariumImg && (
          <StyledImg>
            <img src={IconFacebook} alt="face" />
            <img src={IconInstagram} alt="insta" />
            <img src={IconWhatsApp} alt="whatsapp" />
          </StyledImg>
        )}
        <StyledImgBox>
          <img src={IconShoppingCard} alt="" />
          <img src={IconBasket} alt="basket" />
          <img src={IconLike} alt="like" />
        </StyledImgBox>
      </SecondBox>
    </HeaderBox>
  );
};

export default Header;

const HeaderBox = styled(Box)(() => ({
  width: "100%",
  height: "163px",
  backgroundColor: theme.palette.black.dark,
  position: "fixed",
}));

const FirstBox = styled(Box)(() => ({
  width: "100%",
  height: "60px",
  backgroundColor: theme.palette.black.dark,
  padding: "15px",
  display: "flex",
  justifyContent: "space-between",
  color: theme.palette.lightGrey.light,
  alignItems: "center",
}));

const SecondBox = styled(Box)(() => ({
  width: "100%",
  padding: "12px",
  backgroundColor: theme.palette.black.dark,
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center ",
}));

const LinkBox = styled(Box)(() => ({
  display: "flex",
  gap: "18px",
  fontSize: "17px",

  "& span": {
    alignContent: "center",
    width: "85px",
    height: "40px",
    borderRadius: "4px",
    textAlign: "center",
    transition: "color 0.3s ease",
    cursor: "pointer",
  },
  "& span:hover": {
    backgroundColor: theme.palette.darkGrey.dark,
  },
}));

const StyledAutcompled = styled(Autocomplete)(() => ({
  width: "700px",
  color: "#fff",
}));

const StyledTextField = styled(TextField)(() => ({
  color: "#fff",
  "& .MuiOutlinedInput-root": {
    color: "#fff",
    padding: "0",
    "& fieldset": {
      borderColor: theme.palette.darkGrey.dark,
      borderRadius: "8px",
      color: "#fff",
    },
    "&:hover fieldset": {
      borderColor: theme.palette.lightGrey.main,
      borderRadius: "8px",
    },
    "&.Mui-focused fieldset": {
      borderColor: theme.palette.lightGrey.main,
      borderRadius: "8px",
      color: "#fff",
    },
  },
}));

const StyledAdgetariumImg = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  "& img:first-of-type": {
    alignSelf: "start",
    marginTop: "-2px",
    marginRight: "3px",
    backgroundColor: theme.palette.primary.main,
    padding: "5px 4px",
  },
}));

const StyledPersonBox = styled(Box)(() => ({
  display: "flex",
  "& img": {
    width: "25px",
    height: "25px",
    marginLeft: "30px",
  },
  "& span": {
    marginTop: "2.5px",
    fontSize: "20px",
    fontWeight: "lighter",
  },
}));

const StyledImg = styled(Box)(() => ({
  display: "flex",
  gap: "15px",
  "& img": {
    width: "30px",
    height: "30px",
  },
  "& img:nth-of-type(2)": {
    width: "26px",
    height: "26px",
    marginTop: "2px",
  },
}));

const StyledImgBox = styled(Box)(() => ({
  display: "flex",
  padding: "0",
  gap: "20px",
  alignItems: "center",

  "& img": {
    width: "24px",
    height: "24px",
  },
  "& img:nth-of-type(2)": {
    width: "32px",
    height: "32px",
  },
  "& img:nth-of-type(3)": {
    marginTop: "8px",
  },
}));
const StyledHr = styled("hr")(() => ({
  width: "100%",
  height: "2px",
  backgroundColor: theme.palette.black.main,
  border: "none",
  margin: "10px 0",
}));
const BoxCatalog = styled(Box)(() => ({
  display: "flex",
  "& hr": {
    width: "2px",
    height: "40px",
    backgroundColor: theme.palette.black.main,
    border: "none",
    marginLeft: "100px",
  },
}));
