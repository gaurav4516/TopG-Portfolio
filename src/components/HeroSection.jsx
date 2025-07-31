import React from "react";
import HomeImage from "../assets/images/12.jpg";

const HeroSection = () => {
  return (
    <section className="bg-white py-16 md:py-24" id="home">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center gap-0 md:gap-8">
          {/* Left Section */}
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl font-bold mb-4 md:mt-0 mt-6 text-[rgba(10, 11, 11, 1)]">
              GAURAV SINGH
            </h1>
            <p className="text-xl font-semibold text-grey mb-4">
              Computer Science Student 
            </p>
            <p className="text-[#111] mb-6 text-justify leading-relaxed">
              I believe great things can be achieved through the use of
              technology and research. But those are merely the tools. Behind
              the tools are the people. Teamwork and passion—those are what
              matter the most.
            </p>
            {/* Call to Action Button */}
            <a
              href="/45resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-[rgb(93,126,158)] text-white rounded-lg shadow-md hover:bg-white hover:text-[rgb(93,126,158)] hover:border hover:border-[rgb(93,126,158)] transition-all duration-300"
              title="Download Resume"
            >
               Get Resume
            </a>
          </div>

          {/* Right Section - Image */}
          <div className="md:w-1/2 mt-8 md:mt-0">
            <img
              src={HomeImage}
              alt="GAURAV SINGH"
              className="w-full h-auto rounded-lg shadow-lg"
              title="GAURAV SINGH"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
