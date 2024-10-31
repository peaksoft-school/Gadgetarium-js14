import { Box } from "@mui/system";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import React from "react";
import { Outlet } from "react-router-dom";

const UserLayout = () => {
  return (
    <>
      <Header />
      <Outlet />

      <Footer />
    </>
  );
};
export default UserLayout;
