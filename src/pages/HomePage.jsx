"use client";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, MapPin, Camera, Users } from "react-feather";
import Carousel from "../components/Carousel";
import ServiceCard from "../components/ServiceCard";
import ServiceCarousel from "../components/ServiceCarousel";
import { Button } from "../components/Button";

const HomePage = () => {
  // Hero slides
  const heroSlides = [
    <div
      key="slide1"
      className="h-[90vh] pt-32 sm:pt-0 md:h-[80vh] relative flex items-center"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-background/90 to-background/50 z-10" />
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('/wedding1.jpg')` }}
      />
      <div className="w-full px-6 relative z-20 flex flex-col md:flex-row items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 mb-8 md:mb-0 sm:px-20"
        >
          <h1 className="text-4xl md:text-6xl font-serif mb-4 text-primary">
            Luxury Wedding Hospitality
          </h1>
          <p className="text-lg md:text-xl text-primary/70 mb-8">
            Redefining guest experience through impeccable service, cultural
            elegance, and heartfelt detail.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="default" size="lg" asChild>
              <Link to="/services">Explore Services</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="md:w-1/2 flex justify-center"
        >
          <img src="/logo.png" alt="Arigato" className="w-full max-w-[300px]" />
        </motion.div>
      </div>
    </div>,

    <div
      key="slide2"
      className="h-[90vh] pt-32 sm:pt-0 md:h-[80vh] relative flex items-center"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-background/90 to-background/50 z-10" />
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('/wedding2.jpg')` }}
      />
      <div className="w-full px-6 relative z-20 flex flex-col md:flex-row items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 mb-8 md:mb-0 sm:px-20"
        >
          <h1 className="text-4xl md:text-6xl font-serif mb-4 text-primary">
            Curated Luxury Experiences
          </h1>
          <p className="text-lg md:text-xl text-primary/70 mb-8">
            From private jets to exclusive venues, we orchestrate perfection in
            every detail.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="default" size="lg" asChild>
              <Link to="/services">Our Services</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/about">About Us</Link>
            </Button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="md:w-1/2 flex justify-center"
        >
          <img src="/logo.png" alt="Arigato" className="w-full max-w-[300px]" />
        </motion.div>
      </div>
    </div>,

    <div
      key="slide3"
      className="h-[90vh] pt-32 sm:pt-0 md:h-[80vh] relative flex items-center"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-background/90 to-background/50 z-10" />
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('/wedding3.jpg')` }}
      />
      <div className="w-full px-6 relative z-20 flex flex-col md:flex-row items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 mb-8 md:mb-0 sm:px-20"
        >
          <h1 className="text-4xl md:text-6xl font-serif mb-4 text-primary">
            Exceptional Hospitality
          </h1>
          <p className="text-lg md:text-xl text-primary/70 mb-8">
            Creating unforgettable moments with attention to every detail.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="default" size="lg" asChild>
              <Link to="/memberships">Our Memberships</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="md:w-1/2 flex justify-center"
        >
          <img src="/logo.png" alt="Arigato" className="w-full max-w-[300px]" />
        </motion.div>
      </div>
    </div>,
  ];

  // Client logos
  const clients = [
    { name: "Luxury Hotel", logo: "/client1.jpg" },
    { name: "Premium Resort", logo: "/client2.jpg" },
    { name: "Elite Events", logo: "/client3.jpg" },
    { name: "Exclusive Venues", logo: "/client4.jpg" },
  ];

  // Featured services
  const featuredServices = [
    {
      title: "Event Concierge",
      description:
        "Comprehensive event planning and management for exclusive gatherings and celebrations.",
      icon: <Calendar size={24} />,
      link: "/services/event-concierge",
    },
    {
      title: "Guest Logistics",
      description:
        "Seamless transportation, accommodation, and itinerary planning for your guests.",
      icon: <Users size={24} />,
      link: "/services/guest-logistics",
    },
    {
      title: "Destination Venue Curation",
      description:
        "Access to the world's most exclusive and unique venues for your special occasions.",
      icon: <MapPin size={24} />,
      link: "/services/venue-curation",
    },
    {
      title: "Wedding Content Creation",
      description:
        "Premium photography and videography services to capture your most precious moments.",
      icon: <Camera size={24} />,
      link: "/services/content-creation",
    },
  ];

  // Membership plans
  const membershipPlans = [
    {
      title: "HNI Families",
      description:
        "Exclusive services for high net worth individuals and their families.",
      link: "/memberships",
    },
    {
      title: "Five Star Hotels",
      description: "Partnership programs for luxury hotels and resorts.",
      link: "/memberships",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative">
        <Carousel slides={heroSlides} autoPlay={true} interval={300000} />
      </section>

      {/* Clients Section */}
      <section className="py-16 bg-primary/5">
        <div className="w-full px-6 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-2xl md:text-3xl font-serif mb-2 text-primary">
              Trusted By
            </h2>
            <p className="text-primary/70">
              Partnering with the most prestigious brands and venues
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 max-w-5xl">
            {clients.map((client, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="w-32 h-32 flex items-center justify-center"
              >
                <img
                  src={client.logo || "/placeholder.svg"}
                  alt={client.name}
                  className="max-w-full max-h-full object-contain opacity-80 hover:opacity-100 transition-opacity"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 md:py-24">
        <div className="w-full flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mb-16 px-6"
          >
            <h2 className="text-3xl md:text-4xl font-serif mb-4 text-primary">
              Our Services
            </h2>
            <p className="text-primary/70">
              Discover our premium concierge services designed to elevate your
              wedding experience and create unforgettable moments.
            </p>
          </motion.div>

          <div className="w-full max-w-6xl">
            <ServiceCarousel>
              {featuredServices.map((service, index) => (
                <ServiceCard
                  key={index}
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                  link={service.link}
                  index={index}
                />
              ))}
            </ServiceCarousel>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Button variant="outline" size="lg" asChild>
              <Link to="/services" className="inline-flex items-center">
                View All Services
                <ArrowRight size={16} className="ml-2" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* About Us Snippet */}
      <section className="py-16 md:py-24 bg-primary/5">
        <div className="w-full px-6 flex justify-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-serif mb-4 text-primary">
                About Arigato
              </h2>
              <p className="text-primary/70 mb-6">
                ARIGATO is a luxury wedding hospitality brand redefining guest
                experience through impeccable service, cultural elegance, and
                heartfelt detail.
              </p>
              <p className="text-primary/70 mb-6">
                Inspired by the Japanese spirit of omotenashi—the art of
                thoughtful hospitality—we specialize in welcoming your guests
                with warmth, care, and curated experiences that reflect the
                beauty of your celebration.
              </p>
              <Button variant="default" asChild>
                <Link to="/about">Learn More About Us</Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="relative aspect-video overflow-hidden"
            >
              <img
                src="/guest-welcome-01-arigatoevents.jpg"
                alt="Luxury wedding hospitality"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Membership Teaser */}
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
              Membership Plans
            </h2>
            <p className="text-primary/70">
              Exclusive membership options tailored to different client needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
            {membershipPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-8 border border-primary/10 hover:border-primary/30 transition-colors"
              >
                <h3 className="text-2xl font-serif mb-3 text-primary">
                  {plan.title}
                </h3>
                <p className="text-primary/70 mb-6">{plan.description}</p>
                <Link
                  to={plan.link}
                  className="inline-flex items-center text-sm font-medium text-primary"
                >
                  Learn more
                  <motion.span
                    className="ml-1"
                    initial={{ x: 0 }}
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ArrowRight size={16} />
                  </motion.span>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Button variant="outline" size="lg" asChild>
              <Link to="/memberships">View All Membership Plans</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Contact CTA */}
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
              Ready to Elevate Your Experience?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="mb-8 opacity-90"
            >
              Contact us today to discuss how we can create bespoke luxury
              experiences tailored to your needs.
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
                <Link to="/contact">Get in Touch</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
