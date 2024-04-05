import React, { useState } from "react";
import Navbar from "../Component/Navbar";

const Accesories = ({ handleCart }) => {
  const [count, setCount] = useState(0);
  const product = [
    {
      id: 1,
      title: "Senifone S1 Accessories",
      imageUrl: require("../assets/body.dark.png"),
      price: require("../assets/div.product-price.png"),
    },

    {
      id: 2,
      imageUrl: require("../assets/div.product-mini-block__image (2).png"),
      title: "Boekhoesje with space for passes - Red",
      price: require("../assets/div.product-price.png"),
    },

    {
      id: 3,
      imageUrl: require("../assets/filters_format_webp__upscale.jpg.png"),
      title: "Senifone S1 Screen Protector",
      price: require("../assets/div.product-price.png"),
    },

    {
      id: 4,
      imageUrl: require("../assets/div.product-mini-block__image.png"),
      title: "Boekhiojse with space for Passes- Black",
      price: require("../assets/div.product-price.png"),
    },

    {
      id: 5,
      imageUrl: require("../assets/div.product-mini-block__image (5).png"),
      title: "Boekhiojse with space for Passes- Blue",
      price: require("../assets/div.product-price.png"),
    },

    {
      id: 6,
      imageUrl: require("../assets/div.product-mini-block__image (6).png"),
      title: "Transparent case + screen protector - bundle",
      price: require("../assets/div.product-price (1).png"),
    },

    {
      id: 7,
      imageUrl: require("../assets/div.product-mini-block__image (3).png"),
      title: "Book cover with space for passes - Brown",
      price: require("../assets/div.product-price.png"),
    },

    {
      id: 8,
      imageUrl: require("../assets/div.product-mini-block__image (4).png"),
      title: "Boekhiojse with space for Passes- Red",
      price: require("../assets/div.product-price.png"),
    },
    {
      id: 9,
      imageUrl: require("../assets/SD32GB.jpg.png"),
      title: "Micro SD card - 32GB",
      price: require("../assets/div.product-price (2).png"),
    },
    {
      id: 10,
      imageUrl: require("../assets/SD64GB.jpg.png"),
      title: "Micro SD card - 64GB",
      price: require("../assets/div.product-price (1).png"),
    },
    {
      id: 11,
      imageUrl: require("../assets/S1TPULOGO_bdbf06c5-8be8-4df5-aca9-1855e6108b2c.jpg.png"),
      title: "Senifone S1 Transparent Case",
      price: require("../assets/div.product-price.png"),
    },
    {
      id: 12,
      imageUrl: require("../assets/SENIFONESTRAP.png (1).png"),
      title: "Senifone Telefoonhouder met nek koord",
      price: require("../assets/div.product-price (2).png"),
    },
  ];

  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div>
      <div className=" w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:px-10 md:px-8 px-6 py-4  items-center justify-center gap-2">
        {product.map((image) => (
          <div
            key={image.id}
            onClick={openModal}
          >
            <img
              onClick={handleCart}
              className=" w-[400px] h-[400px]"
              src={image.imageUrl}
              alt={image.title}
            />

            <div className=" grid gap-3">
              <p className=" text-[15px] font-Cabin">{image.title}</p>

              <img
                className="w-[442px] h-[22.39px]"
                src={image.price}
                alt={image.title}
              />
            </div>
          </div>
        ))}
      </div>

      {isModalOpen && (
        <div className=" top-0 bottom-0 fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm left-0 right-0  h-full grid items-center justify-center">
          <div className=" w-[450px] h-[363.13px] bg-slate-500 grid items-center justify-center">
            <div>
              <p
                onClick={closeModal}
                className=" flex left-0 text-black hover:text-white cursor-pointer font-extrabold text-[30px]"
              >
                x
              </p>
            </div>

            <div className=" grid justify-center items-center">
              <img
                className=" w-[60px] h-[40px]"
                src={require("../assets/us.svg.png")}
                alt=""
              />
            </div>

            <div className=" py-4">
              <p className=" text-white text-[22px] font-Cabin">
                Your location is set to United States
              </p>

              <ul className=" py-2 text-white">
                <li className=" text-[16px] font-Nunito">Shop in EUR €</li>
                <li className=" text-[16px] font-Nunito ">
                  Get shipping options for United States
                </li>
              </ul>

              <button className=" bg-[#FE5722] text-[18px] py-2 font-Nunito my-2 w-[375px] h-[52px] rounded-xl text-white">
                Continue
              </button>

              <p className=" text-white text-[14px] py-2 font-Nunito">
                Change country
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Accesories;
