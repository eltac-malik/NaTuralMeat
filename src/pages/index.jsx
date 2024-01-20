import { lazy } from "react";
import PrivateRouter from "./PrivateRouter";

const Header = lazy(() => import("shared/layout/Header"));

const Router = () => {
  return (
    <>
      <Header />
      <PrivateRouter />
    </>
  );
};

export default Router;
