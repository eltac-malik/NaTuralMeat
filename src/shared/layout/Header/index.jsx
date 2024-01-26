import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { HEAD_URL } from "./data";
import MenuIcon from "@mui/icons-material/Menu";
import RenderIf from "src/shared/components/RenderIf";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenu, setIsMenu] = useState(false);
  const { pathname } = useLocation();
  console.log({ pathname });
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrolled(scrollTop > 150);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const handlerMenu = () => {
    setIsMenu((current) => !current);
  };

  return (
    <div
      className={`font-PirateOne fixed top-0 left-0 right-0 z-50 text-white transition-all duration-300 ${
        scrolled ? "bg-[#101010]" : "bg-transparent"
      }`}
    >
      <div className="flex justify-between mx-36 my-7 items-center max-[970px]:mx-5">
        <div className="flex flex-col justify-center ">
          <h2 className="text-[50px] leading-[40px]">NaTural </h2>
          <span className="text-center font-Mukta uppercase text-[10px] p-[3px] bg-[#991b1f] tracking-[3px] text-white">
            Steakhouse+Bar
          </span>
        </div>
        <div>
          <ul className="flex gap-5 text-[25px] max-[970px]:hidden ">
            {HEAD_URL?.map((item) => {
              return (
                <li
                  className={`hover:text-[#991b1f] duration-300 ${
                    item.url == pathname ? "active" : ""
                  }`}
                  key={item?.id}
                >
                  <Link to={item?.url}>{item?.inner}</Link>
                </li>
              );
            })}
          </ul>
          <div className=" hidden    max-[970px]:!block ">
            <button onClick={handlerMenu}>
              <MenuIcon />
            </button>
            <RenderIf condition={isMenu}>
              <div
                className={`absolute top-[117px] left-0 h-56 bg-[#1b1b1b] w-full  px-5 flex justify-center flex-col gap-3 shadow-lg shadow-bottom  `}
              >
                {HEAD_URL?.map((item) => {
                  return (
                    <li
                      className={`hover:text-[#991b1f] duration-300 list-none text-[21px] ${
                        item.url == pathname ? "active" : ""
                      }`}
                      key={item?.id}
                    >
                      <Link to={item?.url}>{item?.inner}</Link>
                    </li>
                  );
                })}
              </div>
            </RenderIf>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
