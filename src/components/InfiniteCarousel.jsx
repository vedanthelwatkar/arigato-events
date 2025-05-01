import React, { useRef, useEffect } from "react";
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
  const duplicatedUniversities = [...logos, ...logos];

  const carouselRef = useRef(null);
  const containerRef = useRef(null);
  const controls = useAnimation();
  const isHovered = useRef(false);
  const baseSpeed = useRef(-1.3);
  const xPosition = useRef(0);
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current && carouselRef.current) {
      xPosition.current = 0;
      controls.set({ x: xPosition.current });
      isFirstRender.current = false;
    }
  }, [controls]);

  useAnimationFrame(() => {
    if (!carouselRef.current) return;

    const containerWidth = carouselRef.current.scrollWidth / 2;

    const currentSpeed = isHovered.current
      ? baseSpeed.current * 0.3
      : baseSpeed.current;

    xPosition.current += currentSpeed;

    if (Math.abs(xPosition.current) >= containerWidth) {
      xPosition.current = 0;
    }

    controls.set({ x: xPosition.current });
  });

  return (
    <div className="pt-10 pb-5 md:py-[60px] w-full flex items-center justify-center overflow-hidden">
      <div className="flex flex-col gap-12 w-full max-w-6xl">
        <div className="flex flex-col gap-8 sm:gap-10">
          <div
            ref={containerRef}
            className="w-full"
            onMouseEnter={() => (isHovered.current = true)}
            onMouseLeave={() => (isHovered.current = false)}
          >
            <motion.div
              ref={carouselRef}
              className="flex gap-4 sm:gap-8 ml-0"
              animate={controls}
              initial={{ x: 0 }}
            >
              {duplicatedUniversities.map((item, index) => (
                <div key={index} className="flex-shrink-0">
                  <img
                    src={item}
                    alt={`arigatoevents-${index}`}
                    className="h-[80px] w-auto mix-blend-screen bg-white rounded-lg"
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
