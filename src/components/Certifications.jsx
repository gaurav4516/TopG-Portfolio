import React from "react";

const Certifications = () => {
  const certificationList = [
    {
      title: "React JS Tutorial",
      issuer: "Cuvette",
      date: "July 2025",
      link: "/react.pdf", // Place in public folder
    },
    {
      title: "Introduction to JavaScript",
      issuer: "Cuvette",
      date: "July 2025",
      link: "/javascript.pdf",
    },
    {
      title: "Data Science Internship",
      issuer: "Prinston Smart Engineers",
      date: "March 2025 - May 2025",
      link: "/GAURAV.pdf",
    },
  ];

  return (
    <section
      id="certifications"
      className="py-20 px-4 bg-[#f8fafc] text-center scroll-mt-20"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-primary mb-12">
          Certifications
        </h2>

        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {certificationList.map((cert, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md border-t-4 border-primary p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold text-secondary mb-2">
                {cert.title}
              </h3>
              <p className="text-gray-700 font-medium">{cert.issuer}</p>
              <p className="text-sm text-gray-500 mb-4">{cert.date}</p>
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline font-semibold hover:text-secondary transition"
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
