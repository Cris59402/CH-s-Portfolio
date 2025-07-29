import React from "react";

export const Projects = () => {
  const projects = [
    {
      img: "/erp.png",
      title: "ERP for Small Sales Firms",
      desc: "Licență & ERP",
      details:
        "Un sistem ERP destinat firmelor mici de vânzări, dezvoltat ca proiect de licență. Tehnologii utilizate: React și MySQL.",
      link: "https://example.com/project1",
    },
    {
      img: "/sauron.png",
      title: "Cybersecurity Toolbox",
      desc: "Toolbox Security",
      details:
        "O aplicație toolbox pentru securitate cibernetică, construită folosind Electron și Python, care oferă diverse unelte de audit și testare.",
      link: "https://example.com/project2",
    },
    {
      img: "/shooter.png",
      title: "Shooter (In Progress)",
      desc: "Shooter Game",
      details:
        "Un shooter 3D creat în Unity și C#. Proiect în desfășurare, explorând fizica jocului și AI-ul inamicilor.",
      link: "https://example.com/project3",
    },
  ];

  return (
    <div id="projects" className="pt-24 sm:pt-20 px-4 sm:px-0">
      {/* Header */}
      <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
        <h2 className="text-4xl md:text-5xl font-bold text-base-content">
          My Projects
        </h2>
        <h3 className="text-xl md:text-2xl mt-1 text-base-content">
          My personal projects – for more details, see my CV
        </h3>
        <div className="divider w-1/2 sm:w-[30%] h-1 mt-2 mx-auto sm:mx-0 divider-[base-content]" />
      </div>

      {/* Projects Grid */}
      <div className="flex flex-col gap-8 sm:flex-row sm:gap-6 mt-6">
        {projects.map((p, i) => (
          <div key={i} className="relative w-full max-w-md sm:w-1/3 mx-auto">
            <a
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-base-content bg-opacity-15 hover:bg-opacity-25 transition drop-shadow-md rounded-2xl flex flex-col items-center p-6 sm:p-8"
            >
              <img
                src={p.img}
                alt={p.title}
                className="w-24 h-24 sm:w-28 sm:h-28 object-contain"
              />
              <h3 className="mt-4 text-xl md:text-2xl font-semibold text-center text-base-content">
                {p.title}
              </h3>
              <p className="mt-2 text-base md:text-base text-center text-base-content">
                {p.desc}
              </p>
            </a>

            {/* Details below card */}
            <p className="mt-4 text-sm md:text-base text-center break-words text-base-content w-full px-4">
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
