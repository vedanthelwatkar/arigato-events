"use client"

import { useState, useRef, useEffect } from "react"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { Globe, Map, Clock, Shield, Users, ChevronDown, ChevronUp, ArrowRight, Check } from "react-feather"
import { Button } from "../components/Button"
import { useNavigate } from "react-router-dom"

const PrivateJetsPage = () => {
  const [activeJet, setActiveJet] = useState(null)
  const [activeTab, setActiveTab] = useState("jets")
  const [showFaq, setShowFaq] = useState(null)
  const containerRef = useRef(null)
  const navigate = useNavigate()
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })
  
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8])
  const y = useTransform(scrollYProgress, [0, 0.2], [0, -50])

  const jets = [
    {
      id: "light-jet",
      name: "Light Jet",
      description: "Perfect for short to medium distance travel with 6-8 passengers",
      capacity: "6-8 passengers",
      range: "2,000 km",
      speed: "700 km/h",
      image: "/light-jet.jpg",
      features: [
        "Luxurious leather seating",
        "Refreshment center",
        "Entertainment system",
        "Satellite phone",
        "Air conditioning"
      ]
    },
    {
      id: "mid-size-jet",
      name: "Mid-Size Jet",
      description: "Ideal for medium distance travel with enhanced comfort for 8-10 passengers",
      capacity: "8-10 passengers",
      range: "3,500 km",
      speed: "800 km/h",
      image: "/mid-jet.jpg",
      features: [
        "Stand-up cabin",
        "Full refreshment galley",
        "Private lavatory",
        "Enhanced luggage capacity",
        "Wi-Fi connectivity"
      ]
    },
    {
      id: "heavy-jet",
      name: "Heavy Jet",
      description: "Designed for long-distance travel with maximum comfort for 10-16 passengers",
      capacity: "10-16 passengers",
      range: "7,000 km",
      speed: "850 km/h",
      image: "/heavy-jet.jpg",
      features: [
        "Multiple cabin zones",
        "Full-service galley",
        "Private sleeping quarters",
        "Conference seating options",
        "Enhanced entertainment systems"
      ]
    },
    {
      id: "helicopter",
      name: "Luxury Helicopter",
      description: "Perfect for short-distance travel and accessing remote locations",
      capacity: "4-6 passengers",
      range: "500 km",
      speed: "250 km/h",
      image: "/helicopter.jpg",
      features: [
        "Panoramic windows",
        "Noise-cancelling headsets",
        "Leather seating",
        "Air conditioning",
        "Luggage compartment"
      ]
    }
  ]

  const faqs = [
    {
      question: "How far in advance should I book a private jet?",
      answer: "We recommend booking at least 2-3 weeks in advance for standard arrangements. However, for peak wedding seasons or special events, 1-2 months advance booking is advisable. For last-minute requirements, our team can often arrange jets with as little as 24 hours notice, subject to availability."
    },
    {
      question: "Can you arrange international flights?",
      answer: "Yes, we arrange international private jet flights to and from India. Our service handles all necessary permits, customs clearance, and international flight planning. We ensure compliance with all regulations for a seamless international travel experience."
    },
    {
      question: "What amenities are available on board?",
      answer: "Our private jets offer a range of luxury amenities including gourmet catering options, premium beverages, Wi-Fi connectivity, entertainment systems, comfortable seating, and sleeping arrangements on larger aircraft. We can customize the onboard experience to match your wedding theme or special requirements."
    },
    {
      question: "How do you ensure safety and security?",
      answer: "Safety is our highest priority. We work exclusively with operators who maintain the highest safety ratings and standards. All aircraft undergo rigorous maintenance checks, and crews are extensively trained and experienced. We also offer additional security services for high-profile clients upon request."
    },
    {
      question: "Can you accommodate special requests?",
      answer: "Absolutely. From custom catering and special decorations to specific routing requests and ground transportation coordination, we pride ourselves on accommodating special requests. Our concierge team works closely with you to ensure every detail meets your expectations."
    }
  ]

  const destinations = [
    { name: "Udaipur", image: "/udaipur.jpg" },
    { name: "Jaipur", image: "/jaipur.jpg" },
    { name: "Goa", image: "/goa.jpg" },
    { name: "Kerala", image: "/kerala.jpg" },
    { name: "Jodhpur", image: "/jodhpur.jpg" },
    { name: "Mussoorie", image: "/mussoorie.jpg" }
  ]

  const toggleFaq = (index) => {
    if (showFaq === index) {
      setShowFaq(null)
    } else {
      setShowFaq(index)
    }
  }

  const handleJetClick = (id) => {
    setActiveJet(activeJet === id ? null : id)
  }

  return (
    <div ref={containerRef} className="min-h-screen">
      {/* Hero Section with Parallax */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <motion.div 
          className="absolute inset-0 z-0"
          style={{ 
            backgroundImage: `url('/private-jet-hero.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity,
            scale,
            y
          }}
        />
        <div className="absolute inset-0 bg-black/50 z-10" />
        
        <div className="relative z-20 text-center px-6 max-w-4xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-serif mb-6 text-white"
          >
            Private Jets & Choppers
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-white/90 mb-8"
          >
            Elevate your wedding experience with luxury air transportation
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button 
              variant="default" 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90"
              asChild
            >
              <a href="#fleet">Explore Our Fleet</a>
            </Button>
          </motion.div>
        </div>
        
        <motion.div 
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.5, 
            delay: 1,
            repeat: Infinity,
            repeatType: "reverse",
            repeatDelay: 0.5
          }}
        >
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 5v14M5 12l7 7 7-7"/>
          </svg>
        </motion.div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-serif mb-4 text-primary">Luxury Air Transportation</h2>
            <p className="text-primary/70 max-w-3xl mx-auto">
              We provide seamless private aviation services for weddings and special events, ensuring your guests travel in comfort and style.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-lg border border-primary/10"
            >
              <div className="text-primary mb-4">
                <Globe size={40} />
              </div>
              <h3 className="text-xl font-serif mb-3 text-primary">Private Jets</h3>
              <p className="text-primary/70 mb-4">
                Luxury jets for medium to long-distance travel, perfect for transporting wedding parties or VIP guests in comfort and privacy.
              </p>
              <ul className="space-y-2">
                {["Light Jets", "Mid-Size Jets", "Heavy Jets"].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <Check size={16} className="text-primary mr-2 mt-1 flex-shrink-0" />
                    <span className="text-primary/70">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-lg border border-primary/10"
            >
              <div className="text-primary mb-4">
                <Map size={40} />
              </div>
              <h3 className="text-xl font-serif mb-3 text-primary">Helicopter Services</h3>
              <p className="text-primary/70 mb-4">
                Luxury helicopters for short-distance travel, ideal for dramatic arrivals, venue transfers, or accessing remote locations.
              </p>
              <ul className="space-y-2">
                {["Grand Entrances", "Aerial Photography", "Remote Venue Access"].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <Check size={16} className="text-primary mr-2 mt-1 flex-shrink-0" />
                    <span className="text-primary/70">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-lg border border-primary/10"
            >
              <div className="text-primary mb-4">
                <Clock size={40} />
              </div>
              <h3 className="text-xl font-serif mb-3 text-primary">Concierge Services</h3>
              <p className="text-primary/70 mb-4">
                Comprehensive planning and coordination for all your air transportation needs, from booking to arrival.
              </p>
              <ul className="space-y-2">
                {["Flight Planning", "Ground Transportation", "Customs Assistance"].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <Check size={16} className="text-primary mr-2 mt-1 flex-shrink-0" />
                    <span className="text-primary/70">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Fleet Showcase */}
      <section id="fleet" className="py-24 bg-primary/5">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-serif mb-4 text-primary">Our Fleet</h2>
            <p className="text-primary/70 max-w-3xl mx-auto">
              Explore our selection of luxury aircraft available for your wedding transportation needs.
            </p>
          </motion.div>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button
              onClick={() => setActiveTab("jets")}
              className={`px-6 py-3 rounded-full transition-colors ${
                activeTab === "jets" 
                  ? "bg-primary text-white" 
                  : "bg-white text-primary hover:bg-primary/10"
              }`}
            >
              <span className="flex items-center">
                <Globe size={18} className="mr-2" />
                Private Jets
              </span>
            </button>
            <button
              onClick={() => setActiveTab("helicopters")}
              className={`px-6 py-3 rounded-full transition-colors ${
                activeTab === "helicopters" 
                  ? "bg-primary text-white" 
                  : "bg-white text-primary hover:bg-primary/10"
              }`}
            >
              <span className="flex items-center">
                <Globe size={18} className="mr-2 rotate-[30deg]" />
                Helicopters
              </span>
            </button>
          </div>
          
          <AnimatePresence mode="wait">
            {activeTab === "jets" && (
              <motion.div
                key="jets"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {jets.filter(jet => jet.id !== "helicopter").map((jet, index) => (
                    <motion.div
                      key={jet.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className={`bg-white rounded-lg overflow-hidden shadow-lg border ${
                        activeJet === jet.id ? "border-primary" : "border-primary/10"
                      } transition-all`}
                      onClick={() => handleJetClick(jet.id)}
                    >
                      <div className="relative aspect-video overflow-hidden">
                        <img 
                          src={jet.image || "/placeholder.svg"} 
                          alt={jet.name} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-serif mb-2 text-primary">{jet.name}</h3>
                        <p className="text-primary/70 text-sm mb-4">{jet.description}</p>
                        
                        <div className="flex justify-between mb-4">
                          <div className="text-center">
                            <p className="text-xs text-primary/50">Capacity</p>
                            <p className="text-sm font-medium text-primary">{jet.capacity}</p>
                          </div>
                          <div className="text-center">
                            <p className="text-xs text-primary/50">Range</p>
                            <p className="text-sm font-medium text-primary">{jet.range}</p>
                          </div>
                          <div className="text-center">
                            <p className="text-xs text-primary/50">Speed</p>
                            <p className="text-sm font-medium text-primary">{jet.speed}</p>
                          </div>
                        </div>
                        
                        <button className="w-full flex items-center justify-center text-primary text-sm font-medium">
                          {activeJet === jet.id ? (
                            <>
                              Show Less <ChevronUp size={16} className="ml-1" />
                            </>
                          ) : (
                            <>
                              View Details <ChevronDown size={16} className="ml-1" />
                            </>
                          )}
                        </button>
                        
                        <AnimatePresence>
                          {activeJet === jet.id && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3 }}
                              className="mt-4 pt-4 border-t border-primary/10"
                            >
                              <h4 className="text-sm font-medium text-primary mb-2">Features:</h4>
                              <ul className="space-y-1">
                                {jet.features.map((feature, i) => (
                                  <li key={i} className="flex items-start text-sm">
                                    <Check size={14} className="text-primary mr-2 mt-1 flex-shrink-0" />
                                    <span className="text-primary/70">{feature}</span>
                                  </li>
                                ))}
                              </ul>
                              <div className="mt-4 pt-4 border-t border-primary/10">
                                <Button variant="default" size="sm" className="w-full" asChild 
                                onClick={()=>navigate("/contact")}>
                                Inquire About This Aircraft
                                </Button>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
            
            {activeTab === "helicopters" && (
              <motion.div
                key="helicopters"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {jets.filter(jet => jet.id === "helicopter").map((jet, index) => (
                    <motion.div
                      key={jet.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className={`bg-white rounded-lg overflow-hidden shadow-lg border ${
                        activeJet === jet.id ? "border-primary" : "border-primary/10"
                      } transition-all`}
                      onClick={() => handleJetClick(jet.id)}
                    >
                      <div className="relative aspect-video overflow-hidden">
                        <img 
                          src={jet.image || "/placeholder.svg"} 
                          alt={jet.name} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-serif mb-2 text-primary">{jet.name}</h3>
                        <p className="text-primary/70 text-sm mb-4">{jet.description}</p>
                        
                        <div className="flex justify-between mb-4">
                          <div className="text-center">
                            <p className="text-xs text-primary/50">Capacity</p>
                            <p className="text-sm font-medium text-primary">{jet.capacity}</p>
                          </div>
                          <div className="text-center">
                            <p className="text-xs text-primary/50">Range</p>
                            <p className="text-sm font-medium text-primary">{jet.range}</p>
                          </div>
                          <div className="text-center">
                            <p className="text-xs text-primary/50">Speed</p>
                            <p className="text-sm font-medium text-primary">{jet.speed}</p>
                          </div>
                        </div>
                        
                        <button className="w-full flex items-center justify-center text-primary text-sm font-medium">
                          {activeJet === jet.id ? (
                            <>
                              Show Less <ChevronUp size={16} className="ml-1" />
                            </>
                          ) : (
                            <>
                              View Details <ChevronDown size={16} className="ml-1" />
                            </>
                          )}
                        </button>
                        
                        <AnimatePresence>
                          {activeJet === jet.id && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3 }}
                              className="mt-4 pt-4 border-t border-primary/10"
                            >
                              <h4 className="text-sm font-medium text-primary mb-2">Features:</h4>
                              <ul className="space-y-1">
                                {jet.features.map((feature, i) => (
                                  <li key={i} className="flex items-start text-sm">
                                    <Check size={14} className="text-primary mr-2 mt-1 flex-shrink-0" />
                                    <span className="text-primary/70">{feature}</span>
                                  </li>
                                ))}
                              </ul>
                              <div className="mt-4 pt-4 border-t border-primary/10">
                                <Button variant="default" size="sm" className="w-full" asChild
                                onClick={()=>navigate("/contact")}>
                                  Inquire About This Aircraft
                                </Button>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </motion.div>
                  ))}
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-lg overflow-hidden shadow-lg border border-primary/10 p-6 flex flex-col justify-center"
                  >
                    <h3 className="text-xl font-serif mb-4 text-primary">Custom Helicopter Solutions</h3>
                    <p className="text-primary/70 mb-6">
                      We offer a range of helicopter options beyond our standard fleet. Contact us to discuss your specific requirements for custom helicopter arrangements.
                    </p>
                    <div className="mt-auto">
                      <Button variant="default" asChild onClick={()=>navigate("/contact")}>
                        Discuss Custom Options
                      </Button>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-serif mb-6 text-primary">Why Choose Private Aviation</h2>
              
              <div className="space-y-6">
                <div className="flex">
                  <div className="mr-4 text-primary">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-2 text-primary">Time Efficiency</h3>
                    <p className="text-primary/70">
                      Skip long security lines and waiting times. Fly on your schedule, not the airline's, saving hours of valuable time.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="mr-4 text-primary">
                    <Shield size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-2 text-primary">Privacy & Security</h3>
                    <p className="text-primary/70">
                      Enjoy complete privacy for you and your guests, away from public terminals and crowded commercial flights.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="mr-4 text-primary">
                    <Map size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-2 text-primary">Access to Remote Locations</h3>
                    <p className="text-primary/70">
                      Reach exclusive wedding venues that commercial airlines don't service, opening up possibilities for truly unique celebrations.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="mr-4 text-primary">
                    <Users size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-2 text-primary">Personalized Experience</h3>
                    <p className="text-primary/70">
                      Customize every aspect of the flight experience, from catering to cabin configuration, to match your wedding theme.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-[4/3] overflow-hidden rounded-lg shadow-xl">
                <img 
                  src="/jet-interior.jpg" 
                  alt="Luxury jet interior" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-2/3 aspect-video overflow-hidden rounded-lg shadow-xl border-4 border-background">
                <img 
                  src="/helicopter-landing.jpg" 
                  alt="Helicopter landing at venue" 
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Popular Destinations */}
      <section className="py-24 bg-primary/5">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-serif mb-4 text-primary">Popular Wedding Destinations</h2>
            <p className="text-primary/70 max-w-3xl mx-auto">
              Explore some of the most sought-after wedding destinations accessible by our private aviation services.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {destinations.map((destination, index) => (
              <motion.div
                key={destination.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-[3/2] overflow-hidden rounded-lg shadow-lg">
                  <img 
                    src={destination.image || "/placeholder.svg"} 
                    alt={destination.name} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                    <h3 className="text-xl font-medium text-white">{destination.name}</h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-background">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-serif mb-4 text-primary">Frequently Asked Questions</h2>
            <p className="text-primary/70 max-w-3xl mx-auto">
              Find answers to common questions about our private aviation services.
            </p>
          </motion.div>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="border border-primary/10 rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between p-6 text-left bg-white hover:bg-primary/5 transition-colors"
                >
                  <h3 className="text-lg font-medium text-primary">{faq.question}</h3>
                  <span className="text-primary ml-4">
                    {showFaq === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </span>
                </button>
                
                <AnimatePresence>
                  {showFaq === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="p-6 border-t border-primary/10 bg-white">
                        <p className="text-primary/70">{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-serif mb-6">Ready to Elevate Your Wedding Experience?</h2>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto">
              Contact us today to discuss how our private aviation services can add luxury, convenience, and unforgettable moments to your wedding celebration.
            </p>
            <Button 
              variant="outline" 
              size="lg" 
              className="bg-white text-primary border-white hover:bg-white/90"
              asChild
              onClick={()=>navigate("/contact")}
            >
             Request a Quote
            </Button>
          </motion.div>
        </div>
      </section>

    </div>
  )
}

export default PrivateJetsPage
