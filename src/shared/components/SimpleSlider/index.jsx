import Slider from "react-slick";
import naTural from "src/assets/imgs/naTuralHeader.jpg";

const SimpleSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="w-full">
      <div className="w-full overflow-hidden">
        <Slider {...settings}>
          <div className="w-full">
            <img src={naTural} alt="" />
          </div>
          <div className="w-full">
            <img src={naTural} alt="" />
          </div>
          <div className="w-full">
            <img src={naTural} alt="" />
          </div>
          <div className="w-full">
            <img src={naTural} alt="" />
          </div>
          <div className="w-full">
            <img src={naTural} alt="" />
          </div>
          <div className="w-full">
            <img src={naTural} alt="" />
          </div>
          <div className="w-full">
            <img src={naTural} alt="" />
          </div>
          <div className="w-full">
            <img src={naTural} alt="" />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default SimpleSlider;
