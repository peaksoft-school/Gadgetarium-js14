import React from "react";
import { styled } from "@mui/system";

const Action = () => {
  return (
    <div>
      <ConteinerPapa>
        {/* <img src={EditLine} alt="test" /> */}
        {/* <img src={garbage} alt="" /> */}
      </ConteinerPapa>
    </div>
  );
};

export default Action;

const ConteinerPapa = styled("img")(() => ({
  gap: "20px",
}));
