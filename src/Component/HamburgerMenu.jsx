// HamburgerMenu.js
import React, { useState } from "react";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`hamburger-menu ${isOpen ? "open" : ""}`}>
      <div
        className="cursor-pointer flex flex-col"
        onClick={toggleMenu}
      >
        <div className="w-6 h-1 bg-gray-800 mb-1"></div>
        <div className="w-6 h-1 bg-gray-800 mb-1"></div>
        <div className="w-6 h-1 bg-gray-800"></div>
      </div>
      {/* Add your menu items here */}
      <div className="menu-items bg-white p-4 shadow-md absolute top-16 right-0 transform translate-x-full transition duration-400 ease-in-out">
        <Link to="/">Home</Link>
        <Link to="/senifone ">senifone1</Link>
        <Link to="/accesories">accesories</Link>
        <Link to="/customerService"> Customer service</Link>
        <Link to="/pointsofsale">Points Of Sale</Link>
      </div>
    </div>
  );
};

export default HamburgerMenu;
