import { useState, useRef } from "react";
import SwiperCore from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faJs,
  faSass,
  faNode,
  faPython,
  faDocker,
} from "@awesome.me/kit-9d621f80b9/icons/classic/brands";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
  technologies: {
    name: string;
    icon: any; // FontAwesome icon
  }[];
}

const projects: Project[] = [
  {
    id: 1,
    title: "Pixelnite Web",
    description: "Website for a gaming server called Pixelnite.",
    image: "https://jzitnik.dev/images/klindos.webp",
    link: "/en/portfolio/pixelnite-web/",
    technologies: [
      { name: "React", icon: faReact },
      { name: "TypeScript", icon: faJs },
      { name: "Sass", icon: faSass },
      { name: "Node.js", icon: faNode },
    ],
  },
  {
    id: 2,
    title: "AI Code Assistant",
    description:
      "Real-time code completion and suggestion tool powered by machine learning",
    image: "https://jzitnik.dev/images/klindos.webp",
    link: "/en/portfolio/ai-assistant/",
    technologies: [
      { name: "Python", icon: faPython },
      { name: "React", icon: faReact },
      { name: "Node.js", icon: faNode },
      { name: "TypeScript", icon: faJs },
    ],
  },
  {
    id: 3,
    title: "Cloud Management Dashboard",
    description: "Comprehensive cloud infrastructure management platform",
    image: "https://jzitnik.dev/images/klindos.webp",
    link: "/en/portfolio/cloud-dashboard/",
    technologies: [
      { name: "React", icon: faReact },
      { name: "Node.js", icon: faNode },
      { name: "TypeScript", icon: faJs },
      { name: "Docker", icon: faDocker },
    ],
  },
  {
    id: 4,
    title: "Real-time Analytics Platform",
    description:
      "Data visualization and analytics dashboard for business intelligence",
    image: "https://jzitnik.dev/images/klindos.webp",
    link: "/en/portfolio/analytics/",
    technologies: [
      { name: "React", icon: faReact },
      { name: "Python", icon: faPython },
      { name: "Node.js", icon: faNode },
      { name: "TypeScript", icon: faJs },
    ],
  },
  {
    id: 5,
    title: "DevOps Automation Suite",
    description: "Automated deployment and infrastructure management toolset",
    image: "https://jzitnik.dev/images/klindos.webp",
    link: "/en/portfolio/devops/",
    technologies: [
      { name: "Python", icon: faPython },
      { name: "Node.js", icon: faNode },
      { name: "Docker", icon: faDocker },
      { name: "TypeScript", icon: faJs },
    ],
  },
];

