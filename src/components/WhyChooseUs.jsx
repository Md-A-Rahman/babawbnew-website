import React from "react";

export default function WhyChooseUs() {
  return (
    <section id="why" className="py-16 bg-white transition-all duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-blue-900 mb-4">Why Choose Us?</h2>
          <div className="w-24 h-1 bg-red-600 mx-auto rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-blue-50 rounded-xl shadow-md p-6 flex flex-col items-center text-center">
            <span className="text-4xl text-blue-700 mb-2">⚖️</span>
            <h4 className="font-bold text-lg mb-1">Digital Accuracy</h4>
            <p>State-of-the-art digital weighbridge for precise measurements.</p>
          </div>
          <div className="bg-blue-50 rounded-xl shadow-md p-6 flex flex-col items-center text-center">
            <span className="text-4xl text-blue-700 mb-2">⏰</span>
            <h4 className="font-bold text-lg mb-1">24/7 Availability</h4>
            <p>Always open to serve you, day or night.</p>
          </div>
          <div className="bg-blue-50 rounded-xl shadow-md p-6 flex flex-col items-center text-center">
            <span className="text-4xl text-blue-700 mb-2">👷‍♂️</span>
            <h4 className="font-bold text-lg mb-1">Professional Team</h4>
            <p>Experienced staff dedicated to quick and courteous service.</p>
          </div>
          <div className="bg-blue-50 rounded-xl shadow-md p-6 flex flex-col items-center text-center">
            <span className="text-4xl text-blue-700 mb-2">🚚</span>
            <h4 className="font-bold text-lg mb-1">All Vehicle Types</h4>
            <p>Weighing solutions for trucks, lorries, and heavy vehicles.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
