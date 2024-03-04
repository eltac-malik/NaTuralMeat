import { lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { URLs } from "src/shared/constants/url/data";
import Customers from "./Customers";

const Home = lazy(() => import("./Home"));
const About = lazy(() => import("./About"));
const Menu = lazy(() => import("./Menu"));
const Gallery = lazy(() => import("./Gallery"));
const Contact = lazy(() => import("./Contact"));
const Partners = lazy(() => import("./Partners"));

const PrivateRouter = () => {
  return (
    <Routes>
      <Route path={URLs.HOME_URL} element={<Home />} />
      <Route path={URLs.ABOUT_URL} element={<About />} />
      <Route path={URLs.MENU_URL} element={<Menu />} />
      <Route path={URLs.GALLERY_URL} element={<Gallery />} />
      <Route path={URLs.CONTACT_URL} element={<Contact />} />
      <Route path={URLs.PARTNERS_URL} element={<Partners />} />
      <Route path={URLs.CUSTOMERS_URL} element={<Customers />} />
      <Route path="*" element={<Navigate replace to={URLs.HOME_URL} />} />
    </Routes>
  );
};

export default PrivateRouter;
