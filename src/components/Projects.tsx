import React from "react";
import { FaProjectDiagram, FaCode, FaMobileAlt } from "react-icons/fa";

export const Projects = () => {
  const projects = [
    {
      icon: <FaProjectDiagram className="text-6xl" />,
      title: "Project 1",
      desc: "Proiect1",
      details:
        "Acesta este proiectul meu de unelte, unde am folosit React și Tailwind pentru a crea o interfață dinamică.",
      link: "https://example.com/project1",
    },
    {
      icon: <FaCode className="text-6xl" />,
      title: "Project 2",
      desc: "Proiect2",
      details:
        "O aplicație back-end în Node.js cu Express și MongoDB, pentru gestionarea utilizatorilor și autentificare.",
      link: "https://example.com/project2",
    },
    {
      icon: <FaMobileAlt className="text-6xl" />,
      title: "Project 3",
      desc: "Proiect3",
      details:
        "Un prototip mobil creat cu React Native, cu componente custom și navigație prin taburi. Și aici un paragraf mai lung pentru test.",
      link: "https://example.com/project3",
    },
  ];

  return (
    <div id="projects" className="pt-24 sm:pt-20 px-4 sm:px-0">
      {/* Header */}
      <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
        <h2 className="text-4xl md:text-5xl font-bold text-base-content brightness-200 contrast-200">
          My Projects
        </h2>
        <h3 className="text-xl md:text-2xl mt-1 text-base-content brightness-200 contrast-200">
          A selection of things I’ve built
        </h3>
        <div className="divider w-1/2 sm:w-[30%] h-1 mt-2 mx-auto sm:mx-0 divider-[base-content]" />
      </div>

      {/* Projects Grid */}
      <div className="flex flex-col gap-8 sm:flex-row sm:gap-6 mt-6">
        {projects.map((p, i) => (
          <div
            key={i}
            className="
              relative
              w-full
              max-w-md            /* mobil: card mai lat */
              sm:w-1/3            /* desktop: exact 1/3 din container */
              mx-auto
            "
          >
            <a
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className="
                w-full
                bg-base-content bg-opacity-15 hover:bg-opacity-25 transition
                drop-shadow-md rounded-2xl
                flex flex-col items-center
                p-6 sm:p-8
              "
            >
              <div className="flex items-center justify-center w-full h-40 md:h-48">
                {p.icon}
              </div>
              <h3 className="mt-4 text-xl md:text-2xl font-semibold text-center text-base-content brightness-200 contrast-200">
                {p.title}
              </h3>
              <p className="mt-2 text-base md:text-base text-center text-base-content brightness-200 contrast-200">
                {p.desc}
              </p>
            </a>

            {/* Details below card */}
            <p className="mt-4 text-sm md:text-base text-center break-words text-base-content brightness-200 contrast-200 w-full px-4">
              {p.details}
            </p>
          </div>
        ))}
      </div>

      {/* Spacer */}
      <div className="h-32 sm:h-40" />
    </div>
  );
};
