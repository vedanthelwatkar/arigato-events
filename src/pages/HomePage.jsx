"use client";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Calendar,
  MapPin,
  Gift,
  Camera,
  Music,
  Globe,
} from "react-feather";
import Carousel from "../components/Carousel";
import ServiceCard from "../components/ServiceCard";
import TestimonialCard from "../components/TestimonialCard";
import { Button } from "../components/Button";

const HomePage = () => {
  const heroSlides = [
    <div key="slide1" className="h-[90dvh] relative flex items-center">
      <div className="absolute inset-0 bg-gradient-to-r from-background/90 to-background/50 z-10" />
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('/logo.png?height=1080&width=1920')`,
        }}
      />
      <div className="w-full px-6 relative z-20 flex justify-start">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <h1 className="text-4xl md:text-6xl font-serif mb-4">
            <span className="block text-primary">もしもし</span>
            Elevate Your Experience
          </h1>
          <p className="text-lg md:text-xl text-primary/70 mb-8">
            Luxury concierge services tailored for the discerning few. Where
            exceptional becomes standard.
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
      </div>
    </div>,

    <div key="slide2" className="h-[90dvh] relative flex items-center">
      <div className="absolute inset-0 bg-gradient-to-r from-background/90 to-background/50 z-10" />
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('/logo.png?height=1080&width=1920')`,
        }}
      />
      <div className="w-full px-6 relative z-20 flex justify-start">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <h1 className="text-4xl md:text-6xl font-serif mb-4">
            <span className="block text-primary">ARIGATO</span>
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
      </div>
    </div>,
  ];

  const featuredServices = [
    {
      title: "Event Concierge",
      description:
        "Comprehensive event planning and management for exclusive gatherings and celebrations.",
      icon: <Calendar size={24} />,
      link: "/services",
    },
    {
      title: "Destination Venue Curation",
      description:
        "Access to the world's most exclusive and unique venues for your special occasions.",
      icon: <MapPin size={24} />,
      link: "/services",
    },
    {
      title: "Hampers & Gifting",
      description:
        "Bespoke luxury gift hampers and curated presents for special occasions and corporate needs.",
      icon: <Gift size={24} />,
      link: "/services",
    },
    {
      title: "Wedding Content Creation",
      description:
        "Premium photography and videography services to capture your most precious moments.",
      icon: <Camera size={24} />,
      link: "/services",
    },
    {
      title: "Entertainment & Artist Management",
      description:
        "Access to world-class performers and entertainment options for your events.",
      icon: <Music size={24} />,
      link: "/services",
    },
    {
      title: "Private Jets & Choppers",
      description:
        "Seamless private aviation services for the ultimate in luxury travel and convenience.",
      icon: <Globe size={24} />,
      link: "/services",
    },
  ];

  const testimonials = [
    {
      quote:
        "Arigato transformed our wedding into an unforgettable experience. Their attention to detail and commitment to excellence is unmatched.",
      author: "Sarah & James",
      role: "Wedding Clients",
      rating: 5,
    },
    {
      quote:
        "The private jet arrangement was flawless. Every detail was considered, making our journey as enjoyable as the destination.",
      author: "Michael Chen",
      role: "Private Aviation Client",
      rating: 5,
    },
    {
      quote:
        "Their event concierge service took all the stress out of planning our corporate retreat. Truly a white-glove experience.",
      author: "Emma Rodriguez",
      role: "Corporate Client",
      rating: 5,
    },
  ];

  return (
    <>
      <section className="relative">
        <Carousel slides={heroSlides} autoPlay={true} interval={6000} />
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
              Exceptional Services
            </h2>
            <p className="text-primary/70">
              Discover our range of premium concierge services designed to
              elevate your lifestyle and create unforgettable experiences.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
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
                Arigato is a premium luxury concierge service catering to the
                needs of High Net Worth Individuals and Ultra High Net Worth
                Individuals. We specialize in creating bespoke experiences that
                exceed expectations.
              </p>
              <p className="text-primary/70 mb-8">
                Our team of dedicated professionals brings years of experience
                in luxury hospitality, event management, and personalized
                service to ensure that every detail is perfect.
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
                src="/logo.png?height=720&width=1280"
                alt="Luxury concierge service"
                className="w-full h-full object-cover"
              />
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
              Client Testimonials
            </h2>
            <p className="text-primary/70">
              Hear what our esteemed clients have to say about their experiences
              with Arigato.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                quote={testimonial.quote}
                author={testimonial.author}
                role={testimonial.role}
                rating={testimonial.rating}
                index={index}
              />
            ))}
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
                className="bg-background text-primary border-background hover:bg-background/90"
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
