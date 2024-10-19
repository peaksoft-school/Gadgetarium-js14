import styled from "@emotion/styled";
import { Box } from "@mui/system";
import theme from "../assets/theme/theme";
import { Kyrgyzstan, Store } from "../assets/image";

const contentData = [
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
  },
];


const images = [{ image: Store }, { image: Kyrgyzstan }, { image: Store }];
function SampleNextArrow({ onClick }) {
  return (
    <NextButton onClick={onClick}>
      <ArrowSlide />
    </NextButton>
  );
}

function SamplePrevArrow({ onClick }) {
  return (
    <PrevButton onClick={onClick}>
      <ArrowSlide />
    </PrevButton>
  );
}

const AboutStore = () => {
  const settings = {
    centerMode: true,
    infinite: true,
    slidesToShow: 2.33,
    slidesToScroll: 1,
    speed: 500,
    draggable: false,
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />,
  };
  return (
    <WrapperBox>
      <h1>О магазине</h1>
      <Container>
        <SliderWrapper>
          <SliderStyle {...settings} className="slick-list">
            {slidePhotos.map((item) => (
              <Slide key={item.id} className="slick-list">
                <div className="box-img">
                  <img src={item.url} alt="select photos" />
                </div>
              </Slide>
            ))}
          </SliderStyle>
        </SliderWrapper>
      </Container>

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
  );
};
export default AboutStore;

const WrapperBox = styled(Box)(() => ({
  width: "100%",
  backgroundColor: "#f4f4f4",
  padding: "20px 0px 20px 40px",
}));

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
  //   width: "40%",
  lineHeight: "1.5",
  marginTop: "20px",
  fontSize: "17px",
}));

const StyledBox = styled(Box)(() => ({
  display: "flex",
}));

const SliderStyle = styled(Slider)`
  .slick-center {
    filter: brightness(3.1);
  }

  .slick-slide {
    padding: 0 15px;
  }
`;

const NextButton = styled("div")`
  position: absolute;
  top: 50%;
  right: 20rem;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  cursor: pointer;

  z-index: 0;
`;

const PrevButton = styled("div")`
  position: absolute;
  top: 50%;
  left: 20rem;
  transform: translateY(-50%) rotate(180deg);
  display: flex;
  align-items: center;

  z-index: 5;
  cursor: pointer;
`;
