import React from "react";
import Navbar from "../navbar/Navbar";
import Circle from "../circle/Circle";

const items = [
  {
    id: 1,
    title: "Sourdough Bread Workshop",
    img: "/public/img3.png",
  },
  {
    id: 2,
    title: "Sourdough Pizza Catering",
    img: "/public/img4.png",
  },
  {
    id: 3,
    title: "Sourdough Masterclass",
    img: "/public/img5.png",
  },
];

function Hero() {
  return (

    //                               <================================>         <================================>
    //                                                                HERO SECTION
    //                               <================================>         <================================> 
    <div className="w-[100%] h-screen pt-7 bg-[#FFFBF5]">
      <Navbar />
      <div className="flex justify-center items-center m-auto  w-[90%] h-[80%] absolute top-8 left-1/2 -translate-x-1/2 z-[1]">
        <Circle width="500px" height="500px">
          <Circle width="400px" height="400px">
            <Circle width="300px" height="300px">
              <Circle width="200px" height="200px">
                <Circle width="100px" height="100px">
                  {/* InnerMost Circle */}
                </Circle>
              </Circle>
            </Circle>
          </Circle>
        </Circle>
      </div>

      <div>
        <img
          className="absolute  bottom-0 md:-bottom-[120px] z-40 w-[450px]"
          src="/public/img2.png"
          alt=""
        />
      </div>

      {/* Hero section Details */}
      <div className="flex justify-between relative z-40  w-[85%] m-auto">
        <div className="mt-20 flex w-full flex-[5]  ml-6 relative">
          <h1 className="ml-10 w-[100%]  text-[50px] font-extrabold leading-[56px] text-[#0F172A] before:block before:content-[url('/public/img6.png')] before:w-[100px] before:h-[100px] before:absolute before:-top-10 before:-left-3">
            Master the Art <br /> of <span className="text-[#AE8240]">Sourdough</span>
          </h1>
        </div>
        <div className="flex flex-col justify-center items-center absolute w-[450px] h-[500px] left-1/2 -translate-x-1/2">
          <img src="/public/chef.png" className="w-full h-[500px]" alt="" />
          <img src="/public/img1.png" className="w-[200px] -mt-[110px]" alt="" />
        </div>
        <div className="flex flex-[2] flex-col mt-20 ">
          <div className=" flex flex-col items-start gap-4 text-[#475569] text-[18px] md:text-base -ml-20">
            <p>
              Unleash Your Inner Bread Artist With Our Exquisite Sourdough Bread
              And Pizza Course
            </p>
            <button className="bg-[#AE8240] py-[14px] px-7 rounded-[30px] text-white font-bold text-base">
              Join Now
            </button>
          </div>
          <div className="flex flex-col gap-2 mt-4">
            {items.map((item) => (
              <div
                key={item.id}
                className="borderborder-[#F1F5F9] bg-[#F7F2EC] rounded-2xl flex items-center justify-between gap-2 p-1 "
              >
                <div className=" flx-[1]">
                  <img src={item.img} alt="" className="w-[100%] " />
                </div>
                <div className="flex-[2] ">
                  <h2 className="text-black text-[14px] font-bold ">
                    {item.title}
                  </h2>
                  <div className="w-[32px] h[32px] flex justify-center items-center ">
                    <button className="rounded-full bg-[#AE8240]  ">
                      <img
                        src="/public/arrow.png"
                        alt=""
                        className="w-[24px] h-[24px]"
                      />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>


// <========================> HERO SECTION END <========================>
  );
}

export default Hero;
