import React, { useState, useEffect } from "react";
import getImgUrl from "../utils/getImgUrl";

const Projects = () => {
  const [projectsData, setProjectsData] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");

  useEffect(() => {
    fetch("/projects.json")
      .then((response) => response.json())
      .then((data) => {
        setProjectsData(data);
        setFilteredProjects(data);
      })
      .catch((error) => console.error("Error fetching projects data:", error));
  }, []);

  const filterProjects = (category) => {
    setSelectedCategory(category);
    if (category === "all") {
      setFilteredProjects(projectsData);
    } else {
      setFilteredProjects(
        projectsData.filter((project) => project.category === category)
      );
    }
  };

  return (
    <section id="projects" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-10" style={{ color: "rgb(93, 126, 158)" }}>
          My Projects
        </h2>

        {/* Category Filter Buttons */}
        <div className="text-center mb-6 flex flex-wrap justify-center gap-3">
          {["all", "frontend", "fullStack", "backend", "uiUX"].map((category) => (
            <button
              key={category}
              onClick={() => filterProjects(category)}
              className={`px-6 py-2 rounded transition duration-200 ${
                selectedCategory === category
                  ? "bg-[rgb(93,126,158)] text-white"
                  : "bg-white text-[rgb(93,126,158)] border border-[rgb(93,126,158)]"
              }`}
            >
              {category === "all"
                ? "All Projects"
                : category === "frontend"
                ? "Frontend"
                : category === "fullStack"
                ? "Full Stack"
                : category === "backend"
                ? "Backend"
                : "UI/UX"}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.name}
              className="project-card bg-white shadow-lg rounded-lg overflow-hidden"
            >
              <img
                src={getImgUrl(project.image)}
                alt={project.alt}
                className="w-full h-48 object-cover"
                loading="lazy"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-[rgb(93,126,158)]">
                  {project.name}
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between">
                  {project.site && (
                    <a
                      href={project.site}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[rgb(93,126,158)] font-semibold"
                    >
                      Live Demo
                    </a>
                  )}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[rgb(93,126,158)] font-semibold"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
