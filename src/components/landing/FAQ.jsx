import styled from "@emotion/styled";

import Question from "../Question";

const FAQ = () => {
  return (
    <StyledDiv>
      <div>
        <h1>FAG</h1>
        <hr />
      </div>
      <StyledDivTex>
        <Question />
      </StyledDivTex>
    </StyledDiv>
  );
};

export default FAQ;

const StyledDiv = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  margin: "0 auto",
  padding: "50px",
  h1: {
    fontSize: "30px",
    fontWeight: "500",
    positions: "relative",
    padding: "0px 20px",
  },
  hr: {
    width: "1400px",
    backgroundColor: "#939393",
    height: "2px",
    margin: "10px auto",
  },
}));

const StyledDivTex = styled("div")(() => ({
  padding: "70px",
}));
