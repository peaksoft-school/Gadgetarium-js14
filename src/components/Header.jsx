import styled from "@emotion/styled";
import {
  Box,
  Divider,
  TextField,
  InputAdornment,
  Autocomplete,
} from "@mui/material";
import React, { useState } from "react";
import {
  catalog,
  CatalogText,
  IconAdgetarium,
  IconBasket,
  IconFacebook,
  IconG,
  IconInstagram,
  IconLike,
  IconPersonal,
  IconWhatsApp,
  Scales,
} from "../assets/icon";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear"; // Импортируем иконку "X"
import theme from "../assets/theme/theme";

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

  return (
    <HeaderBox>
      <FirstBox>
        <Box>
          <img src={IconG} alt="iconG" />
          <img src={IconAdgetarium} alt="adgetarium" />
        </Box>
        <LinkBox>
          {links.map(({ id, text }) => (
            <span key={id}>{text}</span>
          ))}
        </LinkBox>
        <Box>
          +996 220-38-90-01
          <img src={IconPersonal} alt="pr" />
        </Box>
      </FirstBox>
      <StyledDivider />
      <SecondBox>
        <Box>
          <img src={catalog} alt="" />
          <img src={CatalogText} alt="" />
        </Box>
        <StyledAutcompled
          options={suggestions}
          value={selectedValue}
          onChange={(event, newValue) => {
            setSelectedValue(newValue);
            setInputValue(newValue);
          }}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Поиск по каталогу магазина"
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
                      <SearchIcon />
                    )}
                  </InputAdornment>
                ),
              }}
              variant="outlined"
            />
          )}
          freeSolo
        />
        <Box>
          <img src={IconFacebook} alt="face" />
          <img src={IconInstagram} alt="insta" />
          <img src={IconWhatsApp} alt="whatsapp" />
        </Box>
        <Box>
          <img src={Scales} alt="scales" />
          <img src={IconLike} alt="like" />
          <img src={IconBasket} alt="basket" />
        </Box>
      </SecondBox>
    </HeaderBox>
  );
};

export default Header;

const HeaderBox = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "147px",
  backgroundColor: theme.palette.black.dark,
}));

const FirstBox = styled(Box)(({}) => ({
  width: "100%",
  height: "60px",
  // position: "fixed",
  backgroundColor: theme.palette.warning.main,
  padding: "12px",
  display: "flex",
  justifyContent: "space-between",
  color: theme.palette.lightGrey.light,
}));

const StyledDivider = styled(Divider)(({}) => ({
  color: theme.palette.lightGrey.main,
}));

const SecondBox = styled(Box)(({}) => ({
  width: "100%",
  padding: "12px",
  backgroundColor: theme.palette.info.light,
  display: "flex",
  justifyContent: "space-between",
}));

const LinkBox = styled(Box)(() => ({
  width: "450px",
  display: "flex",
  gap: "20px",
}));

const StyledAutcompled = styled(Autocomplete)((theme) => ({
  width: "400px",
  height: "40px",
  border: "grey",
  
}));
