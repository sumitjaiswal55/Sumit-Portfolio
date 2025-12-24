import React from "react";
import sumitImg from "../assets/sumit.jpg";
import { IoLocationOutline } from "react-icons/io5";
import { IoCallOutline } from "react-icons/io5";
import { IoBagSharp } from "react-icons/io5";


const Home = () => {
  const skills = [
    { name: "AI Enthusiast" },
    { name: "ML Engineer" },
    { name: "Deep Learning Expert" },
    { name: "Computer Vision Research" },
    { name: "Application Developer" },
  ];

  const details = [
    { name: "Location", data: "Nagpur, MH, India", icon: <IoLocationOutline /> },
    { name: "Expertise", data: "Web Dev, App Dev, Full Stack Dev", icon: <IoBagSharp /> },
    { name: "Contact", data: "+91 7084525212", icon: <IoCallOutline /> },
  ];

  return (
    <div className="flex text-white relative w-full min-h-screen bg-black bg-[radial-gradient(circle_at_30%_30%,_#1e293b_0%,_#0a0a0a_50%,_#000000_100%)] overflow-hidden flex items-center justify-evenly gap-[2rem]">
      <div className="heroImage h-[300px] w-[300px] bg-blue-500 rounded-[50%] flex items-center justify-center">
        <img
          src={sumitImg}
          alt=""
          className="h-[290px] w-[290px] rounded-[50%] justify-center item-center "
        />
      </div>
      <div className="heroDescription">
        <h1 className="text-[3rem] mb-[0.4rem] font-bold">
          Hi, I'm Sumit Jaiswal
        </h1>
        <p className="text-[.95rem]">
          Full Stack Engineer | Frontend Developer | Tech Explorer | Application
          Developer
        </p>
        <div className="grid grid-cols-3 flex gap-[.8rem] flex-wrap: wrap mt-[1.4rem] max-w-[700px]">
          {skills.map((link) => (
            <p className="border-[1px] py-2 px-4 border-blue-500 rounded-[20px] text-size-[.95rem] hover:bg-blue-500">
              {link.name}
            </p>
          ))}
        </div>
        <div className="grid grid-cols-3 flex gap-[.8rem] flex-wrap: wrap mt-[1.4rem] item-center justify-center">
          {details.map((link, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center w-full gap-[.8rem] bg-gray-800/20 rounded-[30px]" 
            >
              <h1 className="flex item-center  justify-center py-2 px-2 rounded-[10px] font-bold item-center">
               <span className="justify-center item-center text-blue-500 text-[1.5rem] space-3">{link.icon}</span>  {link.name}
              </h1>
              <p className="py-2 px-4 flex item-center justify-center text-[15px]">{link.data}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
