import profileImage from '../assets/sumit.jpg';
import { motion } from 'framer-motion';

const CvIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 h-5 w-5">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
    <polyline points="14 2 14 8 20 8"></polyline>
    <line x1="16" y1="13" x2="8" y2="13"></line>
    <line x1="16" y1="17" x2="8" y2="17"></line>
    <polyline points="10 9 9 9 8 9"></polyline>
  </svg>
);

const About = () => {
  return (
    <section className="relative w-full min-h-screen bg-[#0c0d11] overflow-hidden flex items-center justify-center py-10 md:py-20">
      
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-10 md:gap-16">
        
        {/* --- LEFT SIDE: IMAGE --- */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-5/12 flex justify-center md:justify-end"
        >
          <div className="relative group">
            {/* Theme Change: Purple hata ke Blue/Cyan kiya */}
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-500"></div>
            
            <img
              src={profileImage}
              alt="Sumit Jaiswal"
              className="relative w-64 md:w-96 rounded-2xl shadow-2xl border-2 border-gray-800 object-cover transform transition-transform duration-500 hover:scale-[1.02]"
            />
          </div>
        </motion.div>

        {/* --- RIGHT SIDE: CONTENT --- */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full md:w-7/12 text-center md:text-left text-white"
        >
          <div className="flex flex-col items-center md:items-start">
            
            <p className="text-lg font-semibold text-cyan-400 tracking-wide mt-6 md:mt-0">HI THERE! —</p>

            <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-6">
              About <span className="text-blue-500">Me</span>
            </h1>

            <p className="text-gray-300 text-sm md:text-lg leading-relaxed max-w-2xl text-justify md:text-left">
              I started my journey in tech with curiosity for how websites and apps are built. Over time, I explored both frontend and backend technologies.
              <br /><br />
              Currently, I focus on the <span className="text-cyan-400 font-semibold">MERN stack</span> and exploring mobile app development.
            </p>

            {/* --- PERSONAL INFO GRID --- */}
            <div className="grid grid-cols-2 gap-y-4 gap-x-2 w-full max-w-2xl mt-8 pt-8 border-t border-gray-800 text-left">
              
              <div className="flex flex-col">
                <strong className="text-cyan-400 text-sm md:text-base">Name:</strong>
                <span className="text-gray-300 text-xs md:text-base">Sumit Jaiswal</span>
              </div>

              <div className="flex flex-col">
                <strong className="text-cyan-400 text-sm md:text-base">Email:</strong>
                <span className="text-gray-300 text-[10px] md:text-base break-all">sumitjaiswal7055@gmail.com</span>
              </div>

              <div className="flex flex-col">
                <strong className="text-cyan-400 text-sm md:text-base">Age:</strong>
                <span className="text-gray-300 text-xs md:text-base">20 Years</span>
              </div>

              <div className="flex flex-col">
                <strong className="text-cyan-400 text-sm md:text-base">Phone:</strong>
                <span className="text-gray-300 text-xs md:text-base">+91 7084525212</span>
              </div>

              <div className="flex flex-col">
                <strong className="text-cyan-400 text-sm md:text-base">Role:</strong>
                <span className="text-gray-300 text-xs md:text-base">Full Stack Dev</span>
              </div>

              <div className="flex flex-col">
                <strong className="text-cyan-400 text-sm md:text-base">Location:</strong>
                <span className="text-gray-300 text-xs md:text-base">India</span>
              </div>

            </div>

            {/* --- BUTTONS --- */}
            <div className="flex flex-row gap-4 mt-10 w-full justify-center md:justify-start">
              <a href="/resume">
                {/* CV Button: Updated Gradient to Cyan-Blue */}
                <button className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-2 md:px-8 md:py-3 text-sm md:text-base font-semibold text-white shadow-lg transition-transform duration-200 hover:scale-105 hover:shadow-cyan-500/30">
                  <CvIcon />
                  CV
                </button>
              </a>
              
              <a href="/contact">
                <button className="rounded-full border-2 border-cyan-400 px-6 py-2 md:px-8 md:py-3 text-sm md:text-base font-semibold text-cyan-400 transition-all duration-200 hover:scale-105 hover:bg-cyan-400 hover:text-black">
                  Hire Me
                </button>
              </a>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default About;