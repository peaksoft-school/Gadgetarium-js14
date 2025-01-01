import { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import { CtrelcaAican2 } from "../../assets/icon";
import { useSelector } from "react-redux";

const Characteristics = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const { products } = useSelector((state) => state.cardofProduct);

  const data = [
    {
      characteristics: "Память и процессор",
      description: [
        {
          label: "Память",
          value: products?.characteristics?.память || "неизвестно",
        },
        { label: "RAM", value: products?.characteristics?.RAM || "неизвестно" },
        {
          label: "Емкость аккумулятора",
          value:
            products?.characteristics?.["емкость аккумулятора(mA/h)"] ||
            "неизвестно",
        },
        {
          label: "Диагональ экрана",
          value:
            products?.characteristics?.["диогональ экрана"] || "неизвестно",
        },
        {
          label: "Разрешение экрана",
          value:
            products?.characteristics?.["разрешение экрана"] || "неизвестно",
        },
      ],
    },
    {
      characteristics: "Основные характеристики",
      description: [
        { label: "Тип дорожки", value: "Домашняя" },
        { label: "Мощность двигателя", value: "3,5 л.с. постоянная" },
        { label: "Тип двигателя", value: "DC" },
        { label: "Регулировка скорости", value: "1-19.3 км/ч" },
        { label: "Беговое полотно", value: "3-х слойное, усиленное 2,5 мм" },
      ],
    },

    {
      characteristics: "Дополнительные характеристики",
      description: [
        {
          label: "Способ оплаты",
          value: "Кредитная карта, электронные кошельки",
        },
        { label: "Гарантия", value: "2 года" },
      ],
    },
  ];

  const handleAccordionChange = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div style={{ padding: "20px", display: "flex", flexDirection: "column" }}>
      {data.map((data, index) => (
        <StyledAccordion
          key={index}
          expanded={expandedIndex === index}
          onChange={() => handleAccordionChange(index)}
        >
          <StyledAccordionSummary
            expandIcon={<img src={CtrelcaAican2} alt="icon" />}
            aria-controls={`panel${index + 1}-content`}
            id={`panel${index + 1}-header`}
          >
            <StyledText>{data.characteristics}</StyledText>
          </StyledAccordionSummary>
          <AccordionDetails>
            <StyledTable>
              <tbody>
                {data.description.map((item, i) => (
                  <tr key={i}>
                    <td className="label">{item.label}</td>
                    <td className="value">{item.value}</td>
                  </tr>
                ))}
              </tbody>
            </StyledTable>
          </AccordionDetails>
        </StyledAccordion>
      ))}
    </div>
  );
};

export default Characteristics;

// Стили
const StyledAccordion = styled(Accordion)(({ theme }) => ({
  width: "60%",
  marginBottom: theme.spacing(0),
  border: "1px solid #ccc",
  boxShadow: "none",
  "&.Mui-expanded": {
    margin: "0",
  },
  "&.MuiPaper-root::before": {
    content: "none",
  },
}));

const StyledAccordionSummary = styled(AccordionSummary)(() => ({
  "&.MuiAccordionSummary-root": {},
}));

const StyledText = styled(Typography)(() => ({
  fontSize: "18px",
  fontWeight: "600",
}));

const StyledTable = styled("table")(() => ({
  width: "100%",
  borderCollapse: "collapse",
  "& .label": {
    padding: "8px",
    fontWeight: "600",
    borderBottom: "1px solid #afaeae",
  },
  "& .value": {
    padding: "8px",
    borderBottom: "1px solid #afaeae",
  },
}));
