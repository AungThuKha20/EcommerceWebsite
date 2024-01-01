import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { ProductContext } from "../Context/ProductContext";
import { CartContext } from "../Context/CartContext";
import "@mantine/carousel/styles.css";
import { Carousel } from "@mantine/carousel";
import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import { Rating } from "@mantine/core";

const PdDetail = () => {
  const { id } = useParams();
  const { products } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);

  const product = products?.find((item) => {
    return item.id === parseInt(id);
  });
  console.log(product);

  const autoplay = useRef(Autoplay({ delay: 2000 }));

  return (
    <div className=" mt-[50px] mb-20  z-50">
      <div className=" lg:flex-row flex flex-col md:mx-[100px] mx-[20px] items-center justify-center">
        <div className=" md:mx-[25px]">
          <Carousel
            withIndicators
            // height={200}
            plugins={[autoplay.current]}
            onMouseEnter={autoplay.current.stop}
            onMouseLeave={autoplay.current.reset}
            className=" w-[350px] md:w-[400px] "
          >
            {product.images?.map((image) => {
              return (
                <Carousel.Slide key={image}>
                  <img
                    src={image}
                    className=" object-fill w-[350px] h-[230px]  md:w-[400px] md:h-[280px]"
                    alt=""
                  />
                </Carousel.Slide>
              );
            })}

            {/* ...other slides */}
          </Carousel>
        </div>
        <div className=" flex-col justify-center items-center   md:mx-[25px] text-[10px] md:text-[20px] font-serif font-bold">
          <p className=" md:mt-0 mt-5 text-center  font-heading text-[25px] md:text-[50px]">
            {product.title}
          </p>
          <p className=" flex">
            <p className=" w-[180px]">Brand </p>
            <span className=" me-2">:</span>
            {product.brand}
          </p>
          <p className=" flex">
            <p className=" w-[180px]">Category </p>
            <span className=" me-2">:</span>
            {product.category}
          </p>
          <p className=" flex">
            <p className=" w-[180px]">Price </p>
            <span className=" me-2">:</span>${product.price}
          </p>
          <p className="flex">
            <p className=" md:me-[58px] me-[89px]">Description</p>
            <span className="me-2">:</span>
            {product.description}
          </p>
          <p className=" flex w-full">
            <p className=" w-[180px]">Discount_Rate </p>
            <span className=" me-2">:</span>
            {product.discountPercentage.toFixed(0)}%
          </p>
          <p className=" flex items-center">
            <p className=" w-[180px]">Rating </p>
            <span className=" me-2">:</span>
            <Rating value={product.rating} fractions={2} readOnly />
          </p>
          <div className=" flex justify-center md:justify-evenly text-[10px] mt-3 ">
            <button
              onClick={() => addToCart(product, product.id)}
              className=" mx-2 hover:bg-gradient-to-l bg-gradient-to-r from-color-1 via-color-2 to-color-3 px-2 py-1 rounded-full "
            >
              Add To Cart
            </button>
            <Link to="/">
              <button className=" mx-2 hover:bg-gradient-to-l bg-gradient-to-r from-color-1 via-color-2 to-color-3 px-2 py-1 rounded-full">
                Back To Home
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PdDetail;
