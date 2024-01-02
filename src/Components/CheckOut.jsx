import React, { useContext } from "react";

import { CheckOutContext } from "../Context/CheckOutContext";
import { IoCloseCircleOutline } from "react-icons/io5";
import cat from "../images/cat.png";

const CheckOut = () => {
  const { isOpen, setIsOpen } = useContext(CheckOutContext);

  return (
    <div
      className={` ${
        isOpen ? "right-0" : "-right-full"
      }  fixed transition-all z-50 flex items-center top-0  duration-700 md:w-[35vw] w-full h-full overflow-y-auto navbar_bg `}
    >
      <IoCloseCircleOutline
        onClick={() => setIsOpen(!isOpen)}
        size={30}
        className=" text-red-700 m-5 cursor-pointer absolute top-0 right-0"
      />
      <div className="  ">
        <h1 className="bg-gradient-to-r from-color-1 to-color-2  bg-clip-text text-transparent text-center font-heading text-[45px] md:text-[50px]">
          Thank For purchasing Our Products
        </h1>
        <div className=" animate-bounce mt-2 flex justify-center">
          <img src={cat} className=" w-[200px]" alt="" />
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
