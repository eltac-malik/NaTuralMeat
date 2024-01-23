import Slider from "react-slick";

const CountrySlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="w-full CountrySlider">
      <div className="w-full overflow-hidden text-white">
        <Slider {...settings}>
          <div>
            <h1>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit,
              dolor laudantium ratione nobis delectus magni esse consequuntur
              libero facere quae a distinctio nihil debitis molestias sit odio
              eius facilis culpa ea cumque provident, dolorem ipsum! Deserunt,
              eveniet. Optio, magnam vitae.
            </h1>
          </div>
          <div>
            <h1>SAlam</h1>
          </div>
          <div>
            <h1>SAlam</h1>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default CountrySlider;
