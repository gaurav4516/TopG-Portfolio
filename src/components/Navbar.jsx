import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      className="text-white py-4 shadow-lg fixed w-full z-50"
      style={{ backgroundColor: "rgb(93, 126, 158)" }}
    >
      <div className="container mx-auto flex items-center justify-between px-6">
        {/* Logo */}
        <div className="text-2xl font-bold cursor-pointer">
          <Link to="home" smooth={true} offset={-70} duration={500}>
            Gaurav.js
          </Link>
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="lg:hidden">
          <button
            className="text-white text-2xl focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle navigation"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Menu Items */}
        <div
          className={`absolute top-16 left-0 w-full text-white lg:static lg:flex lg:items-center lg:space-x-8 lg:w-auto ${
            isOpen ? "block" : "hidden"
          }`}
          style={{ backgroundColor: "rgb(93, 126, 158)" }}
        >
          <ul className="flex flex-col lg:flex-row lg:space-x-8 text-center">
            {["home", "about", "projects", "resume", "certifications", "contact"].map((section) => (
              <li key={section} className="py-2 lg:py-0">
                <Link
                  to={section}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="block hover:text-teal-300 cursor-pointer transition duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
