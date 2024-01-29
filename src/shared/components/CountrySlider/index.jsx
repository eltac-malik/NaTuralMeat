import Slider from "react-slick";
import { HOME_SLIDER } from "./data";

const CountrySlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full CountrySlider  !brightness-100">
      <div className="w-full overflow-hidden text-white  ">
        <Slider {...settings}>
          {HOME_SLIDER?.map((item) => (
            <div key={item?.id} className="flex flex-col jus ">
              <h1 className="font-PirateOne text-[36px] text-[#991B1F] max-[500px]:w-[58%] max-[500px]:text-center">
                {item?.title}
              </h1>
              <h2 className="uppercase font-Mukta text-[15px] max-[500px]:w-[58%] py-3 max-[500px]:text-center">
                {item?.country}
              </h2>
              <p className="font-Mukta max-[500px]:w-[58%]  max-[500px]:text-center ">
                {item?.description}
              </p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default CountrySlider;
