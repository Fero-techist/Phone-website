import React from "react";

const pointsofsale = () => {
  return (
    <div>
      <div className=" lg:px-10 md:px-8 px-6">
        <div className=" w-full h-full relative lg:px-18 md:px-14 px-10">
          <p className=" text-[32px] font-Cabin py-4 font-bold text-[#292B2D] text-center">
            Points of sale
          </p>
        </div>
        <div className=" lg:w-full md:w-full w-full lg:flex md:flex grid lg:justify-normal md:justify-normal justify-center items-center gap-4 py-2">
          <div>
            <p className=" text-[#545557] text-[19px] ">
              Vind winkels dichtbij
            </p>
          </div>
          <div className=" bg-[#545557] w-[248px] h-[45px] grid items-center ">
            <p className=" text-[#ffffff] ">Voer een straat, stad of pro</p>
          </div>
          <div className=" bg-[#FB562] flex gap-2 ">
            <div className=" w-[48px] h-[45px] bg-[#FB5621] grid items-center justify-center">
              <img
                src={require("../assets/my-location-white.png.png")}
                className=" w-[20px] h-[20px] "
                alt=""
              />
            </div>
            <div className=" w-[85.55px] h-[45px] bg-[#FB5621] grid items-center">
              <p className=" text-[#ffffff]  font-Cabin text-[18px] ">Zoeken</p>
            </div>
          </div>
          <div className=" flex items-center gap-4 ">
            <p className=" text-[#545557] text-[20px]">Afstand</p>
            <div className=" bg-[#F1F1F1] rounded-xl text-[18px] w-[166.78px] h-[44px] grid items-center">
              25 kilometers
            </div>
          </div>
        </div>
        <div className=" text-justify py-2">
          <p>CLEAR</p>

          <div className=" lg:flex md:flex  grid w-full h-full py-4 items-center gap-4 justify-center">
            <div className=" lg:w-[40%] md:w-[50%] w-full h-[500px] grid">
              <div className=" flex gap-4 my-2 py-2 rounded-sm items-center border border-[#545557]">
                <div>
                  <img
                    className=" w-[32px] h-[32px]"
                    src={require("../assets/orange.png.png")}
                    alt=""
                  />
                </div>
                <div>
                  <p className=" text-[#FC552B] text-[16px] font-Cabin ">
                    Servicepunt Almere
                  </p>
                  <p className=" text-[#FC552B] text-[16px] font-Cabin">
                    Schoutstraat 9
                  </p>
                  <p className=" text-[#545557] text-[15px] font-Cabin">
                    Almere, Flevoland 1315 EV
                  </p>
                  <p className=" text-[#FC552B] text-[15px] font-Cabin">
                    Routebeschrijving
                  </p>
                </div>
              </div>
              <div className=" flex gap-4 my-2 py-2 rounded-sm items-center border border-[#545557]">
                <div>
                  <img
                    className=" w-[32px] h-[32px]"
                    src={require("../assets/orange.png.png")}
                    alt=""
                  />
                </div>
                <div>
                  <p className=" text-[#FC552B] text-[16px] font-Cabin ">
                    Servicepunt Almere
                  </p>
                  <p className=" text-[#FC552B] text-[16px] font-Cabin">
                    Schoutstraat 9
                  </p>
                  <p className=" text-[#545557] text-[15px] font-Cabin">
                    Almere, Flevoland 1315 EV
                  </p>
                  <p className=" text-[#FC552B] text-[15px] font-Cabin">
                    Routebeschrijving
                  </p>
                </div>
              </div>
              <div className=" flex gap-4 my-2 py-2 items-center rounded-sm   border border-[#545557]">
                <div>
                  <img
                    className=" w-[32px] h-[32px]"
                    src={require("../assets/orange.png.png")}
                    alt=""
                  />
                </div>
                <div>
                  <p className=" text-[#FC552B] text-[16px] font-Cabin ">
                    Servicepunt Almere
                  </p>
                  <p className=" text-[#FC552B] text-[16px] font-Cabin">
                    Schoutstraat 9
                  </p>
                  <p className=" text-[#545557] text-[15px] font-Cabin">
                    Almere, Flevoland 1315 EV
                  </p>
                  <p className=" text-[#FC552B] text-[15px] font-Cabin">
                    Routebeschrijving
                  </p>
                </div>
              </div>
            </div>
            <div className=" lg:w-[60%] md:w-[50%] w-full">
              <img
                className=" bg-[#DDDDDD] h-[500px]"
                src={require("../assets/div.leaflet-pane.png")}

                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default pointsofsale;
