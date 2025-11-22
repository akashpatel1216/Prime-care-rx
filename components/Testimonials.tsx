"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Mitchell",
      role: "Regular Patient",
      content: "PrimeCare Rx has been a game-changer for my family's healthcare. The pharmacists are incredibly knowledgeable and always take time to explain medications thoroughly. The personal touch they provide is something you just don't get at chain pharmacies.",
      rating: 5,
    },
    {
      name: "Robert Thompson",
      role: "Senior Patient",
      content: "As a senior managing multiple prescriptions, the medication synchronization service has made my life so much easier. Everything is ready on the same day, and the staff calls to remind me. It's like having a healthcare partner who truly cares.",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      role: "Working Professional",
      content: "The convenience and professionalism at PrimeCare Rx is unmatched. They remember my name, my preferences, and genuinely care about my well-being. The immunization services are quick and efficient. Highly recommend!",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "Local Business Owner",
      content: "I switched to PrimeCare Rx a year ago and haven't looked back. The medication therapy management service helped me identify potential drug interactions that no one else caught. They're thorough, professional, and truly invested in patient health.",
      rating: 5,
    },
    {
      name: "Jennifer Walsh",
      role: "Family Caregiver",
      content: "Managing my elderly mother's medications was overwhelming until we found PrimeCare Rx. The multi-dose packaging and clear labeling have eliminated confusion. The staff treats us like family. I'm so grateful for their support!",
      rating: 5,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block bg-secondary-100 text-secondary-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Patient Testimonials
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What Our Patients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real stories from real people who trust us with their healthcare needs.
          </p>
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 relative"
          >
            {/* Quote Icon */}
            <div className="absolute top-8 right-8 text-primary-100">
              <Quote size={64} fill="currentColor" />
            </div>

            {/* Stars */}
            <div className="flex gap-1 mb-6">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <Star key={i} size={20} className="text-yellow-400 fill-yellow-400" />
              ))}
            </div>

            {/* Content */}
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8 relative z-10">
              &ldquo;{testimonials[currentIndex].content}&rdquo;
            </p>

            {/* Author */}
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center text-white text-xl font-bold">
                {testimonials[currentIndex].name.charAt(0)}
              </div>
              <div>
                <div className="font-bold text-gray-900 text-lg">
                  {testimonials[currentIndex].name}
                </div>
                <div className="text-gray-600">
                  {testimonials[currentIndex].role}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-primary-50 transition-all transform hover:scale-110"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} className="text-primary-600" />
            </button>
            <button
              onClick={nextTestimonial}
              className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-primary-50 transition-all transform hover:scale-110"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} className="text-primary-600" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? "bg-primary-600 w-8"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-600 mb-6">
            Join thousands of satisfied patients who trust PrimeCare Rx
          </p>
          <a
            href="#contact"
            className="inline-block bg-gradient-to-r from-secondary-500 to-secondary-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:from-secondary-600 hover:to-secondary-700 transition-all transform hover:scale-105 shadow-xl"
          >
            Start Your Journey Today
          </a>
        </motion.div>
      </div>
    </section>
  );
}

