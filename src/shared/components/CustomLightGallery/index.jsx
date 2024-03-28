import LightGallery from "lightgallery/react/Lightgallery.es5";
import gallery1 from "./imgs/q1.jpg";
import gallery2 from "./imgs/q2.jpg";
import gallery3 from "./imgs/4.jpg";
import gallery4 from "./imgs/3.jpg";
import gallery5 from "./imgs/4.jpg";
import gallery6 from "./imgs/5.jpg";
import gallery8 from "./imgs/6.jpg";
import galleryq3 from "./imgs/q3.jpg";
import galleryq5 from "./imgs/q5.jpg";
import galleryq6 from "./imgs/q6.jpg";
import galleryq7 from "./imgs/q7.jpg";
import galleryq8 from "./imgs/q8.jpg";
import galleryq9 from "./imgs/q9.jpg";
import galleryq10 from "./imgs/q10.jpg";
import galleryq11 from "./imgs/q11.jpg";
import galleryq12 from "./imgs/q12.jpg";
import galleryq13 from "./imgs/q13.jpg";
import galleryq14 from "./imgs/q14.jpg";

import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
// If you want you can use SCSS instead of css
function CustomLightGallery() {
  const onInit = () => {
    console.log("lightGallery has been initialized");
  };

  return (
    <div className="App">
      <LightGallery onInit={onInit} speed={500} plugins={[lgThumbnail, lgZoom]}>
        <a
          className="col-span-3 overflow-hidden h-[358px] w-full max-[900px]:col-span-1"
          href={gallery1}
        >
          <img
            className="w-full h-full hover:scale-110 duration-300 object-cover"
            src={gallery1}
          />
        </a>
        <a
          className="col-span-3 h-[358px] w-full overflow-hidden max-[900px]:col-span-1"
          href={gallery2}
        >
          <img
            className="w-full h-full  hover:scale-110 duration-300  object-cover"
            src={gallery2}
          />
        </a>
        <a
          className="col-span-2 h-[220px] w-full  overflow-hidden max-[900px]:col-span-1"
          href={gallery3}
        >
          <img
            className="w-full h-full hover:scale-110 duration-300 object-cover"
            src={gallery3}
          />
        </a>
        <a
          className="col-span-2 h-[220px] w-full  overflow-hidden max-[900px]:col-span-1 object-cover"
          href={gallery4}
        >
          <img
            className="w-full h-full hover:scale-110 duration-300 object-cover"
            src={gallery4}
          />
        </a>
        <a
          className="col-span-2 h-[220px] w-full  overflow-hidden max-[900px]:col-span-1"
          href={gallery5}
        >
          <img
            className="w-full h-full hover:scale-110 duration-300 object-cover"
            src={gallery5}
          />
        </a>
        <a
          className="col-span-3 h-[358px] w-full overflow-hidden max-[900px]:col-span-1"
          href={gallery6}
        >
          <img
            className="w-full h-full hover:scale-110 duration-300 object-cover "
            src={gallery6}
          />
        </a>
        <a
          className="col-span-3 h-[358px] w-full overflow-hidden max-[900px]:col-span-1"
          href={gallery8}
        >
          <img
            className="w-full h-full  hover:scale-110 duration-300 object-cover"
            src={gallery8}
          />
        </a>

        <a
          className="col-span-3 overflow-hidden h-[358px] w-full max-[900px]:col-span-1"
          href={galleryq3}
        >
          <img
            className="w-full h-full hover:scale-110 duration-300 object-cover"
            src={galleryq3}
          />
        </a>
        <a
          className="col-span-3 h-[358px] w-full overflow-hidden max-[900px]:col-span-1"
          href={galleryq5}
        >
          <img
            className="w-full h-full  hover:scale-110 duration-300  object-cover"
            src={galleryq5}
          />
        </a>
        <a
          className="col-span-2 h-[220px] w-full  overflow-hidden max-[900px]:col-span-1"
          href={galleryq6}
        >
          <img
            className="w-full h-full hover:scale-110 duration-300 object-cover"
            src={galleryq6}
          />
        </a>
        <a
          className="col-span-2 h-[220px] w-full  overflow-hidden max-[900px]:col-span-1 object-cover"
          href={galleryq7}
        >
          <img
            className="w-full h-full hover:scale-110 duration-300 object-cover"
            src={galleryq7}
          />
        </a>
        <a
          className="col-span-2 h-[220px] w-full  overflow-hidden max-[900px]:col-span-1"
          href={galleryq8}
        >
          <img
            className="w-full h-full hover:scale-110 duration-300 object-cover"
            src={galleryq8}
          />
        </a>
        <a
          className="col-span-3 h-[358px] w-full overflow-hidden max-[900px]:col-span-1"
          href={galleryq9}
        >
          <img
            className="w-full h-full hover:scale-110 duration-300 object-cover "
            src={galleryq9}
          />
        </a>
        <a
          className="col-span-3 h-[358px] w-full overflow-hidden max-[900px]:col-span-1"
          href={galleryq10}
        >
          <img
            className="w-full h-full  hover:scale-110 duration-300 object-cover"
            src={galleryq10}
          />
        </a>
        <a
          className="col-span-3 overflow-hidden h-[358px] w-full max-[900px]:col-span-1"
          href={galleryq11}
        >
          <img
            className="w-full h-full hover:scale-110 duration-300 object-cover"
            src={galleryq11}
          />
        </a>
        <a
          className="col-span-3 h-[358px] w-full overflow-hidden max-[900px]:col-span-1"
          href={galleryq12}
        >
          <img
            className="w-full h-full  hover:scale-110 duration-300  object-cover"
            src={galleryq12}
          />
        </a>
        <a
          className="col-span-2 h-[220px] w-full  overflow-hidden max-[900px]:col-span-1"
          href={galleryq13}
        >
          <img
            className="w-full h-full hover:scale-110 duration-300 object-cover"
            src={galleryq13}
          />
        </a>
        <a
          className="col-span-2 h-[220px] w-full  overflow-hidden max-[900px]:col-span-1 object-cover"
          href={galleryq14}
        >
          <img
            className="w-full h-full hover:scale-110 duration-300 object-cover"
            src={galleryq14}
          />
        </a>
      </LightGallery>
    </div>
  );
}
export default CustomLightGallery;
