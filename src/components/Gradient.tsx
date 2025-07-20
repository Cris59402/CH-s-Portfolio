import React from "react";

export const Gradient = () => {
  // generate 100 static stars
  const starCount = 100;
  const stars = Array.from({ length: starCount }, (_, i) => ({
    id: i,
    style: {
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      width: `${Math.random() * 2 + 1}px`,
      height: `${Math.random() * 2 + 1}px`,
      animationDuration: `${Math.random() * 3 + 2}s`,
      animationDelay: `${Math.random() * 5}s`,
    },
  }));

  return (
    <>
      {/* Stars (fixed behind everything) */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {stars.map((star) => (
          <div
            key={star.id}
            className="star"
            style={{
              position: "absolute",
              background: "#fff",
              borderRadius: "50%",
              opacity: 0,
              ...star.style,
            }}
          />
        ))}
      </div>

      {/* Static gradient layers with reduced opacity */}
      <div className="fixed inset-0 z-10 pointer-events-none">
        <div className="first_gradient">
          <div className="first_gradient_div absolute inset-0 opacity-20" />
        </div>
        <div className="second_gradient">
          <div className="second_gradient_div absolute inset-0 opacity-20" />
        </div>
      </div>

      {/* only star blink animation */}
      <style>{`
        .star {
          animation: blink infinite ease-in-out;
        }
        @keyframes blink {
          0%,100% { opacity: 0.2; }
          50%      { opacity: 1;   }
        }
      `}</style>
    </>
  );
};
