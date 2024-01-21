import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { HEAD_URL } from "./data";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrolled(scrollTop > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`font-PirateOne fixed top-0 left-0 right-0 z-50 text-white transition-all duration-300 ${
        scrolled ? "bg-black" : "bg-transparent"
      }`}
    >
      <div className="flex justify-between mx-36 my-7 items-center">
        <div className="flex flex-col justify-center ">
          <h2 className="text-[50px] leading-[40px]">NaTural </h2>
          <span className="text-center font-Mukta uppercase text-[10px] p-[3px] bg-[#991b1f] tracking-[3px] text-white">
            Steakhouse+Bar
          </span>
        </div>
        <div>
          <ul className="flex gap-5 text-[25px]">
            {HEAD_URL?.map((item) => (
              <li className="hover:text-[#991b1f] duration-300" key={item?.id}>
                <Link to={item?.url}>{item?.inner}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
