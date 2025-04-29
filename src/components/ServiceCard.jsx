"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "react-feather"
import { Link } from "react-router-dom"
import { cn } from "../lib/utils"

const ServiceCard = ({ title, description, icon, link = "/services", className, index = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-100px" }}
      className={cn("group relative p-6 border border-primary/10 hover:border-primary/20 transition-colors", className)}
    >
      <div className="mb-4 text-primary">{icon}</div>
      <h3 className="text-lg font-medium mb-2 text-primary">{title}</h3>
      <p className="text-sm text-primary/70 mb-4">{description}</p>

      <Link to={link} className="inline-flex items-center text-sm font-medium text-primary">
        Learn more
        <motion.span className="ml-1" initial={{ x: 0 }} whileHover={{ x: 4 }} transition={{ duration: 0.2 }}>
          <ArrowRight size={16} />
        </motion.span>
      </Link>
    </motion.div>
  )
}

export default ServiceCard
