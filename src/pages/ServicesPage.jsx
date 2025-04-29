"use client";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Calendar,
  MapPin,
  Users,
  Gift,
  Camera,
  Music,
  Coffee,
  Scissors,
  Briefcase,
  Globe,
} from "react-feather";
import { Button } from "../components/Button";
import ServiceCard from "../components/ServiceCard";

const ServicesPage = () => {
  const services = [
    {
      title: "RSVP Management",
      description:
        "Comprehensive guest list management and RSVP tracking for your exclusive events.",
      icon: <Users size={24} />,
      category: "Event Planning",
    },
    {
      title: "Event Concierge",
      description:
        "End-to-end event planning and management services for private and corporate occasions.",
      icon: <Calendar size={24} />,
      category: "Event Planning",
    },
    {
      title: "Guest Logistics",
      description:
        "Seamless transportation, accommodation, and itinerary planning for your guests.",
      icon: <Briefcase size={24} />,
      category: "Event Planning",
    },
    {
      title: "Destination Venue Curation",
      description:
        "Access to exclusive venues worldwide, perfectly matched to your event requirements.",
      icon: <MapPin size={24} />,
      category: "Venues & Locations",
    },
    {
      title: "Hampers & Gifting",
      description:
        "Bespoke luxury gift hampers and personalized presents for special occasions.",
      icon: <Gift size={24} />,
      category: "Experiences",
    },
    {
      title: "Wedding Content Creation",
      description:
        "Premium photography and videography services to capture your most precious moments.",
      icon: <Camera size={24} />,
      category: "Media & Entertainment",
    },
    {
      title: "Entertainment & Artist Management",
      description:
        "Booking and management of world-class performers and entertainment for your events.",
      icon: <Music size={24} />,
      category: "Media & Entertainment",
    },
    {
      title: "F&B & Bar Management",
      description:
        "Curated dining experiences and premium bar services for your events.",
      icon: <Coffee size={24} />,
      category: "Hospitality",
    },
    {
      title: "Backstage & Showrun",
      description:
        "Professional event production and backstage management services.",
      icon: <Briefcase size={24} />,
      category: "Event Planning",
    },
    {
      title: "Salon Coordination",
      description:
        "Access to top stylists and beauty professionals for your special occasions.",
      icon: <Scissors size={24} />,
      category: "Experiences",
    },
    {
      title: "Private Jets & Choppers",
      description:
        "Luxury private aviation services for seamless travel experiences.",
      icon: <Globe size={24} />,
      category: "Transportation",
    },
  ];

  // Group services by category
  const servicesByCategory = services.reduce((acc, service) => {
    if (!acc[service.category]) {
      acc[service.category] = [];
    }
    acc[service.category].push(service);
    return acc;
  }, {});

  const categories = Object.keys(servicesByCategory);

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
              Our Services
            </h1>
            <p className="text-xl text-primary/70">
              Bespoke luxury concierge services tailored to exceed expectations.
            </p>
          </motion.div>
        </div>
      </section>

      {categories.map((category, categoryIndex) => (
        <section
          key={category}
          className={`py-16 md:py-24 ${
            categoryIndex % 2 === 1 ? "bg-primary/5" : ""
          }`}
        >
          <div className="w-full px-6 flex flex-col items-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-2xl md:text-3xl font-serif mb-12 text-center text-primary"
            >
              {category}
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
              {servicesByCategory[category].map((service, index) => (
                <ServiceCard
                  key={service.title}
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                  index={index}
                />
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="py-16 md:py-24 bg-primary text-background">
        <div className="w-full px-6 flex justify-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl">
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-serif mb-4"
              >
                Customized Solutions
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="mb-6 opacity-90"
              >
                Can't find exactly what you're looking for? Our team specializes
                in creating bespoke solutions tailored to your unique
                requirements.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="mb-8 opacity-90"
              >
                Contact us today to discuss how we can create a personalized
                luxury experience just for you.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="bg-background text-primary border-background hover:bg-background/90"
                  asChild
                >
                  <Link to="/contact">Get in Touch</Link>
                </Button>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="relative overflow-hidden aspect-video"
            >
              <img
                src="/logo.png?height=720&width=1280"
                alt="Customized luxury services"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesPage;
