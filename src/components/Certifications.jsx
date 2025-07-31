import React from "react";

const Certifications = () => {
  const certificationList = [
   
    
    {
      title: "Data Science Internship",
      issuer: "Prinston Smart Engineers",
      date: "March 2025 - May 2025",
      link: "/GAURAV.pdf",
    },
    {
      title: "Introduction to JavaScript",
      issuer: "Cuvette",
      date: "July 2025",
      link: "/javascript.pdf",
    },
     {
      title: "React JS Tutorial",
      issuer: "Cuvette",
      date: "July 2025",
      link: "/react.pdf", // Place in public folder
    },
     {
      title: "GenAI Powered Data Analytics Job Simulation",
      issuer: "By:- Tata & Forage",
      date: " 30 July 2025",
      link: "/Tata.pdf", // Place in public folder
    },
     {
      title: "Software Engineering Job Simulation",
      issuer: " By:- JP Morgan Chase & Co. & Forage",
      date: " 31 July 2025",
      link: "/jpmg.pdf", // Place in public folder
    },

  ];

  return (
    <section
      id="certifications"
      className="py-20 px-4 bg-white text-center scroll-mt-20"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-[#5d7e9e] mb-12">
          Certifications
        </h2>

        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {certificationList.map((cert, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md border-t-4 border-[#5d7e9e] p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold text-[#5d7e9e] mb-2">
                {cert.title}
              </h3>
              <p className="text-gray-700 font-medium">{cert.issuer}</p>
              <p className="text-sm text-gray-500 mb-4">{cert.date}</p>
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#5d7e9e] underline font-semibold hover:text-gray-800 transition"
              >
                View Certificate
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
