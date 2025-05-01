"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import Footer from "./Footer";
import MobileMenu from "./MobileMenu";

const Layout = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        scrolled={scrolled}
      />
      <MobileMenu isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />

      <motion.main
        className="flex-grow"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        {children}
      </motion.main>

      <Footer />
    </div>
  );
};

export default Layout;
