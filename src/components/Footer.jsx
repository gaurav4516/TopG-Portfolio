import React from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-6">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center space-x-6 mb-4">
          {/* Social Media Links */}
          <a
            href="https://github.com/gaurav4516"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="text-2xl hover:text-secondary" />
          </a>
          <a
            href="https://www.linkedin.com/in/gaurav-singh-944559253"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-2xl hover:text-secondary" />
          </a>
          <a
            href="ttps://www.instagram.com/gaurav.singh.45/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="text-2xl hover:text-secondary" />
          </a>
        </div>

        <p className="text-lg">
          &copy; {new Date().getFullYear()} Gaurav Singh. All rights reserved.
        </p>
        <p className="text-sm">
          Designed & Developed by{" "}
          <a
            href="https://www.linkedin.com/in/gaurav-singh-944559253"
            className="hover:text-black underline underline-offset-2"
          >
            Gaurav Singh
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
