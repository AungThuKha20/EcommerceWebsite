import React, { useContext } from "react";
import { PayPalContext } from "../Context/PaypalContext";
import { IoCloseCircleOutline } from "react-icons/io5";
import PayPalPic from "../images/paypal.png";
import { Link } from "react-router-dom";

const PayPal = () => {
  const { isOpenPP, setIsOpenPP } = useContext(PayPalContext);

  return (
    <div
      className={` ${
        isOpenPP ? "right-0" : "-right-full"
      }  fixed transition-all   top-0  duration-700 md:w-[35vw] w-full h-full overflow-y-auto bg-slate-200 z-40`}
    >
      <IoCloseCircleOutline
        onClick={() => setIsOpenPP(!isOpenPP)}
        size={30}
        className=" text-red-700 m-5 cursor-pointer absolute top-0 right-0"
      />
      <div className="  items-center mt-10  mx-auto flex flex-col justify-center ">
        <div className="  ">
          <img src={PayPalPic} className="w-[200px] " alt="" />
        </div>
        <h2 className=" text-[25px] text-cyan-950 font-heading font-semibold">
          Pay with payPal
        </h2>
        <p>Enter your email address to get started</p>
        <input
          type="text"
          className=" bg-slate-600 rounded-md mt-3 outline-none border border-slate-900 px-4 py-1"
          placeholder="Email or mobile number"
        />
        <a
          className=" text-blue-950 font-serif text-[15px] mt-3 hover:underline"
          href=""
        >
          Forget Email?
        </a>
        <button className=" hover:bg-blue-900 mt-3 px-[100px] rounded-full bg-blue-800 text-white  text-[20px] py-1 flex items-center">
          Next
        </button>
        <div className="flex font-thin text-[10px] items-center ">
          ______________
          <p className=" font-semibold text-[18px] mt-3 mx-1">or</p>
          ______________
        </div>
        <button className=" border-[1px] hover:scale-[99%] transition-all duration-100 hover:border-[2px] border-blue-950  mt-3 px-[45px] rounded-full  text-blue-900  text-[20px] py-1 flex items-center">
          Create Account
        </button>
      </div>
    </div>
  );
};

export default PayPal;
