import React from "react";

function Footer() {
  return (
    <div className=" lg:w-full md:w-full w-full lg:h-full md:h-full py-6 h-full bg-[#3C4043] items-center lg:px-14 md:px-12 px-10 ">
      <div className=" lg:flex lg:w-full md:w-full w-full justify-between grid md:grid-cols-2 grid-cols-1">
        <ul className=" grid text-[15px] py-2 text-[#D2DBE5]">
          <li className=" text-[18px] font-bold py-4 text-white">About Senifone</li>
          <li>Senifone B.V.</li>
          <li>KVK 87288729</li>
          <li>Trasmolenlaan 12</li>
          <li>3447 GZ Woerden</li>
          <li>+31 85 060 65 89</li>
          <li>(No return address)</li>

        </ul>


        <ul className=" grid text-[15px] text-[#D2DBE5] py-2">
          <li className=" text-[18px] py-4 font-bold text-[#ffffff]">
            Quick links
          </li>

          <li>Home</li>
          <li>Artifone s1</li>
          <li>accessories</li>
          <li>Frequently Asked Questions</li>
          <li>Customer service</li>
          <li>Senifone S1 instruction booklet</li>
        </ul>

        <ul className=" grid text-[15px] text-[#D2DBE5] py-2">
          <li className=" text-[18px] py-4 font-bold text-[#ffffff]">
            Customer service
          </li>

          <li>Frequently Asked Questions</li>
          <li>Return</li>
          <li>Pay</li>
          <li>Warranty and repair</li>
          <li>Status of my order</li>
        </ul>

        <ul className=" grid text-[15px] text-[#D2DBE5]">
          <li className=" text-[18px] py-4 font-bold text-[#ffffff]">
            Newsletter
          </li>

          <li className=" py-2">
            Receive a 5% discount, and always the latest <br />
            products and offers in your mailbox.
          </li>

          <input
            className=" grid my-4 border-none pl-4 text-[#545557] text-[15px] bg-[#ffffff] w-[330px] h-[30px] "
            type="email"
            placeholder="Enter email"
            name=""
            id=""
          />
          <button className=" my-4 text-[#FC552B] text-[15px] w-[100px] h-[30px] bg-[#ffffff]">
            sign up
          </button>
        </ul>
      </div>

      <div className=" grid lg:w-full md:w-full w-full py-6 gap-4">
        <div className=" flex items-center">
          <img
            className=" w-[30px] h-[20px]"
            src={require("../assets/Vector (2).png")}
            alt=""
          />
          <img
            className=" w-[100px] h-[20px]"
            src={require("../assets/Vector (5).png")}
            alt=""
          />
        </div>

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

        <div className=" flex items-center gap-4">
          <p className=" text-[#ffffff] text-[18px]">TrustScore</p>
          <p className=" text-[#D2DBE5] text-[15px] ">4.1 | 235 reviews</p>
        </div>
      </div>
      <div className=" grid gap-6 lg:w-full md:w-full w-full justify-center items-center">
        <div className=" flex gap-4">
          <img
            className=" w-[20px] h-[20px] "
            src={require("../assets/Frame (1).png")}
            alt=""
          />
          <img
            className=" w-[20px] h-[20px] "
            src={require("../assets/svg.section-footer__payment-icon.png")}
            alt=""
          />
          <img
            className=" w-[20px] h-[20px] "
            src={require("../assets/svg.section-footer__payment-icon (1).png")}
            alt=""
          />
          <img
            className=" w-[20px] h-[20px] "
            src={require("../assets/svg.section-footer__payment-icon (2).png")}
            alt=""
          />
          <img
            className=" w-[20px] h-[20px] "
            src={require("../assets/svg.section-footer__payment-icon (3).png")}
            alt=""
          />
          <img
            className=" w-[20px] h-[20px] "
            src={require("../assets/svg.section-footer__payment-icon (4).png")}
            alt=""
          />
        </div>

        <div className=" text-[12px] text-[#ffffff] w-[458.52px] h-[10px] flex gap-4">
          <p>Terms and Conditions</p>
          <p>Privacy / cookies</p>
          <p>Reimbursement policy</p>
          <p>French (FR)</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;



