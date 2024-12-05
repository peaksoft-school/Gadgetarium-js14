import React from "react";
import { Box, CircularProgress, styled } from "@mui/material";

const Loading = () => {
  return (
    <LoadingContainer>
      <CircularProgress />
    </LoadingContainer>
  );
};

export default Loading;

const LoadingContainer = styled(Box)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9999;
`;
