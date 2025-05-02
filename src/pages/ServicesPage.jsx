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
      fullDescription:
        "Our RSVP Management service provides a seamless experience for tracking and managing your guest list. We handle all communication with your guests, ensuring timely responses and accurate attendance information. Our digital platform allows you to view real-time updates and make adjustments as needed.",
      icon: <Users size={24} />,
      category: "Event Planning",
      image: "/service-rsvp-arigatoevents.jpg",
    },
    {
      title: "Event Concierge",
      description:
        "End-to-end event planning and management services for private and corporate occasions.",
      fullDescription:
        "Our Event Concierge service offers comprehensive planning and execution for your special events. From initial concept to final details, our team handles every aspect with precision and elegance. We coordinate with vendors, manage timelines, and ensure flawless execution so you can focus on enjoying your special occasion.",
      icon: <Calendar size={24} />,
      category: "Event Planning",
      image: "/service-event-arigatoevents.jpg",
    },
    {
      title: "Guest Travel & Logistics",
      description:
        "Seamless transportation, accommodation, and itinerary planning for your guests.",
      fullDescription:
        "Our Guest Travel & Logistics service takes care of all transportation and accommodation needs for your guests. We arrange airport transfers, coordinate hotel bookings, and create detailed itineraries to ensure everyone arrives on time and enjoys a comfortable stay. Our team handles all the complex logistics so you don't have to.",
      icon: <Briefcase size={24} />,
      category: "Transportation",
      image: "/service-logistics.jpg",
    },
    {
      title: "Wedding Private Jets & Choppers",
      description:
        "Luxury private aviation services for seamless travel experiences.",
      fullDescription:
        "Our Private Jets & Choppers service provides exclusive air transportation for you and your guests. Whether you need to transport the wedding party to a destination venue or arrange VIP arrivals, we coordinate with top aviation providers to ensure comfortable, luxurious, and efficient travel. Every detail is handled with discretion and attention to your specific requirements.",
      icon: <Globe size={24} />,
      category: "Transportation",
      image: "/service-jets.jpg",
    },
    {
      title: "Backstage & Showrun",
      description:
        "Professional event production and backstage management services.",
      fullDescription:
        "Our Backstage & Showrun service ensures your event production runs smoothly from start to finish. Our experienced team manages all technical aspects, coordinates performers, and handles timing with precision. We work behind the scenes to create seamless transitions and flawless execution of your event program.",
      icon: <Briefcase size={24} />,
      category: "Event Planning",
      image: "/service-backstage.jpg",
    },
    {
      title: "Hampers & Gifting",
      description:
        "Bespoke luxury gift hampers and personalized presents for special occasions.",
      fullDescription:
        "Our Hampers & Gifting service creates bespoke luxury gift packages for your guests. Each hamper is thoughtfully curated with premium items that reflect your event's theme and your appreciation for attendees. We handle everything from design and sourcing to packaging and delivery, ensuring a memorable unboxing experience.",
      icon: <Gift size={24} />,
      category: "Experiences",
      image: "/service-gifting.jpg",
    },
    {
      title: "Wedding Content Creation",
      description:
        "Premium photography and videography services to capture your most precious moments.",
      fullDescription:
        "Our Wedding Content Creation service offers premium photography and videography to document your special day. We work with top professionals who understand how to capture the essence of your celebration, from candid moments to carefully composed portraits. Our team ensures that every significant moment is preserved beautifully for you to treasure for years to come.",
      icon: <Camera size={24} />,
      category: "Media & Entertainment",
      image: "/service-content.jpg",
    },
    {
      title: "Entertainment & Artist Management",
      description:
        "Booking and management of world-class performers and entertainment for your events.",
      fullDescription:
        "Our Entertainment & Artist Management service connects you with world-class performers and manages all aspects of their participation in your event. From initial booking to day-of coordination, we handle contracts, technical requirements, and logistics. Our extensive network includes musicians, dancers, DJs, and specialty performers to create the perfect atmosphere.",
      icon: <Music size={24} />,
      category: "Media & Entertainment",
      image: "/service-entertainment.jpg",
    },
    {
      title: "F&B & Bar Management",
      description:
        "Curated dining experiences and premium bar services for your events.",
      fullDescription:
        "Our F&B & Bar Management service creates exceptional culinary experiences for your event. We work with top chefs and mixologists to design custom menus and signature cocktails that complement your event theme. Our team manages all aspects of food and beverage service, ensuring impeccable presentation and service throughout your event.",
      icon: <Coffee size={24} />,
      category: "Event Planning",
      image: "/service-fb.jpg",
    },
    {
      title: "Salon Coordination",
      description:
        "Access to top stylists and beauty professionals for your special occasions.",
      fullDescription:
        "Our Salon Coordination service provides access to elite hair stylists, makeup artists, and beauty professionals for you and your guests. We create custom beauty schedules, arrange private salon spaces, and ensure everyone looks their best for your special event. Our network includes the most sought-after beauty professionals who specialize in event styling.",
      icon: <Scissors size={24} />,
      category: "Experiences",
      image: "/service-salon.jpg",
    },
    {
      title: "Destination Venue Curation",
      description:
        "Access to exclusive venues worldwide, perfectly matched to your event requirements.",
      fullDescription:
        "Our Destination Venue Curation service helps you discover and secure the perfect location for your event. With access to exclusive properties worldwide, we match venues to your specific vision and requirements. Our team handles all negotiations, contracts, and logistics to ensure your chosen venue is prepared exactly to your specifications.",
      icon: <MapPin size={24} />,
      category: "Event Planning",
      image: "/service-venue.jpg",
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
          className={`
            py-16 md:py-24 ${categoryIndex % 2 === 1 ? "bg-primary/5" : ""}`}
        >
          <div className="w-full px-6 flex flex-col items-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
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
                  fullDescription={service.fullDescription}
                  icon={service.icon}
                  image={service.image}
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
                  className="bg-secondary text-white border-secondary hover:bg-secondary/10"
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
                src="/customized-solutions-arigatoevents.jpg"
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
