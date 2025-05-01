"use client";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ExternalLink } from "react-feather";
import { Button } from "../components/Button";

const MembershipsPage = () => {
  const membershipPlans = [
    {
      title: "HNI Families",
      description:
        "Exclusive services for high net worth individuals and their families.",
      features: [
        "Dedicated personal concierge",
        "Priority access to all services",
        "Customized event planning",
        "VIP transportation arrangements",
        "Exclusive venue access",
        "Personalized gifting services",
      ],
      image: "/hni-families-arigatoevents.jpg",
      externalLink: "https://jetsail.in/",
    },
    {
      title: "Five Star Hotels",
      description: "Partnership programs for luxury hotels and resorts.",
      features: [
        "Guest experience enhancement",
        "Exclusive event management",
        "VIP guest services",
        "Luxury transportation",
        "Entertainment booking",
        "Custom welcome experiences",
      ],
      image: "/five-star-hotels-arigatoevents.jpg",
      externalLink: "https://jetsail.in/",
    },
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
              Membership Programs
            </h1>
            <p className="text-xl text-primary/70">
              Exclusive membership options tailored to different client needs.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="w-full px-6 flex flex-col items-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-6xl">
            {membershipPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="border border-primary/10 overflow-hidden"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={plan.image || "/placeholder.svg"}
                    alt={plan.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-serif mb-3 text-primary">
                    {plan.title}
                  </h3>
                  <p className="text-primary/70 mb-6">{plan.description}</p>

                  <h4 className="text-lg font-medium mb-4 text-primary">
                    Features
                  </h4>
                  <ul className="space-y-2 mb-8">
                    {plan.features.map((feature, i) => (
                      <li
                        key={i}
                        className="text-primary/70 text-sm flex items-start"
                      >
                        <span className="mr-2 text-primary">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Button
                    variant="default"
                    className="w-full flex items-center justify-center p-2"
                    asChild
                  >
                    <a
                      href={plan.externalLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Learn More
                    </a>
                    <ExternalLink size={16} className="ml-2" />
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-primary/5">
        <div className="w-full px-6 flex justify-center">
          <div className="max-w-3xl text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-serif mb-6 text-primary"
            >
              Customized Membership Options
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-primary/70 mb-8"
            >
              We understand that each client has unique needs. Contact us to
              discuss a customized membership plan tailored specifically to your
              requirements and preferences.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Button variant="default" size="lg" asChild>
                <Link to="/contact">Inquire About Custom Plans</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MembershipsPage;
