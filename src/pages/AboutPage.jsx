"use client";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Users, Award, Shield, Globe } from "react-feather";
import { Button } from "../components/Button";

const AboutPage = () => {
  const values = [
    {
      title: "Excellence",
      description:
        "We strive for perfection in every detail, ensuring that each experience exceeds expectations.",
      icon: <Award size={24} />,
    },
    {
      title: "Discretion",
      description:
        "We maintain the highest levels of confidentiality and privacy for our discerning clientele.",
      icon: <Shield size={24} />,
    },
    {
      title: "Personalization",
      description:
        "Every service is tailored to the unique preferences and requirements of each client.",
      icon: <Users size={24} />,
    },
    {
      title: "Global Reach",
      description:
        "Our extensive network allows us to create exceptional experiences anywhere in the world.",
      icon: <Globe size={24} />,
    },
  ];

  const galleryImages = [
    {
      src: "/wedding-luxury-setup-arigatoevents.jpg",
      alt: "Luxury Wedding Setup",
    },
    { src: "/wedding-decoration-arigatoevents.jpg", alt: "Wedding Decoration" },
    { src: "/wedding-venue-arigatoevents.jpg", alt: "Wedding Venue" },
    { src: "/wedding-haldi-arigatoevents.jpg", alt: "Wedding Experience" },
    {
      src: "/wedding-celebration-arigatoevents.jpg",
      alt: "Wedding Celebration",
    },
    { src: "/wedding-client-event-arigatoevents.jpg", alt: "Client Event" },
  ];

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
            <h1 className="text-4xl md:text-5xl font-serif mb-6 text-primary">
              About Arigato
            </h1>
            <p className="text-xl text-primary/70">
              Gracious hospitality. Effortless luxury. Unforgettable
              impressions.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-primary/5">
        <div className="w-full px-6 flex justify-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="order-2 lg:order-1"
            >
              <h2 className="text-3xl md:text-4xl font-serif mb-6 text-primary">
                Our Story
              </h2>
              <p className="text-primary/70 mb-6">
                <span className="font-extrabold text-lg">ARIGATO</span> is a
                luxury wedding hospitality brand redefining guest experience
                through impeccable service, cultural elegance, and heartfelt
                detail.
              </p>
              <p className="text-primary/70 mb-6">
                Inspired by the Japanese spirit of omotenashi—the art of
                thoughtful hospitality—we specialize in welcoming your guests
                with warmth, care, and curated experiences that reflect the
                beauty of your celebration. From bespoke welcome lounges and
                itinerary planning to seamless guest coordination and on-site
                concierge,{" "}
                <span className="font-extrabold text-lg">ARIGATO</span> ensures
                every moment feels personal, polished, and profoundly memorable.
              </p>
              <p className="text-primary/70">
                Our lucky mascot, Maneki Neko, symbolizes good fortune and
                joyful beginnings. She represents our promise to deliver
                hospitality that feels just as meaningful as the wedding
                itself—infused with charm, gratitude, and a touch of magic.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <div className="relative overflow-hidden">
                <img
                  src="/couple-wedding-arigatoevents.jpg"
                  alt="Arigato luxury hospitality"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="w-full px-6 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-serif mb-4 text-primary">
              Our Work
            </h2>
            <p className="text-primary/70">
              A glimpse into the exceptional experiences we create for our
              clients.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="aspect-square overflow-hidden"
              >
                <img
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-primary/5">
        <div className="w-full px-6 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-serif mb-4 text-primary">
              Our Values
            </h2>
            <p className="text-primary/70">
              At the core of Arigato are the principles that guide everything we
              do.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 border border-primary/10"
              >
                <div className="mb-4 text-primary">{value.icon}</div>
                <h3 className="text-lg font-medium mb-2 text-primary">
                  {value.title}
                </h3>
                <p className="text-sm text-primary/70">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="w-full px-6 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-serif mb-4 text-primary">
              Our Process
            </h2>
            <p className="text-primary/70">
              How we work with you to create exceptional experiences.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="p-6 border border-primary/10"
            >
              <div className="text-4xl font-serif text-primary mb-4">01</div>
              <h3 className="text-xl font-medium mb-3 text-primary">
                Consultation
              </h3>
              <p className="text-primary/70">
                We begin with an in-depth consultation to understand your
                vision, preferences, and requirements.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="p-6 border border-primary/10"
            >
              <div className="text-4xl font-serif text-primary mb-4">02</div>
              <h3 className="text-xl font-medium mb-3 text-primary">
                Curation
              </h3>
              <p className="text-primary/70">
                Our team curates a bespoke plan tailored to your specific needs
                and preferences.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="p-6 border border-primary/10"
            >
              <div className="text-4xl font-serif text-primary mb-4">03</div>
              <h3 className="text-xl font-medium mb-3 text-primary">
                Execution
              </h3>
              <p className="text-primary/70">
                We handle every detail with precision and care, ensuring a
                flawless experience from start to finish.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-primary text-background">
        <div className="w-full px-6 flex justify-center">
          <div className="text-center max-w-3xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-serif mb-4"
            >
              Join Our Exclusive Clientele
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="mb-8 opacity-90"
            >
              Experience the unparalleled service and attention to detail that
              defines <span className="font-extrabold text-lg">ARIGATO</span>.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Button
                variant="outline"
                size="lg"
                className="bg-secondary text-white border-secondary hover:bg-secondary/10"
                asChild
              >
                <Link to="/contact">Contact Us</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
