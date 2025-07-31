import React from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#5d7e9e] text-white py-6">
      <div className="container mx-auto px-4 text-center">
        {/* Social Media Icons */}
        <div className="flex justify-center space-x-6 mb-4">
          <a
            href="https://github.com/gaurav4516"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="text-2xl hover:text-gray-300 transition" />
          </a>
          <a
            href="https://www.linkedin.com/in/gaurav-singh-944559253"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-2xl hover:text-gray-300 transition" />
          </a>
          <a
            href="https://www.instagram.com/gaurav.singh.45/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="text-2xl hover:text-gray-300 transition" />
          </a>
        </div>

        {/* Copyright Text */}
        <p className="text-lg">
          &copy; {new Date().getFullYear()} Gaurav Singh. All rights reserved.
        </p>
        <p className="text-sm">
          Designed & Developed by{" "}
          <a
            href="https://www.linkedin.com/in/gaurav-singh-944559253"
            className="hover:text-white underline underline-offset-2"
          >
            Gaurav Singh
          </a> <br />
          <a
            href="./45resume.pdf"
            className="hover:text-white underline underline-offset-2"
          >
            View Resume
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
