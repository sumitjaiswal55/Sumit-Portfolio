import sumitImg from "../assets/sumit.jpg";
import { IoLocationOutline, IoCallOutline, IoBagSharp, IoCodeSlash } from "react-icons/io5";
import { TypeAnimation } from "react-type-animation";

const Home = () => {
  const skills = [
    { name: "Full Stack Developer" },
    { name: "MERN Stack" },
    { name: "React Native" },
    { name: "System Design" },
    { name: "Problem Solver" },
  ];

  // Modified details to include your Research Paper as a Bento element
  const details = [
    {
      name: "Location",
      data: "Nagpur, MH, India",
      icon: <IoLocationOutline />,
      gridSpan: "col-span-1",
    },
    {
      name: "Research Author",
      data: "AJTA Journal 2025",
      icon: <IoCodeSlash />,
      gridSpan: "col-span-1",
    },
    {
      name: "Expertise",
      data: "Full Stack Dev",
      icon: <IoBagSharp />,
      gridSpan: "col-span-1",
    },
    {
      name: "Contact",
      data: "+91 7084525212",
      icon: <IoCallOutline />,
      gridSpan: "col-span-1",
    },
  ];

  return (
    <div className="flex flex-wrap-reverse lg:flex-nowrap text-white relative w-full min-h-screen bg-[#0c0d11] bg-[radial-gradient(circle_at_50%_50%,_rgba(6,182,212,0.1)_0%,_rgba(0,0,0,1)_100%)] overflow-hidden items-center justify-center gap-[4rem] px-6 lg:px-20">
      

      {/* --- RIGHT SECTION: IMAGE SECTION (Kept original as requested) --- */}
    
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

      {/* --- LEFT SECTION: TEXT & BENTO GRID --- */}
      <div className="heroDescription max-w-[800px] z-20">
        <h1 className="text-[3rem] lg:text-[4rem] mb-[0.4rem] font-bold leading-tight">
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
            Sumit Jaiswal
          </span>
        </h1>

        <div className="text-[1.2rem] font-medium text-gray-300 mb-6">
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

        {/* Skills Pills */}
        <div className="flex flex-wrap gap-[0.8rem] mt-[1.4rem]">
          {skills.map((link) => (
            <p
              key={link.name}
              className="border border-cyan-500/50 py-2 px-4 rounded-full text-[0.85rem] font-medium text-cyan-100 hover:border-cyan-400 hover:bg-cyan-500/10 transition-all cursor-default"
            >
              {link.name}
            </p>
          ))}
        </div>

        {/* --- BENTO GRID STYLE CARDS --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10">
          {details.map((link, index) => (
            <div
              key={index}
              className={`group flex items-center gap-4 p-4 
              bg-white/5 border border-white/10 rounded-2xl backdrop-blur-md
              transition-all duration-300 hover:border-cyan-400/50 
              hover:shadow-[0_0_20px_rgba(34,211,238,0.2)]`}
            >
              <div className="text-cyan-400 text-[1.8rem] drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]">
                {link.icon}
              </div>
              <div>
                <p className="text-[0.7rem] uppercase tracking-widest text-gray-500 font-bold">
                  {link.name}
                </p>
                <p className="text-[0.95rem] text-white font-medium group-hover:text-cyan-200 transition-colors">
                  {link.data}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>


    </div>
  );
};

export default Home;