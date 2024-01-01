import React, { useContext } from "react";
import model from "../images/model.png";

import { FaShopify } from "react-icons/fa6";
import { TypeAnimation } from "react-type-animation";
import { ProductContext } from "../Context/ProductContext";
import Product from "./Product";

const Home = () => {
  const { products, toggleProducts, showDiscountedProducts } =
    useContext(ProductContext);
  console.log(products);

  return (
    <div>
      <div className=" flex items-center md:flex-row justify-center mt-8 flex-col-reverse mx-3 md:mx-20 lg:mx-[150px]">
        <div className=" md:w-3/5  mt-4    md:text-start text-center">
          <h1 className=" md:text-[60px] lg:text-[80px] text-[60px] font-heading">
            Best Collections
          </h1>
          <h1 className=" text-start text-gray-400  text-[40px] font-heading font-bold">
            You Can Buy{""}
            <span className=" ms-1 bg-gradient-to-r from-color-1 via-color-2 to-color-3 bg-clip-text text-transparent">
              <TypeAnimation
                className=" font-heading "
                sequence={[
                  // Same substring at the start will only be typed out once, initially
                  " Ropita",
                  1000, // wait 1s before replacing "Mice" with "Hamsters"
                  "  Electronics",
                  1000,
                  "  Furniture",
                  1000,
                  "  Shoes",
                  1000,
                  "  Miscellaneous",
                  1000,
                  "  Perriots",
                  1000
                ]}
                wrapper="span"
                speed={50}
                style={{ fontSize: "40px" }}
                repeat={Infinity}
              />
            </span>
          </h1>
          <p className=" text-start font-para text-[16px] lg:text-[20px] font-medium text-gray-400">
            Experience the ultimate shopping journey with our Best Collection.
            Discover a diverse range of high-quality products that cater to your
            every need. Whether you're looking for trendy clothing and
            accessories, cutting-edge electronics, stylish furniture,
            fashionable footwear, or unique miscellaneous items, our collection
            has it all. We are committed to bringing you the finest selection,
            curated with care and expertise.
          </p>
          <button
            onClick={toggleProducts}
            className="mt-4 hover:bg-gradient-to-l font-serif text-[15px] md:text-[20px] font-bold w-[350px] h-[50px] rounded-full flex flex-row justify-center items-center bg-gradient-to-r from-color-1 via-color-2 to-color-3"
          >
            {showDiscountedProducts ? (
              <>
                <span>Show All Products</span>
                <span className="ms-1">
                  <FaShopify />
                </span>
              </>
            ) : (
              <>
                <span>Show Big Discounts Products</span>
                <span className="ms-1">
                  <FaShopify />
                </span>
              </>
            )}
          </button>
        </div>

        <img src={model} className="w-3/4 md:w-2/5  " alt="" />
      </div>
      <div className="  mx-2  mt-10 flex flex-wrap justify-center gap-10 ">
        {products?.map((pd) => {
          return <Product key={pd.id} {...pd} />;
        })}
      </div>
    </div>
  );
};

export default Home;
