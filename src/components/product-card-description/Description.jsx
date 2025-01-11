import React, { useState } from "react";
import { Box, styled } from "@mui/system";
import { Group22 } from "../../assets/image";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { Button } from "@mui/material";
import { useSelector } from "react-redux";

const Description = () => {
  const { products } = useSelector((state) => state.cardofProduct);
  const [error, setError] = useState(null);

  const handleClick = () => {
    if (products?.video) {
      window.open(products.video, "_blank");
      setError(null);
    } else {
      setError("Видео отсутствует!");
    }
  };
  return (
    <StyledWrapperBox>
      <Styledimg>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque,
          dicta! Quos ducimus accusantium corporis temporibus ex. Voluptates
          ullam eveniet repudiandae molestias adipisci voluptate possimus
          consectetur, doloremque ea blanditiis iusto animi veritatis explicabo
          aperiam necessitatibus, temporibus deserunt architecto est officia?
          Totam?
        </p>
        <img src={Group22} alt="photo" />
        <IconWrapper>
          <VideoButton onClick={handleClick}>
            <PlayArrowIcon sx={{ fontSize: 30, marginRight: "10px" }} />
            {error ? (
              <span>{error}</span>
            ) : (
              "Видео о товаре"
            )}
          </VideoButton>
        </IconWrapper>
      </Styledimg>
      <Box>
        <h3>Lorem ipsum dolor sit amet consectetur adipisicing?</h3>
        <StyledP>{products.description}</StyledP>
        <StyledP>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur,
          animi. Illum dicta veniam sed ut distinctio sint sit, id voluptatem
          cum. Quidem nam quis provident ratione, quod ducimus fuga aperiam
          possimus sint culpa animi rem nulla deserunt fugiat consectetur
          blanditiis excepturi mollitia, quam inventore quia voluptates
          molestias quaerat. Ducimus, dicta, a veritatis amet tempora maiores
          architecto perspiciatis explicabo natus pariatur, assumenda cum? Fugit
          id corporis magnam vero sequi fugiat ipsam.
        </StyledP>
        <StyledP>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur,
          animi. Illum dicta veniam sed ut distinctio sint sit, id voluptatem
          cum. Quidem nam quis provident ratione, quod ducimus fuga aperiam
          possimus sint culpa animi rem nulla deserunt fugiat consectetur
        </StyledP>
        <StyledP>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur,
          animi. Illum dicta veniam sed ut distinctio sint sit, id voluptatem
          cum. Quidem nam quis provident ratione, quod ducimus fuga aperiam
          possimus sint culpa animi rem nulla deserunt fugiat consectetur um.
          Quidem nam quis provident ratione, quod ducimus fuga aperiam possimus
          sint culpa animi rem nulla deserunt fugiat consectetur
        </StyledP>
      </Box>
    </StyledWrapperBox>
  );
};

export default Description;

const StyledWrapperBox = styled(Box)(() => ({
  overflow: "hidden !important",
}));

const Styledimg = styled(Box)(() => ({
  position: "relative",
  overflow: "hidden !important",
  "& img:first-of-type": {
    width: "100%",
  },
  "& p": {
    fontSize: "16px",
    position: "absolute",
    color: "#fff",
    width: "400px",
    top: "10%",
    left: "50px",
  },
  paddingBottom: "40px",
}));

const IconWrapper = styled(Box)(() => ({
  position: "absolute",
  top: "50%",
  left: "50px",
  transform: "translateY(-50%)",
  display: "flex",
  alignItems: "center",
  "& img": {
    width: "46px",
    height: "46px",
  },
  "& span": {
    fontSize: "16px",
    whiteSpace: "nowrap",
  },
}));

const StyledP = styled("p")(() => ({
  paddingTop: "20px",
  width: "85%",
  lineHeight: "25px",
  color: "#384255",
}));

const VideoButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#ff4c61",
  color: "#fff",
  borderRadius: "50px",
  padding: "10px 20px",
  display: "flex",
  alignItems: "center",
  textTransform: "none",
  fontSize: "16px",
  fontWeight: "bold",
  "&:hover": {
    backgroundColor: "#e14355",
  },
}));
