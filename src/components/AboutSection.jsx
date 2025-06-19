import React from "react";

export default function AboutSection() {
  return (
    <section id="about" className="py-16 bg-blue-100/80 transition-all duration-300 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-blue-900 mb-4">About Our Facility & Expertise</h2>
          <div className="w-24 h-1 bg-red-600 mx-auto rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Content - Left side */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 md:p-10">
            <div className="h-full flex flex-col">
              <p className="text-lg md:text-xl text-blue-900 leading-relaxed mb-6">
                Established in 2019, <span className="font-bold text-blue-900">BABA WEIGH BRIDGE</span> in Bilal Nagar, Hyderabad, has quickly become a leading name in the Weighbridge Services industry. We've built a solid reputation based on quality work, customer satisfaction, and a commitment to reliable service.
              </p>
              <p className="text-lg md:text-xl text-blue-900 leading-relaxed mb-8">
                Our facility, conveniently located near Opposite Mir Alam Tank, operates <span className="font-bold">24 hours a day, 7 days a week</span>, ensuring we're always available to meet your needs. We are equipped with state-of-the-art digital weighbridge technology for high-precision measurements and minimal margin of error, catering to all vehicle types from small trucks to heavy transport vehicles.
              </p>
              <h3 className="text-2xl font-bold text-blue-900 mb-6 relative pl-4 border-l-4 border-red-600">
                Our Commitment
              </h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="flex items-center justify-center h-8 w-8 rounded-full bg-blue-100 text-blue-700 font-bold mr-4">1</div>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-blue-900 mb-1">Accuracy & Compliance</h4>
                    <p className="text-blue-800">Our equipment is regularly calibrated and certified, adhering to all industry standards to provide you with trustworthy and accurate readings.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="flex items-center justify-center h-8 w-8 rounded-full bg-blue-100 text-blue-700 font-bold mr-4">2</div>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-blue-900 mb-1">Professional Service</h4>
                    <p className="text-blue-800">Our experienced team is dedicated to providing quick, efficient service with proper guidance, ensuring a smooth process for every driver.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="flex items-center justify-center h-8 w-8 rounded-full bg-blue-100 text-blue-700 font-bold mr-4">3</div>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-blue-900 mb-1">Safety Standards</h4>
                    <p className="text-blue-800">We maintain strict safety protocols to ensure a secure environment for all drivers and their vehicles during operations.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="flex items-center justify-center h-8 w-8 rounded-full bg-blue-100 text-blue-700 font-bold mr-4">4</div>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-blue-900 mb-1">Customer First</h4>
                    <p className="text-blue-800">We pride ourselves on a customer-first approach, striving to deliver exceptional service and support.</p>
                  </div>
                </div>
              </div>
              <div className="mt-10 p-6 bg-blue-50/50 rounded-xl border-l-4 border-red-600">
                <p className="text-lg md:text-xl font-medium text-blue-900 text-center">
                  We are committed to providing <span className="font-bold text-blue-900">accurate, reliable, and efficient</span> weighbridge services to all our commercial customers, ensuring your vehicle remains safe and your records are precise.
                </p>
              </div>
            </div>
          </div>
          {/* Image - Right side */}
          <div className="relative h-full min-h-[400px] rounded-2xl overflow-hidden shadow-xl">
            <img
              src="/src/assets/baba-weigh-bridge-bilal-nagar-hyderabad-weighbridge-services-0mXayyWQis.jpg"
              alt="BABA WEIGH BRIDGE Facility"
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDA3OGQ3IiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48cmVjdCB4PSIzIiB5PSIzIiB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHJ4PSIyIiByeT0iMiI+PC9yZWN0PjxjaXJjbGUgY3g9IjguNSIgY3k9IjguNSIgcj0iMi41Ij48L2NpcmNsZT48cG9seWxpbmUgcG9pbnRzPSIyMSAxNSAxNiAxMCA1IDIxIj48L3BvbHlsaW5lPjwvc3ZnPg==';
                e.target.alt = 'Image not available';
                e.target.className = 'w-full h-full object-contain p-8 bg-blue-50';
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
