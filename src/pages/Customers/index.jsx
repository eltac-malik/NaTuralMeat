import About3 from "src/assets/imgs/about3.jpg";
import cv from "src/assets/imgs/CV.jpg";

const Customers = () => {
  return (
    <>
      {" "}
      <div className=" top-0 z-[-1] bg-[#1b1b1b] w-full    ">
        <div className=" relative ">
          <div className="z-[-1] bg-[url('src/assets/imgs/about.jpg')]  bg-cover bg-center w-full bg-fixed h-96 brightness-50"></div>
          <div className="absolute right-36 top-[50%] max-[970px]:right-3">
            <h1 className=" font-PirateOne text-[#991b1f] text-[50px] animate-bounce hover:animate-none text-end">
              CUSTOMERS
            </h1>
            <p className=" font-PirateOne text-[#ffffff] text-[25px] tracking-[3px] animate-slideInRight text-end">
              OUR CUSTOMERS
            </p>
          </div>
        </div>
        <div>
          <h1 className=" font-PirateOne text-[#ffffff] text-[45px] tracking-[3px] mx-36 text-center pt-12 max-[970px]:mx-3">
            Our customers
          </h1>
          <ul className=" grid grid-cols-3  mx-36  max-[970px]:grid-cols-1 max-[970px]:mx-3 gap-12 py-12 justify-items-center">
            <li className="flex items-center bg-[#991b1f67] hover:bg-[#991b1f] gap-1 rounded-md p-3 hover:scale-105 hover:duration-200  duration-200">
              <div className="h-24 w-24 rounded-full truncate">
                <img
                  className="w-full h-full object-cover"
                  src={cv}
                  alt="Profile"
                />
              </div>
              <h2 className="text-white text-[22px]">Yaqublu Ishaq</h2>
            </li>
            <li className="flex items-center bg-[#991b1f67] hover:bg-[#991b1f] gap-1 rounded-md p-3 hover:scale-105 hover:duration-200  duration-200">
              <div className="h-24 w-24 rounded-full truncate">
                <img
                  className="w-full h-full object-cover"
                  src={cv}
                  alt="Profile"
                />
              </div>
              <h2 className="text-white text-[22px]">Yaqublu Ishaq</h2>
            </li>
            <li className="flex items-center bg-[#991b1f67] hover:bg-[#991b1f] gap-1 rounded-md p-3 hover:scale-105 hover:duration-200  duration-200">
              <div className="h-24 w-24 rounded-full truncate">
                <img
                  className="w-full h-full object-cover"
                  src={cv}
                  alt="Profile"
                />
              </div>
              <h2 className="text-white text-[22px]">Yaqublu Ishaq</h2>
            </li>
            <li className="flex items-center bg-[#991b1f67] hover:bg-[#991b1f] gap-1 rounded-md p-3 hover:scale-105 hover:duration-200  duration-200">
              <div className="h-24 w-24 rounded-full truncate">
                <img
                  className="w-full h-full object-cover"
                  src={cv}
                  alt="Profile"
                />
              </div>
              <h2 className="text-white text-[22px]">Yaqublu Ishaq</h2>
            </li>
            <li className="flex items-center bg-[#991b1f67] hover:bg-[#991b1f] gap-1 rounded-md p-3 hover:scale-105 hover:duration-200  duration-200">
              <div className="h-24 w-24 rounded-full truncate">
                <img
                  className="w-full h-full object-cover"
                  src={cv}
                  alt="Profile"
                />
              </div>
              <h2 className="text-white text-[22px]">Yaqublu Ishaq</h2>
            </li>
            <li className="flex items-center bg-[#991b1f67] hover:bg-[#991b1f] gap-1 rounded-md p-3 hover:scale-105 hover:duration-200  duration-200">
              <div className="h-24 w-24 rounded-full truncate">
                <img
                  className="w-full h-full object-cover"
                  src={cv}
                  alt="Profile"
                />
              </div>
              <h2 className="text-white text-[22px]">Yaqublu Ishaq</h2>
            </li>
            <li className="flex items-center bg-[#991b1f67] hover:bg-[#991b1f] gap-1 rounded-md p-3 hover:scale-105 hover:duration-200  duration-200">
              <div className="h-24 w-24 rounded-full truncate">
                <img
                  className="w-full h-full object-cover"
                  src={cv}
                  alt="Profile"
                />
              </div>
              <h2 className="text-white text-[22px]">Yaqublu Ishaq</h2>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Customers;
