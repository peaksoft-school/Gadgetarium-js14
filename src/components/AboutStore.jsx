import styled from "@emotion/styled";
import { Box } from "@mui/system";
import { Customer, HeadPhone, Kyrgyzstan, Store } from "../assets/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useRef } from "react";
import { IconButton } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const contentData = [
  { main: "Главная »", store: "О магазине" },
  {
    id: 1,
    titleSection: "Магазин Gadgetarium ",
    list: [
      "широкий ассортимент современных гаджетов от ведущих мировых брендов;",
      "качественную продукцию с гарантией надежности;",
      "склад запчастей и собственный сервисный центр для обслуживания устройств;",
      " колл-центр с квалифицированной поддержкой для решения любых вопросов;",
      "конкурентоспособные цены и выгодные условия для постоянных клиентов.",
    ],
  },
  {
    id: 2,
    titleSection: "В чем причина нашего успеха?",
    reasons: [
      {
        title: "Мы знаем своих клиентов.",
        description:
          "Мы изучаем ваши потребности и предлагаем только те решения, которые действительно работают для вас. Каждый наш продукт — это ответ на запросы современного пользователя.",
      },
      {
        title: "Качество превыше всего.",
        description:
          "Мы сотрудничаем только с проверенными поставщиками и мировыми брендами, чтобы вы получали технику, которая служит долго и работает без сбоев.",
      },
      {
        title: "Сервис, которому можно доверять.",
        description:
          "Наша поддержка — это не просто формальность. Мы на связи, чтобы помочь вам на каждом этапе: от выбора устройства до его настройки и обслуживания.",
      },
      {
        title: "Ассортимент для каждого.",
        description:
          "В нашем каталоге есть гаджеты на любой вкус и бюджет: от доступных устройств до премиум-техники, от новинок до проверенной классики.",
      },
      {
        title: "Честные цены и выгодные предложения.",
        description:
          "Мы предлагаем лучшие условия на рынке и заботимся о том, чтобы технологии оставались доступными для всех.",
      },
      {
        title: "Профессиональная команда.",
        description:
          "За каждым успехом стоят наши специалисты: от консультантов до сервисных инженеров. Это люди, которые знают всё о современных технологиях и любят свою работу.",
      },
      {
        title: "Мы строим долгосрочные отношения.",
        description:
          "Наши клиенты остаются с нами надолго, потому что мы не просто продаем, а создаем ценность — заботу, комфорт и уверенность в выборе.",
      },
    ],
  },
  {
    id: 3,
    titleSection: "Мы сегодня — это",
    text: [
      "Современный интернет-магазин, где новейшие технологии и стильные гаджеты становятся частью вашей жизни",
      " ",
      "Широкий ассортимент товаров, от умных часов и смартфонов до аксессуаров и техники для дома, который удовлетворит даже самых требовательных покупателей",
      " ",
      "Экспертная команда, которая знает всё о гаджетах и всегда готова помочь в выборе идеального устройства.",
      "Надежный сервис, где каждая покупка сопровождается вниманием, поддержкой и гарантией качества.",
      "Партнёр, который заботится о вас, предлагая лучшие условия, честные цены и специальные предложения для постоянных клиентов.",
      "Лидер в своем сегменте, задающий тренды и вдохновляющий на использование передовых технологий.",
    ],
    text2:
      "Gadgetarium — это место, где технологии становятся ближе. Мы работаем для вас, чтобы каждая покупка приносила радость и уверенность в завтрашнем дне. Сегодня мы — это надежность, качество и инновации.",
    img: Kyrgyzstan,
  },
];

const images = [
  {
    id: "1",
    image: Customer,
  },
  { id: "2", image: HeadPhone },
  { id: "3", image: Customer },
];

