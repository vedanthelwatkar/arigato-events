"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "./Button"
import { cn } from "../lib/utils"

const ContactForm = ({ className }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formSuccess, setFormSuccess] = useState(false)
  const [formError, setFormError] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setFormSuccess(true)

      // Reset form after success
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      })

      // Reset success message after 5 seconds
      setTimeout(() => {
        setFormSuccess(false)
      }, 5000)
    }, 1500)
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={cn("w-full", className)}
    >
      {formSuccess ? (
        <div className="p-6 bg-primary/5 border border-primary/20 text-center">
          <h3 className="text-lg font-medium mb-2 text-primary">Thank you for reaching out!</h3>
          <p className="text-primary/70">We've received your message and will get back to you shortly.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2 text-primary">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-primary/20 bg-background focus:outline-none focus:border-primary"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2 text-primary">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-primary/20 bg-background focus:outline-none focus:border-primary"
                placeholder="john@example.com"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="phone" className="block text-sm font-medium mb-2 text-primary">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-primary/20 bg-background focus:outline-none focus:border-primary"
                placeholder="+1 (123) 456-7890"
              />
            </div>

            <div>
              <label htmlFor="service" className="block text-sm font-medium mb-2 text-primary">
                Service of Interest
              </label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-primary/20 bg-background focus:outline-none focus:border-primary"
              >
                <option value="">Select a service</option>
                <option value="event-concierge">Event Concierge</option>
                <option value="guest-logistics">Guest Logistics</option>
                <option value="venue-curation">Destination Venue Curation</option>
                <option value="hampers-gifting">Hampers & Gifting</option>
                <option value="wedding-content">Wedding Content Creation</option>
                <option value="entertainment">Entertainment & Artist Management</option>
                <option value="private-jets">Private Jets & Choppers</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2 text-primary">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full px-4 py-2 border border-primary/20 bg-background focus:outline-none focus:border-primary"
              placeholder="Tell us about your requirements..."
            />
          </div>

          <Button type="submit" variant="default" size="lg" className="w-full md:w-auto" disabled={isSubmitting}>
            {isSubmitting ? "Sending..." : "Send Message"}
          </Button>
        </form>
      )}
    </motion.div>
  )
}

export default ContactForm
