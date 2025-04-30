"use client"

import React from "react"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "react-feather"
import { cn } from "../lib/utils"

const ServiceCarousel = ({ children, className }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const carouselRef = useRef(null)
  const childrenArray = React.Children.toArray(children)
  const itemsPerView = isMobile ? 1 : 3

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    return () => {
      window.removeEventListener("resize", checkMobile)
    }
  }, [])

  const totalSlides = Math.ceil(childrenArray.length / itemsPerView)

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides)
  }

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides)
  }

  return (
    <div className={cn("relative w-full", className)}>
      <div className="overflow-hidden">
        <motion.div
          ref={carouselRef}
          className="flex"
          animate={{
            x: `calc(-${currentIndex * 100}%)`,
          }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          style={{ width: `${totalSlides * 100}%` }}
        >
          {Array.from({ length: totalSlides }).map((_, slideIndex) => (
            <div key={slideIndex} className="flex flex-1" style={{ minWidth: `${100 / totalSlides}%` }}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full px-6">
                {childrenArray.slice(slideIndex * itemsPerView, (slideIndex + 1) * itemsPerView).map((child, i) => (
                  <div key={i} className="w-full">
                    {child}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {totalSlides > 1 && (
        <div className="flex justify-center mt-6 space-x-4">
          <button
            onClick={goToPrev}
            className="p-2 rounded-full bg-background border border-primary/20 text-primary hover:bg-primary/5 transition-colors"
            aria-label="Previous slide"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={goToNext}
            className="p-2 rounded-full bg-background border border-primary/20 text-primary hover:bg-primary/5 transition-colors"
            aria-label="Next slide"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      )}
    </div>
  )
}

export default ServiceCarousel