export const Portfolio = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(1);
  const swiperRef = useRef<SwiperCore>();

  const renderProject = (project: Project) => (
    <div className="flex flex-col gap-4">
      <a href={project.link} style={{ margin: "unset" }}>
        <div
          className="group relative col-span-3 flex flex-col justify-between overflow-hidden rounded-xl transform-gpu bg-background [border:1px_solid_rgba(255,255,255,.1)] [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] min-h-[300px] sm:min-h-[400px] md:min-h-[500px] custom"
          style={{ transition: "ease 0.5s filter ease 0.5s opacity" }}
        >
          <div>
            <img
              src={project.image}
              alt="background"
              className="absolute left-0 top-0 h-full w-full border-none transition-all duration-300 ease-out opacity-70 [mask-image:linear-gradient(to_top,transparent_20%,#000_100%)] group-hover:scale-105 object-cover"
            />
          </div>
          <div className="pointer-events-none z-10 flex transform-gpu flex-col gap-1 p-6 transition-all duration-300 group-hover:-translate-y-10 custom">
            <h2 className="text-xl font-semibold text-neutral-700 dark:text-neutral-300 m-0 custom">
              {project.title}
            </h2>
            <div className="flex gap-2 mt-1 custom flex-wrap">
              {project.technologies.map((tech, index) => (
                <div
                  key={index}
                  className="card p-2 flex items-center custom mb-0"
                >
                  <div className="h-6 mr-2 custom icn">
                    <FontAwesomeIcon icon={tech.icon} />
                  </div>
                  <span>{tech.name}</span>
                </div>
              ))}
            </div>
            <p className="max-w-lg text-neutral-400 m-0 custom">
              {project.description}
            </p>
          </div>
          <div className="pointer-events-none absolute bottom-0 flex w-full translate-y-10 transform-gpu flex-row items-center p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 custom ml-2">
            <div className="pointer-events-auto custom bg-white rounded-lg py-1 px-2 text-xs text-black flex gap-2 items-center cursor-pointer hover:bg-white/80 transition-colors">
              Learn more
              <div className="ml-2 h-4 w-4 icn">
                <FontAwesomeIcon icon={faJs} />
              </div>
            </div>
          </div>
          <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-black/[.03] group-hover:dark:bg-neutral-800/10 custom"></div>
        </div>
      </a>
    </div>
  );

  const handleSlideChange = () => {
    if (swiperRef.current) {
      setThumbsSwiper(swiperRef.current.activeIndex + 1);
    }
  };

  const goToSlide = (index: number) => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(index);
    }
  };

  return (
    <div className="relative mt-10 mb-[500px]">
      <div className="content flex flex-col text-center px-[3vw] md:px-[15vw] lg:px-[25vw] relative">
        <div className="flex flex-col items-start mt-20">
          <span className="text-base-content brightness-200 contrast-200 text-5xl font-bold text-left">
            Portfolio
          </span>
          <span className="text-base-content brightness-200 contrast-200 text-2xl text-left">
            Discover my interests and skills
          </span>
          <div className="divider divider-[base-content] w-[40%] h-1" />
        </div>
      </div>
      <div className="flex items-center flex-col basis-auto box-border absolute min-h-0 min-w-0 shrink-0 z-1000 h-[605px] -left-[1000px] -right-[1000px] top-0 justify-center">
        <div className="flex items-stretch flex-col basis-auto box-border relative min-h-0 min-w-0 shrink grow h-full w-full">
          <div className="flex items-stretch flex-col basis-auto box-border absolute min-h-0 min-w-0 shrink-0 top-0 left-0 right-0 bottom-auto h-[609px] bg-squarez z-0" />
          <div className="flex items-stretch flex-col basis-auto box-border absolute min-h-0 min-w-0 shrink-0 top-0 left-0 right-0 bottom-0 z-10">
            <div className="max-w-7xl ml-auto mr-auto mt-[17rem] relative flex flex-col items-center justify-center gap-8">
              <div className="w-[25rem] sm:w-[40rem] h-[400px] relative">
                {projects[thumbsSwiper - 1] &&
                  renderProject(projects[thumbsSwiper - 1])}
              </div>
              <Swiper
                onSlideChange={handleSlideChange}
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                slidesPerView={4}
                centeredSlides={true}
                spaceBetween={30}
                grabCursor={true}
                modules={[Pagination]}
                className="mySwiper w-full max-w-[80rem]"
              >
                {projects.map((project) => (
                  <SwiperSlide key={project.id}>
                    <div
                      className="h-[85px] w-full rounded-xl bg-background/50 backdrop-blur-sm border border-white/10 p-4 cursor-pointer transition-all hover:bg-background/70"
                      onClick={() => {
                        setThumbsSwiper(project.id);
                        goToSlide(project.id - 1);
                      }}
                    >
                      <div className="flex flex-col gap-2">
                        <h3 className="text-sm font-medium text-neutral-200 m-0">
                          {project.title}
                        </h3>
                        <div className="flex gap-2">
                          {project.technologies
                            .slice(0, 3)
                            .map((tech, index) => (
                              <div key={index} className="text-neutral-400">
                                <FontAwesomeIcon
                                  icon={tech.icon}
                                  className="w-4 h-4"
                                />
                              </div>
                            ))}
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
