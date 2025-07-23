import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa";

import firebaseImage from "../assets/images/firebase.png";
import reduxImage from "../assets/images/redux.png";
import figmaImage from "../assets/images/figma.webp";
import expressImage from "../assets/images/express.png";
import mongodbImage from "../assets/images/mongodb.png";

const Skill = () => {
  return (
    <section id="skills" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-10 text-[#5d7e9e]">
          My Skills
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {[
            {
              icon: <FaHtml5 className="text-orange-400" />,
              label: "HTML",
              desc: "Building structured web content",
            },
            {
              icon: <FaCss3Alt className="text-blue-500" />,
              label: "CSS",
              desc: "Styling and layout for modern web designs",
            },
            {
              icon: <FaJs className="text-yellow-400" />,
              label: "JavaScript",
              desc: "Building interactive and dynamic web applications",
            },
            {
              icon: <FaReact className="text-cyan-400" />,
              label: "React",
              desc: "Building interactive UIs with state management",
            },
            {
              icon: <FaNodeJs className="text-green-500" />,
              label: "Node.js",
              desc: "Building scalable server-side applications",
            },
            {
              img: mongodbImage,
              label: "MongoDB",
              desc: "NoSQL database for high-volume data efficiently.",
            },
            {
              icon: <FaGitAlt className="text-orange-400" />,
              label: "Git",
              desc: "Version control for collaborative software development",
            },
            {
              img: figmaImage,
              label: "Figma",
              desc: "UI/UX design and prototyping tool",
            },
          ].map((skill, index) => (
            <div
              key={index}
              className="text-center p-4 rounded-lg shadow-md bg-[#5d7e9e] hover:shadow-xl hover:scale-105 transform transition duration-300 ease-in-out text-white"
            >
              <div className="w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                {skill.icon ? (
                  <div className="text-5xl">{skill.icon}</div>
                ) : (
                  <img
                    src={skill.img}
                    alt={skill.label}
                    className="w-20 h-20 object-contain rounded shadow-sm"
                  />
                )}
              </div>
              <h3 className="text-lg font-semibold hover:text-yellow-200 cursor-pointer">
                {skill.label}
              </h3>
              <p className="text-sm text-white mt-1">{skill.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skill;
