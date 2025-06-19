import React from "react";
import { motion } from "framer-motion";
import AnimatedItem from "./AnimatedItem";

const HeroSection = () => {
  return (
    <motion.section id="hero"
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: "easeOut" }} className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-r from-emerald-500 via-cyan-400 to-indigo-600 text-white overflow-hidden">
      <div className="text-center">
        <AnimatedItem as="h1" className="text-5xl md:text-6xl font-extrabold mb-6 text-shadow">
          <span className="text-red-600">BABA WEIGH BRIDGE</span> 
        </AnimatedItem>
        <AnimatedItem as="p" className="text-xl text-white/90 mb-8" delay={0.15}>
          Your trusted partner for accurate and reliable weighing solutions
        </AnimatedItem>
      </div>
    </motion.section>
  );
};

export default HeroSection;