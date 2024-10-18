import { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import { CtrelcaAican2 } from "../assets/icon";

const StyledAccordion = styled(Accordion)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  borderRadius: theme.shape.borderRadius,
  boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
  border: "none",
  "&.MuiPaper-root::before": {
    content: "none", 
  },
}));

const StyledAccordionSummary = styled(AccordionSummary)(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  "&::before": {
    content: "none", 
  },
  "&::after": {
    content: "none", 
  },
}));

const QuestionNumber = styled("div")(({ expanded }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: expanded ? "#9C27B0" : "#fae7f7",
  color: expanded ? "#fff" : "#9C27B0",
  fontSize: "20px",
  fontWeight: "700",
  width: 32,
  height: 32,
  borderRadius: "50%",
  marginRight: 16,
  transition: "background-color 0.3s ease, color 0.3s ease",
}));

const StyledText = styled(Typography)(() => ({
  fontSize: "18px",
  fontWeight: "600",
  display: "flex",
  alignItems: "center",
}));

const StyledLorem = styled(Typography)(() => ({
  fontSize: "16px",
  fontWeight: "400",
}));

// Массив часто задаваемых вопросов
const faqs = [
  {
    question: "Как сделать заказ?",
    answer: "Чтобы сделать заказ, выберите нужный товар, добавьте его в корзину и перейдите к оформлению. Заполните все необходимые поля, выберите способ доставки и оплаты, затем подтвердите заказ. После этого вы получите электронное письмо с подтверждением, в котором будет указана информация о вашем заказе, включая его номер, список товаров и предполагаемую дату доставки. Если у вас есть вопросы о вашем заказе, вы всегда можете обратиться в нашу службу поддержки."
  },
  {
    question: "Как я могу отменить или изменить свой заказ?",
    answer: "Вы можете отменить или изменить свой заказ, связавшись с нашей службой поддержки в течение 24 часов после оформления. После этого времени изменения могут быть невозможны. В случае отмены заказа, деньги будут возвращены на ваш счет в течение 3-5 рабочих дней. Если вы хотите изменить свой заказ, уточните, какие изменения вы хотите внести, и мы постараемся помочь вам в этом процессе."
  },
  {
    question: "Какие способы оплаты вы принимаете?",
    answer: "Мы принимаем различные способы оплаты, включая кредитные карты, электронные кошельки и банковские переводы. Все транзакции защищены и шифруются для обеспечения безопасности ваших данных. Вы также можете выбрать оплату при доставке, если эта опция доступна в вашем регионе. Не забудьте проверить, какие способы оплаты доступны на этапе оформления заказа."
  },
  {
    question: "Как долго будет доставляться мой заказ?",
    answer: "Сроки доставки зависят от вашего местоположения и выбранного способа доставки. Обычно доставка занимает от 3 до 10 рабочих дней. Мы также предоставляем возможность отслеживания вашего заказа, чтобы вы могли видеть его статус в режиме реального времени. Если ваша доставка задерживается, мы обязательно уведомим вас об этом и предложим решение."
  },
  {
    question: "Как я могу вернуть или обменять товар?",
    answer: "Вы можете вернуть или обменять товар в течение 30 дней с момента покупки. Для этого вам необходимо заполнить форму возврата и отправить ее вместе с товаром обратно. Пожалуйста, убедитесь, что товар находится в оригинальной упаковке и не использовался. После обработки вашего возврата деньги будут возвращены на ваш счет в течение 7-10 рабочих дней. Если вы хотите обменять товар на другой, свяжитесь с нашей службой поддержки для получения дополнительных инструкций."
  },
];

const Question = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleAccordionChange = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div
      style={{
        padding: "20px",
        maxWidth: "1000px",
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Typography variant="h4" align="center" gutterBottom>
        Часто задаваемые вопросы
      </Typography>
      {faqs.map((faq, index) => (
        <StyledAccordion
          key={index}
          expanded={expandedIndex === index}
          onChange={() => handleAccordionChange(index)}
        >
          <StyledAccordionSummary
            expandIcon={<img src={CtrelcaAican2} alt="icon" />}
            aria-controls={`panel${index + 1}-content`}
            id={`panel${index + 1}-header`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <QuestionNumber expanded={expandedIndex === index}>
              {index + 1}
            </QuestionNumber>
            <StyledText>{faq.question}</StyledText>
          </StyledAccordionSummary>
          <AccordionDetails>
            <StyledLorem>
              {faq.answer}
            </StyledLorem>
          </AccordionDetails>
        </StyledAccordion>
      ))}
    </div>
  );
};

export default Question;
