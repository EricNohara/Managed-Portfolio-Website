import { motion } from "framer-motion";
import { ReactNode, CSSProperties } from "react";

const bounceUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 500,
      damping: 30,
    },
  },
};

interface ScrollAnimationProps {
  children: ReactNode;
  style?: CSSProperties;
  amount?: number;
}

export function ScrollAnimation({
  children,
  style,
  amount = 0.09,
}: ScrollAnimationProps) {
  return (
    <motion.div
      variants={bounceUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount }}
      style={style}
    >
      {children}
    </motion.div>
  );
}

const bounceLeft = {
  hidden: { opacity: 0, x: 80 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring" as const,
      stiffness: 500,
      damping: 30,
    },
  },
};

// Usage example:
export function ScrollAnimationLeft({
  children,
  style,
  amount = 0.2,
}: ScrollAnimationProps) {
  return (
    <motion.div
      variants={bounceLeft}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount }}
      style={style}
    >
      {children}
    </motion.div>
  );
}
