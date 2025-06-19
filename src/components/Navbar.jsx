import React from "react";
import Button from "./Button";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur border-b border-amber-300 shadow-md animate-slide-down">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20">
        <div className="flex items-center space-x-4">
          <span className="text-2xl font-extrabold text-cyan-600 tracking-tight drop-shadow-lg">BABA WEIGH BRIDGE</span>
        </div>
        <div className="hidden md:flex items-center space-x-8">
          <a href="#hero" className="text-cyan-900 hover:text-red-600 font-semibold transition-colors">Home</a>
          <a href="#why" className="text-cyan-900 hover:text-red-600 font-semibold transition-colors">Why Choose Us</a>
          <a href="#about" className="text-cyan-900 hover:text-red-600 font-semibold transition-colors">About</a>
          <a href="#services" className="text-cyan-900 hover:text-red-600 font-semibold transition-colors">Services</a>
          <a href="#contact" className="text-cyan-900 hover:text-red-600 font-semibold transition-colors">Contact</a>
        </div>
        <div className="md:hidden flex items-center">
          {/* Mobile menu button can be implemented here if needed */}
        </div>
      </nav>
    </header>
  );
}
