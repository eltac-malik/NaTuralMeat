import Slider from "react-slick";
import { HOME_SLIDER } from "./data";

const CountrySlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="w-full CountrySlider  !brightness-100">
      <div className="w-full overflow-hidden text-white ">
        <Slider {...settings}>
          {HOME_SLIDER?.map((item) => (
            <div key={item?.id} className="flex flex-col">
              <h1 className="font-PirateOne text-[36px] text-[#991B1F]">
                {item?.title}
              </h1>
              <h2 className="uppercase font-Mukta text-[15px] py-3">
                {item?.country}
              </h2>
              <p>{item?.description}</p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default CountrySlider;
