import {
  Paper,
  List,
  ListItem,
  ListItemText,
  Collapse,
  Typography,
  Box,
  Button,
} from "@mui/material";
import { useState } from "react";
import {
  Headphones,
  Monitor,
  Strelca,
  Talog,
  Telefon,
  Vector,
} from "../../assets/icon";
import styled from "@emotion/styled";
// import Button from "./Button";

const Arr = [
  {
    id: 1,
    name: "Смартфоны",
    title: [
      { name: "Ремешки для часов", navigate: "" },
      { name: "Зарядные устройства", navigate: "" },
      { name: "Защита экрана", navigate: "" },
      { name: "Чехлы и корпусы", navigate: "" },
      { name: "Подставки", navigate: "" },
      { name: "Кабели и адаптеры", navigate: "" },
      { name: "Внешние аккумуляторы", navigate: "" },
      { name: "Наушники", navigate: "" },
      { name: "Карта памяти и накопители", navigate: "" },
    ],
    img: Telefon,
  },
  {
    id: 2,
    name: "Ноутбуки и планшеты",
    title: [
      { name: "Ремешки для часов", navigate: "" },
      { name: "Зарядные устройства", navigate: "" },
      { name: "Защита экрана", navigate: "" },
      { name: "Чехлы и корпусы", navigate: "" },
      { name: "Подставки", navigate: "" },
      { name: "Кабели и адаптеры", navigate: "" },
      { name: "Внешние аккумуляторы", navigate: "" },
      { name: "Наушники", navigate: "" },
      { name: "Карта памяти и накопители", navigate: "" },
    ],
    img: Monitor,
  },
  {
    id: 3,
    name: "Смарт-часы и браслеты",
    title: [
      { name: "Ремешки для часов", navigate: "" },
      { name: "Зарядные устройства", navigate: "" },
      { name: "Защита экрана", navigate: "" },
      { name: "Чехлы и корпусы", navigate: "" },
      { name: "Подставки", navigate: "" },
      { name: "Кабели и адаптеры", navigate: "" },
      { name: "Внешние аккумуляторы", navigate: "" },
      { name: "Наушники", navigate: "" },
      { name: "Карта памяти и накопители", navigate: "" },
    ],
    img: Vector,
  },
  {
    id: 4,
    name: "Аксессуары",
    title: [
      { name: "Ремешки для часов", navigate: "" },
      { name: "Зарядные устройства", navigate: "" },
      { name: "Защита экрана", navigate: "" },
      { name: "Чехлы и корпусы", navigate: "" },
      { name: "Подставки", navigate: "" },
      { name: "Кабели и адаптеры", navigate: "" },
      { name: "Внешние аккумуляторы", navigate: "" },
      { name: "Наушники", navigate: "" },
      { name: "Карта памяти и накопители", navigate: "" },
    ],
    img: Headphones,
    icon: Strelca,
  },
];

const SidebarMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [expandedItem, setExpandedItem] = useState(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMouseEnter = (item) => {
    setExpandedItem(item);
  };

  const handleMouseLeave = () => {
    setExpandedItem(null);
  };

  return (
    <Container>
      <Button
        startIcon={<img src={Talog}/>}
        className="button-ican"
        variant="contained"
        onClick={toggleMenu}
      >
        Каталог
      </Button>

      {isMenuOpen && (
        <Paper elevation={3} className="paper">
          <Typography variant="h6" style={{ marginBottom: "16px" }}>
            Категории
          </Typography>
          <StyledLink>
            {Arr.map(({ img, id, name }) => (
              <StyledButton
                key={id}
                selected={expandedItem === id}
                onMouseEnter={() => handleMouseEnter(id)}
                onMouseLeave={handleMouseLeave}
              >
                <img
                  src={img}
                  alt={name}
                  style={{
                    width: 20,
                    marginRight: 14,
                  }}
                  className="img-icon hello"
                />
                <ListItemText
                  sx={{ textAlign: "start", textTransform: "capitalize" }}
                  primary={name}
                />
                <img
                  src={Strelca}
                  alt={name}
                  className="hello"
                  style={{ marginRight: 13, width: 9 }}
                />
              </StyledButton>
            ))}
          </StyledLink>
        </Paper>
      )}

      {Arr.map(({ id, name, title }) => (
        <Collapse
          key={id}
          in={expandedItem === id}
          timeout="auto"
          unmountOnExit
          onMouseEnter={() => handleMouseEnter(id)}
          onMouseLeave={handleMouseLeave}
          className="collapse"
        >
          <Paper elevation={3} className="paperty">
            <Typography variant="h6">{name}</Typography>
            <List>
              {title?.map(({ name, navigate }, index) => (
                <ListItem
                  className="textButton"
                  key={index}
                  to={navigate}
                >
                  <ListItemText className="text" primary={name} />
                </ListItem>
              ))}
            </List>
          </Paper>
        </Collapse>
      ))}
    </Container>
  );
};

export default SidebarMenu;

const Container = styled(Box)(() => ({
  position: "relative",

  "& .textButton": {
    color: "grey",
    cursor: "pointer",
    borderRadius: "5px",
    ":hover": {
      backgroundColor: "#D600A5",
      color: "white",
    },
  },
  "& .paper": {
    position: "absolute",
    marginLeft: 16,
    width: "372px",
    padding: 16,
    top: 0,
    backgroundColor: "#ffffff",
    left: 130,
  },
  "& .paperty": {
    marginLeft: 16,
    width: 293,
    padding: 16,
    backgroundColor: "#ffffff",
  },
  "& .collapse": {
    position: "absolute",
    left: "510px",
    top: 0,
  },
  "& .button-ican": {
    background: "#D600A5",
    borderRadius: "3px",
    color: "white",
    padding:"10px 25px",
    "&:hover": {
      backgroundColor: "#D600A5",
      color: "white",
    },
    "&:img": {
      top: "-6px",
    },
  },
}));

const StyledButton = styled(Button)(({ selected }) => ({
  width: "336px",
  height: "40px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "8px 16px",
  marginBottom: "8px",
  borderRadius: "8px",
  backgroundColor: selected ? "#D600A5" : "#ffffff",
  color: selected ? "#ffffff" : "#000000",
  "&:hover": {
    backgroundColor: selected ? "#D600A5" : "#F0F0F0",
    width: "336px",
    height: "40px",
  },
  "& .hello": {
    marginRight: "13px",
    width: "9px",
    filter: selected ? "brightness(1) invert(0)" : "none",
  },
  "&:hover .hello": {
    filter: "brightness(0) invert(1)",
  },
}));

const StyledLink = styled(List)({
  backgroundColor: "#ffffff",
  padding: "10px",
  borderRadius: "8px",
});
