export const Hero = () => {
  return (
    <div
      id="hero"
      className="
        flex flex-col items-center justify-center
        h-screen relative
        -mt-8       /* mută componenta în sus pe mobil */
        sm:mt-0     /* reset pe desktop */
        px-4        /* padding pe mobil */
        sm:px-0     /* padding desktop */
        pt-8        /* ridică conținutul pe mobil */
        sm:pt-0     /* restore desktop */
      "
    >
      {/* Greeting */}
      <div
        className="
          text-base-content font-bold bg-clip-text
          text-4xl    /* mobil */
          sm:text-6xl /* desktop */
          text-center
        "
      >
        <span className="text-base-content brightness-200 contrast-200 block">
          Hello! My name is{" "}
        </span>
        <span className="text-transparent bg-gradient-to-b from-primary to-secondary bg-clip-text block">
          Christian
        </span>
      </div>

      {/* Subtitle */}
      <div
        className="
          mt-4
          text-2xl     /* mobil */
          sm:text-4xl  /* desktop */
          text-transparent bg-gradient-to-b from-primary to-secondary bg-clip-text
          text-center
        "
      >
        I’m a software developer based in Romania, specializing in building web
        applications.
      </div>

      {/* Call to action */}
      <div className="flex flex-row gap-6 justify-center items-center mt-8 sm:mt-12">
        <button
          onClick={() => window.open("https://drive.google.com/file/d/1JSHcOB7K3tJwUhOa58pm2R32C56XaUlV/view?usp=drive_link", "_blank")}
          className="
            btn btn-active
            bg-base-content bg-opacity-20
            drop-shadow-lg
            text-xl
            border-0
          "
        >
          <span className="font-['Silkscreen'] text-base-content brightness-200 contrast-200 tracking-wide">
             More about my CV
          </span>
        </button>
      </div>
    </div>
  );
};
