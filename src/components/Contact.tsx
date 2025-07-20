import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faRocket,
} from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedinIn,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

export const Contact = () => {
  return (
    <div id="contact" className="pt-20 sm:pt-16 px-4 sm:px-0">
      {/* Header */}
      <div className="flex flex-col items-center mt-4 space-y-2">
        <h2 className="text-4xl sm:text-5xl font-bold text-base-content brightness-200 contrast-200 text-center">
          Contact Me
        </h2>
        <h3 className="text-xl sm:text-2xl text-base-content brightness-200 contrast-200 text-center">
          Let’s get in touch
        </h3>
        <div className="divider w-1/2 sm:w-[40%] h-1 divider-[base-content] mx-auto" />
      </div>

      {/* Content Card */}
      <div className="mt-4 sm:mt-6 flex justify-center">
        <div className="bg-base-content bg-opacity-20 drop-shadow-lg rounded-3xl w-full max-w-md sm:max-w-lg">
          {/* Title */}
          <div className="px-6 pt-4">
            <h4 className="text-xl sm:text-2xl font-semibold text-base-content brightness-200 contrast-200 text-center">
              Let&apos;s get connected!
            </h4>
          </div>

          {/* Buttons grid */}
          <div className="px-6 sm:px-8 py-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <button
              onClick={() => (location.href = "mailto:ChristianPM33@gmail.com")}
              className="btn btn-active bg-base-content bg-opacity-20 drop-shadow-lg text-lg sm:text-xl border-0 flex items-center justify-center gap-2 sm:gap-3"
            >
              <FontAwesomeIcon icon={faEnvelope} size="lg" />
              <span>Email Me</span>
            </button>

            <button
              onClick={() => (location.href = "tel:0723725907")}
              className="btn btn-active bg-base-content bg-opacity-20 drop-shadow-lg text-lg sm:text-xl border-0 flex items-center justify-center gap-2 sm:gap-3"
            >
              <FontAwesomeIcon icon={faPhone} size="lg" />
              <span>Call Me</span>
            </button>

            <button
              onClick={() => (location.href = "https://github.com/ChristianPM33")}
              className="btn btn-active bg-base-content bg-opacity-20 drop-shadow-lg text-lg sm:text-xl border-0 flex items-center justify-center gap-2 sm:gap-3 col-span-1 sm:col-span-2"
            >
              <FontAwesomeIcon icon={faGithub} size="lg" />
              <span>GitHub</span>
            </button>

            <button
              onClick={() =>
                (location.href = "https://www.linkedin.com/in/ChristianPM33/")
              }
              className="btn btn-active bg-base-content bg-opacity-20 drop-shadow-lg text-lg sm:text-xl border-0 flex items-center justify-center gap-2 sm:gap-3 col-span-1 sm:col-span-2"
            >
              <FontAwesomeIcon icon={faLinkedinIn} size="lg" />
              <span>LinkedIn</span>
            </button>

            <button
              onClick={() =>
                (location.href = "https://www.instagram.com/ChristianPM33/")
              }
              className="btn btn-active bg-base-content bg-opacity-20 drop-shadow-lg text-lg sm:text-xl border-0 flex items-center justify-center gap-2 sm:gap-3 col-span-1 sm:col-span-2"
            >
              <FontAwesomeIcon icon={faInstagram} size="lg" />
              <span>Instagram</span>
            </button>
          </div>

          {/* Decorative Rocket Divider */}
          <div className="flex justify-center items-center pb-4">
            <span className="block h-px w-12 sm:w-16 bg-base-content opacity-50" />
            <FontAwesomeIcon
              icon={faRocket}
              className="mx-4 text-xl sm:text-2xl brightness-200 contrast-200"
            />
            <span className="block h-px w-12 sm:w-16 bg-base-content opacity-50" />
          </div>
        </div>
      </div>
    </div>
  );
};
