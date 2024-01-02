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
import { RiMenuSearchLine } from "react-icons/ri";

const Navbar = () => {
  const { handleClose } = useContext(SliderContext);
  const { itemAmount } = useContext(CartContext);
  const { handleCloseContact } = useContext(ContactContext);
  const [menu, setMenu] = useState(false);
  const [search, setSearch] = useState(false);
  const { handleSearch } = useContext(ProductContext);
  const [searchQuery, setSearchQuery] = useState("");

  const handleMenu = () => {
    setSearch(false);
    return setMenu(!menu);
  };
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    handleSearch(searchQuery);
  };
  const searchToggle = () => {
    setMenu(false);
    return setSearch(!search);
  };

  return (
    <div className=" z-40 md:container  w-full mx-auto  ">
      <div className="  text-white  lg:px-12 py-5 flex justify-around items-center ">
        <div className=" flex bg-gradient-to-r from-color-1 to-color-2  bg-clip-text text-transparent font-logo text-[25px] font-bold">
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
          className=" lg:ms-0 ms-[130px] me-5 relative cursor-pointer flex items-center text-[25px] md:text-[40px]  hover:scale-105 transition-all duration-200"
        >
          <MdShoppingCart className=" absolute z-[1] text-cyan-100" />
          <p className=" absolute rounded-full top-[-26px] left-[13px] md:left-[23px] md:top-[-30px] text-[14px] bg-cyan-50 text-cyan-950 font-bold md:px-[4px] px-[2px]   text-center">
            {itemAmount}
          </p>
        </div>
        <button
          onClick={searchToggle}
          className=" group lg:hidden flex text-cyan-100 md:text-[22px] items-center gap-1"
        >
          <RiMenuSearchLine className=" group-hover:scale-110 text-[24px] md:text-[35px]" />
        </button>
        <button
          onClick={handleMenu}
          className=" group lg:hidden flex text-cyan-100 md:text-[22px] items-center gap-1"
        >
          Menu
          <BsFillMenuButtonWideFill className=" group-hover:scale-110 text-[22px] md:text-[30px]" />
        </button>
        {/* menu for small devices */}
        <div
          className={` ${
            !search ? "hidden" : "visible"
          }  lg:hidden absolute top-20 flex items-center text-black`}
        >
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search Your Products"
            className=" px-6 ps-2 h-[40px]  bg-slate-300 rounded-md outline-none"
          />
          <button
            onClick={handleSearchSubmit}
            className="bg-slate-600 rounded-e-md h-[40px]  px-2 absolute  right-0 "
          >
            <HiSearchCircle size={30} />
          </button>
        </div>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