const AboutStore = () => {
  const sliderRef = useRef(null);

  const handlePrevious = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const handleNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const settings = {
    className: "center",
    centerMode: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerPadding: "5px",
  };

  return (
    <Box>
      <FirstBox>
        <span>{contentData[0].main}</span>
        <span>{contentData[0].store}</span>
        <h1>О магазине</h1>
        <StyledHr />
      </FirstBox>

      <SliderWrapperBox>
        <StyledSlider ref={sliderRef} {...settings}>
          {images.map((img, index) => (
            <ImageContainer key={index} isActive={index === 0}>
              <SlideImage
                src={img.image}
                alt={`Slide ${index}`}
                isActive={index === 0}
              />
            </ImageContainer>
          ))}
        </StyledSlider>
        <ButtonContainer>
          <IconButton onClick={handlePrevious}>
            <ArrowBackIcon />
          </IconButton>
          <IconButton onClick={handleNext}>
            <ArrowForwardIcon />
          </IconButton>
        </ButtonContainer>
      </SliderWrapperBox>

      <WrapperBox>
        {contentData
          .slice(0, contentData.length - 1)
          .map(({ id, titleSection, reasons, list, text }) => (
            <Box key={id}>
              <h2>{titleSection}</h2>
              {reasons ? (
                reasons.map((reason, index) => (
                  <Box
                    key={index}
                    sx={{
                      width: "60%",
                      paddingBottom: "20px",
                      "& h3": {
                        fontFamily: "sans-serif",
                        padding: "12px 0px 4px 0px",
                      },
                    }}
                  >
                    <h3>{`${index + 1}. ${reason.title}`}</h3>
                    <p>{reason.description}</p>
                  </Box>
                ))
              ) : list ? (
                <StyledUl>
                  {list.map((listItem, i) => (
                    <li key={i}>{listItem}</li>
                  ))}
                </StyledUl>
              ) : (
                <SecondSectionBox>{text}</SecondSectionBox>
              )}
            </Box>
          ))}
        {contentData.slice(-1).map(({ id, titleSection, text, img, text2 }) => (
          <StyledBox key={id}>
            <Box>
              <h2>{titleSection}</h2>
              <SmallTextBox>{text}</SmallTextBox>
              <SmallTextBox>{text2}</SmallTextBox>
            </Box>
            <img src={img} alt="kyrgyzstanImage" />
          </StyledBox>
        ))}
      </WrapperBox>
    </Box>
  );
};
export default AboutStore;

const WrapperBox = styled(Box)(({ theme }) => ({
  width: "100%",
  backgroundColor: theme.palette.lightGrey.light,
  padding: "60px",
}));

const StyledSlider = styled(Slider)(() => ({
  "& .slick-active": {
    filter: "brightness(1) !important",
    transition: "500ms",
  },

  "& .slick-center": {
    filter: "brightness(0.3) !important",
  },

  "& .slick-slide": {
    filter: "brightness(0.3)",
  },
}));

const FirstBox = styled(Box)(({ theme }) => ({
  fontSize: "15px",
  padding: "60px",
  backgroundColor: theme.palette.lightGrey.light,
  "& span": {
    display: "inline-block",
    paddingBottom: "30px",
  },
  "& span:first-of-type": {
    color: "grey",
    paddingRight: "6px",
  },
  "& span:last-child": {
    fontWeight: "bold",
  },
}));

const StyledHr = styled.hr`
  width: 100%;
  padding: 0.6px;
  border: none;
  background-color: #d1cfcf;
  margin-top: 5px;
`;

const StyledUl = styled("ul")({
  lineHeight: "1.1",
  margin: "20px 0",
  listStyleType: "disc",
  marginLeft: "20px",
  width: "50%",
  "& li": {
    marginBottom: "10px",
  },
  marginTop: "20px",
  marginBottom: "50px",
  fontSize: "17px",
});

const SecondSectionBox = styled(Box)(() => ({
  width: "65%",
  lineHeight: "1.7",
  marginBottom: "40px",
  marginTop: "20px",
  fontSize: "17px",
}));

const SmallTextBox = styled(Box)(() => ({
  lineHeight: "1.5",
  marginTop: "20px",
  fontSize: "17px",
}));

const StyledBox = styled(Box)(() => ({
  display: "flex",
  padding: "60px 0px",
  "& img": {
    width: "750px",
    height: "auto",
  },
}));

const SliderWrapperBox = styled(Box)(() => ({
  width: "100%",
  overflow: "hidden",
}));

const ImageContainer = styled("div")(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  marginLeft: "3px",
  position: "relative",
  transition: "filter 0.3s ease",
}));

const SlideImage = styled("img")(({ isActive }) => ({
  width: "100%",
  height: "auto",
  maxWidth: "500px",
  transition: "transform 0.5s",
  boxShadow: isActive
    ? "0 0 20px rgba(0, 0, 0, 0.5)"
    : "inset 0 0 10px rgba(0, 0, 0, 0.8)",
}));

const ButtonContainer = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: "65%",
  left: 0,
  right: 0,
  display: "flex",
  justifyContent: "center",
  gap: "34rem",
  transform: "translateY(-50%)",

  "& button": {
    backgroundColor: "white",
    borderRadius: "50%",
    color: theme.palette.primary.main,
    ":hover": {
      backgroundColor: theme.palette.darkGrey.light,
    },
  },
}));
