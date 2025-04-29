"use client";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Users, Award, Shield, Globe } from "react-feather";
import { Button } from "../components/Button";

const AboutPage = () => {
  const teamMembers = [
    {
      name: "Akira Tanaka",
      role: "Founder & CEO",
      image: "/logo.png?height=400&width=400",
    },
    {
      name: "Sophia Chen",
      role: "Head of Events",
      image: "/logo.png?height=400&width=400",
    },
    {
      name: "James Wilson",
      role: "Luxury Travel Director",
      image: "/logo.png?height=400&width=400",
    },
    {
      name: "Priya Sharma",
      role: "Client Relations Manager",
      image: "/logo.png?height=400&width=400",
    },
  ];

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
              Redefining luxury concierge services for the world's most
              discerning clientele.
            </p>
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
              className="order-2 lg:order-1"
            >
              <h2 className="text-3xl md:text-4xl font-serif mb-6 text-primary">
                Our Story
              </h2>
              <p className="text-primary/70 mb-4">
                Founded in 2020, Arigato was born from a vision to create a
                concierge service that truly understands the needs and desires
                of high-net-worth individuals. Our founder, Akira Tanaka,
                recognized a gap in the market for truly personalized luxury
                services that go beyond the standard offerings.
              </p>
              <p className="text-primary/70 mb-4">
                The name "Arigato" (ありがとう), meaning "thank you" in
                Japanese, embodies our philosophy of gratitude and appreciation
                for our clients' trust. We believe that true luxury lies in the
                details, the personal touches, and the seamless experiences that
                leave lasting impressions.
              </p>
              <p className="text-primary/70">
                Today, Arigato has grown into a premier luxury concierge service
                with a global reach, serving clients who expect nothing but the
                best. Our team of dedicated professionals brings together
                expertise from various luxury sectors to create bespoke
                experiences that exceed expectations.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <div className="relative overflow-hidden aspect-square">
                <img
                  src="/logo.png?height=800&width=800"
                  alt="Arigato founder"
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
              Meet Our Team
            </h2>
            <p className="text-primary/70">
              The passionate professionals behind Arigato's exceptional service.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="mb-4 rounded-full overflow-hidden aspect-square max-w-[200px] mx-auto">
                  <img
                    src={member.image || "/logo.png"}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-medium text-primary">
                  {member.name}
                </h3>
                <p className="text-sm text-primary/70">{member.role}</p>
              </motion.div>
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
              defines Arigato.
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
