import React from "react";

const SenifoneOne = () => {
  return (
    <div className=" overflow-x-hidden">
      <div className=" h-full w-[100%] relative lg:flex  justify-between md:grid grid py-4 lg:px-20 md:px-14 px-10">
        <div className=" lg:w-[60%] md:w-[full] w-full">
          <img
            className=" lg:w-[856px] md:w-[800px] w-[500px] lg:h-[856px]"
            src={require("../assets/div.main-image.png")}
            alt=""
          />

          <div className=" lg:flex md:grid-cols-2 grid ">
            <img
              className=" w-[138.22px] h-[138.22px]"
              src={require("../assets/div.thumbnail__media.png")}
              alt=""
            />
            <img
              className=" w-[138.22px] h-[138.22px]"
              src={require("../assets/div.thumbnail__media (1).png")}
              alt=""
            />
            <img
              className=" w-[138.22px] h-[138.22px]"
              src={require("../assets/div.thumbnail__media (2).png")}
              alt=""
            />
            <img
              className=" w-[138.22px] h-[138.22px]"
              src={require("../assets/div.thumbnail__media (3).png")}
              alt=""
            />
          </div>
        </div>

        <div className=" lg:w-[30%] md:w-full w-full lg:text-justify md:text-justify text-justify justify-center items-center">
          <p className=" font-Cabin py-4 font-bold lg:text-[32px] md:text-[32px] text-[30px]">
            Senifone S1 - Seniors <br />
            Smartphone
          </p>

          <div className=" flex items-center gap-2 py-4">
            <div className=" flex">
              <img
                className=" w-[18.46px] h-[18.44px]"
                src={require("../assets/Group (8).png")}
                alt=""
              />
              <img
                className=" w-[18.46px] h-[18.44px]"
                src={require("../assets/Group (8).png")}
                alt=""
              />
              <img
                className=" w-[18.46px] h-[18.44px]"
                src={require("../assets/Group (8).png")}
                alt=""
              />
              <img
                className=" w-[18.46px] h-[18.44px]"
                src={require("../assets/Group (8).png")}
                alt=""
              />
              <img
                className=" w-[18.46px] h-[18.44px]"
                src={require("../assets/Group (8).png")}
                alt=""
              />
            </div>

            <p className=" text-[#191919] font-bold text-[15px]">50 reviews </p>

            <img
              className=" w-[4.99px] h-[4.99px]"
              src={require("../assets/span#readMoreArrow (1).png")}
              alt=""
            />
          </div>

          <div>
            <p className=" text-[26px] py-2 font-Cabin font-bold text-[#292B2D]">
              Senifone S1 - The smartphone specially developed for seniors
            </p>

            <p className=" text-[15px] font-Nunito text-[#545557] py-4">
              Senifone S1 is equipped with special software, which is
              characterized by large buttons, user-friendly software & apps, SOS
              button, pre-installed apps, such as WhatsApp, Facebook and much
              more!
            </p>
          </div>

          <div className=" flex items-center gap-4 py-2">
            <p className=" font-Nunito text-[23px] text-[#DF5641]">
              €199,95 EUR{" "}
            </p>

            <p className=" font-Nunito text-[23px] font-semibold text-[#545557]">
              €299,95{" "}
            </p>
            <p className=" font-Nunito text-[15px] text-[#545557]">
               adviesprijs
            </p>
          </div>

          <div className=" py-4">
            <div className=" flex items-center gap-2">
              <img
                className=" w-[15px] h-[15px]"
                src={require("../assets/.png")}
                alt=""
              />
              <p className=" font-Nunito text-[15px] text-[#545557]">
                {" "}
                Gratis verzending
              </p>
            </div>
            <div className=" flex items-center gap-2">
              <img
                className=" w-[15px] h-[15px]"
                src={require("../assets/.png")}
                alt=""
              />
              <p className=" font-Nunito text-[15px] text-[#545557]">
                {" "}
                30 dagen bedenktijd
              </p>
            </div>
            <div className=" flex items-center gap-2">
              <img
                className=" w-[15px] h-[15px]"
                src={require("../assets/.png")}
                alt=""
              />
              <p className=" font-Nunito text-[15px] text-[#545557]">
                {" "}
                Voor 17:00 besteld, morgen in huis!
              </p>
            </div>
          </div>

          <div className=" py-2">
            <button className=" bg-[#FB542C] lg:w-[458px] md:w-[400px] w-[300px] h-[48px] my-8  text-[15px] font-Nunito text-white">
              Add to Cart
            </button>
          </div>

          <div className=" w-[458px] h-[54px]">
            <hr />
            <div className=" flex justify-between items-center w-[458px] h-[54px]">
              <div className=" flex">
                <img
                  className=" w-[18px] h-[18px]"
                  src={require("../assets/svg.icon.png")}
                  alt=""
                />
                <p className=" text-[15px] font-Nunito font-semibold text-[#545557]">
                  Get started
                </p>
              </div>

              <div>
                <img
                  className=" w-[11px] h-[11px]"
                  src={require("../assets/svg.feather.png")}
                  alt=""
                />
              </div>
            </div>

            <hr />
          </div>
          <div className=" w-[458px] h-[54px]">
            <hr className=" font-semibold" />
            <div className=" flex justify-between items-center w-[458px] h-[54px]">
              <div className=" flex">
                <img
                  className=" w-[18px] h-[18px]"
                  src={require("../assets/svg.icon (1).png")}
                  alt=""
                />
                <p className=" text-[15px] font-Nunito font-semibold text-[#545557]">
                  2 jaar garantie
                </p>
              </div>

              <div>
                <img
                  className=" w-[11px] h-[11px]"
                  src={require("../assets/svg.feather.png")}
                  alt=""
                />
              </div>
            </div>

            <hr />
          </div>
          <div className=" w-[458px] h-[54px]">
            <hr className=" font-semibold" />
            <div className=" flex justify-between items-center w-[458px] h-[54px]">
              <div className=" flex">
                <img
                  className=" w-[18px] h-[18px]"
                  src={require("../assets/svg.icon (2).png")}
                  alt=""
                />
                <p className=" text-[15px] font-Nunito font-semibold text-[#545557]">
                  Technische ondersteuning
                </p>
              </div>

              <div>
                <img
                  className=" w-[11px] h-[11px]"
                  src={require("../assets/svg.feather.png")}
                  alt=""
                />
              </div>
            </div>

            <hr />
          </div>

          <div>
            <p className=" text-[18px] font-Cabin font-bold text-[#292B2D] py-4">
              Bescherm Senifone en maak hem opvallend!
            </p>

            <div className="flex justify-between items-center text-justify py-2">
              <div>
                <img
                  className=" lg:w-[70px] h-[87.5px]"
                  src={require("../assets/SENIFONESTRAP.png (1).png")}
                  alt=""
                />
              </div>
              <div>
                <p className=" text-[#FC552B] font-Nunito text-[15px]">
                  Senifone Telefoonhouder met nek koord
                </p>
                <div className=" flex items-center gap-2 text-justify">
                  <p className=" text-[15px] font-Nunito font-semibold  text-[#545557]">
                    €6,95
                  </p>
                  <p className=" text-[12px] font-Nunito text-[#545557] font-semibold">
                    €9,95
                  </p>
                </div>
              </div>

              <div>
                <img
                  className=" w-[18px] h-[18px]"
                  src={require("../assets/svg.feather.png")}
                  alt=""
                />
              </div>
            </div>

            {/* 2 */}
            <div className=" lg:flex md: grid-cols-2 grid  justify-between items-center py-2">
              <div>
                <img
                  className=" w-[70px] h-[87.5px]"
                  src={require("../assets/SD32GB.jpg.png")}
                  alt=""
                />
              </div>
              <div>
                <p className=" text-[#FC552B]  font-Nunito text-[15px]">
                  Micro SD card - 32GB
                </p>
                <div>
                  <p className=" text-[15px] font-Nunito font-semibold  text-[#545557]">
                    €13,95
                  </p>
                </div>
              </div>

              <div>
                <img
                  className=" w-[18px] h-[18px]"
                  src={require("../assets/svg.feather.png")}
                  alt=""
                />
              </div>
            </div>

            {/* 3 */}
            <div className=" lg:flex md: grid-cols-2 grid justify-between items-center py-2">
              <div>
                <img
                  className=" w-[70px] h-[87.5px]"
                  src={require("../assets/SD64GB.jpg.png")}
                  alt=""
                />
              </div>
              <div>
                <p className=" text-[#FC552B] font-Nunito text-[15px]">
                  Micro SD card - 64GB
                </p>
                <div>
                  <p className=" text-[15px] font-Nunito font-semibold  text-[#545557]">
                    €16,95
                  </p>
                </div>
              </div>

              <div>
                <img
                  className=" w-[18px] h-[18px]"
                  src={require("../assets/svg.feather.png")}
                  alt=""
                />
              </div>
            </div>
            {/* 4 */}
            <div className=" lg:flex md: grid-cols-2 grid justify-between items-center py-2">
              <div>
                <img
                  className=" w-[70px] h-[87.5px]"
                  src={require("../assets/div.product-mini-block__image.png")}
                  alt=""
                />
              </div>
              <div>
                <p className=" text-[#FC552B] font-Nunito text-[15px]">
                  Boekhoesje with space for passes - Black
                </p>
                <div className=" flex items-center gap-2">
                  <p className=" text-[15px] font-Nunito font-semibold  text-[#545557]">
                    €24,95
                  </p>
                  <p className=" text-[12px] font-Nunito text-[#545557] font-semibold">
                    €29,90
                  </p>
                </div>
              </div>

              <div>
                <img
                  className=" w-[18px] h-[18px]"
                  src={require("../assets/svg.feather.png")}
                  alt=""
                />
              </div>
            </div>

            {/* 5 */}

            <div className=" lg:flex md: grid-cols-2 grid justify-between items-center py-2">
              <div>
                <img
                  className=" w-[70px] h-[87.5px]"
                  src={require("../assets/div.product-mini-block__image (2).png")}
                  alt=""
                />
              </div>
              <div>
                <p className=" text-[#FC552B] font-Nunito text-[15px]">
                  Boekhoesje with Space for Passes - Red
                </p>
                <div className=" flex items-center gap-2">
                  <p className=" text-[15px] font-Nunito font-semibold  text-[#545557]">
                    €24,95
                  </p>
                  <p className=" text-[12px] font-Nunito text-[#545557] font-semibold">
                    €29,90
                  </p>
                </div>
              </div>

              <div>
                <img
                  className=" w-[18px] h-[18px]"
                  src={require("../assets/svg.feather.png")}
                  alt=""
                />
              </div>
            </div>

            {/* 6 */}
            <div className=" lg:flex md: grid-cols-2 grid justify-between items-center py-2">
              <div>
                <img
                  className=" w-[70px] h-[87.5px]"
                  src={require("../assets/div.product-mini-block__image (3).png")}
                  alt=""
                />
              </div>
              <div>
                <p className=" text-[#FC552B] font-Nunito text-[15px]">
                  Book cover with space for passes - Gray
                </p>
                <div className=" flex items-center gap-2">
                  <p className=" text-[15px] font-Nunito font-semibold  text-[#545557]">
                    €6,95
                  </p>
                  <p className=" text-[12px] font-Nunito text-[#545557] font-semibold">
                    €9,95
                  </p>
                </div>
              </div>

              <div>
                <img
                  className=" w-[18px] h-[18px]"
                  src={require("../assets/svg.feather.png")}
                  alt=""
                />
              </div>
            </div>

            {/* 7 */}
            <div className=" lg:flex md: grid-cols-2 grid justify-between items-center py-2">
              <div>
                <img
                  className=" w-[70px] h-[87.5px]"
                  src={require("../assets/div.product-mini-block__image (4).png")}
                  alt=""
                />
              </div>
              <div>
                <p className=" text-[#FC552B] font-Nunito text-[15px]">
                  Book cover with space for passes - Brown
                </p>
                <div className=" flex items-center gap-2">
                  <p className=" text-[15px] font-Nunito font-semibold  text-[#545557]">
                    €24,95
                  </p>
                  <p className=" text-[12px] font-Nunito text-[#545557] font-semibold">
                    €29,90
                  </p>
                </div>
              </div>

              <div>
                <img
                  className=" w-[18px] h-[18px]"
                  src={require("../assets/svg.feather.png")}
                  alt=""
                />
              </div>
            </div>

            {/* 8 */}
            <div className=" lg:flex md: grid-cols-2 grid justify-between items-center py-2">
              <div>
                <img
                  className=" w-[70px] h-[87.5px]"
                  src={require("../assets/div.product-mini-block__image (5).png")}
                  alt=""
                />
              </div>
              <div>
                <p className=" text-[#FC552B] font-Nunito text-[15px]">
                  Boekhoesje with space for passes - Blue
                </p>
                <div className=" flex items-center gap-2">
                  <p className=" text-[15px] font-Nunito font-semibold  text-[#545557]">
                    €24,95
                  </p>
                  <p className=" text-[12px] font-Nunito text-[#545557] font-semibold">
                    €29,90
                  </p>
                </div>
              </div>

              <div>
                <img
                  className=" w-[18px] h-[18px]"
                  src={require("../assets/svg.feather.png")}
                  alt=""
                />
              </div>
            </div>

            {/* 9 */}
            <div className=" lg:flex md: grid-cols-2 grid justify-between items-center py-2">
              <div>
                <img
                  className=" w-[70px] h-[87.5px]"
                  src={require("../assets/filters_format_webp__upscale.jpg.png")}
                  alt=""
                />
              </div>
              <div>
                <p className=" text-[#FC552B] font-Nunito text-[15px]">
                  Senifone S1 Screen Protector
                </p>
                <div className=" flex items-center gap-2">
                  <p className=" text-[15px] font-Nunito font-semibold  text-[#545557]">
                    €9,95
                  </p>
                  <p className=" text-[12px] font-Nunito text-[#545557] font-semibold">
                    €14,95
                  </p>
                </div>
              </div>

              <div>
                <img
                  className=" w-[18px] h-[18px]"
                  src={require("../assets/svg.feather.png")}
                  alt=""
                />
              </div>
            </div>
            {/* 10 */}
            <div className=" lg:flex md: grid-cols-2 grid justify-between items-center py-2">
              <div>
                <img
                  className=" w-[70px] h-[87.5px]"
                  src={require("../assets/div.product-mini-block__image (6).png")}
                  alt=""
                />
              </div>
              <div>
                <p className=" text-[#FC552B] font-Nunito text-[15px]">
                  Transparent case + screen protector - bundle
                </p>
                <div className=" flex items-center gap-2">
                  <p className=" text-[15px] font-Nunito font-semibold  text-[#545557]">
                    €26,95
                  </p>
                  <p className=" text-[12px] font-Nunito text-[#545557] font-semibold">
                    €34,95
                  </p>
                </div>
              </div>

              <div>
                <img
                  className=" w-[18px] h-[18px]"
                  src={require("../assets/svg.feather.png")}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" h-full lg:px-20 md:px-14 px-10">
        <div className=" lg:flex md:grid flex lg:justify-between md:justify-center justify-between">
          <div className=" lg:flex md:grid grid items-center gap-2">
            <div className=" flex">
              <img
                className=" w-[18.46px] h-[18.44px]"
                src={require("../assets/Group (8).png")}
                alt=""
              />
              <img
                className=" w-[18.46px] h-[18.44px]"
                src={require("../assets/Group (8).png")}
                alt=""
              />
              <img
                className=" w-[18.46px] h-[18.44px]"
                src={require("../assets/Group (8).png")}
                alt=""
              />
              <img
                className=" w-[18.46px] h-[18.44px]"
                src={require("../assets/Group (8).png")}
                alt=""
              />
              <img
                className=" w-[18.46px] h-[18.44px]"
                src={require("../assets/Group (8).png")}
                alt=""
              />
            </div>

            <div className=" flex items-center gap-2">
              <p className=" text-[#1B1B21] text-[24px]">4.5</p>
              <p className=" text-[14px] text-[#5C5C70]">/ 5</p>
              <p className=" text-[14px] text-[#5C5C70]">•</p>
              <p className=" text-[#1B1B21] text-[14px] font-bold ">
                50 reviews
              </p>
            </div>
          </div>

          <div>
            <img
              className=" w-[115px] h-[28.28px]"
              src={require("../assets/Frame (2).png")}
              alt=""
            />
          </div>
        </div>

        <hr />

        <div className=" text-justify grid gap-4 h-[201.23px]">
          <p className=" text-[14px] text-[#5C5C70]">
            Astrid Metman-van Reijn, 4 dagen geleden
          </p>
          <div className=" flex">
            <img
              className=" w-[18.46px] h-[18.44px]"
              src={require("../assets/Group (8).png")}
              alt=""
            />
            <img
              className=" w-[18.46px] h-[18.44px]"
              src={require("../assets/Group (8).png")}
              alt=""
            />
            <img
              className=" w-[18.46px] h-[18.44px]"
              src={require("../assets/Group (8).png")}
              alt=""
            />
            <img
              className=" w-[18.46px] h-[18.44px]"
              src={require("../assets/Group (8).png")}
              alt=""
            />
            <img
              className=" w-[18.46px] h-[18.44px]"
              src={require("../assets/Group (8).png")}
              alt=""
            />
          </div>

          <div className=" w-[576.64px] h-[72px] text-[14px] text-[#1B1B21]">
            Een bedrijf functioneert natuurlijk bij de kwaliteit van het product
            dat wordt aangeboden. Evenals de prijs natuurlijk, maar bovenal bij
            de gratie van haar medewerkers. En zoals ik hen heb toegezegd: die
            Kerstgratificatie zit gebeiteld!!
          </div>
          <div className=" flex  py-2 items-center gap-2">
            <img
              className=" w-[12px] h-[12px]"
              src={require("../assets/pseudo (1).png")}
              alt=""
            />
            <p className=" text-[13px] text-[#5C5C70] ">
              Geverifieerd — verzameld door Senifone
            </p>
          </div>
        </div>

        <hr />

        <div className=" text-justify grid gap-4 h-[177.23px]">
          <p className=" text-[14px] text-[#5C5C70]">Klant, 4 dagen geleden</p>
          <div className=" flex">
            <img
              className=" w-[18.46px] h-[18.44px]"
              src={require("../assets/Group (8).png")}
              alt=""
            />
            <img
              className=" w-[18.46px] h-[18.44px]"
              src={require("../assets/Group (8).png")}
              alt=""
            />
            <img
              className=" w-[18.46px] h-[18.44px]"
              src={require("../assets/Group (8).png")}
              alt=""
            />
            <img
              className=" w-[18.46px] h-[18.44px]"
              src={require("../assets/Group (8).png")}
              alt=""
            />
            <img
              className=" w-[18.46px] h-[18.44px]"
              src={require("../assets/Group (8).png")}
              alt=""
            />
          </div>

          <div className=" w-[531.8px] h-[48px] text-[14px] text-[#1B1B21]">
            We hebben de telefoon meteen retour gestuurd. Te ingewikkeld voor
            mijn moeder met alzheimer
          </div>
          <div className=" flex  py-2 items-center gap-2">
            <img
              className=" w-[12px] h-[12px]"
              src={require("../assets/pseudo (1).png")}
              alt=""
            />
            <p className=" text-[13px] text-[#5C5C70] ">
              Geverifieerd — verzameld door Senifone
            </p>
          </div>
        </div>

        <hr />
        <div className=" text-justify grid gap-4 h-[200px]">
          <p className=" text-[14px] text-[#5C5C70]">Klaas, 6 dagen geleden</p>
          <div className=" flex">
            <img
              className=" w-[18.46px] h-[18.44px]"
              src={require("../assets/Group (8).png")}
              alt=""
            />
            <img
              className=" w-[18.46px] h-[18.44px]"
              src={require("../assets/Group (8).png")}
              alt=""
            />
            <img
              className=" w-[18.46px] h-[18.44px]"
              src={require("../assets/Group (8).png")}
              alt=""
            />
            <img
              className=" w-[18.46px] h-[18.44px]"
              src={require("../assets/Group (8).png")}
              alt=""
            />
            <img
              className=" w-[18.46px] h-[18.44px]"
              src={require("../assets/Group (8).png")}
              alt=""
            />
          </div>

          <div className=" w-[355px] h-[24px] text-[14px] text-[#1B1B21]">
            Handige telefoon voor senioren met heldere en eenvoudige navigatie.
          </div>
          <div className=" flex py-2 items-center gap-2">
            <img
              className=" w-[12px] h-[12px]"
              src={require("../assets/pseudo (1).png")}
              alt=""
            />
            <p className=" text-[13px] text-[#5C5C70] ">
              Geverifieerd — verzameld door Senifone
            </p>
          </div>
        </div>
        <hr />
        <div className=" text-justify grid gap-4 h-[153.23px]">
          <p className=" text-[14px] text-[#5C5C70]">Jetsy, 27 april</p>
          <div className=" flex">
            <img
              className=" w-[18.46px] h-[18.44px]"
              src={require("../assets/Group (8).png")}
              alt=""
            />
            <img
              className=" w-[18.46px] h-[18.44px]"
              src={require("../assets/Group (8).png")}
              alt=""
            />
            <img
              className=" w-[18.46px] h-[18.44px]"
              src={require("../assets/Group (8).png")}
              alt=""
            />
            <img
              className=" w-[18.46px] h-[18.44px]"
              src={require("../assets/Group (8).png")}
              alt=""
            />
            <img
              className=" w-[18.46px] h-[18.44px]"
              src={require("../assets/Group (8).png")}
              alt=""
            />
          </div>

          <div className=" w-[355px] h-[24px] text-[14px] text-[#1B1B21]">
            Makkelijk in gebruik
          </div>
        </div>
      </div>

      <div className=" w-[100%] my-4 lg:px-2">
        <div className=" lg:flex md:flex grid bg-[#F5F5F5]">
          <div className=" lg:w-[50%] md:w-[50%] w-full">
            <img
              className=" h-full"
              src={require("../assets/FP4-Green-Screen-Lianne-10080x720.png.png")}
              alt=""
            />
          </div>
          <div className=" lg:w-[40%] md:w-[50%] w-full lg:p-10 grid justify-center items-center">
            <div className=" flex items-center py-2 gap-4">
              <img
                className=" w-[29.2px] h-[29px]"
                src={require("../assets/image.png")}
                alt=""
              />
              <p className=" text-[29px] font-Cabin font-bold text-[#3C4043]">
                {" "}
                Voorgeïnstalleerde apps
              </p>
            </div>
            <div className=" flex items-center py-2 gap-4">
              <img
                className=" w-[29.2px] h-[29px]"
                src={require("../assets/image2.png")}
                alt=""
              />
              <p className=" text-[29px] font-Cabin font-bold text-[#3C4043]">
                Instelbare SOS-knop
              </p>
            </div>
            <div className=" flex items-center py-2 gap-4">
              <img
                className=" w-[29.2px] h-[29px]"
                src={require("../assets/image3.png")}
                alt=""
              />
              <p className=" text-[29px] font-Cabin font-bold text-[#3C4043]">
                Grote duidelijke knoppen
              </p>
            </div>
            <div className=" flex items-center py-2 gap-4">
              <img
                className=" w-[29.2px] h-[29px]"
                src={require("../assets/image4.png")}
                alt=""
              />
              <p className=" text-[29px] font-Cabin font-bold text-[#3C4043]">
                Beveiligde software
              </p>
            </div>
            <div className=" flex items-center py-2 gap-4">
              <img
                className=" w-[29.2px] h-[29px]"
                src={require("../assets/image5.png")}
                alt=""
              />
              <p className=" text-[29px] font-Cabin font-bold text-[#3C4043]">
                Sneltoetsen voor contacten
              </p>
            </div>
            <div className=" flex items-center py-2 gap-4">
              <img
                className=" w-[29.2px] h-[29px]"
                src={require("../assets/image6.png")}
                alt=""
              />
              <p className=" text-[29px] font-Cabin font-bold text-[#3C4043]">
                Geen installatie nodig
              </p>
            </div>
            <div className=" flex items-center py-2 gap-4">
              <img
                className=" w-[29.2px] h-[29px]"
                src={require("../assets/image7.png")}
                alt=""
              />
              <p className=" text-[29px] font-Cabin font-bold text-[#3C4043]">
                Apps gecategoriseerd
              </p>
            </div>
            <div className=" flex items-center py-2 gap-4">
              <img
                className=" w-[29.2px] h-[29px]"
                src={require("../assets/image8.png")}
                alt=""
              />
              <p className=" text-[29px] font-Cabin font-bold text-[#3C4043]">
                Geen account vereist
              </p>
            </div>
            <div className=" flex items-center py-2 gap-4">
              <img
                className=" w-[29.2px] h-[29px]"
                src={require("../assets/image9.png")}
                alt=""
              />
              <p className=" text-[29px] font-Cabin font-bold text-[#3C4043]">
                Eenvoudige navigatie
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className=" w-full grid justify-center items-center h-[412.3px] py-4">
        <div className=" lg:w-[500px]">
          <div>
            <p className=" text-[26px] font-Cabin font-bold text-justify text-[#292B2D] py-4">
              Frequently Asked Questions
            </p>
          </div>

          <div className=" flex justify-between items-center py-4">
            <p className=" text-[19.5px] font-Nunito text-[#545557]">
              Kan ik mijn gehoorapparaat gebruiken?
            </p>

            <img
              className=" w-[14px] h-[14px]"
              src={require("../assets/svg.feather.png")}
              alt=""
            />
          </div>
          <hr />
          <div className=" flex justify-between items-center py-4">
            <p className=" text-[19.5px] font-Nunito text-[#545557]">
              Can I download my own apps?
            </p>

            <img
              className=" w-[14px] h-[14px]"
              src={require("../assets/svg.feather.png")}
              alt=""
            />
          </div>
          <hr />
          <div className=" flex justify-between items-center py-4">
            <p className=" text-[19.5px] font-Nunito text-[#545557]">
              Can I keep my current SIM card?
            </p>

            <img
              className=" w-[14px] h-[14px]"
              src={require("../assets/svg.feather.png")}
              alt=""
            />
          </div>
          <hr />
          <div className=" flex justify-between items-center py-4">
            <p className=" text-[19.5px] font-Nunito text-[#545557]">
              What do I receive in the box?
            </p>

            <img
              className=" w-[14px] h-[14px]"
              src={require("../assets/svg.feather.png")}
              alt=""
            />
          </div>
          <hr />
          <div className=" flex justify-between items-center py-4">
            <p className=" text-[19.5px] font-Nunito text-[#545557]">
              Can I try the Senifone S1?
            </p>

            <img
              className=" w-[14px] h-[14px]"
              src={require("../assets/svg.feather.png")}
              alt=""
            />
          </div>
        </div>
      </div>

      <div className=" lg:flex md:grid grid justify-between lg:px-20 md:px-14 px-10 py-6 items-center w-[100%] lg:h-[400px] md:h-full h-full bg-[rgb(245,245,245)]">
        <div className=" lg:w-[542px] md:w-full w-full lg:h-[192.42px] md:h-full h-full text-justify ">
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

          <p className=" text-[32px] font-Cabin font-bold text-[#3C4043]">
            With the Senifone you choose one of the most recent showpieces in
            the world of senior smartphones.
          </p>

          <p className=" font-Nunito text-[15px] text-[#616467]">
            — Technologieadar.nl
          </p>
        </div>

        <div className=" grid lg:flex gap-2 md:grid-cols-2 grid-cols-1">
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
          {/* <img className='lg:w-[200px] md:w-[400px] w-full h-[200px]' src={require('../assets/custom_resized_53e35f75-17ba-43c7-aca2-acebd9d21e32.jpg.png')} alt="" /> */}
        </div>
      </div>

      <div className=" w-full lg:px-18 md:px-14 px-10 grid justify-center py-4 text-justify">
        <div className=" flex justify-between gap-14 items-center h-[48.39px] py-4">
          <div>
            <p className=" text-[19.5px] font-Nunito text-[#545557]">
              Specifications
            </p>
          </div>

          <div>
            <p className=" text-[32px] font-Cabin font-bold text-[#292B2D]">
              Technical details
            </p>
          </div>
        </div>
        <div className=" flex items-center justify-between gap-14  py-4">
          <div>
            <p className=" text-[19.5px] font-Nunito text-[#545557]">Storage</p>
          </div>

          <div className=" grid">
            <p className=" text-[32px] font-Cabin font-bold text-[#292B2D]">
              32GB
            </p>

            <p className=" text-[15px] font-Nunito text-[#545557]">
              To expand with Micro SD card.
            </p>
          </div>
        </div>
        <div className=" flex items-center justify-between gap-14 py-4">
          <div>
            <p className=" text-[19.5px] font-Nunito text-[#545557]">Screen</p>
          </div>

          <div>
            <p className=" text-[32px] font-Cabin font-bold text-[#292B2D]">
              6.5 Inch
            </p>
          </div>
        </div>

        <div className="">
          <img
            className=" w-[700px] h-[502.06px]"
            src={require("../assets/sizing.png.png")}
            alt=""
          />
        </div>

        <div className=" flex justify-between gap-14 items-center py-4 text-justify">
          <div>
            <p className=" text-[19.5px] font-Nunito text-[#545557]">Battery</p>
          </div>

          <div className=" grid">
            <p className=" text-[32px] font-Cabin font-bold text-[#292B2D]">
              5000 mAh battery capacity
            </p>

            <p className=" text-[15px] font-Nunito text-[#545557]">
              Enough for the whole day, without charging.
            </p>
          </div>
        </div>

        <div className=" flex items-center justify-between gap-14 py-4">
          <div>
            <p className=" text-[19.5px] font-Nunito text-[#545557]">
              Antennas
            </p>
          </div>

          <div>
            <p className=" text-[32px] font-Cabin font-bold text-[#292B2D] text-justify">
              WiFi - 4G - GPS - Bluetooth 5.0
            </p>
          </div>
        </div>
        <div className=" flex items-center justify-between gap-14 py-4">
          <div>
            <p className=" text-[19.5px] font-Nunito text-[#545557]">
              At the front
            </p>
          </div>

          <div>
            <p className=" text-[32px] font-Cabin font-bold text-[#292B2D] text-justify">
              Cameras
            </p>
          </div>
        </div>

        <div className=" py-4">
          <img
            className=" w-[800px] h-[308.63px]"
            src={require("../assets/cameraimg_7b5a2815-8017-4b6a-9e97-9a826f82f99d.png.png")}
            alt=""
          />
        </div>

        <div className=" flex items-center justify-between gap-14 py-4">
          <div>
            <p className=" text-[19.5px] font-Nunito text-[#545557]">Sim</p>
          </div>

          <div>
            <p className=" text-[32px] font-Cabin font-bold text-[#292B2D] text-justify">
              Nano-SIM
            </p>
          </div>
        </div>
        <div className=" flex justify-between gap-14 py-4 items-center">
          <div>
            <p className=" text-[19.5px] font-Nunito text-[#545557]">Sim</p>
          </div>

          <div className=" grid items-center">
            <p className=" text-[32px] font-Cabin font-bold text-[#292B2D] text-justify">
              Black
            </p>

            <p className="text-[15px] font-Nunito text-[#545557]">
              Can be adjusted with our colorful covers.
            </p>
          </div>
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
  );
};

export default SenifoneOne;
