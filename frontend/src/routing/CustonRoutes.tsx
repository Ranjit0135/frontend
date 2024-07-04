import { Route, Routes } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/home/Home";
import Skeleton from "../components/globalcomponents/Skeleton";
import Contact from "../pages/contact/Contact";
import About from "../pages/about/About";

const CustonRoutes = () => {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
          </Route>
          <Route path="/loading" element={<Skeleton />} />
        </Routes>
      </div>
    </>
  );
};

export default CustonRoutes;
