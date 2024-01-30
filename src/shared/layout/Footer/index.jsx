import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
const Footer = () => {
  const icons = [
    { icon: <FacebookIcon /> },
    { icon: <TwitterIcon /> },
    { icon: <InstagramIcon /> },
    { icon: <PinterestIcon /> },
  ];
  return (
    <div className="bg-[#101010] text-white pt-[100px] ">
      <div className="px-36 grid grid-cols-4 gap-[70px] mb-16  max-[970px]:grid-cols-1 max-[970px]:px-3">
        <div className="">
          <h2 className="text-[50px] font-PirateOne leading-[40px]">
            NaTural{" "}
          </h2>
          <span className="text-center font-Mukta uppercase text-[10px] p-[3px] bg-[#991b1f] tracking-[3px] text-white">
            Steakhouse+Bar
          </span>
          <p className="font-Mukta text-[15px] mt-4">
            Steakhouse the nunc bibe endum in finibus elit the solli citudin
            elit.
          </p>
          <div className="flex gap-3 mt-5">
            {icons?.map((icon, index) => (
              <a
                key={index}
                className="  cursor-pointer border rounded-full border-[#991b1f] padding inline-block p-2 hover:border-[#ffffff] duration-500  hover:duration-500"
              >
                {icon?.icon}
              </a>
            ))}
          </div>
        </div>
        <div>
          <h1 className=" text-[24px] font-PirateOne pb-1 text-[#991B1F] border-b  border-white border-dotted mb-3">
            Phone & Email
          </h1>
          <p className="font-Mukta text-[15px]">+1 203-123-0606</p>
          <p className="font-Mukta text-[15px]"> steakhouse@winta.com</p>
        </div>
        <div>
          <h1 className=" text-[24px] font-PirateOne pb-1 text-[#991B1F] border-b  border-white border-dotted mb-3">
            Our Address
          </h1>
          <p className="font-Mukta text-[15px]">
            24 King St, Charleston, SC 29401 USA
          </p>
        </div>

        <div>
          <h1 className=" text-[24px] font-PirateOne pb-1 text-[#991B1F] border-b  border-white border-dotted mb-3">
            Opening Hours
          </h1>
          <p className="font-Mukta text-[15px]">Mon-Fri: 5 PM - 10:30 PM</p>
          <p className="font-Mukta text-[15px]">Sunday: Closed</p>
        </div>
      </div>
      <div className=" px-36 border-t border-white border-dotted py-8 flex justify-between max-[970px]:px-3 max-[970px]:flex-col">
        <p className=" font-Mukta text-[14px]">© 2024, NaTural website.</p>
        <p className=" font-Mukta text-[14px] max-[970px]:pt-5">
          Terms & Conditions
        </p>
      </div>
    </div>
  );
};

export default Footer;
