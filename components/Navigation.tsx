"use client";

import { useState } from "react";
import { Menu, X, Phone, Mail } from "lucide-react";

interface NavigationProps {
  isScrolled: boolean;
}

export default function Navigation({ isScrolled }: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#services", label: "Services" },
    { href: "#about", label: "About" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="bg-primary-600 text-white py-2 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center gap-6">
              <a href="tel:352-600-8083" className="flex items-center gap-2 hover:text-primary-100 transition">
                <Phone size={14} />
                <span>(352) 600-8083</span>
              </a>
              <a href="mailto:primecarerxpharmacy@gmail.com" className="flex items-center gap-2 hover:text-primary-100 transition">
                <Mail size={14} />
                <span>primecarerxpharmacy@gmail.com</span>
              </a>
            </div>
            <div className="text-sm">
              Mon-Fri: 9am-6pm | Sat: 9am-1pm | Sun: Closed
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white shadow-lg py-3 md:top-0"
            : "bg-transparent py-4 md:top-10"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <a href="#home" className="flex items-center">
              <div className="flex items-center">
                <div className={`text-2xl font-bold transition-colors ${
                  isScrolled ? "text-primary-600" : "text-white"
                }`}>
                  PrimeCare <span className="text-secondary-500">Rx</span>
                </div>
              </div>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`font-medium transition-colors hover:text-primary-500 ${
                    isScrolled ? "text-gray-700" : "text-white"
                  }`}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                className="bg-secondary-500 text-white px-6 py-2.5 rounded-full font-semibold hover:bg-secondary-600 transition-all transform hover:scale-105 shadow-lg"
              >
                Refill Now
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`md:hidden p-2 rounded-lg transition-colors ${
                isScrolled ? "text-gray-700" : "text-white"
              }`}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t mt-4">
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-gray-700 hover:text-primary-500 font-medium py-2"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block bg-secondary-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-secondary-600 transition text-center"
              >
                Refill Now
              </a>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}

