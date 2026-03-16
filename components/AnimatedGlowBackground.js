"use client";

import { motion, useSpring } from "framer-motion";
import { useEffect } from "react";

const glows = [
  {
    className:
      "absolute left-[-10rem] top-[-7rem] h-[30rem] w-[30rem] rounded-full bg-[radial-gradient(circle,_rgba(34,211,238,0.15)_0%,_rgba(34,211,238,0)_68%)] blur-[100px]",
    animate: {
      x: [0, 36, 0],
      y: [0, 28, 0],
      scale: [1, 1.08, 1],
    },
    duration: 18,
  },
  {
    className:
      "absolute right-[-8rem] top-[14rem] h-[26rem] w-[26rem] rounded-full bg-[radial-gradient(circle,_rgba(59,130,246,0.14)_0%,_rgba(59,130,246,0)_68%)] blur-[110px]",
    animate: {
      x: [0, -42, 0],
      y: [0, 24, 0],
      scale: [1, 1.06, 1],
    },
    duration: 20,
  },
  {
    className:
      "absolute bottom-[-10rem] left-1/2 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,_rgba(14,165,233,0.12)_0%,_rgba(14,165,233,0)_70%)] blur-[120px]",
    animate: {
      x: [0, 24, 0],
      y: [0, -30, 0],
      scale: [1, 1.04, 1],
    },
    duration: 16,
  },
];

export default function AnimatedGlowBackground() {
  const mouseX = useSpring(0, { stiffness: 45, damping: 18, mass: 0.8 });
  const mouseY = useSpring(0, { stiffness: 45, damping: 18, mass: 0.8 });

  useEffect(() => {
    mouseX.set(window.innerWidth / 2);
    mouseY.set(window.innerHeight / 2);

    const handleMouseMove = (event) => {
      mouseX.set(event.clientX);
      mouseY.set(event.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mouseX, mouseY]);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {glows.map((glow, index) => (
        <motion.div
          key={index}
          className={glow.className}
          animate={glow.animate}
          transition={{
            duration: glow.duration,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
        />
      ))}

      <motion.div
        style={{
          x: mouseX,
          y: mouseY,
        }}
        className="absolute left-0 top-0 h-[22rem] w-[22rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,_rgba(34,211,238,0.14)_0%,_rgba(34,211,238,0.08)_22%,_rgba(34,211,238,0)_68%)] blur-[100px]"
      />
    </div>
  );
}
