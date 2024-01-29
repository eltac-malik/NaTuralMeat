import { useState } from "react";
import {
  HEAD_LIST,
  menuBreakfastList,
  menuMainsList,
  menuSaladsList,
  menuWineList,
} from "./data";

const Menu = () => {
  const [componentRender, setComponentRender] = useState("Mains");

  const innerList = {
    Mains: (
      <div className="grid grid-cols-2 mx-30 gap-10 mt-[40px] max-[970px]:grid-cols-1 ">
        {menuMainsList?.map((items) => (
          <div
            key={items?.id}
            className="flex gap-4 text-white align-center max-[970px]:justify-center"
          >
            <div className="w-[100px] h-[80px] rounded-lg overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src={items?.img}
                alt="main"
              />
            </div>
            <div className="col-span-2">
              <h1 className="flex justify-between border-b  border-dotted  border-b-white pb-2 text-[24px] text-[#991b1f]">
                <span>{items?.inner}</span>
                <span>{items?.price}</span>
              </h1>{" "}
              <p className="w-full  pt-2 font-Mukta">{items?.description}</p>
            </div>
          </div>
        ))}
      </div>
    ),
    Salads: (
      <div className="grid grid-cols-2 mx-30 gap-10 mt-[40px] max-[970px]:grid-cols-1 ">
        {menuSaladsList?.map((items) => (
          <div
            key={items?.id}
            className="flex gap-4 text-white align-center max-[970px]:justify-center"
          >
            <div className="w-[100px] h-[80px] rounded-lg overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src={items?.img}
                alt="main"
              />
            </div>
            <div className="col-span-2">
              <h1 className="flex justify-between border-b  border-dotted  border-b-white pb-2 text-[24px] text-[#991b1f]">
                <span>{items?.inner}</span>
                <span>{items?.price}</span>
              </h1>{" "}
              <p className="w-full  pt-2 font-Mukta">{items?.description}</p>
            </div>
          </div>
        ))}
      </div>
    ),
    Wine: (
      <div className="grid grid-cols-2 mx-30 gap-10 mt-[40px] max-[970px]:grid-cols-1 ">
        {menuWineList?.map((items) => (
          <div
            key={items?.id}
            className="flex gap-4 text-white align-center max-[970px]:justify-center"
          >
            <div className="w-[100px] h-[80px] rounded-lg overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src={items?.img}
                alt="main"
              />
            </div>
            <div className="col-span-2">
              <h1 className="flex justify-between border-b  border-dotted  border-b-white pb-2 text-[24px] text-[#991b1f]">
                <span>{items?.inner}</span>
                <span>{items?.price}</span>
              </h1>{" "}
              <p className="w-full  pt-2 font-Mukta">{items?.description}</p>
            </div>
          </div>
        ))}
      </div>
    ),
    Breakfast: (
      <div className="grid grid-cols-2 mx-30 gap-10 mt-[40px] max-[970px]:grid-cols-1 ">
        {menuBreakfastList?.map((items) => (
          <div
            key={items?.id}
            className="flex gap-4 text-white align-center max-[970px]:justify-center"
          >
            <div className="w-[100px] h-[80px] rounded-lg overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src={items?.img}
                alt="main"
              />
            </div>
            <div className="col-span-2">
              <h1 className="flex justify-between border-b  border-dotted  border-b-white pb-2 text-[24px] text-[#991b1f]">
                <span>{items?.inner}</span>
                <span>{items?.price}</span>
              </h1>{" "}
              <p className="w-full  pt-2 font-Mukta">{items?.description}</p>
            </div>
          </div>
        ))}
      </div>
    ),
  };

  return (
    <div className="flex flex-col px-40  my-8 max-[970px]:px-3">
      <div className="text-white flex gap-10 text-[27px] justify-center max-[970px]:overflow-x-scroll max-[970px]:gap-4">
        {HEAD_LIST?.map((item) => (
          <div
            className={`${item?.inner == componentRender ? "activeMenu" : ""}`}
            key={item?.id}
          >
            <button
              type="button"
              onClick={() => setComponentRender(item?.inner)}
            >
              <span>{item?.svg}</span>
              {item?.inner}
            </button>
          </div>
        ))}
      </div>
      <div>{innerList[componentRender]}</div>
    </div>
  );
};

export default Menu;
