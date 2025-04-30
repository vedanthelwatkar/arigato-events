"use client"

import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { Button } from "../components/Button"

const ErrorPage = () => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center">
      <div className="w-full px-6 py-16 flex justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-md text-center"
        >
          <h1 className="text-6xl font-serif text-primary mb-4">Oops!</h1>
          <h2 className="text-2xl font-medium mb-4 text-primary">Something went wrong</h2>
          <p className="text-primary/70 mb-8">
            We're experiencing some technical difficulties. Please try again later or contact our support team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="default" size="lg" asChild>
              <Link to="/">Return Home</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/contact">Contact Support</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default ErrorPage
