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
  faGitAlt
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
        <h2 className="text-5xl font-bold text-base-content">
          About Me
        </h2>
        <p className="mt-4 sm:mt-2 text-2xl text-base-content text-center sm:text-left">
          Discover my interests and skills
        </p>
        <div className="divider w-3/4 sm:w-[40%] h-1 mx-auto sm:mx-0 divider-[base-content] mt-1" />
      </div>

      {/* Content */}
      <div className="flex flex-col sm:flex-row gap-2 sm:gap-8 mt-1 sm:mt-4">
        {/* Introduction */}
        <div className="w-full sm:w-1/2">
          <h3 className="text-lg sm:text-2xl font-semibold text-base-content mb-2 text-center sm:text-left">
            A short introduction
          </h3>
          <div className="mt-4 flex flex-col gap-4 text-sm sm:text-base text-base-content text-center sm:text-left">
            <p>
              I graduated from UPB ETTI with a degree in Telecommunications and Computer Science. I specialize in web and GUI application development.
            </p>
            <p>
              As a Software Developer at a sales company, I gained production experience configuring servers and building front-end and back-end solutions using React, Electron,Javascript and Python.
            </p>
            <p>
              I have strong communication skills and thrive in team environments, quickly adapting to challenges and collaborating effectively to deliver high-quality software.
            </p>
            <p>
              My key strengths include rapid problem-solving, a passion for learning new technologies, and a dedication to creating intuitive user experiences.
            </p>
          </div>
        </div>

        {/* Key Skills */}
        <div className="w-full sm:w-3/5 bg-base-content bg-opacity-20 drop-shadow-lg rounded-3xl p-3 sm:p-6">
          <h3 className="text-lg sm:text-2xl font-semibold text-base-content mb-2 text-center sm:text-left">
            Key Skills
          </h3>

          {/* Languages & Skills */}
          <div className="mt-2 sm:mt-4">
            <h4 className="text-base sm:text-xl font-medium text-base-content mb-1 text-center sm:text-left">
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
            <h4 className="text-base sm:text-xl font-medium text-base-content mb-1 text-center sm:text-left">
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
              <IconText text="Git" icon={faGitAlt} />
              <IconText text="More" icon={faEllipsisH} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
