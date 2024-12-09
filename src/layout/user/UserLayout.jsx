import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { Outlet } from "react-router-dom";

const UserLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      kdsjahfjkahsdkjfhask
      <Footer />
    </>
  );
};
export default UserLayout;
