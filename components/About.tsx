"use client";

import { motion } from "framer-motion";
import { Award, Users, Heart, TrendingUp } from "lucide-react";
import Image from "next/image";

export default function About() {
  const values = [
    {
      icon: Heart,
      title: "Compassionate Care",
      description: "We treat every patient with empathy, respect, and genuine concern for their well-being.",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Committed to the highest standards of pharmaceutical care and professional service.",
    },
    {
      icon: Users,
      title: "Community Focus",
      description: "Building lasting relationships and being an integral part of the community we serve.",
    },
    {
      icon: TrendingUp,
      title: "Innovation",
      description: "Embracing modern technology and best practices to enhance patient care and convenience.",
    },
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="inline-block bg-primary-100 text-primary-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              About PrimeCare Rx
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Your Health Is Our{" "}
              <span className="text-primary-600">Priority</span>
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              We&apos;re delighted to serve the communities of Spring Hill, FL. We offer home delivery service available for the disabled and elderly, ensuring everyone has access to the medications and care they need. We accept all major insurance plans.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              As a HealthMart pharmacy, our team of experienced pharmacists and healthcare professionals are committed to going beyond just filling prescriptions. We take the time to understand your unique health needs, answer your questions, and provide guidance that empowers you to take control of your wellness journey. With contactless delivery and curbside pickup options, we make healthcare convenient and accessible.
            </p>
            <div className="mb-8">
              <a
                href="https://www.healthmart.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-600 hover:text-primary-700 font-semibold underline"
              >
                Learn more about HealthMart →
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3 sm:gap-6 mb-8">
              <div className="text-center bg-gray-50 rounded-xl p-4">
                <div className="text-2xl sm:text-3xl font-bold text-primary-600 mb-1">16</div>
                <div className="text-xs sm:text-sm text-gray-600">Years Experience</div>
              </div>
              <div className="text-center bg-gray-50 rounded-xl p-4">
                <div className="text-2xl sm:text-3xl font-bold text-primary-600 mb-1">10K+</div>
                <div className="text-xs sm:text-sm text-gray-600">Patients Served</div>
              </div>
              <div className="text-center bg-gray-50 rounded-xl p-4">
                <div className="text-2xl sm:text-3xl font-bold text-primary-600 mb-1">99%</div>
                <div className="text-xs sm:text-sm text-gray-600">Satisfaction Rate</div>
              </div>
            </div>

            <a
              href="#contact"
              className="inline-block bg-gradient-to-r from-primary-600 to-primary-700 text-white px-8 py-4 rounded-full font-bold hover:from-primary-700 hover:to-primary-800 transition-all transform hover:scale-105 shadow-lg"
            >
              Become a Patient
            </a>
          </motion.div>

          {/* Right Content - Store Image & Values Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Store Image */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="relative w-full h-64 md:h-80 rounded-2xl overflow-hidden shadow-2xl"
            >
              <Image
                src="/store.webp"
                alt="PrimeCare Pharmacy Store"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </motion.div>

            {/* Values Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl border border-gray-100 hover:border-primary-200 hover:shadow-lg transition-all"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center mb-4">
                    <value.icon className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

