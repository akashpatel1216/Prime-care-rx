"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Heart } from "lucide-react";

export default function ThankYou() {
  return (
    <section className="py-24 bg-gradient-to-br from-primary-50 via-white to-primary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="inline-block bg-primary-100 text-primary-600 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            Thank You
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Thank You for Choosing{" "}
            <span className="text-primary-600">PrimeCare Pharmacy</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            We&apos;re grateful for the trust you place in us to care for your health and wellness needs.
          </p>

          {/* Pharmacist Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative w-full max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-2xl mb-8 bg-white p-4 md:p-6"
          >
            <div className="relative w-full">
              <Image
                src="/pharmacist.jpeg"
                alt="PrimeCare Pharmacy Team - Thank You"
                width={1200}
                height={800}
                sizes="(max-width: 768px) 100vw, 80vw"
                className="w-full h-auto object-contain rounded-2xl"
                style={{ maxHeight: '600px' }}
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-2 text-primary-600 text-lg font-semibold"
          >
            <Heart size={24} className="text-red-500 fill-red-500" />
            <span>Your Health Is Our Priority</span>
            <Heart size={24} className="text-red-500 fill-red-500" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

