import React from "react";
import AboutImage from "../assets/images/gt.jpg";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const Resume = () => {
  const primaryColor = "rgb(93, 126, 158)";

  return (
    <section id="resume" className="py-20 bg-[#f8fafc]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-10 text-center" style={{ color: primaryColor }}>
          My Resume
        </h2>

        <div className="flex flex-col-reverse md:flex-row justify-between items-start md:items-start">
          {/* ====== Left Column ====== */}
          <div className="w-full md:w-2/3 md:mr-8">
            <div className="bg-white p-6 rounded-lg shadow-lg space-y-10">

              {/* About Me */}
              <div>
                <h3 className="text-2xl font-semibold mb-4" style={{ color: "#333333" }}>About Me</h3>
                <p className="text-gray-700 leading-relaxed">
                  I’m Gaurav Singh, a dedicated and detail-oriented BCA graduate with a passion
                  for building clean, responsive, and user-friendly web applications. I have experience in
                  full-stack development using technologies like ReactJS, Node.js, and MongoDB. I'm constantly learning
                  and love solving real-world problems through code. Currently, I am looking for roles in tech that challenge me and help me grow.
                </p>
              </div>

              {/* Technical Skills */}
              <div>
                <h3 className="text-2xl font-semibold mb-4" style={{ color: "#333333" }}>Technical Skills</h3>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>ReactJS, Node.js</li>
                  <li>HTML5, CSS3, JavaScript </li>
                  <li>Database: MongoDB, MySQL (basic)</li>
                  <li>Basic Data Structure Algorithm</li>
                </ul>
              </div>

              {/* Soft Skills */}
              <div>
                <h3 className="text-2xl font-semibold mb-4" style={{ color: "#333333" }}>Soft Skills</h3>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>Team Collaboration</li>
                  <li>Problem-Solving Attitude</li>
                  <li>Strong Communication</li>
                  <li>Time Management</li>
                  <li>Adaptability & Self-Learning</li>
                </ul>
              </div>

              {/* Languages Known */}
              <div>
                <h3 className="text-2xl font-semibold mb-4" style={{ color: "#333333" }}>Languages Known</h3>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>Hindi (Fluent)</li>
                  <li>English (Professional)</li>
                </ul>
              </div>

              {/* Education */}
              <div>
                <h3 className="text-2xl font-semibold mb-4" style={{ color: "#333333" }}>Education</h3>
                <p className="font-medium text-gray-800">Bachelor of Computer Applications (BCA)</p>
                <p>Graduated from [The Oxford College of Science], 2025</p>
              </div>

              {/* Certifications */}
              <div>
                <h3 className="text-2xl font-semibold mb-4" style={{ color: "#333333" }}>Certifications</h3>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                   <li>
                    <a href="/GAURAV.pdf" target="_blank" rel="noopener noreferrer" style={{ color: primaryColor }} className="hover:underline">
                      Data Science Internship – Prinston Smart Engineers (Mar–May 2025)
                    </a>
                  </li>
                  <li>
                    <a href="/react.pdf" target="_blank" rel="noopener noreferrer" style={{ color: primaryColor }} className="hover:underline">
                      React JS Tutorial – Cuvette (July 2025)
                    </a>
                  </li>
                  <li>
                    <a href="/Tata.pdf" target="_blank" rel="noopener noreferrer" style={{ color: primaryColor }} className="hover:underline">
                     GenAI Powered Data Analytics Job Simulation  – Tata & Forage (30 July 2025)
                    </a>
                  </li>
                 
                  <li>
                    <a href="/jpmg.pdf" target="_blank" rel="noopener noreferrer" style={{ color: primaryColor }} className="hover:underline">
                      Software Engineering Job Simulation -  JP Morgan Chase & Co. (31 July 2025)
                    </a>
                  </li>
                </ul>
              </div>

              {/* Projects */}
              <div>
                <h3 className="text-2xl font-semibold mb-4" style={{ color: "#333333" }}>Projects</h3>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>
                    <a href="https://github.com/gaurav4516/RecipeX" target="_blank" rel="noopener noreferrer" style={{ color: primaryColor }} className="hover:underline">
                      RecipeX
                    </a>{" "}
                    – A recipe-sharing web app with authentication and backend using MongoDB.
                  </li>
                  <li>
                    <a href="https://github.com/gaurav4516/Buyzoid" target="_blank" rel="noopener noreferrer" style={{ color: primaryColor }} className="hover:underline">
                      Buyzoid
                    </a>{" "}
                    – A Ecommerce platform to buys classy bags.
                  </li>
                  <li>
                    <a href="https://github.com/gaurav4516/Odisha-Unexplored" target="_blank" rel="noopener noreferrer" style={{ color: primaryColor }} className="hover:underline">
                      Odisha Unexplored
                    </a>{" "}
                    – Culturally informative website on Odisha's tribal art, festivals, and crafts.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* ====== Right Column ====== */}
          <div className="w-full md:w-1/3 mt-10 md:mt-0 text-center">
            <img
              src={AboutImage}
              alt="Gaurav Singh"
              className="rounded-full object-cover w-48 h-48 mx-auto mb-6 border-4"
              style={{ borderColor: primaryColor }}
            />
            <p className="text-xl font-semibold text-gray-800">Gaurav Singh</p>
            <p className="text-md" style={{ color: "#333333" }}>BCA Graduate | Aspiring Full Stack Developer</p>

            <a
              href="mailto:gauravsingh88@gmail.com"
              className="text-md mt-3 block hover:underline"
              style={{ color: primaryColor }}
            >
              gauravsingh88@gmail.com
            </a>

            {/* Social Links */}
            <div className="flex justify-center space-x-6 mt-6">
              <a
                href="https://www.linkedin.com/in/gaurav-singh-944559253"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="text-2xl" style={{ color: primaryColor }} />
              </a>
              <a
                href="https://github.com/gaurav4516"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="text-2xl" style={{ color: primaryColor }} />
              </a>
              <a
                href="https://www.instagram.com/gaurav.singh.45/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="text-2xl" style={{ color: primaryColor }} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
