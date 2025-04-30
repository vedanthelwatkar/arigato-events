"use client"

import { motion } from "framer-motion"
import { Phone, Mail, MapPin, Instagram } from "react-feather"
import ContactForm from "../components/ContactForm"

const ContactPage = () => {
  const contactInfo = [
    {
      icon: <Phone size={24} />,
      title: "Phone",
      details: [
        { text: "+91 92847 49367", link: "tel:+919284749367" },
        { text: "+91 93566 66633", link: "tel:+919356666633" },
      ],
    },
    {
      icon: <Mail size={24} />,
      title: "Email",
      details: [{ text: "hello@arigato.com", link: "mailto:hello@arigato.com" }],
    },
    {
      icon: <MapPin size={24} />,
      title: "Address",
      details: [
        {
          text: "1, Modi House, Veera Desai, Andheri West, Mumbai",
          link: "https://maps.google.com/?q=Modi+House,+Veera+Desai,+Andheri+West,+Mumbai",
        },
      ],
    },
    {
      icon: <Instagram size={24} />,
      title: "Social",
      details: [{ text: "@arigatoevents", link: "https://www.instagram.com/arigatoevents/" }],
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
                        <p key={i} className="text-sm">
                          <a
                            href={detail.link}
                            className="text-primary/70 hover:text-primary transition-colors"
                            target={detail.link.startsWith("http") ? "_blank" : undefined}
                            rel={detail.link.startsWith("http") ? "noopener noreferrer" : undefined}
                          >
                            {detail.text}
                          </a>
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
                <div className="aspect-video">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.5181650811397!2d72.82436491490722!3d19.13296638705042!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b7c8d7c8b96b%3A0x131da01fbc914b88!2sVeera%20Desai%20Rd%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1651234567890!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Arigato Location"
                  ></iframe>
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
