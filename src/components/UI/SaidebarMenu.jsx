import {
  Paper,
  List,
  ListItem,
  ListItemText,
  Collapse,
  Typography,
  Button,
  Box,
} from "@mui/material";
import { useState } from "react";
import {
    Headphones,
  Monitor,
  Strelca,
  Telefon,
  Vector,
} from "../../assets/icon";
import styled from "@emotion/styled";

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
      <Button variant="contained" onClick={toggleMenu}>
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
                  button
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
  display: "flex",
  alignItems: "flex-start",
  position: "relative",
  width: "850px",

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
    left: 100,
  },
  "& .paperty": {
    marginLeft: 16,
    width: 293,
    padding: 16,
    backgroundColor: "#ffffff",
  },
  "& .collapse": {
    position: "absolute",
    right: "0",
    top: 0,
  },
}));

// Стили
const StyledButton = styled(Button)(({ selected }) => ({
  width: "336px",
  height: "40px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "8px 16px",
  marginBottom: "8px",
  borderRadius: "8px",
  backgroundColor: selected ? "#D600A5" : "#ffffff", // Цвет кнопки
  color: selected ? "#ffffff" : "#000000", // Цвет текста
  "&:hover": {
    backgroundColor: selected ? "#D600A5" : "#F0F0F0", // Цвет при ховере
    width: "336px", // Изменение ширины при ховере
    height: "40px", // Изменение высоты при ховере
  },
  "& .hello": {
    marginRight: "13px",
    width: "9px",
    filter: selected
      ? "brightness(1) invert(0)" // Изменение цвета иконки при выборе
      : "none", // Обычный цвет
  },
  "&:hover .hello": {
    filter: "brightness(0) invert(1)", // Цвет иконки при ховере
  },
}));

// Стили для общего списка
const StyledLink = styled(List)({
  backgroundColor: "#ffffff",
  padding: "10px",
  borderRadius: "8px",
});
