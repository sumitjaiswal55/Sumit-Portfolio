import React from "react";
import sumitImg from "../assets/sumit.jpg";
import { IoLocationOutline } from "react-icons/io5";
import { IoCallOutline } from "react-icons/io5";
import { IoBagSharp } from "react-icons/io5";
import { TypeAnimation } from "react-type-animation";

const Home = () => {
  const skills = [
    { name: "Full Stack Developer" },
    { name: "MERN Stack" },
    { name: "React Native" },
    { name: "System Design" },
    { name: "Problem Solver" },
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
    // Background updated to Deep Black with subtle Cyan/Blue radial gradient
    <div className="flex flex-wrap text-white relative w-full min-h-screen bg-[#0c0d11] bg-[radial-gradient(circle_at_50%_50%,_rgba(6,182,212,0.1)_0%,_rgba(0,0,0,1)_100%)] overflow-hidden items-center justify-evenly gap-[2rem] px-4">
      
      {/* --- IMAGE SECTION --- */}
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

        {/* Outer Ring: Cyan color with low opacity */}
        <div className="absolute inset-0 rounded-full border-[3px] border-dashed border-cyan-500/40 animate-[spin_12s_linear_infinite]"></div>
        
        {/* Inner Image: Border Updated to Cyan */}
        <img
          src={sumitImg}
          alt="Profile"
          className="h-[300px] w-[300px] rounded-full relative z-10 border-[3px] border-cyan-400 shadow-[0_0_30px_rgba(34,211,238,0.3)]"
        />
      </div>

      {/* --- TEXT SECTION --- */}
      <div className="heroDescription max-w-[700px]">
        <h1 className="text-[3rem] mb-[0.4rem] font-bold leading-tight">
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
            Sumit Jaiswal
          </span>
        </h1>

        <div className="text-[1.1rem] font-medium text-gray-300">
          <TypeAnimation
            sequence={[
              "Full Stack Engineer | Frontend Developer | Tech Explorer",
              1000,
            ]}
            wrapper="span"
            speed={50}
            style={{ display: 'inline-block' }}
            repeat={0}
            cursor={true}
            className="text-cyan-200"
          />
        </div>

        {/* Skills Buttons: Updated to Cyan Theme */}
        <div className="flex flex-wrap gap-[0.8rem] mt-[1.4rem]">
          {skills.map((link) => (
            <p
              key={link.name}
              className="border border-cyan-500/50 py-2 px-4 rounded-full text-[0.95rem] w-fit text-cyan-100 hover:border-cyan-400 hover:bg-cyan-500/10 hover:text-white hover:shadow-[0_0_15px_rgba(34,211,238,0.5)] transition-all cursor-pointer"
            >
              {link.name}
            </p>
          ))}
        </div>

        {/* --- BOTTOM CARDS (GLASS + GLOW) --- */}
        <div className="flex flex-wrap sm:flex-nowrap gap-[1rem] mt-[2rem] items-center justify-center">
          {details.map((link, index) => (
            <div
              key={index}
              className="group flex flex-col items-center justify-center w-full sm:w-[200px] gap-[.5rem] p-4 
              bg-white/5 border border-white/10 rounded-[12px] backdrop-blur-md
              transition-all duration-300 
              hover:-translate-y-1 
              hover:border-cyan-400 
              hover:shadow-[0_0_25px_rgba(34,211,238,0.4)]"
            >
              <p className="flex flex-col items-center justify-center font-bold text-center">
                <span className="text-cyan-400 text-[2rem] mb-2 drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]">
                  {link.icon}
                </span>
                <span className="text-white group-hover:text-cyan-200 transition-colors">
                  {link.name}
                </span>
              </p>
              <p className="text-[14px] text-gray-400 text-center group-hover:text-white transition-colors">
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