import React from "react";
import { motion } from "framer-motion";

/**
 * AnimatedSection – slides/fades content every time it enters the viewport (20% visible).
 * Usage: <AnimatedSection id="about" className="py-16"> ... </AnimatedSection>
 */
const AnimatedSection = ({ children, className = "", ...rest }) => (
  <motion.section
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: false, amount: 0.2 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    className={className}
    {...rest}
  >
    {children}
  </motion.section>
);

export default AnimatedSection;
