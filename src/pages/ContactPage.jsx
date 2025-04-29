"use client"

import { motion } from "framer-motion"
import { Phone, Mail, MapPin, Clock } from "react-feather"
import ContactForm from "../components/ContactForm"

const ContactPage = () => {
  const contactInfo = [
    {
      icon: <Phone size={24} />,
      title: "Phone",
      details: ["+1 (800) LUXURY", "+1 (212) 555-1234"],
    },
    {
      icon: <Mail size={24} />,
      title: "Email",
      details: ["hello@arigato.com", "inquiries@arigato.com"],
    },
    {
      icon: <MapPin size={24} />,
      title: "Address",
      details: ["1234 Luxury Avenue", "New York, NY 10001", "United States"],
    },
    {
      icon: <Clock size={24} />,
      title: "Hours",
      details: ["Monday - Friday: 9am - 6pm", "Saturday: 10am - 4pm", "Sunday: By appointment only"],
    },
  ]

  return (
    <>
      <section className="pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="w-full px-6 flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl text-center"
          >
            <h1 className="text-4xl md:text-5xl font-serif mb-6 text-primary">Contact Us</h1>
            <p className="text-xl text-primary/70">
              We're here to assist you with any inquiries about our luxury concierge services.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-primary/5">
        <div className="w-full px-6 flex justify-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl">
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-3xl font-serif mb-6 text-primary"
              >
                Get in Touch
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-primary/70 mb-8"
              >
                Fill out the form below, and one of our luxury concierge specialists will contact you shortly to discuss
                your requirements.
              </motion.p>

              <ContactForm />
            </div>

            <div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-3xl font-serif mb-6 text-primary"
              >
                Contact Information
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-primary/70 mb-8"
              >
                Prefer to reach out directly? Here's how you can contact us.
              </motion.p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {contactInfo.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="p-6 border border-primary/10"
                  >
                    <div className="text-primary mb-4">{item.icon}</div>
                    <h3 className="text-lg font-medium mb-2 text-primary">{item.title}</h3>
                    <div className="space-y-1">
                      {item.details.map((detail, i) => (
                        <p key={i} className="text-sm text-primary/70">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
                className="mt-8 p-6 border border-primary/10"
              >
                <h3 className="text-lg font-medium mb-4 text-primary">Our Location</h3>
                <div className="aspect-video bg-primary/5">
                  {/* Map placeholder - would be replaced with actual map */}
                  <div className="w-full h-full flex items-center justify-center text-primary/70">
                    Interactive Map Would Be Here
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ContactPage
