import Home1 from "src/assets/imgs/home2.jpg";
import Home2 from "src/assets/imgs/home3.jpg";
import About1 from "src/assets/imgs/about1.jpg";
import About2 from "src/assets/imgs/about2.jpg";
import About3 from "src/assets/imgs/about3.jpg";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
// import Menu from "./Menu";
import { Modal } from "@mui/material";
import { useState } from "react";

import CountrySlider from "src/shared/components/CountrySlider";
const About = () => {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <>
      <div className=" top-0 z-[-1] bg-[#1b1b1b] w-full    ">
        <div className=" relative ">
          <div className="z-[-1] bg-[url('src/assets/imgs/about.jpg')]  bg-cover bg-center w-full bg-fixed h-96 brightness-50"></div>
          <div className="absolute right-36 top-[50%] max-[970px]:right-3">
            <h1 className=" font-PirateOne text-[#991b1f] text-[50px] animate-bounce hover:animate-none text-end">
              ABOUT US
            </h1>
            <p className=" font-PirateOne text-[#ffffff] text-[25px] tracking-[3px] animate-slideInRight">
              WELCOME TO WINTA
            </p>
          </div>
          {/* <SimpleSlider /> */}
          {/* <img src={naTural} alt="NaTural " /> */}
        </div>
        <div className="grid grid-cols-2 mx-36 gap-8 py-[90px] max-[970px]:grid-cols-1 max-[970px]:mx-5">
          <div className="flex flex-col gap-3">
            <span className="text-[15px] text-white font-Mukta tracking-[3px] before:inline-block before:relative before:top-[-2px] before:left-[-15px] before:ml-[20px] before:w-[59px] before:h-[1px] before:bg-red-500">
              STEAKHOUSE + BAR
            </span>
            <h1 className="text-[60px] font-PirateOne text-white max-[970px]:">
              <span className="text-red-700">Welcome to</span> Winta
            </h1>
            <p className="text-[15px] text-white font-Mukta mb-1">
              Quality the nunc bibe endum in finibus elit eget they solli
              citudin elit. Phaselu the rutrum in lacusu euismod. Vestibulum
              eleifend tortor orci eu ornare tortor semta. Duis scelerisque the
              nise duru the look. Liwense eu nunc bibe endum in finibus elit
              eget the solli citudin elit. Drae tnea rutierum in lacus.
            </p>
            <p className="text-[15px] text-white font-Mukta">
              Duis scelerisque the nibhse drana moss pulvinar laie. Quality the
              biberon endumn finbus elit egethe solli citudin elit. Phasellus
              rutrum inle lacusut euismod. Vestibue eleifend tortor eu misse
              endumin finbus elit eget the soli citudin elit. Winta the nunc
              bibe endum in finibus elit eget they solli citudin elit. Phaselu
              the rutrum in lacusu euismod. Vestibulum eleifend tortor orci
              ornare torte sempeni. Luiste scelerisque the nise duru the look.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-2 max-[970px]:grid-cols-1">
            <div className="w-full col-span-2 overflow-hidden">
              <img
                className="h-[320px] w-full duration-200 hover:scale-[1.08] hover:duration-200 object-cover	"
                src={Home1}
                alt=""
              />
            </div>
            <div className="w-full overflow-hidden max-[970px]:col-span-2">
              <img
                className="h-[200px] w-full duration-200 hover:scale-[1.08] hover:duration-200 object-cover	"
                src={Home2}
                alt=""
              />
            </div>
            <div className="w-full overflow-hidden max-[970px]:col-span-2">
              <img
                className="h-[200px] w-full duration-200 hover:scale-[1.08] hover:duration-200 object-cover	"
                src={Home2}
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="font-PirateOne   py-9 bg-[#101010]">
          <h1 className="text-[60px] text-white text-center before:inline-block before:relative before:top-[30px] before:left-[10%]  before:w-[70px] before:h-[1px] before:bg-red-500">
            <span className="text-[#991b1f]">Menu</span> List{" "}
          </h1>
          {/* <Menu /> */}
        </div>
        <div>
          <div className="bg-[url('src/assets/imgs/banner.jpg')] bg-cover bg-center w-full bg-fixed h-96  flex   items-center relative 	 max-[970px]:!h-[880px]">
            <div className="ml-32 hover:scale-[1.2] duration-300 hover:duration-300		opacity-[.67] hover:opacity-[1] max-[970px]:absolute max-[970px]:top-4  max-[970px]:ml-3   ">
              <button
                onClick={handleClick}
                className="p-3 bg-red-700 inline-block rounded-full "
              >
                <PlayArrowIcon className="!w-[55px] !h-[55px] text-white" />
              </button>
              <h1 className=" hidden font-PirateOne text-[35px] text-white max-[970px]:!block">
                View Promo Video
              </h1>
            </div>
            <div className="bg-[#101010] text-white absolute right-32 top-[15%] px-12 py-20 max-[970px]:top-[25%]  max-[970px]:translate-x-[14%] max-[970px]:px-12 max-[970px]:left-[-24px] max-[378px]:right-[59px]  ">
              <p className="text-[13px] font-Mukta text-center">
                CALL FOR RESERVATIONS
              </p>
              <h1 className="font-PirateOne text-[45px] text-[#991b1f] tracking-[.3px] border-b  border-dotted  border-b-[#991b1f] text-center">
                Opening Hours
              </h1>
              <div className="grid grid-cols-2 gap-20 mt-8">
                <div className="text-center">
                  <p className="font-Mukta text-[15px] mb-[15px]">
                    Sunday to Tuesday
                  </p>
                  <h2 className="font-PirateOne text-[#991b1f] text-[30px]">
                    10:00
                  </h2>
                  <h2 className="font-PirateOne text-[#991b1f] text-[30px]">
                    22:00
                  </h2>
                </div>
                <div className="text-center">
                  <p className="font-Mukta text-[15px] mb-[15px]">
                    Friday to Saturday
                  </p>
                  <h2 className="font-PirateOne text-[#991b1f] text-[30px]">
                    12:00
                  </h2>
                  <h2 className="font-PirateOne text-[#991b1f] text-[30px]">
                    19:00
                  </h2>
                </div>
              </div>
              <div className="text-center mt-[30px]">
                <button
                  target="_blanc"
                  className="customButton  uppercase font-PirateOne text-[25px] inline-block py-[12px] px-[24px] border border-solid border-[#991b1f] m-auto  "
                >
                  {" "}
                  <span>+994 70 826-10-26</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-32 my-32 max-[970px]:mx-3">
          <h1 className="font-PirateOne text-white  text-[27px] mb-4">
            Want to cook something tasty? Read our best recipes.
          </h1>
          <button target="_blanc" className="customButton butn-dark ">
            {" "}
            <span>Recipes Book</span>
          </button>
        </div>
        <div className="  bg-[#101010] py-[90px] ">
          <div className="flex flex-col gap-5 mx-32 max-[970px]:mx-3">
            <span className="text-[15px] text-white font-Mukta tracking-[3px] before:inline-block before:relative before:top-[-2px] before:left-[-15px] before:ml-[20px] before:w-[59px] before:h-[1px] before:bg-red-500">
              EXECUTIVE
            </span>{" "}
            <h1 className="text-[60px] font-PirateOne text-white mb-8">
              <span className="text-red-700">Our</span> Chef Team
            </h1>
          </div>
          <div className="mx-32 grid grid-cols-3 gap-6  max-[970px]:mx-3 max-[970px]:grid-cols-1">
            <div>
              <div className="h-[433px] w-full overflow-hidden">
                <img
                  className="w-full h-full object-fill duration-300  hover:scale-125 hover:duration-300"
                  src={About1}
                  alt=""
                />
              </div>
              <h1 className="font-PirateOne text-[24px] text-[#ffffff] text-center pt-[30px]">
                {" "}
                <span className="text-[#991b1f]"> Chef.</span>Eltac Malik
              </h1>
              <p className="text-white text-center">Executive Head Chef</p>
            </div>
            <div className="max-[970px]:my-9">
              <div className="h-[433px] w-full overflow-hidden ">
                <img
                  className="w-full h-full object-fill duration-300  hover:scale-125 hover:duration-300"
                  src={About2}
                  alt=""
                />
              </div>
              <h1 className="font-PirateOne text-[24px] text-[#ffffff] text-center pt-[30px]">
                {" "}
                <span className="text-[#991b1f]"> Chef.</span>Eltac Malik
              </h1>
              <p className="text-white text-center">Executive Head Chef</p>
            </div>
            <div>
              <div className="h-[433px] w-full overflow-hidden">
                <img
                  className="w-full h-full object-fill duration-300  hover:scale-125 hover:duration-300"
                  src={About3}
                  alt=""
                />
              </div>
              <h1 className="font-PirateOne text-[24px] text-[#ffffff] text-center pt-[30px]">
                {" "}
                <span className="text-[#991b1f]"> Chef.</span>Ishaq Yaqublu
              </h1>
              <p className="text-white text-center">Executive Head Chef</p>
            </div>
          </div>
        </div>
        <div className="bg-[url('src/assets/imgs/banner.jpg')] bg-cover bg-center w-full bg-fixed h-96  flex   items-center ">
          <CountrySlider />
        </div>
      </div>
      <Modal onClose={() => handleClose()} open={showModal}>
        <div className="flex justify-center  align-center mt-32">
          <video autoPlay width="60%" height="400px" controls>
            <source src="src/assets/videos/naturalVideo.mp4" type="video/mp4" />
          </video>
        </div>
      </Modal>
    </>
  );
};

export default About;
