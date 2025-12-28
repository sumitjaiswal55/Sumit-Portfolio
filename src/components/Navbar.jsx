import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Logic: Jab menu khule, to background scroll band kar do (Professional feel ke liye)
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
    { name: "Gallery", path: "/gallery" },
    { name: "Skills", path: "/skills" },
    { name: "Certificates", path: "/certificates" },
    { name: "Blog", path: "/blog" },
    { name: "Resume", path: "/resume" },
    { name: "About Me", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    // Main Nav ko 'relative' aur 'z-50' diya taaki Logo aur Button hamesha upar dikhein
    <nav className="relative z-50 bg-black text-white h-16 flex items-center justify-between px-8">
      
      <div className="flex items-center gap-3 cursor-pointer z-50">
        <h1 className="text-[30px] text-cyan-400">SJ</h1>
        <div>
          <p>Sumit Jaiswal</p>
          <p className="text-gray-300 text-[10px]">Full Stack Developer</p>
        </div>
      </div>

      {/* --- DESKTOP MENU (Large Screens) --- */}
      <div className="hidden lg:flex flex-1 justify-center">
        <ul className="flex space-x-4 text-md font-medium items-center gap-4">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `hover:underline hover:text-cyan-400 decoration-cyan-400 decoration-2 underline-offset-8 transition-colors duration-200
                ${isActive ? "text-cyan-400 underline" : "text-white"}`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </ul>
      </div>

      {/* --- HAMBURGER BUTTON (Visible on Mobile, Z-Index High) --- */}
      <button
        className="lg:hidden text-white focus:outline-none z-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          // Close Icon (Bada aur saaf)
          <svg className="w-8 h-8 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          // Menu Icon
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>

      {/* --- FULL SCREEN MOBILE MENU OVERLAY --- */}
      
      <div
        className={`fixed inset-0 bg-black/95 backdrop-blur-sm z-40 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } lg:hidden flex flex-col items-center justify-center`}
      >
        <ul className="flex flex-col items-center space-y-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `text-2xl font-semibold tracking-wider transition-all duration-300
                ${isActive ? "text-cyan-400 scale-110" : "text-gray-300 hover:text-white hover:scale-105"}`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </ul>
      </div>
      
    </nav>
  );
};

export default Navbar;