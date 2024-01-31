import LightGallery from "lightgallery/react/Lightgallery.es5";
import gallery1 from "src/assets/imgs/gallery1.jpg";
import gallery2 from "src/assets/imgs/gallery2.jpg";
import gallery3 from "src/assets/imgs/gallery3.jpg";
import gallery4 from "src/assets/imgs/gallery4.jpg";
import gallery5 from "src/assets/imgs/gallery5.jpg";
import gallery6 from "src/assets/imgs/gallery6.jpg";
import gallery8 from "src/assets/imgs/gallery8.jpg";
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
            className="w-full h-full hover:scale-110 duration-300 "
            src={gallery1}
          />
        </a>
        <a
          className="col-span-3 h-[358px] w-full overflow-hidden max-[900px]:col-span-1"
          href={gallery2}
        >
          <img
            className="w-full h-full  hover:scale-110 duration-300 "
            src={gallery2}
          />
        </a>
        <a
          className="col-span-2 h-[220px] w-full  overflow-hidden max-[900px]:col-span-1"
          href={gallery3}
        >
          <img
            className="w-full h-full hover:scale-110 duration-300"
            src={gallery3}
          />
        </a>
        <a
          className="col-span-2 h-[220px] w-full  overflow-hidden max-[900px]:col-span-1"
          href={gallery4}
        >
          <img
            className="w-full h-full hover:scale-110 duration-300"
            src={gallery4}
          />
        </a>
        <a
          className="col-span-2 h-[220px] w-full  overflow-hidden max-[900px]:col-span-1"
          href={gallery5}
        >
          <img
            className="w-full h-full hover:scale-110 duration-300"
            src={gallery5}
          />
        </a>
        <a
          className="col-span-3 h-[358px] w-full overflow-hidden max-[900px]:col-span-1"
          href={gallery6}
        >
          <img
            className="w-full h-full hover:scale-110 duration-300 "
            src={gallery6}
          />
        </a>
        <a
          className="col-span-3 h-[358px] w-full overflow-hidden max-[900px]:col-span-1"
          href={gallery8}
        >
          <img
            className="w-full h-full  hover:scale-110 duration-300"
            src={gallery8}
          />
        </a>
      </LightGallery>
    </div>
  );
}
export default CustomLightGallery;
