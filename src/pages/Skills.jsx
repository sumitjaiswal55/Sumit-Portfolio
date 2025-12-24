import { 
  FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaBootstrap, FaNodeJs, FaGitAlt, FaGithub 
} from "react-icons/fa";
import { 
  SiTailwindcss, SiNextdotjs, SiExpress, SiMongodb, SiFramer, SiMysql, SiReact 
} from "react-icons/si";

const skillsData = [
  { name: 'HTML', percentage: '92%', icon: <FaHtml5 className="text-orange-600" size={64} /> },
  { name: 'CSS', percentage: '80%', icon: <FaCss3Alt className="text-blue-600" size={64} /> },
  { name: 'JavaScript', percentage: '85%', icon: <FaJsSquare className="text-yellow-400" size={64} /> },
  { name: 'React JS', percentage: '99%', icon: <FaReact className="text-sky-400" size={64} /> },
  { name: 'Tailwind CSS', percentage: '89%', icon: <SiTailwindcss className="text-cyan-400" size={64} /> },
  { name: 'Bootstrap', percentage: '93%', icon: <FaBootstrap className="text-purple-600" size={64} /> },
  { name: 'Framer Motion', percentage: '99%', icon: <SiFramer className="text-blue-500" size={64} /> },
  { name: 'Next JS', percentage: '89%', icon: <SiNextdotjs className="text-black" size={64} /> },
  { name: 'Node JS', percentage: '93%', icon: <FaNodeJs className="text-green-600" size={64} /> },
  { name: 'Express JS', percentage: '93%', icon: <SiExpress className="text-black" size={64} /> },
  { name: 'MongoDB', percentage: '99%', icon: <SiMongodb className="text-green-500" size={64} /> },
  { name: 'SQL (MySQL)', percentage: '89%', icon: <SiMysql className="text-blue-700" size={64} /> },
  { name: 'React Native', percentage: '93%', icon: <SiReact className="text-sky-400" size={64} /> },
  { name: 'Git', percentage: '90%', icon: <FaGitAlt className="text-orange-500" size={64} /> },
  { name: 'GitHub', percentage: '90%', icon: <FaGithub className="text-black" size={64} /> },
];

const Skills = () => {

  const customCss = `
    @keyframes scroll {
      0% { transform: translateX(0); }
      100% { transform: translateX(-100%); }
    }
    
    .scroller {
      display: flex;
    }

    .scroller-inner {
      display: flex;
      animation: scroll 15s linear infinite;
    }

    .scroller-inner:hover {
      animation-play-state: paused;
    }
  `;

  return (
    <>
      <style>{customCss}</style>

      <section className="w-full py-20 flex  justify-center bg-[#0c0d11] min-h-screen gap-3 ">
        <div className="container mx-auto flex flex-col items-center text-center   text-white">
          <h2 className="mb-4 text-4xl font-bold">My Skills</h2>
          <p className="mb-12 max-w-2xl">
            We put your ideas and thus your wishes in the form of a unique web project that inspires you and your customers.
          </p>
          <div 
            className="w-full max-w-6xl mx-auto overflow-hidden"
            style={{ maskImage: 'linear-gradient(to right, transparent, black 20%, black 80%, transparent)' }}
          >
            <div className="scroller">
              
              {/* List #1 */}
              <div className="scroller-inner">
                {skillsData.map((skill, index) => (
                  <div key={`a-${index}`} className="flex-shrink-0 flex flex-col items-center justify-center gap-4 rounded-2xl bg-white p-6 shadow-lg mx-4" style={{ width: '180px' }}>
                    <div className="h-24 w-24 flex items-center justify-center">{skill.icon}</div>
                    <p className="text-xl font-bold text-gray-800">{skill.percentage}</p>
                    <p className="font-semibold text-purple-600">{skill.name}</p>
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