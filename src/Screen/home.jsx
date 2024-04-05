import React from "react";


const Home = () => {
  return (
    <div className=" overflow-x-hidden">
      <div className=" relative h-full">
        <div
          className=" bg-cover bg-center overflow-y-hidden w-full text-white h-full lg:flex md:grid grid items-center justify-center"
          style={{
            backgroundImage: `url(${require("../assets/header.png.png")})`,
          }}
        >
          <div className=" lg:px-0 md:px-10 px-8 text-center items-center lg:py-[120px] md:py-[132px] py-[124px] text-white ">
            <p className=" text-animation font-Nunito lg:text-[60px] md:text-[70px] text-[40px] text-center  ">
              The smartphone for elderly
            </p>
            
            <p className=" font-Nunito">Especially developed for semiors!</p>


            <button className=" w-[206.44px] my-4 h-[41px] bg-[#FB542C]">
              {" "}
              View the Senifone S1
            </button>

            <div className=" flex gap-6 items-center py-4 justify-center">
              <p>Onze klanten zeggen</p>
              <p>Goed</p>
              <div className=" flex">
                <img
                  className=" w-[20px] h-[20px]"
                  src={require("../assets/Group (6).png")}
                  alt=""
                />
                <img
                  className=" w-[20px] h-[20px]"
                  src={require("../assets/Group (6).png")}
                  alt=""
                />
                <img
                  className=" w-[20px] h-[20px]"
                  src={require("../assets/Group (6).png")}
                  alt=""
                />
                <img
                  className=" w-[20px] h-[20px]"
                  src={require("../assets/Group (6).png")}
                  alt=""
                />
                <img
                  className=" w-[20px] h-[20px]"
                  src={require("../assets/Vector (4).png")}
                  alt=""
                />
              </div>
              <p>4.1 uit 5 op basis van 235 reviews</p>
              <div className=" flex items-center">
                <img
                  className=" w-[4.16px] h-[2.64pxpx]"
                  src={require("../assets/Vector (2).png")}
                  alt=""
                />
                <img
                  className=" w-[58.9px] h-[12.59px]"
                  src={require("../assets/Vector (5).png")}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>

        <div className=" lg:w-full md:w-full w-full lg:px-18 md:px-14 text-justify px-10 lg:h-[200px] md:h-[full] h-full lg:flex grid md:grid-cols-2 grid-cols-1 items-center lg:justify-between md:justify-center justify-center">
          <div className=" grid lg:gap-2 md:gap-4 gap-4 lg:py-0 md:py-4 py-4">
            
            <p className=" text-[24px] font-Nunito ">Goed</p>

            <div className=" flex">
              <img
                className=" w-[20px] h-[20px]"
                src={require("../assets/Group (6).png")}
                alt=""
              />
              <img
                className=" w-[20px] h-[20px]"
                src={require("../assets/Group (6).png")}
                alt=""
              />
              <img
                className=" w-[20px] h-[20px]"
                src={require("../assets/Group (6).png")}
                alt=""
              />
              <img
                className=" w-[20px] h-[20px]"
                src={require("../assets/Group (6).png")}
                alt=""
              />
              <img
                className=" w-[20px] h-[20px]"
                src={require("../assets/Vector (4).png")}
                alt=""
              />
            </div>

            <div className=" flex lg:gap-2 md:gap-4 gap-4">
              <p className=" text-[13px] font-Nunito font-bold ">
                Gebaseerd op{" "}
              </p>
              <img
                className=" w-[30px] h-[16px] "
                src={require("../assets/strong.bold-underline (1).png")}
                alt=""
              />
            </div>

            <img
              className=" w-[106px] h-[26px] "
              src={require("../assets/Frame (2).png")}
              alt=""
            />
          </div>

          <div className=" grid lg:gap-2 md:gap-4 gap-4 text-justify lg:py-0 md:py-4 py-4">
            <div className=" flex items-center">
              <div className=" flex">
                <img
                  className=" w-[13px] h-[12px]"
                  src={require("../assets/Group (7).png")}
                  alt=""
                />
                <img
                  className=" w-[13px] h-[12px]"
                  src={require("../assets/Group (7).png")}
                  alt=""
                />
                <img
                  className=" w-[13px] h-[12px]"
                  src={require("../assets/Group (7).png")}
                  alt=""
                />
                <img
                  className=" w-[13px] h-[12px]"
                  src={require("../assets/Group (7).png")}
                  alt=""
                />
                <img
                  className=" w-[13px] h-[12px]"
                  src={require("../assets/Group (7).png")}
                  alt=""
                />
              </div>
              <div className=" flex">
                <img
                  className=" w-[14px] h-[14px]"
                  src={require("../assets/svg (2).png")}
                  alt=""
                />
                <p className=" text-[13px] font-Nunito text-[#6C6C85] ">
                  Geverifieerd
                </p>
              </div>
            </div>

            <ul>
              <li className=" lg:text-[14px] md:text-[14px] text-[16px] font-bold font-Nunito ">
                Netjes op tijd geleverd
              </li>

              <li className=" text-[13px]">
                Netjes op tijd geleverd, zelfs het <br /> hoesje voor de tweede
                keer geleverd nadat het...
              </li>
              <li>
                <div className=" flex items-center gap-2">
                  <img
                    className="w-[114px] h-[12px] "
                    src={require("../assets/div.name.png")}
                    alt=""
                  />
                  <p className=" text-[12px] font-Nunito font-bold ">
                    1 dag geleden
                  </p>
                </div>
              </li>
            </ul>
          </div>

          <div className=" grid lg:gap-2 md:gap-4 gap-4 lg:py-0 md:py-4 py-4">
            <div className=" flex items-center">
              <div className=" flex">
                <img
                  className=" w-[13px] h-[12px]"
                  src={require("../assets/Group (7).png")}
                  alt=""
                />
                <img
                  className=" w-[13px] h-[12px]"
                  src={require("../assets/Group (7).png")}
                  alt=""
                />
                <img
                  className=" w-[13px] h-[12px]"
                  src={require("../assets/Group (7).png")}
                  alt=""
                />
                <img
                  className=" w-[13px] h-[12px]"
                  src={require("../assets/Group (7).png")}
                  alt=""
                />
                <img
                  className=" w-[13px] h-[12px]"
                  src={require("../assets/Group (7).png")}
                  alt=""
                />
              </div>
              <div className=" flex">
                <img
                  className=" w-[14px] h-[14px]"
                  src={require("../assets/svg (2).png")}
                  alt=""
                />
                <p className=" text-[13px] font-Nunito text-[#6C6C85] ">
                  Geverifieerd
                </p>
              </div>
            </div>

            <ul>
              <li className=" lg:text-[14px] md:text-[14px] text-[16px] font-Nunito font-bold ">
                Ik ben uiterst tevreden over het gemak…
              </li>
              <li className=" text-[13px]">
                Ik ben uiterst tevreden over <br /> het gemak gebruik van het
                toestel, de installatie g...
              </li>

              <li>
                <div className=" flex items-center">
                  <img
                    className=" w-[107px] h-[12px] "
                    src={require("../assets/div.name (1).png")}
                    alt=""
                  />
                  <p className=" text-[12px] font-Nunito font-bold">
                    3 dagen geleden
                  </p>
                </div>
              </li>
            </ul>
          </div>

          <div className=" grid lg:gap-2 md:gap-4 gap-4 lg:py-0 md:py-4 py-4">
            <div className=" flex items-center">
              <div className=" flex">
                <img
                  className=" w-[13px] h-[12px]"
                  src={require("../assets/Group (7).png")}
                  alt=""
                />
                <img
                  className=" w-[13px] h-[12px]"
                  src={require("../assets/Group (7).png")}
                  alt=""
                />
                <img
                  className=" w-[13px] h-[12px]"
                  src={require("../assets/Group (7).png")}
                  alt=""
                />
                <img
                  className=" w-[13px] h-[12px]"
                  src={require("../assets/Group (7).png")}
                  alt=""
                />
                <img
                  className=" w-[13px] h-[12px]"
                  src={require("../assets/Group (7).png")}
                  alt=""
                />
              </div>
              <div className=" flex">
                <img
                  className=" w-[14px] h-[14px]"
                  src={require("../assets/svg (2).png")}
                  alt=""
                />
                <p className=" text-[13px] font-Nunito text-[#6C6C85] ">
                  Geverifieerd
                </p>
              </div>
            </div>

            <ul>
              <li className=" lg:text-[14px] md:text-[14px] text-[16px] font-Nunito font-bold ">Alles</li>
              <li className=" text-[13px]">
                Ik ben uiterst tevreden over het <br /> gemak gebruik van het
                toestel, de installatie g...
              </li>

              <li>
                <div className=" flex items-center lg:gap-0 md:gap-0 gap-2">
                  <img
                    className=" w-[107px] h-[12px] "
                    src={require("../assets/name (1).png")}
                    alt=""
                  />
                  <p className=" text-[12px] font-Nunito font-bold">
                    3 dagen geleden
                  </p>
                </div>
              </li>
            </ul>
          </div>

          <div className=" grid lg:gap-2 md:gap-4 gap-4 lg:py-0 md:py-4 py-4">
            <div className=" flex items-center">
              <div className=" flex">
                <img
                  className=" w-[13px] h-[12px]"
                  src={require("../assets/Group (7).png")}
                  alt=""
                />
                <img
                  className=" w-[13px] h-[12px]"
                  src={require("../assets/Group (7).png")}
                  alt=""
                />
                <img
                  className=" w-[13px] h-[12px]"
                  src={require("../assets/Group (7).png")}
                  alt=""
                />
                <img
                  className=" w-[13px] h-[12px]"
                  src={require("../assets/Group (7).png")}
                  alt=""
                />
                <img
                  className=" w-[13px] h-[12px]"
                  src={require("../assets/Group (7).png")}
                  alt=""
                />
              </div>
              <div className=" flex">
                <img
                  className=" w-[14px] h-[14px]"
                  src={require("../assets/svg (2).png")}
                  alt=""
                />
                <p className=" text-[13px] font-Nunito text-[#6C6C85] ">
                  Geverifieerd
                </p>
              </div>
            </div>

            <ul>
              <li className=" lg:text-[14px] md:text-[14px] text-[16px] font-Nunito font-bold ">
                Voor mijn 93-jarige tante een Senifone…
              </li>
              <li className=" text-[13px]">
                Ik ben uiterst tevreden over het <br /> gemak gebruik van het
                toestel, de installatie g...
              </li>

              <li>
                <div className=" flex items-center">
                  <img
                    className=" w-[107px] h-[12px] "
                    src={require("../assets/thomas.png")}
                    alt=""
                  />
                  <p className=" text-[12px] font-Nunito font-bold">
                    3 dagen geleden
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className=" lg:flex md:flex grid w-full justify-center items-center bg-[#F5F5F5] lg:px-12 md:px-10 px-8 h-full py-4 ">
          <div>
            <img
              className=" bg-cover lg:w-full md:w-[60%] w-full lg:h-[940px] md:h-full h-[400px] "
              src={require("../assets/redmi-mockup-cropped-correct_a20c0648-b6d7-43da-a5c2-e92a2dc16502.png.png")}
              alt=""
            />
          </div>
          <div className="lg:w-[585px] md:w-[40%] w-full lg:h-[388.56px] md:h-full h-[400px] items-center justify-center grid">
            <div>
              <p className=" lg:text-[32px] md:text-[32px] text-[30px] font-Cabin font-bold text-[#3C4043] ">
                Finally join in digitally
              </p>

              <p className=" lg:text-[20.25px] md:text-[20.25px] text-[18px] text-[#616467] font-Nunito">
                Sending an app, Facebook, clover jackets, <br /> viewing the  news, it
                is not only possible, but also easy!
              </p>
            </div>

            <div>
              <p className=" text-[15px] text-[#616467] font-Nunito ">New</p>

              <p className="text-[29px] text-[3C4043] font-Cabin font-bold ">
                Senifone S1
              </p>
            </div>

            <div className=" w-[585px] h-[149.59px] text-center items-center grid justify-center ">
              <div className=" flex items-center gap-4 ">
                <p className=" text-[#DF5641] text-[23px] font-semibold font-Nunito ">
                  €199,95{" "}
                </p>
                <p className=" underline text-[14px] font-semibold font-Nunito   ">
                  €299,95
                </p>
              </div>

              <button className=" bg-[#FB542C] w-[176.78x] text-white text-center text-[15px] h-[44px] px-12 py-4 my-6">
                Look at Senifone
              </button>
              <p className=" text-[16px] font-Nunito text-[#616467] ">
                More information
              </p>
            </div>
          </div>
        </div>

        <div className=" w-full lg:h-[280.59px] md:h-full lg:flex grid md:grid-cols-2 grid-cols-1 lg:justify-between md:justify-center items-center">
          <div className=" grid justify-center ">
            <img
              className=" w-[280px] h-[150px] "
              src={require("../assets/Icon_1_1_3d44fdae-d3fa-421e-bec1-a73375be0861.png.png")}
              alt=""
            />

            <div className=" text-center">
              <p className=" text-[23px] text-[#292B2D] font-Cabin font-bold ">
                Get started
              </p>

              <p className=" text-[15px] font-Nunito text[#545557] ">
                The Senifone S1 is easy to set. <br />
                Ready for use in just a few steps!
              </p>
            </div>
          </div>
          <div className=" grid justify-center">
            <img
              className=" w-[280px] h-[150px] "
              src={require("../assets/Icon_2_1_adf2a5e2-7e8e-4768-ac8f-723940114387.png.png")}
              alt=""
            />

            <p className=" text-[23px] text-[#292B2D] font-Cabin font-bold ">
              Easy operation
            </p>

            <p className=" text-[15px] font-Nunito text[#545557] ">
              {" "}
              Large buttons and <br />
              clear navigation!
            </p>
          </div>
          <div className=" grid justify-center">
            <img
              className=" w-[280px] h-[150px] "
              src={require("../assets/Icon_3_1_cb07bb45-74d4-4626-b598-b011525411a9.png.png")}
              alt=""
            />

            <p className=" text-[23px] text-[#292B2D] font-bold font-Cabin ">
              Safe environment
            </p>

            <p className=" text-[15px] font-Nunito text[#545557] ">
              Protected software, <br />
              where nothing can go wrong
            </p>
          </div>
          <div className=" grid justify-center">
            <img
              className=" w-[280px] h-[150px] "
              src={require("../assets/Icon_4_1_8e5a0208-760e-489a-8a3e-d3f8b1c63fe6.png.png")}
              alt=""
            />

            <p className=" text-[23px] text-[#292B2D] font-Cabin font-bold ">
              {" "}
              We help
            </p>

            <p className=" text-[15px] font-Nunito text[#545557] ">
              Still have questions? <br />
              Our customer service is here for you
            </p>
          </div>
        </div>

        <div className="bg-[#F5F5F5] ">
          <div className="text-center py-6">
            <p className="text-[30px] font-roboto font-bold">
              The new Senifone S1
            </p>
            <p className="text-[15px] ">
              The newest device of Senifone, with a number of groundbreaking new
              functions!
            </p>
          </div>

          <div className="lg:flex md:flex py-4 my-2 grid justify-center items-center">
            <div className="lg:w-[70%] md:w-full w-full float-left">
              <img
                className="w-[800px] lg:h-[900px]"
                src={require("../assets/3_1.png.png")}
                alt=""
              />
            </div>

            <div className="lg:w-[40%] md:w-full w-full font-Cabin font-bold text-justify lg:text-[29px] md:text-[20px] text-[20px] lg:px-12 md:px-10 px-8">
              <p className="py-2">Pre-installed apps</p>
              <p className="py-2"> Customizable SOS button</p>
              <p className="py-2">Large customizable buttons</p>
              <p className="py-2">Easy navigation</p>
              <p className="py-2">No account required</p>
              <p className="py-2">Secure software</p>
              <p className="py-2">Shortcuts for contacts</p>
              <p className="py-2">Apps categorized</p>

              <button className=" bg-[#FB542C] w-[176.78x] text-white text-center text-[15px] h-[44px] px-12 py-4 my-6">
                Look at Senifone
              </button>
            </div>
          </div>
        </div>

        <div className=" my-2 w-full h-[154.39px] items-center grid  bg-[#F5F5F5] ">
          <p className=" text-[#3C4043] text-[32px] font-bold font-Cabin font text-center">
            Een rondleiding door de Senifone...
          </p>
        </div>

        <div className=" w-[100%] lg:h-[873.55px] md:h-[full] h-full lg:flex grid md:grid-cols-2 bg-[#F5F5F5] my-4 grid-cols-1 justify-between items-center lg:px-18 md:px-14 px-10 ">
          <div className=" lg:lg:w-[30%] md:w-[w-full] w-full gap-2 ">
            <div className=" flex justify-center items-center">
              <img
                className=" w-[346.13px] h-[632.95px] "
                src={require("../assets/screen1.png.png")}
                alt=""
              />
            </div>

            <p className=" font-Cabin text-[40px] text-[#3C4043] font-bold ">
              Startscherm
            </p>
            <p className=" text-[#616467] font-Nunito text-[15px] ">
              De meest gebruikte apps staan op het startscherm. Het is het
              eerste scherm wat getoond wordt bij aanzetten, en zal weer getoond
              worden na het sluiten van een app.
            </p>
          </div>
          <div className=" lg:w-[30%] md:w-[w-full] w-full ">
            <div className=" flex justify-center items-center">
              <img
                className=" w-[346.13px] h-[632.95px] "
                src={require("../assets/screen1.png.png")}
                alt=""
              />
            </div>

            <p className=" font-Cabin text-[40px] text-[#3C4043] font-bold ">
              Mapjes
            </p>
            <p className=" text-[#616467] font-Nunito text-[15px] ">
              All pre-installed apps are categorized into folders, so everything
              is in an easy place, and no need to be searched for it.
            </p>
          </div>
          <div className=" lg:w-[30%] md:w-[w-full] w-full ">
            <div className=" flex justify-center items-center">
              <img
                className=" w-[346.13px] h-[632.95px] "
                src={require("../assets/screen1.png.png")}
                alt=""
              />
            </div>

            <p className=" font-Cabin text-[40px] text-[#3C4043] font-bold ">
              {" "}
              Preinstalled apps{" "}
            </p>
            <p className=" text-[#616467] font-Nunito text-[15px] ">
              Belangerijke apps zoals Whatsapp, Facebook, nieuws apps en nog
              veel meer zijn voorgeïnstalleerd. Natuurlijk is het ook mogelijk
              om eigen apps bij te downloaden.
            </p>
          </div>
        </div>

        <div
          className="lg:h-[500px] md:h-[full] h-full bg-cover bg-no-repeat  bg-opacity-100 lg:my-0 md:my-2 my-4 lg:py-0 md:py-2 py-8"
          style={{ backgroundImage: `url(${require("../assets/map.jpg")})` }}
        >
          <div className="flex items-center justify-center">
            <button className="bg-[#FC552B] text-[#ffffff] rounded-xl w-[200px] font-roboto my-4  h-[50px] text-center">
              See senifone in real life
            </button>
          </div>

          <div className="lg:flex md:grid-cols-2  grid lg:px-12 md:px-10 px-8 gap-4 lg:justify-between md:justify-between py-8 justify-center items-center">
            <div className="w-[300px] h-[300px] gap-2 bg-[#FC552B] text-center rounded-xl">
              <div>
                <p className="text-[20px] font-roboto font-bold text-[#ffffff] py-2">
                  Dordrecht
                </p>
                <p className="text-[14px] font-roboto text-white py-2 font-bold">
                  Monday
                </p>
                <p className="text-[12px] font-roboto text-white py-2">
                  12:00 - 17:00pm
                </p>
              </div>

              <div className="text-white font-roboto text-[10px]">
                <p className="text-[14px] py-2 font-bold">
                  Tuesday to Saturday
                </p>
                <p className="text-[12px] py-2">10:00am - 5:00pm</p>
              </div>

              <div className="text-white font-roboto text-[10px]">
                <p className="text-[14px] font-bold">Semifone Service Point</p>
                <p className="text-[12px] font-bold">Toulonsselaan 72</p>
                <p className="text-[12px] font-bold">3312 EV Dordrecht</p>
              </div>

              <button className="bg-white w-[100px] h-[30px] text-[#FC552B] my-2 rounded-xl">
                Navigate
              </button>
            </div>
            <div className="w-[300px] h-[300px] bg-[#FC552B] text-center rounded-xl">
              <div>
                <p className="text-[20px] font-roboto font-bold text-[#ffffff] py-2">
                  Amsterdam East
                </p>
                <p className="text-[14px] font-roboto text-white py-2 font-bold">
                  Monday
                </p>
                <p className="text-[12px] font-roboto text-white py-2">
                  12:00 - 17:00pm
                </p>
              </div>

              <div className="text-white font-roboto text-[10px]">
                <p className="text-[14px] py-2 font-bold">
                  Tuesday to Saturday
                </p>
                <p className="text-[12px] py-2">10:00am - 5:00pm</p>
              </div>

              <div className="text-white font-roboto text-[10px]">
                <p className="text-[14px] font-bold">Semifone Service Point</p>
                <p className="text-[12px] font-bold">Middenweg 47</p>
                <p className="text-[12px] font-bold">1098 AC Amsterdam</p>
              </div>

              <button className="bg-white w-[100px] h-[30px] text-[#FC552B] my-2 rounded-xl">
                Navigate
              </button>
            </div>
            <div className="w-[300px] h-[300px] bg-[#FC552B] text-center rounded-xl">
              <div>
                <p className="text-[20px] font-roboto font-bold text-[#ffffff] py-2">
                  Amsterdam South
                </p>
                <p className="text-[14px] font-roboto text-white py-2 font-bold">
                  Monday
                </p>
                <p className="text-[12px] font-roboto text-white py-2">
                  12:00 - 17:00pm
                </p>
              </div>

              <div className="text-white font-roboto text-[10px]">
                <p className="text-[14px] py-2 font-bold">
                  Tuesday to Saturday
                </p>
                <p className="text-[12px] py-2">10:00am - 5:00pm</p>
              </div>

              <div className="text-white font-roboto text-[10px]">
                <p className="text-[14px] font-bold">Semifone Service Point</p>
                <p className="text-[12px] font-bold">Bijlmerplein 376</p>
                <p className="text-[12px] font-bold">1102 DK Amsterdam</p>
              </div>

              <button className="bg-white w-[100px] h-[30px] text-[#FC552B] my-2 text-center rounded-xl">
                Navigate
              </button>
            </div>
            <div className="w-[300px] :h-[300px] bg-[#FC552B] text-center rounded-xl">
              <div>
                <p className="text-[20px] font-roboto font-bold text-[#ffffff] py-2">
                  Purmerend
                </p>
                <p className="text-[14px] font-roboto text-white py-2 font-bold">
                  Monday
                </p>
                <p className="text-[12px] font-roboto text-white py-2">
                  12:00 - 17:00pm
                </p>
              </div>

              <div className="text-white font-roboto text-[10px]">
                <p className="text-[14px] py-2 font-bold">
                  Tuesday to Saturday
                </p>
                <p className="text-[12px] py-2">10:00am - 5:00pm</p>
              </div>

              <div className="text-white font-roboto text-[10px]">
                <p className="text-[14px] font-bold">Semifone Service Point</p>
                <p className="text-[12px] font-bold">Hoogstraat 34</p>
                <p className="text-[12px] font-bold">1441 BC Purmerend</p>
              </div>

              <button className="bg-white w-[100px] h-[30px] text-[#FC552B] my-2 rounded-xl">
                Navigate
              </button>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <button className="bg-[#FC552B] text-[#ffffff] w-[108px] font-roboto h-[40px] text-center">
              Stores
            </button>
          </div>
        </div>

        <div className=" lg:flex md:grid grid justify-between lg:px-18 md:px-14 px-10 py-6 items-center w-[100%] lg:h-[486px] md:h-full h-full bg-[rgb(245,245,245)]">
          <div className=" lg:w-[542px] md:w-full  w-full lg:h-[192.42px] md:h-full h-full py-4 text-justify">
            <div className=" flex">
              <img
                className=" w-[16px] h-[16px]"
                src={require("../assets/star(2).png")}
                alt=""
              />
              <img
                className=" w-[16px] h-[16px]"
                src={require("../assets/star(2).png")}
                alt=""
              />
              <img
                className=" w-[16px] h-[16px]"
                src={require("../assets/star(2).png")}
                alt=""
              />
              <img
                className=" w-[16px] h-[16px]"
                src={require("../assets/star(2).png")}
                alt=""
              />
              <img
                className=" w-[16px] h-[16px]"
                src={require("../assets/star(2).png")}
                alt=""
              />
            </div>

            <p className=" text-[32px] font-Cabin font-bold text-[#3C4043] ">
              With the Senifone you choose one of the most recent showpieces in
              the world of senior smartphones.
            </p>

            <p className=" font-Nunito text-[15px] text-[#616467]">
              — Technologieadar.nl
            </p>
          </div>~``

          <div className=" lg:flex grid md:grid-cols-2 gap-4 grid-cols-1">
            <img
              className="lg:w-[200px] md:w-[400px] w-full h-[200px]"
              src={require("../assets/div.testimonial__image-wrapper.png")}
              alt=""
            />
            <img
              className="lg:w-[200px] md:w-[400px] w-full h-[200px]"
              src={require("../assets/div.testimonial__image-wrapper (1).png")}
              alt=""
            />
            <img
              className="lg:w-[200px] md:w-[400px] w-full h-[200px]"
              src={require("../assets/div.testimonial__image-wrapper (2).png")}
              alt=""
            />
            <img
              className="lg:w-[200px] md:w-[400px] w-full h-[200px]"
              src={require("../assets/custom_resized_53e35f75-17ba-43c7-aca2-acebd9d21e32.jpg.png")}
              alt=""
            />
          </div>
        </div>

        <div
          className="  bg-cover bg-center overflow-y-hidden opacity-85 w-full text-white h-full lg:flex md:grid grid items-center justify-center"
          style={{
            backgroundImage: `url(${require("../assets/div.background-image.png")})`,
          }}
        >
          <div className="lg:px-0 md:px-10 px-8 text-center items-center lg:py-[120px] md:py-[132px] py-[124px] text-white">
            <p className=" text-[60px] font-Cabin text-white font-bold">
              To ask?
            </p>
            <p className=" text-[20.25px] font-Nunito text-white">
              We are happy to watch with you!
            </p>

            <button className=" w-[206.44px] my-4 h-[41px] bg-[#FB542C]">
              Contact us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
