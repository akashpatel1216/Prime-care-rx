"use client";

import { motion } from "framer-motion";
import { Truck, Shield, CreditCard, CheckCircle } from "lucide-react";

export default function FeaturesBanner() {
  const features = [
    {
      icon: Truck,
      title: "Home Delivery Service Available",
      description: "For disabled and elderly patients",
      color: "bg-primary-500",
    },
    {
      icon: CheckCircle,
      title: "Multiple Service Options",
      description: "Contactless delivery • Curbside pickup • In-store pickup",
      color: "bg-primary-600",
    },
    {
      icon: Shield,
      title: "We Accept All Major Insurance",
      description: "Most insurance plans accepted",
      color: "bg-primary-700",
    },
  ];

  return (
    <section className="bg-gradient-to-r from-primary-600 via-primary-700 to-primary-800 text-white py-6 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-all"
            >
              <div className={`${feature.color} p-3 rounded-lg flex-shrink-0`}>
                <feature.icon size={24} className="text-white" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-sm md:text-base mb-1">
                  {feature.title}
                </h3>
                <p className="text-xs md:text-sm text-white/90">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}



