"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-20 sm:pt-24 md:pt-32">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/patient.jpeg"
          alt="Pharmacist with patient background"
          fill
          sizes="100vw"
          className="object-cover"
          priority
          quality={90}
        />
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-600/85 via-primary-700/80 to-primary-800/85"></div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10 z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary-400 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-0 pb-40 md:pb-32">
        <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            {/* Big Banner */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-6"
            >
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-4 leading-tight">
                <span className="text-white drop-shadow-lg uppercase">PRIME CARE</span>
                <br />
                <span className="text-white drop-shadow-lg uppercase">PHARMACY</span>
              </h1>
              <div className="inline-block bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full">
                <p className="text-lg md:text-xl font-semibold text-white">
                  A HealthMart Pharmacy
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              className="inline-block bg-primary-600/80 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold mb-4"
            >
              ✨ Serving Spring Hill, FL with Care & Compassion
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg md:text-xl text-white mb-8 leading-relaxed max-w-2xl"
            >
              Experience personalized pharmaceutical care with home delivery service available. We accept all major insurance and proudly serve our Spring Hill community.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <a
                href="#services"
                className="bg-white text-primary-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-primary-50 transition-all transform hover:scale-105 shadow-xl flex items-center justify-center gap-2 group"
              >
                Explore Services
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </a>
              <a
                href="#contact"
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-primary-600 transition-all transform hover:scale-105"
              >
                Contact Us
              </a>
            </motion.div>
          </motion.div>

          {/* Right Content - Stats Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:grid grid-cols-2 gap-4"
          >
            {[
              { number: "16", label: "Years Experience", color: "bg-white" },
              { number: "10K+", label: "Happy Patients", color: "bg-white" },
              { number: "99%", label: "Satisfaction Rate", color: "bg-primary-500" },
              { number: "All", label: "Major Insurance", color: "bg-white" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                className={`${
                  stat.color === "bg-white" ? "bg-white text-primary-600" : `${stat.color} text-white`
                } p-5 rounded-2xl shadow-2xl transform hover:scale-105 transition-all`}
              >
                <div className="text-3xl font-bold mb-2">{stat.number}</div>
                <div className="text-xs font-medium opacity-80 leading-tight">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0 z-0 pointer-events-none">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full" preserveAspectRatio="none">
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,138.7C960,139,1056,117,1152,106.7C1248,96,1344,96,1392,96L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  );
}

