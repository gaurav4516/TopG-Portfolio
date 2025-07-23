import React from "react";
import AboutImage from "../assets/images/gt.jpg"; // make sure the image path is correct

const About = () => {
  return (
    <section
      id="about"
      className="py-16"
      style={{ backgroundColor: "rgb(93, 126, 158)" }} // background updated here
    >
      <div className="container mx-auto px-4">
        {/* Heading in charcoal gray */}
        <h1 className="text-4xl font-bold mb-6 text-center" style={{ color: "#f9fafb" }}>
          About Me
        </h1>

        <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-8 md:gap-0">
          {/* Left Column - Image */}
          <div className="md:w-1/3 mb-8 md:mb-0 flex justify-center">
            <div
              className="rounded-full overflow-hidden shadow-xl border-4"
              style={{ borderColor: "#f9fafb" }}
            >
              <img
                src={AboutImage}
                alt="Gaurav Singh - Web Developer"
                className="w-48 h-48 object-cover rounded-full"
              />
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="md:w-2/3 md:px-8">
            <div style={{ color: "#f9fafb" }}>
              <p className="mb-4 text-justify">
                Hi, I'm <strong>Gaurav Singh</strong>, a dedicated BCA graduate with a strong foundation in
                <strong> front-end development</strong> and a growing passion for <strong>data science</strong>.
                I love building user-friendly and responsive web interfaces using <strong>HTML, CSS, JavaScript, and React</strong>.
              </p>
              <p className="mb-4 text-justify">
                I've created projects like a tourism blog site <strong>"Odisha Unexplored"</strong>, a recipe website <strong>"RecipeX"</strong> with user authentication and MongoDB integration, and an e-commerce platform <strong>"Buyzoid"</strong>, which includes product browsing, cart management, checkout flow, and backend order handling with MongoDB.
                I enjoy turning ideas into visually appealing and functional digital products, focusing on seamless, user-friendly web experiences.
              </p>
              <p className="mb-4 text-justify">
                I’m always learning — currently exploring <strong>Node.js</strong>, <strong>MongoDB</strong>, and building full-stack apps.
                I also enjoy comparing data science algorithms and building dashboards with tools like Power BI.
              </p>
              <p className="text-justify">
                Apart from coding, I love exploring regional festivals and cultures, dabbling in UI/UX design, and keeping things neat and organized.
                I'm enthusiastic about learning and constantly working to grow my skills and contribute meaningfully to projects.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
