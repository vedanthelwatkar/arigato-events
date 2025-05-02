"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "react-feather";
import { cn } from "../lib/utils";
import { Link } from "react-router-dom";
import { Button } from "./Button";

const heroSlidesData = [
  {
    title: "Luxury Wedding Hospitality",
    description:
      "Redefining guest experience through impeccable service, cultural elegance, and heartfelt detail.",
    primaryButton: { text: "Explore Services", link: "/services" },
    secondaryButton: { text: "Contact Us", link: "/contact" },
    backgroundImage: "/wedding1.jpg",
  },
  {
    title: "Curated Luxury Experiences",
    description:
      "From private jets to exclusive venues, we orchestrate perfection in every detail.",
    primaryButton: { text: "Our Services", link: "/services" },
    secondaryButton: { text: "About Us", link: "/about" },
    backgroundImage: "/wedding2.jpg",
  },
  {
    title: "Get Exceptional Hospitality",
    description:
      "Creating unforgettable moments with attention to every detail.",
    primaryButton: { text: "Our Memberships", link: "/memberships" },
    secondaryButton: { text: "Get in Touch", link: "/contact" },
    backgroundImage: "/wedding3.jpg",
  },
];

const Carousel = ({
  autoPlay = true,
  interval = 5000,
  showArrows = true,
  showDots = true,
  className,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const autoPlayTimerRef = useRef(null);
  const isMobile = useRef(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      isMobile.current = window.innerWidth < 768;
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const goToNext = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % heroSlidesData.length);
  }, [isAnimating]);

  const goToPrev = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setDirection(-1);
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + heroSlidesData.length) % heroSlidesData.length
    );
  }, [isAnimating]);

  const goToSlide = (index) => {
    if (isAnimating || index === currentIndex) return;
    setIsAnimating(true);
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  useEffect(() => {
    if (autoPlay) {
      clearTimeout(autoPlayTimerRef.current);
      autoPlayTimerRef.current = setTimeout(() => {
        goToNext();
      }, interval);
    }

    return () => {
      clearTimeout(autoPlayTimerRef.current);
    };
  }, [autoPlay, interval, currentIndex, goToNext]);

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

  const currentSlide = heroSlidesData[currentIndex];

  const contentVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.4 },
      },
    },
    exit: (direction) => ({
      x: direction > 0 ? -100 : 100,
      opacity: 0,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.4 },
      },
    }),
  };

  const backgroundVariants = {
    enter: (direction) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        x: { type: "spring", stiffness: 100, damping: 30 },
        opacity: { duration: 0.8 },
      },
    },
    exit: (direction) => ({
      x: direction > 0 ? "-100%" : "100%",
      opacity: 0,
      transition: {
        x: { type: "spring", stiffness: 100, damping: 30 },
        opacity: { duration: 0.8 },
      },
    }),
  };

  return (
    <div
      className={cn("relative overflow-hidden", className)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <AnimatePresence initial={false} custom={direction} mode="wait">
        {!isMobile.current ? (
          <motion.div
            key={`bg-${currentIndex}`}
            custom={direction}
            variants={backgroundVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="absolute inset-0 z-0"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-background/90 to-background/50 z-10" />
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url('${currentSlide.backgroundImage}')`,
              }}
            />
          </motion.div>
        ) : (
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-r from-background/90 to-background/50 z-10" />
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url('/wedding1.jpg')` }}
            />
          </div>
        )}
      </AnimatePresence>

      <div className="h-[90vh] pt-20 sm:pt-0 md:h-[80vh] relative flex items-center">
        <div className="w-full px-6 relative z-20 flex flex-col md:flex-row items-center">
          <AnimatePresence
            initial={false}
            custom={direction}
            mode="wait"
            onExitComplete={() => setIsAnimating(false)}
          >
            <motion.div
              key={`content-${currentIndex}`}
              custom={direction}
              variants={contentVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="md:w-1/2 mb-8 md:mb-0 sm:px-20"
            >
              <h1 className="text-4xl md:text-6xl font-serif mb-4 text-primary">
                {currentSlide.title}
              </h1>
              <p className="text-lg md:text-xl text-primary/70 mb-8">
                {currentSlide.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="default" size="lg" asChild>
                  <Link to={currentSlide.primaryButton.link}>
                    {currentSlide.primaryButton.text}
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to={currentSlide.secondaryButton.link}>
                    {currentSlide.secondaryButton.text}
                  </Link>
                </Button>
              </div>
            </motion.div>
          </AnimatePresence>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:w-1/2 flex justify-center"
          >
            <img
              src="/logo.png"
              alt="Arigato"
              className="w-full max-w-[400px]"
            />
          </motion.div>
        </div>
      </div>

      {showArrows && (
        <>
          <button
            onClick={goToPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-background/80 text-primary hover:bg-background transition-colors z-30 shadow-md backdrop-blur-sm"
            aria-label="Previous slide"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-background/80 text-primary hover:bg-background transition-colors z-30 shadow-md backdrop-blur-sm"
            aria-label="Next slide"
          >
            <ChevronRight size={20} />
          </button>
        </>
      )}

      {showDots && (
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex space-x-2 z-30">
          {heroSlidesData.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={cn(
                "w-2 h-2 rounded-full transition-all duration-300 shadow-md",
                currentIndex === index
                  ? "bg-primary w-6"
                  : "bg-background/70 hover:bg-background hover:scale-110"
              )}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Carousel;
