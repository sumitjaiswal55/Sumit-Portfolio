import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaHeart } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-[#0c0d11] border-t border-white/10 pt-10 pb-6">
      <div className="container mx-auto px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
          
          {/* --- BRAND SECTION --- */}
          <div className="flex flex-col items-center md:items-start">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent mb-2">
              Sumit Jaiswal
            </h2>
            <p className="text-gray-400 text-sm max-w-xs leading-relaxed">
              Full Stack Developer building seamless web & mobile experiences. Let's create something amazing together.
            </p>
          </div>

          {/* --- QUICK LINKS --- */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-white font-semibold mb-4 tracking-wide">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#home" className="hover:text-cyan-400 transition-colors">Home</a>
              </li>
              <li>
                <a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a>
              </li>
              <li>
                <a href="#skills" className="hover:text-cyan-400 transition-colors">Skills</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          {/* --- SOCIAL LINKS --- */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-white font-semibold mb-4 tracking-wide">Connect With Me</h3>
            <div className="flex gap-4">
              <a 
                href="https://github.com/sumitjaiswal55" 
                target="_blank" 
                rel="noreferrer"
                className="p-2 rounded-full bg-white/5 border border-white/10 hover:bg-cyan-500 hover:text-black hover:border-cyan-500 transition-all duration-300"
              >
                <FaGithub size={18} />
              </a>
              <a 
                href="https://linkedin.com/in/sumitjaiswal55" 
                target="_blank" 
                rel="noreferrer"
                className="p-2 rounded-full bg-white/5 border border-white/10 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-300"
              >
                <FaLinkedin size={18} />
              </a>
              <a 
                href="https://instagram.com/sumit_jaiswal55" 
                target="_blank" 
                rel="noreferrer"
                className="p-2 rounded-full bg-white/5 border border-white/10 hover:bg-pink-600 hover:text-white hover:border-pink-600 transition-all duration-300"
              >
                <FaInstagram size={18} />
              </a>
            </div>
          </div>

        </div>

        {/* --- DIVIDER LINE --- */}
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-gray-800 to-transparent my-8"></div>

        {/* --- BOTTOM COPYRIGHT --- */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Sumit Jaiswal. All rights reserved.</p>
          
          <p className="flex items-center gap-1">
            Made with <FaHeart className="text-red-500 animate-pulse" /> using React & Tailwind
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;