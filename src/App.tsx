import { Dots } from "./components/Dots";
import { Gradient } from "./components/Gradient";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { AboutMe } from "./components/AboutMe";
import { Experiences } from "./components/Experiences";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Projects }    from "./components/Projects";
// import { Portfolio } from "./components/Portfolio";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
export const App = () => {
  return (
    <div className="relative overflow-hidden">
      <Gradient />
      <Navbar />
      <div className="content flex flex-col text-center px-[3vw] md:px-[15vw] lg:px-[25vw] relative">
        <Hero />

        <Dots />
      </div>
      <div className="content flex flex-col text-center px-[3vw] md:px-[15vw] lg:px-[25vw] relative">
        <AboutMe />
      </div>
      {/* <Portfolio /> */}
      <div className="content flex flex-col text-center px-[3vw] md:px-[15vw] lg:px-[25vw] relative py-20">
        <Experiences />
        <Projects />
        <Contact />
        <Footer />
        <Dots />
      </div>
    </div>
  );
};
