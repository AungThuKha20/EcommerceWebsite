import React, { useContext } from "react";
import { SliderContext } from "../Context/SliderContext";
import { IoIosEyeOff } from "react-icons/io";
import { CartContext } from "../Context/CartContext";
import CartItem from "./CartItem";
import { CheckOutContext } from "../Context/CheckOutContext";
import { PayPalContext } from "../Context/PaypalContext";

const Slider = () => {
  const { isOpen, setIsOpen } = useContext(SliderContext);
  const { handleClose } = useContext(CheckOutContext);
  const { cart, clearCart, total, itemAmount } = useContext(CartContext);
  const { handleClosePP } = useContext(PayPalContext);
  return (
    <div
      className={` ${
        isOpen ? "right-0" : "-right-full"
      }  fixed transition-all duration-700 md:w-[35vw] w-full h-full overflow-y-auto bg-gray-800 bg-opacity-90 z-30`}
    >
      <div className=" border-b-[1px] border-white m-2 text-white font-serif font-bold text-[20px] p-4 flex justify-between">
        <div>
          Cart Items : <span className=" font-heading">{itemAmount}</span>
        </div>
        <div>
          <IoIosEyeOff
            size={30}
            onClick={() => setIsOpen(!isOpen)}
            className=" text-white transition-all duration-700 cursor-pointer"
          />
        </div>
      </div>
      <div className=" text-white">
        {cart?.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}
      </div>
      <div className={itemAmount === 0 ? `hidden` : `visible`}>
        <hr className=" mx-2 mb-3" />
        <div className=" text-white flex justify-around">
          <p className=" font-serif font-bold">Total:</p>
          <p className=" font-heading ms-[100px] text-[20px]">${total}</p>
        </div>

        <div className=" flex justify-center gap-10 mt-2">
          <button
            onClick={handleClose}
            className=" hover:bg-gray-800 text-white font-bold bg-gray-600 py-1 px-4 rounded-lg"
          >
            Check Out
          </button>
          <button
            onClick={handleClosePP}
            className=" italic hover:bg-gray-200 text-white font-bold bg-gray-100 py-1 px-4 rounded-lg"
          >
            <span className=" text-blue-700">Pay</span>
            <span className=" text-sky-400">Pal</span>
          </button>
        </div>
        <div className=" mt-4 flex justify-center ">
          <button
            onClick={() => clearCart()}
            className=" hover:bg-red-800 text-white font-bold bg-red-600 py-1 px-4 rounded-lg"
          >
            Clear List
          </button>
        </div>
      </div>
    </div>
  );
};

export default Slider;
