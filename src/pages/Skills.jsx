import React from "react";
import { 
  FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaBootstrap, FaNodeJs, FaGitAlt, FaGithub 
} from "react-icons/fa";
import { 
  SiTailwindcss, SiNextdotjs, SiExpress, SiMongodb, SiFramer, SiMysql, SiReact 
} from "react-icons/si";

const skillsData = [
  { name: 'HTML', percentage: '92%', icon: <FaHtml5 className="text-orange-600" size={50} /> },
  { name: 'CSS', percentage: '80%', icon: <FaCss3Alt className="text-blue-600" size={50} /> },
  { name: 'JavaScript', percentage: '85%', icon: <FaJsSquare className="text-yellow-400" size={50} /> },
  { name: 'React JS', percentage: '99%', icon: <FaReact className="text-sky-400" size={50} /> },
  { name: 'Tailwind CSS', percentage: '89%', icon: <SiTailwindcss className="text-cyan-400" size={50} /> },
  { name: 'Bootstrap', percentage: '93%', icon: <FaBootstrap className="text-purple-500" size={50} /> }, // Brand color exception
  { name: 'Framer Motion', percentage: '90%', icon: <SiFramer className="text-pink-500" size={50} /> },
  { name: 'Next JS', percentage: '89%', icon: <SiNextdotjs className="text-white" size={50} /> },
  { name: 'Node JS', percentage: '93%', icon: <FaNodeJs className="text-green-500" size={50} /> },
  { name: 'Express JS', percentage: '93%', icon: <SiExpress className="text-white" size={50} /> },
  { name: 'MongoDB', percentage: '99%', icon: <SiMongodb className="text-green-500" size={50} /> },
  { name: 'SQL (MySQL)', percentage: '89%', icon: <SiMysql className="text-blue-500" size={50} /> },
  { name: 'React Native', percentage: '93%', icon: <SiReact className="text-cyan-400" size={50} /> },
  { name: 'Git', percentage: '90%', icon: <FaGitAlt className="text-orange-500" size={50} /> },
  { name: 'GitHub', percentage: '95%', icon: <FaGithub className="text-white" size={50} /> },
];

const Skills = () => {

  // Custom CSS for Infinite Scrolling
  const customCss = `
    @keyframes scroll {
      0% { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }
    
    .scroller {
      display: flex;
      overflow: hidden;
      width: 100%;
      mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
    }

    .scroller-inner {
      display: flex;
      width: max-content;
      animation: scroll 25s linear infinite;
    }

    .scroller-inner:hover {
      animation-play-state: paused;
    }
  `;

  return (
    <>
      <style>{customCss}</style>

      {/* Main Section Background */}
      <section className="w-full py-10 md:py-20 flex justify-center bg-[#0c0d11] min-h-screen gap-3 overflow-hidden bg-[radial-gradient(circle_at_50%_100%,_rgba(6,182,212,0.1)_0%,_rgba(0,0,0,1)_100%)]">
        
        <div className="container mx-auto flex flex-col items-center text-center text-white px-4">
          
          {/* --- HEADING (Cyan-Blue Gradient) --- */}
          <div className="flex flex-col items-center justify-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              My{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(6,182,212,0.5)]">
                Skills
              </span>
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full"></div>
            
            <p className="mt-6 max-w-2xl text-sm md:text-base text-gray-400">
              Transforming ideas into reality using a robust and modern technology stack.
            </p>
          </div>

          {/* --- SCROLLER --- */}
          <div className="w-full max-w-7xl mx-auto overflow-hidden relative mt-4">
            <div className="scroller">
              <div className="scroller-inner gap-6 md:gap-8 px-4 py-8">
                
                {/* Loop twice for infinite effect */}
                {[...skillsData, ...skillsData].map((skill, index) => (
                  <div 
                    key={index} 
                    className="group relative flex-shrink-0 flex flex-col items-center justify-center gap-4 rounded-2xl bg-white/5 border border-white/10 p-6 shadow-lg w-40 md:w-52 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-500/50 hover:shadow-[0_0_30px_rgba(6,182,212,0.2)]"
                  >
                    
                    {/* Icon with Hover Glow */}
                    <div className="h-16 w-16 md:h-20 md:w-20 flex items-center justify-center rounded-full bg-black/30 group-hover:bg-black/50 transition-all shadow-inner">
                      <div className="transform transition-transform duration-300 group-hover:scale-110">
                        {skill.icon}
                      </div>
                    </div>
                    
                    <div className="w-full">
                      {/* Name & Percentage */}
                      <div className="flex justify-between items-center w-full mb-2">
                        <p className="text-sm md:text-base font-semibold text-gray-200 group-hover:text-white">
                          {skill.name}
                        </p>
                        <p className="text-xs md:text-sm font-bold text-cyan-400">
                          {skill.percentage}
                        </p>
                      </div>

                      {/* Progress Bar (New Feature) */}
                      <div className="w-full h-1.5 bg-gray-700 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full transition-all duration-1000 group-hover:shadow-[0_0_10px_rgba(6,182,212,0.8)]"
                          style={{ width: skill.percentage }}
                        ></div>
                      </div>
                    </div>

                  </div>
                ))}

              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default Skills;