import React, { useContext } from "react";
import { FaPlus } from "react-icons/fa";
import { TiMinus } from "react-icons/ti";
import { IoRemoveCircleSharp } from "react-icons/io5";
import { CartContext } from "../Context/CartContext";
import { Link } from "react-router-dom";

const CartItem = (item) => {
  const { id } = item;
  const { increaseQty, removeCart, decreaseQty } = useContext(CartContext);
  return (
    <div className=" mx-2 flex justify-between my-4  ">
      <div>
        <img className=" w-[80px] h-[60px] " src={item.thumbnail} alt="" />
      </div>
      <div className=" ">
        <p className="  w-[250px] text-center font-serif text-[16px]">
          <Link to={`product/${id}`}>
            <span className=" cursor-pointer underline hover:text-slate-100">
              {" "}
              {item.title.substring(0, 20)}..
            </span>
          </Link>
          <span className=" ms-2 font-heading text-[18px]">${item.price}</span>
        </p>
        <div className=" flex justify-evenly">
          <button
            onClick={() => increaseQty(id)}
            className=" bg-slate-500 rounded-md p-1 bg-opacity-30"
          >
            <FaPlus size={12} />
          </button>
          <p className="  ">{item.amount}</p>
          <button
            onClick={() => decreaseQty(id)}
            className=" bg-slate-500 rounded-md p-1 bg-opacity-30"
          >
            <TiMinus size={12} />
          </button>
        </div>
      </div>
      <div className="  font-serif text-[14px]">
        <p>SubTotal</p>
        <p className=" font-heading text-[20px]">${item.price * item.amount}</p>
      </div>
      <div className="">
        <button onClick={() => removeCart(id)} className=" text-red-600">
          <IoRemoveCircleSharp size={26} />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
