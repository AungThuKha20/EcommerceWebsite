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
    <div className=" mt-[50px] mb-20 h-full  ">
      <div className=" lg:flex-row h-full flex flex-col md:mx-[100px] mx-[20px] items-center justify-center">
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
          <table className="mx-auto mt-5 mb-10">
            <tbody>
              <tr>
                <td>Title</td>
                <td>:</td>
                <td>{product.title}</td>
              </tr>
              <tr>
                <td>Brand</td>
                <td>:</td>
                <td>{product.brand}</td>
              </tr>
              <tr>
                <td>Category</td>
                <td>:</td>
                <td>{product.category}</td>
              </tr>
              <tr>
                <td>Price</td>
                <td>:</td>
                <td>${product.price}</td>
              </tr>
              <tr>
                <td className=" align-top">Description</td>
                <td className=" align-top">:</td>
                <td>{product.description}</td>
              </tr>
              <tr>
                <td>Discount Rate</td>
                <td>:</td>
                <td>{product.discountPercentage.toFixed(0)}%</td>
              </tr>
              <tr>
                <td>Rating</td>
                <td>:</td>
                <td>
                  <Rating value={product.rating} fractions={2} readOnly />
                </td>
              </tr>
            </tbody>
          </table>
          <div className=" flex justify-center gap-10 md:justify-evenly text-[18px] mt-3 ">
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
