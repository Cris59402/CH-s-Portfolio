import React from "react";
import sigmagroup from "/Users/cris59402/Desktop/Cod/Portofolio nou/CH's Portofolio/dist/assets/sigma_group.png";
import etti from "/Users/cris59402/Desktop/Cod/Portofolio nou/CH's Portofolio/dist/assets/etti.png";
import {
  FaServer,
  FaLaptopCode,
  FaJsSquare,
  FaFileCode,
  FaCss3Alt,
  FaShieldAlt,
  FaGamepad,
  FaDocker,
} from "react-icons/fa";

export const Experiences = () => {
  return (
    <div
      id="experience"
      className="pt-24 sm:pt-20 px-4 sm:px-0
                 mb-20 md:mb-40"  /* mai mult spațiu jos pe desktop */
    >
      {/* Header */}
      <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
        <span className="text-4xl sm:text-5xl font-bold text-base-content brightness-200 contrast-200">
          My Experiences
        </span>
        <span className="mt-1 text-xl sm:text-2xl text-base-content brightness-200 contrast-200">
          Work Experiences and Courses
        </span>
        <div className="divider w-3/4 sm:w-[40%] h-1 mx-auto sm:mx-0 mt-2 divider-[base-content]" />
      </div>

      <div className="mt-4 flex flex-col sm:flex-row gap-6 sm:gap-12">
        <div className="bg-base-content bg-opacity-20 drop-shadow-lg rounded-3xl w-full">
          <div className="p-4 sm:p-6 flex flex-col gap-y-4">
            {/* Job & Education Row */}
            <div className="flex flex-col sm:flex-row gap-6 sm:gap-12 justify-start items-start">
              {/* Sigma Group */}
              <div className="flex flex-row items-start gap-3 justify-start">
                <div className="w-16 sm:w-20">
                  <img src={sigmagroup} alt="Sigma Group" />
                </div>
                <div className="flex flex-col items-start">
                  <span className="text-base sm:text-2xl text-base-content brightness-200 contrast-200">
                    Sigma Group
                  </span>
                  <span className="text-sm sm:text-lg text-base-content brightness-200 contrast-200">
                    Software Developer
                  </span>
                  <span className="text-sm sm:text-lg text-base-content brightness-200 contrast-200">
                    Iunie 2024 – Iunie 2025
                  </span>
                </div>
              </div>
              {/* ETTI-UPB */}
              <div className="flex flex-row items-start gap-3 justify-start">
                <div className="w-16 sm:w-20">
                  <img src={etti} alt="ETTI-UPB" />
                </div>
                <div className="flex flex-col items-start">
                  <span className="text-base sm:text-2xl text-base-content brightness-200 contrast-200">
                    ETTI-UPB
                  </span>
                  <span className="text-sm sm:text-lg text-base-content brightness-200 contrast-200">
                    Absolvent
                  </span>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="w-full border-t border-base-content border-opacity-20 my-4" />

            {/* Courses List */}
            <ul className="flex flex-col gap-2 sm:gap-3">
              {[ 
                {
                  icon: FaServer,
                  text: "Backend Web Development – Udemy",
                  href:
                    "https://www.udemy.com/certificate/UC-6a88f05f-914c-4a2e-a9ab-8d8be94561bf/",
                },
                {
                  icon: FaLaptopCode,
                  text: "Front End Development Libraries – freeCodeCamp",
                  href:
                    "https://www.freecodecamp.org/certification/Cris59402/front-end-development-libraries",
                },
                {
                  icon: FaJsSquare,
                  text:
                    "JavaScript Algorithms and Data Structures – freeCodeCamp",
                  href:
                    "https://www.freecodecamp.org/certification/Cris59402/javascript-algorithms-and-data-structures",
                },
                {
                  icon: FaFileCode,
                  text: "CPA – Programming Essentials in C++ – CISCO",
                  href:
                    "https://drive.google.com/file/d/1IxSyzDa7-0IFC5nztwVMGlrgzbuay-IJ/view",
                },
                {
                  icon: FaCss3Alt,
                  text: "Responsive Web Design – HTML & CSS – freeCodeCamp",
                  href:
                    "https://www.freecodecamp.org/certification/Cris59402/responsive-web-design",
                },
              ].map(({ icon: Icon, text, href }, idx) => (
                <li key={idx}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-3 text-base sm:text-lg text-base-content brightness-200 contrast-200 hover:underline"
                  >
                    <Icon className="text-xl mt-1 flex-shrink-0" />
                    <span className="whitespace-normal">{text}</span>
                  </a>
                </li>
              ))}
              {/* In Progress */}
              {[ 
                {
                  icon: FaShieldAlt,
                  text: "Ethical Hacking & Cybersecurity (In Progress)",
                },
                {
                  icon: FaGamepad,
                  text: "Game Development 3D (In Progress)",
                },
                { icon: FaDocker, text: "Docker (In Progress)" },
              ].map(({ icon: Icon, text }, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 text-base sm:text-lg text-base-content brightness-200 contrast-200 opacity-70"
                >
                  <Icon className="text-xl mt-1 flex-shrink-0" />
                  <span className="whitespace-normal">{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
