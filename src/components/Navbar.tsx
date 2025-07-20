// components/Navbar.tsx
import { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUser,
  faBriefcase,
  faEnvelope,
  faProjectDiagram,
  faQuestionCircle,
} from "@fortawesome/free-solid-svg-icons";

const letters = [
  { ch: "C", theme: "light" },
  { ch: "H", theme: "dark" },
  { ch: "R", theme: "cupcake" },
  { ch: "I", theme: "forest" },
  { ch: "S", theme: "aqua" },
  { ch: "T", theme: "lemonade" },
  { ch: "I", theme: "sunset" },
  { ch: "A", theme: "nord" },
  { ch: "N", theme: "halloween" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [dotLeft, setDotLeft] = useState(0);
  const [showHint, setShowHint] = useState(false);
  const lettersRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved) document.documentElement.setAttribute("data-theme", saved);

    const handleClickOutside = (e: MouseEvent) => {
      if (
        showHint &&
        lettersRef.current &&
        !lettersRef.current.contains(e.target as Node)
      ) {
        setShowHint(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [showHint]);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 100);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const changeTheme = (theme: string, e: React.MouseEvent<HTMLElement>) => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    const containerRect = lettersRef.current!.getBoundingClientRect();
    const dotWidth = 8;
    const left = rect.left - containerRect.left + rect.width / 2 - dotWidth / 2;
    setDotLeft(left);
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 w-full z-20">
      <div
        className={`
          navbar mx-auto flex flex-wrap items-center
          justify-center sm:justify-between
          px-4 w-[90vw] md:w-[70vw] lg:w-[50vw] py-2 rounded-b-3xl
          drop-shadow-xl transition-opacity duration-500
          bg-base-content bg-opacity-20 ${isScrolled ? "bg-opacity-40" : "bg-opacity-10"}
        `}
      >
        {/* Left: CHRISTIAN + hint (always centered on mobile) */}
        <div
          ref={lettersRef}
          className="relative inline-flex items-center flex-shrink-0"
        >
          {/* Dot indicator */}
          <div
            className="absolute -top-2 w-2 h-2 rounded-full bg-primary transition-all duration-300"
            style={{ left: dotLeft }}
          />
          {letters.map(({ ch, theme }) => (
            <span
              key={theme}
              onClick={(e) => changeTheme(theme, e)}
              className="font-['Silkscreen'] text-white text-2xl sm:text-3xl cursor-pointer select-none"
            >
              {ch}
            </span>
          ))}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setShowHint((v) => !v);
            }}
            className="ml-2 flex items-center justify-center pl-1"
            title="Hint"
          >
            <FontAwesomeIcon
              icon={faQuestionCircle}
              className="text-lg sm:text-xl text-base-content opacity-70"
            />
          </button>
          {showHint && (
            <div
              className="absolute top-full mt-2 bg-base-content bg-opacity-90 text-white text-xs sm:text-sm rounded-lg shadow-lg p-2 w-max z-30"
              style={{ left: "50%", transform: "translateX(-50%)" }}
            >
              Apasă pe litere pentru a schimba tema!
            </div>
          )}
        </div>

        {/* Nav Icons (centered on mobile) */}
        <div className="flex flex-wrap items-center space-x-4 sm:space-x-6 mt-2 sm:mt-0">
          <button
            onClick={() => scrollToSection("hero")}
            className="text-white text-lg sm:text-xl hover:text-primary"
            title="Home"
          >
            <FontAwesomeIcon icon={faHome} />
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className="text-white text-lg sm:text-xl hover:text-primary"
            title="About Me"
          >
            <FontAwesomeIcon icon={faUser} />
          </button>
          <button
            onClick={() => scrollToSection("experience")}
            className="text-white text-lg sm:text-xl hover:text-primary"
            title="My Experiences"
          >
            <FontAwesomeIcon icon={faBriefcase} />
          </button>
          <button
            onClick={() => scrollToSection("projects")}
            className="text-white text-lg sm:text-xl hover:text-primary"
            title="My Projects"
          >
            <FontAwesomeIcon icon={faProjectDiagram} />
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="text-white text-lg sm:text-xl hover:text-primary"
            title="Contact Me"
          >
            <FontAwesomeIcon icon={faEnvelope} />
          </button>
        </div>
      </div>
    </nav>
  );
}
