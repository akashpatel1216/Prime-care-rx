"use client";

import { Facebook, Twitter, Instagram, Linkedin, Heart } from "lucide-react";

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
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-6">
              <div className="text-3xl font-bold">
                PrimeCare <span className="text-secondary-400">Rx</span>
              </div>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Serving Spring Hill, FL with complimentary free home delivery for disabled and elderly patients. Your trusted community pharmacy with contactless delivery and curbside pickup.
            </p>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
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
                <div className="font-semibold text-white mb-1">Services</div>
                Free Home Delivery<br />
                Contactless • Curbside Pickup
              </li>
            </ul>
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

