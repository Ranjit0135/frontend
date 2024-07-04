import { Outlet } from "react-router-dom";
import Header from "../components/globalcomponents/Header";
import Footer from "../components/globalcomponents/Footer";

const MainLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
