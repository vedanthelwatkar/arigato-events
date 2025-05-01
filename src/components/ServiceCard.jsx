"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronUp } from "react-feather";
import { Link } from "react-router-dom";
import { cn } from "../lib/utils";

const ServiceCard = ({
  title,
  description,
  icon,
  link = "/services",
  className,
  index = 0,
  fullDescription,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = (e) => {
    e.preventDefault();
    setIsExpanded(!isExpanded);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-100px" }}
      className={cn(
        "group relative p-6 border border-primary/10 hover:border-primary/20 transition-colors",
        className
      )}
      layout
    >
      <div className="mb-4 text-primary">{icon}</div>
      <h3 className="text-lg font-medium mb-2 text-primary">{title}</h3>
      <p className="text-sm text-primary/70 mb-4">{description}</p>

      <button
        onClick={toggleExpand}
        className="inline-flex items-center text-sm font-medium text-primary"
      >
        {isExpanded ? (
          <>
            Show less
            <ChevronUp size={16} className="ml-1" />
          </>
        ) : (
          <>
            Learn more
            <motion.span
              className="ml-1"
              initial={{ x: 0 }}
              whileHover={{ x: 4 }}
              transition={{ duration: 0.2 }}
            >
              <ArrowRight size={16} />
            </motion.span>
          </>
        )}
      </button>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="pt-4 mt-4 border-t border-primary/10">
              <p className="text-sm text-primary/70 mb-4">
                {fullDescription || description}
              </p>
              <Link
                to={link}
                className="text-sm font-medium text-primary hover:underline"
              >
                View full details
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default ServiceCard;
