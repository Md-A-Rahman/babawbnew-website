import React from "react";
import { motion } from "framer-motion";

/**
 * AnimatedItem – fade & slide up each time it becomes 30% visible.
 * Props: triggerOnce? default false.
 */
const AnimatedItem = ({ children, as: Tag = "div", className = "", triggerOnce = false, delay = 0, ...rest }) => {
  const MotionTag = motion(Tag);
  return (
  <MotionTag
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: triggerOnce, amount: 0.3 }}
    transition={{ duration: 0.6, delay, ease: "easeOut" }}
    className={className}
    {...rest}
  >
    {children}
  </MotionTag>
  );
};

export default AnimatedItem;
