import React from "react";
import { FaWeightHanging, FaClock, FaReceipt, FaTruckMoving, FaUserTie, FaTools } from "react-icons/fa";
import AnimatedItem from "./AnimatedItem";

export default function ServicesSection() {
  const services = [
    {
      title: "Digital Weight Measurement",
      desc: "High-precision digital weighing system with instant readings and minimal margin of error.",
      icon: FaWeightHanging,
      color: "from-emerald-400 to-sky-400"
    },
    {
      title: "24/7 Availability",
      desc: "Round-the-clock service to accommodate your schedule, ensuring you never face delays.",
      icon: FaClock,
      color: "from-amber-400 to-pink-500"
    },
    {
      title: "Computerized Receipts",
      desc: "Instant digital receipts with detailed weight information and timestamp for your records.",
      icon: FaReceipt,
      color: "from-indigo-400 to-fuchsia-500"
    },
    {
      title: "Vehicle Types",
      desc: "Capable of weighing all vehicle types from small trucks to heavy transport vehicles.",
      icon: FaTruckMoving,
      color: "from-cyan-400 to-teal-500"
    },
    {
      title: "Professional Staff",
      desc: "Experienced team providing quick and efficient service with proper guidance.",
      icon: FaUserTie,
      color: "from-purple-400 to-pink-400"
    },
    {
      title: "Maintenance",
      desc: "Regular calibration and maintenance ensuring accurate measurements every time.",
      icon: FaTools,
      color: "from-red-400 to-orange-500"
    }
  ];
  return (
    <section id="services" className="py-20 bg-gradient-to-b from-indigo-300 via-sky-50 to-sky-200 transition-all duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-4xl font-extrabold text-emerald-900 text-center mb-14 drop-shadow-lg">Our Premium Services</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map(({ title, desc, icon: Icon, color }, idx) => (
              <AnimatedItem
                key={idx}
                className="group relative p-10 rounded-3xl bg-white/20 backdrop-blur-xl border border-white/15 shadow-lg hover:shadow-2xl transform-gpu transition-all duration-300 hover:-translate-y-2"
              >
                {/* Icon bubble */}
                <div className={`mb-5 w-14 h-14 rounded-full bg-gradient-to-br ${color} flex items-center justify-center text-white shadow-lg`}>
                  <Icon className="w-7 h-7" />
                </div>
                <h5 className="font-semibold text-xl text-emerald-900 mb-2 group-hover:text-red-600 transition-colors duration-300">
                  {title}
                </h5>
                <p className="text-lg text-blue-900/80 leading-relaxed">
                  {desc}
                </p>
               </AnimatedItem>
            ))}
          </div>
        </div>
      </section>
  );
}
