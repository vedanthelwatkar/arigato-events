"use client";

import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "react-feather";
import { Button } from "../components/Button";

const ServiceDetailPage = () => {
  const { id } = useParams();
  const [service, setService] = useState(null);

  const serviceDetails = {
    "event-concierge": {
      title: "Event Concierge",
      description:
        "End-to-end event planning and management services for private and corporate occasions.",
      fullDescription:
        "Our Event Concierge service provides comprehensive planning and execution for your special events. From initial concept to final details, our team handles every aspect of your event with precision and elegance. We coordinate with vendors, manage timelines, and ensure flawless execution so you can focus on enjoying your special occasion.",
      image: "/wedding1.jpg",
    },
    "content-creation": {
      title: "Wedding Content Creation",
      description:
        "Premium photography and videography services to capture your most precious moments.",
      fullDescription:
        "Our Wedding Content Creation service offers premium photography and videography to document your special day. We work with top professionals who understand how to capture the essence of your celebration, from candid moments to carefully composed portraits. Our team ensures that every significant moment is preserved beautifully for you to treasure for years to come.",
      image: "/wedding2.jpg",
    },
    "private-jets": {
      title: "Private Jets & Choppers",
      description:
        "Luxury private aviation services for seamless travel experiences.",
      fullDescription:
        "Our Private Jets & Choppers service provides exclusive air transportation for you and your guests. Whether you need to transport the wedding party to a destination venue or arrange VIP arrivals, we coordinate with top aviation providers to ensure comfortable, luxurious, and efficient travel. Every detail is handled with discretion and attention to your specific requirements.",
      image: "/wedding3.jpg",
      externalLink: "https://jetsail.com",
    },
  };

  useEffect(() => {
    if (id && serviceDetails[id]) {
      setService(serviceDetails[id]);
    } else {
      setService(null);
    }
  }, [id]);

  if (!service) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center">
        <div className="w-full px-6 py-16 flex justify-center">
          <div className="max-w-md text-center">
            <h1 className="text-3xl font-serif text-primary mb-4">
              Service Not Found
            </h1>
            <p className="text-primary/70 mb-8">
              The service you're looking for doesn't exist or has been moved.
            </p>
            <Button variant="default" asChild>
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <section className="pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="w-full px-6 flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <Link
              to="/services"
              className="inline-flex items-center text-primary/70 hover:text-primary mb-6"
            >
              <ArrowLeft size={16} className="mr-2" />
              Back to Services
            </Link>
            <h1 className="text-4xl md:text-5xl font-serif mb-6 text-primary">
              {service.title}
            </h1>
            <p className="text-xl text-primary/70">{service.description}</p>
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
              <h2 className="text-3xl font-serif mb-6 text-primary">
                About This Service
              </h2>
              <p className="text-primary/70 mb-8">{service.fullDescription}</p>

              {service.externalLink ? (
                <Button variant="default" asChild>
                  <a
                    href={service.externalLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit Partner Website
                  </a>
                </Button>
              ) : (
                <Button variant="default" asChild>
                  <Link to="/contact">Inquire About This Service</Link>
                </Button>
              )}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="relative aspect-video overflow-hidden"
            >
              <img
                src={service.image || "/placeholder.svg"}
                alt={service.title}
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="w-full px-6 flex justify-center">
          <div className="text-center max-w-3xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl font-serif mb-6 text-primary"
            >
              Ready to Experience Our Service?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-primary/70 mb-8"
            >
              Contact us today to discuss how we can tailor this service to your
              specific needs and create an unforgettable experience.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Button variant="default" size="lg" asChild>
                <Link to="/contact">Get in Touch</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceDetailPage;
