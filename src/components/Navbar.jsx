import { NavLink } from "react-router-dom";
const Navbar = () => {

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
    <div className="navbar flex bg-black h-16 items-center justify-between text-md font-medium text-white py-4 px-8">
      <div className="flex items-center gap-3 cursor-pointer">
        <h1 className="text-[30px] text-blue-500">SJ</h1>
        <div>
        <p>Sumit Jaiswal</p>
        <p className="text-gray-300 text-[10px]">Full Stack Developer</p>
        </div>
      </div>
      <div className="flex flex-1 justify-center">
      <ul className="flex space-x-4 text-md font-medium items-center gap-4">
        {navLinks.map((link) => (
          <NavLink
            key={link.name}
            to={link.path}
            className={({ isActive }) =>
              `hover:underline hover:text-blue-500 decoration-blue-500 decoration-2 underline-offset-8 transition-colors duration-200
              ${isActive ? "text-blue-500 underline" : "text-white"}`
            }
          >
            {link.name}
          </NavLink>
        ))}
      </ul>
    </div>
    </div>
  );
};

export default Navbar;