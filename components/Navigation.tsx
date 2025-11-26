"use client";

import { useState } from "react";
import { Menu, X, Phone, Mail, Facebook, MessageCircle } from "lucide-react";
import Image from "next/image";

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
                <span className="hidden lg:inline">primecarerxpharmacy@gmail.com</span>
                <span className="lg:hidden">Email Us</span>
              </a>
            </div>
            <div className="text-sm">
              Mon-Fri: 9am-5pm | Sat-Sun: Closed
            </div>
          </div>
        </div>
      </div>

      {/* Social Icons - Bottom Left Corner - Desktop & iPad Only */}
      <div className="hidden md:fixed md:bottom-6 md:left-6 md:z-50 md:flex flex-col gap-3">
        <a
          href="https://www.facebook.com/Primecarepharmacyfl/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 bg-primary-600 rounded-full flex items-center justify-center shadow-xl hover:bg-primary-700 transition-all transform hover:scale-110 border-2 border-white"
          aria-label="Facebook"
        >
          <Facebook size={24} className="text-white" />
        </a>
        <a
          href="https://wa.me/13524283984"
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 bg-primary-600 rounded-full flex items-center justify-center shadow-xl hover:bg-primary-700 transition-all transform hover:scale-110 border-2 border-white"
          aria-label="WhatsApp"
        >
          <MessageCircle size={24} className="text-white" />
        </a>
      </div>

      {/* Main Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-primary-600 shadow-lg py-3 md:top-0"
            : "bg-transparent py-4 md:top-10"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <a href="#home" className="flex items-center z-10">
              <div className="relative w-32 h-10 sm:w-40 sm:h-14 md:w-56 md:h-20 lg:w-64 lg:h-24">
                <Image
                  src="/logo.png"
                  alt="PrimeCare Pharmacy Logo"
                  fill
                  sizes="(max-width: 640px) 128px, (max-width: 768px) 160px, (max-width: 1024px) 224px, 256px"
                  className="object-contain"
                  priority
                />
              </div>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="font-medium transition-colors text-white hover:text-primary-100"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                className={`px-6 py-2.5 rounded-full font-semibold transition-all transform hover:scale-105 shadow-lg ${
                  isScrolled
                    ? "bg-white text-primary-600 hover:bg-primary-50"
                    : "bg-white text-primary-600 hover:bg-primary-50"
                }`}
              >
                Refill Now
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg transition-colors text-white z-10 relative"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu - Fixed Position */}
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <div 
              className="fixed inset-0 bg-black/50 z-40 md:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            
            {/* Menu Content */}
            <div className="md:hidden fixed top-0 left-0 right-0 bg-white shadow-2xl z-50 max-h-screen overflow-y-auto">
              <div className="pt-20 pb-6 px-4 space-y-4">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-gray-700 hover:text-primary-600 font-medium py-3 px-4 rounded-lg hover:bg-primary-50 transition-colors text-lg"
                  >
                    {link.label}
                  </a>
                ))}
                
                {/* Mobile Social Links */}
                <div className="flex gap-4 pt-4 border-t border-gray-200 justify-center">
                <a
                  href="https://www.facebook.com/Primecarepharmacyfl/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center hover:bg-primary-700 transition"
                  aria-label="Facebook"
                >
                    <Facebook size={20} className="text-white" />
                  </a>
                  <a
                    href="https://wa.me/13524283984"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center hover:bg-primary-700 transition"
                    aria-label="WhatsApp"
                  >
                    <MessageCircle size={20} className="text-white" />
                  </a>
                </div>
                
                <a
                  href="#contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block bg-primary-600 text-white px-6 py-4 rounded-full font-semibold hover:bg-primary-700 transition text-center text-lg mt-4"
                >
                  Refill Now
                </a>
              </div>
            </div>
          </>
        )}
      </nav>
    </>
  );
}

