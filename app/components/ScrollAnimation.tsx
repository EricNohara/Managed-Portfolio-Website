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
}

export default function ScrollAnimation({
  children,
  style,
}: ScrollAnimationProps) {
  return (
    <motion.div
      variants={bounceUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.09 }}
      style={style}
    >
      {children}
    </motion.div>
  );
}
