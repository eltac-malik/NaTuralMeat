import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import Input from "src/shared/components/Input/index";
import TextArea from "src/shared/components/TextArea";
const Contact = () => {
  return (
    <>
      {" "}
      <div className=" top-0 z-[-1] bg-[#1b1b1b] w-full    ">
        <div className=" relative ">
          <div className="z-[-1] bg-[url('src/assets/imgs/about.jpg')]  bg-cover bg-center w-full bg-fixed h-96 brightness-50"></div>
          <div className="absolute right-36 top-[50%] max-[970px]:right-3">
            <h1 className=" font-PirateOne text-[#991b1f] text-[50px] animate-bounce hover:animate-none text-end">
              CONTACT US
            </h1>
            <p className=" font-PirateOne text-[#ffffff] text-[25px] tracking-[3px] animate-slideInRight text-end">
              HOW TO FIND OUR NATURAL{" "}
            </p>
          </div>
          {/* <SimpleSlider /> */}
          {/* <img src={naTural} alt="NaTural " /> */}
        </div>
        <div className="mt-6 grid grid-cols-2  mx-36  max-[970px]:grid-cols-1 max-[970px]:mx-3 gap-24 py-24">
          <div>
            <div>
              <h1 className="text-[27px] font-PirateOne text-white">
                Contact <span className="text-[#991b1f]">Info</span>
              </h1>
              <div className="flex items-center mt-5">
                <PhoneAndroidIcon
                  style={{ width: "50px", height: "50px", color: "#991b1f" }}
                />
                <div className="ml-2">
                  <h1 className="text-[21px] font-PirateOne text-white ">
                    Phone Text
                  </h1>
                  <p className="text-[rgba(255,255,255,0.8)] font-Mukta ">
                    +1 203-123-0606
                  </p>
                </div>
              </div>
              <div className="flex items-center mt-5">
                <LocationOnIcon
                  style={{ width: "50px", height: "50px", color: "#991b1f" }}
                />
                <div className="ml-2">
                  <h1 className="text-[21px] font-PirateOne text-white ">
                    Phone Text
                  </h1>
                  <p className="text-[rgba(255,255,255,0.8)] font-Mukta ">
                    +1 203-123-0606
                  </p>
                </div>
              </div>
              <div className="flex items-center mt-5">
                <MailOutlineIcon
                  style={{ width: "50px", height: "50px", color: "#991b1f" }}
                />
                <div className="ml-2">
                  <h1 className="text-[21px] font-PirateOne text-white ">
                    Phone Text
                  </h1>
                  <p className="text-[rgba(255,255,255,0.8)] font-Mukta ">
                    +1 203-123-0606
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-14">
              <form action="" className="grid grid-cols-2 gap-6 ">
                <div className="max-[970px]:col-span-2">
                  <Input className="w-full" placeholder="Your Name" />
                </div>
                <div className="max-[970px]:col-span-2">
                  <Input className="w-full" placeholder="Your Name" />
                </div>
                <div className="max-[970px]:col-span-2">
                  <Input className="w-full" placeholder="Your Name" />
                </div>
                <div className="max-[970px]:col-span-2">
                  <Input className="w-full" placeholder="Your Name" />
                </div>
                <div className="col-span-2 w-full">
                  <TextArea
                    className="w-full"
                    rows={5}
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <button target="_blanc" className="customButton butn-dark ">
                    {" "}
                    <span>Send Message</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="bg-[#101010] text-white   px-12 py-20    max-[970px]:px-12 h-[570px]     ">
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
    </>
  );
};

export default Contact;
