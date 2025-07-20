import React from "react";
import { IconText } from "./IconText";
import {
  faReact,
  faJs,
  faPython,
  faCss3,
  faHtml5,
  faNodeJs,
  faDocker,
  faLinux,
} from "@fortawesome/free-brands-svg-icons";
import {
  faDatabase,
  faCode,
  faShieldAlt,
  faServer,
  faCubes,
  faCloudUploadAlt,
  faNetworkWired,
  faEllipsisH,
} from "@fortawesome/free-solid-svg-icons";

export const AboutMe = () => {
  return (
    <div id="about" className="pt-28 sm:pt-20 px-2 sm:px-0">
      {/* Header */}
      <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
        <h2 className="text-5xl font-bold text-base-content brightness-200 contrast-200">
          About Me
        </h2>
        <p className="mt-4 sm:mt-2 text-2xl text-base-content brightness-200 contrast-200 text-center sm:text-left">
          Discover my interests and skills
        </p>
        <div className="divider w-3/4 sm:w-[40%] h-1 mx-auto sm:mx-0 divider-[base-content] mt-1" />
      </div>

      {/* Content */}
      <div className="flex flex-col sm:flex-row gap-2 sm:gap-8 mt-1 sm:mt-4">
        {/* Introduction */}
        <div className="w-full sm:w-1/2">
          <h3 className="text-lg sm:text-2xl font-semibold text-base-content brightness-200 contrast-200 mb-2 text-center sm:text-left">
            A short introduction
          </h3>
          <div className="mt-4 flex flex-col gap-4 text-sm sm:text-base text-base-content brightness-200 contrast-200 text-center sm:text-left">
            <p className="text-base-content brightness-200 contrast-200">
              I am currently a final year student at Babes-Bolyai University
              (UBB), pursuing a degree in Mathematics and Computer Science.
            </p>
            <p className="text-base-content brightness-200 contrast-200">
              Over the years, I have honed my skills largely through various
              personal projects, nurturing a strong passion for learning new
              technologies.
            </p>
            <p className="text-base-content brightness-200 contrast-200">
              My primary focus lies in web development and the Rust programming
              language, areas where I continuously strive to deepen my expertise.
            </p>
            <p className="text-base-content brightness-200 contrast-200">
              I am also interested in cybersecurity and reverse engineering,
              fields I explore through CTF challenges and personal projects.
            </p>
          </div>
        </div>

        {/* Key Skills */}
        <div className="w-full sm:w-3/5 bg-base-content bg-opacity-20 drop-shadow-lg rounded-3xl p-3 sm:p-6">
          <h3 className="text-lg sm:text-2xl font-semibold text-base-content brightness-200 contrast-200 mb-2 text-center sm:text-left">
            Key Skills
          </h3>

          {/* Languages & Skills */}
          <div className="mt-2 sm:mt-4">
            <h4 className="text-base sm:text-xl font-medium text-base-content brightness-200 contrast-200 mb-1 text-center sm:text-left">
              Languages & Skills
            </h4>
            <div className="flex flex-wrap gap-2 sm:gap-3 justify-center sm:justify-start">
              <IconText text="JavaScript" icon={faJs} />
              <IconText text="Python" icon={faPython} />
              <IconText text="HTML" icon={faHtml5} />
              <IconText text="CSS" icon={faCss3} />
              <IconText text="C++" icon={faCode} />
              <IconText text="C#" icon={faCode} />
              <IconText text="SQL" icon={faDatabase} />
              <IconText text="More" icon={faEllipsisH} />
            </div>
          </div>

          {/* Technologies */}
          <div className="mt-2 sm:mt-6">
            <h4 className="text-base sm:text-xl font-medium text-base-content brightness-200 contrast-200 mb-1 text-center sm:text-left">
              Technologies
            </h4>
            <div className="flex flex-wrap gap-2 sm:gap-3 justify-center sm:justify-start">
              <IconText text="React" icon={faReact} />
              <IconText text="Next.js" icon={faJs} />
              <IconText text="Node.js" icon={faNodeJs} />
              <IconText text="Express.js" icon={faNodeJs} />
              <IconText text="MySQL" icon={faDatabase} />
              <IconText text="Docker" icon={faDocker} />
              <IconText text="Virtual Machine" icon={faServer} />
              <IconText text="Unity" icon={faCubes} />
              <IconText text="Deployment" icon={faCloudUploadAlt} />
              <IconText text="Nginx" icon={faNetworkWired} />
              <IconText text="Kali Linux" icon={faShieldAlt} />
              <IconText text="Linux" icon={faLinux} />
              <IconText text="More" icon={faEllipsisH} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
