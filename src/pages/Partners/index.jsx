import { PartnersData } from "./data";
const Partners = () => {
  return (
    <>
      {" "}
      <div className=" top-0 z-[-1] bg-[#1b1b1b] w-full    ">
        <div className=" relative ">
          <div className="z-[-1] bg-[url('src/assets/imgs/about.jpg')]  bg-cover bg-center w-full bg-fixed h-96 brightness-50"></div>
          <div className="absolute right-36 top-[50%] max-[970px]:right-3">
            <h1 className=" font-PirateOne text-[#991b1f] text-[50px] animate-bounce hover:animate-none text-end">
              PARTNERS
            </h1>
            <p className=" font-PirateOne text-[#ffffff] text-[25px] tracking-[3px] animate-slideInRight text-end">
              OUR PARTNERS
            </p>
          </div>
        </div>
        <div>
          <ul className="mt-6 grid grid-cols-3  mx-36  max-[970px]:grid-cols-1 max-[970px]:mx-3 gap-12 py-24 justify-items-center">
            {PartnersData?.map((item) => (
              <li
                className="text-gray-50 tracking-[3px]  text-2xl font-bold hover:text-red-500 duration-500 filter: drop-shadow(0 2px 2px rgb(0 0 0 / 0.1)) p-2 border-b border-gray-200 font-PirateOne "
                key={item?.name}
              >
                {item?.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Partners;
