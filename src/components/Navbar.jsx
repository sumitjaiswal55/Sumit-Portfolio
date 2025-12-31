import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scroll Detection Logic
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Mobile Menu Scroll Lock
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "Skills", path: "/skills" }, // Gallery/Certificates ko combine ya dropdown mein daal sakte ho agar space kam ho
    { name: "Certificates", path: "/certificates" },
    { name: "Resume", path: "/resume" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    // NAVBAR CONTAINER
    // fixed: Screen pe chipak jayega
    // transition-all: Background color change smooth hoga
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out ${
        scrolled
          ? "bg-[#0c0d11]/80 backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.1)] border-b border-white/5 py-3" // Scrolled Style
          : "bg-transparent py-5" // Top Style
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        {/* --- LOGO SECTION --- */}
        <div className="flex items-center gap-3 cursor-pointer group">
          <div className="relative flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border border-cyan-500/30 group-hover:border-cyan-400 transition-colors">
            <h1 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
              SJ
            </h1>
          </div>
          <div className="hidden sm:block">
            <p className="font-bold text-white text-lg leading-tight group-hover:text-cyan-400 transition-colors">
              Sumit Jaiswal
            </p>
            <p className="text-gray-400 text-[10px] tracking-wider uppercase">
              Full Stack Dev
            </p>
          </div>
        </div>

        {/* --- DESKTOP MENU --- */}
        <div className="hidden lg:flex items-center gap-8">
          <ul className="flex items-center gap-6">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `relative text-sm font-medium transition-all duration-300 group
                  ${isActive ? "text-cyan-400" : "text-gray-300 hover:text-white"}`
                }
              >
                {/* Link Name */}
                {link.name}

                {/* Animated Bottom Line (Magic Line) */}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-cyan-400 to-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </NavLink>
            ))}
          </ul>
        </div>

        {/* --- HAMBURGER BUTTON (Mobile) --- */}
        <button
          className="lg:hidden text-white focus:outline-none p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <svg className="w-7 h-7 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>

      </div>

      {/* --- MOBILE FULL SCREEN MENU --- */}
      <div
        className={`fixed inset-0 bg-[#0c0d11]/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center transition-all duration-500 ease-in-out ${
          isOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full pointer-events-none"
        }`}
      >
        {/* Background Glow for Mobile Menu */}
        <div className="absolute top-[-20%] right-[-20%] w-80 h-80 bg-blue-600/20 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-[-20%] left-[-20%] w-80 h-80 bg-cyan-600/20 rounded-full blur-[100px] pointer-events-none"></div>

        <ul className="flex flex-col items-center gap-8 relative z-10">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `text-2xl font-bold tracking-wide transition-all duration-300
                ${isActive ? "text-cyan-400 scale-110" : "text-gray-400 hover:text-white"}`
              }
            >
              {link.name}
            </NavLink>
          ))}
          
          <NavLink to="/contact" onClick={() => setIsOpen(false)} className="mt-4">
            <button className="px-8 py-3 rounded-full border border-cyan-500/50 text-cyan-400 text-sm font-bold uppercase tracking-widest hover:bg-cyan-500 hover:text-black transition-all">
              Let's Talk
            </button>
          </NavLink>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;