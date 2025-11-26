"use client";

import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";

export default function Statistics() {
  const stats = [
    { number: 4, label: "Licensed Pharmacists", suffix: "" },
    { number: 16, label: "Years Experience", suffix: "" },
    { number: 10000, label: "Prescriptions Filled Annually", suffix: "+" },
    { number: 99, label: "Customer Satisfaction", suffix: "%" },
  ];

  return (
    <section className="py-24 bg-gradient-to-r from-primary-600 via-primary-700 to-primary-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary-400 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Trusted by Thousands
          </h2>
          <p className="text-xl text-primary-100 max-w-2xl mx-auto">
            Our commitment to excellence is reflected in the numbers and the lasting relationships we build.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              stat={stat}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function StatCard({ stat, index }: { stat: { number: number; label: string; suffix: string }; index: number }) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentRef = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const increment = stat.number / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= stat.number) {
        setCount(stat.number);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isVisible, stat.number]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      viewport={{ once: true }}
      className="text-center"
    >
      <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 md:p-6 hover:bg-white/20 transition-all transform hover:scale-105">
        <div className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-2">
          {count.toLocaleString()}
          {stat.suffix}
        </div>
        <div className="text-white/90 font-medium text-xs sm:text-sm md:text-base leading-tight">
          {stat.label}
        </div>
      </div>
    </motion.div>
  );
}

