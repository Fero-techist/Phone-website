import React, { useState } from "react";

const Customer = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className=" py-4 h-full">
      <div className=" bg-cover relative overflow-y-hidden w-full lg:h-[500px] md:h-full h-full">
        <img
          src={require("../assets/div.s4com-header.png")}
          alt=""
        />
      </div>

      {isModalOpen && (
        <div className=" top-0 bottom-0 fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm left-0 right-0 h-[600px] grid items-center justify-center"></div>
      )}

      <div className=" w-3/4 mx-auto h-full">
        <div className=" grid justify-center items-center lg:grid-cols-3 md:grid-cols-2 grid-cols-1 py-4 gap-4">
          <div
            onClick={openModal}
            className=" w-[299px] h-[120px] flex items-center justify-center gap-4 bg-white rounded-xl shadow-xl"
          >
            <img
              src={require("../assets/i.png")}
              className=" w-[34px] h-[30px]"
              alt=""
            />
            <p className=" text-[18px] font-Cabin font-bold text-[#3E3E3E]">
              Bestellen
            </p>
          </div>
          <div className=" w-[299px] h-[120px] flex items-center justify-center gap-4 bg-white rounded-xl shadow-xl">
            <img
              src={require("../assets/ii.png")}
              className=" w-[34px] h-[30px]"
              alt=""
            />
            <p className=" text-[18px] font-Cabin font-bold text-[#3E3E3E]">
              Verzending & <br /> Levering
            </p>
          </div>
          <div className=" w-[299px] h-[120px] flex items-center justify-center gap-4 bg-white rounded-xl shadow-xl">
            <img
              src={require("../assets/iii.png")}
              className=" w-[34px] h-[30px]"
              alt=""
            />
            <p className=" text-[18px] font-Cabin font-bold text-[#3E3E3E]">
              Senifone <br /> handleidingen
            </p>
          </div>
          <div className=" w-[299px] h-[120px] flex items-center justify-center gap-4 bg-white rounded-xl shadow-xl">
            <img
              src={require("../assets/iv.png")}
              className=" w-[34px] h-[30px]"
              alt=""
            />
            <p className=" text-[18px] font-Cabin font-bold text-[#3E3E3E]">
              Retourneren & <br /> terugbetaling
            </p>
          </div>
          <div className=" w-[299px] h-[120px] flex items-center justify-center gap-4 bg-white rounded-xl shadow-xl">
            <img
              src={require("../assets/v.png")}
              className=" w-[34px] h-[30px]"
              alt=""
            />
            <p className=" text-[18px] font-Cabin font-bold text-[#3E3E3E]">
              Garantie & <br /> Reparatie
            </p>
          </div>
          <div onClick={closeModal} className=" w-[299px] h-[120px] flex items-center justify-center gap-4 border-2 border-[#FE5623] bg-white rounded-xl shadow-xl">
            <img
              src={require("../assets/vi.png")}
              className=" w-[34px] h-[30px]"
              alt=""
            />
            <p className=" text-[18px] font-Cabin font-bold text-[#3E3E3E]">
              Klantenservice
            </p>
          </div>
        </div>

        <div className=" py-4">
          <div className="  flex items-center py-4 gap-4">
            <img
              src={require("../assets/Frame (3).png")}
              className=" w-[22px] h-[14px"
              alt=""
            />
            <p className=" lg:text-[36px] md:text-[36px] text-[30px]  font-Cabin font-semibold text-[#3E3E3E]">
              Neem contact met ons op
            </p>
          </div>

          <div className="border h-full lg:py-0 md:py-4 py-6 border-[#D8D8D8] grid items-center justify-center">
            <div
              className=" grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 items-center
            lg:h-[221px] md:h-full h-full gap-6"
            >
              <div className=" w-[260px] h-[120px] flex items-center justify-center gap-4 bg-white rounded-xl shadow-xl  border-2 border-[#FE5623]">
                <img
                  src={require("../assets/Chat.png")}
                  className=" w-[30px] h-[30px]"
                  alt=""
                />
                <p className=" text-[18px] font-Cabin font-bold text-[#3E3E3E]">
                  Chat
                </p>
              </div>
              <div className=" w-[260px] flex items-center gap-4 justify-center h-[120px] bg-white rounded-xl shadow-xl border-2 border-[#FE5623]">
                <img
                  src={require("../assets/Mail.png")}
                  className=" w-[30px] h-[30px]"
                  alt=""
                />
                <p className="  text-[18px] font-Cabin font-bold text-[#3E3E3E]">
                  Mail
                </p>
              </div>
              <div className=" w-[260px] flex items-center gap-4 justify-center h-[120px] bg-white rounded-xl shadow-xl border-2 border-[#FE5623] ">
                <img
                  src={require("../assets/Bel.png")}
                  className=" w-[30px] h-[30px]"
                  alt=""
                />
                <p className="  text-[18px] font-Cabin font-bold text-[#3E3E3E]">
                  Bel
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className=" h-full">
          <div className=" flex items-center gap-4 py-4">
            <img
              src={require("../assets/Frame (3).png")}
              className=" w-[22px] h-[14px]"
              alt=""
            />
            <p className=" font-Cabin lg:text-[36px] md:text-[36px] text-[30px] font-semibold text-[#3E3E3E] ">
              Bedrijfsgegevens
            </p>
          </div>

          <div className=" flex items-center py-4 justify-between border border-[ #3E3E3E] h-[60px] px-10">
            <p className=" font-Cabin text-[16px] font-semibold">
              Bedrijfsgegevens
            </p>
            <img
              src={require("../assets/svg.feather.png")}
              className=" w-[17px] h-[17px]"
              alt=""
            />
          </div>
        </div>

        <div className=" py-4">
          <div className=" flex items-center gap-4 py-4">
            <img
              src={require("../assets/Frame (3).png")}
              className=" w-[22px] h-[14px]"
              alt=""
            />
            <p className=" font-Cabin lg:text-[36px] md:text-[36px] text-[30px] font-semibold text-[#3E3E3E] ">
              Klachten
            </p>
          </div>

          <div className=" flex items-center justify-between border border-[ #3E3E3E] h-[60px] px-10">
            <p className=" font-Cabin text-[16px] font-semibold">Klachten</p>
            <img
              src={require("../assets/svg.feather.png")}
              className=" w-[17px] h-[17px]"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customer;
