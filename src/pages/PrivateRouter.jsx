import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { URLs } from "src/shared/constants/url/data";

const Home = lazy(() => import("./Home"));

const PrivateRouter = () => {
  return (
    <Routes>
      <Route path={URLs.HOME_URL} element={<Home />} />
    </Routes>
  );
};

export default PrivateRouter;
