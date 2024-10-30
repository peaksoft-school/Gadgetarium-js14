import { Box } from "@mui/material";
import React, { useState } from "react";
import SignUp from "./SignUp";
import SignIn from "./SignIn";

const Registration = ({signInModal,signUpModal}) => {
  const [isSignInOpen, setIsSignInOpen] = useState(signInModal);
  const [isSignUpOpen, setIsSignUpOpen] = useState(signUpModal);

  const handleOpenSignIn = () => {
    setIsSignInOpen(true);
    setIsSignUpOpen(false);
  };

  const handleOpenSignUp = () => {
    setIsSignUpOpen(true);
    setIsSignInOpen(false);
  };

  const handleClose = () => {
    setIsSignInOpen(false);
    setIsSignUpOpen(false);
  };
  return (
    <Box>
      <SignIn
        open={isSignInOpen}
        openSignUp={handleOpenSignUp}
        onClose={handleClose}
      />
      <SignUp
        open={isSignUpOpen}
        openSignIn={handleOpenSignIn}
        onClose={handleClose}
      />
    </Box>
  );
};

export default Registration;
