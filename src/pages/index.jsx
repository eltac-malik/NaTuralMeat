import { Suspense } from "react";
import PrivateRouter from "./PrivateRouter";
import Footer from "src/shared/layout/Footer";
import Header from "src/shared/layout/Header";
import CustomSpinner from "src/shared/components/CustomSpinner";
import AnimatedCursor from "react-animated-cursor";

const Router = () => {
  return (
    <Suspense fallback={<CustomSpinner />}>
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
      <Footer />
    </Suspense>
  );
};

export default Router;
