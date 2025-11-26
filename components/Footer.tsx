"use client";

import { Facebook, Twitter, Instagram, Linkedin, Heart } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  const services = [
    { name: "Prescription Services", href: "#services" },
    { name: "Immunizations", href: "#services" },
    { name: "Health Monitoring", href: "#services" },
    { name: "Medication Management", href: "#services" },
    { name: "Medicare Consultation", href: "#services" },
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-6">
              <div className="relative w-48 h-14 md:w-56 md:h-16 lg:w-64 lg:h-20 flex-shrink-0">
                <Image
                  src="/logo.png"
                  alt="PrimeCare Pharmacy Logo"
                  fill
                  sizes="(max-width: 768px) 192px, (max-width: 1024px) 224px, 256px"
                  className="object-contain"
                />
              </div>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Serving Spring Hill, FL with home delivery service available for disabled and elderly patients. Your trusted HealthMart pharmacy accepting all major insurance plans. Contactless delivery and curbside pickup available.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/Primecarepharmacyfl/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-primary-600 transition-all transform hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-primary-600 transition-all transform hover:scale-110"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-primary-600 transition-all transform hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-primary-600 transition-all transform hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"
                  >
                    <span className="text-primary-400">→</span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-6">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <a
                    href={service.href}
                    className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"
                  >
                    <span className="text-primary-400">→</span>
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6">Get In Touch</h3>
            <ul className="space-y-4 text-gray-400">
              <li>
                <div className="font-semibold text-white mb-1">Address</div>
                2176 Mariner Blvd<br />
                Spring Hill, FL, United States
              </li>
              <li>
                <div className="font-semibold text-white mb-1">Phone</div>
                <a href="tel:352-600-8083" className="hover:text-white transition">
                  (352) 600-8083
                </a>
                <br />
                <a href="https://wa.me/13524283984" className="hover:text-white transition text-sm">
                  WhatsApp: +1 352-428-3984
                </a>
              </li>
              <li>
                <div className="font-semibold text-white mb-1">Email</div>
                <a href="mailto:primecarerxpharmacy@gmail.com" className="hover:text-white transition">
                  primecarerxpharmacy@gmail.com
                </a>
              </li>
              <li>
                <div className="font-semibold text-white mb-1">Hours</div>
                Mon-Fri: 9am-5pm<br />
                Sat-Sun: Closed
              </li>
              <li>
                <div className="font-semibold text-white mb-1">Insurance</div>
                We accept all major insurance plans
              </li>
            </ul>
          </div>
          
          {/* HealthMart Link */}
          <div className="md:col-span-2 lg:col-span-1">
            <h3 className="text-lg font-bold mb-6">HealthMart</h3>
            <p className="text-gray-400 mb-4 text-sm">
              Proud member of the HealthMart pharmacy network, providing trusted healthcare services.
            </p>
            <a
              href="https://www.healthmart.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-400 hover:text-primary-300 font-semibold underline text-sm"
            >
              Visit HealthMart.com →
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm">
              © {currentYear} PrimeCare Rx. All rights reserved.
            </div>
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              Made with <Heart size={16} className="text-red-500 fill-red-500" /> for our community
            </div>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                Accessibility
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

