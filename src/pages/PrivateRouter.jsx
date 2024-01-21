import { lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { URLs } from "src/shared/constants/url/data";

const Home = lazy(() => import("./Home"));

const PrivateRouter = () => {
  return (
    <Routes>
      <Route path={URLs.HOME_URL} element={<Home />} />
      <Route path="*" element={<Navigate replace to={URLs.HOME_URL} />} />
    </Routes>
  );
};

export default PrivateRouter;
