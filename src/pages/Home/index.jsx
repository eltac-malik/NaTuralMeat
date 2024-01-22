import SimpleSlider from "src/shared/components/SimpleSlider";
import Home1 from "src/assets/imgs/home2.jpg";
import Home2 from "src/assets/imgs/home3.jpg";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import Menu from "./Menu";
import { Modal } from "@mui/material";
import { useState } from "react";
const Home = () => {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };
  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <>
      <div className="absolute top-0 z-[-1] bg-[#1b1b1b] w-full    ">
        <div className="w-full  z-[-1]">
          <SimpleSlider />
          {/* <img src={naTural} alt="NaTural " /> */}
        </div>
        <div className="grid grid-cols-2 mx-36 gap-8 py-[90px]">
          <div data-aos="fade-up" className="flex flex-col gap-3">
            <span className="text-[15px] text-white font-Mukta tracking-[3px] before:inline-block before:relative before:top-[-2px] before:left-[-15px] before:ml-[20px] before:w-[59px] before:h-[1px] before:bg-red-500">
              STEAKHOUSE + BAR
            </span>
            <h1 className="text-[60px] font-PirateOne text-white">
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
          <div data-aos="fade-up" className="grid grid-cols-2 gap-2">
            <div className="w-full col-span-2 overflow-hidden">
              <img
                className="h-[320px] w-full duration-200 hover:scale-[1.08] hover:duration-200 object-cover	"
                src={Home1}
                alt=""
              />
            </div>
            <div className="w-full overflow-hidden">
              <img
                className="h-[200px] w-full duration-200 hover:scale-[1.08] hover:duration-200 object-cover	"
                src={Home2}
                alt=""
              />
            </div>
            <div className="w-full overflow-hidden">
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
          <Menu />
        </div>
        <div>
          <div className="bg-[url('src/assets/imgs/banner.jpg')] bg-cover bg-center w-full bg-fixed h-96  flex   items-center relative	">
            <div className="ml-32 hover:scale-[1.2] duration-300 hover:duration-300		opacity-[.67] hover:opacity-[1] ">
              <button
                onClick={handleClick}
                className="p-3 bg-red-700 inline-block rounded-full "
              >
                <PlayArrowIcon className="!w-[55px] !h-[55px] text-white" />
              </button>
            </div>
            <div
              data-aos="fade-up"
              className="bg-[#101010] text-white absolute right-32 top-[15%] px-12 py-20"
            >
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
                <a className=" font-PirateOne text-[25px] inline-block py-[12px] px-[24px] border border-solid border-[#991b1f] m-auto  test-test">
                  <span>+994 70 826-10-26</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-32 my-32">
          <h1 className="font-PirateOne text-white  text-[27px]">
            Want to cook something tasty? Read our best recipes.
          </h1>
          <button
            className="px-[24px] py-[12px] bg-[#991b1fa8] text-white mt-6 hover:bg-[#991b1f]"
            type="button"
          >
            Recipes Book
          </button>
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

export default Home;
