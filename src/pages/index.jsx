import { lazy } from "react";
import PrivateRouter from "./PrivateRouter";
import AnimatedCursor from "react-animated-cursor";

const Header = lazy(() => import("shared/layout/Header"));

const Router = () => {
  return (
    <>
      <AnimatedCursor
        color="220, 90, 90"
        innerStyle={{
          backgroundColor: "red",
          border: "3px solid #ffffff",
          padding: "5px",
        }}
        outerStyle={{
          border: "3px solid red",
        }}
      />
      <Header />
      <PrivateRouter />
    </>
  );
};

export default Router;
