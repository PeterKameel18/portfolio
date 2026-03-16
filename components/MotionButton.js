"use client";

import { motion } from "framer-motion";

export default function MotionButton({
  href,
  className,
  children,
  target,
  rel,
}) {
  return (
    <motion.a
      href={href}
      target={target}
      rel={rel}
      whileHover={{ y: -2, scale: 1.01 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.18, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.a>
  );
}
