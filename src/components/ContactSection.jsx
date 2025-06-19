import React from "react";
import Button from "./Button";
// Icons would be imported as needed

export default function ContactSection() {
  const companyName = "BABA WEIGH BRIDGE";
  const address = "8-13-125, Nh 44, Bilal Nagar, Nawab Saheb Kunta, Opposite Mir Alam Tank, Bilal Nagar-500062";
  return (
    <section id="contact" className="py-16 bg-blue-100/60 transition-all duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-blue-900 mb-4">Contact Us</h2>
          <div className="w-24 h-1 bg-red-600 mx-auto rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Contact Info */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 md:p-10 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold text-blue-900 mb-4">Our Address</h3>
              <p className="text-blue-900 mb-2">{address}</p>
              <h3 className="text-xl font-bold text-blue-900 mt-6 mb-4">Phone</h3>
              <p className="text-blue-900 mb-2">+91 12345 67890</p>
              <h3 className="text-xl font-bold text-blue-900 mt-6 mb-4">Hours</h3>
              <p className="text-blue-900">Open 24/7</p>
            </div>
            <div className="mt-8">
              <Button>
                Get Directions
              </Button>
            </div>
          </div>
          {/* Google Maps Embed */}
          <div className="bg-white rounded-xl shadow-xl border border-blue-200 h-80 md:h-full w-full overflow-hidden flex flex-col items-center justify-center p-2 animate-fade-in">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3808.592399134246!2d78.44346317542492!3d17.335204604305844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb97d8d961a93d%3A0x193f17ffa7c5d4d4!2sBABA%20Weigh%20Bridge!5e0!3m2!1sen!2sin!4v1749414597897!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
