import styled from "@emotion/styled";
import { Box } from "@mui/system";
import { Customer, HeadPhone, Kyrgyzstan } from "../assets/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useRef, useState } from "react";
import { IconButton } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import theme from "../assets/theme/theme";

const contentData = [
  { main: "Главная »", store: "О магазине" },
  {
    id: 1,
    titleSection: "Магазин Gadgetarium",
    list: [
      "сплоченная команда людей, любящих спорт и здоровый образ жизни знающих свое дело и ориентирующихся во всех нюансах фитнес оборудования",
      "широкая номенклатура качественной продукции ведущих мировых брендов с огромным выбором товаров в наличии;",
      " склад запчастей для обеспечения качественного сервиса и бесперебойной работы оборудования",
      "собственный колл-центр с информационной и технической поддержкой",
      " строгое соблюдение всех обязательств перед партнерами",
      " отличные цены и эксклюзивные условия для постоянных партнеров.",
    ],
  },
  {
    id: 2,
    titleSection: "В чем причина нашего успеха?",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi assumenda cumque in beatae iure, dignissimos repudiandae eos amet perspiciatis praesentium sunt maiores aperiam excepturi reprehenderit pariatur quas sed nam! Id quaerat totam omnis nostrum excepturi, quo consequuntur saepe quasi, atque officia et dignissimos molestias ex quae. Illum quidem, recusandae maiores nam doloribus exercitationem, fugit in laboriosam fuga inventore velit obcaecati dolore aperiam sint, corrupti et voluptatem tempore odio iure provident laborum libero quis fugiat. Modi perferendis beatae sint. Nobis totam odit fugiat voluptatum eum dolores reprehenderit voluptatem ratione adipisci minus, ex labore ad sit quisquam et cumque saepe consequuntur ipsa nostrum! Quam, enim aspernatur omnis iste non voluptatum et ratione libero natus illum dolorum magnam, numquam ad quos debitis asperiores",
  },
  {
    id: 3,
    titleSection: "Мы сегодня — это",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet amet est orci volutpat placerat maecenas egestas augue ac. Tortor, sed magnis interdum massa. Id phasellus lectus duis nisl. Adipiscing etiam vitae in semper sed eget nec aliquet aliquam.Non ultricies sollicitudin nisl quisque. Morbi integer quis tincidunt vitae penatibus. Feugiat quis tincidunt volutpat scelerisque elit fermentum nullam rhoncus adipiscing. Sem tortor molestie odio. Adipiscing etiam vitae in semper sed eget nec aliquet aliquam.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    text2:
      " Amet amet est orci volutpat placerat maecenas egestas augue ac. Tortor, sed magnis interdum massa. Id phasellus lectus duis nisl. Adipiscing etiam vitae in semper sed eget nec aliquet aliquam.Non ultricies sollicitudin nisl quisque. Morbi integer quis tincidunt vitae penatibus. Feugiat quis tincidunt volutpat scelerisque elit fermentum nullam rhoncus adipiscing. Sem tortor molestie odio. Adipiscing etiam vitae in semper sed eget nec aliquet aliquam",
    img: Kyrgyzstan,
  },
];

const images = [
  { id: "1", image: HeadPhone },
  { id: "2", image: HeadPhone },
  { id: "3", image: Customer },
];

const AboutStore = () => {
  const [activeSlide, setActiveSlide] = useState(0);
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

    // afterChange: (current) => setActiveSlide(current),
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
            <ImageContainer key={index} isActive={index === activeSlide}>
              <SlideImage
                src={img.image}
                alt={`Slide ${index}`}
                isActive={index === activeSlide}
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
          .map(({ id, titleSection, text, list }) => (
            <Box key={id}>
              <h2>{titleSection}</h2>
              {list ? (
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

const WrapperBox = styled(Box)(({}) => ({
  width: "100%",
  backgroundColor: theme.palette.lightGrey.light,
  padding: "60px 120px",
}));

const StyledSlider = styled(Slider)(() => ({
  "& .slick-active": {
    // boxShadow: "0 0 20px rgba(0, 0, 0, 0.5)",
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
  padding: "60px 120px",
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
}));

const SliderWrapperBox = styled(Box)(() => ({
  width: "100%",
  overflow: "hidden",
}));

const ImageContainer = styled("div")(({ isActive }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  marginLeft: "3px",
  position: "relative",
  // filter: !isActive ? "brightness(0.3)" : "brightness(1)",
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
  top: "50%",
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
