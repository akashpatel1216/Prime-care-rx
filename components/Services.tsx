"use client";

import { motion } from "framer-motion";
import { Pill, Syringe, Heart, Users, Calendar, Package, FileText, Shield } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: Pill,
      title: "Prescription Services",
      description: "Fast, accurate prescription filling with home delivery service available for disabled and elderly patients. Contactless delivery and curbside pickup available. We accept all major insurance.",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Syringe,
      title: "Immunizations",
      description: "Comprehensive vaccination services including flu shots, COVID-19, and travel vaccines.",
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: Heart,
      title: "Health Monitoring",
      description: "Blood pressure checks, diabetes management, and cholesterol screening services.",
      color: "from-pink-500 to-pink-600",
    },
    {
      icon: Users,
      title: "Medication Therapy Management",
      description: "Comprehensive medication reviews to optimize your treatment and prevent drug interactions.",
      color: "from-green-500 to-green-600",
    },
    {
      icon: Calendar,
      title: "Medication Synchronization",
      description: "Align all your prescriptions to be refilled on the same day for ultimate convenience.",
      color: "from-orange-500 to-orange-600",
    },
    {
      icon: Package,
      title: "Multi-Dose Packaging",
      description: "Organized medication packaging to help you take the right dose at the right time.",
      color: "from-teal-500 to-teal-600",
    },
    {
      icon: FileText,
      title: "Medicare Consultation",
      description: "Expert guidance on Medicare Part D plans and open enrollment assistance.",
      color: "from-indigo-500 to-indigo-600",
    },
  ];

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block bg-primary-100 text-primary-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Our Services
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Comprehensive Healthcare Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From prescription management to preventive care, we offer a full range of pharmaceutical services tailored to your needs.
          </p>
          <div className="mt-4">
            <a
              href="https://www.healthmart.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-600 hover:text-primary-700 font-semibold underline"
            >
              Learn more about HealthMart Pharmacy Services →
            </a>
          </div>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Icon */}
              <div className={`w-14 h-14 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <service.icon className="text-white" size={28} />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>

              {/* Hover Effect Border */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity`}></div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <a
            href="#contact"
            className="inline-block bg-primary-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-primary-700 transition-all transform hover:scale-105 shadow-xl"
          >
            Schedule a Consultation
          </a>
        </motion.div>
      </div>
    </section>
  );
}

