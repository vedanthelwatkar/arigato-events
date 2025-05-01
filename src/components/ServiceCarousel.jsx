"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "react-feather";
import { cn } from "../lib/utils";

const ServiceCarousel = ({ children, className }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const childrenArray = React.Children.toArray(children);

  const getItemsPerView = () => {
    if (isMobile) return 1;
    if (isTablet) return 2;
    return 3;
  };

  const itemsPerView = getItemsPerView();
  const totalSlides = Math.max(
    1,
    Math.ceil(childrenArray.length / itemsPerView)
  );

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 640);
      setIsTablet(window.innerWidth >= 640 && window.innerWidth < 1024);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  const goToNext = () => {
    if (isAnimating || totalSlides <= 1) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };

  const goToPrev = () => {
    if (isAnimating || totalSlides <= 1) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index) => {
    if (isAnimating || index === currentIndex) return;
    setIsAnimating(true);
    setCurrentIndex(index);
  };

  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const touchDiff = touchStartX.current - touchEndX.current;
    if (touchDiff > 75) {
      goToNext();
    } else if (touchDiff < -75) {
      goToPrev();
    }
  };

  return (
    <div
      className={cn("relative w-full", className)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className="overflow-hidden">
        <AnimatePresence
          initial={false}
          mode="wait"
          onExitComplete={() => setIsAnimating(false)}
        >
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="w-full"
          >
            <div
              className={`grid grid-cols-1 ${
                isTablet ? "sm:grid-cols-2" : "sm:grid-cols-2 lg:grid-cols-3"
              } gap-6 px-4 md:px-6`}
            >
              {childrenArray
                .slice(
                  currentIndex * itemsPerView,
                  (currentIndex + 1) * itemsPerView
                )
                .map((child, i) => (
                  <div key={i} className="w-full">
                    {child}
                  </div>
                ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {totalSlides > 1 && (
        <>
          <div className="flex justify-center mt-8 space-x-4">
            <button
              onClick={goToPrev}
              className="p-3 rounded-full bg-background border border-primary/20 text-primary hover:bg-primary/5 transition-colors shadow-sm"
              aria-label="Previous slide"
              disabled={isAnimating}
            >
              <ChevronLeft size={20} />
            </button>

            <div className="flex items-center space-x-2">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={cn(
                    "w-2 h-2 rounded-full transition-all duration-300",
                    currentIndex === index
                      ? "bg-primary w-6"
                      : "bg-primary/30 hover:bg-primary/50"
                  )}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={goToNext}
              className="p-3 rounded-full bg-background border border-primary/20 text-primary hover:bg-primary/5 transition-colors shadow-sm"
              aria-label="Next slide"
              disabled={isAnimating}
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default ServiceCarousel;
