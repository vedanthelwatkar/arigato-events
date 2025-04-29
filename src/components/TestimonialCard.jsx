"use client"

import { motion } from "framer-motion"
import { Star } from "react-feather"
import { cn } from "../lib/utils"

const TestimonialCard = ({ quote, author, role, rating = 5, className, index = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-100px" }}
      className={cn("p-6 border border-primary/10", className)}
    >
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={16} className={i < rating ? "text-primary fill-primary" : "text-primary/30"} />
        ))}
      </div>

      <blockquote className="text-primary mb-4 italic">"{quote}"</blockquote>

      <div>
        <p className="font-medium text-primary">{author}</p>
        <p className="text-sm text-primary/70">{role}</p>
      </div>
    </motion.div>
  )
}

export default TestimonialCard
