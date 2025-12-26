import React from "react";
import sumitImg from "../assets/sumit.jpg";
import { IoLocationOutline } from "react-icons/io5";
import { IoCallOutline } from "react-icons/io5";
import { IoBagSharp } from "react-icons/io5";
import { TypeAnimation } from "react-type-animation";

const Home = () => {
  const skills = [
    { name: "AI Enthusiast" },
    { name: "ML Engineer" },
    { name: "Deep Learning Expert" },
    { name: "Computer Vision Research" },
    { name: "Application Developer" },
  ];

  const details = [
    {
      name: "Location",
      data: "Nagpur, MH, India",
      icon: <IoLocationOutline />,
    },
    {
      name: "Expertise",
      data: "Full Stack Dev",
      icon: <IoBagSharp />,
    },
    { name: "Contact", data: "+91 7084525212", icon: <IoCallOutline /> },
  ];

  return (
    <div className="flex text-white relative w-full min-h-screen bg-black bg-[radial-gradient(circle_at_30%_30%,_#1e293b_0%,_#0a0a0a_50%,_#000000_100%)] overflow-hidden flex items-center justify-evenly gap-[2rem]">
      <div
        className="relative h-[320px] w-[320px] flex items-center justify-center"
        style={{ animation: "float 6s ease-in-out infinite" }}
      >
        <style>{`
      @keyframes float {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-20px); }
      }
    `}</style>

        <div className="absolute inset-0 rounded-full border-[3px] border-dashed border-cyan-400 animate-[spin_12s_linear_infinite]"></div>
        <img
          src={sumitImg}
          alt="Profile"
          className="h-[300px] w-[300px] rounded-full relative z-10 border-[3px] border-[#00ffe0]"
        />
      </div>
      <div className="heroDescription max-w-[700px]">
          <h1 className="text-[3rem] mb-[0.4rem] font-bold">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
              Sumit Jaiswal
            </span>
          </h1>

          <div className="text-[0.95rem] font-medium text-gray-200">
        <TypeAnimation
          sequence={[
            "Full Stack Engineer | Frontend Developer | Tech Explorer | Application Developer   ",
            1000,
          ]}
          wrapper="span" speed={50} style={{ display: 'inline-block' }} repeat={0} cursor={true}/>
      </div>
        <div className="flex flex-wrap gap-[0.8rem] mt-[1.4rem]">
          {skills.map((link) => (
            <p
              key={link.name}
              className="border-[1px] border-blue-500 py-2 px-4 rounded-[20px] text-[0.95rem] w-fit hover:border-transparent hover:bg-gradient-to-r hover:from-blue-500 hover:to-cyan-400 hover:text-white hover:shadow-[0_0_20px_rgba(59,130,246,0.7)] transition-all cursor-pointer"
            >
              {link.name}
            </p>
          ))}
        </div>
        <div className="flex gap-[.8rem] mt-[1.4rem] item-center justify-center ">
          {details.map((link, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center w-full gap-[.8rem] bg-gray-800/20  rounded-[12px] hover:shadow-[0_0_20px_rgba(59,130,246,0.7)]"
            >
              <p className="flex item-center  justify-center pt-2 font-bold item-center">
                <span className="justify-center item-center text-cyan-400 text-[1.5rem] space-3">
                  {link.icon}
                </span>
                {link.name}
              </p>
              <p className="pb-2 py-2 item-center justify-center text-[15px]">
                {link.data}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
