import { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export const Footer = () => {
  const getYear = () => new Date().getFullYear();
  const text = `Copyright © CH ${getYear()}`;
  const letters = text.split("");

  const [showMessage, setShowMessage] = useState(false);
  const starRef = useRef<HTMLButtonElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);

  const toggleMessage = () => setShowMessage(v => !v);

  // Hide message on outside click
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (
        showMessage &&
        starRef.current &&
        footerRef.current &&
        !starRef.current.contains(e.target as Node) &&
        !footerRef.current.contains(e.target as Node)
      ) {
        setShowMessage(false);
      }
    };
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [showMessage]);

  return (
    <footer
      ref={footerRef}
      className="mt-16 sm:mt-48 mb-6 flex justify-center relative"
    >
      {/* Floating message, does not affect layout */}
      {showMessage && (
        <div className="absolute bottom-full mb-2 px-3 py-2 bg-base-content bg-opacity-20 rounded-lg text-base-content brightness-200 contrast-200 text-sm whitespace-nowrap">
          Sper că ți-a plăcut portofoliul meu!
        </div>
      )}

      <div className="flex items-center space-x-4">
        <div className="flex">
          {letters.map((char, idx) => (
            <span
              key={idx}
              className="animate-bounce text-xl tracking-wide text-base-content brightness-200 contrast-200 font-['Silkscreen'] font-bold inline-block"
              style={{
                animationDelay: `${idx * 0.2}s`,
                animationDuration: "2.5s",
              }}
            >
              {char}
            </span>
          ))}
        </div>

        <button
          ref={starRef}
          onClick={toggleMessage}
          title="Lasă un feedback"
          className="p-2 rounded-full hover:bg-base-content hover:bg-opacity-20 transition"
        >
          <FontAwesomeIcon
            icon={faStar}
            className="text-xl text-yellow-400"
          />
        </button>
      </div>
    </footer>
  );
};
