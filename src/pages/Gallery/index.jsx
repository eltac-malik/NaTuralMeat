import CustomLightGallery from "src/shared/components/CustomLightGallery";

const Gallery = () => {
  return (
    <>
      <div className=" top-0 z-[-1] bg-[#1b1b1b] w-full    ">
        <div className=" relative ">
          <div className="z-[-1] bg-[url('src/assets/imgs/about.jpg')]  bg-cover bg-center w-full bg-fixed h-96 brightness-50"></div>
          <div className="absolute right-36 top-[50%] max-[970px]:right-3">
            <h1 className=" font-PirateOne text-[#991b1f] text-[50px] animate-bounce hover:animate-none text-end">
              NATURAL GALLERY
            </h1>
            <p className=" font-PirateOne text-[#ffffff] text-[25px] tracking-[3px] animate-slideInRight text-end">
              CHEF`S SUGGESTION
            </p>
          </div>
          {/* <SimpleSlider /> */}
          {/* <img src={naTural} alt="NaTural " /> */}
        </div>
        <div className="mt-6">
          <CustomLightGallery />
        </div>
      </div>
    </>
  );
};

export default Gallery;
