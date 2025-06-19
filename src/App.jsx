import React from 'react';
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import WhyChooseUs from "./components/WhyChooseUs";
import AnimatedSection from "./components/AnimatedSection";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <AnimatedSection><AboutSection /></AnimatedSection>
        <AnimatedSection><WhyChooseUs /></AnimatedSection>
        <AnimatedSection><ServicesSection /></AnimatedSection>
        <AnimatedSection><ContactSection /></AnimatedSection>
      </main>
      <Footer />
    </div>
  );
}

export default App;