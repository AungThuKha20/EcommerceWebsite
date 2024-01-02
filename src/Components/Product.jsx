import React, { useContext } from "react";
import { TbSpeakerphone } from "react-icons/tb";
import { Rating } from "@mantine/core";
import "animate.css";
import { FaCartPlus } from "react-icons/fa6";
import "animate.css";

import { PiEyeFill } from "react-icons/pi";
import { Link } from "react-router-dom";
import { CartContext } from "../Context/CartContext";

const Product = (pd) => {
  const { addToCart } = useContext(CartContext);
  const {
    id,
    thumbnail,
    category,
    rating,
    price,
    // description,
    brand,
    title,
    discountPercentage
  } = pd;
  return (
    <div className=" animate__animated animate__flipInX   relative group w-[350px] shadow-lg px-2 shadow-cyan-500  ">
      <img src={thumbnail} className="  h-[150px]" alt="" />
      <div className=" mx-2 mt-4 flex justify-between">
        <p className=" bg-gradient-to-l from-color-2 to-color-1  font-serif px-2 py-1 rounded-md font-extrabold text-[14px]">
          {category}
        </p>
        <p className=" bg-gradient-to-l from-color-2 to-color-1 to-color-3 font-serif px-2 py-1 rounded-md font-extrabold text-[14px]">
          {brand.substring(0, 20)}
        </p>
      </div>
      <div className=" m-2 flex justify-between">
        <p className=" font-para text-slate-200 capitalize text-[18px] font-bold">
          {title.substring(0, 25)}
        </p>
        <Rating value={rating} fractions={2} readOnly />
      </div>
      <div className=" mb-4 m-2 flex items-center  justify-between">
        <p className=" font-logo text-slate-200 font-bold text-[25px]">
          ${price}{" "}
          <span className=" ms-2 line-through">
            ${price + price * (discountPercentage / 100).toFixed(1)}
          </span>
        </p>
        <p className=" rounded-full flex items-center text-center py-1 bg-red-600 px-2 text-[14px] text-white font-bold">
          {discountPercentage.toFixed(0)} % OFF{" "}
          <span className="">
            <TbSpeakerphone size={25} className=" text-white" />
          </span>
        </p>
      </div>
      <div className=" animate__animated lg:hidden animate__bounceInRight lg:flex-col group-hover:flex flex flex-col absolute top-0 right-0">
        <button
          onClick={() => addToCart(pd, id)}
          className=" p-1 mb-[2px] flex items-center bg-cyan-600 bg-opacity-70"
        >
          <FaCartPlus
            className=" hover:text-cyan-950 text-gray-100"
            size={30}
          />
        </button>
        <Link to={`product/${id}`}>
          <button className=" rounded-bl-md p-1 mb-[2px]  bg-cyan-600 bg-opacity-70">
            <PiEyeFill
              className=" hover:text-cyan-950 text-gray-100"
              size={30}
            />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Product;
