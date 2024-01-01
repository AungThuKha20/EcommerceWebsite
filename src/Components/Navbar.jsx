import React, { useContext, useState } from "react";
import { MdShoppingCart } from "react-icons/md";
// import { FaHeartCirclePlus } from "react-icons/fa6";
import { GiSaberToothedCatHead } from "react-icons/gi";
import { SliderContext } from "../Context/SliderContext";
import { CartContext } from "../Context/CartContext";
import { RiContactsFill } from "react-icons/ri";
import { ContactContext } from "../Context/ContactContext";
import { BsFillMenuButtonWideFill } from "react-icons/bs";
import { FaHome } from "react-icons/fa";
import { HiSearchCircle } from "react-icons/hi";
import { Link } from "react-router-dom";
import { ProductContext } from "../Context/ProductContext";

const Navbar = () => {
  const { handleClose } = useContext(SliderContext);
  const { itemAmount } = useContext(CartContext);
  const { handleCloseContact } = useContext(ContactContext);
  const [menu, setMenu] = useState(false);
  const { handleSearch } = useContext(ProductContext);
  const [searchQuery, setSearchQuery] = useState("");

  const handleMenu = () => {
    return setMenu(!menu);
  };
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    handleSearch(searchQuery);
  };

  return (
    <div className=" z-40 md:container w-full mx-auto ">
      <div className="  text-white  lg:px-12 py-5 flex justify-around items-center ">
        <div className=" flex bg-gradient-to-r from-color-1 via-color-2 to-color-3 bg-clip-text text-transparent font-logo text-[25px] font-bold">
          PucciCat{" "}
          <span>
            <GiSaberToothedCatHead size={30} className=" text-sky-700" />
          </span>
        </div>

        <div className=" hidden items-center  lg:flex  gap-10">
          <div className=" hidden items-center  lg:flex  gap-10">
            <form
              onSubmit={handleSearchSubmit}
              className="flex items-center text-black"
            >
              <button
                type="submit"
                className="bg-slate-400 rounded-s-md px-2 py-[4px]"
              >
                <HiSearchCircle size={30} />
              </button>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search Your Products"
                className="px-4 py-[5px] bg-slate-300 rounded-e-md outline-none"
              />
            </form>
            {/* ... */}
          </div>
          <Link to={"/"}>
            <button className=" items-center flex font-serif font-bold hover:text-cyan-50  transition-all duration-200 text-cyan-100">
              <div className=" relative transition-all duration-800 group font-serif font-bold text-cyan-100 flex items-center  ">
                <p className=" group-hover:text-cyan-50 me-1">Home</p>
                <span className=" text-[25px] md:text-[40px] ">
                  {" "}
                  <FaHome className=" group-hover:scale-105 transition-all duration-200" />
                </span>
              </div>
            </button>
          </Link>
          <button onClick={handleCloseContact}>
            <div className=" relative transition-all duration-800 group font-serif font-bold text-cyan-100 flex items-center  ">
              <p className=" group-hover:text-cyan-50">Contact Us</p>
              <span className=" text-[25px] md:text-[40px] ">
                {" "}
                <RiContactsFill className=" group-hover:scale-105 transition-all duration-200" />
              </span>
            </div>
          </button>
        </div>

        <div
          onClick={handleClose}
          className=" lg:ms-0 ms-[150px] relative cursor-pointer flex items-center text-[25px] md:text-[40px]  hover:scale-105 transition-all duration-200"
        >
          <MdShoppingCart className=" absolute z-[1] text-cyan-100" />
          <p className=" absolute rounded-full top-[-26px] left-[13px] md:left-[23px] md:top-[-30px] text-[14px] bg-cyan-50 text-cyan-950 font-bold md:px-[4px] px-[2px]   text-center">
            {itemAmount}
          </p>
        </div>

        <button
          onClick={handleMenu}
          className=" group lg:hidden flex text-cyan-100 md:text-[25px] items-center gap-1"
        >
          Menu
          <BsFillMenuButtonWideFill className=" group-hover:scale-110 text-[25px] md:text-[40px]" />
        </button>
        {/* menu for small devices */}
        <div
          className={` ${
            !menu ? "hidden" : "visible"
          }  absolute z-10 top-16 left-20%`}
        >
          {" "}
          <div className="  text-[10px] bg-slate-800 bg-opacity-80 p-4 lg:hidden flex flex-col gap-2 items-start w-full mx-auto">
            <Link to={"/"}>
              <button className="font-serif border-b-[2px] border-cyan-100 font-bold hover:text-cyan-50 hover:scale-105 transition-all duration-200 text-cyan-100">
                Home
              </button>
            </Link>
            <button
              className=" border-b-[2px] border-cyan-100"
              onClick={handleCloseContact}
            >
              <div className=" relative transition-all duration-800 group font-serif font-bold text-cyan-100 flex items-center  ">
                <p className=" group-hover:text-cyan-50">Contact Us</p>
                <span className=" text-[25px] md:text-[40px] ">
                  {" "}
                  <RiContactsFill className=" group-hover:scale-105 transition-all duration-200" />
                </span>
              </div>
            </button>

            <form
              onSubmit={handleSearchSubmit}
              className=" flex items-center text-black"
            >
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search Your Products"
                className=" px-4 ps-2 py-1  bg-slate-300 rounded-md outline-none"
              />
              <button
                type="submit"
                className="bg-slate-600 rounded-e-md py-[1px] px-2 absolute  right-3"
              >
                <HiSearchCircle size={30} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
