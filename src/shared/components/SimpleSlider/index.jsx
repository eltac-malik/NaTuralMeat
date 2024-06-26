import Slider from "react-slick";
import naTural from "src/assets/imgs/naTuralHeader.jpg";

const SimpleSlider = () => {
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
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: false,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          infinite: false,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          dots: false,
        },
      },
    ],
  };

  return (
    <div className="w-full simpleSlider">
      <div className="w-full overflow-hidden">
        <Slider className="h-full" {...settings}>
          <div className="w-full h-full">
            <div className="w-full relative h-full">
              <img
                src={naTural}
                className="filter brightness-50 w-full h-full"
                alt="naTural"
              />
              <div className="absolute   left-32 translate-y-1/2 top-[15%] max-[970px]:left-5">
                <h2 className="font-Mukta text-white uppercase text-[18px]">
                  Welcome to NaTural
                </h2>
                <h1 className="text-[90px] font-PirateOne text-white max-[970px]:text-[40px] py-3 ">
                  STEAKHOUSE + BAR
                </h1>
                <button
                  target="_blanc"
                  className="customButton butn-dark uppercase"
                >
                  {" "}
                  <span>Buy now</span>
                </button>
              </div>
            </div>
          </div>
          <div className="w-full h-full">
            <div className="w-full relative h-full">
              <img
                src={naTural}
                className="filter brightness-50 w-full h-full"
                alt="naTural"
              />
              <div className="absolute   left-32 translate-y-1/2 top-[15%] max-[970px]:left-5">
                <h2 className="font-Mukta text-white uppercase text-[18px]">
                  Welcome to NaTural
                </h2>
                <h1 className="text-[90px] font-PirateOne text-white max-[970px]:text-[45px] ">
                  STEAKHOUSE + BAR
                </h1>
                <button
                  target="_blanc"
                  className="customButton butn-dark uppercase"
                >
                  {" "}
                  <span>Download menu in PDF &nbsp;&nbsp;</span>
                </button>
              </div>
            </div>
          </div>
          <div className="w-full h-full">
            <div className="w-full relative h-full">
              <img
                src={naTural}
                className="filter brightness-50 w-full h-full"
                alt="naTural"
              />
              <div className="absolute   left-32 translate-y-1/2 top-[15%] max-[970px]:left-5">
                <h2 className="font-Mukta text-white uppercase text-[18px]">
                  Welcome to NaTural
                </h2>
                <h1 className="text-[90px] font-PirateOne text-white max-[970px]:text-[45px] ">
                  STEAKHOUSE + BAR
                </h1>
                <button
                  target="_blanc"
                  className="customButton butn-dark uppercase"
                >
                  {" "}
                  <span>Download menu in PDF &nbsp;&nbsp;</span>
                </button>
              </div>
            </div>
          </div>
          <div className="w-full h-full">
            <div className="w-full relative h-full">
              <img
                src={naTural}
                className="filter brightness-50 w-full h-full"
                alt="naTural"
              />
              <div className="absolute   left-32 translate-y-1/2 top-[15%] max-[970px]:left-5">
                <h2 className="font-Mukta text-white uppercase text-[18px]">
                  Welcome to NaTural
                </h2>
                <h1 className="text-[90px] font-PirateOne text-white max-[970px]:text-[45px] ">
                  STEAKHOUSE + BAR
                </h1>
                <button
                  target="_blanc"
                  className="customButton butn-dark uppercase"
                >
                  {" "}
                  <span>Download menu in PDF &nbsp;&nbsp;</span>
                </button>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default SimpleSlider;
