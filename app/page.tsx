"use client";

import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import FeaturesBanner from "@/components/FeaturesBanner";
import Services from "@/components/Services";
import About from "@/components/About";
import Statistics from "@/components/Statistics";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import ThankYou from "@/components/ThankYou";
import Footer from "@/components/Footer";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="min-h-screen">
      <Navigation isScrolled={isScrolled} />
      <Hero />
      <FeaturesBanner />
      <Services />
      <About />
      <Statistics />
      <Testimonials />
      <Contact />
      <ThankYou />
      <Footer />
    </main>
  );
}

