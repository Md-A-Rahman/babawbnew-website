import React from "react";

export default function Footer() {
  const companyName = "BABA WEIGH BRIDGE";
  return (
    <footer className="bg-blue-950 text-cyan-100 py-10 shadow-inner border-t border-blue-800 transition-all duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center transition-all duration-300">
        <p className="text-lg font-semibold mb-2 transition-all duration-300">
          {companyName}
        </p>
        <p className="text-sm mb-3 transition-all duration-300">
          Our responsibility ceases once the vehicle leaves the platform.
        </p>
        <div className="text-xs text-gray-400 mb-3 transition-all duration-300">
          <span className="mx-2 hover:text-white transition-colors cursor-pointer transition-all duration-300">Privacy Policy</span>
          <span className="mx-1 transition-all duration-300">|</span>
          <span className="mx-2 hover:text-white transition-colors cursor-pointer transition-all duration-300">Terms of Service</span>
        </div>
        <p className="text-xs text-gray-500 transition-all duration-300">
          {new Date().getFullYear()} {companyName}. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
