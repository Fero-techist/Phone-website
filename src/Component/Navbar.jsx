import React from "react";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

const Navbar = ({ count }) => {
  const [isOpen, setIsOpen] = useState(false);

  const ontoggleMenu = () => {
    setIsOpen(true);
  };

  const offtoggleMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav>
      <div className=" w-full flex py-4 justify-between items-center lg:px-18 md:px-12 px-10">
        <div>
          <img
            src={require("../assets/logo_31b8dcd0-d319-4fed-b258-7c7fc498027a_510x.png.png")}
            className=" w-[200px] h-[60px]"
            alt=""
          />
        </div>

        <ul class="lg:flex gap-[16px] text-[16px] text-[#3C4043] font-Cabin font-medium cursor-pointer uppercase items-center hidden">
          <Link to="/">Home</Link>
          <Link to="/senifone ">senifone1</Link>
          <Link to="/accesories">accesories</Link>
          <Link to="/customer-service"> Customer service</Link>
          <Link to="/pointsofsale">Points Of Sale</Link>
          <h6>{count}</h6>
        </ul>

        <button
          onClick={ontoggleMenu}
          className="lg:hidden cursor-pointer"
        >
          {" "}
          <RxHamburgerMenu />{" "}
        </button>
        {/* <div
          onClick={() => setIsOpen(!isOpen)}
          className=" cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
        >
          {isOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div> */}

        {isOpen && (
          <div className>
            <div className="w-full h-full shadow-md absolute grid top-0 justify-center bg-gradient-to-r from-white to bg-gray-400  right-0 py-10 gap-5 px-4 z-20">
              <button
                onClick={offtoggleMenu}
                className=" cursor-pointer text-[30px] font-Cabin font-bold right-0 absolute px-4"
              >
                X
              </button>
              <ul className=" text-[16px] grid gap-6 text-[#3C4043] font-Cabin font-medium cursor-pointer uppercase">
                <Link to="/">Home</Link>
                <Link to="/senifone ">senifone1</Link>
                <Link to="/accesories">accesories</Link>
                <Link to="/customer-service"> Customer service</Link>
                <Link to="/pointsofsale">Points Of Sale</Link>
              </ul>
            </div>
          </div>
        )}

        <div className=" lg:flex md:hidden hidden gap-4">
          <img
            className=" w-[15px] h-[15px]"
            src={require("../assets/first.png")}
            alt=""
          />
          <img
            className=" w-[15px] h-[15px]"
            src={require("../assets/second.png")}
            alt=""
          />
          <img
            className=" w-[15px] h-[15px]"
            src={require("../assets/third.png")}
            alt=""
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
