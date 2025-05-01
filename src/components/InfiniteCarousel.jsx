import React, { useRef, useEffect, useState } from "react";
import { motion, useAnimation, useAnimationFrame } from "framer-motion";

const logos = [
  "/logos/being-human.png",
  "/logos/muthoot-group.png",
  "/logos/punj-lloyd.png",
  "/logos/amp-motors.png",
  "/logos/sabyasachi.png",
  "/logos/anju-modi.png",
  "/logos/rahul-mishra.png",
  "/logos/suneet-varma.png",
  "/logos/blackberrys.png",
  "/logos/sanjay-ghodawat.webp",
  "/logos/somany.png",
  "/logos/dyp-group.png",
  "/logos/dollar-group.png",
  "/logos/rockland-hospitals.png",
];

const InfiniteCarousel = () => {
  const duplicatedLogos = [...logos, ...logos, ...logos, ...logos];

  const carouselRef = useRef(null);
  const containerRef = useRef(null);
  const controls = useAnimation();
  const isHovered = useRef(false);
  const isDragging = useRef(false);
  const baseSpeed = useRef(-1.3);
  const xPosition = useRef(0);
  const isFirstRender = useRef(true);
  const lastDragPosition = useRef(0);

  useEffect(() => {
    if (isFirstRender.current && carouselRef.current) {
      xPosition.current = 0;
      controls.set({ x: xPosition.current });
      isFirstRender.current = false;
    }
  }, [controls]);

  useAnimationFrame(() => {
    if (!carouselRef.current || isDragging.current) return;

    const containerWidth = carouselRef.current.scrollWidth / 4;

    const currentSpeed = isHovered.current
      ? baseSpeed.current * 0.3
      : baseSpeed.current;

    xPosition.current += currentSpeed;

    if (Math.abs(xPosition.current) >= containerWidth) {
      xPosition.current = xPosition.current % containerWidth;
    }

    controls.set({ x: xPosition.current });
  });

  const handleDragEnd = (_, info) => {
    isDragging.current = false;
    xPosition.current = info.point.x - lastDragPosition.current;

    const containerWidth = carouselRef.current?.scrollWidth / 4 || 0;
    xPosition.current = xPosition.current % containerWidth;
  };

  const handleDragStart = (_, info) => {
    isDragging.current = true;
    lastDragPosition.current = info.point.x - xPosition.current;
  };

  return (
    <div className="pt-10 pb-5 md:py-16 w-full flex items-center justify-center overflow-hidden">
      <div className="flex flex-col gap-12 w-full max-w-6xl">
        <div className="flex flex-col gap-8 sm:gap-10">
          <div
            ref={containerRef}
            className="w-full overflow-hidden"
            onMouseEnter={() => (isHovered.current = true)}
            onMouseLeave={() => (isHovered.current = false)}
          >
            <motion.div
              ref={carouselRef}
              className="flex gap-4 sm:gap-8 ml-0 cursor-grab active:cursor-grabbing"
              animate={controls}
              initial={{ x: 0 }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.1}
              onDragStart={handleDragStart}
              onDragEnd={handleDragEnd}
            >
              {duplicatedLogos.map((item, index) => (
                <div key={index} className="flex-shrink-0">
                  <img
                    src={item}
                    alt={`arigatoevents-${index}`}
                    className="h-20 w-auto mix-blend-screen bg-white rounded-lg"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfiniteCarousel;
